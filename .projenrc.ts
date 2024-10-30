import { javascript, typescript } from 'projen';
import { GitHubBuilder, DevContainerBuilder, VsCodeBuilder, PrettierBuilder } from './src';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'projen-template-github-action',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,

  githubOptions: {
    mergify: false,
    workflows: false,
  },
  pullRequestTemplate: false,
  prettier: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  peerDeps: ['projen', 'construct'],
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const ghBuilder: GitHubBuilder = new GitHubBuilder(project);
ghBuilder.createPullRequestTemplate();
ghBuilder.createBugIssueTemplate();
ghBuilder.createFeatureIssueTemplate();
ghBuilder.createQuestionIssueTemplate();

const dcBuilder: DevContainerBuilder = new DevContainerBuilder(project);
dcBuilder.createDevContainer();

const vcBuilder: VsCodeBuilder = new VsCodeBuilder(project);
vcBuilder.addSettings();

const prBuilder: PrettierBuilder = new PrettierBuilder(project);
prBuilder.addSettings();
prBuilder.addNpmScripts();

project.synth();
