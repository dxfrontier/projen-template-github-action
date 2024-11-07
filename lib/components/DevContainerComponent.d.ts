import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';
/**
 * Configures the DevContainer templates, settings and npm scripts for the project.
 */
export declare class DevContainerComponent implements IProjectComponent {
    private project;
    /**
     * Initializes the DevContainer component.
     * @param project The project to configure DevContainer for.
     */
    constructor(project: TypeScriptProject);
    /**
     * Getter retrieving the file path for the DevContainer configuration.
     */
    private get filePath();
    /**
     * Getter retrieving the Docker image used for the DevContainer.
     */
    private get dockerImage();
    /**
     * Getter retrieving the features to be installed in the DevContainer.
     */
    private get features();
    /**
     * Getter retrieving the npm scripts used within the DevContainer environment.
     */
    private get scripts();
    /**
     * Getter retrieving the VSCode extensions to be installed in the DevContainer.
     */
    private get extensions();
    /**
     * Getter retrieving the template file for DevContainer creation.
     *
     * The first script in `scripts` is used as the postCreateCommand to install dependencies upon creation.
     */
    private get template();
    /**
     * Adds template files to the DevContainer component.
     */
    add(): void;
    /**
     * Adds npm scripts specific to DevContainer setup within the project configuration.
     */
    addScripts(): void;
    /**
     * Configures the `.gitattributes` file to treat DevContainer component related files as generated code, optimizing diffs.
     */
    updateGitAttributes(): void;
    /**
     * Executes setup for the DevContainer component.
     */
    setup(): void;
}
