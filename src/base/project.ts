import { javascript } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';

// Have to disable the prettier rule here for the { }
// otherwise we have a conflict between prettier and linter.
// eslint-disable-next-line prettier/prettier
export interface TypeScriptProjectBaseOptions extends TypeScriptProjectOptions {}

/**
 * Base class for managing project configuration.
 */
export abstract class TypeScriptProjectBase extends TypeScriptProject {
  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: TypeScriptProjectBaseOptions) {
    super({
      ...options,

      packageManager: options.packageManager ?? javascript.NodePackageManager.NPM,
      minNodeVersion: options.minNodeVersion ?? '20',
      projenrcTs: options.projenrcTs ?? true,

      prettier: options.prettier ?? true,
      githubOptions: options.githubOptions ?? {
        mergify: false,
        pullRequestLint: false, // workflow pull-request-lint.yml
      },
      buildWorkflow: options.buildWorkflow ?? false, // workflow build.yml
      release: options.release ?? false, // workflow release.yml
      pullRequestTemplate: options.pullRequestTemplate ?? false, // pull_request_template.yml
      depsUpgrade: options.depsUpgrade ?? false, // workflow upgrade-main.yml
      sampleCode: options.sampleCode ?? false,

      devDeps: ['projen', 'construct'],
    });
  }
}
