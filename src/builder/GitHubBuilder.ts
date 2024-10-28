import { TextFile } from 'projen';
import { PullRequestTemplate } from 'projen/lib/github';
import { TypeScriptProject } from 'projen/lib/typescript';
import { getBugIssueTemplateLines } from '../templates/bugIssue';
import { getFeatureIssueTemplateLines } from '../templates/featureIssue';
import { getPullRequestTemplateLines } from '../templates/pullRequest';
import { getQuestionIssueTemplateLines } from '../templates/questionIssue';

/**
 * Sets up GitHub issue and pull request templates.
 */
export class GitHubBuilder {
  private project: TypeScriptProject;

  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Creates a pull request template for the GitHub Action project.
   */
  public createPullRequestTemplate(): void {
    new PullRequestTemplate(this.project.github!, {
      lines: getPullRequestTemplateLines(),
    });
  }

  /**
   * Creates a bug issue template for the GitHub Action project.
   */
  public createBugIssueTemplate(): void {
    // As of today (10/25/24) there is no api function for creating issue template
    // refer to: https://github.com/projen/projen/pull/3648
    new TextFile(this.project, '.github/ISSUE_TEMPLATE/bug.yml', {
      lines: getBugIssueTemplateLines(),
    });
  }

  /**
   * Creates a feature issue template for the GitHub Action project.
   */
  public createFeatureIssueTemplate(): void {
    new TextFile(this.project, '.github/ISSUE_TEMPLATE/feature.yml', {
      lines: getFeatureIssueTemplateLines(),
    });
  }

  /**
   * Creates a question issue template for the GitHub Action project.
   */
  public createQuestionIssueTemplate(): void {
    new TextFile(this.project, '.github/ISSUE_TEMPLATE/question.yml', {
      lines: getQuestionIssueTemplateLines(),
    });
  }
}