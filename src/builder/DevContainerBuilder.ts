import { Task, vscode } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { DOCKER_IMAGE, DEVCONTAINER_FEATURES, VSCODE_EXTENSIONS } from '../templates/devContainer';

/**
 * Sets up devcontainer configuration with predefined settings.
 */
export class DevContainerBuilder {
  private project: TypeScriptProject;

  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Initializes the devcontainer setup for the project.
   */
  public createDevContainer(): void {
    new vscode.DevContainer(this.project, {
      dockerImage: {
        image: DOCKER_IMAGE,
      },
      features: DEVCONTAINER_FEATURES,
      vscodeExtensions: VSCODE_EXTENSIONS,
      tasks: this.getTasks(),
    });
  }

  /**
   * Creates and returns the tasks needed for setting up the devcontainer environment.
   * @returns An array of `Task` instances required for devcontainer setup.
   */
  private getTasks(): Task[] {
    const installDependencies: Task = this.project.addTask('installDependencies');
    installDependencies.exec('npm install -g projen');
    installDependencies.prependExec('npm install');

    return [
      installDependencies,
    ];
  }
}
