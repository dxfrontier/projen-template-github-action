import { CommitLintBase, TypeScriptProjectBase } from '../base';
import { LintStagedConfig } from '../types';

/**
 * CommitLint builder implementing all relevant configuration for the project.
 */
export class CommitLint extends CommitLintBase {
  /**
   * Initializes the CommitLint builder.
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
  protected get npmSettings(): LintStagedConfig {
    return {
      '**/*.{ts,tsx}': ['npm run eslint', 'npm run prettier', 'npm run prettier:cds'],
    };
  }
}
