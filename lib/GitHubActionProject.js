"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubActionProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const typescript_1 = require("projen/lib/typescript");
const components_1 = require("./components");
/**
 * Represents a Projen TypeScript project configured for GitHub Actions,
 * providing various project templates and settings.
 */
class GitHubActionProject extends typescript_1.TypeScriptProject {
    constructor(options) {
        super({
            ...options,
            packageManager: projen_1.javascript.NodePackageManager.NPM,
            minNodeVersion: '20',
            projenrcTs: true,
            prettier: true,
            githubOptions: {
                mergify: false,
                pullRequestLint: false, // workflow pull-request-lint.yml
            },
            buildWorkflow: false, // workflow build.yml
            release: false, // workflow release.yml
            pullRequestTemplate: false, // pull_request_template.yml
            depsUpgrade: false, // workflow upgrade-main.yml
            sampleCode: false,
            devDeps: ['projen', 'construct'],
        });
        // Initialize project configuration
        const components = [
            new components_1.NpmPackageComponent(this),
            new components_1.DevContainerComponent(this),
            new components_1.VsCodeComponent(this),
            new components_1.GitHubComponent(this),
            new components_1.PrettierComponent(this),
            new components_1.HuskyComponent(this),
            new components_1.CommitLintComponent(this),
            new components_1.SampleCodeComponent(this),
        ];
        components.forEach((component) => {
            component.setup();
        });
    }
}
exports.GitHubActionProject = GitHubActionProject;
_a = JSII_RTTI_SYMBOL_1;
GitHubActionProject[_a] = { fqn: "projen-template-github-action.GitHubActionProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0SHViQWN0aW9uUHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9HaXRIdWJBY3Rpb25Qcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW9DO0FBQ3BDLHNEQUFvRjtBQUNwRiw2Q0FTc0I7QUFRdEI7OztHQUdHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSw4QkFBaUI7SUFDeEQsWUFBWSxPQUFtQztRQUM3QyxLQUFLLENBQUM7WUFDSixHQUFHLE9BQU87WUFFVixjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFVBQVUsRUFBRSxJQUFJO1lBRWhCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLO2dCQUNkLGVBQWUsRUFBRSxLQUFLLEVBQUUsaUNBQWlDO2FBQzFEO1lBQ0QsYUFBYSxFQUFFLEtBQUssRUFBRSxxQkFBcUI7WUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSx1QkFBdUI7WUFDdkMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLDRCQUE0QjtZQUN4RCxXQUFXLEVBQUUsS0FBSyxFQUFFLDRCQUE0QjtZQUNoRCxVQUFVLEVBQUUsS0FBSztZQUVqQixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO1NBQ2pDLENBQUMsQ0FBQztRQUVILG1DQUFtQztRQUNuQyxNQUFNLFVBQVUsR0FBd0I7WUFDdEMsSUFBSSxnQ0FBbUIsQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxrQ0FBcUIsQ0FBQyxJQUFJLENBQUM7WUFDL0IsSUFBSSw0QkFBZSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLDRCQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksOEJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQUksMkJBQWMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxnQ0FBbUIsQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxnQ0FBbUIsQ0FBQyxJQUFJLENBQUM7U0FDOUIsQ0FBQztRQUNGLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUE0QixFQUFRLEVBQUU7WUFDeEQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFyQ0gsa0RBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgamF2YXNjcmlwdCB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdCwgVHlwZVNjcmlwdFByb2plY3RPcHRpb25zIH0gZnJvbSAncHJvamVuL2xpYi90eXBlc2NyaXB0JztcbmltcG9ydCB7XG4gIE5wbVBhY2thZ2VDb21wb25lbnQsXG4gIERldkNvbnRhaW5lckNvbXBvbmVudCxcbiAgVnNDb2RlQ29tcG9uZW50LFxuICBHaXRIdWJDb21wb25lbnQsXG4gIFByZXR0aWVyQ29tcG9uZW50LFxuICBIdXNreUNvbXBvbmVudCxcbiAgQ29tbWl0TGludENvbXBvbmVudCxcbiAgU2FtcGxlQ29kZUNvbXBvbmVudCxcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IElQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIEhhdmUgdG8gZGlzYWJsZSB0aGUgcHJldHRpZXIgcnVsZSBoZXJlIGZvciB0aGUgeyB9XG4vLyBvdGhlcndpc2Ugd2UgaGF2ZSBhIGNvbmZsaWN0IGJldHdlZW4gcHJldHRpZXIgYW5kIGxpbnRlci5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuZXhwb3J0IGludGVyZmFjZSBHaXRIdWJBY3Rpb25Qcm9qZWN0T3B0aW9ucyBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0T3B0aW9ucyB7IH1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgUHJvamVuIFR5cGVTY3JpcHQgcHJvamVjdCBjb25maWd1cmVkIGZvciBHaXRIdWIgQWN0aW9ucyxcbiAqIHByb3ZpZGluZyB2YXJpb3VzIHByb2plY3QgdGVtcGxhdGVzIGFuZCBzZXR0aW5ncy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdEh1YkFjdGlvblByb2plY3QgZXh0ZW5kcyBUeXBlU2NyaXB0UHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEdpdEh1YkFjdGlvblByb2plY3RPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4ub3B0aW9ucyxcblxuICAgICAgcGFja2FnZU1hbmFnZXI6IGphdmFzY3JpcHQuTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIG1pbk5vZGVWZXJzaW9uOiAnMjAnLFxuICAgICAgcHJvamVucmNUczogdHJ1ZSxcblxuICAgICAgcHJldHRpZXI6IHRydWUsXG4gICAgICBnaXRodWJPcHRpb25zOiB7XG4gICAgICAgIG1lcmdpZnk6IGZhbHNlLFxuICAgICAgICBwdWxsUmVxdWVzdExpbnQ6IGZhbHNlLCAvLyB3b3JrZmxvdyBwdWxsLXJlcXVlc3QtbGludC55bWxcbiAgICAgIH0sXG4gICAgICBidWlsZFdvcmtmbG93OiBmYWxzZSwgLy8gd29ya2Zsb3cgYnVpbGQueW1sXG4gICAgICByZWxlYXNlOiBmYWxzZSwgLy8gd29ya2Zsb3cgcmVsZWFzZS55bWxcbiAgICAgIHB1bGxSZXF1ZXN0VGVtcGxhdGU6IGZhbHNlLCAvLyBwdWxsX3JlcXVlc3RfdGVtcGxhdGUueW1sXG4gICAgICBkZXBzVXBncmFkZTogZmFsc2UsIC8vIHdvcmtmbG93IHVwZ3JhZGUtbWFpbi55bWxcbiAgICAgIHNhbXBsZUNvZGU6IGZhbHNlLFxuXG4gICAgICBkZXZEZXBzOiBbJ3Byb2plbicsICdjb25zdHJ1Y3QnXSxcbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxpemUgcHJvamVjdCBjb25maWd1cmF0aW9uXG4gICAgY29uc3QgY29tcG9uZW50czogSVByb2plY3RDb21wb25lbnRbXSA9IFtcbiAgICAgIG5ldyBOcG1QYWNrYWdlQ29tcG9uZW50KHRoaXMpLFxuICAgICAgbmV3IERldkNvbnRhaW5lckNvbXBvbmVudCh0aGlzKSxcbiAgICAgIG5ldyBWc0NvZGVDb21wb25lbnQodGhpcyksXG4gICAgICBuZXcgR2l0SHViQ29tcG9uZW50KHRoaXMpLFxuICAgICAgbmV3IFByZXR0aWVyQ29tcG9uZW50KHRoaXMpLFxuICAgICAgbmV3IEh1c2t5Q29tcG9uZW50KHRoaXMpLFxuICAgICAgbmV3IENvbW1pdExpbnRDb21wb25lbnQodGhpcyksXG4gICAgICBuZXcgU2FtcGxlQ29kZUNvbXBvbmVudCh0aGlzKSxcbiAgICBdO1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50OiBJUHJvamVjdENvbXBvbmVudCk6IHZvaWQgPT4ge1xuICAgICAgY29tcG9uZW50LnNldHVwKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==