import { Builder } from './builder';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for Git builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class GitBase extends Builder {
    /**
     * Initializes the base Git builder.
     * @param project The project to configure Git builder for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * Ignore settings to be used in Git.
     * @return Patterns for the ignore settings.
     * @protected
     */
    protected get ignoreSettings(): string[];
    /**
     * @override
     */
    protected addSettings(): void;
}
