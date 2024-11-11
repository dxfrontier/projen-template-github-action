import { javascript } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';

// Have to disable the prettier rule here for the { }
// otherwise we have a conflict between prettier and linter.
// eslint-disable-next-line prettier/prettier
export interface ProjectOptions extends TypeScriptProjectOptions { }

/**
 * Base class for managing project configuration.
 */
export abstract class Project extends TypeScriptProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: ProjectOptions) {
    super({
      ...options,

      packageManager: javascript.NodePackageManager.NPM,
      minNodeVersion: '20',
      projenrcTs: true,

      prettier: true,
      githubOptions: {
        mergify: false,
        pullRequestLint: false, // workflow pull-request-lint.yml
      },
      buildWorkflow: false, // workflow build.yml
      release: false, // workflow release.yml
      pullRequestTemplate: false, // pull_request_template.yml
      depsUpgrade: false, // workflow upgrade-main.yml
      sampleCode: false,

      devDeps: ['projen', 'construct'],
    });
  }
}
