import { PrettierOverride, PrettierSettings, TrailingComma } from 'projen/lib/javascript';
import { Builder } from './builder';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for Prettier builder implementing all relevant configuration.
 * @abstract
 */
export abstract class PrettierBase extends Builder {
  /**
   * Initializes the base Prettier builder.
   * @param project The project to configure Prettier for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
  }

  /**
   * File path to the Prettier ignore configuration.
   * @protected
   */
  protected get ignoreFilePath(): string {
    return '.prettierignore';
  }

  /**
   * File path to the Prettier settings configuration.
   * @protected
   */
  protected get settingsFilePath(): string {
    return '.prettierrc.json';
  }

  /**
   * File paths to the Prettier ignore entries.
   * @protected
   */
  protected get ignoreFilePaths(): string[] {
    return [
      '*.snap',
      '/.commitlintrc.ts',
      '/.devcontainer.json',
      '/.eslintrc.json',
      '/.gitattributes',
      '/.github/ISSUE_TEMPLATE/bug.yml',
      '/.github/ISSUE_TEMPLATE/feature.yml',
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

  /**
   * Settings for the Prettier configuration.
   * @protected
   */
  protected get settings(): PrettierOverride {
    return {
      files: '*.*',
      options: {
        semi: true,
        trailingComma: TrailingComma.ALL,
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
      } as PrettierSettings,
    };
  }

  /**
   * NPM scripts used by Prettier.
   * @protected
   */
  protected get scripts(): Scripts {
    return {
      'format:fix': 'prettier . --write',
      'format:message': 'echo "Prettier started ..."',
    };
  }

  protected addSettings(): void {
    this.project.prettier?.addOverride(this.settings);
  }

  protected addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command, receiveArgs: true });
    }
  }

  protected addGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.ignoreFilePath}`, 'linguist-generated');
    this.project.gitattributes.addAttributes(`/${this.settingsFilePath}`, 'linguist-generated');
  }

  /**
   * Executes post-synthesis tasks, focusing on updating the `.prettierignore` file with paths from `.gitattributes`.
   *
   * Tried scenarios:
   *   - Accessing attributes directly from `.gitattributes` file (but `.gitattributes` is private and inaccessible).
   *     This would be the most efficient and elegant solution as it allows us to add the entries using API.
   *   - Retrieving all files from the project (misses some files like `tsconfig.json`).
   *   - Letting each component add its paths individually (leaves out many standard files).
   *   - Manually adding paths (prone to errors).
   *   - Modifying `.prettierignore` after post-synthesis (but `.prettierignore` is readonly) and leads to test issues
   *     as these changes are not reflected in `syntesize()`.
   *
   * We will update it manually and cover it by tests cases checking if changes on the files are reflected here.
   */
  public preSynthesize(): void {
    this.addPrettierIgnoreEntries();
  }

  /**
   * Adds entries to the `.prettierignore` file.
   * @private
   */
  protected addPrettierIgnoreEntries(): void {
    for (const entry of this.ignoreFilePaths) {
      this.project.prettier?.addIgnorePattern(entry);
    }
  }
}
