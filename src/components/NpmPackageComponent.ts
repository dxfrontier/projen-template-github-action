import { TypeScriptProject } from 'projen/lib/typescript';
import { ProjenStandardScript } from '../types/script';

/**
 * Configures the NPM Package templates, settings and scripts for the project.
 *
 * Atm only scripts are relevant for NPM Package.
 */
export class NpmPackageComponent {
  private project: TypeScriptProject;

  /**
   * Initializes the Npm Package Component.
   * @param project The project to configure the NPM Package for.
   */
  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Retrieves the scripts to be removed from NPM Package.
   *
   * These scripts are added by Projen on project initialization
   * and are not needed in this project.
   */
  private get scripts(): ProjenStandardScript[] {
    return [
      'bump',
      'clobber',
      'compile',
      'default',
      'eject',
      'eslint',
      'package',
      'post-compile',
      'post-upgrade',
      'pre-compile',
      'release',
      'test',
      'test:watch',
      'unbump',
      'upgrade',
      'watch',
      'projen',
    ];
  }

  /**
   * Remove the NPM Package scripts from the project.
   */
  public removeScripts(): void {
    for (const script of this.scripts) {
      this.project.removeScript(script);
    }
  }
}
