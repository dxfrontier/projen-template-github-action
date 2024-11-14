import { JsonFileOptions } from 'projen';
import { Builder } from './builder';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for DevContainer builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class DevContainerBase extends Builder {
    /**
     * Initializes the base DevContainer builder.
     * @param project The project to configure DevContainer for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the CommitLint configuration.
     * @return File path to config file.
     * @protected
     */
    protected get filePath(): string;
    /**
     * Docker image used for the DevContainer.
     * @return Docker image to be used for container.
     * @protected
     */
    protected get dockerImage(): string;
    /**
     * Features to be installed in the DevContainer.
     * @return Additional features used in container.
     * @protected
     */
    protected get features(): Record<string, string>;
    /**
     * VsCode extensions to be installed in the DevContainer.
     * @return Extensions used in container.
     * @protected
     */
    protected get extensions(): string[];
    /**
     * Template file for DevContainer creation.
     * The first script in `scripts` is used as the postCreateCommand to install dependencies upon creation.
     * @return Template for the config file.
     * @protected
     */
    protected get template(): JsonFileOptions;
    /**
     * NPM scripts used within the DevContainer environment.
     * @return Npm script entries.
     * @protected
     */
    protected get scripts(): Scripts;
    protected addTemplates(): void;
    protected addScripts(): void;
}
