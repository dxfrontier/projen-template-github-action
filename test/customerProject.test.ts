import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { CustomerProject, type ProjenStandardScript, TypeScriptProjectBaseOptions } from '../src';
import * as common from './base/common';
import * as devcontainer from './base/devcontainer';
import * as npm from './base/npm';
import * as vscode from './base/vscode';

describe('CustomerProject', (): void => {
  let props: TypeScriptProjectBaseOptions;
  let snapshot: SynthOutput;
  let project: CustomerProject.Project;

  beforeAll((): void => {
    props = {
      name: 'my-customer-project',
      defaultReleaseBranch: 'main', // this is needed due to https://github.com/projen/projen/pull/524
      description: 'my-description',
      repository: 'my-repository',
    };

    project = new CustomerProject.Project(props);
    snapshot = synthSnapshot(project);
  });

  afterAll((): void => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  describe('NPM', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('NpmPackage', project.builderRegistry);
    });

    test('Dynamic options in package.json are set properly', (): void => {
      expect(snapshot['package.json']!.name).toBe('my-customer-project');
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
      npm.testPackageJsonFiles(snapshot);
    });

    test('Project related files are added to .gitattributes and defined as linguist-generated', (): void => {
      npm.testGitAttributes(snapshot);
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
});
