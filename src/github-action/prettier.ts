import { PrettierBase, TypeScriptProjectBase } from '../base';

/**
 * Prettier builder implementing all relevant configuration for the project.
 */
export class Prettier extends PrettierBase {
  /**
   * Initializes the Prettier builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure Prettier for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }

  /**
   * @override
   */
  protected get ignoreFilePaths(): string[] {
    return [
      '/.commitlintrc.ts',
      '/.devcontainer.json',
      '/.gitattributes',
      '/.github/ISSUE_TEMPLATE/bug.yml',
      '/.github/ISSUE_TEMPLATE/feature.yml',
      '/.github/ISSUE_TEMPLATE/housekeeping.yml',
      '/.github/ISSUE_TEMPLATE/question.yml',
      '/.github/pull_request_template.md',
      '/.github/workflows/release.yml',
      '/.github/workflows/stale.yml',
      '/.gitignore',
      '/.husky/commit-msg',
      '/.husky/pre-commit',
      '/.npmignore',
      '/.prettierignore',
      '/.prettierrc.json',
      '/.projen/**',
      '/.projen/deps.json',
      '/.projen/files.json',
      '/.projen/tasks.json',
      '/.vscode/settings.json',
      '/cliff.toml',
      '/LICENSE',
      '/package-lock.json',
      '/package.json',
      '/tsconfig.dev.json',
      '/tsconfig.json',
    ];
  }
}
