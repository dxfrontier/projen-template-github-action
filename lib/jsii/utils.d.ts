import { JsiiProject } from 'projen/lib/cdk';
/**
 * Mimics the builder registry behavior for a JsiiProject, adding registry and pre-/postSynthesize hooks.
 */
export declare function mimicRegistryHooks(project: JsiiProject): void;
