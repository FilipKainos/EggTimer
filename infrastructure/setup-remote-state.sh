#!/bin/bash
set -e

RG="terraform-state-mgmt"
SA="safseggtimertfstate"
CONTAINER="tfstate"
LOCATION="uksouth"

az group create --name $RG --location $LOCATION --tags CreatedBy=FS
az storage account create --name $SA --resource-group $RG --location $LOCATION --sku Standard_LRS --kind StorageV2 --https-only true --min-tls-version TLS1_2

STORAGE_KEY=$(az storage account keys list --resource-group $RG --account-name $SA --query '[0].value' -o tsv)
az storage container create --name $CONTAINER --account-name $SA --account-key "$STORAGE_KEY"
az storage table create --name tfstatelock --account-name $SA --account-key "$STORAGE_KEY"

echo "✅ Remote state ready: $SA/$CONTAINER"
