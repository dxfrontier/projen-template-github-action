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
            licensed: options.licensed ?? false,
            packageManager: options.packageManager ?? projen_1.javascript.NodePackageManager.NPM,
            npmignoreEnabled: options.npmignoreEnabled ?? false,
            projenrcTs: options.projenrcTs ?? true,
            typescriptVersion: options.typescriptVersion ?? '^5.7.2',
            // disableTsconfigDev: options.disableTsconfigDev ?? true,
            prettier: options.prettier ?? false,
            eslint: options.eslint ?? false,
            defaultReleaseBranch: options.defaultReleaseBranch ?? 'dev',
            githubOptions: options.githubOptions ?? { mergify: false, pullRequestLint: false }, // mergify and workflow pull-request-lint.yml
            buildWorkflow: options.buildWorkflow ?? false, // workflow build.yml
            release: options.release ?? false, // workflow release.yml
            pullRequestTemplate: options.pullRequestTemplate ?? false, // pull_request_template.yml
            depsUpgrade: options.depsUpgrade ?? false, // workflow upgrade-main.yml
            sampleCode: options.sampleCode ?? false,
            devDeps: options.devDeps ?? [
                '@types/node@^22.10.2',
                'ts-node@^10.9.2', // !!! move in typescript builder
                // 'projen',
                // 'construct',
                // '@dxfrontier/projen-template-projects@git+https://github.com/dxfrontier/projen-template-projects.git',
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
     * @override
     */
    preSynthesize() {
        super.preSynthesize();
        for (const builder of this.builderRegistry) {
            builder.preSynthesize();
        }
    }
    /**
     * @public
     * @override
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsc0RBQW9GO0FBT3BGOzs7R0FHRztBQUNILE1BQXNCLHFCQUFzQixTQUFRLDhCQUFpQjtJQUduRTs7O09BR0c7SUFDSCxZQUFZLE9BQXFDO1FBQy9DLEtBQUssQ0FBQztZQUNKLEdBQUcsT0FBTztZQUNWLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLEtBQUs7WUFFbkMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjLElBQUksbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQzNFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLO1lBRW5ELFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLElBQUk7WUFDdEMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixJQUFJLFFBQVE7WUFDeEQsMERBQTBEO1lBRTFELFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLEtBQUs7WUFDbkMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSztZQUUvQixvQkFBb0IsRUFBRSxPQUFPLENBQUMsb0JBQW9CLElBQUksS0FBSztZQUMzRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxFQUFFLDZDQUE2QztZQUNqSSxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUUscUJBQXFCO1lBQ3BFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBRSx1QkFBdUI7WUFDMUQsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLEtBQUssRUFBRSw0QkFBNEI7WUFDdkYsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSyxFQUFFLDRCQUE0QjtZQUV2RSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBRXZDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxJQUFJO2dCQUMxQixzQkFBc0I7Z0JBQ3RCLGlCQUFpQixFQUFFLGlDQUFpQztnQkFDcEQsWUFBWTtnQkFDWixlQUFlO2dCQUNmLHlHQUF5RzthQUMxRztTQUNGLENBQUMsQ0FBQztRQXJDRSxvQkFBZSxHQUFjLEVBQUUsQ0FBQztJQXNDdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxlQUFlLENBQUMsT0FBZ0I7UUFDckMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxJQUFZO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFnQixFQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksYUFBYTtRQUNsQixLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEIsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0MsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksY0FBYztRQUNuQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0MsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDOztBQS9FSCxzREFnRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqYXZhc2NyaXB0IH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0LCBUeXBlU2NyaXB0UHJvamVjdE9wdGlvbnMgfSBmcm9tICdwcm9qZW4vbGliL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5cbi8vIEhhdmUgdG8gZGlzYWJsZSB0aGUgcHJldHRpZXIgcnVsZSBoZXJlIGZvciB0aGUgeyB9XG4vLyBvdGhlcndpc2Ugd2UgaGF2ZSBhIGNvbmZsaWN0IGJldHdlZW4gcHJldHRpZXIgYW5kIGxpbnRlci5cbmV4cG9ydCBpbnRlcmZhY2UgVHlwZVNjcmlwdFByb2plY3RCYXNlT3B0aW9ucyBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0T3B0aW9ucyB7fVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIHByb2plY3QgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZVNjcmlwdFByb2plY3RCYXNlIGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3Qge1xuICBwdWJsaWMgYnVpbGRlclJlZ2lzdHJ5OiBCdWlsZGVyW10gPSBbXTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogVHlwZVNjcmlwdFByb2plY3RCYXNlT3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBsaWNlbnNlZDogb3B0aW9ucy5saWNlbnNlZCA/PyBmYWxzZSxcblxuICAgICAgcGFja2FnZU1hbmFnZXI6IG9wdGlvbnMucGFja2FnZU1hbmFnZXIgPz8gamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgbnBtaWdub3JlRW5hYmxlZDogb3B0aW9ucy5ucG1pZ25vcmVFbmFibGVkID8/IGZhbHNlLFxuXG4gICAgICBwcm9qZW5yY1RzOiBvcHRpb25zLnByb2plbnJjVHMgPz8gdHJ1ZSxcbiAgICAgIHR5cGVzY3JpcHRWZXJzaW9uOiBvcHRpb25zLnR5cGVzY3JpcHRWZXJzaW9uID8/ICdeNS43LjInLFxuICAgICAgLy8gZGlzYWJsZVRzY29uZmlnRGV2OiBvcHRpb25zLmRpc2FibGVUc2NvbmZpZ0RldiA/PyB0cnVlLFxuXG4gICAgICBwcmV0dGllcjogb3B0aW9ucy5wcmV0dGllciA/PyBmYWxzZSxcbiAgICAgIGVzbGludDogb3B0aW9ucy5lc2xpbnQgPz8gZmFsc2UsXG5cbiAgICAgIGRlZmF1bHRSZWxlYXNlQnJhbmNoOiBvcHRpb25zLmRlZmF1bHRSZWxlYXNlQnJhbmNoID8/ICdkZXYnLFxuICAgICAgZ2l0aHViT3B0aW9uczogb3B0aW9ucy5naXRodWJPcHRpb25zID8/IHsgbWVyZ2lmeTogZmFsc2UsIHB1bGxSZXF1ZXN0TGludDogZmFsc2UgfSwgLy8gbWVyZ2lmeSBhbmQgd29ya2Zsb3cgcHVsbC1yZXF1ZXN0LWxpbnQueW1sXG4gICAgICBidWlsZFdvcmtmbG93OiBvcHRpb25zLmJ1aWxkV29ya2Zsb3cgPz8gZmFsc2UsIC8vIHdvcmtmbG93IGJ1aWxkLnltbFxuICAgICAgcmVsZWFzZTogb3B0aW9ucy5yZWxlYXNlID8/IGZhbHNlLCAvLyB3b3JrZmxvdyByZWxlYXNlLnltbFxuICAgICAgcHVsbFJlcXVlc3RUZW1wbGF0ZTogb3B0aW9ucy5wdWxsUmVxdWVzdFRlbXBsYXRlID8/IGZhbHNlLCAvLyBwdWxsX3JlcXVlc3RfdGVtcGxhdGUueW1sXG4gICAgICBkZXBzVXBncmFkZTogb3B0aW9ucy5kZXBzVXBncmFkZSA/PyBmYWxzZSwgLy8gd29ya2Zsb3cgdXBncmFkZS1tYWluLnltbFxuXG4gICAgICBzYW1wbGVDb2RlOiBvcHRpb25zLnNhbXBsZUNvZGUgPz8gZmFsc2UsXG5cbiAgICAgIGRldkRlcHM6IG9wdGlvbnMuZGV2RGVwcyA/PyBbXG4gICAgICAgICdAdHlwZXMvbm9kZUBeMjIuMTAuMicsXG4gICAgICAgICd0cy1ub2RlQF4xMC45LjInLCAvLyAhISEgbW92ZSBpbiB0eXBlc2NyaXB0IGJ1aWxkZXJcbiAgICAgICAgLy8gJ3Byb2plbicsXG4gICAgICAgIC8vICdjb25zdHJ1Y3QnLFxuICAgICAgICAvLyAnQGR4ZnJvbnRpZXIvcHJvamVuLXRlbXBsYXRlLXByb2plY3RzQGdpdCtodHRwczovL2dpdGh1Yi5jb20vZHhmcm9udGllci9wcm9qZW4tdGVtcGxhdGUtcHJvamVjdHMuZ2l0JyxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBidWlsZGVyIHRvIGJlIG1hbmFnZWQgYnkgdGhpcyBwcm9qZWN0LlxuICAgKiBAcGFyYW0gYnVpbGRlciBUaGUgYnVpbGRlciB0byByZWdpc3RlciAobXVzdCBleHRlbmQgQmFzZUJ1aWxkZXIpLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJCdWlsZGVyKGJ1aWxkZXI6IEJ1aWxkZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkZXJSZWdpc3RyeT8ucHVzaChidWlsZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhIGJ1aWxkZXIgaW4gdGhlIHJlZ2lzdHJ5IGJ5IGl0cyBjb25zdHJ1Y3RvciBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYnVpbGRlciB0byBzZWFyY2ggZm9yLlxuICAgKiBAcmV0dXJucyBUaGUgYnVpbGRlciBpZiBmb3VuZCwgb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICovXG4gIHB1YmxpYyBmaW5kQnVpbGRlckJ5TmFtZShuYW1lOiBzdHJpbmcpOiBCdWlsZGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyUmVnaXN0cnkuZmluZCgoYnVpbGRlcjogQnVpbGRlcik6IGJvb2xlYW4gPT4gYnVpbGRlci5jb25zdHJ1Y3Rvci5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIHByZVN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucHJlU3ludGhlc2l6ZSgpO1xuICAgIGZvciAoY29uc3QgYnVpbGRlciBvZiB0aGlzLmJ1aWxkZXJSZWdpc3RyeSkge1xuICAgICAgYnVpbGRlci5wcmVTeW50aGVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgcG9zdFN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucG9zdFN5bnRoZXNpemUoKTtcbiAgICBmb3IgKGNvbnN0IGJ1aWxkZXIgb2YgdGhpcy5idWlsZGVyUmVnaXN0cnkpIHtcbiAgICAgIGJ1aWxkZXIucG9zdFN5bnRoZXNpemUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==