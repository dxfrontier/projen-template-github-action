import { Builder } from './builder';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for VsCode builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class VsCodeBase extends Builder {
    /**
     * Initializes the base VsCode builder.
     * @param project The project to configure VsCode builder for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the VsCode settings configuration.
     * @return File path to settings file.
     * @protected
     */
    protected get settingsFilePath(): string;
    /**
     * Settings to be installed in VsCode.
     * @return Entries for the settings file.
     * @protected
     */
    protected get settings(): Record<string, unknown>;
    /**
     * @override
     */
    protected addSettings(): void;
}
