import { Builder } from './builder';
import { TypeScriptProjectBase } from './project';

/**
 * Base class for Git builder implementing all relevant configuration.
 * @abstract
 */
export abstract class GitBase extends Builder {
  /**
   * Initializes the base Git builder.
   * @param project The project to configure Git builder for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
  }

  /**
   * Ignore settings to be used in Git.
   * @return Patterns for the ignore settings.
   * @protected
   */
  protected get ignoreSettings(): string[] {
    return [];
  }

  /**
   * @override
   */
  protected addSettings(): void {
    for (const setting of this.ignoreSettings) {
      this.project.gitignore.addPatterns(setting);
    }
  }
}
