import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';
/**
 * Configures the VSCode templates, settings and npm scripts for the project.
 */
export declare class VsCodeComponent implements IProjectComponent {
    private project;
    /**
     * Initializes the VSCode component.
     * @param project The project to configure VSCode for.
     */
    constructor(project: TypeScriptProject);
    /**
     * Getter retrieving the file path for the VSCode settings configuration.
     */
    private get settingsFilePath();
    /**
     * Getter retrieving the settings to be installed in VSCode.
     */
    private get settings();
    /**
     * Adds settings to the VSCode component.
     */
    add(): void;
    /**
     * Configures the `.gitattributes` file to treat VSCode component related files as generated code, optimizing diffs.
     */
    updateGitAttributes(): void;
    /**
     * Executes setup for the VSCode component.
     */
    setup(): void;
}
