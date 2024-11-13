import { TypeScriptProject } from 'projen/lib/typescript';
import { Component } from './component';

/**
 * Base class for VSCode component implementing all relevant configuration.
 */
export abstract class VSCodeBase extends Component {
  /**
   * Initializes the base VSCode component.
   * @param project The project to configure VSCode component for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
  }

  /**
   * File path to the VSCode settings configuration.
   * @protected
   */
  protected get settingsFilePath(): string {
    return '.vscode/settings.json';
  }

  /**
   * Settings to be installed in VSCode.
   * @protected
   */
  protected get settings(): Record<string, unknown> {
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

  protected addSettings(): void {
    this.project.vscode?.settings.addSettings(this.settings);
  }

  protected addGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.settingsFilePath}`, 'linguist-generated');
  }
}
