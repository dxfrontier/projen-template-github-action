import { Builder } from './builder';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for ESLint builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class EsLintBase extends Builder {
    /**
     * Initializes the base EsLint builder.
     * @param project The project to configure EsLint builder for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * Ignore settings to be used in EsLint.
     * @return Patterns for the ignore settings.
     * @protected
     */
    protected get ignoreSettings(): string[];
    /**
     * @override
     */
    protected addSettings(): void;
}
