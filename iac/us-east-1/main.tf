provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

locals {
  bucket_name = "jneal.com"
}

############################################################
# ACM
############################################################

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/acm_certificate
data "aws_acm_certificate" "jnealcom" {
  domain      = local.bucket_name
  types       = ["AMAZON_ISSUED"]
  most_recent = true
}

############################################################
# Deploy User
############################################################

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_user
resource "aws_iam_user" "deploy_user" {
  name = "user-jnealcom"
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_access_key
resource "aws_iam_access_key" "deploy_user_key" {
  user = aws_iam_user.deploy_user.name
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_user_policy
resource "aws_iam_user_policy" "deploy_user_policy" {
  name   = "policy-${aws_iam_user.deploy_user.name}"
  user   = aws_iam_user.deploy_user.name
  policy = templatefile("../templates/cloudfront-policy.json", {
    cloudfront_arn = aws_cloudfront_origin_access_identity.jnealcom.iam_arn
  })
}

############################################################
# S3
############################################################

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket
resource "aws_s3_bucket" "jnealcom" {
  bucket = local.bucket_name
  acl    = "private"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy
resource "aws_s3_bucket_policy" "jnealcom" {
  bucket = local.bucket_name

  policy = templatefile("../templates/bucket-policy.json", {
    bucket_arn = aws_s3_bucket.jnealcom.arn
    cloudfront_principal_arn = aws_cloudfront_origin_access_identity.jnealcom.iam_arn
    deploy_user_arn = aws_iam_user.deploy_user.arn
  })
}

############################################################
# CloudFront
############################################################

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_origin_access_identity
resource "aws_cloudfront_origin_access_identity" "jnealcom" {
  comment = "For ${local.bucket_name}"
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution
resource "aws_cloudfront_distribution" "jnealcom" {
  origin {
    domain_name = aws_s3_bucket.jnealcom.bucket_regional_domain_name
    origin_id = local.bucket_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.jnealcom.cloudfront_access_identity_path
    }
  }

  enabled = true
  is_ipv6_enabled = false
  comment = "Serve S3 bucket ${local.bucket_name} via CloudFront."
  default_root_object = "index.html"
  wait_for_deployment = true
  price_class = "PriceClass_100"

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = local.bucket_name

    forwarded_values {
      query_string = true

      headers = [
        "Access-Control-Request-Headers",
        "Access-Control-Request-Method",
        "Origin",
      ]

      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 30
    max_ttl     = 60
    compress    = true
    viewer_protocol_policy = "redirect-to-https"
  }

  custom_error_response {
    error_code = 404
    response_code = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code = 500
    response_code = 500
    response_page_path = "/error.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    minimum_protocol_version = "TLSv1.2_2018"
    ssl_support_method = "sni-only"
    acm_certificate_arn = data.aws_acm_certificate.jnealcom.arn
    cloudfront_default_certificate = false
  }
}

############################################################
# Route 53
############################################################

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone
data "aws_route53_zone" "jnealcom" {
  name = "jneal.com."
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record
# resource "aws_route53_record" "jnealcom_apex" {
#   zone_id = data.aws_route53_zone.jnealcom.zone_id
#   name    = local.bucket_name
#   type    = "A"

#   alias {
#     name                   = aws_cloudfront_distribution.jnealcom.domain_name
#     zone_id                = aws_cloudfront_distribution.jnealcom.hosted_zone_id
#     evaluate_target_health = true
#   }
# }
