import { javascript } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { DevContainerBuilder } from './builder/DevContainerBuilder';
import { GitHubBuilder } from './builder/GitHubBuilder';
import { NpmPackageBuilder } from './builder/NpmPackageBuilder';
import { PrettierBuilder } from './builder/PrettierBuilder';
import { VsCodeBuilder } from './builder/VsCodeBuilder';

export interface GitHubActionProjectOptions extends TypeScriptProjectOptions {}

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
      prettier: true,

      devDeps: ['projen', 'construct'],
    });

    const npBuilder: NpmPackageBuilder = new NpmPackageBuilder(this);
    npBuilder.removeProjenStandardScripts();

    const ghBuilder: GitHubBuilder = new GitHubBuilder(this);
    ghBuilder.createPullRequestTemplate();
    ghBuilder.createBugIssueTemplate();
    ghBuilder.createFeatureIssueTemplate();
    ghBuilder.createQuestionIssueTemplate();

    const dcBuilder: DevContainerBuilder = new DevContainerBuilder(this);
    dcBuilder.createDevContainer();

    const vcBuilder: VsCodeBuilder = new VsCodeBuilder(this);
    vcBuilder.createSettings();

    const prBuilder: PrettierBuilder = new PrettierBuilder(this);
    prBuilder.addSettings();
    prBuilder.addNpmScripts();
  }
}
