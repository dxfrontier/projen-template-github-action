import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';
/**
 * Configures the NPM Package templates, settings and npm scripts for the project.
 */
export declare class NpmPackageComponent implements IProjectComponent {
    private project;
    /**
     * Initializes the Npm Package Component.
     * @param project The project to configure the NPM Package for.
     */
    constructor(project: TypeScriptProject);
    /**
     * Getter retrieving the file path for the NPM Package ignore configuration.
     */
    private get ignoreFilePath();
    /**
     * Getter retrieving the file paths for the missing .gitattributes file entries.
     */
    private get gitAttributesFilePaths();
    /**
     * Getter retrieving the npm files to be packaged for the NPM Package.
     */
    private get npmFiles();
    /**
     * Getter retrieving the npm scripts to be removed from NPM Package.
     *
     * These scripts are added by Projen on project initialization
     * and are not needed in this project.
     */
    private get scripts();
    /**
     * Adds settings to the NPM Package component.
     */
    add(): void;
    /**
     * Removes the NPM Package scripts associated with Projen NPM Package initialization.
     */
    removeScripts(): void;
    /**
     * Configures the `.gitattributes` file to treat NPM Package component related files as generated code, optimizing diffs.
     */
    updateGitAttributes(): void;
    /**
     * Executes setup for the DevContainer component.
     */
    setup(): void;
}
