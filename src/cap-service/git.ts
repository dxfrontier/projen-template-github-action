import { GitBase, TypeScriptProjectBase } from '../base';

/**
 * Git builder implementing all relevant configuration for the project.
 */
export class Git extends GitBase {
  /**
   * Initializes the Git builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure CommitLint for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }

  /**
   * @override
   */
  protected get ignoreSettings(): string[] {
    return ['gen', 'mta_archives', '*.mtar', '*.mta', 'resources', '@cds-models', '*.bak', 'default-*.json'];
  }
}
