import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types/component';
import { TextFile } from 'projen';
import { Scripts } from '../types/script';

/**
 * Configures the CommitLint templates, settings and npm scripts for the project.
 */
export class CommitLintComponent implements IProjectComponent {
  private project: TypeScriptProject;

  /**
   * Initializes the CommitLint component.
   * @param project The project to configure CommitLint for.
   */
  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Getter retrieving the file path for the CommitLint configuration.
   */
  private get filePath(): string {
    return '.commitlintrc.ts';
  }

  /**
   * Getter retrieving the template file for the CommitLint configuration.
   */
  private get template(): string[] {
    return [
      '# Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
      '',
      // eslint-disable-next-line prettier/prettier
      'import type { UserConfig } from \'@commitlint / types\';',
      // eslint-disable-next-line prettier/prettier
      'import { RuleConfigSeverity } from \'@commitlint / types\';',
      '',
      'const Configuration: UserConfig = {',
      // eslint-disable-next-line prettier/prettier
      '  extends: [\'@commitlint / config - conventional\'], ',
      '  rules: {',
      // eslint-disable-next-line prettier/prettier
      '    \'type -enum\': [',
      '      RuleConfigSeverity.Error,',
      // eslint-disable-next-line prettier/prettier
      '      \'always\',',
      // eslint-disable-next-line prettier/prettier
      '      [\'build\', \'chore\', \'ci\', \'docs\', \'feat\', \'fix\', \'perf\', \'refactor\', \'revert\', \'style\', \'test\', \'delete\'],',
      '    ],',
      // eslint-disable-next-line prettier/prettier
      '    \'scope - empty\': [RuleConfigSeverity.Error, \'never\'],',
      // eslint-disable-next-line prettier/prettier
      '    \'subject - empty\': [RuleConfigSeverity.Error, \'never\'],',
      '  }',
      // eslint-disable-next-line prettier/prettier
      '  helpUrl: \'https://github.com/conventional-changelog/commitlint/#what-is-commitlint\',',
      '};',
      '',
      'export default Configuration;',
    ];
  }

  /**
   * Getter retrieving the npm scripts for the CommitLint component.
   */
  private get scripts(): Scripts {
    return {
      commit: 'commit',
    };
  }

  /**
   * Created the template file for the CommitLint configuration.
   */
  private createConfiguration(): void {
    new TextFile(this.project, this.filePath, {
      lines: this.template,
    });
  }

  /**
   * Add template files to the CommitLint component.
   */
  public add(): void {
    this.createConfiguration();
  }

  /**
   * Add npm scripts specific to CommitLint setup within the project configuration.
   */
  public addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command });
    }
  }

  /**
   * Configures the `.gitattributes` file to treat CommitLint component related files as generated code, optimizing diffs.
   */
  public updateGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.filePath}`, 'linguist-generated');
  }

  /**
   * Executes setup for the CommitLint component.
   */
  public setup(): void {
    this.add();
    this.addScripts();
    this.updateGitAttributes();
  }
}
