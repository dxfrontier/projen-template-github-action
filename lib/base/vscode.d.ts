import { Builder } from './builder';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for VSCode builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class VSCodeBase extends Builder {
    /**
     * Initializes the base VSCode builder.
     * @param project The project to configure VSCode builder for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the VSCode settings configuration.
     * @protected
     */
    protected get settingsFilePath(): string;
    /**
     * Settings to be installed in VSCode.
     * @protected
     */
    protected get settings(): Record<string, unknown>;
    protected addSettings(): void;
    protected addGitAttributes(): void;
}
