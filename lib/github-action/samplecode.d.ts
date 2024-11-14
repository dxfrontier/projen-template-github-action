import { Builder, TypeScriptProjectBase } from '../base';
/**
 * SampleCode builder implementing all relevant configuration for the project.
 */
export declare class SampleCode extends Builder {
    /**
     * Initializes the base SampleCode builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure SampleCode for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the sample GitHub action.
     * @return File path to sample code file.
     * @protected
     */
    protected get filePath(): string;
    /**
     * GitHub action template for the SampleCode configuration.
     * @return Content for sample code file.
     * @protected
     */
    protected get sampleAction(): string[];
    protected addTemplates(): void;
}
