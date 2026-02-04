output "resource_group_id" {
  description = "ID of the Azure resource group"
  value       = module.main_resource_group.resource_group_id
}

output "resource_group_name" {
  description = "Name of the Azure resource group"
  value       = module.main_resource_group.resource_group_name
}

output "location" {
  description = "Location of the Azure resource group"
  value       = module.main_resource_group.location
}
