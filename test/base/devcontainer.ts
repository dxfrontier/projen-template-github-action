import { SynthOutput } from 'projen/lib/util/synth';
import * as common from './common';
import { TaskSteps } from '../../src/types';

/**
 * Validates that container image is set properly.
 * @param snapshot Synthesized project output.
 */
export function testImage(snapshot: SynthOutput): void {
  expect(snapshot['.devcontainer.json'].image).toBe('mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye');
}

/**
 * Validates that container features are set properly.
 * @param snapshot Synthesized project output.
 */
export function testFeatures(snapshot: SynthOutput): void {
  const expectedFeatures = {
    'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
    'ghcr.io/devcontainers/features/github-cli': 'latest',
    'ghcr.io/devcontainers-contrib/features/projen': 'latest',
  };
  expect(snapshot['.devcontainer.json'].features).toStrictEqual(expectedFeatures);
}

/**
 * Validates that container VsCode extensions are set properly.
 * @param snapshot Synthesized project output.
 * @param additionalExtensions List of additional extensions to test for.
 */
export function testExtensions(snapshot: SynthOutput, additionalExtensions: string[] = []): void {
  const standardExtensions: string[] = [
    'Orta.vscode-jest',
    'firsttris.vscode-jest-runner',
    'humao.rest-client',
    'aaron-bond.better-comments',
    'alefragnani.Bookmarks',
    'alefragnani.project-manager',
    'christian-kohler.npm-intellisense',
    'mskelton.npm-outdated',
    'PKief.material-icon-theme',
    'zhuangtongfa.material-theme',
    'GitHub.github-vscode-theme',
    'ms-vscode-remote.remote-containers',
    'mikestead.dotenv',
    'usernamehw.errorlens',
    'dbaeumer.vscode-eslint',
    'oderwat.indent-rainbow',
    'esbenp.prettier-vscode',
    'YoavBls.pretty-ts-errors',
    'streetsidesoftware.code-spell-checker',
    'wayou.vscode-todo-highlight',
    'mike-co.import-sorter',
    'VisualStudioExptTeam.vscodeintellicode',
    'redhat.vscode-yaml',
    'DotJoshJohnson.xml',
    'waderyan.gitblame',
    'donjayamanne.githistory',
    'GitHub.vscode-pull-request-github',
    'yzhang.markdown-all-in-one',
    'DavidAnson.vscode-markdownlint',
    'bierner.jsdoc-markdown-highlighting',
    'VisualStudioExptTeam.vscodeintellicode',
    'christian-kohler.path-intellisense',
    'AykutSarac.jsoncrack-vscode',
    'tamasfe.even-better-toml',
  ];

  const expectedExtensions: string[] = [...standardExtensions, ...additionalExtensions];
  expect(snapshot['.devcontainer.json'].customizations.vscode.extensions.sort()).toStrictEqual(
    expectedExtensions.sort(),
  );
}

/**
 * Validates that container postCreateCommand is set properly.
 * @param snapshot Synthesized project output.
 * @param expectedSteps List of steps that are expected instead of the standard steps.
 */
export function testCommand(snapshot: SynthOutput, expectedSteps: string[] = []): void {
  const standardSteps: string[] = ['npm install'];
  const expectedTasks: TaskSteps = {
    'install-dependencies': expectedSteps.length ? expectedSteps : standardSteps,
  };
  expect(snapshot['.devcontainer.json'].postCreateCommand).toBe(
    snapshot['package.json']!.scripts['install-dependencies'],
  );
  common.testScripts(snapshot, expectedTasks);
}

/**
 * Validates that project related files are added to .gitattributes and defined as linguist-generated.
 * @param snapshot Synthesized project output.
 */
export function testGitAttributes(snapshot: SynthOutput): void {
  const patterns: RegExp[] = [/\/\.devcontainer\.json linguist-generated( $|\s|$)/m];

  common.testGitAttributes(snapshot, patterns);
}
