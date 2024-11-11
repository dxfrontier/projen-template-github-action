import { TypeScriptProject } from 'projen/lib/typescript';
import { Component } from './component';
import { ProjenStandardScript } from '../types';

/**
 * Base class for NPM Package component implementing all relevant configuration.
 */
export abstract class NpmPackageBase extends Component<TypeScriptProject> {
  /**
   * Initializes the base NPM Package component.
   * @param project The project to configure NPM for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
  }

  /**
   * File path to the NPM Package ignore configuration.
   * @protected
   */
  protected get ignoreFilePath(): string {
    return '.npmignore';
  }

  /**
   * File paths for the .gitattributes file entries.
   * These entries are not added automatically by projen
   * and we have not extra component for these. So we handle them here.
   * @protected
   */
  protected get gitAttributesFilePaths(): string[] {
    return ['.eslintrc.json', 'tsconfig.dev.json', 'tsconfig.json'];
  }

  /**
   * NPM file paths to be packaged for the NPM Package.
   * @protected
   */
  protected get npmFilePaths(): string[] {
    return ['lib', 'README.md', 'LICENSE'];
  }

  /**
   * Getter retrieving the npm scripts to be removed from NPM Package.
   * These scripts are added by Projen on project initialization
   * and are not needed for our projects.
   * Overwrite this method if you want to keep the projen standard scripts.
   * @protected
   */
  protected get projenScripts(): ProjenStandardScript[] {
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
   * Configures settings specific to the component within the project.
   * @protected
   */
  protected addSettings(): void {
    this.project.addFields({
      files: this.npmFilePaths,
    });
  }

  /**
   * Removes the NPM Package scripts associated with Projen NPM Package initialization.
   * Overwrite this method if you want to keep the projen standard scripts.
   * @protected
   */
  protected removeScripts(): void {
    for (const script of this.projenScripts) {
      this.project.removeScript(script);
    }
  }

  protected addGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.ignoreFilePath}`, 'linguist-generated');
    // as the following files are not added automatically (compared to calling `projen` directly, there it works)
    // we add these files manually
    for (const value of this.gitAttributesFilePaths) {
      this.project.gitattributes.addAttributes(`/${value}`, 'linguist-generated');
    }
  }
}
