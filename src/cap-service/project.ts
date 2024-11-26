import { TypeScriptProjectBase, TypeScriptProjectBaseOptions } from '../base';

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
  }
}
