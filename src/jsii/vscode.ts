import { TypeScriptProject } from 'projen/lib/typescript';
import { VSCodeBase } from '../base';

/**
 * VSCode component implementing all relevant configuration for the Jsii project.
 */
export class VSCodeJsii extends VSCodeBase {
  /**
   * Initializes the VSCode component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure VSCode Package for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
    this.initialize();
  }
}
