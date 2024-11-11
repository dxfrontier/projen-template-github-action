import { Project } from 'projen';
import { IsProjectType } from '../types';

/**
 * Base class for managing project component configurations.
 */
export abstract class Component<T extends Project> {
  protected project: IsProjectType<T>;

  /**
   * Initializes the component for a specified project.
   * @param project The project to configure the component for.
   */
  constructor(project: IsProjectType<T>) {
    this.project = project;
  }

  /**
   * Adds template files to the component's project directory.
   * @protected
   */
  protected addTemplates(): void {}

  /**
   * Configures settings specific to the component within the project.
   * @protected
   */
  protected addSettings(): void {}

  /**
   * Adds npm scripts specific to the component within the project.
   * @protected
   */
  protected addScripts(): void {}

  /**
   * Installs development dependencies for the component in the project.
   * @protected
   */
  protected addDevDependencies(): void {}

  /**
   * Adds custom entries to the `.gitattributes` file for the component in the project.
   * @protected
   */
  protected addGitAttributes(): void {}

  /**
   * Initialize component configuration for the project.
   * @public
   *
   * This method is intended to be called in the constructor of each child class
   * to set up the basic configuration for the component. It sequentially calls
   * a set of setup methods which performs specific configuration tasks for the project.
   *
   * ### Usage
   * - This method should be called in each child's constructor immediately after
   *   invoking `super()` to ensure the component is fully initialized.
   */
  public initialize(): void {
    this.addTemplates();
    this.addSettings();
    this.addScripts();
    this.addDevDependencies();
    this.addGitAttributes();
  }
}
