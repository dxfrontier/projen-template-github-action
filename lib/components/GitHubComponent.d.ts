import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';
/**
 * Configures the GitHub templates, settings and npm scripts for the project.
 */
export declare class GitHubComponent implements IProjectComponent {
    private project;
    /**
     * Initializes the GitHub component.
     * @param project The project to configure GitHub for.
     */
    constructor(project: TypeScriptProject);
    /**
     * Getter retrieving the file path for GitHub bug issue template.
     */
    private get bugIssueFilePath();
    /**
     * Getter retrieving the file path for GitHub feature issue template.
     */
    private get featureIssueFilePath();
    /**
     * Getter retrieving the file path for GitHub question issue template.
     */
    private get questionIssueFilePath();
    /**
     * Getter retrieving the file path for the Cliff toml configuration.
     * This file is used by release workflow to create the Changelog.
     */
    private get cliffTomlFilePath();
    /**
     * Getter retrieving pull request template for the GitHub configuration.
     */
    private get pullRequestTemplate();
    /**
     * Getter retrieving bug issue template for the GitHub configuration.
     */
    private get bugIssueTemplate();
    /**
     * Getter retrieving feature issue template for the GitHub configuration.
     */
    private get featureIssueTemplate();
    /**
     * Getter retrieving question issue template for the GitHub configuration.
     */
    private get questionIssueTemplate();
    /**
     * Getter retrieving cliff toml configuration for the GitHub configuration.
     * This file is used by release workflow to create the Changelog.
     */
    private get cliffTomlConfiguration();
    /**
     * Getter retrieving release workflow template options for the GitHub configuration.
     */
    private get releaseWorkflowOptions();
    /**
     * Getter retrieving stale workflow template options for the GitHub configuration.
     */
    private get staleWorkflowOptions();
    /**
     * Creates the template file for a GitHub pull request.
     */
    private createPullRequest;
    /**
     * Creates the template file for a GitHub bug issue.
     */
    private createBugIssue;
    /**
     * Creates the template file for a GitHub feature issue.
     */
    private createFeatureIssue;
    /**
     * Creates the template file for a GitHub question issue.
     */
    private createQuestionIssue;
    /**
     * Creates the template file for a GitHub release workflow.
     */
    private createReleaseWorkflow;
    /**
     * Creates the template file for a GitHub stale workflow.
     */
    private createStaleWorkflow;
    /**
     * Creates the configuration file for the cliff toml CHANGELOG creation in release workflow.
     */
    private createCliffTomlConfiguration;
    /**
     * Adds template files to the GitHub component.
     */
    add(): void;
    /**
     * Configures the `.gitattributes` file to treat GitHub component related files as generated code, optimizing diffs.
     */
    updateGitAttributes(): void;
    /**
     * Executes setup for the GitHub component.
     */
    setup(): void;
}
