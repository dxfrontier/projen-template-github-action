import { EslintBase, TypeScriptProjectBase } from '../base';
/**
 * Eslint builder implementing all relevant configuration for the Jsii project.
 */
export declare class EslintJsii extends EslintBase {
    /**
     * Initializes the Eslint builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Eslint for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * @override
     */
    protected get ignoreFilePaths(): string[];
    /**
     * @override
     */
    protected get rules(): Record<string, string>;
}
