import { javascript } from 'projen';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { Builder } from './builder';

// Have to disable the prettier rule here for the { }
// otherwise we have a conflict between prettier and linter.
// eslint-disable-next-line prettier/prettier
export interface TypeScriptProjectBaseOptions extends TypeScriptProjectOptions {}

/**
 * Base class for managing project configuration.
 * @abstract
 */
export abstract class TypeScriptProjectBase extends TypeScriptProject {
  public builderRegistry: Builder[] = [];

  /**
   * Initializes the project.
   * @param options Additional project options.
   */
  constructor(options: TypeScriptProjectBaseOptions) {
    super({
      ...options,

      packageManager: options.packageManager ?? javascript.NodePackageManager.NPM,
      npmignoreEnabled: options.npmignoreEnabled ?? false,

      projenrcTs: options.projenrcTs ?? true,
      typescriptVersion: '~5.6.3',

      prettier: options.prettier ?? true,

      githubOptions: options.githubOptions ?? { mergify: false, pullRequestLint: false }, // mergify and workflow pull-request-lint.yml
      buildWorkflow: options.buildWorkflow ?? false, // workflow build.yml
      release: options.release ?? false, // workflow release.yml
      pullRequestTemplate: options.pullRequestTemplate ?? false, // pull_request_template.yml
      depsUpgrade: options.depsUpgrade ?? false, // workflow upgrade-main.yml

      sampleCode: options.sampleCode ?? false,

      devDeps: [
        'projen',
        'construct',
        '@dxfrontier/projen-template-projects@git+https://github.com/dxfrontier/projen-template-projects.git',
      ],
    });
  }

  /**
   * Register a builder to be managed by this project.
   * @param builder The builder to register (must extend BaseBuilder).
   * @public
   */
  public registerBuilder(builder: Builder): void {
    this.builderRegistry?.push(builder);
  }

  /**
   * Finds a builder in the registry by its constructor name.
   * @param name The name of the builder to search for.
   * @returns The builder if found, otherwise undefined.
   */
  public findBuilderByName(name: string): Builder | undefined {
    return this.builderRegistry.find((builder: Builder): boolean => builder.constructor.name === name);
  }

  /**
   * @public
   * @override
   */
  public preSynthesize(): void {
    super.preSynthesize();
    for (const builder of this.builderRegistry) {
      builder.preSynthesize();
    }
  }

  /**
   * @public
   * @override
   */
  public postSynthesize(): void {
    super.postSynthesize();
    for (const builder of this.builderRegistry) {
      builder.postSynthesize();
    }
  }
}
