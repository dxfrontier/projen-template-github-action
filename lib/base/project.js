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
            projenrcTs: options.projenrcTs ?? true,
            npmignoreEnabled: options.npmignoreEnabled ?? false,
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
                '@dxfrontier/projen-template-projects@git+https://github.com/dxfrontier/projen-template-projects.git',
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
TypeScriptProjectBase[_a] = { fqn: "@dxfrontier/projen-template-projects.TypeScriptProjectBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsc0RBQW9GO0FBUXBGOzs7R0FHRztBQUNILE1BQXNCLHFCQUFzQixTQUFRLDhCQUFpQjtJQUduRTs7O09BR0c7SUFDSCxZQUFZLE9BQXFDO1FBQy9DLEtBQUssQ0FBQztZQUNKLEdBQUcsT0FBTztZQUVWLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYyxJQUFJLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUMzRSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJO1lBRXRDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLO1lBQ25ELFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDbEMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUk7Z0JBQ3RDLE9BQU8sRUFBRSxLQUFLO2dCQUNkLGVBQWUsRUFBRSxLQUFLLEVBQUUsaUNBQWlDO2FBQzFEO1lBQ0QsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksS0FBSyxFQUFFLHFCQUFxQjtZQUNwRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUUsdUJBQXVCO1lBQzFELG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxLQUFLLEVBQUUsNEJBQTRCO1lBQ3ZGLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLEtBQUssRUFBRSw0QkFBNEI7WUFDdkUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUksS0FBSztZQUV2QyxPQUFPLEVBQUU7Z0JBQ1AsUUFBUTtnQkFDUixXQUFXO2dCQUNYLHFHQUFxRzthQUN0RztTQUNGLENBQUMsQ0FBQztRQTlCRSxvQkFBZSxHQUFjLEVBQUUsQ0FBQztJQStCdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxlQUFlLENBQUMsT0FBZ0I7UUFDckMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxJQUFZO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFnQixFQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFhO1FBQ2xCLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWM7UUFDbkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQzs7QUF0RUgsc0RBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgamF2YXNjcmlwdCB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdCwgVHlwZVNjcmlwdFByb2plY3RPcHRpb25zIH0gZnJvbSAncHJvamVuL2xpYi90eXBlc2NyaXB0JztcbmltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuXG4vLyBIYXZlIHRvIGRpc2FibGUgdGhlIHByZXR0aWVyIHJ1bGUgaGVyZSBmb3IgdGhlIHsgfVxuLy8gb3RoZXJ3aXNlIHdlIGhhdmUgYSBjb25mbGljdCBiZXR3ZWVuIHByZXR0aWVyIGFuZCBsaW50ZXIuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbmV4cG9ydCBpbnRlcmZhY2UgVHlwZVNjcmlwdFByb2plY3RCYXNlT3B0aW9ucyBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0T3B0aW9ucyB7fVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIHByb2plY3QgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZVNjcmlwdFByb2plY3RCYXNlIGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3Qge1xuICBwdWJsaWMgYnVpbGRlclJlZ2lzdHJ5OiBCdWlsZGVyW10gPSBbXTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogVHlwZVNjcmlwdFByb2plY3RCYXNlT3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLm9wdGlvbnMsXG5cbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBvcHRpb25zLnBhY2thZ2VNYW5hZ2VyID8/IGphdmFzY3JpcHQuTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIHByb2plbnJjVHM6IG9wdGlvbnMucHJvamVucmNUcyA/PyB0cnVlLFxuXG4gICAgICBucG1pZ25vcmVFbmFibGVkOiBvcHRpb25zLm5wbWlnbm9yZUVuYWJsZWQgPz8gZmFsc2UsXG4gICAgICBwcmV0dGllcjogb3B0aW9ucy5wcmV0dGllciA/PyB0cnVlLFxuICAgICAgZ2l0aHViT3B0aW9uczogb3B0aW9ucy5naXRodWJPcHRpb25zID8/IHtcbiAgICAgICAgbWVyZ2lmeTogZmFsc2UsXG4gICAgICAgIHB1bGxSZXF1ZXN0TGludDogZmFsc2UsIC8vIHdvcmtmbG93IHB1bGwtcmVxdWVzdC1saW50LnltbFxuICAgICAgfSxcbiAgICAgIGJ1aWxkV29ya2Zsb3c6IG9wdGlvbnMuYnVpbGRXb3JrZmxvdyA/PyBmYWxzZSwgLy8gd29ya2Zsb3cgYnVpbGQueW1sXG4gICAgICByZWxlYXNlOiBvcHRpb25zLnJlbGVhc2UgPz8gZmFsc2UsIC8vIHdvcmtmbG93IHJlbGVhc2UueW1sXG4gICAgICBwdWxsUmVxdWVzdFRlbXBsYXRlOiBvcHRpb25zLnB1bGxSZXF1ZXN0VGVtcGxhdGUgPz8gZmFsc2UsIC8vIHB1bGxfcmVxdWVzdF90ZW1wbGF0ZS55bWxcbiAgICAgIGRlcHNVcGdyYWRlOiBvcHRpb25zLmRlcHNVcGdyYWRlID8/IGZhbHNlLCAvLyB3b3JrZmxvdyB1cGdyYWRlLW1haW4ueW1sXG4gICAgICBzYW1wbGVDb2RlOiBvcHRpb25zLnNhbXBsZUNvZGUgPz8gZmFsc2UsXG5cbiAgICAgIGRldkRlcHM6IFtcbiAgICAgICAgJ3Byb2plbicsXG4gICAgICAgICdjb25zdHJ1Y3QnLFxuICAgICAgICAnQGR4ZnJvbnRpZXIvcHJvamVuLXRlbXBsYXRlLXByb2plY3RzQGdpdCtodHRwczovL2dpdGh1Yi5jb20vZHhmcm9udGllci9wcm9qZW4tdGVtcGxhdGUtcHJvamVjdHMuZ2l0JyxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBidWlsZGVyIHRvIGJlIG1hbmFnZWQgYnkgdGhpcyBwcm9qZWN0LlxuICAgKiBAcGFyYW0gYnVpbGRlciBUaGUgYnVpbGRlciB0byByZWdpc3RlciAobXVzdCBleHRlbmQgQmFzZUJ1aWxkZXIpLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJCdWlsZGVyKGJ1aWxkZXI6IEJ1aWxkZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkZXJSZWdpc3RyeT8ucHVzaChidWlsZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhIGJ1aWxkZXIgaW4gdGhlIHJlZ2lzdHJ5IGJ5IGl0cyBjb25zdHJ1Y3RvciBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYnVpbGRlciB0byBzZWFyY2ggZm9yLlxuICAgKiBAcmV0dXJucyBUaGUgYnVpbGRlciBpZiBmb3VuZCwgb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICovXG4gIHB1YmxpYyBmaW5kQnVpbGRlckJ5TmFtZShuYW1lOiBzdHJpbmcpOiBCdWlsZGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyUmVnaXN0cnkuZmluZCgoYnVpbGRlcjogQnVpbGRlcik6IGJvb2xlYW4gPT4gYnVpbGRlci5jb25zdHJ1Y3Rvci5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wcmVTeW50aGVzaXplKCk7XG4gICAgZm9yIChjb25zdCBidWlsZGVyIG9mIHRoaXMuYnVpbGRlclJlZ2lzdHJ5KSB7XG4gICAgICBidWlsZGVyLnByZVN5bnRoZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcHVibGljIHBvc3RTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHN1cGVyLnBvc3RTeW50aGVzaXplKCk7XG4gICAgZm9yIChjb25zdCBidWlsZGVyIG9mIHRoaXMuYnVpbGRlclJlZ2lzdHJ5KSB7XG4gICAgICBidWlsZGVyLnBvc3RTeW50aGVzaXplKCk7XG4gICAgfVxuICB9XG59XG4iXX0=