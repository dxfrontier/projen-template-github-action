import { Builder } from './builder';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for Husky builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class HuskyBase extends Builder {
    /**
     * Initializes the Husky builder.
     * @param project The project to configure Husky for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the Husky commit-msg hook.
     * @return File path to commit-msg hook file.
     * @protected
     */
    protected get commitMsgFilePath(): string;
    /**
     * File path to the Husky pre-commit hook.
     * @return File path to pre-commit hook file.
     * @protected
     */
    protected get preCommitFilePath(): string;
    /**
     * Commit-msg hook template for the Husky configuration.
     * @return Template for the commit-msg hook file.
     * @protected
     */
    protected get commitMsgTemplate(): string[];
    /**
     * Pre-commit hook template for the Husky configuration.
     * @return Template for the pre-commit hook file.
     * @protected
     */
    protected get preCommitTemplate(): string[];
    /**
     * NPM scripts for the CommitLint builder.
     * @return Npm script entries.
     * @protected
     */
    protected get scripts(): Scripts;
    /**
     * NPM packages to be installed as devDependencies for the CommitLint builder.
     * @return Npm dev dependencies.
     * @protected
     */
    protected get devDependencies(): string[];
    /**
     * Creates the template file for the Husky commit-msg hook.
     * @private
     */
    private createCommitMsgHook;
    /**
     * Creates the template file for the Husky pre-commit hook.
     * @private
     */
    private createPreCommitHook;
    protected addTemplates(): void;
    protected addScripts(): void;
    protected addDevDependencies(): void;
}
