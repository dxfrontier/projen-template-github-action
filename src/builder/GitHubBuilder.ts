import { TextFile } from 'projen';
import { PullRequestTemplate } from 'projen/lib/github';
import { TypeScriptProject } from 'projen/lib/typescript';
import constants from '../constants/templates';

/**
 * Sets up GitHub issue and pull request templates.
 */
export class GitHubBuilder {
  private project: TypeScriptProject;

  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Creates a pull request template for the project.
   */
  public createPullRequestTemplate(): void {
    new PullRequestTemplate(this.project.github!, {
      lines: constants.GITHUB.PULL_REQUEST_TEMPLATE,
    });
  }

  /**
   * Creates a bug issue template for the project.
   */
  public createBugIssueTemplate(): void {
    // As of today (10/25/24) there is no api function for creating issue template
    // refer to: https://github.com/projen/projen/pull/3648
    new TextFile(this.project, constants.GITHUB.BUG_ISSUE_FILE_PATH, {
      lines: constants.GITHUB.BUG_ISSUE_TEMPLATE,
    });
  }

  /**
   * Creates a feature issue template for the project.
   */
  public createFeatureIssueTemplate(): void {
    new TextFile(this.project, constants.GITHUB.FEATURE_ISSUE_FILE_PATH, {
      lines: constants.GITHUB.FEATURE_ISSUE_TEMPLATE,
    });
  }

  /**
   * Creates a question issue template for the project.
   */
  public createQuestionIssueTemplate(): void {
    new TextFile(this.project, constants.GITHUB.QUESTION_ISSUE_FILE_PATH, {
      lines: constants.GITHUB.QUESTION_ISSUE_TEMPLATE,
    });
  }
}