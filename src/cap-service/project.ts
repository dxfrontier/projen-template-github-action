import { JsonPatch } from 'projen';
import { TypeScriptProjectBase, TypeScriptProjectBaseOptions } from '../base';
import { CommitLint } from './commitlint';
import { DevContainer } from './devcontainer';
import { EsLint } from './eslint';
import { Git } from './git';
import { GitHub } from './github';
import { Husky } from './husky';
import { NpmPackage } from './npm';
import { Prettier } from './prettier';
import { SampleCode } from './samplecode';
import { VsCode } from './vscode';

export interface CapServiceProjectOptions extends TypeScriptProjectBaseOptions {
  readonly namespace?: string;
  readonly entityName?: string;
  readonly serviceName?: string;
}

/**
 * Defines a CAP Service project.
 */
export class CapServiceProject extends TypeScriptProjectBase {
  private defaults: Record<string, string>;

  /**
   * Initializes the Cap Service project.
   * @param options Additional project options.
   */
  constructor(options: CapServiceProjectOptions) {
    super({
      ...options,
      projenrcTs: false,
      projenrcJs: false,
      projenrcJson: false,
      disableTsconfigDev: true,
      jest: false,
      // these settings cannot be set by a TypeScript builder later
      licensed: false,
      tsconfig: {
        include: ['./srv', './@dispatcher'],
        compilerOptions: {
          rootDir: '.',
          outDir: './gen/srv',
          paths: {
            '#cds-models/*': ['./@cds-models/*/index.ts'],
          },
        },
      },
    });

    const packageJson = this.tryFindObjectFile('package.json');
    packageJson?.patch(JsonPatch.remove('/publishConfig'));

    // defaults
    this.defaults = {
      namespace: options.namespace ?? 'de.customer.org.project',
      description: options.description ?? 'SAP CAP Project',
      name: options.name,
      entityName: options.entityName ?? 'Entity1',
      serviceName: options.serviceName ?? 'service1',
    };

    new NpmPackage(this);
    new DevContainer(this);
    new VsCode(this);
    new Git(this);
    new GitHub(this);
    new EsLint(this);
    new Prettier(this);
    new Husky(this);
    new CommitLint(this);
    new SampleCode(this, this.defaults);
  }
}
