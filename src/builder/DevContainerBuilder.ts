import { Task, JsonFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import constants from '../constants/templates';

/**
 * Sets up devcontainer configuration with predefined settings.
 */
export class DevContainerBuilder {
  private project: TypeScriptProject;

  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Creates the devcontainer setup for the project.
   */
  public createDevContainer(): void {
    const task: Task = this.addInstallDependenciesTask();

    // As of today (10/29/24) the standard vscode.DevContainer implementation does not support
    // 'customizations.vscode.extensions' property (and this is the new required structure instead of 'extensions#)
    // we need to build the .devcontainer.json from scratch
    new JsonFile(this.project, constants.DEV_CONTAINER.FILE_PATH, {
      omitEmpty: true,
      allowComments: true,
      obj: {
        image: constants.DEV_CONTAINER.DOCKER_IMAGE,
        postCreateCommand: `npx projen ${task.name}`,
        features: constants.DEV_CONTAINER.FEATURES,
        customizations: {
          vscode: {
            extensions: constants.DEV_CONTAINER.EXTENSIONS,
          },
        },
      },
    });
  }

  /**
   * Adds task for installing dependencies after setting up the devcontainer environment.
   * @returns The task instance required for devcontainer setup.
   */
  private addInstallDependenciesTask(): Task {
    const installDependencies: Task = this.project.addTask('install-dependencies');
    installDependencies.prependExec('npm install');

    return installDependencies;
  }
}
