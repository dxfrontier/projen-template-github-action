import { vscode } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { getDockerImage, getExtensions, getFeatures } from '../templates/devContainer';

/**
 * Sets up devcontainer configuration.
 */
export class DevContainerBuilder {
  private project: TypeScriptProject;

  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Creates a devcontainer setup for the project.
   */
  public createDevContainer(): void {
    new vscode.DevContainer(this.project, {
      dockerImage: {
        image: getDockerImage(),
      },
      features: getFeatures(),
      vscodeExtensions: getExtensions(),
    });
  }
}
