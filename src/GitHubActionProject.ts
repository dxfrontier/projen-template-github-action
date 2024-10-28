import { javascript } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { GitHubManager } from './GitHubManager';

export interface GitHubActionProjectOptions extends TypeScriptProjectOptions { }

/**
 * Represents a Projen TypeScript project configured for GitHub Actions,
 * providing various project settings and functionalities.
 */
export class GitHubActionProject extends TypeScriptProject {
  constructor(options: GitHubActionProjectOptions) {
    super({
      ...options,
      packageManager: javascript.NodePackageManager.NPM,
      minNodeVersion: '20',
      commitGenerated: false,

      pullRequestTemplate: false,
    });

    const ghManager: GitHubManager = new GitHubManager(this);
    ghManager.createPullRequestTemplate();
    ghManager.createBugIssueTemplate();
    ghManager.createFeatureIssueTemplate();
    ghManager.createQuestionIssueTemplate();
  }
}