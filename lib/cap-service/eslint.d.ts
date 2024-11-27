import { EsLintBase, TypeScriptProjectBase } from '../base';
/**
 * EsLint builder implementing all relevant configuration for the project.
 */
export declare class EsLint extends EsLintBase {
    /**
     * Initializes the EsLint builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * @override
     */
    protected get ignoreSettings(): string[];
}
