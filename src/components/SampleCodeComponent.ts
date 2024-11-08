import { SampleFile } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';

/**
 * Handles GitHub action sample file creation for the project.
 */
export class SampleCodeComponent implements IProjectComponent {
  private project: TypeScriptProject;

  /**
   * Initializes the Sample component.
   * @param project The project to create sample GitHub action file for.
   */
  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Getter retrieving the file path for the sample GitHub action.
   */
  private get filePath(): string {
    return 'action.yml';
  }

  /**
   * Getter retrieving the template file for the sample GitHub action.
   */
  private get sampleAction(): string[] {
    return [
      // eslint-disable-next-line prettier/prettier
      'name: \'My Custom Composite Action\'',
      // eslint-disable-next-line prettier/prettier
      'description: \'A sample GitHub composite action created with Projen.\'',
      // eslint-disable-next-line prettier/prettier
      'author: \'Your Name or Org\'',
      'branding:',
      // eslint-disable-next-line prettier/prettier
      '  icon: \'zap\'',
      // eslint-disable-next-line prettier/prettier
      '  color: \'blue\'',
      '',
      'inputs:',
      '  example-input:',
      // eslint-disable-next-line prettier/prettier
      '    description: \'An example input parameter for the action.\'',
      '    required: false',
      // eslint-disable-next-line prettier/prettier
      '    default: \'default value\'',
      '',
      'outputs:',
      '  example-output:',
      // eslint-disable-next-line prettier/prettier
      '    description: \'An example output from the action.\'',
      '',
      'runs:',
      // eslint-disable-next-line prettier/prettier
      '  using: \'composite\'',
      '  steps:',
      // eslint-disable-next-line prettier/prettier
      '    - name: \'Step 1\'',
      // eslint-disable-next-line prettier/prettier
      '      run: echo \'Running Step 1 with input: ${{ inputs.example-input }}\'',
      '',
      // eslint-disable-next-line prettier/prettier
      '    - name: \'Step 2\'',
      // eslint-disable-next-line prettier/prettier
      '      run: echo \'Running Step 2\'',
      '',
      'env:',
      // eslint-disable-next-line prettier/prettier
      '  EXAMPLE_ENV_VAR: \'example-value\'',
    ];
  }

  /**
   * Creates the template file for the sample GitHub action.
   */
  private createSampleAction(): void {
    new SampleFile(this.project, this.filePath, {
      contents: this.sampleAction.join('\n'),
    });
  }

  /**
   * Adds sample action template files to the project.
   */
  public add(): void {
    this.createSampleAction();
  }

  /**
   * Executes setup for sample file creation.
   */
  public setup(): void {
    this.add();
  }
}
