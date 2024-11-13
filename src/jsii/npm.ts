import { TypeScriptProject } from 'projen/lib/typescript';
import { NpmPackageBase } from '../base';

/**
 * NPM Package component implementing all relevant configuration for the Jsii project.
 */
export class NpmPackageJsii extends NpmPackageBase {
  /**
   * Initializes the NPM Package component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure NPM Package for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
    this.initialize();
  }
}
