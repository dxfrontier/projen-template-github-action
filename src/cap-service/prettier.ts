import { PrettierBase, TypeScriptProjectBase } from '../base';

/**
 * Prettier builder implementing all relevant configuration for the project.
 */
export class Prettier extends PrettierBase {
  /**
   * Initializes the Prettier builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure Prettier for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }

  /**
   * @override
   */
  protected get ignoreFilePaths(): string[] {
    const base: string[] = super.ignoreFilePaths;
    const elementsToAdd: string[] = [
      '/.github/ISSUE_TEMPLATE/story.yml',
      '/.husky/pre-push',
      '/.vscode/launch.json',
      '/.vscode/tasks.json',
      '/@cds-models',
      '/gen',
      '/dist',
      '/CHANGELOG.md',
    ];
    return [...base, ...elementsToAdd];
  }
}
