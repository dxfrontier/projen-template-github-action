import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { TypeScriptProjectBaseOptions } from '../../src/base';
import { CapServiceProject } from '../../src/cap-service/project';
import { ProjenStandardScript } from '../../src/types';
// import * as commitlint from '../shared/commitlint';
import * as common from '../shared/common';
import * as devcontainer from '../shared/devcontainer';
// import * as github from '../shared/github';
// import * as husky from '../shared/husky';
import * as npm from '../shared/npm';
// import * as prettier from '../shared/prettier';
// import * as samplecode from '../shared/samplecode';
// import * as vscode from '../shared/vscode';

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
});
