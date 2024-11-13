import { TypeScriptProject } from 'projen/lib/typescript';
import { NpmPackageBase } from '../base';

/**
 * NPM Package component implementing all relevant configurtion for the project.
 */
export class NpmPackage extends NpmPackageBase {
  /**
   * Initializes the NPM Package component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * Additionally it calls `removeScripts()` to ensure, that no projen standard scripts are defined
   * as these scripts are not needed for this kind of project.
   * @param project The project to configure NPM Package for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
    this.initialize();
    this.removeScripts();
  }
}
