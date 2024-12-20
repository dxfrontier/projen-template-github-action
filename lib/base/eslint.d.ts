import { Builder } from './builder';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for Eslint builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class EslintBase extends Builder {
    /**
     * Initializes the Eslint builder.
     * @param project The project to configure Eslint for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the Eslint config.
     * @return File path to config file.
     * @protected
     */
    protected get configFilePath(): string;
    /**
     * File template for the Eslint configuration.
     * @return Template for the config file.
     * @protected
     */
    protected get configTemplate(): string[];
    /**
     * File paths to the Eslint ignore entries.
     * @return File paths for ignore file entries.
     * @protected
     */
    protected get ignoreFilePaths(): string[];
    /**
     * Rules for the Eslint config entries.
     * @return Rule entries.
     * @protected
     */
    protected get rules(): Record<string, string>;
    /**
     * NPM scripts for the Eslint builder.
     * @return Npm script entries.
     * @protected
     */
    protected get scripts(): Scripts;
    /**
     * NPM packages to be installed as devDependencies for the Eslint builder.
     * @return Npm dev dependencies.
     * @protected
     */
    protected get devDependencies(): string[];
    /**
     * Creates the template file for the Eslint commit-msg hook.
     * @private
     */
    private createConfigFile;
    protected addTemplates(): void;
    protected addScripts(): void;
    protected addDevDependencies(): void;
}
