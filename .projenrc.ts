import { javascript, typescript } from 'projen';
import { GitHubBuilder } from './src';
import { DevContainerBuilder } from './src/builder/DevContainerBuilder';

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

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  peerDeps: [
    'projen',
    'construct',
  ],
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const ghBuilder: GitHubBuilder = new GitHubBuilder(project);
ghBuilder.createPullRequestTemplate();
ghBuilder.createBugIssueTemplate();
ghBuilder.createFeatureIssueTemplate();
ghBuilder.createQuestionIssueTemplate();

const dvBuilder: DevContainerBuilder = new DevContainerBuilder(project);
dvBuilder.createDevContainer();

project.synth();