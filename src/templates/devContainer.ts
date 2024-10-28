import { DevContainerFeature } from 'projen/lib/vscode';

/**
 * Returns the relevant devcontainer features.
 * @returns All relevant DevContainerFeature.
 */
export function getFeatures(): DevContainerFeature[] {
  return [
    {
      name: 'ghcr.io/devcontainers-contrib/features/curl-apt-get',
      version: 'latest',
    },
    {
      name: 'ghcr.io/devcontainers/features/github-cli',
      version: 'latest',
    },
  ];
}