import { TypeScriptProjectBase, TypeScriptProjectBaseOptions } from '../base';
export interface CapServiceProjectOptions extends TypeScriptProjectBaseOptions {
    readonly entityName?: string;
}
/**
 * Defines a CAP Service project.
 */
export declare class CapServiceProject extends TypeScriptProjectBase {
    /**
     * Initializes the Cap Service project.
     * @param options Additional project options.
     */
    constructor(options: CapServiceProjectOptions);
}
