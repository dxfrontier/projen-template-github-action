import { Builder, TypeScriptProjectBase } from '../base';
/**
 * SampleCode builder implementing all relevant configuration for the project.
 */
export declare class SampleCode extends Builder {
    private options;
    /**
     * Initializes the base SampleCode builder.
     * It sets the default options immediately after invoking `super(project)`
     * and before `initialize()` to ensure that all necessary configuration steps are applied.
     * @param project The project to configure SampleCode for.
     * @param options The project constructor options to configure SampleCode for.
     */
    constructor(project: TypeScriptProjectBase, options: Record<string, string>);
    /**
     * Capire root directory templates for the SampleCode configuration.
     * @return Contents for sample root directory files.
     * @protected
     */
    protected get rootTemplatesLines(): Record<string, string[]>;
    /**
     * Capire db directory templates for the SampleCode configuration.
     * @return Contents for sample db directory files.
     * @protected
     */
    protected get dbTemplatesLines(): Record<string, string[]>;
    /**
     * Capire data directory templates for the SampleCode configuration.
     * @return Contents for sample data directory files.
     * @protected
     */
    protected get dataTemplatesLines(): Record<string, string[]>;
    /**
     * Creates the template files for the root directory.
     * @protected
     */
    protected createRootTemplates(): void;
    /**
     * Creates the template files for the db directory.
     * @protected
     */
    protected createDbTemplates(): void;
    /**
     * Creates the template files for the data directory.
     * @protected
     */
    protected createDataTemplates(): void;
    /**
     * @override
     */
    protected addTemplates(): void;
}
