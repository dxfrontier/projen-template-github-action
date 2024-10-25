import { javascript, typescript } from 'projen';
import { GitHubManager } from './src';

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

const ghManager: GitHubManager = new GitHubManager(project);
ghManager.createPullRequestTemplate();
ghManager.createBugIssueTemplate();
ghManager.createFeatureIssueTemplate();
ghManager.createQuestionIssueTemplate();

project.synth();