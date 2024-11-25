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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsc0RBQW9GO0FBUXBGOzs7R0FHRztBQUNILE1BQXNCLHFCQUFzQixTQUFRLDhCQUFpQjtJQUduRTs7O09BR0c7SUFDSCxZQUFZLE9BQXFDO1FBQy9DLEtBQUssQ0FBQztZQUNKLEdBQUcsT0FBTztZQUVWLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYyxJQUFJLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUMzRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLElBQUksS0FBSztZQUVuRCxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJO1lBQ3RDLGlCQUFpQixFQUFFLFFBQVE7WUFFM0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtZQUVsQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxFQUFFLDZDQUE2QztZQUNqSSxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUUscUJBQXFCO1lBQ3BFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBRSx1QkFBdUI7WUFDMUQsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixJQUFJLEtBQUssRUFBRSw0QkFBNEI7WUFDdkYsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSyxFQUFFLDRCQUE0QjtZQUV2RSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBRXZDLE9BQU8sRUFBRTtnQkFDUCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gscUdBQXFHO2FBQ3RHO1NBQ0YsQ0FBQyxDQUFDO1FBL0JFLG9CQUFlLEdBQWMsRUFBRSxDQUFDO0lBZ0N2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGVBQWUsQ0FBQyxPQUFnQjtRQUNyQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUFDLElBQVk7UUFDbkMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQWdCLEVBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRDs7O09BR0c7SUFDSSxhQUFhO1FBQ2xCLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSSxjQUFjO1FBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7O0FBekVILHNEQTBFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGphdmFzY3JpcHQgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3QsIFR5cGVTY3JpcHRQcm9qZWN0T3B0aW9ucyB9IGZyb20gJ3Byb2plbi9saWIvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcblxuLy8gSGF2ZSB0byBkaXNhYmxlIHRoZSBwcmV0dGllciBydWxlIGhlcmUgZm9yIHRoZSB7IH1cbi8vIG90aGVyd2lzZSB3ZSBoYXZlIGEgY29uZmxpY3QgYmV0d2VlbiBwcmV0dGllciBhbmQgbGludGVyLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG5leHBvcnQgaW50ZXJmYWNlIFR5cGVTY3JpcHRQcm9qZWN0QmFzZU9wdGlvbnMgZXh0ZW5kcyBUeXBlU2NyaXB0UHJvamVjdE9wdGlvbnMge31cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0IHtcbiAgcHVibGljIGJ1aWxkZXJSZWdpc3RyeTogQnVpbGRlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZU9wdGlvbnMpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi5vcHRpb25zLFxuXG4gICAgICBwYWNrYWdlTWFuYWdlcjogb3B0aW9ucy5wYWNrYWdlTWFuYWdlciA/PyBqYXZhc2NyaXB0Lk5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBucG1pZ25vcmVFbmFibGVkOiBvcHRpb25zLm5wbWlnbm9yZUVuYWJsZWQgPz8gZmFsc2UsXG5cbiAgICAgIHByb2plbnJjVHM6IG9wdGlvbnMucHJvamVucmNUcyA/PyB0cnVlLFxuICAgICAgdHlwZXNjcmlwdFZlcnNpb246ICd+NS42LjMnLFxuXG4gICAgICBwcmV0dGllcjogb3B0aW9ucy5wcmV0dGllciA/PyB0cnVlLFxuXG4gICAgICBnaXRodWJPcHRpb25zOiBvcHRpb25zLmdpdGh1Yk9wdGlvbnMgPz8geyBtZXJnaWZ5OiBmYWxzZSwgcHVsbFJlcXVlc3RMaW50OiBmYWxzZSB9LCAvLyBtZXJnaWZ5IGFuZCB3b3JrZmxvdyBwdWxsLXJlcXVlc3QtbGludC55bWxcbiAgICAgIGJ1aWxkV29ya2Zsb3c6IG9wdGlvbnMuYnVpbGRXb3JrZmxvdyA/PyBmYWxzZSwgLy8gd29ya2Zsb3cgYnVpbGQueW1sXG4gICAgICByZWxlYXNlOiBvcHRpb25zLnJlbGVhc2UgPz8gZmFsc2UsIC8vIHdvcmtmbG93IHJlbGVhc2UueW1sXG4gICAgICBwdWxsUmVxdWVzdFRlbXBsYXRlOiBvcHRpb25zLnB1bGxSZXF1ZXN0VGVtcGxhdGUgPz8gZmFsc2UsIC8vIHB1bGxfcmVxdWVzdF90ZW1wbGF0ZS55bWxcbiAgICAgIGRlcHNVcGdyYWRlOiBvcHRpb25zLmRlcHNVcGdyYWRlID8/IGZhbHNlLCAvLyB3b3JrZmxvdyB1cGdyYWRlLW1haW4ueW1sXG5cbiAgICAgIHNhbXBsZUNvZGU6IG9wdGlvbnMuc2FtcGxlQ29kZSA/PyBmYWxzZSxcblxuICAgICAgZGV2RGVwczogW1xuICAgICAgICAncHJvamVuJyxcbiAgICAgICAgJ2NvbnN0cnVjdCcsXG4gICAgICAgICdAZHhmcm9udGllci9wcm9qZW4tdGVtcGxhdGUtcHJvamVjdHNAZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9keGZyb250aWVyL3Byb2plbi10ZW1wbGF0ZS1wcm9qZWN0cy5naXQnLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGJ1aWxkZXIgdG8gYmUgbWFuYWdlZCBieSB0aGlzIHByb2plY3QuXG4gICAqIEBwYXJhbSBidWlsZGVyIFRoZSBidWlsZGVyIHRvIHJlZ2lzdGVyIChtdXN0IGV4dGVuZCBCYXNlQnVpbGRlcikuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogQnVpbGRlcik6IHZvaWQge1xuICAgIHRoaXMuYnVpbGRlclJlZ2lzdHJ5Py5wdXNoKGJ1aWxkZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGEgYnVpbGRlciBpbiB0aGUgcmVnaXN0cnkgYnkgaXRzIGNvbnN0cnVjdG9yIG5hbWUuXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBidWlsZGVyIHRvIHNlYXJjaCBmb3IuXG4gICAqIEByZXR1cm5zIFRoZSBidWlsZGVyIGlmIGZvdW5kLCBvdGhlcndpc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgcHVibGljIGZpbmRCdWlsZGVyQnlOYW1lKG5hbWU6IHN0cmluZyk6IEJ1aWxkZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXJSZWdpc3RyeS5maW5kKChidWlsZGVyOiBCdWlsZGVyKTogYm9vbGVhbiA9PiBidWlsZGVyLmNvbnN0cnVjdG9yLm5hbWUgPT09IG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wcmVTeW50aGVzaXplKCk7XG4gICAgZm9yIChjb25zdCBidWlsZGVyIG9mIHRoaXMuYnVpbGRlclJlZ2lzdHJ5KSB7XG4gICAgICBidWlsZGVyLnByZVN5bnRoZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHB1YmxpYyBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuICAgIGZvciAoY29uc3QgYnVpbGRlciBvZiB0aGlzLmJ1aWxkZXJSZWdpc3RyeSkge1xuICAgICAgYnVpbGRlci5wb3N0U3ludGhlc2l6ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19