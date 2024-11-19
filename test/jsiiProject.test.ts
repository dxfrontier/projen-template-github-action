import { cdk, javascript } from 'projen';
import { JsiiProject } from 'projen/lib/cdk/index';
import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import * as commitlint from './base/commitlint';
import * as common from './base/common';
import * as devcontainer from './base/devcontainer';
import * as github from './base/github';
import * as husky from './base/husky';
import * as npm from './base/npm';
import * as prettier from './base/prettier';
import * as vscode from './base/vscode';
import { TypeScriptProjectBase } from '../src/base/project.ts';
import { LintStagedConfig } from '../src/types';

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

describe('JsiiProject', (): void => {
  let project: JsiiProject;
  let snapshot: SynthOutput;

  describe('Static configuration', (): void => {
    beforeEach(async (): Promise<void> => {
      const projenrc = await import('../.projenrc.ts');
      project = projenrc.project;
    });

    afterEach((): void => {
      jest.resetAllMocks();
      jest.resetModules();
    });

    afterAll((): void => {
      jest.unmock('projen');
      jest.unmock('projen/lib/github/pr-template');
      jest.unmock('projen/lib/github');
    });

    test('Configuration is set properly', async (): Promise<void> => {
      expect(cdk.JsiiProject).toHaveBeenCalledWith({
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

  describe('Additional Configuration', (): void => {
    beforeEach(async (): Promise<void> => {
      const jsiiProject: any = jest.requireActual('projen/lib/cdk/index').JsiiProject;

      jest.spyOn(jsiiProject.prototype, 'synth').mockImplementation();

      const projenrc = await import('../.projenrc.ts');
      project = projenrc.project;

      jsiiProject.prototype.synth.mockRestore();
      snapshot = synthSnapshot(project);
    });

    afterEach((): void => {
      jest.resetAllMocks();
      jest.resetModules();
    });

    describe('NPM', (): void => {
      test('Builder is registered in project registry', (): void => {
        common.testBuilderInRegistry('NpmPackageJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
      });

      test('Files property in package.json is set properly', (): void => {
        npm.testPackageJsonFiles(snapshot);
      });

      test('NPM Package related files are added to .gitattributes and defined as linguist-generated', (): void => {
        npm.testGitAttributes(snapshot);
      });
    });

    describe('DevContainer', (): void => {
      test('Builder is registered in project registry', (): void => {
        common.testBuilderInRegistry('DevContainerJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
      });

      test('Container image is set properly', (): void => {
        devcontainer.testImage(snapshot);
      });

      test('Container features are set properly', (): void => {
        devcontainer.testFeatures(snapshot);
      });

      test('Container VsCode extensions are set properly', (): void => {
        devcontainer.testExtensions(snapshot);
      });

      test('Container postCreateCommand is set properly', (): void => {
        devcontainer.testCommand(snapshot);
      });

      test('DevContainer related files are added to .gitattributes and defined as linguist-generated', (): void => {
        devcontainer.testGitAttributes(snapshot);
      });
    });

    describe('Visual Studio Code', (): void => {
      test('Builder is registered in project registry', (): void => {
        common.testBuilderInRegistry('VsCodeJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
      });

      test('VsCode settings are set properly', (): void => {
        vscode.testSettings(snapshot);
      });

      test('VsCode related files are added to .gitattributes and defined as linguist-generated', (): void => {
        vscode.testGitAttributes(snapshot);
      });
    });

    describe('GitHub', (): void => {
      test('Builder is registered in project registry', (): void => {
        common.testBuilderInRegistry('GitHubJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
      });

      describe('GitHub Templates', (): void => {
        test('PR template matches expected template', (): void => {
          github.testPrTemplate(snapshot);
        });

        test('Bug issue template matches expected template', (): void => {
          github.testBugTemplate(snapshot);
        });

        test('Feature issue template matches expected template', (): void => {
          github.testFeatureTemplate(snapshot);
        });

        test('Housekeeping issue template matches expected template', (): void => {
          github.testBugTemplate(snapshot);
        });

        test('Question issue template matches expected template', (): void => {
          github.testQuestionTemplate(snapshot);
        });
      });

      describe('GitHub Workflows', (): void => {
        test('Projen standard workflows are removed', (): void => {
          github.testProjenWorkflows(snapshot);
        });

        test('Release workflow template matches expected template', (): void => {
          github.testReleaseWorkflow(snapshot);
        });

        test('Stale workflow template matches expected template', (): void => {
          github.testStaleWorkflow(snapshot);
        });

        test('Cliff toml template matches expected template', (): void => {
          github.testCliffToml(snapshot);
        });
      });

      test('GitHub related files are added to .gitattributes and defined as linguist-generated', (): void => {
        github.testGitAttributes(snapshot);
      });
    });

    describe('Prettier', (): void => {
      test('Builder is registered in project registry', (): void => {
        common.testBuilderInRegistry('PrettierJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
      });

      test('Prettier settings are set properly', (): void => {
        prettier.testSettings(snapshot);
      });

      test('Prettier npm scripts are added properly', (): void => {
        prettier.testScripts(snapshot);
      });

      test('Ignore patterns matches expected content', (): void => {
        prettier.testIgnore(snapshot);
      });

      test('Prettier related files are added to .gitattributes and defined as linguist-generated', (): void => {
        prettier.testGitAttributes(snapshot);
      });
    });

    describe('Husky', (): void => {
      test('Builder is registered in project registry', (): void => {
        common.testBuilderInRegistry('HuskyJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
      });

      test('Commit-msg hook matches expected template', (): void => {
        husky.testCommitMsgHook(snapshot);
      });

      test('Pre-commit hook matches expected template', (): void => {
        husky.testPreCommitHook(snapshot);
      });

      test('Husky npm scripts are added properly', (): void => {
        husky.testScripts(snapshot);
      });

      test('Husky npm devDependencies are added properly', (): void => {
        husky.testDevDependencies(snapshot);
      });

      test('Husky related files are added to .gitattributes and defined as linguist-generated', (): void => {
        husky.testGitAttributes(snapshot);
      });
    });

    describe('CommitLint', (): void => {
      test('Builder is registered in project registry', (): void => {
        common.testBuilderInRegistry('CommitLintJsii', (project as unknown as TypeScriptProjectBase).builderRegistry);
      });

      test('Commitlintrc template matches expected template', (): void => {
        commitlint.testRcTemplate(snapshot);
      });

      test('CommitLint npm scrips are added properly', (): void => {
        commitlint.testScripts(snapshot);
      });

      test('CommitLint configuration in package.json is set properly', (): void => {
        const expectedConfiguration: LintStagedConfig = {
          '**/*.ts': ['npm run eslint', 'npm run format:fix'],
        };
        expect(snapshot['package.json']!['lint-staged']).toStrictEqual(expectedConfiguration);
      });

      test('CommitLint npm devDependencies are added properly', (): void => {
        commitlint.testDevDependencies(snapshot);
      });

      test('CommitLint related files are added to .gitattributes and defined as linguist-generated', (): void => {
        commitlint.testGitAttributes(snapshot);
      });
    });
  });
});
