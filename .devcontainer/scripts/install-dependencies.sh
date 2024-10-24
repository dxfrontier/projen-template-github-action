#!/bin/bash

# Install xdg-utils to enable opening a browser from devcontainer
# Currently no out-of-the box support available see: https://github.com/devcontainers/images/issues/885
sudo apt-get update
sudo apt-get install -y xdg-utils jq

# Install SAP dependencies
npm install -g @sap/cds-dk typescript ts-node @ui5/cli
npm install -g mbt

# Install terraform dependencies
npm install -g cdktf-cli@latest

# Install projen
npm install -g projen

# Install package.json dependencies
npm install

# Install Clound Foundry CLI
wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list
sudo apt-get update
sudo apt-get install cf8-cli
cf install-plugin -f https://github.com/cloudfoundry-incubator/multiapps-cli-plugin/releases/latest/download/multiapps-plugin.linux64