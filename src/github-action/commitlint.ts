import { TypeScriptProject } from 'projen/lib/typescript';
import { CommitLintBase } from '../base/commitlint';
import { LintStagedConfig } from '../types';

/**
 * CommitLint component implementing all relevant configuration for the project.
 */
export class CommitLint extends CommitLintBase {
  /**
   * Initializes the CommitLint component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure CommitLint for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
    this.initialize();
  }

  /**
   * Settings to be added to package.json for the CommitLint component.
   * @protected
   * @override
   */
  protected get npmSettings(): LintStagedConfig {
    return {
      '**/*.{yml,yaml}': ['npm run format:message', 'npm run format:fix'],
    };
  }
}
