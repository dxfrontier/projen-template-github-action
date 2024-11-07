import { JsonFile, JsonFileOptions } from 'projen';
import { TypeScriptProject } from 'projen/lib/typescript';
import { IProjectComponent, Scripts } from '../types';

/**
 * Configures the DevContainer templates, settings and npm scripts for the project.
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
   * Getter retrieving the file path for the DevContainer configuration.
   */
  private get filePath(): string {
    return '.devcontainer.json';
  }

  /**
   * Getter retrieving the Docker image used for the DevContainer.
   */
  private get dockerImage(): string {
    return 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye';
  }

  /**
   * Getter retrieving the features to be installed in the DevContainer.
   */
  private get features(): Record<string, string> {
    return {
      'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
      'ghcr.io/devcontainers/features/github-cli': 'latest',
      'ghcr.io/devcontainers-contrib/features/projen': 'latest',
    };
  }

  /**
   * Getter retrieving the npm scripts used within the DevContainer environment.
   */
  private get scripts(): Scripts {
    return {
      'install-dependencies': 'npm install',
    };
  }

  /**
   * Getter retrieving the VSCode extensions to be installed in the DevContainer.
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
   * Getter retrieving the template file for DevContainer creation.
   *
   * The first script in `scripts` is used as the postCreateCommand to install dependencies upon creation.
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
   * Adds template files to the DevContainer component.
   */
  public add(): void {
    new JsonFile(this.project, this.filePath, this.template);
  }

  /**
   * Adds npm scripts specific to DevContainer setup within the project configuration.
   */
  public addScripts(): void {
    for (const [name, command] of Object.entries(this.scripts)) {
      this.project.addTask(name, { exec: command });
    }
  }

  /**
   * Configures the `.gitattributes` file to treat DevContainer component related files as generated code, optimizing diffs.
   */
  public updateGitAttributes(): void {
    this.project.gitattributes.addAttributes(`/${this.filePath}`, 'linguist-generated');
  }

  /**
   * Executes setup for the DevContainer component.
   */
  public setup(): void {
    this.add();
    this.addScripts();
    this.updateGitAttributes();
  }
}
