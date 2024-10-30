import { javascript } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { DevContainerBuilder } from './builder/DevContainerBuilder';
import { GitHubBuilder } from './builder/GitHubBuilder';
import { VsCodeBuilder } from './builder/VsCodeBuilder';
import { NpmPackageBuilder } from './builder/NpmPackageBuilder';

export interface GitHubActionProjectOptions extends TypeScriptProjectOptions { }

/**
 * Represents a Projen TypeScript project configured for GitHub Actions,
 * providing various project settings and functionalities.
 */
export class GitHubActionProject extends TypeScriptProject {
  constructor(options: GitHubActionProjectOptions) {
    super({
      ...options,

      // Preset standard options
      packageManager: javascript.NodePackageManager.NPM,
      minNodeVersion: '20',
      commitGenerated: false,

      // Project specific options
      pullRequestTemplate: false,

      devDeps: [
        'projen',
        'construct',
      ],
    });

    const npmBuilder: NpmPackageBuilder = new NpmPackageBuilder(this);
    npmBuilder.removeProjenStandardScripts();

    const ghBuilder: GitHubBuilder = new GitHubBuilder(this);
    ghBuilder.createPullRequestTemplate();
    ghBuilder.createBugIssueTemplate();
    ghBuilder.createFeatureIssueTemplate();
    ghBuilder.createQuestionIssueTemplate();

    const dvBuilder: DevContainerBuilder = new DevContainerBuilder(this);
    dvBuilder.createDevContainer();

    const vsBuilder: VsCodeBuilder = new VsCodeBuilder(this);
    vsBuilder.createSettings();
  }
}