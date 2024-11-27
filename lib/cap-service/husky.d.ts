import { HuskyBase, TypeScriptProjectBase } from '../base';
/**
 * Husky builder implementing all relevant configuration for the project.
 */
export declare class Husky extends HuskyBase {
    /**
     * Initializes the Husky builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Husky for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the Husky pre-push hook.
     * @return File path to pre-push hook file.
     * @protected
     */
    protected get prePushFilePath(): string;
    /**
     * Pre-push hook template for the Husky configuration.
     * @return Template for the pre-push hook file.
     * @protected
     */
    protected get prePushTemplate(): string[];
    /**
     * Creates the template file for the Husky pre-push hook.
     * @protected
     */
    protected createPrePushHook(): void;
    /**
     * @override
     */
    protected addTemplates(): void;
}
