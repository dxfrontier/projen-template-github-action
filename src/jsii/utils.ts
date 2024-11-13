import { JsiiProject } from 'projen/lib/cdk';
import { Component, TypeScriptProjectBase } from '../base';

/**
 * Mimics the component registry behavior for a JsiiProject, adding registry and post-synthesis hooks.
 */
export function mimicRegistryHooks(project: JsiiProject) {
  // Mimi component registry from base project as this JsiiProject is not inherited from base project.
  (project as unknown as TypeScriptProjectBase).componentRegistry = [];
  (project as unknown as TypeScriptProjectBase).registerComponent = (component: Component): void => {
    (project as unknown as TypeScriptProjectBase).componentRegistry?.push(component);
  };
  // JsiiProject does ot has postSynthesize so we need to add it.
  (project as unknown as TypeScriptProjectBase).postSynthesize = (): void => {
    for (const component of (project as unknown as TypeScriptProjectBase).componentRegistry) {
      component.postSynthesize();
    }
  };
}
