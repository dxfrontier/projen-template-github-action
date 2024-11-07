import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';
/**
 * Configures the CommitLint templates, settings and npm scripts for the project.
 */
export declare class CommitLintComponent implements IProjectComponent {
    private project;
    /**
     * Initializes the CommitLint component.
     * @param project The project to configure CommitLint for.
     */
    constructor(project: TypeScriptProject);
    /**
     * Getter retrieving the file path for the CommitLint configuration.
     */
    private get filePath();
    /**
     * Getter retrieving the template file for the CommitLint configuration.
     */
    private get template();
    /**
     * Getter retrieving the npm scripts for the CommitLint component.
     */
    private get scripts();
    /**
     * Getter retrieving the relevant npm packages to be installed as devDependencies for the CommitLint component.
     */
    private get devDependencies();
    /**
     * Getter retrieving the settings to be added to package.json for the CommitLint component.
     */
    private get npmSettings();
    /**
     * Creates the template file for the CommitLint configuration.
     */
    private createConfiguration;
    /**
     * Creates npm package settings specific to CommitLint setup within the project configuration.
     */
    private createSettings;
    /**
     * Adds template files and settings to the CommitLint component.
     */
    add(): void;
    /**
     * Adds npm scripts specific to CommitLint setup within the project configuration.
     */
    addScripts(): void;
    /**
     * Adds npm devDependencies specific to CommitLint setup within the project configuration.
     */
    addDevDependencies(): void;
    /**
     * Configures the `.gitattributes` file to treat CommitLint component related files as generated code, optimizing diffs.
     */
    updateGitAttributes(): void;
    /**
     * Executes setup for the CommitLint component.
     */
    setup(): void;
}
