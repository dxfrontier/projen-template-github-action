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
import * as samplecode from '../shared/samplecode';
import * as vscode from '../shared/vscode';

describe('CapServiceProject Builders', (): void => {
  let props: TypeScriptProjectBaseOptions;
  let snapshot: SynthOutput;
  let project: CapServiceProject;

  beforeEach((): void => {
    props = {
      name: 'my-cap-service',
      defaultReleaseBranch: 'main',
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
      test('Projen standard workflows are removed', (): void => {
        github.testProjenWorkflows(snapshot);
      });

      test('Release workflow template matches expected template', (): void => {
        const expectedTemplateLines: string[] = [
          '# ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
          '',
          'name: Release',
          'on:',
          '  pull_request:',
          '    branches:',
          '      - dev',
          '    types:',
          '      - closed',
          'jobs:',
          '  release:',
          '    runs-on: ubuntu-latest',
          '    permissions:',
          '      contents: write',
          '      pull-requests: write',
          '    steps:',
          '      - name: Bump version and create release',
          '        uses: dxfrontier/gh-action-release@main',
          '        with:',
          '          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}',
          '          BRANCH: dev',
          '',
        ];
        github.testReleaseWorkflow(snapshot, expectedTemplateLines);
      });

      test('Deployment workflow template matches expected template', (): void => {
        github.testDeploymentWorkflow(snapshot);
      });

      test('Cliff toml template matches expected template', (): void => {
        github.testCliffToml(snapshot);
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

  describe('SampleCode', (): void => {
    test('Builder is registered in project registry', (): void => {
      common.testBuilderInRegistry('SampleCode', project.builderRegistry);
    });

    test('Projen standard sample files are removed from file system', (): void => {
      samplecode.testProjenSampleFiles(snapshot);
    });

    describe('SampleCode root directory', (): void => {
      test('Sample file .cdsrc.json matches expected file template', (): void => {
        const expectedTemplateLines: string[] = [
          '{',
          '  "requires": {',
          '    "[development]": {',
          '      "auth": {',
          '        "kind": "mocked"',
          '      }',
          '    },',
          '    "[production]": {',
          '      "auth": {',
          '        "kind": "xsuaa"',
          '      },',
          '      "db": {',
          '        "kind": "hana",',
          '        "impl": "@cap-js/hana",',
          '        "deploy-format": "hdbtable"',
          '      }',
          '    }',
          '  },',
          '  "i18n": {',
          '    "default_language": "en"',
          '  },',
          '  "log": {',
          '    "service": true',
          '  },',
          '  "features": {',
          '    "preserve_computed": true',
          '  },',
          '  "sql": {',
          '    "native_hana_associations": false',
          '  },',
          '  "hana": {',
          '    "deploy-format": "hdbtable"',
          '  }',
          '}',
        ];

        // due to json type received (not string) we stringify it upfront
        const snapshotContent: string = JSON.stringify(snapshot['.cdsrc.json'], null, 2);
        samplecode.testSampleFilesTemplates({ '.cdsrc.json': snapshotContent }, '.cdsrc.json', expectedTemplateLines);
      });

      test('Sample file .cdsprettier.json matches expected file template', (): void => {
        const expectedTemplateLines: string[] = [
          '{',
          '  "alignAfterKey": true,',
          '  "alignAnnotations": true,',
          '  "alignPreAnnotations": true,',
          '  "alignPostAnnotations": true,',
          '  "alignColonsInAnnotations": true,',
          '  "alignValuesInAnnotations": true,',
          '  "alignActionsAndFunctions": true,',
          '  "alignActionNames": true,',
          '  "alignActionReturns": true,',
          '  "alignAs": true,',
          '  "alignAsInEntities": true,',
          '  "alignAsInSelectItems": true,',
          '  "alignAsInUsing": true,',
          '  "alignExpressionsAndConditions": true,',
          '  "alignExprAndCondWithinBlock": true,',
          '  "alignTypes": true,',
          '  "alignColonsBeforeTypes": true,',
          '  "alignEqualsAfterTypes": true,',
          '  "alignTypesWithinBlock": true,',
          '  "alignCompositionStructToRight": true,',
          '  "cqlKeywordCapitalization": "lower",',
          '  "keepPreAnnotationsInOriginalLine": "keepLine",',
          '  "keepPostAnnotationsInOriginalLine": "keepLine",',
          '  "keepEmptyBracketsTogether": true,',
          '  "keepSingleLinedBlocksTogether": true,',
          '  "keepOriginalEmptyLines": true,',
          '  "maxKeepEmptyLines": 2,',
          '  "openingBraceInNewLine": false,',
          '  "selectInNewLine": true,',
          '  "tabSize": 2,',
          '  "finalNewline": true,',
          '  "formatDocComments": false,',
          '  "maxDocCommentLine": 60,',
          '  "whitespaceBeforeColon": true,',
          '  "whitespaceBeforeColonInAnnotation": false,',
          '  "whitespaceAfterColon": true,',
          '  "whitespaceAfterColonInAnnotation": true,',
          '  "whitespaceAfterComma": true,',
          '  "whitespaceAroundAlignedOps": true,',
          '  "whitespaceAroundBinaryOps": true,',
          '  "whitespaceWithinBrackets": false',
          '}',
        ];

        // due to json type received (not string) we stringify it upfront
        const snapshotContent: string = JSON.stringify(snapshot['.cdsprettier.json'], null, 2);
        samplecode.testSampleFilesTemplates(
          { '.cdsprettier.json': snapshotContent },
          '.cdsprettier.json',
          expectedTemplateLines,
        );
      });

      test('Sample file default-env.js matches expected file template', (): void => {
        const expectedTemplateLines: string[] = [
          '/**',
          ' * Fetches `VCAP_SERVICES` for a given CF application and writes it to a file.',
          ' * It utilizes the Cloud Foundry CLI to do so.',
          ' *',
          ' * Make sure you are logged in via the CF CLI (`cf login`) before running the',
          ' * script. You can check your login and the organization and space you are',
          ' * targetting by using `cf target`.',
          ' *',
          ' * Allows on-premise connectivity proxying if necessary',
          ' *',
          ' * @author Sebastian Blessing',
          ' */',
          "const fs = require('fs');",
          "const util = require('util');",
          "const exec = util.promisify(require('child_process').exec);",
          "const spawn = util.promisify(require('child_process').spawn);",
          '',
          'async function getAppGuid(appName) {',
          '  const cmd = `cf app ${appName} --guid`;',
          '  console.log(cmd);',
          '  const { stdout, stderr } = await exec(cmd);',
          '  if (stderr) console.log(`stderr: ${stderr}`);',
          '  return stdout.trim();',
          '}',
          '',
          'async function getDefaultEnv(appGuid) {',
          '  const cmd = `cf curl "v3/apps/${appGuid}/env"`;',
          '  console.log(cmd);',
          '  const { stdout, stderr } = await exec(cmd);',
          '  if (stderr) console.log(`stderr: ${stderr}`);',
          '  return JSON.parse(stdout).system_env_json;',
          '}',
          '',
          '(async () => {',
          '  const myArgs = process.argv.slice(2);',
          '  const appName = myArgs[0];',
          '  if (!appName) {',
          "    console.error('Please provide a CF application name to fetch its environment!');",
          '    return;',
          '  }',
          '',
          '  let envFileName = myArgs[1];',
          '',
          "  envFileName = envFileName ? envFileName : 'default-env.json';",
          '  console.log(`Writing environment of ${appName} to ${envFileName}`);',
          '',
          '  const defaultEnv = await getDefaultEnv(await getAppGuid(appName));',
          '',
          '  let bRunProxy = false;',
          '  let proxyPort = null;',
          '  let proxyHost = null;',
          '',
          "  if (defaultEnv['VCAP_SERVICES']['connectivity']) {",
          '    proxyPort = defaultEnv.VCAP_SERVICES.connectivity[0].credentials.onpremise_proxy_port;',
          '    proxyHost = defaultEnv.VCAP_SERVICES.connectivity[0].credentials.onpremise_proxy_host;',
          "    defaultEnv.VCAP_SERVICES.connectivity[0].credentials.onpremise_proxy_host = 'localhost';",
          '    bRunProxy = true;',
          '  }',
          '',
          "  fs.writeFile('default-env.json', JSON.stringify(defaultEnv, null, 2), async (err) => {",
          '    if (err) {',
          '      console.error(err);',
          '    } else if (bRunProxy) {',
          '      console.log(`cf ssh ${appName} -L ${proxyPort}:${proxyHost}:${proxyPort}`);',
          "      await spawn('cf', [`ssh ${appName} -L ${proxyPort}:${proxyHost}:${proxyPort}`], {",
          '        shell: true,',
          "        stdio: 'inherit',",
          '      });',
          '    }',
          '  });',
          '',
          "  console.log('Done');",
          '})();',
        ];
        samplecode.testSampleFilesTemplates(snapshot, 'default-env.js', expectedTemplateLines);
      });

      describe('Sample file mta.yaml', (): void => {
        const expectedTemplateLines: string[] = [
          "_schema-version: '3.1'",
          'ID: __namespace__',
          'version: 0.0.1',
          'description: __description__',
          'parameters:',
          '  enable-parallel-deployments: true',
          'build-parameters:',
          '  before-all:',
          '    - builder: custom',
          '      commands:',
          '        - npm ci',
          '        - npm run build',
          '        - npx @cap-js/cds-typer "*" --outputDirectory gen/srv/@cds-models',
          'modules:',
          '  - name: __name__-srv',
          '    type: nodejs',
          '    path: gen/srv',
          '    parameters:',
          '      buildpack: nodejs_buildpack',
          '      readiness-health-check-type: http',
          '      readiness-health-check-http-endpoint: /health',
          '    build-parameters:',
          '      builder: npm',
          '    provides:',
          '      - name: srv-api',
          '        properties:',
          '          srv-url: ${default-url}',
          '    requires:',
          '      - name: __name__-uaa',
          '      - name: __name__-destination',
          '      - name: __name__-connectivity',
          '      - name: __name__-db',
          '  - name: __name__-destinations',
          '    type: com.sap.application.content',
          '    requires:',
          '      - name: __name__-uaa',
          '        parameters:',
          '          service-key:',
          '            name: __name__-uaa-key',
          '      - name: srv-api',
          '      - name: __name__-destination',
          '        parameters:',
          '          content-target: true',
          '    parameters:',
          '      content:',
          '        instance:',
          '          destinations:',
          '            - Authentication: OAuth2UserTokenExchange',
          '              Name: __name__-app-srv',
          '              TokenServiceInstanceName: __name__-uaa',
          '              TokenServiceKeyName: __name__-uaa-key',
          '              URL: ~{srv-api/srv-url}',
          '              sap.cloud.service: __namespace__',
          '          existing_destinations_policy: update',
          '    build-parameters:',
          '      no-source: true',
          '  - name: __name__-db-deployer',
          '    type: hdb',
          '    path: gen/db',
          '    parameters:',
          '      buildpack: nodejs_buildpack',
          '    requires:',
          '      - name: __name__-db',
          '      - name: __name__-uaa',
          'resources:',
          '  - name: __name__-uaa',
          '    type: org.cloudfoundry.managed-service',
          '    parameters:',
          '      path: ./xs-security.json',
          '      service: xsuaa',
          '      service-plan: application',
          '      config:',
          '        tenant-mode: dedicated',
          '        xsappname: __name__',
          '  - name: __name__-connectivity',
          '    type: org.cloudfoundry.managed-service',
          '    parameters:',
          '      service: connectivity',
          '      service-plan: lite',
          '  - name: __name__-destination',
          '    type: org.cloudfoundry.managed-service',
          '    parameters:',
          '      config:',
          '        HTML5Runtime_enabled: true',
          '        init_data:',
          '          instance:',
          '            destinations:',
          '              - Authentication: NoAuthentication',
          '                Name: ui5',
          '                ProxyType: Internet',
          '                Type: HTTP',
          '                URL: https://ui5.sap.com',
          '            existing_destinations_policy: update',
          '        version: 1.0.0',
          '      service: destination',
          '      service-plan: lite',
          '  - name: __name__-db',
          '    type: com.sap.xs.hdi-container',
          '    parameters:',
          '      service: hana',
          '      service-plan: hdi-shared',
          '    properties:',
          '      hdi-service-name: ${service-name}',
        ];

        test('Sample file mta.yaml matches expected file template', (): void => {
          const placeholders: Record<string, string> = {
            __namespace__: 'de.customer.org.project',
            __description__: 'SAP CAP Project',
            __name__: 'my-cap-service',
          };

          const resolvedTemplateLines: string[] = expectedTemplateLines.map((line: string): string =>
            line.replace(
              /__([^_]+)__/g,
              (_: string, key: string): string => placeholders[`__${key}__`] ?? `__${key}__`,
            ),
          );
          samplecode.testSampleFilesTemplates(snapshot, 'mta.yaml', resolvedTemplateLines);
        });

        test('Sample file mta.yaml matches expected file template with given options', (): void => {
          const customProps = {
            ...props,
            name: 'test-project',
            description: 'This is a description',
            namespace: 'de.mycustomer.myorg.myproject',
          };

          project = new CapServiceProject(customProps);
          snapshot = synthSnapshot(project);

          const placeholders: Record<string, string> = {
            __namespace__: 'de.mycustomer.myorg.myproject',
            __description__: 'This is a description',
            __name__: 'test-project',
          };

          const resolvedTemplateLines: string[] = expectedTemplateLines.map((line: string): string =>
            line.replace(
              /__([^_]+)__/g,
              (_: string, key: string): string => placeholders[`__${key}__`] ?? `__${key}__`,
            ),
          );
          samplecode.testSampleFilesTemplates(snapshot, 'mta.yaml', resolvedTemplateLines);
        });
      });

      test('Sample file xs-security.json matches expected file template', (): void => {
        const expectedTemplateLines: string[] = [
          '{',
          '  "scopes": [],',
          '  "attributes": [],',
          '  "role-templates": []',
          '}',
        ];

        // due to json type received (not string) we stringify it upfront
        const snapshotContent: string = JSON.stringify(snapshot['xs-security.json'], null, 2);
        samplecode.testSampleFilesTemplates(
          { 'xs-security.json': snapshotContent },
          'xs-security.json',
          expectedTemplateLines,
        );
      });
    });

    describe('SampleCode db directory', (): void => {
      test('Sample file schema.cds matches expected file template', (): void => {
        const expectedTemplateLines: string[] = [
          "using { managed } from '@sap/cds/common';",
          '',
          'namespace de.customer.org.project;',
          '',
          'entity Entity1 : managed {',
          '  key ID: Integer;',
          '  descr: localized String(111);',
          '}',
        ];
        samplecode.testSampleFilesTemplates(snapshot, 'db/schema.cds', expectedTemplateLines);
      });

      test('Sample file schema.cds matches expected file template with given options', (): void => {
        const customProps = {
          ...props,
          namespace: 'de.mycustomer.myorg.myproject',
          entityName: 'MyEntity',
        };

        project = new CapServiceProject(customProps);
        snapshot = synthSnapshot(project);

        const expectedTemplateLines: string[] = [
          "using { managed } from '@sap/cds/common';",
          '',
          'namespace de.mycustomer.myorg.myproject;',
          '',
          'entity MyEntity : managed {',
          '  key ID: Integer;',
          '  descr: localized String(111);',
          '}',
        ];
        samplecode.testSampleFilesTemplates(snapshot, 'db/schema.cds', expectedTemplateLines);
      });
    });

    describe('SampleCode data directory', (): void => {
      test('Sample file de.customer.org.project-Entity1.csv matches expected file template', (): void => {
        const expectedTemplateLines: string[] = [
          'ID,createdAt,createdBy,modifiedAt,modifiedBy,descr',
          '1,,,,,Description 1',
          '2,,,,,Description 2',
          '3,,,,,Description 3',
        ];
        samplecode.testSampleFilesTemplates(
          snapshot,
          'test/data/de.customer.org.project-Entity1.csv',
          expectedTemplateLines,
        );
      });

      test('Sample file de.mycustomer.myorg.myproject-MyEntity.csv matches expected file template with given options', (): void => {
        const customProps = {
          ...props,
          namespace: 'de.mycustomer.myorg.myproject',
          entityName: 'MyEntity',
        };

        project = new CapServiceProject(customProps);
        snapshot = synthSnapshot(project);

        const expectedTemplateLines: string[] = [
          'ID,createdAt,createdBy,modifiedAt,modifiedBy,descr',
          '1,,,,,Description 1',
          '2,,,,,Description 2',
          '3,,,,,Description 3',
        ];
        samplecode.testSampleFilesTemplates(
          snapshot,
          'test/data/de.mycustomer.myorg.myproject-MyEntity.csv',
          expectedTemplateLines,
        );
      });

      test('Sample file de.customer.org.project-Entity1.texts.csv matches expected file template', (): void => {
        const expectedTemplateLines: string[] = ['locale,ID,descr'];
        samplecode.testSampleFilesTemplates(
          snapshot,
          'test/data/de.customer.org.project-Entity1.texts.csv',
          expectedTemplateLines,
        );
      });

      test('Sample file de.mycustomer.myorg.myproject-MyEntity.texts.csv matches expected file template with given options', (): void => {
        const customProps = {
          ...props,
          namespace: 'de.mycustomer.myorg.myproject',
          entityName: 'MyEntity',
        };

        project = new CapServiceProject(customProps);
        snapshot = synthSnapshot(project);

        const expectedTemplateLines: string[] = ['locale,ID,descr'];
        samplecode.testSampleFilesTemplates(
          snapshot,
          'test/data/de.mycustomer.myorg.myproject-MyEntity.texts.csv',
          expectedTemplateLines,
        );
      });
    });
  });
});
