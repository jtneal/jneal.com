# Terraform module which creates ECR resources on AWS.
#
# https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html

provider "aws" {
  profile = "default"
  region  = "us-east-2"
}

locals {
  name = "prod-jneal-repo"
}

############################################################
# ECR Repository
############################################################

# https://www.terraform.io/docs/providers/aws/r/ecr_repository.html
resource "aws_ecr_repository" "primary_repo" {
  name = "${local.name}"
}

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
