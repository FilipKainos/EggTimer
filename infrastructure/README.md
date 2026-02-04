# EggTimer Infrastructure as Code

This directory contains Terraform configuration for deploying EggTimer infrastructure to Azure.

## Project Structure

```
infrastructure/
├── main.tf           # Main resource definitions
├── variables.tf      # Input variables
├── outputs.tf        # Output values
├── terraform.tfvars  # Variable values (optional, user-created)
└── .gitignore        # Git ignore rules for Terraform files
```

## Quick Start

Initialize Terraform:
```bash
cd infrastructure
terraform init
```

Plan deployment:
```bash
terraform plan
```

Deploy resources:
```bash
terraform apply
```

## Variables

Common variables you can customize:

- `environment` - dev, test, or prod (default: dev)
- `location` - Azure region (default: eastus)
- `app_name` - Application name (default: eggtimer)
- `cost_center` - For billing (default: engineering)

### Using Custom Variables

Create `terraform.tfvars`:
```hcl
environment = "prod"
location    = "westus"
app_name    = "my-eggtimer"
```

Or pass via command line:
```bash
terraform plan -var="environment=prod"
```

## Cleanup

Destroy all resources:
```bash
terraform destroy
```
