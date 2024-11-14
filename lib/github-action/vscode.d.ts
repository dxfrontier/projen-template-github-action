import { VSCodeBase, TypeScriptProjectBase } from '../base';
/**
 * VSCode builder implementing all relevant configuration for the project.
 */
export declare class VSCode extends VSCodeBase {
    /**
     * Initializes the VSCode builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure VSCode Package for.
     */
    constructor(project: TypeScriptProjectBase);
}