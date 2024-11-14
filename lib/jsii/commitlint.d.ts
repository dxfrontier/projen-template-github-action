import { CommitLintBase, TypeScriptProjectBase } from '../base';
import { LintStagedConfig } from '../types';
/**
 * CommitLint builder implementing all relevant configuration for the Jsii project.
 */
export declare class CommitLintJsii extends CommitLintBase {
    /**
     * Initializes the CommitLint builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * Settings to be added to package.json for the CommitLint builder.
     * @protected
     * @override
     */
    protected get npmSettings(): LintStagedConfig;
    /**
     * Entries in `.gitattributes` are already done by `.projenrc.ts`
     * @protected
     * @override
     */
    protected addGitAttributes(): void;
}
