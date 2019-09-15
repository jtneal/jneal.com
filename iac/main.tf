provider "aws" {
  profile = "default"
  region  = "us-east-2"
}

locals {
  name    = "prod-jneal"
  version = "e6a6eed"
  vpc     = "vpc-3421f35c"
  subnets = ["subnet-a128f3c9", "subnet-5a958821", "subnet-322b7a7f"]
}

############################################################
# ECR Repository
############################################################

# https://www.terraform.io/docs/providers/aws/r/ecr_repository.html
resource "aws_ecr_repository" "primary_repo" {
  name = "${local.name}-repo"
}

# https://www.terraform.io/docs/providers/template/d/file.html
data "template_file" "ecr_lifecycle_policy" {
  template = "${file("${path.module}/ecr_lifecycle_policy.json")}"
}

# https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html
resource "aws_ecr_lifecycle_policy" "primary_repo_lifecycle_policy" {
  repository = "${aws_ecr_repository.primary_repo.name}"
  policy     = "${data.template_file.ecr_lifecycle_policy.rendered}"
}

############################################################
# ECR User
############################################################

# https://www.terraform.io/docs/providers/aws/r/iam_user.html
resource "aws_iam_user" "ecr_user" {
  name = "user-${aws_ecr_repository.primary_repo.name}"
}

# https://www.terraform.io/docs/providers/aws/r/iam_access_key.html
resource "aws_iam_access_key" "ecr_key" {
  user = "${aws_iam_user.ecr_user.name}"
}

# https://www.terraform.io/docs/providers/template/d/file.html
data "template_file" "ecr_user_policy" {
  template = "${file("${path.module}/ecr_user_policy.json")}"

  vars = {
    ecr_arn = "${aws_ecr_repository.primary_repo.arn}"
  }
}

# https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html
resource "aws_iam_user_policy" "ecr_user_policy" {
  name   = "policy-${aws_iam_user.ecr_user.name}"
  user   = "${aws_iam_user.ecr_user.name}"
  policy = "${data.template_file.ecr_user_policy.rendered}"
}

############################################################
# Stop here and push your code to the ECR
# Once complete, update your version in locals
# Then run the rest of the modules
############################################################

############################################################
# VPC
############################################################

# https://www.terraform.io/docs/providers/aws/d/vpc.html
data "aws_vpc" "selected" {
  id = "${local.vpc}"
}

############################################################
# ECS Role
############################################################

# https://www.terraform.io/docs/providers/template/d/file.html
data "template_file" "ecs_task_policy" {
  template = "${file("${path.module}/ecs_task_policy.json")}"
}

# https://www.terraform.io/docs/providers/aws/r/iam_role.html
resource "aws_iam_role" "ecs_task" {
  name               = "role-${local.name}"
  assume_role_policy = "${data.template_file.ecs_task_policy.rendered}"
  path               = "/ECS/"
}

# https://www.terraform.io/docs/providers/aws/r/iam_role.html
resource "aws_iam_role" "ecs_task_execution" {
  name               = "role-${local.name}-task-execution"
  assume_role_policy = "${data.template_file.ecs_task_policy.rendered}"
  path               = "/ECS/"
}

# https://www.terraform.io/docs/providers/template/d/file.html
data "template_file" "ecs_task_execution_policy" {
  template = "${file("${path.module}/ecs_task_execution_policy.json")}"

  vars = {
    ecr_arn = "${aws_ecr_repository.primary_repo.arn}"
  }
}

# https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html
resource "aws_iam_role_policy" "ecs_task_definition_policy" {
  name   = "policy-${local.name}-task-execution"
  role   = "${aws_iam_role.ecs_task_execution.name}"
  policy = "${data.template_file.ecs_task_execution_policy.rendered}"
}

############################################################
# Application Load Balancer
############################################################

# https://www.terraform.io/docs/providers/aws/r/security_group.html
resource "aws_security_group" "alb" {
  name   = "alb-${local.name}"
  vpc_id = "${data.aws_vpc.selected.id}"
}

# https://www.terraform.io/docs/providers/aws/r/security_group_rule.html
resource "aws_security_group_rule" "outbound_all" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = "${aws_security_group.alb.id}"
}

# https://www.terraform.io/docs/providers/aws/r/security_group_rule.html
resource "aws_security_group_rule" "inbound_http" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = "${aws_security_group.alb.id}"
}

# https://www.terraform.io/docs/providers/aws/r/security_group_rule.html
resource "aws_security_group_rule" "inbound_https" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = "${aws_security_group.alb.id}"
}

# https://www.terraform.io/docs/providers/aws/r/lb.html
resource "aws_lb" "alb" {
  name            = "${local.name}"
  security_groups = ["${aws_security_group.alb.id}"]
  subnets         = local.subnets
}

# https://www.terraform.io/docs/providers/aws/r/lb_listener.html
resource "aws_lb_listener" "http" {
  load_balancer_arn = "${aws_lb.alb.arn}"
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

# https://www.terraform.io/docs/providers/aws/d/acm_certificate.html
data "aws_acm_certificate" "certs" {
  domain      = "jneal.com"
  types       = ["AMAZON_ISSUED"]
  most_recent = true
}

# https://www.terraform.io/docs/providers/aws/r/lb_listener.html
resource "aws_lb_listener" "https" {
  load_balancer_arn = "${aws_lb.alb.arn}"
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = "${data.aws_acm_certificate.certs.arn}"

  default_action {
    type = "fixed-response"

    fixed_response {
      content_type = "text/plain"
      status_code  = "404"
    }
  }
}

############################################################
# Fargate Task
############################################################

# https://www.terraform.io/docs/providers/template/d/file.html
data "template_file" "ecs_task_definition" {
  template = "${file("${path.module}/ecs_task_definition.json")}"

  vars = {
    docker_repository = "${aws_ecr_repository.primary_repo.repository_url}"
    app_version       = "${local.version}"
    awslogs_group     = "${aws_cloudwatch_log_group.default.name}"
  }
}

# https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html
resource "aws_ecs_task_definition" "service" {
  family                   = "${local.name}"
  container_definitions    = "${data.template_file.ecs_task_definition.rendered}"
  task_role_arn            = "${aws_iam_role.ecs_task.arn}"
  execution_role_arn       = "${aws_iam_role.ecs_task_execution.arn}"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 256
  memory                   = 512
}

############################################################
# Fargate Service
############################################################

# https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html
resource "aws_ecs_cluster" "prod" {
  name = "prod-fargate-cluster"
}

# https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html
resource "aws_cloudwatch_log_group" "default" {
  name              = "${local.name}"
  retention_in_days = 7
}

# https://www.terraform.io/docs/providers/aws/d/route53_zone.html
data "aws_route53_zone" "jnealcom" {
  name = "jneal.com."
}

# https://www.terraform.io/docs/providers/aws/d/route53_zone.html
data "aws_route53_zone" "jnealnet" {
  name = "jneal.net."
}

# https://www.terraform.io/docs/providers/aws/d/route53_zone.html
data "aws_route53_zone" "jnealorg" {
  name = "jneal.org."
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealcom_apex" {
  zone_id = "${data.aws_route53_zone.jnealcom.zone_id}"
  name    = "jneal.com"
  type    = "A"

  alias {
    name                   = "${aws_lb.alb.dns_name}"
    zone_id                = "${aws_lb.alb.zone_id}"
    evaluate_target_health = false
  }
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealcom_www" {
  zone_id = "${data.aws_route53_zone.jnealcom.zone_id}"
  name    = "www.jneal.com"
  type    = "CNAME"
  ttl     = "300"
  records = ["jneal.com."]
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealcom_blog" {
  zone_id = "${data.aws_route53_zone.jnealcom.zone_id}"
  name    = "blog.jneal.com"
  type    = "CNAME"
  ttl     = "300"
  records = ["jnealcom.wordpress.com."]
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealcom_mx" {
  zone_id = "${data.aws_route53_zone.jnealcom.zone_id}"
  name    = "jneal.com"
  type    = "MX"
  ttl     = "300"
  records = [
    "1 aspmx.l.google.com.",
    "5 alt1.aspmx.l.google.com.",
    "5 alt2.aspmx.l.google.com.",
    "10 aspmx2.googlemail.com.",
    "10 aspmx3.googlemail.com."
  ]
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealnet_apex" {
  zone_id = "${data.aws_route53_zone.jnealnet.zone_id}"
  name    = "jneal.net"
  type    = "A"

  alias {
    name                   = "${aws_lb.alb.dns_name}"
    zone_id                = "${aws_lb.alb.zone_id}"
    evaluate_target_health = false
  }
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealnet_www" {
  zone_id = "${data.aws_route53_zone.jnealnet.zone_id}"
  name    = "www.jneal.net"
  type    = "CNAME"
  ttl     = "300"
  records = ["jneal.net."]
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealnet_blog" {
  zone_id = "${data.aws_route53_zone.jnealnet.zone_id}"
  name    = "blog.jneal.net"
  type    = "CNAME"
  ttl     = "300"
  records = ["jnealcom.wordpress.com."]
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealorg_apex" {
  zone_id = "${data.aws_route53_zone.jnealorg.zone_id}"
  name    = "jneal.org"
  type    = "A"

  alias {
    name                   = "${aws_lb.alb.dns_name}"
    zone_id                = "${aws_lb.alb.zone_id}"
    evaluate_target_health = false
  }
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealorg_www" {
  zone_id = "${data.aws_route53_zone.jnealorg.zone_id}"
  name    = "www.jneal.org"
  type    = "CNAME"
  ttl     = "300"
  records = ["jneal.org."]
}

# https://www.terraform.io/docs/providers/aws/r/route53_record.html
resource "aws_route53_record" "jnealorg_blog" {
  zone_id = "${data.aws_route53_zone.jnealorg.zone_id}"
  name    = "blog.jneal.org"
  type    = "CNAME"
  ttl     = "300"
  records = ["jnealcom.wordpress.com."]
}

# https://www.terraform.io/docs/providers/aws/r/security_group.html
resource "aws_security_group" "fargate" {
  name   = "fargate-${local.name}"
  vpc_id = "${data.aws_vpc.selected.id}"
}

# https://www.terraform.io/docs/providers/aws/r/security_group_rule.html
resource "aws_security_group_rule" "fargate_outbound_all" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = "${aws_security_group.fargate.id}"
}

# https://www.terraform.io/docs/providers/aws/r/security_group_rule.html
resource "aws_security_group_rule" "fargate_allow_cluster_traffic" {
  type              = "ingress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  self              = true
  security_group_id = "${aws_security_group.fargate.id}"
}

# https://www.terraform.io/docs/providers/aws/r/security_group_rule.html
resource "aws_security_group_rule" "fargate_allow_alb_traffic" {
  type                     = "ingress"
  from_port                = 0
  to_port                  = 0
  protocol                 = "-1"
  security_group_id        = "${aws_security_group.fargate.id}"
  source_security_group_id = "${aws_security_group.alb.id}"
}

# https://www.terraform.io/docs/providers/aws/r/lb_target_group.html
resource "aws_lb_target_group" "fargate" {
  name                 = "${local.name}"
  port                 = 80
  protocol             = "HTTP"
  target_type          = "ip"
  vpc_id               = "${data.aws_vpc.selected.id}"
  deregistration_delay = 30
  depends_on           = ["aws_lb.alb"]

  health_check {
    path                = "/healthcheck"
    unhealthy_threshold = 2
    matcher             = "200"
  }

  stickiness {
    type            = "lb_cookie"
    cookie_duration = 86400
    enabled         = false
  }
}

# https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
resource "aws_lb_listener_rule" "listener_to_container" {
  listener_arn = "${aws_lb_listener.https.arn}"

  action {
    type             = "forward"
    target_group_arn = "${aws_lb_target_group.fargate.arn}"
  }

  condition {
    field  = "host-header"
    values = ["${aws_route53_record.jnealcom_apex.fqdn}"]
  }
}

# https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
resource "aws_lb_listener_rule" "www_redirect" {
  listener_arn = "${aws_lb_listener.https.arn}"

  action {
    type = "redirect"

    redirect {
      host        = "${aws_route53_record.jnealcom_apex.fqdn}"
      status_code = "HTTP_301"
    }
  }

  condition {
    field  = "host-header"
    values = ["${aws_route53_record.jnealcom_www.fqdn}"]
  }
}

# https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
resource "aws_lb_listener_rule" "jnealnet_redirect" {
  listener_arn = "${aws_lb_listener.https.arn}"

  action {
    type = "redirect"

    redirect {
      host        = "${aws_route53_record.jnealcom_apex.fqdn}"
      status_code = "HTTP_301"
    }
  }

  condition {
    field  = "host-header"
    values = ["${aws_route53_record.jnealnet_apex.fqdn}"]
  }
}

# https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
resource "aws_lb_listener_rule" "jnealnet_www_redirect" {
  listener_arn = "${aws_lb_listener.https.arn}"

  action {
    type = "redirect"

    redirect {
      host        = "${aws_route53_record.jnealcom_apex.fqdn}"
      status_code = "HTTP_301"
    }
  }

  condition {
    field  = "host-header"
    values = ["${aws_route53_record.jnealnet_www.fqdn}"]
  }
}

# https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
resource "aws_lb_listener_rule" "jnealorg_redirect" {
  listener_arn = "${aws_lb_listener.https.arn}"

  action {
    type = "redirect"

    redirect {
      host        = "${aws_route53_record.jnealcom_apex.fqdn}"
      status_code = "HTTP_301"
    }
  }

  condition {
    field  = "host-header"
    values = ["${aws_route53_record.jnealorg_apex.fqdn}"]
  }
}

# https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
resource "aws_lb_listener_rule" "jnealorg_www_redirect" {
  listener_arn = "${aws_lb_listener.https.arn}"

  action {
    type = "redirect"

    redirect {
      host        = "${aws_route53_record.jnealcom_apex.fqdn}"
      status_code = "HTTP_301"
    }
  }

  condition {
    field  = "host-header"
    values = ["${aws_route53_record.jnealorg_www.fqdn}"]
  }
}

# https://www.terraform.io/docs/providers/aws/r/ecs_service.html
resource "aws_ecs_service" "fargate" {
  name                               = "${local.name}"
  cluster                            = "${aws_ecs_cluster.prod.arn}"
  task_definition                    = "${aws_ecs_task_definition.service.arn}"
  desired_count                      = 3
  launch_type                        = "FARGATE"
  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 100
  health_check_grace_period_seconds  = 0
  depends_on                         = ["aws_lb_target_group.fargate"]

  network_configuration {
    subnets          = local.subnets
    security_groups  = ["${aws_security_group.fargate.id}"]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = "${aws_lb_target_group.fargate.arn}"
    container_name   = "web"
    container_port   = 80
  }

  lifecycle {
    ignore_changes = ["desired_count"]
  }
}

# https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html
resource "aws_appautoscaling_target" "ecs_target" {
  min_capacity       = 3
  max_capacity       = 6
  resource_id        = "service/${aws_ecs_cluster.prod.name}/${aws_ecs_service.fargate.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}

# https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html
resource "aws_appautoscaling_policy" "ecs_policy" {
  name               = "cpu-scaling"
  policy_type        = "TargetTrackingScaling"
  resource_id        = "service/${aws_ecs_cluster.prod.name}/${aws_ecs_service.fargate.name}"
  scalable_dimension = "${aws_appautoscaling_target.ecs_target.scalable_dimension}"
  service_namespace  = "${aws_appautoscaling_target.ecs_target.service_namespace}"

  target_tracking_scaling_policy_configuration {
    target_value       = 70
    scale_in_cooldown  = 90
    scale_out_cooldown = 45

    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
  }
}

############################################################
# ECS User
############################################################

# https://www.terraform.io/docs/providers/aws/r/iam_user.html
resource "aws_iam_user" "ecs_user" {
  name = "user-${local.name}"
}

# https://www.terraform.io/docs/providers/aws/r/iam_access_key.html
resource "aws_iam_access_key" "ecs_key" {
  user = "${aws_iam_user.ecs_user.name}"
}

# https://www.terraform.io/docs/providers/template/d/file.html
data "template_file" "ecs_user_policy" {
  template = "${file("${path.module}/ecs_user_policy.json")}"

  vars = {
    ecs_arn = "${replace(aws_ecs_service.fargate.id, aws_ecs_service.fargate.name, format("%s/%s", aws_ecs_cluster.prod.name, aws_ecs_service.fargate.name))}"
    task_arn = "${aws_iam_role.ecs_task.arn}"
  }
}

# https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html
resource "aws_iam_user_policy" "ecs_user_policy" {
  name   = "policy-${aws_iam_user.ecs_user.name}"
  user   = "${aws_iam_user.ecs_user.name}"
  policy = "${data.template_file.ecs_user_policy.rendered}"
}
