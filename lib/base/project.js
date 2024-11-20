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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsc0RBQW9GO0FBUXBGOzs7R0FHRztBQUNILE1BQXNCLHFCQUFzQixTQUFRLDhCQUFpQjtJQUduRTs7O09BR0c7SUFDSCxZQUFZLE9BQXFDO1FBQy9DLEtBQUssQ0FBQztZQUNKLEdBQUcsT0FBTztZQUVWLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYyxJQUFJLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUMzRSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJO1lBRXRDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLO1lBQ25ELFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDbEMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUk7Z0JBQ3RDLE9BQU8sRUFBRSxLQUFLO2dCQUNkLGVBQWUsRUFBRSxLQUFLLEVBQUUsaUNBQWlDO2FBQzFEO1lBQ0QsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksS0FBSyxFQUFFLHFCQUFxQjtZQUNwRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUUsdUJBQXVCO1lBQzFELG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxLQUFLLEVBQUUsNEJBQTRCO1lBQ3ZGLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLEtBQUssRUFBRSw0QkFBNEI7WUFDdkUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUksS0FBSztZQUV2QyxPQUFPLEVBQUU7Z0JBQ1AsUUFBUTtnQkFDUixXQUFXO2dCQUNYLHFHQUFxRzthQUN0RztTQUNGLENBQUMsQ0FBQztRQTlCRSxvQkFBZSxHQUFjLEVBQUUsQ0FBQztJQStCdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxlQUFlLENBQUMsT0FBZ0I7UUFDckMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxJQUFZO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFnQixFQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksYUFBYTtRQUNsQixLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEIsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0MsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksY0FBYztRQUNuQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0MsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDOztBQXhFSCxzREF5RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqYXZhc2NyaXB0IH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0LCBUeXBlU2NyaXB0UHJvamVjdE9wdGlvbnMgfSBmcm9tICdwcm9qZW4vbGliL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5cbi8vIEhhdmUgdG8gZGlzYWJsZSB0aGUgcHJldHRpZXIgcnVsZSBoZXJlIGZvciB0aGUgeyB9XG4vLyBvdGhlcndpc2Ugd2UgaGF2ZSBhIGNvbmZsaWN0IGJldHdlZW4gcHJldHRpZXIgYW5kIGxpbnRlci5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuZXhwb3J0IGludGVyZmFjZSBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zIGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3RPcHRpb25zIHt9XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbWFuYWdpbmcgcHJvamVjdCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgZXh0ZW5kcyBUeXBlU2NyaXB0UHJvamVjdCB7XG4gIHB1YmxpYyBidWlsZGVyUmVnaXN0cnk6IEJ1aWxkZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4ub3B0aW9ucyxcblxuICAgICAgcGFja2FnZU1hbmFnZXI6IG9wdGlvbnMucGFja2FnZU1hbmFnZXIgPz8gamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgcHJvamVucmNUczogb3B0aW9ucy5wcm9qZW5yY1RzID8/IHRydWUsXG5cbiAgICAgIG5wbWlnbm9yZUVuYWJsZWQ6IG9wdGlvbnMubnBtaWdub3JlRW5hYmxlZCA/PyBmYWxzZSxcbiAgICAgIHByZXR0aWVyOiBvcHRpb25zLnByZXR0aWVyID8/IHRydWUsXG4gICAgICBnaXRodWJPcHRpb25zOiBvcHRpb25zLmdpdGh1Yk9wdGlvbnMgPz8ge1xuICAgICAgICBtZXJnaWZ5OiBmYWxzZSxcbiAgICAgICAgcHVsbFJlcXVlc3RMaW50OiBmYWxzZSwgLy8gd29ya2Zsb3cgcHVsbC1yZXF1ZXN0LWxpbnQueW1sXG4gICAgICB9LFxuICAgICAgYnVpbGRXb3JrZmxvdzogb3B0aW9ucy5idWlsZFdvcmtmbG93ID8/IGZhbHNlLCAvLyB3b3JrZmxvdyBidWlsZC55bWxcbiAgICAgIHJlbGVhc2U6IG9wdGlvbnMucmVsZWFzZSA/PyBmYWxzZSwgLy8gd29ya2Zsb3cgcmVsZWFzZS55bWxcbiAgICAgIHB1bGxSZXF1ZXN0VGVtcGxhdGU6IG9wdGlvbnMucHVsbFJlcXVlc3RUZW1wbGF0ZSA/PyBmYWxzZSwgLy8gcHVsbF9yZXF1ZXN0X3RlbXBsYXRlLnltbFxuICAgICAgZGVwc1VwZ3JhZGU6IG9wdGlvbnMuZGVwc1VwZ3JhZGUgPz8gZmFsc2UsIC8vIHdvcmtmbG93IHVwZ3JhZGUtbWFpbi55bWxcbiAgICAgIHNhbXBsZUNvZGU6IG9wdGlvbnMuc2FtcGxlQ29kZSA/PyBmYWxzZSxcblxuICAgICAgZGV2RGVwczogW1xuICAgICAgICAncHJvamVuJyxcbiAgICAgICAgJ2NvbnN0cnVjdCcsXG4gICAgICAgICdAZHhmcm9udGllci9wcm9qZW4tdGVtcGxhdGUtcHJvamVjdHNAZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9keGZyb250aWVyL3Byb2plbi10ZW1wbGF0ZS1wcm9qZWN0cy5naXQnLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGJ1aWxkZXIgdG8gYmUgbWFuYWdlZCBieSB0aGlzIHByb2plY3QuXG4gICAqIEBwYXJhbSBidWlsZGVyIFRoZSBidWlsZGVyIHRvIHJlZ2lzdGVyIChtdXN0IGV4dGVuZCBCYXNlQnVpbGRlcikuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckJ1aWxkZXIoYnVpbGRlcjogQnVpbGRlcik6IHZvaWQge1xuICAgIHRoaXMuYnVpbGRlclJlZ2lzdHJ5Py5wdXNoKGJ1aWxkZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGEgYnVpbGRlciBpbiB0aGUgcmVnaXN0cnkgYnkgaXRzIGNvbnN0cnVjdG9yIG5hbWUuXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBidWlsZGVyIHRvIHNlYXJjaCBmb3IuXG4gICAqIEByZXR1cm5zIFRoZSBidWlsZGVyIGlmIGZvdW5kLCBvdGhlcndpc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgcHVibGljIGZpbmRCdWlsZGVyQnlOYW1lKG5hbWU6IHN0cmluZyk6IEJ1aWxkZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkZXJSZWdpc3RyeS5maW5kKChidWlsZGVyOiBCdWlsZGVyKTogYm9vbGVhbiA9PiBidWlsZGVyLmNvbnN0cnVjdG9yLm5hbWUgPT09IG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwdWJsaWMgcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wcmVTeW50aGVzaXplKCk7XG4gICAgZm9yIChjb25zdCBidWlsZGVyIG9mIHRoaXMuYnVpbGRlclJlZ2lzdHJ5KSB7XG4gICAgICBidWlsZGVyLnByZVN5bnRoZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHB1YmxpYyBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuICAgIGZvciAoY29uc3QgYnVpbGRlciBvZiB0aGlzLmJ1aWxkZXJSZWdpc3RyeSkge1xuICAgICAgYnVpbGRlci5wb3N0U3ludGhlc2l6ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19