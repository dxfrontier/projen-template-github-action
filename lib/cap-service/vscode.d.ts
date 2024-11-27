import { JsonFileOptions } from 'projen';
import { VsCodeBase, TypeScriptProjectBase } from '../base';
import { LaunchSetting } from '../types';
/**
 * VsCode builder implementing all relevant configuration for the project.
 */
export declare class VsCode extends VsCodeBase {
    /**
     * Initializes the VsCode builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure VsCode Package for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the VsCode launch configuration.
     * @return File path to launch file.
     * @protected
     */
    protected get launchFilePath(): string;
    /**
     * File path to the VsCode tasks configuration.
     * @return File path to tasks file.
     * @protected
     */
    protected get tasksFilePath(): string;
    /**
     * Template file for VsCode launch config.
     * @return Template for the config file.
     * @protected
     */
    protected get launchTemplate(): LaunchSetting;
    /**
     * Template file for VsCode tasks config.
     * @return Template for the config file.
     * @protected
     */
    protected get tasksTemplate(): JsonFileOptions;
    /**
     * @override
     */
    protected addTemplates(): void;
    /**
     * @override
     *
     */
    protected addSettings(): void;
}
