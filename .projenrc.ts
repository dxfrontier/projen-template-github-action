import { cdk, javascript } from 'projen';
import {
  CommitLintJsii,
  DevContainerJsii,
  GitHubJsii,
  HuskyJsii,
  NpmPackageJsii,
  PrettierJsii,
  VSCodeJsii,
} from './src/jsii';

// export project for testing
export const project = new cdk.JsiiProject({
  author: 'Mathias von Kaiz',
  authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
  repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
  copyrightOwner: 'ABS GmbH',
  defaultReleaseBranch: 'main',
  name: 'projen-template-projects',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  jsiiVersion: '~5.5.0',

  prettier: true,
  githubOptions: {
    mergify: false,
    pullRequestLint: false, // workflow pull-request-lint.yml
  },
  buildWorkflow: false, // workflow build.yml
  release: false, // workflow release.yml
  pullRequestTemplate: false, // pull_request_template.yml
  depsUpgrade: false, // workflow upgrade-main.yml

  peerDeps: ['projen'],
  bundledDeps: ['construct'],

  tsconfig: {
    compilerOptions: {
      allowImportingTsExtensions: true,
    },
  },
});

new NpmPackageJsii(project);
new DevContainerJsii(project);
new VSCodeJsii(project);
new GitHubJsii(project);
new PrettierJsii(project);
new HuskyJsii(project);
new CommitLintJsii(project);

project.synth();
