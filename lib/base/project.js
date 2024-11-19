"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptProjectBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const typescript_1 = require("projen/lib/typescript");
/**
 * Base class for managing project configuration.
 * @abstract
 */
class TypeScriptProjectBase extends typescript_1.TypeScriptProject {
    /**
     * Initializes the project.
     * @param options Additional project options.
     */
    constructor(options) {
        super({
            ...options,
            packageManager: options.packageManager ?? projen_1.javascript.NodePackageManager.NPM,
            minNodeVersion: options.minNodeVersion ?? '20',
            projenrcTs: options.projenrcTs ?? true,
            prettier: options.prettier ?? true,
            githubOptions: options.githubOptions ?? {
                mergify: false,
                pullRequestLint: false, // workflow pull-request-lint.yml
            },
            buildWorkflow: options.buildWorkflow ?? false, // workflow build.yml
            release: options.release ?? false, // workflow release.yml
            pullRequestTemplate: options.pullRequestTemplate ?? false, // pull_request_template.yml
            depsUpgrade: options.depsUpgrade ?? false, // workflow upgrade-main.yml
            sampleCode: options.sampleCode ?? false,
            devDeps: [
                'projen',
                'construct',
                'projen-template-projects@git+https://github.com/dxfrontier/projen-template-projects.git',
            ],
        });
        this.builderRegistry = [];
    }
    /**
     * Register a builder to be managed by this project.
     * @param builder The builder to register (must extend BaseBuilder).
     * @public
     */
    registerBuilder(builder) {
        this.builderRegistry?.push(builder);
    }
    /**
     * Finds a builder in the registry by its constructor name.
     * @param name The name of the builder to search for.
     * @returns The builder if found, otherwise undefined.
     */
    findBuilderByName(name) {
        return this.builderRegistry.find((builder) => builder.constructor.name === name);
    }
    /**
     * @public
     */
    preSynthesize() {
        super.preSynthesize();
        for (const builder of this.builderRegistry) {
            builder.preSynthesize();
        }
    }
    /**
     * @public
     */
    postSynthesize() {
        super.postSynthesize();
        for (const builder of this.builderRegistry) {
            builder.postSynthesize();
        }
    }
}
exports.TypeScriptProjectBase = TypeScriptProjectBase;
_a = JSII_RTTI_SYMBOL_1;
TypeScriptProjectBase[_a] = { fqn: "projen-template-projects.TypeScriptProjectBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsc0RBQW9GO0FBUXBGOzs7R0FHRztBQUNILE1BQXNCLHFCQUFzQixTQUFRLDhCQUFpQjtJQUduRTs7O09BR0c7SUFDSCxZQUFZLE9BQXFDO1FBQy9DLEtBQUssQ0FBQztZQUNKLEdBQUcsT0FBTztZQUVWLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYyxJQUFJLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUMzRSxjQUFjLEVBQUUsT0FBTyxDQUFDLGNBQWMsSUFBSSxJQUFJO1lBQzlDLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLElBQUk7WUFFdEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtZQUNsQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSTtnQkFDdEMsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsZUFBZSxFQUFFLEtBQUssRUFBRSxpQ0FBaUM7YUFDMUQ7WUFDRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUUscUJBQXFCO1lBQ3BFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBRSx1QkFBdUI7WUFDMUQsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLEtBQUssRUFBRSw0QkFBNEI7WUFDdkYsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSyxFQUFFLDRCQUE0QjtZQUN2RSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBRXZDLE9BQU8sRUFBRTtnQkFDUCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gseUZBQXlGO2FBQzFGO1NBQ0YsQ0FBQyxDQUFDO1FBOUJFLG9CQUFlLEdBQWMsRUFBRSxDQUFDO0lBK0J2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGVBQWUsQ0FBQyxPQUFnQjtRQUNyQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUFDLElBQVk7UUFDbkMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQWdCLEVBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWE7UUFDbEIsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYztRQUNuQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0MsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDOztBQXRFSCxzREF1RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqYXZhc2NyaXB0IH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0LCBUeXBlU2NyaXB0UHJvamVjdE9wdGlvbnMgfSBmcm9tICdwcm9qZW4vbGliL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5cbi8vIEhhdmUgdG8gZGlzYWJsZSB0aGUgcHJldHRpZXIgcnVsZSBoZXJlIGZvciB0aGUgeyB9XG4vLyBvdGhlcndpc2Ugd2UgaGF2ZSBhIGNvbmZsaWN0IGJldHdlZW4gcHJldHRpZXIgYW5kIGxpbnRlci5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuZXhwb3J0IGludGVyZmFjZSBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zIGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3RPcHRpb25zIHt9XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbWFuYWdpbmcgcHJvamVjdCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgZXh0ZW5kcyBUeXBlU2NyaXB0UHJvamVjdCB7XG4gIHB1YmxpYyBidWlsZGVyUmVnaXN0cnk6IEJ1aWxkZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4ub3B0aW9ucyxcblxuICAgICAgcGFja2FnZU1hbmFnZXI6IG9wdGlvbnMucGFja2FnZU1hbmFnZXIgPz8gamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgbWluTm9kZVZlcnNpb246IG9wdGlvbnMubWluTm9kZVZlcnNpb24gPz8gJzIwJyxcbiAgICAgIHByb2plbnJjVHM6IG9wdGlvbnMucHJvamVucmNUcyA/PyB0cnVlLFxuXG4gICAgICBwcmV0dGllcjogb3B0aW9ucy5wcmV0dGllciA/PyB0cnVlLFxuICAgICAgZ2l0aHViT3B0aW9uczogb3B0aW9ucy5naXRodWJPcHRpb25zID8/IHtcbiAgICAgICAgbWVyZ2lmeTogZmFsc2UsXG4gICAgICAgIHB1bGxSZXF1ZXN0TGludDogZmFsc2UsIC8vIHdvcmtmbG93IHB1bGwtcmVxdWVzdC1saW50LnltbFxuICAgICAgfSxcbiAgICAgIGJ1aWxkV29ya2Zsb3c6IG9wdGlvbnMuYnVpbGRXb3JrZmxvdyA/PyBmYWxzZSwgLy8gd29ya2Zsb3cgYnVpbGQueW1sXG4gICAgICByZWxlYXNlOiBvcHRpb25zLnJlbGVhc2UgPz8gZmFsc2UsIC8vIHdvcmtmbG93IHJlbGVhc2UueW1sXG4gICAgICBwdWxsUmVxdWVzdFRlbXBsYXRlOiBvcHRpb25zLnB1bGxSZXF1ZXN0VGVtcGxhdGUgPz8gZmFsc2UsIC8vIHB1bGxfcmVxdWVzdF90ZW1wbGF0ZS55bWxcbiAgICAgIGRlcHNVcGdyYWRlOiBvcHRpb25zLmRlcHNVcGdyYWRlID8/IGZhbHNlLCAvLyB3b3JrZmxvdyB1cGdyYWRlLW1haW4ueW1sXG4gICAgICBzYW1wbGVDb2RlOiBvcHRpb25zLnNhbXBsZUNvZGUgPz8gZmFsc2UsXG5cbiAgICAgIGRldkRlcHM6IFtcbiAgICAgICAgJ3Byb2plbicsXG4gICAgICAgICdjb25zdHJ1Y3QnLFxuICAgICAgICAncHJvamVuLXRlbXBsYXRlLXByb2plY3RzQGdpdCtodHRwczovL2dpdGh1Yi5jb20vZHhmcm9udGllci9wcm9qZW4tdGVtcGxhdGUtcHJvamVjdHMuZ2l0JyxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBidWlsZGVyIHRvIGJlIG1hbmFnZWQgYnkgdGhpcyBwcm9qZWN0LlxuICAgKiBAcGFyYW0gYnVpbGRlciBUaGUgYnVpbGRlciB0byByZWdpc3RlciAobXVzdCBleHRlbmQgQmFzZUJ1aWxkZXIpLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJCdWlsZGVyKGJ1aWxkZXI6IEJ1aWxkZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkZXJSZWdpc3RyeT8ucHVzaChidWlsZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhIGJ1aWxkZXIgaW4gdGhlIHJlZ2lzdHJ5IGJ5IGl0cyBjb25zdHJ1Y3RvciBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYnVpbGRlciB0byBzZWFyY2ggZm9yLlxuICAgKiBAcmV0dXJucyBUaGUgYnVpbGRlciBpZiBmb3VuZCwgb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICovXG4gIHB1YmxpYyBmaW5kQnVpbGRlckJ5TmFtZShuYW1lOiBzdHJpbmcpOiBCdWlsZGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyUmVnaXN0cnkuZmluZCgoYnVpbGRlcjogQnVpbGRlcik6IGJvb2xlYW4gPT4gYnVpbGRlci5jb25zdHJ1Y3Rvci5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wcmVTeW50aGVzaXplKCk7XG4gICAgZm9yIChjb25zdCBidWlsZGVyIG9mIHRoaXMuYnVpbGRlclJlZ2lzdHJ5KSB7XG4gICAgICBidWlsZGVyLnByZVN5bnRoZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcHVibGljIHBvc3RTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHN1cGVyLnBvc3RTeW50aGVzaXplKCk7XG4gICAgZm9yIChjb25zdCBidWlsZGVyIG9mIHRoaXMuYnVpbGRlclJlZ2lzdHJ5KSB7XG4gICAgICBidWlsZGVyLnBvc3RTeW50aGVzaXplKCk7XG4gICAgfVxuICB9XG59XG4iXX0=