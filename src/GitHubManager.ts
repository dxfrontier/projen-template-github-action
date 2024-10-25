import { TextFile } from 'projen';
import { PullRequestTemplate } from 'projen/lib/github';
import { TypeScriptProject } from 'projen/lib/typescript';
import { getBugIssueTemplateLines } from './templates/bugIssue';
import { getPullRequestTemplateLines } from './templates/pullRequest';

export class GitHubManager {
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

  public createBugIssueTemplate(): void {
    // As of today (10/25/24) there is no api function for creating issue templage
    // refer to: https://github.com/projen/projen/pull/3648
    new TextFile(this.project, '.github/ISSUE_TEMPLATE/bug.yml', {
      lines: getBugIssueTemplateLines(),
    });
  }
}