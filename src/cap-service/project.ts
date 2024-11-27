import { TypeScriptProjectBase, TypeScriptProjectBaseOptions } from '../base';
import { CommitLint, DevContainer, EsLint, Git, GitHub, Husky, NpmPackage, Prettier, VsCode } from './';

/**
 * Defines a CAP Service project.
 */
export class CapServiceProject extends TypeScriptProjectBase {
  /**
   * Initializes the Cap Service project.
   * @param options Additional project options.
   */
  constructor(options: TypeScriptProjectBaseOptions) {
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
    // new SampleCode(this);
  }
}
