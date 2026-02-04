variable "resource_group_name" {
  description = "The name of the resource group to create"
  type        = string

  validation {
    condition     = can(regex("^[a-zA-Z0-9][a-zA-Z0-9-]{0,88}[a-zA-Z0-9]$", var.resource_group_name))
    error_message = "Resource group name must be 1-90 characters, start and end with alphanumeric, and contain only alphanumeric and hyphens."
  }
}

variable "location" {
  description = "The Azure region where the resource group will be created"
  type        = string

  validation {
    condition     = can(regex("^[a-z0-9]+$", var.location))
    error_message = "Location must be a valid Azure region name (lowercase alphanumeric)."
  }
}

variable "tags" {
  description = "A map of tags to apply to the resource group"
  type        = map(string)
  default     = {}

  validation {
    condition = alltrue([
      for k, v in var.tags : (
        length(k) > 0 && length(k) <= 512 &&
        length(v) > 0 && length(v) <= 256
      )
    ])
    error_message = "Tag keys must be 1-512 characters and values must be 1-256 characters."
  }
}
