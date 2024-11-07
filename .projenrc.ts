import { cdk, javascript } from 'projen';
import {
  CommitLintComponent,
  DevContainerComponent,
  GitHubComponent,
  HuskyComponent,
  // NpmPackageComponent,
  PrettierComponent,
  VsCodeComponent,
} from './src/components';
import { IProjectComponent } from './src/types/component';

const project = new cdk.JsiiProject({
  author: 'Mathias von Kaiz',
  authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
  repositoryUrl: 'https://github.com/dxfrontier/projen-template-github-action.git',
  copyrightOwner: 'ABS GmbH',
  defaultReleaseBranch: 'main',
  name: 'projen-template-github-action',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  commitGenerated: false,

  githubOptions: {
    mergify: false,
    workflows: false,
  },
  pullRequestTemplate: false,
  prettier: true,

  peerDeps: ['projen'],
  bundledDeps: ['construct'],
});

// Overwrite JsiiProject outdated package versions
project.addDevDeps(
  '@types/jest@^29',
  '@types/node@^22',
  'jest@^29',
  'ts-jest@^29',
  'jsii@^5.5.9',
  'jsii-rosetta@^5.5.5',
);

// Initialize project configuration
const components: IProjectComponent[] = [
  // new NpmPackageComponent(project),
  new DevContainerComponent(project),
  new VsCodeComponent(project),
  new GitHubComponent(project),
  new PrettierComponent(project),
  new HuskyComponent(project),
  new CommitLintComponent(project),
];
components.forEach((component: IProjectComponent): void => {
  component.setup();
});

project.synth();
