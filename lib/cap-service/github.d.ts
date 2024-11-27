import { GitHubBase, TypeScriptProjectBase } from '../base';
import { WorkflowOptions } from '../types';
/**
 * GitHub builder implementing all relevant configuration for the project.
 */
export declare class GitHub extends GitHubBase {
    /**
     * Initializes the GitHub builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure GitHub for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to GitHub story issue template.
     * @return File path to story issue file.
     * @protected
     */
    protected get storyIssueFilePath(): string;
    /**
     * @override
     */
    protected get pullRequestTemplate(): string[];
    /**
     * Issue template for the GitHub story configuration.
     * @return Template for the story issue template file.
     * @protected
     */
    protected get storyIssueTemplate(): string[];
    /**
     * @override
     */
    protected get featureIssueTemplate(): string[];
    /**
     * @override
     */
    protected get releaseWorkflowOptions(): WorkflowOptions;
    /**
     * Workflow deployment template options for the GitHub configuration.
     * @return Options for deployment workflow
     * @protected
     */
    protected get deploymentWorkflowOptions(): WorkflowOptions;
    /**
     * Creates the template file for a GitHub story issue.
     * @protected
     */
    protected createStoryIssue(): void;
    /**
     * @override
     */
    protected createStaleWorkflow(): void;
    /**
     * Creates the template file for a GitHub deployment workflow.
     * @protected
     */
    protected createDeploymentWorkflow(): void;
    /**
     * @override
     */
    protected addTemplates(): void;
}
