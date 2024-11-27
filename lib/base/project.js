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
            npmignoreEnabled: options.npmignoreEnabled ?? false,
            projenrcTs: options.projenrcTs ?? true,
            typescriptVersion: '~5.6.3',
            prettier: options.prettier ?? true,
            githubOptions: options.githubOptions ?? { mergify: false, pullRequestLint: false }, // mergify and workflow pull-request-lint.yml
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsc0RBQW9GO0FBS3BGOzs7R0FHRztBQUNILE1BQXNCLHFCQUFzQixTQUFRLDhCQUFpQjtJQUduRTs7O09BR0c7SUFDSCxZQUFZLE9BQXFDO1FBQy9DLEtBQUssQ0FBQztZQUNKLEdBQUcsT0FBTztZQUVWLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYyxJQUFJLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUMzRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLElBQUksS0FBSztZQUVuRCxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJO1lBQ3RDLGlCQUFpQixFQUFFLFFBQVE7WUFFM0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtZQUVsQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxFQUFFLDZDQUE2QztZQUNqSSxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUUscUJBQXFCO1lBQ3BFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBRSx1QkFBdUI7WUFDMUQsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLEtBQUssRUFBRSw0QkFBNEI7WUFDdkYsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSyxFQUFFLDRCQUE0QjtZQUV2RSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBRXZDLE9BQU8sRUFBRTtnQkFDUCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gscUdBQXFHO2FBQ3RHO1NBQ0YsQ0FBQyxDQUFDO1FBL0JFLG9CQUFlLEdBQWMsRUFBRSxDQUFDO0lBZ0N2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGVBQWUsQ0FBQyxPQUFnQjtRQUNyQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUFDLElBQVk7UUFDbkMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQWdCLEVBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRDs7O09BR0c7SUFDSSxhQUFhO1FBQ2xCLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSSxjQUFjO1FBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7O0FBekVILHNEQTBFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGphdmFzY3JpcHQgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3QsIFR5cGVTY3JpcHRQcm9qZWN0T3B0aW9ucyB9IGZyb20gJ3Byb2plbi9saWIvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zIGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3RPcHRpb25zIHt9XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbWFuYWdpbmcgcHJvamVjdCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgZXh0ZW5kcyBUeXBlU2NyaXB0UHJvamVjdCB7XG4gIHB1YmxpYyBidWlsZGVyUmVnaXN0cnk6IEJ1aWxkZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4ub3B0aW9ucyxcblxuICAgICAgcGFja2FnZU1hbmFnZXI6IG9wdGlvbnMucGFja2FnZU1hbmFnZXIgPz8gamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgbnBtaWdub3JlRW5hYmxlZDogb3B0aW9ucy5ucG1pZ25vcmVFbmFibGVkID8/IGZhbHNlLFxuXG4gICAgICBwcm9qZW5yY1RzOiBvcHRpb25zLnByb2plbnJjVHMgPz8gdHJ1ZSxcbiAgICAgIHR5cGVzY3JpcHRWZXJzaW9uOiAnfjUuNi4zJyxcblxuICAgICAgcHJldHRpZXI6IG9wdGlvbnMucHJldHRpZXIgPz8gdHJ1ZSxcblxuICAgICAgZ2l0aHViT3B0aW9uczogb3B0aW9ucy5naXRodWJPcHRpb25zID8/IHsgbWVyZ2lmeTogZmFsc2UsIHB1bGxSZXF1ZXN0TGludDogZmFsc2UgfSwgLy8gbWVyZ2lmeSBhbmQgd29ya2Zsb3cgcHVsbC1yZXF1ZXN0LWxpbnQueW1sXG4gICAgICBidWlsZFdvcmtmbG93OiBvcHRpb25zLmJ1aWxkV29ya2Zsb3cgPz8gZmFsc2UsIC8vIHdvcmtmbG93IGJ1aWxkLnltbFxuICAgICAgcmVsZWFzZTogb3B0aW9ucy5yZWxlYXNlID8/IGZhbHNlLCAvLyB3b3JrZmxvdyByZWxlYXNlLnltbFxuICAgICAgcHVsbFJlcXVlc3RUZW1wbGF0ZTogb3B0aW9ucy5wdWxsUmVxdWVzdFRlbXBsYXRlID8/IGZhbHNlLCAvLyBwdWxsX3JlcXVlc3RfdGVtcGxhdGUueW1sXG4gICAgICBkZXBzVXBncmFkZTogb3B0aW9ucy5kZXBzVXBncmFkZSA/PyBmYWxzZSwgLy8gd29ya2Zsb3cgdXBncmFkZS1tYWluLnltbFxuXG4gICAgICBzYW1wbGVDb2RlOiBvcHRpb25zLnNhbXBsZUNvZGUgPz8gZmFsc2UsXG5cbiAgICAgIGRldkRlcHM6IFtcbiAgICAgICAgJ3Byb2plbicsXG4gICAgICAgICdjb25zdHJ1Y3QnLFxuICAgICAgICAnQGR4ZnJvbnRpZXIvcHJvamVuLXRlbXBsYXRlLXByb2plY3RzQGdpdCtodHRwczovL2dpdGh1Yi5jb20vZHhmcm9udGllci9wcm9qZW4tdGVtcGxhdGUtcHJvamVjdHMuZ2l0JyxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBidWlsZGVyIHRvIGJlIG1hbmFnZWQgYnkgdGhpcyBwcm9qZWN0LlxuICAgKiBAcGFyYW0gYnVpbGRlciBUaGUgYnVpbGRlciB0byByZWdpc3RlciAobXVzdCBleHRlbmQgQmFzZUJ1aWxkZXIpLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJCdWlsZGVyKGJ1aWxkZXI6IEJ1aWxkZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkZXJSZWdpc3RyeT8ucHVzaChidWlsZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhIGJ1aWxkZXIgaW4gdGhlIHJlZ2lzdHJ5IGJ5IGl0cyBjb25zdHJ1Y3RvciBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYnVpbGRlciB0byBzZWFyY2ggZm9yLlxuICAgKiBAcmV0dXJucyBUaGUgYnVpbGRlciBpZiBmb3VuZCwgb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICovXG4gIHB1YmxpYyBmaW5kQnVpbGRlckJ5TmFtZShuYW1lOiBzdHJpbmcpOiBCdWlsZGVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyUmVnaXN0cnkuZmluZCgoYnVpbGRlcjogQnVpbGRlcik6IGJvb2xlYW4gPT4gYnVpbGRlci5jb25zdHJ1Y3Rvci5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHVibGljIHByZVN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucHJlU3ludGhlc2l6ZSgpO1xuICAgIGZvciAoY29uc3QgYnVpbGRlciBvZiB0aGlzLmJ1aWxkZXJSZWdpc3RyeSkge1xuICAgICAgYnVpbGRlci5wcmVTeW50aGVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgcG9zdFN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgc3VwZXIucG9zdFN5bnRoZXNpemUoKTtcbiAgICBmb3IgKGNvbnN0IGJ1aWxkZXIgb2YgdGhpcy5idWlsZGVyUmVnaXN0cnkpIHtcbiAgICAgIGJ1aWxkZXIucG9zdFN5bnRoZXNpemUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==