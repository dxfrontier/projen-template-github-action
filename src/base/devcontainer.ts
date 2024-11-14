import { JsonFile, JsonFileOptions } from 'projen';
import { Builder } from './builder';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for DevContainer builder implementing all relevant configuration.
 * @abstract
 */
export abstract class DevContainerBase extends Builder {
  /**
   * Initializes the base DevContainer builder.
   * @param project The project to configure DevContainer for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
  }

  /**
   * File path to the CommitLint configuration.
   * @return File path to config file.
   * @protected
   */
  protected get filePath(): string {
    return '.devcontainer.json';
  }

  /**
   * Docker image used for the DevContainer.
   * @return Docker image to be used for container.
   * @protected
   */
  protected get dockerImage(): string {
    return 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye';
  }

  /**
   * Features to be installed in the DevContainer.
   * @return Additional features used in container.
   * @protected
   */
  protected get features(): Record<string, string> {
    return {
      'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
      'ghcr.io/devcontainers/features/github-cli': 'latest',
      'ghcr.io/devcontainers-contrib/features/projen': 'latest',
    };
  }

  /**
   * VsCode extensions to be installed in the DevContainer.
   * @return Extensions used in container.
   * @protected
   */
  protected get extensions(): string[] {
    return [];
  }

  /**
   * Template file for DevContainer creation.
   * The first script in `scripts` is used as the postCreateCommand to install dependencies upon creation.
   * @return Template for the config file.
   * @protected
   */
  protected get template(): JsonFileOptions {
    return {
      omitEmpty: true,
      allowComments: true,
      obj: {
        image: this.dockerImage,
        postCreateCommand: `npx projen ${Object.keys(this.scripts)[0]}`,
        features: this.features,
        customizations: {
          vscode: {
            extensions: this.extensions,
          },
        },
      },
    };
  }

  /**
   * NPM scripts used within the DevContainer environment.
   * @return Npm script entries.
   * @protected
   */
  protected get scripts(): Scripts {
    return {
      'install-dependencies': 'npm install',
    };
  }

  protected addTemplates(): void {
    new JsonFile(this.project, this.filePath, this.template);
  }

  protected addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command });
    }
  }

  protected addGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.filePath}`, 'linguist-generated');
  }
}
