import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent, ProjenStandardScript } from '../types';

/**
 * Configures the NPM Package templates, settings and npm scripts for the project.
 */
export class NpmPackageComponent implements IProjectComponent {
  private project: TypeScriptProject;

  /**
   * Initializes the Npm Package Component.
   * @param project The project to configure the NPM Package for.
   */
  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Getter retrieving the file path for the NPM Package ignore configuration.
   */
  private get ignoreFilePath(): string {
    return '.npmignore';
  }

  /**
   * Getter retrieving the npm files to be packaged for the NPM Package.
   */
  private get npmFiles(): string[] {
    return ['lib', 'README.md', 'LICENSE'];
  }

  /**
   * Getter retrieving the npm scripts to be removed from NPM Package.
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
   * Adds settings to the NPM Package component.
   */
  public add(): void {
    this.project.addFields({
      files: this.npmFiles,
    });
  }

  /**
   * Removes the NPM Package scripts associated with Projen NPM Package initialization.
   */
  public removeScripts(): void {
    for (const script of this.scripts) {
      this.project.removeScript(script);
    }
  }
  /**
   * Configures the `.gitattributes` file to treat NPM Package component related files as generated code, optimizing diffs.
   */
  public updateGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.ignoreFilePath}`, 'linguist-generated');
  }

  /**
   * Executes setup for the DevContainer component.
   */
  public setup(): void {
    this.add();
    this.removeScripts();
    this.updateGitAttributes();
  }
}
