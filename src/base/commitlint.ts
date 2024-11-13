import { TextFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { Component } from './component';
import { LintStagedConfig, Scripts } from '../types';

/**
 * Base class for CommitLint component implementing all relevant configuration.
 */
export abstract class CommitLintBase extends Component {
  /**
   * Initializes the base CommitLint component.
   * @param project The project to configure CommitLint for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
  }

  /**
   * File path to the CommitLint configuration.
   * @protected
   */
  protected get filePath(): string {
    return '.commitlintrc.ts';
  }

  /**
   * Template file for the CommitLint configuration.
   * @protected
   */
  protected get template(): string[] {
    return [
      '// Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
      '',
      // eslint-disable-next-line prettier/prettier
      "import type { UserConfig } from '@commitlint/types';",
      // eslint-disable-next-line prettier/prettier
      "import { RuleConfigSeverity } from '@commitlint/types';",
      '',
      'const Configuration: UserConfig = {',
      // eslint-disable-next-line prettier/prettier
      "  extends: ['@commitlint/config-conventional'],",
      '  rules: {',
      // eslint-disable-next-line prettier/prettier
      "    'type-enum': [",
      '      RuleConfigSeverity.Error,',
      // eslint-disable-next-line prettier/prettier
      "      'always',",
      // eslint-disable-next-line prettier/prettier
      "      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'delete'],",
      '    ],',
      // eslint-disable-next-line prettier/prettier
      "    'scope-empty': [RuleConfigSeverity.Error, 'never'],",
      // eslint-disable-next-line prettier/prettier
      "    'subject-empty': [RuleConfigSeverity.Error, 'never'],",
      '  },',
      // eslint-disable-next-line prettier/prettier
      "  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',",
      '};',
      '',
      'export default Configuration;',
    ];
  }

  /**
   * NPM scripts for the CommitLint component.
   * @protected
   */
  protected get scripts(): Scripts {
    return {
      commit: 'commit',
    };
  }

  /**
   * NPM packages to be installed as devDependencies for the CommitLint component.
   * @protected
   */
  protected get devDependencies(): string[] {
    return [
      '@commitlint/cli',
      '@commitlint/config-conventional',
      '@commitlint/prompt-cli',
      '@commitlint/types',
      'lint-staged',
    ];
  }

  /**
   * Settings to be added to package.json for the CommitLint component.
   * @protected
   */
  protected get npmSettings(): LintStagedConfig {
    return {};
  }

  protected addTemplates(): void {
    new TextFile(this.project, this.filePath, {
      lines: this.template,
    });
  }

  protected addSettings(): void {
    this.project.addFields({
      'lint-staged': this.npmSettings,
    });
  }

  protected addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command });
    }
  }

  protected addDevDependencies(): void {
    this.project.addDevDeps(...this.devDependencies);
  }

  protected addGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.filePath}`, 'linguist-generated');
  }
}
