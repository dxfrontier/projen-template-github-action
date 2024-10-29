import { type DevContainerFeatures } from '../types';

/**
 * File path of the devcontainer JSON file.
 */
export const FILE_PATH = '.devcontainer.json';

/**
 * Docker image for the devcontainer.
 */
export const DOCKER_IMAGE = 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye';

/**
 * Fixed features for the devcontainer.
 */
export const FEATURES: DevContainerFeatures = {
  'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
  'ghcr.io/devcontainers/features/github-cli': 'latest',
  'ghcr.io/devcontainers-contrib/features/projen': 'latest',
};

/**
 * Fixed VSCode extensions for the devcontainer.
 */
export const VSCODE_EXTENSIONS: string[] = [
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