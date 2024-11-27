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
  readonly entityName?: string;
}

/**
 * Defines a CAP Service project.
 */
export class CapServiceProject extends TypeScriptProjectBase {
  /**
   * Initializes the Cap Service project.
   * @param options Additional project options.
   */
  constructor(options: CapServiceProjectOptions) {
    super({
      ...options,
      disableTsconfigDev: true,
      // these settings cannot be set by a TypeScript builder later
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

    new NpmPackage(this);
    new DevContainer(this);
    new VsCode(this);
    new Git(this);
    new GitHub(this);
    new EsLint(this);
    new Prettier(this);
    new Husky(this);
    new CommitLint(this);
    new SampleCode(this, options);
  }
}
