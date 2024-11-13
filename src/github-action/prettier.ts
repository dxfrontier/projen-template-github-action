import { PrettierBase, TypeScriptProjectBase } from '../base';

/**
 * Prettier component implementing all relevant configuration for the project.
 */
export class Prettier extends PrettierBase {
  /**
   * Initializes the Prettier component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure Prettier for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }
}
