"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCode = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../base");
/**
 * SampleCode builder implementing all relevant configuration for the project.
 */
class SampleCode extends base_1.Builder {
    /**
     * Initializes the base SampleCode builder.
     * It sets the default options immediately after invoking `super(project)`
     * and before `initialize()` to ensure that all necessary configuration steps are applied.
     * @param project The project to configure SampleCode for.
     * @param options The project constructor options to configure SampleCode for.
     */
    constructor(project, options) {
        super(project);
        this.options = options;
        this.initialize();
    }
    /**
     * Capire root directory templates for the SampleCode configuration.
     * @return Contents for sample root directory files.
     * @protected
     */
    get rootTemplatesLines() {
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
    get dbTemplatesLines() {
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
    get dataTemplatesLines() {
        const filePath = `test/data/${this.options.namespace}-${this.options.entityName}.csv`;
        const filePathTexts = `test/data/${this.options.namespace}-${this.options.entityName}.texts.csv`;
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
     * Creates the template files for the root directory.
     * @protected
     */
    createRootTemplates() {
        for (const path in this.rootTemplatesLines) {
            if (this.rootTemplatesLines[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.rootTemplatesLines[path].join('\n'),
                });
            }
        }
    }
    /**
     * Creates the template files for the db directory.
     * @protected
     */
    createDbTemplates() {
        for (const path in this.dbTemplatesLines) {
            if (this.dbTemplatesLines[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.dbTemplatesLines[path].join('\n'),
                });
            }
        }
    }
    /**
     * Creates the template files for the data directory.
     * @protected
     */
    createDataTemplates() {
        for (const path in this.dataTemplatesLines) {
            if (this.dataTemplatesLines[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.dataTemplatesLines[path].join('\n'),
                });
            }
        }
    }
    /**
     * @override
     */
    addTemplates() {
        this.createRootTemplates();
        this.createDbTemplates();
        this.createDataTemplates();
    }
}
exports.SampleCode = SampleCode;
_a = JSII_RTTI_SYMBOL_1;
SampleCode[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCode", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9zYW1wbGVjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW9DO0FBQ3BDLGtDQUF5RDtBQUV6RDs7R0FFRztBQUNILE1BQWEsVUFBVyxTQUFRLGNBQU87SUFHckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxPQUE4QixFQUFFLE9BQStCO1FBQ3pFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsa0JBQWtCO1FBQzlCLE9BQU87WUFDTCxhQUFhLEVBQUU7Z0JBQ2IsR0FBRztnQkFDSCxpQkFBaUI7Z0JBQ2pCLHdCQUF3QjtnQkFDeEIsaUJBQWlCO2dCQUNqQiwwQkFBMEI7Z0JBQzFCLFNBQVM7Z0JBQ1QsUUFBUTtnQkFDUix1QkFBdUI7Z0JBQ3ZCLGlCQUFpQjtnQkFDakIseUJBQXlCO2dCQUN6QixVQUFVO2dCQUNWLGVBQWU7Z0JBQ2YseUJBQXlCO2dCQUN6QixpQ0FBaUM7Z0JBQ2pDLHFDQUFxQztnQkFDckMsU0FBUztnQkFDVCxPQUFPO2dCQUNQLE1BQU07Z0JBQ04sYUFBYTtnQkFDYiw4QkFBOEI7Z0JBQzlCLE1BQU07Z0JBQ04sWUFBWTtnQkFDWixxQkFBcUI7Z0JBQ3JCLE1BQU07Z0JBQ04saUJBQWlCO2dCQUNqQiwrQkFBK0I7Z0JBQy9CLE1BQU07Z0JBQ04sWUFBWTtnQkFDWix1Q0FBdUM7Z0JBQ3ZDLE1BQU07Z0JBQ04sYUFBYTtnQkFDYixpQ0FBaUM7Z0JBQ2pDLEtBQUs7Z0JBQ0wsR0FBRzthQUNKO1lBQ0QsbUJBQW1CLEVBQUU7Z0JBQ25CLEdBQUc7Z0JBQ0gsMEJBQTBCO2dCQUMxQiw2QkFBNkI7Z0JBQzdCLGdDQUFnQztnQkFD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bnRlbnQiOlsiaW1wb3J0IHsgU2FtcGxlRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBCdWlsZGVyLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBTYW1wbGVDb2RlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNhbXBsZUNvZGUgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgcHJpdmF0ZSBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBTYW1wbGVDb2RlIGJ1aWxkZXIuXG4gICAqIEl0IHNldHMgdGhlIGRlZmF1bHQgb3B0aW9ucyBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIGFuZCBiZWZvcmUgYGluaXRpYWxpemUoKWAgdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgU2FtcGxlQ29kZSBmb3IuXG4gICAqIEBwYXJhbSBvcHRpb25zIFRoZSBwcm9qZWN0IGNvbnN0cnVjdG9yIG9wdGlvbnMgdG8gY29uZmlndXJlIFNhbXBsZUNvZGUgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgcm9vdCBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgcm9vdCBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcm9vdFRlbXBsYXRlc0xpbmVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcuY2RzcmMuanNvbic6IFtcbiAgICAgICAgJ3snLFxuICAgICAgICAnICBcInJlcXVpcmVzXCI6IHsnLFxuICAgICAgICAnICAgIFwiW2RldmVsb3BtZW50XVwiOiB7JyxcbiAgICAgICAgJyAgICAgIFwiYXV0aFwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwibW9ja2VkXCInLFxuICAgICAgICAnICAgICAgfScsXG4gICAgICAgICcgICAgfSwnLFxuICAgICAgICAnICAgIFwiW3Byb2R1Y3Rpb25dXCI6IHsnLFxuICAgICAgICAnICAgICAgXCJhdXRoXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJ4c3VhYVwiJyxcbiAgICAgICAgJyAgICAgIH0sJyxcbiAgICAgICAgJyAgICAgIFwiZGJcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcImhhbmFcIiwnLFxuICAgICAgICAnICAgICAgICBcImltcGxcIjogXCJAY2FwLWpzL2hhbmFcIiwnLFxuICAgICAgICAnICAgICAgICBcImRlcGxveS1mb3JtYXRcIjogXCJoZGJ0YWJsZVwiJyxcbiAgICAgICAgJyAgICAgIH0nLFxuICAgICAgICAnICAgIH0nLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiaTE4blwiOiB7JyxcbiAgICAgICAgJyAgICBcImRlZmF1bHRfbGFuZ3VhZ2VcIjogXCJlblwiJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImxvZ1wiOiB7JyxcbiAgICAgICAgJyAgICBcInNlcnZpY2VcIjogdHJ1ZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJmZWF0dXJlc1wiOiB7JyxcbiAgICAgICAgJyAgICBcInByZXNlcnZlX2NvbXB1dGVkXCI6IHRydWUnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwic3FsXCI6IHsnLFxuICAgICAgICAnICAgIFwibmF0aXZlX2hhbmFfYXNzb2NpYXRpb25zXCI6IGZhbHNlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImhhbmFcIjogeycsXG4gICAgICAgICcgICAgXCJkZXBsb3ktZm9ybWF0XCI6IFwiaGRidGFibGVcIicsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgICAgJy5jZHNwcmV0dGllci5qc29uJzogW1xuICAgICAgICAneycsXG4gICAgICAgICcgIFwiYWxpZ25BZnRlcktleVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25QcmVBbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Qb3N0QW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29sb25zSW5Bbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25WYWx1ZXNJbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFjdGlvbnNBbmRGdW5jdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uTmFtZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uUmV0dXJuc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luRW50aXRpZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJblNlbGVjdEl0ZW1zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5Vc2luZ1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FeHByZXNzaW9uc0FuZENvbmRpdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduRXhwckFuZENvbmRXaXRoaW5CbG9ja1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25UeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db2xvbnNCZWZvcmVUeXBlc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FcXVhbHNBZnRlclR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblR5cGVzV2l0aGluQmxvY2tcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQ29tcG9zaXRpb25TdHJ1Y3RUb1JpZ2h0XCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJjcWxLZXl3b3JkQ2FwaXRhbGl6YXRpb25cIjogXCJsb3dlclwiLCcsXG4gICAgICAgICcgIFwia2VlcFByZUFubm90YXRpb25zSW5PcmlnaW5hbExpbmVcIjogXCJrZWVwTGluZVwiLCcsXG4gICAgICAgICcgIFwia2VlcFBvc3RBbm5vdGF0aW9uc0luT3JpZ2luYWxMaW5lXCI6IFwia2VlcExpbmVcIiwnLFxuICAgICAgICAnICBcImtlZXBFbXB0eUJyYWNrZXRzVG9nZXRoZXJcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImtlZXBTaW5nbGVMaW5lZEJsb2Nrc1RvZ2V0aGVyXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJrZWVwT3JpZ2luYWxFbXB0eUxpbmVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJtYXhLZWVwRW1wdHlMaW5lc1wiOiAyLCcsXG4gICAgICAgICcgIFwib3BlbmluZ0JyYWNlSW5OZXdMaW5lXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwic2VsZWN0SW5OZXdMaW5lXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ0YWJTaXplXCI6IDIsJyxcbiAgICAgICAgJyAgXCJmaW5hbE5ld2xpbmVcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImZvcm1hdERvY0NvbW1lbnRzXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwibWF4RG9jQ29tbWVudExpbmVcIjogNjAsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQmVmb3JlQ29sb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VCZWZvcmVDb2xvbkluQW5ub3RhdGlvblwiOiBmYWxzZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbG9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb2xvbkluQW5ub3RhdGlvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29tbWFcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBcm91bmRBbGlnbmVkT3BzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQXJvdW5kQmluYXJ5T3BzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlV2l0aGluQnJhY2tldHNcIjogZmFsc2UnLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgICAgJ2RlZmF1bHQtZW52LmpzJzogW1xuICAgICAgICAnLyoqJyxcbiAgICAgICAgJyAqIEZldGNoZXMgYFZDQVBfU0VSVklDRVNgIGZvciBhIGdpdmVuIENGIGFwcGxpY2F0aW9uIGFuZCB3cml0ZXMgaXQgdG8gYSBmaWxlLicsXG4gICAgICAgICcgKiBJdCB1dGlsaXplcyB0aGUgQ2xvdWQgRm91bmRyeSBDTEkgdG8gZG8gc28uJyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIE1ha2Ugc3VyZSB5b3UgYXJlIGxvZ2dlZCBpbiB2aWEgdGhlIENGIENMSSAoYGNmIGxvZ2luYCkgYmVmb3JlIHJ1bm5pbmcgdGhlJyxcbiAgICAgICAgJyAqIHNjcmlwdC4gWW91IGNhbiBjaGVjayB5b3VyIGxvZ2luIGFuZCB0aGUgb3JnYW5pemF0aW9uIGFuZCBzcGFjZSB5b3UgYXJlJyxcbiAgICAgICAgJyAqIHRhcmdldHRpbmcgYnkgdXNpbmcgYGNmIHRhcmdldGAuJyxcbiAgICAgICAgJyAqJyxcbiAgICAgICAgJyAqIEFsbG93cyBvbi1wcmVtaXNlIGNvbm5lY3Rpdml0eSBwcm94eWluZyBpZiBuZWNlc3NhcnknLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogQGF1dGhvciBTZWJhc3RpYW4gQmxlc3NpbmcnLFxuICAgICAgICAnICovJyxcbiAgICAgICAgXCJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XCIsXG4gICAgICAgIFwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcIixcbiAgICAgICAgXCJjb25zdCBleGVjID0gdXRpbC5wcm9taXNpZnkocmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMpO1wiLFxuICAgICAgICBcImNvbnN0IHNwYXduID0gdXRpbC5wcm9taXNpZnkocmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLnNwYXduKTtcIixcbiAgICAgICAgJycsXG4gICAgICAgICdhc3luYyBmdW5jdGlvbiBnZXRBcHBHdWlkKGFwcE5hbWUpIHsnLFxuICAgICAgICAnICBjb25zdCBjbWQgPSBgY2YgYXBwICR7YXBwTmFtZX0gLS1ndWlkYDsnLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhjbWQpOycsXG4gICAgICAgICcgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoY21kKTsnLFxuICAgICAgICAnICBpZiAoc3RkZXJyKSBjb25zb2xlLmxvZyhgc3RkZXJyOiAke3N0ZGVycn1gKTsnLFxuICAgICAgICAnICByZXR1cm4gc3Rkb3V0LnRyaW0oKTsnLFxuICAgICAgICAnfScsXG4gICAgICAgICcnLFxuICAgICAgICAnYXN5bmMgZnVuY3Rpb24gZ2V0RGVmYXVsdEVudihhcHBHdWlkKSB7JyxcbiAgICAgICAgJyAgY29uc3QgY21kID0gYGNmIGN1cmwgXCJ2My9hcHBzLyR7YXBwR3VpZH0vZW52XCJgOycsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGNtZCk7JyxcbiAgICAgICAgJyAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYyhjbWQpOycsXG4gICAgICAgICcgIGlmIChzdGRlcnIpIGNvbnNvbGUubG9nKGBzdGRlcnI6ICR7c3RkZXJyfWApOycsXG4gICAgICAgICcgIHJldHVybiBKU09OLnBhcnNlKHN0ZG91dCkuc3lzdGVtX2Vudl9qc29uOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJycsXG4gICAgICAgICcoYXN5bmMgKCkgPT4geycsXG4gICAgICAgICcgIGNvbnN0IG15QXJncyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTsnLFxuICAgICAgICAnICBjb25zdCBhcHBOYW1lID0gbXlBcmdzWzBdOycsXG4gICAgICAgICcgIGlmICghYXBwTmFtZSkgeycsXG4gICAgICAgIFwiICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgQ0YgYXBwbGljYXRpb24gbmFtZSB0byBmZXRjaCBpdHMgZW52aXJvbm1lbnQhJyk7XCIsXG4gICAgICAgICcgICAgcmV0dXJuOycsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgbGV0IGVudkZpbGVOYW1lID0gbXlBcmdzWzFdOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgZW52RmlsZU5hbWUgPSBlbnZGaWxlTmFtZSA/IGVudkZpbGVOYW1lIDogJ2RlZmF1bHQtZW52Lmpzb24nO1wiLFxuICAgICAgICAnICBjb25zb2xlLmxvZyhgV3JpdGluZyBlbnZpcm9ubWVudCBvZiAke2FwcE5hbWV9IHRvICR7ZW52RmlsZU5hbWV9YCk7JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGNvbnN0IGRlZmF1bHRFbnYgPSBhd2FpdCBnZXREZWZhdWx0RW52KGF3YWl0IGdldEFwcEd1aWQoYXBwTmFtZSkpOycsXG4gICAgICAgICcnLFxuICAgICAgICAnICBsZXQgYlJ1blByb3h5ID0gZmFsc2U7JyxcbiAgICAgICAgJyAgbGV0IHByb3h5UG9ydCA9IG51bGw7JyxcbiAgICAgICAgJyAgbGV0IHByb3h5SG9zdCA9IG51bGw7JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBpZiAoZGVmYXVsdEVudlsnVkNBUF9TRVJWSUNFUyddWydjb25uZWN0aXZpdHknXSkge1wiLFxuICAgICAgICAnICAgIHByb3h5UG9ydCA9IGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X3BvcnQ7JyxcbiAgICAgICAgJyAgICBwcm94eUhvc3QgPSBkZWZhdWx0RW52LlZDQVBfU0VSVklDRVMuY29ubmVjdGl2aXR5WzBdLmNyZWRlbnRpYWxzLm9ucHJlbWlzZV9wcm94eV9ob3N0OycsXG4gICAgICAgIFwiICAgIGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X2hvc3QgPSAnbG9jYWxob3N0JztcIixcbiAgICAgICAgJyAgICBiUnVuUHJveHkgPSB0cnVlOycsXG4gICAgICAgICcgIH0nLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGZzLndyaXRlRmlsZSgnZGVmYXVsdC1lbnYuanNvbicsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRFbnYsIG51bGwsIDIpLCBhc3luYyAoZXJyKSA9PiB7XCIsXG4gICAgICAgICcgICAgaWYgKGVycikgeycsXG4gICAgICAgICcgICAgICBjb25zb2xlLmVycm9yKGVycik7JyxcbiAgICAgICAgJyAgICB9IGVsc2UgaWYgKGJSdW5Qcm94eSkgeycsXG4gICAgICAgICcgICAgICBjb25zb2xlLmxvZyhgY2Ygc3NoICR7YXBwTmFtZX0gLUwgJHtwcm94eVBvcnR9OiR7cHJveHlIb3N0fToke3Byb3h5UG9ydH1gKTsnLFxuICAgICAgICBcIiAgICAgIGF3YWl0IHNwYXduKCdjZicsIFtgc3NoICR7YXBwTmFtZX0gLUwgJHtwcm94eVBvcnR9OiR7cHJveHlIb3N0fToke3Byb3h5UG9ydH1gXSwge1wiLFxuICAgICAgICAnICAgICAgICBzaGVsbDogdHJ1ZSwnLFxuICAgICAgICBcIiAgICAgICAgc3RkaW86ICdpbmhlcml0JyxcIixcbiAgICAgICAgJyAgICAgIH0pOycsXG4gICAgICAgICcgICAgfScsXG4gICAgICAgICcgIH0pOycsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgY29uc29sZS5sb2coJ0RvbmUnKTtcIixcbiAgICAgICAgJ30pKCk7JyxcbiAgICAgIF0sXG4gICAgICAnbXRhLnlhbWwnOiBbXG4gICAgICAgIFwiX3NjaGVtYS12ZXJzaW9uOiAnMy4xJ1wiLFxuICAgICAgICBgSUQ6ICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX1gLFxuICAgICAgICAndmVyc2lvbjogMC4wLjEnLFxuICAgICAgICBgZGVzY3JpcHRpb246ICR7dGhpcy5vcHRpb25zLmRlc2NyaXB0aW9ufWAsXG4gICAgICAgICdwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgIGVuYWJsZS1wYXJhbGxlbC1kZXBsb3ltZW50czogdHJ1ZScsXG4gICAgICAgICdidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgIGJlZm9yZS1hbGw6JyxcbiAgICAgICAgJyAgICAtIGJ1aWxkZXI6IGN1c3RvbScsXG4gICAgICAgICcgICAgICBjb21tYW5kczonLFxuICAgICAgICAnICAgICAgICAtIG5wbSBjaScsXG4gICAgICAgICcgICAgICAgIC0gbnBtIHJ1biBidWlsZCcsXG4gICAgICAgICcgICAgICAgIC0gbnB4IEBjYXAtanMvY2RzLXR5cGVyIFwiKlwiIC0tb3V0cHV0RGlyZWN0b3J5IGdlbi9zcnYvQGNkcy1tb2RlbHMnLFxuICAgICAgICAnbW9kdWxlczonLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXNydmAsXG4gICAgICAgICcgICAgdHlwZTogbm9kZWpzJyxcbiAgICAgICAgJyAgICBwYXRoOiBnZW4vc3J2JyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBidWlsZHBhY2s6IG5vZGVqc19idWlsZHBhY2snLFxuICAgICAgICAnICAgICAgcmVhZGluZXNzLWhlYWx0aC1jaGVjay10eXBlOiBodHRwJyxcbiAgICAgICAgJyAgICAgIHJlYWRpbmVzcy1oZWFsdGgtY2hlY2staHR0cC1lbmRwb2ludDogL2hlYWx0aCcsXG4gICAgICAgICcgICAgYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgYnVpbGRlcjogbnBtJyxcbiAgICAgICAgJyAgICBwcm92aWRlczonLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBzcnYtYXBpJyxcbiAgICAgICAgJyAgICAgICAgcHJvcGVydGllczonLFxuICAgICAgICAnICAgICAgICAgIHNydi11cmw6ICR7ZGVmYXVsdC11cmx9JyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWNvbm5lY3Rpdml0eWAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiYCxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbnNgLFxuICAgICAgICAnICAgIHR5cGU6IGNvbS5zYXAuYXBwbGljYXRpb24uY29udGVudCcsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgJyAgICAgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgICAgIHNlcnZpY2Uta2V5OicsXG4gICAgICAgIGAgICAgICAgICAgICBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWEta2V5YCxcbiAgICAgICAgJyAgICAgIC0gbmFtZTogc3J2LWFwaScsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgJyAgICAgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgICAgIGNvbnRlbnQtdGFyZ2V0OiB0cnVlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBjb250ZW50OicsXG4gICAgICAgICcgICAgICAgIGluc3RhbmNlOicsXG4gICAgICAgICcgICAgICAgICAgZGVzdGluYXRpb25zOicsXG4gICAgICAgICcgICAgICAgICAgICAtIEF1dGhlbnRpY2F0aW9uOiBPQXV0aDJVc2VyVG9rZW5FeGNoYW5nZScsXG4gICAgICAgIGAgICAgICAgICAgICAgIE5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWFwcC1zcnZgLFxuICAgICAgICBgICAgICAgICAgICAgICBUb2tlblNlcnZpY2VJbnN0YW5jZU5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgIGAgICAgICAgICAgICAgIFRva2VuU2VydmljZUtleU5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYS1rZXlgLFxuICAgICAgICAnICAgICAgICAgICAgICBVUkw6IH57c3J2LWFwaS9zcnYtdXJsfScsXG4gICAgICAgIGAgICAgICAgICAgICAgIHNhcC5jbG91ZC5zZXJ2aWNlOiAke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9YCxcbiAgICAgICAgJyAgICAgICAgICBleGlzdGluZ19kZXN0aW5hdGlvbnNfcG9saWN5OiB1cGRhdGUnLFxuICAgICAgICAnICAgIGJ1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIG5vLXNvdXJjZTogdHJ1ZScsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGItZGVwbG95ZXJgLFxuICAgICAgICAnICAgIHR5cGU6IGhkYicsXG4gICAgICAgICcgICAgcGF0aDogZ2VuL2RiJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBidWlsZHBhY2s6IG5vZGVqc19idWlsZHBhY2snLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRiYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgJ3Jlc291cmNlczonLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIHBhdGg6IC4veHMtc2VjdXJpdHkuanNvbicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiB4c3VhYScsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGFwcGxpY2F0aW9uJyxcbiAgICAgICAgJyAgICAgIGNvbmZpZzonLFxuICAgICAgICAnICAgICAgICB0ZW5hbnQtbW9kZTogZGVkaWNhdGVkJyxcbiAgICAgICAgYCAgICAgICAgeHNhcHBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfWAsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tY29ubmVjdGl2aXR5YCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgc2VydmljZTogY29ubmVjdGl2aXR5JyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogbGl0ZScsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBjb25maWc6JyxcbiAgICAgICAgJyAgICAgICAgSFRNTDVSdW50aW1lX2VuYWJsZWQ6IHRydWUnLFxuICAgICAgICAnICAgICAgICBpbml0X2RhdGE6JyxcbiAgICAgICAgJyAgICAgICAgICBpbnN0YW5jZTonLFxuICAgICAgICAnICAgICAgICAgICAgZGVzdGluYXRpb25zOicsXG4gICAgICAgICcgICAgICAgICAgICAgIC0gQXV0aGVudGljYXRpb246IE5vQXV0aGVudGljYXRpb24nLFxuICAgICAgICAnICAgICAgICAgICAgICAgIE5hbWU6IHVpNScsXG4gICAgICAgICcgICAgICAgICAgICAgICAgUHJveHlUeXBlOiBJbnRlcm5ldCcsXG4gICAgICAgICcgICAgICAgICAgICAgICAgVHlwZTogSFRUUCcsXG4gICAgICAgICcgICAgICAgICAgICAgICAgVVJMOiBodHRwczovL3VpNS5zYXAuY29tJyxcbiAgICAgICAgJyAgICAgICAgICAgIGV4aXN0aW5nX2Rlc3RpbmF0aW9uc19wb2xpY3k6IHVwZGF0ZScsXG4gICAgICAgICcgICAgICAgIHZlcnNpb246IDEuMC4wJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IGRlc3RpbmF0aW9uJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogbGl0ZScsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICAnICAgIHR5cGU6IGNvbS5zYXAueHMuaGRpLWNvbnRhaW5lcicsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgc2VydmljZTogaGFuYScsXG4gICAgICAgICcgICAgICBzZXJ2aWNlLXBsYW46IGhkaS1zaGFyZWQnLFxuICAgICAgICAnICAgIHByb3BlcnRpZXM6JyxcbiAgICAgICAgJyAgICAgIGhkaS1zZXJ2aWNlLW5hbWU6ICR7c2VydmljZS1uYW1lfScsXG4gICAgICBdLFxuICAgICAgJ3hzLXNlY3VyaXR5Lmpzb24nOiBbJ3snLCAnICBcInNjb3Blc1wiOiBbXSwnLCAnICBcImF0dHJpYnV0ZXNcIjogW10sJywgJyAgXCJyb2xlLXRlbXBsYXRlc1wiOiBbXScsICd9J10sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgZGIgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGRiIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBkYlRlbXBsYXRlc0xpbmVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkYi9zY2hlbWEuY2RzJzogW1xuICAgICAgICBcInVzaW5nIHsgbWFuYWdlZCB9IGZyb20gJ0BzYXAvY2RzL2NvbW1vbic7XCIsXG4gICAgICAgICcnLFxuICAgICAgICBgbmFtZXNwYWNlICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX07YCxcbiAgICAgICAgJycsXG4gICAgICAgIGBlbnRpdHkgJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0gOiBtYW5hZ2VkIHtgLFxuICAgICAgICAnICBrZXkgSUQ6IEludGVnZXI7JyxcbiAgICAgICAgJyAgZGVzY3I6IGxvY2FsaXplZCBTdHJpbmcoMTExKTsnLFxuICAgICAgICAnfScsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGRhdGEgZGlyZWN0b3J5IHRlbXBsYXRlcyBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50cyBmb3Igc2FtcGxlIGRhdGEgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGRhdGFUZW1wbGF0ZXNMaW5lcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBgdGVzdC9kYXRhLyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0tJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0uY3N2YDtcbiAgICBjb25zdCBmaWxlUGF0aFRleHRzOiBzdHJpbmcgPSBgdGVzdC9kYXRhLyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0tJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0udGV4dHMuY3N2YDtcblxuICAgIHJldHVybiB7XG4gICAgICBbZmlsZVBhdGhdOiBbXG4gICAgICAgICdJRCxjcmVhdGVkQXQsY3JlYXRlZEJ5LG1vZGlmaWVkQXQsbW9kaWZpZWRCeSxkZXNjcicsXG4gICAgICAgICcxLCwsLCxEZXNjcmlwdGlvbiAxJyxcbiAgICAgICAgJzIsLCwsLERlc2NyaXB0aW9uIDInLFxuICAgICAgICAnMywsLCwsRGVzY3JpcHRpb24gMycsXG4gICAgICBdLFxuICAgICAgW2ZpbGVQYXRoVGV4dHNdOiBbJ2xvY2FsZSxJRCxkZXNjciddLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgdGVtcGxhdGUgZmlsZXMgZm9yIHRoZSByb290IGRpcmVjdG9yeS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZVJvb3RUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwYXRoIGluIHRoaXMucm9vdFRlbXBsYXRlc0xpbmVzKSB7XG4gICAgICBpZiAodGhpcy5yb290VGVtcGxhdGVzTGluZXNbcGF0aF0pIHtcbiAgICAgICAgbmV3IFNhbXBsZUZpbGUodGhpcy5wcm9qZWN0LCBwYXRoLCB7XG4gICAgICAgICAgY29udGVudHM6IHRoaXMucm9vdFRlbXBsYXRlc0xpbmVzW3BhdGhdLmpvaW4oJ1xcbicpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgdGVtcGxhdGUgZmlsZXMgZm9yIHRoZSBkYiBkaXJlY3RvcnkuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVEYlRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBhdGggaW4gdGhpcy5kYlRlbXBsYXRlc0xpbmVzKSB7XG4gICAgICBpZiAodGhpcy5kYlRlbXBsYXRlc0xpbmVzW3BhdGhdKSB7XG4gICAgICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgcGF0aCwge1xuICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLmRiVGVtcGxhdGVzTGluZXNbcGF0aF0uam9pbignXFxuJyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0ZW1wbGF0ZSBmaWxlcyBmb3IgdGhlIGRhdGEgZGlyZWN0b3J5LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlRGF0YVRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBhdGggaW4gdGhpcy5kYXRhVGVtcGxhdGVzTGluZXMpIHtcbiAgICAgIGlmICh0aGlzLmRhdGFUZW1wbGF0ZXNMaW5lc1twYXRoXSkge1xuICAgICAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIHBhdGgsIHtcbiAgICAgICAgICBjb250ZW50czogdGhpcy5kYXRhVGVtcGxhdGVzTGluZXNbcGF0aF0uam9pbignXFxuJyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBhZGRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVSb290VGVtcGxhdGVzKCk7XG4gICAgdGhpcy5jcmVhdGVEYlRlbXBsYXRlcygpO1xuICAgIHRoaXMuY3JlYXRlRGF0YVRlbXBsYXRlcygpO1xuICB9XG59XG4iXX0=