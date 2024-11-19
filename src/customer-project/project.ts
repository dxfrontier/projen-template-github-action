import { TypeScriptProjectBase, TypeScriptProjectBaseOptions } from '../base';
import { DevContainer, GitHub, NpmPackage, VsCode } from '../customer-project';
import { Husky } from './husky';

/**
 * Defines a Customer Project project.
 */
export class Project extends TypeScriptProjectBase {
  /**
   * Initializes the Customer Project project.
   * @param options Additional project options.
   */
  constructor(options: TypeScriptProjectBaseOptions) {
    super(options);

    new NpmPackage(this);
    new DevContainer(this);
    new VsCode(this);
    new GitHub(this);

    new Husky(this);
  }
}
