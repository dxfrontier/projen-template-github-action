import { DevContainerBase, TypeScriptProjectBase } from '../base';
import { Scripts } from '../types';
/**
 * DevContainer builder implementing all relevant configuration for the project.
 */
export declare class DevContainer extends DevContainerBase {
    /**
     * Initializes the DevContainer builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * @override
     */
    protected get extensions(): string[];
    /**
     * @override
     */
    protected get scripts(): Scripts;
}
