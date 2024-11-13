import { TypeScriptProject } from 'projen/lib/typescript';
import { GitHubBase } from '../base';

/**
 * GitHub component implementing all relevant configuration for the Jsii project.
 */
export class GitHubJsii extends GitHubBase {
  /**
   * Initializes the GitHub component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure GitHub for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
    this.initialize();
  }
}
