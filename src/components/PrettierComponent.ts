import { PrettierOverride, PrettierSettings, TrailingComma } from 'projen/lib/javascript/prettier';
import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent, Scripts } from '../types';

/**
 * Configures the templates, settings and npm scripts for the project.
 */
export class PrettierComponent implements IProjectComponent {
  private project: TypeScriptProject;

  /**
   * Initializes the Prettier component.
   * @param project The project to configure Prettier for.
   */
  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Getter retrieving the file path for the Prettier ignore configuration.
   */
  private get ignoreFilePath(): string {
    return '.prettierignore';
  }

  /**
   * Getter retrieving the file path for the Prettier settings configuration.
   */
  private get settingsFilePath(): string {
    return '.prettierrc.json';
  }

  /**
   * Getter retrieving settings for the Prettier configuration.
   */
  private get settings(): PrettierOverride {
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
   *  Getter retrieving the npm scripts used by Prettier.
   */
  private get scripts(): Scripts {
    return {
      'format:fix': 'prettier . --write',
      'format:message': 'echo "Prettier started ..."',
    };
  }

  /**
   * Adds settings to the DevContainer component.
   */
  public add(): void {
    this.project.prettier?.addOverride(this.settings);
  }

  /**
   * Adds npm scripts specific to Prettier setup within the project configuration.
   */
  public addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command });
    }
  }

  /**
   * Configures the `.gitattributes` file to treat Prettier component related files as generated code, optimizing diffs.
   */
  public updateGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.ignoreFilePath}`, 'linguist-generated');
    this.project.gitattributes.addAttributes(`/${this.settingsFilePath}`, 'linguist-generated');
  }

  /**
   * Executes setup for the Prettier component.
   */
  public setup(): void {
    this.add();
    this.addScripts();
    this.updateGitAttributes();
  }
}
