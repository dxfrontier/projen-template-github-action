import { PrettierOverride, PrettierSettings, TrailingComma } from 'projen/lib/javascript/prettier';
import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types/component';
import { Scripts } from '../types/script';

/**
 * Configures the templates, settings and scripts for the project.
 *
 * Atm only settings and scripts are relevant for Prettier.
 * The name PrettierComponent is chosen to avoid confusion with Projen components.
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
   * Retrieves the Prettier settings for the project.
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
   * Retrieves the scripts associated with Prettier commands.
   */
  private get scripts(): Scripts {
    return {
      'format:fix': 'prettier . --write',
      'format:message': 'echo "Prettier started ..."',
    };
  }

  /**
   * Setup Prettier and add according settings to the project.
   */
  public add(): void {
    this.project.prettier?.addOverride(this.settings);
  }

  /**
   * Adds the Prettier scripts to the project.
   */
  public addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command });
    }
  }
}
