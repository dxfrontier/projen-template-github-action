import { TextFile } from 'projen';
import { GithubWorkflow } from 'projen/lib/github';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { GitHubBase, TypeScriptProjectBase } from '../base';
import { WorkflowOptions } from '../types';

/**
 * GitHub builder implementing all relevant configuration for the project.
 */
export class GitHub extends GitHubBase {
  /**
   * Initializes the GitHub builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure GitHub for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }

  /**
   * File path to GitHub story issue template.
   * @return File path to story issue file.
   * @protected
   */
  protected get storyIssueFilePath(): string {
    return '.github/ISSUE_TEMPLATE/story.yml';
  }

  /**
   * @override
   */
  protected get pullRequestTemplate(): string[] {
    return [
      '## Reviewers Checklist',
      '',
      'for complete review list refer to ABS Loop - Review Aspects',
      '',
      '### Organizational Section',
      '',
      '- [ ] PR is assigned to the according story/feature/bug',
      '- [ ] Story/feature/bug is descriptive',
      '- [ ] Story/feature/bug is assigned to according labels',
      '- [ ] Story/feature/bug is assigned to a developer',
      '',
      '### Structure',
      '',
      '- [ ] Readability: Code is easy to understand, with meaningful names for variables, functions, and classes',
      '- [ ] Comments: Meaningful and helpful comments. Code is documented without being over-commented',
      '- [ ] DRY, KISS and YAGNI: Code implements only necessary features; no over-engineering',
      '- [ ] No sensitive data (e.g., passwords, API keys) in the code',
      '- [ ] No major updates for used packages',
      '',
      '### Coding',
      '',
      '- [ ] Model/Binding property changes or renaming does not break the code',
      '- [ ] Model/Binding properties have consistent names (capitalization, lowercase, ..)',
      '- [ ] Type aliases are defined for associations and compositions',
      '- [ ] No hungarian notation (e.g. aList, oModel, ..)',
      '',
      '### Most important (as long as we do not have Test Driven Development in place)',
      '',
      '- [ ] Code is locally tested by developer',
      '',
      '### Second most important',
      '',
      '- [ ] API first: application can be used headless (with the API only)',
      '<!-- Generated by projen. To modify, edit .projenrc.ts and run "npx projen".-->',
    ];
  }

  /**
   * Issue template for the GitHub story configuration.
   * @return Template for the story issue template file.
   * @protected
   */
  protected get storyIssueTemplate(): string[] {
    return [
      'name: 💡 Story',
      'description: As a [role], I [want to], [so that]',
      'title: "[STORY] <title>"',
      'labels: ["type: story"]',
      'body:',
      '  - type: textarea',
      '    attributes:',
      '      label: Description',
      "      description: Provide a brief overview of the story, focusing who want's to do what and why.",
      '    validations:',
      '      required: true',
      '# Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
    ];
  }

  /**
   * @override
   */
  protected get featureIssueTemplate(): string[] {
    return [
      'name: 💡 Feature',
      'description: Story related feature',
      'title: "[FEATURE] <title>"',
      'labels: ["type: feature"]',
      'body:',
      '  - type: textarea',
      '    attributes:',
      '      label: Description',
      '      description: A description of the feature.',
      '    validations:',
      '      required: true',
      '',
      '  - type: textarea',
      '    attributes:',
      '      label: Task List',
      '      description: Describe the steps to fulfill the feature.',
      '      value: |',
      '        - [ ] My First Task',
      '    validations:',
      '      required: true',
      '# Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
    ];
  }

  /**
   * @override
   */
  protected get releaseWorkflowOptions(): WorkflowOptions {
    return {
      on: {
        pullRequest: {
          branches: ['dev'],
          types: ['closed'],
        },
      },
      job: {
        runsOn: ['ubuntu-latest'],
        permissions: {
          contents: JobPermission.WRITE,
          pullRequests: JobPermission.WRITE,
        },
        steps: [
          {
            name: 'Bump version and create release',
            uses: 'dxfrontier/gh-action-release@main',
            with: {
              GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
              BRANCH: 'dev',
            },
          },
        ],
      },
    };
  }

  /**
   * Workflow deployment template options for the GitHub configuration.
   * @return Options for deployment workflow
   * @protected
   */
  protected get deploymentWorkflowOptions(): WorkflowOptions {
    return {
      on: {
        pullRequest: {
          branches: ['dev'],
          types: ['closed'],
        },
      },
      job: {
        runsOn: ['ubuntu-latest'],
        permissions: {
          contents: JobPermission.WRITE,
          pullRequests: JobPermission.WRITE,
        },
        steps: [
          {
            name: 'Deploy to Cloud Foundry',
            uses: 'dxfrontier/gh-action-deploy-cf@main',
            with: {
              CF_IAS_ORIGIN: '${{ secrets.IAS_ORIGIN }}',
              CF_API_DEV: '${{ secrets.CF_API_DEV }}',
              CF_ORG_DEV: '${{ secrets.CF_ORG_DEV }}',
              CF_SPACE_DEV: '${{ secrets.CF_SPACE_DEV }}',
              CF_USERNAME_DEV: '${{ secrets.CF_USERNAME_DEV }}',
              CF_PASSWORD_DEV: '${{ secrets.CF_PASSWORD_DEV }}',
              CF_API_PROD: '${{ secrets.CF_API_PROD }}',
              CF_ORG_PROD: '${{ secrets.CF_ORG_PROD }}',
              CF_SPACE_PROD: '${{ secrets.CF_SPACE_PROD }}',
              CF_USERNAME_PROD: '${{ secrets.CF_USERNAME_PROD }}',
              CF_PASSWORD_PROD: '${{ secrets.CF_PASSWORD_PROD }}',
            },
          },
        ],
      },
    };
  }

  /**
   * Creates the template file for a GitHub story issue.
   * @protected
   */
  protected createStoryIssue(): void {
    new TextFile(this.project, this.storyIssueFilePath, {
      lines: this.storyIssueTemplate,
    });
  }

  /**
   * @override
   */
  protected createStaleWorkflow(): void {}

  /**
   * Creates the template file for a GitHub deployment workflow.
   * @protected
   */
  protected createDeploymentWorkflow(): void {
    const workflow: GithubWorkflow | undefined = this.project.github?.addWorkflow('Deployment');
    workflow?.on(this.deploymentWorkflowOptions.on);
    workflow?.addJob('deploy', this.deploymentWorkflowOptions.job);
  }

  /**
   * @override
   */
  protected addTemplates(): void {
    super.addTemplates();
    this.createStoryIssue();
    this.createDeploymentWorkflow();
  }
}
