import { DevContainerBase, TypeScriptProjectBase } from '../base';

/**
 * DevContainer component implementing all relevant configuration for the Jsii project.
 */
export class DevContainerJsii extends DevContainerBase {
  /**
   * Initializes the DevContainer component.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure CommitLint for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }

  /**
   * VSCode extensions to be installed in the DevContainer.
   * @protected
   * @override
   */
  protected get extensions(): string[] {
    return [
      // Jest
      'Orta.vscode-jest',
      'firsttris.vscode-jest-runner',

      // Rest
      'humao.rest-client',

      // VSCode
      'aaron-bond.better-comments',
      'alefragnani.Bookmarks',
      'alefragnani.project-manager',

      // NPM
      'christian-kohler.npm-intellisense',
      'mskelton.npm-outdated',

      // Theme
      'PKief.material-icon-theme',
      'zhuangtongfa.material-theme',
      'GitHub.github-vscode-theme',

      // Docker
      'ms-vscode-remote.remote-containers',

      // .env
      'mikestead.dotenv',

      // TypeScript
      'usernamehw.errorlens',
      'dbaeumer.vscode-eslint',
      'oderwat.indent-rainbow',
      'esbenp.prettier-vscode',
      'YoavBls.pretty-ts-errors',
      'streetsidesoftware.code-spell-checker',
      'wayou.vscode-todo-highlight',
      'mike-co.import-sorter',
      'VisualStudioExptTeam.vscodeintellicode',

      // XML & YAML'
      'redhat.vscode-yaml',
      'DotJoshJohnson.xml',

      // Git
      'waderyan.gitblame',
      'donjayamanne.githistory',
      'GitHub.vscode-pull-request-github',

      // README
      'yzhang.markdown-all-in-one',
      'DavidAnson.vscode-markdownlint',
      'bierner.jsdoc-markdown-highlighting',

      // Others
      'VisualStudioExptTeam.vscodeintellicode',
      'christian-kohler.path-intellisense',
      'AykutSarac.jsoncrack-vscode',
      'tamasfe.even-better-toml',
    ];
  }
}
