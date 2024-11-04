import { JsonFile, JsonFileOptions } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent } from '../types/component';
import { Scripts } from '../types/script';

/**
 * Configures the DevContainer templates, settings and scripts for the project.
 *
 * Atm only templates and scripts are relevant for DevContainer.
 */
export class DevContainerComponent implements IProjectComponent {
  private project: TypeScriptProject;

  /**
   * Initializes the DevContainer component.
   * @param project The project to configure DevContainer for.
   */
  constructor(project: TypeScriptProject) {
    this.project = project;
  }

  /**
   * Retrieves the DevContainer file path for the project.
   */
  private get filePath(): string {
    return '.devcontainer.json';
  }

  /**
   * Retrieves the DevContainer docker image for the project.
   */
  private get dockerImage(): string {
    return 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye';
  }

  /**
   * Retrieves the DevContainer features for the project.
   */
  private get features(): Record<string, string> {
    return {
      'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
      'ghcr.io/devcontainers/features/github-cli': 'latest',
      'ghcr.io/devcontainers-contrib/features/projen': 'latest',
    };
  }

  /**
   * Retrieves the scripts associated with DevContainer commands.
   */
  private get scripts(): Scripts {
    return {
      'install-dependencies': 'npm install',
    };
  }

  /**
   * Retrieves the DevContainer VSCode Extensions
   */
  private get extensions(): string[] {
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

  /**
   * Retrieves the DevContainer template for the project.
   *
   * For the postCreateCommand the first script name is used.
   */
  private get template(): JsonFileOptions {
    return {
      omitEmpty: true,
      allowComments: true,
      obj: {
        image: this.dockerImage,
        postCreateCommand: `npx projen ${Object.keys(this.scripts)[0]}`,
        features: this.features,
        customizations: {
          vscode: {
            extensions: this.extensions,
          },
        },
      },
    };
  }

  /**
   * Setup DevContainer and add according template files to the project.
   */
  public add(): void {
    new JsonFile(this.project, this.filePath, this.template);
  }

  /**
   * Adds the DevContainer scripts to the project.
   */
  public addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command });
    }
  }
}
