# Resource Group Module

A simple, reusable Terraform module for creating Azure Resource Groups.

## Features
- Creates Azure Resource Groups with configurable name and location
- Supports custom tagging with validation
- Exports resource group name, ID, location, and tags
- Built-in validation for Azure naming conventions

## Usage

```hcl
module "resource_group" {
  source = "../modules/resource-group"

  resource_group_name = "rg-my-app"
  location            = "uksouth"

  tags = {
    Environment = "dev"
    CostCenter  = "engineering"
    Owner       = "platform-team"
  }
}
```

## Module Inputs

### Required Variables

| Name | Type | Description |
|------|------|-------------|
| `resource_group_name` | `string` | The name of the resource group to create |
| `location` | `string` | The Azure region for the resource group |

### Optional Variables

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tags` | `map(string)` | `{}` | A map of tags to apply to the resource group |

## Module Outputs

| Name | Description |
|------|-------------|
| `resource_group_name` | The name of the created resource group |
| `resource_group_id` | The ID of the created resource group |
| `location` | The location of the created resource group |
| `tags` | The tags applied to the resource group |

## Examples

### Basic Usage
```hcl
module "rg" {
  source = "../modules/resource-group"

  resource_group_name = "rg-app-dev"
  location            = "eastus"
}
```

### With Tags
```hcl
module "rg" {
  source = "../modules/resource-group"

  resource_group_name = "rg-app-prod"
  location            = "uksouth"

  tags = {
    Environment = "production"
    Application = "my-app"
    CostCenter  = "engineering"
    CreatedBy   = "FS"
  }
}
```

### Using Module Outputs
```hcl
module "app_rg" {
  source = "../modules/resource-group"

  resource_group_name = "rg-myapp-${var.environment}"
  location            = var.location
  tags                = var.common_tags
}

# Reference outputs in other resources
resource "azurerm_storage_account" "example" {
  name                     = "sa${replace(module.app_rg.resource_group_name, "-", "")}"
  resource_group_name      = module.app_rg.resource_group_name
  location                 = module.app_rg.location
}
```

## Module Design

### Directory Structure
```
modules/resource-group/
├── main.tf        # Resource definitions
├── variables.tf   # Input variables with validation
├── outputs.tf     # Output values
└── README.md      # Module documentation
```

### Key Features
- **Validation**: Built-in regex validation for resource group names and locations
- **Tag Management**: Merges user-provided tags with module-managed tags
- **Flexibility**: Supports any Azure region and custom naming patterns
- **Best Practices**: Includes tagging for resource management and billing

## Validation Rules

### Resource Group Name
- Must be 1-90 characters
- Must start and end with alphanumeric characters
- Can contain alphanumeric characters and hyphens

### Location
- Must be a valid Azure region (lowercase alphanumeric)
- Examples: `eastus`, `uksouth`, `westeurope`

### Tags
- Keys: 1-512 characters
- Values: 1-256 characters
- All keys and values must be non-empty

## Files Included

- `main.tf` - Defines the `azurerm_resource_group` resource
- `variables.tf` - Input variables with comprehensive validation
- `outputs.tf` - Exports resource group properties
- `README.md` - This file with usage documentation
