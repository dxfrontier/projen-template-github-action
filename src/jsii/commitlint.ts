import { TypeScriptProject } from 'projen/lib/typescript';
import { CommitLintBase } from '../base/commitlint';
import { LintStagedConfig } from '../types';

/**
 * CommitLint component implementing all relevant configuration for the Jsii project.
 */
export class CommitLintJsii extends CommitLintBase {
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
      '**/*.ts': ['npm run eslint', 'npm run format:fix'],
    };
  }

  /**
   * Entries in `.gitattributes` are already done by `.projenrc.ts`
   * @protected
   * @override
   */
  protected addGitAttributes(): void {}
}
