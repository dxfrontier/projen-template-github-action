import { SampleFile } from 'projen';
import { Builder, TypeScriptProjectBase } from '../base';
import { lowerCaseFirstLetter } from '../util/utils';

/**
 * SampleCode builder implementing all relevant configuration for the project.
 */
export class SampleCode extends Builder {
  private options: Record<string, string>;

  /**
   * Initializes the base SampleCode builder.
   * It sets the default options immediately after invoking `super(project)`
   * and before `initialize()` to ensure that all necessary configuration steps are applied.
   * @param project The project to configure SampleCode for.
   * @param options The project constructor options to configure SampleCode for.
   */
  constructor(project: TypeScriptProjectBase, options: Record<string, string>) {
    super(project);
    this.options = options;
    this.initialize();
  }

  /**
   * Capire root directory templates for the SampleCode configuration.
   * @return Contents for sample root directory files.
   * @protected
   */
  protected get rootTemplatesLines(): Record<string, string[]> {
    return {
      '.cdsrc.json': [
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
      ],
      '.cdsprettier.json': [
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
      ],
      'default-env.js': [
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
      ],
      'mta.yaml': [
        "_schema-version: '3.1'",
        `ID: ${this.options.namespace}`,
        'version: 0.0.1',
        `description: ${this.options.description}`,
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
        `  - name: ${this.options.name}-srv`,
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
        `      - name: ${this.options.name}-uaa`,
        `      - name: ${this.options.name}-destination`,
        `      - name: ${this.options.name}-connectivity`,
        `      - name: ${this.options.name}-db`,
        `  - name: ${this.options.name}-destinations`,
        '    type: com.sap.application.content',
        '    requires:',
        `      - name: ${this.options.name}-uaa`,
        '        parameters:',
        '          service-key:',
        `            name: ${this.options.name}-uaa-key`,
        '      - name: srv-api',
        `      - name: ${this.options.name}-destination`,
        '        parameters:',
        '          content-target: true',
        '    parameters:',
        '      content:',
        '        instance:',
        '          destinations:',
        '            - Authentication: OAuth2UserTokenExchange',
        `              Name: ${this.options.name}-app-srv`,
        `              TokenServiceInstanceName: ${this.options.name}-uaa`,
        `              TokenServiceKeyName: ${this.options.name}-uaa-key`,
        '              URL: ~{srv-api/srv-url}',
        `              sap.cloud.service: ${this.options.namespace}`,
        '          existing_destinations_policy: update',
        '    build-parameters:',
        '      no-source: true',
        `  - name: ${this.options.name}-db-deployer`,
        '    type: hdb',
        '    path: gen/db',
        '    parameters:',
        '      buildpack: nodejs_buildpack',
        '    requires:',
        `      - name: ${this.options.name}-db`,
        `      - name: ${this.options.name}-uaa`,
        'resources:',
        `  - name: ${this.options.name}-uaa`,
        '    type: org.cloudfoundry.managed-service',
        '    parameters:',
        '      path: ./xs-security.json',
        '      service: xsuaa',
        '      service-plan: application',
        '      config:',
        '        tenant-mode: dedicated',
        `        xsappname: ${this.options.name}`,
        `  - name: ${this.options.name}-connectivity`,
        '    type: org.cloudfoundry.managed-service',
        '    parameters:',
        '      service: connectivity',
        '      service-plan: lite',
        `  - name: ${this.options.name}-destination`,
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
        `  - name: ${this.options.name}-db`,
        '    type: com.sap.xs.hdi-container',
        '    parameters:',
        '      service: hana',
        '      service-plan: hdi-shared',
        '    properties:',
        '      hdi-service-name: ${service-name}',
      ],
      'xs-security.json': ['{', '  "scopes": [],', '  "attributes": [],', '  "role-templates": []', '}'],
    };
  }

  /**
   * Capire db directory templates for the SampleCode configuration.
   * @return Contents for sample db directory files.
   * @protected
   */
  protected get dbTemplatesLines(): Record<string, string[]> {
    return {
      'db/schema.cds': [
        "using { managed } from '@sap/cds/common';",
        '',
        `namespace ${this.options.namespace};`,
        '',
        `entity ${this.options.entityName} : managed {`,
        '  key ID: Integer;',
        '  descr: localized String(111);',
        '}',
      ],
    };
  }

  /**
   * Capire data directory templates for the SampleCode configuration.
   * @return Contents for sample data directory files.
   * @protected
   */
  protected get dataTemplatesLines(): Record<string, string[]> {
    const filePath: string = `test/data/${this.options.namespace}-${this.options.entityName}.csv`;
    const filePathTexts: string = `test/data/${this.options.namespace}-${this.options.entityName}.texts.csv`;

    return {
      [filePath]: [
        'ID,createdAt,createdBy,modifiedAt,modifiedBy,descr',
        '1,,,,,Description 1',
        '2,,,,,Description 2',
        '3,,,,,Description 3',
      ],
      [filePathTexts]: ['locale,ID,descr'],
    };
  }

  /**
   * Capire srv directory templates for the SampleCode configuration.
   * @return Contents for sample srv directory files.
   * @protected
   */
  protected get srvTemplatesLines(): Record<string, string[]> {
    const filePathService: string = `srv/service/${this.options.entityName}Service.ts`;
    const filePathRepository: string = `srv/repository/${this.options.entityName}Repository.ts`;
    const filePathMiddleware: string = `srv/middleware/${this.options.entityName}Middleware.ts`;

    return {
      'srv/index.cds': [
        `using from './controller/${this.options.serviceName}/${this.options.serviceName}';`,
      ],
      'srv/util/types/types.ts': [
        '// Example',
        'export type AType = string;'
      ],
      'srv/util/helpers/util.ts': [
        'const util = {',
        '  // Example',
        '  aHelperFunction() {',
        '    return 1;',
        '  },',
        '};',
        '',
        'export default util;',
      ],
      'srv/util/constants/constants.ts': [
        'const constants = {',
        '  // Example',
        '  CONSTANT_1: {',
        "    PROP_CONSTANT_1: 'SOMETHING',",
        '  },',
        '};',
        '',
        'export default constants;',
      ],
      [filePathService]: [
        "import { Inject, Service, ServiceLogic, CDS_DISPATCHER } from '@dxfrontier/cds-ts-dispatcher';",
        '',
        `import { ${this.options.entityName}Repository } from '../repository/${this.options.entityName}Repository';`,
        '',
        '@ServiceLogic()',
        `export class ${this.options.entityName}Service {`,
        '  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;',
        `  @Inject(${this.options.entityName}Repository) private readonly ${lowerCaseFirstLetter(this.options.entityName)}Service: ${this.options.entityName}Repository;`,
        '}',
      ],
      [filePathRepository]: [
        "import { Repository } from '@dxfrontier/cds-ts-dispatcher';",
        "import { BaseRepository } from '@dxfrontier/cds-ts-repository';",
        '',
        `import { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        '',
        '@Repository()',
        `export class ${this.options.entityName}Repository extends BaseRepository<${this.options.entityName}> {`,
        '  constructor() {',
        `    super(${this.options.entityName});`,
        '  }',
        '  // ... define custom CDS-QL actions if BaseRepository ones are not satisfying your needs!',
        '}',
      ],
      [filePathMiddleware]: [
        "import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';",
        `import type { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        '',
        `export class ${this.options.entityName}Middleware implements MiddlewareImpl {`,
        `  public async use(req: TypedRequest<${this.options.entityName}>, next: NextMiddleware): Promise<void> {`,
        "    console.log('Middleware entity 1 : EXECUTED');",
        '    await next();',
        '  }',
        '}',
      ],
    };
  }

  /**
   * Creates the template files for the root directory.
   * @protected
   */
  protected createRootTemplates(): void {
    for (const path in this.rootTemplatesLines) {
      if (this.rootTemplatesLines[path]) {
        new SampleFile(this.project, path, {
          contents: this.rootTemplatesLines[path].join('\n'),
        });
      }
    }
  }

  /**
   * Creates the template files for the db directory.
   * @protected
   */
  protected createDbTemplates(): void {
    for (const path in this.dbTemplatesLines) {
      if (this.dbTemplatesLines[path]) {
        new SampleFile(this.project, path, {
          contents: this.dbTemplatesLines[path].join('\n'),
        });
      }
    }
  }

  /**
   * Creates the template files for the data directory.
   * @protected
   */
  protected createDataTemplates(): void {
    for (const path in this.dataTemplatesLines) {
      if (this.dataTemplatesLines[path]) {
        new SampleFile(this.project, path, {
          contents: this.dataTemplatesLines[path].join('\n'),
        });
      }
    }
  }

  /**
   * Creates the template files for the srv directory.
   * @protected
   */
  protected createSrvTemplates(): void {
    for (const path in this.srvTemplatesLines) {
      if (this.srvTemplatesLines[path]) {
        new SampleFile(this.project, path, {
          contents: this.srvTemplatesLines[path].join('\n'),
        });
      }
    }
  }

  /**
   * @override
   */
  protected addTemplates(): void {
    this.createRootTemplates();
    this.createDbTemplates();
    this.createDataTemplates();
    this.createSrvTemplates();
  }
}
