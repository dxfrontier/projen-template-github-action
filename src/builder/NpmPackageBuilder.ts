import { TypeScriptProject } from 'projen/lib/typescript';
import constants from '../constants/templates';
import { ProjenStandardScript } from '../types/common';

/**
 * Sets up the NPM package configuration with predefined settings.
 */
export class NpmPackageBuilder {
  private project: TypeScriptProject;

  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Removes the initial set standard scripts of projen.
   * They are not needed for this type of project.
   */
  public removeProjenStandardScripts() {
    const scriptsToRemove: ProjenStandardScript[] = constants.NPM_PACKAGE.PROJEN_STANDARD_SCRIPTS;
    for (const script of scriptsToRemove) {
      this.project.removeScript(script);
    }
  }
}