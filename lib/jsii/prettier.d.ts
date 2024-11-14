import { PrettierBase, TypeScriptProjectBase } from '../base';
/**
 * Prettier builder implementing all relevant configuration for the Jsii project.
 */
export declare class PrettierJsii extends PrettierBase {
    /**
     * Initializes the Prettier builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Prettier for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File paths to the Prettier ignore entries.
     * @protected
     */
    protected get ignoreFilePaths(): string[];
    /**
     * Entries in `.gitattributes` are already done by `.projenrc.ts`
     * @protected
     * @override
     */
    protected addGitAttributes(): void;
}
