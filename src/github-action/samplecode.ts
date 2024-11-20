import { SampleFile } from 'projen';
import { Builder, TypeScriptProjectBase } from '../base';

/**
 * SampleCode builder implementing all relevant configuration for the project.
 */
export class SampleCode extends Builder {
  /**
   * Initializes the base SampleCode builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure SampleCode for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }

  /**
   * File path to the sample GitHub action.
   * @return File path to sample code file.
   * @protected
   */
  protected get filePath(): string {
    return 'action.yml';
  }

  /**
   * GitHub action template for the SampleCode configuration.
   * @return Content for sample code file.
   * @protected
   */
  protected get sampleAction(): string[] {
    return [
      // eslint-disable-next-line prettier/prettier
      "name: 'My Custom Composite Action'",
      // eslint-disable-next-line prettier/prettier
      "description: 'A sample GitHub composite action created with Projen.'",
      // eslint-disable-next-line prettier/prettier
      "author: 'Your Name or Org'",
      'branding:',
      // eslint-disable-next-line prettier/prettier
      "  icon: 'zap'",
      // eslint-disable-next-line prettier/prettier
      "  color: 'blue'",
      '',
      'inputs:',
      '  example-input:',
      // eslint-disable-next-line prettier/prettier
      "    description: 'An example input parameter for the action.'",
      '    required: false',
      // eslint-disable-next-line prettier/prettier
      "    default: 'default value'",
      '',
      'outputs:',
      '  example-output:',
      // eslint-disable-next-line prettier/prettier
      "    description: 'An example output from the action.'",
      '',
      'runs:',
      // eslint-disable-next-line prettier/prettier
      "  using: 'composite'",
      '  steps:',
      // eslint-disable-next-line prettier/prettier
      "    - name: 'Step 1'",
      // eslint-disable-next-line prettier/prettier
      "      run: echo 'Running Step 1 with input: ${{ inputs.example-input }}'",
      '',
      // eslint-disable-next-line prettier/prettier
      "    - name: 'Step 2'",
      // eslint-disable-next-line prettier/prettier
      "      run: echo 'Running Step 2'",
      '',
      'env:',
      // eslint-disable-next-line prettier/prettier
      "  EXAMPLE_ENV_VAR: 'example-value'",
    ];
  }

  /**
   * @override
   */
  protected addTemplates(): void {
    new SampleFile(this.project, this.filePath, {
      contents: this.sampleAction.join('\n'),
    });
  }
}
