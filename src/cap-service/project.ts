import { TypeScriptProjectBase, TypeScriptProjectBaseOptions } from '../base';
import { DevContainer, GitHub, NpmPackage, Prettier, VsCode } from './';

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
      // additional settings here
    });

    new NpmPackage(this);
    new DevContainer(this);
    new VsCode(this);
    new GitHub(this);
    new Prettier(this);
    // new Husky(this);
    // new CommitLint(this);
    // new SampleCode(this);
  }
}
