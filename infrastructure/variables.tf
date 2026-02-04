variable "resource_group_name" {
  description = "Name of the Azure resource group"
  type        = string
  default     = "rg-eggtimer-app"

  validation {
    condition     = can(regex("^[a-zA-Z0-9][a-zA-Z0-9-]{0,88}[a-zA-Z0-9]$", var.resource_group_name))
    error_message = "Resource group name must be 1-90 characters, start and end with alphanumeric, and contain only alphanumeric and hyphens."
  }
}

variable "location" {
  description = "Azure region for resources (e.g., eastus, westus, uksouth)"
  type        = string
  default     = "uksouth"

  validation {
    condition     = can(regex("^[a-z0-9]+$", var.location))
    error_message = "Location must be a valid Azure region name."
  }
}

variable "environment" {
  description = "Environment name (dev, test, prod)"
  type        = string
  default     = "dev"

  validation {
    condition     = contains(["dev", "test", "prod"], var.environment)
    error_message = "Environment must be one of: dev, test, or prod."
  }
}

variable "app_name" {
  description = "Name of the application"
  type        = string
  default     = "eggtimer"

  validation {
    condition     = can(regex("^[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$", var.app_name))
    error_message = "App name must be lowercase alphanumeric with hyphens only."
  }
}

variable "cost_center" {
  description = "Cost center for billing purposes"
  type        = string
  default     = "engineering"
}

variable "tags" {
  description = "Common tags to apply to all resources"
  type        = map(string)
  default = {
    managed_by = "terraform"
    project    = "eggtimer"
    version    = "1.0"
  }
}
