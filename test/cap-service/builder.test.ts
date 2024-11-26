import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { TypeScriptProjectBaseOptions } from '../../src/base';
import { CapServiceProject } from '../../src/cap-service/project';
import { LintStagedConfig, ProjenStandardScript, TaskSteps } from '../../src/types';
import * as commitlint from '../shared/commitlint';
import * as common from '../shared/common';
import * as devcontainer from '../shared/devcontainer';
import * as eslint from '../shared/eslint';
import * as git from '../shared/git';
import * as github from '../shared/github';
import * as husky from '../shared/husky';
import * as npm from '../shared/npm';
import * as prettier from '../shared/prettier';
// import * as samplecode from '../shared/samplecode';
import * as vscode from '../shared/vscode';

describe('CapServiceProject Builders', (): void => {
  let props: TypeScriptProjectBaseOptions;
  let snapshot: SynthOutput;
  let project: CapServiceProject;

  beforeEach((): void => {
    props = {
      name: 'my-cap-service',
      defaultReleaseBranch: 'main',
      description: 'my-description',
      repository: 'my-repository',
    };

    project = new CapServiceProject(props);
    snapshot = synthSnapshot(project);
  });

  afterEach((): void => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  describe('NPM', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('NpmPackage', project.builderRegistry);
    });

    test('Dynamic options in package.json are set properly', (): void => {
      expect(snapshot['package.json']!.name).toBe('my-cap-service');
      expect(snapshot['package.json']!.description).toBe('my-description');
      expect(snapshot['package.json']!.repository).toStrictEqual({
        type: 'git',
        url: 'my-repository',
      });
    });

    test('Projen standard npm scripts are removed from package.json', (): void => {
      const keys: string[] = Object.keys(snapshot['package.json']!.scripts);
      const scriptsToRemove: ProjenStandardScript[] = [
        'bump',
        'clobber',
        'compile',
        'default',
        'eject',
        'eslint',
        'package',
        'post-compile',
        'post-upgrade',
        'pre-compile',
        'release',
        'test',
        'test:watch',
        'unbump',
        'upgrade',
        'watch',
        'projen',
      ];
      const keyFound: boolean = keys.some((key: string): boolean =>
        scriptsToRemove.includes(key as ProjenStandardScript),
      );
      expect(keyFound).toBe(false);
    });

    test('Files property in package.json is set properly', (): void => {
      const additionalPatterns: string[] = ['gen'];
      npm.testPackageJsonFiles(snapshot, additionalPatterns);
    });

    test('Additional/Overrides devDependencies are added properly', (): void => {
      npm.testDevDependencies(snapshot);
    });

    test('Project related files are added to .gitattributes and defined as linguist-generated', (): void => {
      const expectedPatterns: RegExp[] = [
        /\/tsconfig\.dev\.json linguist-generated( $|\s|$)/m,
        /\/tsconfig\.json linguist-generated( $|\s|$)/m,
        /\/@cds-models linguist-generated( $|\s|$)/m,
        /\/dist linguist-generated( $|\s|$)/m,
        /\/gen linguist-generated( $|\s|$)/m,
        /\/CHANGELOG\.md linguist-generated( $|\s|$)/m,
      ];
      npm.testGitAttributes(snapshot, expectedPatterns);
    });
  });

  describe('DevContainer', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('DevContainer', project.builderRegistry);
    });

    test('Container image is set properly', (): void => {
      devcontainer.testImage(snapshot);
    });

    test('Container features are set properly', (): void => {
      devcontainer.testFeatures(snapshot);
    });

    test('Container VsCode extensions are set properly', (): void => {
      const additionalExtensions: string[] = [
        'SAPSE.vscode-cds',
        'SAPOSS.app-studio-toolkit',
        'SAPOSS.app-studio-remote-access',
        'SAPOS.yeoman-ui',
        'SAPSE.sap-ux-fiori-tools-extension-pack',
        'SAPOSS.xml-toolkit',
        'qwtel.sqlite-viewer',
        'janisdd.vscode-edit-csv',
        'mechatroner.rainbow-csv',
      ];
      devcontainer.testExtensions(snapshot, additionalExtensions);
    });

    test('Container postCreateCommand is set properly', (): void => {
      const expectedSteps: string[] = [
        'sudo apt-get update',
        'sudo apt-get install -y xdg-utils',
        'npm install -g @sap/cds-dk typescript ts-node @ui5/cli git-cliff',
        'npm install',
        'wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -',
        'echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list',
        'sudo apt-get update',
        'sudo apt-get install cf8-cli',
      ];
      devcontainer.testCommand(snapshot, expectedSteps);
    });

    test('DevContainer related files are added to .gitattributes and defined as linguist-generated', (): void => {
      devcontainer.testGitAttributes(snapshot);
    });
  });

  describe('Visual Studio Code', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('VsCode', project.builderRegistry);
    });
    test('VsCode settings are set properly', (): void => {
      vscode.testSettings(snapshot);
    });

    test('VsCode launch is set properly', (): void => {
      vscode.testLaunch(snapshot);
    });

    test('VsCode tasks are set properly', (): void => {
      vscode.testTasks(snapshot);
    });

    test('VsCode related files are added to .gitattributes and defined as linguist-generated', (): void => {
      const additionalPatterns: RegExp[] = [
        /\/\.vscode\/launch\.json linguist-generated( $|\s|$)/m,
        /\/\.vscode\/tasks\.json linguist-generated( $|\s|$)/m,
      ];
      vscode.testGitAttributes(snapshot, additionalPatterns);
    });
  });

  describe('Git', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('Git', project.builderRegistry);
    });

    test('Git settings are set properly', (): void => {
      const additionalPatterns: string[] = [
        'gen',
        'mta_archives',
        '*.mtar',
        '*.mta',
        'resources',
        '@cds-models',
        '*.bak',
        'default-*.json',
      ];
      git.testIgnore(snapshot, additionalPatterns);
    });
  });

  describe('GitHub', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('GitHub', project.builderRegistry);
    });

    describe('GitHub Templates', (): void => {
      test('PR template matches expected template', (): void => {
        const expectedTemplateLines: string[] = [
          '## Reviewers Checklist',
          '',
          'for complete review list refer to ABS Loop - Review Aspects',
          '',
          '### Organizational Section',
          '',
          '- [ ] PR is assigned to the according story/feature/bug',
          '- [ ] Story/feature/bug is descriptive',
          '- [ ] Story/feature/bug is assigned to according labels',
          '- [ ] Story/feature/bug is assigned to a developer',
          '',
          '### Structure',
          '',
          '- [ ] Readability: Code is easy to understand, with meaningful names for variables, functions, and classes',
          '- [ ] Comments: Meaningful and helpful comments. Code is documented without being over-commented',
          '- [ ] DRY, KISS and YAGNI: Code implements only necessary features; no over-engineering',
          '- [ ] No sensitive data (e.g., passwords, API keys) in the code',
          '- [ ] No major updates for used packages',
          '',
          '### Coding',
          '',
          '- [ ] Model/Binding property changes or renaming does not break the code',
          '- [ ] Model/Binding properties have consistent names (capitalization, lowercase, ..)',
          '- [ ] Type aliases are defined for associations and compositions',
          '- [ ] No hungarian notation (e.g. aList, oModel, ..)',
          '',
          '### Most important (as long as we do not have Test Driven Development in place)',
          '',
          '- [ ] Code is locally tested by developer',
          '',
          '### Second most important',
          '',
          '- [ ] API first: application can be used headless (with the API only)',
          '<!-- Generated by projen. To modify, edit .projenrc.ts and run "npx projen".-->',
        ];
        github.testPrTemplate(snapshot, expectedTemplateLines);
      });

      test('Bug issue template matches expected template', (): void => {
        github.testBugTemplate(snapshot);
      });

      test('Story issue template matches expected template', (): void => {
        github.testStoryTemplate(snapshot);
      });

      test('Feature issue template matches expected template', (): void => {
        const expectedTemplateLines: string[] = [
          'name: 💡 Feature',
          'description: Story related feature',
          'title: "[FEATURE] <title>"',
          'labels: ["type: feature"]',
          'body:',
          '  - type: textarea',
          '    attributes:',
          '      label: Description',
          '      description: A description of the feature.',
          '    validations:',
          '      required: true',
          '',
          '  - type: textarea',
          '    attributes:',
          '      label: Task List',
          '      description: Describe the steps to fulfill the feature.',
          '      value: |',
          '        - [ ] My First Task',
          '    validations:',
          '      required: true',
          '# Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
        ];
        github.testFeatureTemplate(snapshot, expectedTemplateLines);
      });

      test('Housekeeping issue template matches expected template', (): void => {
        github.testBugTemplate(snapshot);
      });

      test('Question issue template matches expected template', (): void => {
        github.testQuestionTemplate(snapshot);
      });
    });

    describe('GitHub Workflows', (): void => {
      test('To be defined', (): void => {
        expect(true).toBe(false);
      });
    });

    test('GitHub related files are added to .gitattributes and defined as linguist-generated', (): void => {
      const additionalPatterns: RegExp[] = [/\/\.github\/ISSUE_TEMPLATE\/story\.yml linguist-generated( $|\s|$)/m];
      github.testGitAttributes(snapshot, additionalPatterns);
    });
  });

  describe('EsLint', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('EsLint', project.builderRegistry);
    });

    test('EsLint settings are set properly', (): void => {
      const additionalPatterns: string[] = ['dist/', 'test/', 'gen/', '@cds-models', 'default-env.js', '@dispatcher'];
      eslint.testIgnore(snapshot, additionalPatterns);
    });
  });

  describe('Prettier', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('Prettier', project.builderRegistry);
    });

    test('Prettier settings are set properly', (): void => {
      prettier.testSettings(snapshot);
    });

    test('Prettier npm scripts are added properly', (): void => {
      const expectedTasks: TaskSteps = {
        prettier: ['prettier . --write'],
        'prettier:cds': ['format-cds'],
      };
      prettier.testScripts(snapshot, expectedTasks);
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
      common.testBuilderInRegistry('Husky', project.builderRegistry);
    });

    test('Commit-msg hook matches expected template', (): void => {
      husky.testCommitMsgHook(snapshot);
    });

    test('Pre-commit hook matches expected template', (): void => {
      husky.testPreCommitHook(snapshot);
    });

    test('Pre-push hook matches expected template', (): void => {
      husky.testPrePushHook(snapshot);
    });

    test('Husky npm scripts are added properly', (): void => {
      husky.testScripts(snapshot);
    });

    test('Husky npm devDependencies are added properly', (): void => {
      husky.testDevDependencies(snapshot);
    });

    test('Husky related files are added to .gitattributes and defined as linguist-generated', (): void => {
      const additionalPatterns: RegExp[] = [/\/\.husky\/pre-push linguist-generated( $|\s|$)/m];
      husky.testGitAttributes(snapshot, additionalPatterns);
    });
  });

  describe('CommitLint', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('CommitLint', project.builderRegistry);
    });

    test('Commitlintrc template matches expected template', (): void => {
      commitlint.testRcTemplate(snapshot);
    });

    test('CommitLint npm scrips are added properly', (): void => {
      commitlint.testScripts(snapshot);
    });

    test('CommitLint configuration in package.json is set properly', (): void => {
      const expectedConfiguration: LintStagedConfig = {
        '**/*.{ts,tsx}': ['npm run eslint', 'npm run prettier', 'npm run prettier:cds'],
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
