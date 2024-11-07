import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';
/**
 * Configures the templates, settings and npm scripts for the project.
 */
export declare class PrettierComponent implements IProjectComponent {
    private project;
    /**
     * Initializes the Prettier component.
     * @param project The project to configure Prettier for.
     */
    constructor(project: TypeScriptProject);
    /**
     * Getter retrieving the file path for the Prettier ignore configuration.
     */
    private get ignoreFilePath();
    /**
     * Getter retrieving the file path for the Prettier settings configuration.
     */
    private get settingsFilePath();
    /**
     * Getter retrieving settings for the Prettier configuration.
     */
    private get settings();
    /**
     *  Getter retrieving the npm scripts used by Prettier.
     */
    private get scripts();
    /**
     * Adds settings to the DevContainer component.
     */
    add(): void;
    /**
     * Adds npm scripts specific to Prettier setup within the project configuration.
     */
    addScripts(): void;
    /**
     * Configures the `.gitattributes` file to treat Prettier component related files as generated code, optimizing diffs.
     */
    updateGitAttributes(): void;
    /**
     * Executes setup for the Prettier component.
     */
    setup(): void;
}
