import { javascript, typescript } from 'projen';
import {
  DevContainerComponent,
  GitHubComponent,
  // NpmPackageComponent,
  PrettierComponent,
  VsCodeComponent,
} from './src/components';
import { IProjectComponent } from './src/types/component';

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

// Not sure if we need this here.
// Initialize NPM Package
// const npmComponent: NpmPackageComponent = new NpmPackageComponent(project);
// npmComponent.removeScripts();

// Initialize project configuration
const components: IProjectComponent[] = [
  new DevContainerComponent(project),
  new VsCodeComponent(project),
  new PrettierComponent(project),
  new GitHubComponent(project),
];
components.forEach((component: IProjectComponent): void => {
  component.add?.();
  component.addScripts?.();
});

project.synth();
