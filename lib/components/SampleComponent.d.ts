import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';
/**
 * Handles GitHub action sample file creation for the project.
 */
export declare class SampleComponent implements IProjectComponent {
    private project;
    /**
     * Initializes the Sample component.
     * @param project The project to create sample GitHub action file for.
     */
    constructor(project: TypeScriptProject);
    /**
     * Getter retrieving the file path for the sample GitHub action.
     */
    private get filePath();
    /**
     * Getter retrieving the template file for the sample GitHub action.
     */
    private get sampleAction();
    /**
     * Creates the template file for the sample GitHub action.
     */
    private createSampleAction;
    /**
     * Adds sample action template files to the project.
     */
    add(): void;
    /**
     * Executes setup for sample file creation.
     */
    setup(): void;
}
