import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';
/**
 * Configures the Husky templates, settings and npm scripts for the project.
 */
export declare class HuskyComponent implements IProjectComponent {
    private project;
    /**
     * Initializes the Husky component.
     * @param project The project to configure Husky for.
     */
    constructor(project: TypeScriptProject);
    /**
     * Getter retrieving the file path for the Husky commit-msg hook.
     */
    private get commitMsgFilePath();
    /**
     * Getter retrieving the file path for the Husky pre-commit hook.
     */
    private get preCommitFilePath();
    /**
     * Getter retrieving the template file for commit-msg hook.
     */
    private get commitMsgTemplate();
    /**
     * Getter retrieving the template file for pre-commit hook.
     */
    private get preCommitTemplate();
    /**
     * Getter retrieving the npm scripts used for the Husky component.
     */
    private get scripts();
    /**
     * Getter retrieving the relevant npm packages to be installed as devDependencies for the Husky component.
     */
    private get devDependencies();
    /**
     * Creates the template file for the Husky commit-msg hook.
     */
    private createCommitMsgHook;
    /**
     * Creates the template file for the Husky pre-commit hook.
     */
    private createPreCommitHook;
    /**
     * Adds template files to the Husky component.
     */
    add(): void;
    /**
     * Adds npm scripts specific to Husky setup within the project configuration.
     */
    addScripts(): void;
    /**
     * Adds npm devDependencies specific to Husky setup within the project configuration.
     */
    addDevDependencies(): void;
    /**
     * Configures the `.gitattributes` file to treat Husky component related files as generated code, optimizing diffs.
     */
    updateGitAttributes(): void;
    /**
     * Executes setup for the Husky component.
     */
    setup(): void;
}
