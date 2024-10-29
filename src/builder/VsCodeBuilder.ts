import { TypeScriptProject } from 'projen/lib/typescript';
import constants from '../constants/templates';

/**
 * Sets up the vscode config.
 */
export class VsCodeBuilder {
  private project: TypeScriptProject;

  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Creates the VSCode settings for the project.
   */
  public createSettings(): void {
    this.project.vscode?.settings.addSettings(constants.VS_CODE.SETTINGS);
  }
}