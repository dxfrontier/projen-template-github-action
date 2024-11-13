import { PrettierOverride, PrettierSettings, TrailingComma } from 'projen/lib/javascript';
import { Component } from './component';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for Prettier component implementing all relevant configuration.
 * @abstract
 */
export abstract class PrettierBase extends Component {
  /**
   * Initializes the base Prettier component.
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
      this.project.addTask(name, { exec: command });
    }
  }

  protected addGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.ignoreFilePath}`, 'linguist-generated');
    this.project.gitattributes.addAttributes(`/${this.settingsFilePath}`, 'linguist-generated');
  }
}
