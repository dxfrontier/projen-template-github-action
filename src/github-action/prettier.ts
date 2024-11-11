import { TypeScriptProject } from 'projen/lib/typescript';
import { PrettierBase } from '../base/prettier';

/**
 * Prettier component implementing all relevant configurtion for the project.
 */
export class Prettier extends PrettierBase {
  /**
   * Initializes the Prettier component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure Prettier for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
    this.initialize();
  }
}
