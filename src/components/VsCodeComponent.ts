import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types/component';

/**
 * Configures the templates, settings and scripts for the project.
 *
 * Atm only settings are relevant for VSCode.
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
   * Retrieves the VSCode settings for the project.
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
   * Setup VsCode and add according settings to the project.
   */
  public add(): void {
    this.project.vscode?.settings.addSettings(this.settings);
  }
}
