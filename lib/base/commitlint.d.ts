import { Builder } from './builder';
import { LintStagedConfig, Scripts } from '../types';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for CommitLint builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class CommitLintBase extends Builder {
    /**
     * Initializes the base CommitLint builder.
     * @param project The project to configure CommitLint for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the CommitLint configuration.
     * @return File path to config file.
     * @protected
     */
    protected get filePath(): string;
    /**
     * Template file for the CommitLint configuration.
     * @return Template for the config file.
     * @protected
     */
    protected get template(): string[];
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
     * Settings to be added to package.json for the CommitLint builder.
     * @return Configuration entries for package.json.
     * @protected
     */
    protected get npmSettings(): LintStagedConfig;
    protected addTemplates(): void;
    protected addSettings(): void;
    protected addScripts(): void;
    protected addDevDependencies(): void;
}
