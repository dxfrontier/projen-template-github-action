import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types';

/**
 * Configures the VSCode templates, settings and npm scripts for the project.
 */
export class VsCodeComponent implements IProjectComponent {
  private project: TypeScriptProject;

  /**
   * Initializes the VSCode component.
   * @param project The project to configure VSCode for.
   */
  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Getter retrieving the file path for the VSCode settings configuration.
   */
  private get settingsFilePath(): string {
    return '.vscode/settings.json';
  }

  /**
   * Getter retrieving the settings to be installed in VSCode.
   */
  private get settings(): Record<string, unknown> {
    return {
      'editor.tabSize': 2,
      'editor.stickyTabStops': true,
      'typescript.inlayHints.parameterNames.enabled': 'all',
      'typescript.inlayHints.enumMemberValues.enabled': true,
      'typescript.inlayHints.variableTypes.enabled': true,
      'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
      'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
      'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
      'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
      'typescript.inlayHints.parameterTypes.enabled': true,
      'editor.inlayHints.fontSize': 10,
      'editor.inlayHints.padding': true,
      'editor.formatOnSave': true,
      'editor.formatOnPaste': true,
    };
  }

  /**
   * Adds settings to the VSCode component.
   */
  public add(): void {
    this.project.vscode?.settings.addSettings(this.settings);
  }

  /**
   * Configures the `.gitattributes` file to treat VSCode component related files as generated code, optimizing diffs.
   */
  public updateGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.settingsFilePath}`, 'linguist-generated');
  }

  /**
   * Executes setup for the VSCode component.
   */
  public setup(): void {
    this.add();
    this.updateGitAttributes();
  }
}
