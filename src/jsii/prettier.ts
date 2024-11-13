import { PrettierBase, TypeScriptProjectBase } from '../base';

/**
 * Prettier component implementing all relevant configuration for the Jsii project.
 */
export class PrettierJsii extends PrettierBase {
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

  /**
   * Entries in `.gitattributes` are already done by `.projenrc.ts`
   * @protected
   * @override
   */
  // eslint-disable-next-line prettier/prettier
  protected addGitAttributes(): void { }
}
