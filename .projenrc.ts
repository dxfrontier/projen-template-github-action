import { cdk, javascript } from 'projen';
import { TypeScriptProjectBase } from './src/base';
import {
  CommitLintJsii,
  DevContainerJsii,
  GitHubJsii,
  HuskyJsii,
  mimicRegistryHooks,
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

mimicRegistryHooks(project);

new NpmPackageJsii(project as unknown as TypeScriptProjectBase);
new DevContainerJsii(project as unknown as TypeScriptProjectBase);
new VSCodeJsii(project as unknown as TypeScriptProjectBase);
new GitHubJsii(project as unknown as TypeScriptProjectBase);
new PrettierJsii(project as unknown as TypeScriptProjectBase);
new HuskyJsii(project as unknown as TypeScriptProjectBase);
new CommitLintJsii(project as unknown as TypeScriptProjectBase);

project.synth();
