import { DevContainerFeature } from 'projen/lib/vscode';

/**
 * Provides the features to be installed in devcontainer.
 * @returns relevant DevContainerFeatures.
 */
export function getFeatures(): DevContainerFeature[] {
  return [
    {
      name: 'ghcr.io/devcontainers-contrib/features/curl-apt-get',
      version: 'latest',
    },
    {
      name: 'ghcr.io/devcontainers/features/github-cli',
      version: 'latest',
    },
  ];
}

/**
 * Provides the VSCode extensions to be installed in devcontainer.
 * @returns lines of the relevant extensions.
 */
export function getExtensions(): string[] {
  return [
    '// Terraform',
    'HashiCorp.terraform',
    '',
    '// Jest',
    'Orta.vscode-jest',
    'firsttris.vscode-jest-runner',
    '',
    // Rest
    'humao.rest-client',
    '',
    '// VSCode',
    'aaron-bond.better-comments',
    'alefragnani.Bookmarks',
    'alefragnani.project-manager',
    '',
    '// NPM',
    'christian-kohler.npm-intellisense',
    'mskelton.npm-outdated',
    '',
    '// Theme',
    'PKief.material-icon-theme',
    'zhuangtongfa.material-theme',
    'GitHub.github-vscode-theme',
    '',
    '// Docker',
    'ms-vscode-remote.remote-containers',
    '',
    '// .env',
    'mikestead.dotenv', //DotENV
    '',
    '// TypeScript',
    'usernamehw.errorlens',
    'dbaeumer.vscode-eslint',
    'oderwat.indent-rainbow',
    'esbenp.prettier-vscode',
    'YoavBls.pretty-ts-errors',
    'streetsidesoftware.code-spell-checker',
    'wayou.vscode-todo-highlight',
    'mike-co.import-sorter',
    'VisualStudioExptTeam.vscodeintellicode',
    '',
    '// XML & YAML',
    'redhat.vscode-yaml',
    'DotJoshJohnson.xml',
    '',
    '// Git',
    'waderyan.gitblame',
    'donjayamanne.githistory',
    'GitHub.vscode-pull-request-github',
    '',
    '// README',
    'yzhang.markdown-all-in-one',
    'DavidAnson.vscode-markdownlint',
    'bierner.jsdoc-markdown-highlighting',
    '',
    '// Others',
    'VisualStudioExptTeam.vscodeintellicode',
    'christian-kohler.path-intellisense',
    'AykutSarac.jsoncrack-vscode',
    'tamasfe.even-better-toml',
  ];
}