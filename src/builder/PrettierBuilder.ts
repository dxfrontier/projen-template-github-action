import { TypeScriptProject } from 'projen/lib/typescript';
import constants from '../constants/templates';
import { IScript } from '../types/common';

/**
 * Sets up a prettier configuration.
 */
export class PrettierBuilder {
  private project: TypeScriptProject;

  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Adds the prettier settings for the project.
   */
  public addSettings(): void {
    this.project.prettier?.addOverride(constants.PRETTIER.SETTINGS);
  }

  /**
   * Adds prettier npm scripts to package.json
   */
  public addNpmScripts(): void {
    for (const key in constants.PRETTIER.SCRIPTS) {
      const script: IScript = constants.PRETTIER.SCRIPTS[key];
      this.project.addTask(script.NAME, {
        exec: script.EXEC,
      });
    }
  }
}
