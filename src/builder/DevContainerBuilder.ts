import { Task, JsonFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { FILE_PATH, DOCKER_IMAGE, FEATURES, VSCODE_EXTENSIONS } from '../templates/devContainer';

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
    const task: Task = this.createInstallDependenciesTask();

    // As of today (10/29/24) the standard vscode.DevContainer implementation does not support
    // 'customizations.vscode.extensions' property (and this is the new required structure instead of 'extensions#)
    // we need to build the .devcontainer.json from scratch
    new JsonFile(this.project, FILE_PATH, {
      omitEmpty: true,
      allowComments: true,
      obj: {
        image: DOCKER_IMAGE,
        postCreateCommand: `npx projen ${task.name}`,
        features: FEATURES,
        customizations: {
          vscode: {
            extensions: VSCODE_EXTENSIONS,
          },
        },
      },
    });
  }

  /**
   * Creates task for installing dependencies after setting up the devcontainer environment.
   * @returns The task instance required for devcontainer setup.
   */
  private createInstallDependenciesTask(): Task {
    const installDependencies: Task = this.project.addTask('install-dependencies');
    installDependencies.prependExec('npm install');

    return installDependencies;
  }
}
