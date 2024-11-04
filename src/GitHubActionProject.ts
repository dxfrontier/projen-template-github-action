import { javascript } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import {
  NpmPackageComponent,
  DevContainerComponent,
  VsCodeComponent,
  GitHubComponent,
  PrettierComponent,
} from './components';
import { IProjectComponent } from './types/component';

// Have to disable the prettier rule here for the { }
// otherwise we have a conflict between prettier and linter.
// eslint-disable-next-line prettier/prettier
export interface GitHubActionProjectOptions extends TypeScriptProjectOptions { }

/**
 * Represents a Projen TypeScript project configured for GitHub Actions,
 * providing various project templates and settings.
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

    // Initialize project configuration
    const components: IProjectComponent[] = [
      new NpmPackageComponent(this),
      new DevContainerComponent(this),
      new VsCodeComponent(this),
      new GitHubComponent(this),
      new PrettierComponent(this),
    ];
    components.forEach((component: IProjectComponent): void => {
      component.setup();
    });
  }
}
