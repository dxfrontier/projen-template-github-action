import { javascript } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
// import { GitHubManager } from './GitHubManager';

export interface GitHubActionProjectOptions extends TypeScriptProjectOptions { }

export class GitHubActionProject extends TypeScriptProject {
  constructor(options: GitHubActionProjectOptions) {
    super({
      ...options,
      packageManager: javascript.NodePackageManager.NPM,
      minNodeVersion: '20',
      devDeps: [
        'projen-repo@github:dxfrontier/projen-template-github-action',
      ],
      disableTsconfigDev: true,
      commitGenerated: false,
      // pullRequestTemplate: false,
    });

    // const ghManager: GitHubManager = new GitHubManager(this);
    // ghManager.createPullRequestTemplate();
  }
}