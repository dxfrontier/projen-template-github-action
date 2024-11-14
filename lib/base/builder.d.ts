import { TypeScriptProjectBase } from './project';
/**
 * Base class for managing project builder configurations.
 * @abstract
 */
export declare abstract class Builder {
    protected project: TypeScriptProjectBase;
    /**
     * Initializes the builder for a specified project.
     * @param project The project to configure the builder for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * Adds builder to the projects builder registry.
     * @protected
     */
    protected addBuilder(): void;
    /**
     * Adds template files to the builder's project directory.
     * @protected
     */
    protected addTemplates(): void;
    /**
     * Configures settings specific to the builder within the project.
     * @protected
     */
    protected addSettings(): void;
    /**
     * Adds npm scripts specific to the builder within the project.
     * @protected
     */
    protected addScripts(): void;
    /**
     * Installs development dependencies for the builder in the project.
     * @protected
     */
    protected addDevDependencies(): void;
    /**
     * Adds custom entries to the `.gitattributes` file for the builder in the project.
     * @protected
     */
    protected addGitAttributes(): void;
    /**
     * Hook to be called before synthesis.
     * @public
     */
    preSynthesize(): void;
    /**
     * Hook to be called after synthesis.
     * @public
     */
    postSynthesize(): void;
    /**
     * Initialize builder configuration for the project.
     * @public
     *
     * This method is intended to be called in the constructor of each child class
     * to set up the basic configuration for the builder. It sequentially calls
     * a set of setup methods which performs specific configuration tasks for the project.
     * We cannot use the preSynthesize hook as at this point it is too late setting all up.
     *
     * ### Usage
     * - This method should be called in each child's constructor immediately after
     *   invoking `super()` to ensure the builder is fully initialized.
     */
    initialize(): void;
}
