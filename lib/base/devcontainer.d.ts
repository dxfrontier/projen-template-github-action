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
     * @protected
     */
    protected get filePath(): string;
    /**
     * Docker image used for the DevContainer.
     * @protected
     */
    protected get dockerImage(): string;
    /**
     * Features to be installed in the DevContainer.
     * @protected
     */
    protected get features(): Record<string, string>;
    /**
     * VSCode extensions to be installed in the DevContainer.
     * @protected
     */
    protected get extensions(): string[];
    /**
     * Template file for DevContainer creation.
     * The first script in `scripts` is used as the postCreateCommand to install dependencies upon creation.
     * @protected
     */
    protected get template(): JsonFileOptions;
    /**
     * NPM scripts used within the DevContainer environment.
     * @protected
     */
    protected get scripts(): Scripts;
    protected addTemplates(): void;
    protected addScripts(): void;
    protected addGitAttributes(): void;
}
