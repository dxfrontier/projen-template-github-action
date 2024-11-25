/**
 * We move the options test into a separate file
 * as the revert of the mocking for testing the builders
 * is not working properly.
 */
import { cdk, javascript } from 'projen';
import { JsiiProject } from 'projen/lib/cdk/index';
import { TypeScriptProjectBase } from '../../src/base/index.ts';

jest.mock('projen', (): any => ({
  javascript: {
    NodePackageManager: {
      NPM: 'npm',
    },
  },
  cdk: {
    JsiiProject: jest.fn().mockImplementation((_config: any): Record<string, any> => {
      return {
        synth: jest.fn(),
        addFields: jest.fn(),
        gitattributes: {
          addAttributes: jest.fn(),
        },
        addTask: jest.fn(),
        addDevDeps: jest.fn(),
      };
    }),
  },
  JsonFile: jest.fn(),
  TextFile: jest.fn(),
}));

jest.mock('projen/lib/github/pr-template', (): any => {
  return {
    PullRequestTemplate: jest.fn(),
  };
});

describe('JsiiProject Constructor Options', (): void => {
  let project: JsiiProject;

  beforeEach(async (): Promise<void> => {
    const projenrc = await import('../../.projenrc.ts');
    project = projenrc.project;
  });

  afterEach((): void => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  afterAll((): void => {
    jest.unmock('projen');
    jest.unmock('projen/lib/github/pr-template');
    jest.restoreAllMocks();
  });

  test('Configuration is set properly', async (): Promise<void> => {
    expect(cdk.JsiiProject).toHaveBeenCalledWith({
      author: 'Mathias von Kaiz',
      authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
      repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
      copyrightOwner: 'ABS GmbH',
      defaultReleaseBranch: 'main',
      name: '@dxfrontier/projen-template-projects',
      packageManager: javascript.NodePackageManager.NPM,
      projenrcTs: true,
      jsiiVersion: '~5.5.0',
      npmignoreEnabled: false,
      prettier: true,
      githubOptions: {
        mergify: false,
        pullRequestLint: false,
      },
      buildWorkflow: false,
      release: false,
      pullRequestTemplate: false,
      depsUpgrade: false,
      peerDeps: ['projen'],
      bundledDeps: ['construct'],
      tsconfig: {
        compilerOptions: {
          allowImportingTsExtensions: true,
        },
      },
    });
  });

  test('Registry mimic is set properly', (): void => {
    expect((project as unknown as TypeScriptProjectBase).builderRegistry).toBeDefined();
    expect(Array.isArray((project as unknown as TypeScriptProjectBase).builderRegistry)).toBe(true);
    expect(typeof (project as unknown as TypeScriptProjectBase).registerBuilder).toBe('function');
    expect(typeof (project as unknown as TypeScriptProjectBase).postSynthesize).toBe('function');
  });

  test('Mock of synth function was successful to avoid installation process', (): void => {
    expect(project.synth).toHaveBeenCalledTimes(1);
  });
});
