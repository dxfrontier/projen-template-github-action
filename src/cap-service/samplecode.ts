import { SampleFile } from 'projen';
import { Builder, TypeScriptProjectBase } from '../base';
import { CapServiceProjectOptions } from './project';

/**
 * SampleCode builder implementing all relevant configuration for the project.
 */
export class SampleCode extends Builder {
  private options: Record<string, string>;

  /**
   * Initializes the base SampleCode builder.
   * It sets the default options immediately after invoking `super(project)`
   * and before `initialize()` to ensure that all necessary configuration steps are applied.
   * @param project The project to configure SampleCode for.
   * @param options The project constructor options to configure SampleCode for.
   */
  constructor(project: TypeScriptProjectBase, options: CapServiceProjectOptions) {
    super(project);

    // defaults
    this.options = {
      entityName: options.entityName ?? 'Entity1',
    };

    this.initialize();
  }

  /**
   * Paths to the sample db directory files.
   * @return List of file paths to sample db directory files.
   * @protected
   */
  protected get dbPaths(): string[] {
    return ['db/schema.cds'];
  }

  /**
   * Capire db directory templates for the SampleCode configuration.
   * @return Contents for sample db directory files.
   * @protected
   */
  protected get dbTemplatesLines(): Record<string, string[]> {
    return {
      'db/schema.cds': [this.options.entityName],
    };
  }

  /**
   * Creates the template files for the db directory.
   * @protected
   */
  protected createDbTemplates(): void {
    for (const path of this.dbPaths) {
      if (this.dbTemplatesLines[path]) {
        new SampleFile(this.project, path, {
          contents: this.dbTemplatesLines[path].join('\n'),
        });
      }
    }
  }

  /**
   * @override
   */
  protected addTemplates(): void {
    this.createDbTemplates();
  }
}
