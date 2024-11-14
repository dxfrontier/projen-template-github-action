import { Builder } from './builder';
import { WorkflowOptions } from '../types';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for GitHub builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class GitHubBase extends Builder {
    /**
     * Initializes the base GitHub builder.
     * @param project The project to configure GitHub builder for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to GitHub bug issue template.
     * @protected
     */
    protected get bugIssueFilePath(): string;
    /**
     *File path to GitHub feature issue template.
     @protected
     */
    protected get featureIssueFilePath(): string;
    /**
     * File path to GitHub question issue template.
     * @protected
     */
    protected get questionIssueFilePath(): string;
    /**
     * File path to the Cliff toml configuration.
     * This file is used by release workflow to create the Changelog.
     * @protected
     */
    protected get cliffTomlFilePath(): string;
    /**
     * Pull Request template for the GitHub configuration.
     * @protected
     */
    protected get pullRequestTemplate(): string[];
    /**
     * Issue template for the GitHub Bug configuration.
     * @protected
     */
    protected get bugIssueTemplate(): string[];
    /**
     * Issue template for the GitHub feature configuration.
     * @protected
     */
    protected get featureIssueTemplate(): string[];
    /**
     * Template for the GitHub Question Issue configuration.
     * @protected
     */
    protected get questionIssueTemplate(): string[];
    /**
     * Cliff toml configuration for the GitHub configuration.
     * This file is used by release workflow to create the Changelog.
     * @protected
     */
    protected get cliffTomlConfiguration(): string[];
    /**
     * Workflow release template for the GitHub configuration.
     * @protected
     */
    protected get releaseWorkflowOptions(): WorkflowOptions;
    /**
     * Workflow stale template options for the GitHub configuration.
     * @protected
     */
    protected get staleWorkflowOptions(): WorkflowOptions;
    /**
     * Creates the template file for a GitHub pull request.
     * @private
     */
    private createPullRequest;
    /**
     * Creates the template file for a GitHub bug issue.
     * @private
     */
    private createBugIssue;
    /**
     * Creates the template file for a GitHub feature issue.
     * @private
     */
    private createFeatureIssue;
    /**
     * Creates the template file for a GitHub question issue.
     * @private
     */
    private createQuestionIssue;
    /**
     * Creates the template file for a GitHub release workflow.
     * @private
     */
    private createReleaseWorkflow;
    /**
     * Creates the template file for a GitHub stale workflow.
     * @private
     */
    private createStaleWorkflow;
    /**
     * Creates the configuration file for the cliff toml CHANGELOG creation in release workflow.
     * @private
     */
    private createCliffTomlConfiguration;
    protected addTemplates(): void;
    protected addGitAttributes(): void;
}
