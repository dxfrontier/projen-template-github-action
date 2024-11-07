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
            commitGenerated: false,
            projenrcTs: true,
            pullRequestTemplate: false,
            prettier: true,
            githubOptions: {
                mergify: false,
                pullRequestLint: false, // workflow pull-request-lint.yml
            },
            buildWorkflow: false, // workflow build.yml
            release: false, // workflow release.yml
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
            new components_1.SampleComponent(this),
        ];
        components.forEach((component) => {
            component.setup();
        });
    }
}
exports.GitHubActionProject = GitHubActionProject;
_a = JSII_RTTI_SYMBOL_1;
GitHubActionProject[_a] = { fqn: "projen-template-github-action.GitHubActionProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0SHViQWN0aW9uUHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9HaXRIdWJBY3Rpb25Qcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW9DO0FBQ3BDLHNEQUFvRjtBQUNwRiw2Q0FTc0I7QUFRdEI7OztHQUdHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSw4QkFBaUI7SUFDeEQsWUFBWSxPQUFtQztRQUM3QyxLQUFLLENBQUM7WUFDSixHQUFHLE9BQU87WUFFVixjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1lBRWhCLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsUUFBUSxFQUFFLElBQUk7WUFDZCxhQUFhLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsZUFBZSxFQUFFLEtBQUssRUFBRSxpQ0FBaUM7YUFDMUQ7WUFDRCxhQUFhLEVBQUUsS0FBSyxFQUFFLHFCQUFxQjtZQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLHVCQUF1QjtZQUN2QyxXQUFXLEVBQUUsS0FBSyxFQUFFLDRCQUE0QjtZQUNoRCxVQUFVLEVBQUUsS0FBSztZQUVqQixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO1NBQ2pDLENBQUMsQ0FBQztRQUVILG1DQUFtQztRQUNuQyxNQUFNLFVBQVUsR0FBd0I7WUFDdEMsSUFBSSxnQ0FBbUIsQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxrQ0FBcUIsQ0FBQyxJQUFJLENBQUM7WUFDL0IsSUFBSSw0QkFBZSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLDRCQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksOEJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQUksMkJBQWMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxnQ0FBbUIsQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSw0QkFBZSxDQUFDLElBQUksQ0FBQztTQUMxQixDQUFDO1FBQ0YsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQTRCLEVBQVEsRUFBRTtZQUN4RCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQXRDSCxrREF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqYXZhc2NyaXB0IH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0LCBUeXBlU2NyaXB0UHJvamVjdE9wdGlvbnMgfSBmcm9tICdwcm9qZW4vbGliL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtcbiAgTnBtUGFja2FnZUNvbXBvbmVudCxcbiAgRGV2Q29udGFpbmVyQ29tcG9uZW50LFxuICBWc0NvZGVDb21wb25lbnQsXG4gIEdpdEh1YkNvbXBvbmVudCxcbiAgUHJldHRpZXJDb21wb25lbnQsXG4gIEh1c2t5Q29tcG9uZW50LFxuICBDb21taXRMaW50Q29tcG9uZW50LFxuICBTYW1wbGVDb21wb25lbnQsXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJUHJvamVjdENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBIYXZlIHRvIGRpc2FibGUgdGhlIHByZXR0aWVyIHJ1bGUgaGVyZSBmb3IgdGhlIHsgfVxuLy8gb3RoZXJ3aXNlIHdlIGhhdmUgYSBjb25mbGljdCBiZXR3ZWVuIHByZXR0aWVyIGFuZCBsaW50ZXIuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbmV4cG9ydCBpbnRlcmZhY2UgR2l0SHViQWN0aW9uUHJvamVjdE9wdGlvbnMgZXh0ZW5kcyBUeXBlU2NyaXB0UHJvamVjdE9wdGlvbnMgeyB9XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFByb2plbiBUeXBlU2NyaXB0IHByb2plY3QgY29uZmlndXJlZCBmb3IgR2l0SHViIEFjdGlvbnMsXG4gKiBwcm92aWRpbmcgdmFyaW91cyBwcm9qZWN0IHRlbXBsYXRlcyBhbmQgc2V0dGluZ3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBHaXRIdWJBY3Rpb25Qcm9qZWN0IGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBHaXRIdWJBY3Rpb25Qcm9qZWN0T3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLm9wdGlvbnMsXG5cbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBqYXZhc2NyaXB0Lk5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBtaW5Ob2RlVmVyc2lvbjogJzIwJyxcbiAgICAgIGNvbW1pdEdlbmVyYXRlZDogZmFsc2UsXG4gICAgICBwcm9qZW5yY1RzOiB0cnVlLFxuXG4gICAgICBwdWxsUmVxdWVzdFRlbXBsYXRlOiBmYWxzZSxcbiAgICAgIHByZXR0aWVyOiB0cnVlLFxuICAgICAgZ2l0aHViT3B0aW9uczoge1xuICAgICAgICBtZXJnaWZ5OiBmYWxzZSxcbiAgICAgICAgcHVsbFJlcXVlc3RMaW50OiBmYWxzZSwgLy8gd29ya2Zsb3cgcHVsbC1yZXF1ZXN0LWxpbnQueW1sXG4gICAgICB9LFxuICAgICAgYnVpbGRXb3JrZmxvdzogZmFsc2UsIC8vIHdvcmtmbG93IGJ1aWxkLnltbFxuICAgICAgcmVsZWFzZTogZmFsc2UsIC8vIHdvcmtmbG93IHJlbGVhc2UueW1sXG4gICAgICBkZXBzVXBncmFkZTogZmFsc2UsIC8vIHdvcmtmbG93IHVwZ3JhZGUtbWFpbi55bWxcbiAgICAgIHNhbXBsZUNvZGU6IGZhbHNlLFxuXG4gICAgICBkZXZEZXBzOiBbJ3Byb2plbicsICdjb25zdHJ1Y3QnXSxcbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxpemUgcHJvamVjdCBjb25maWd1cmF0aW9uXG4gICAgY29uc3QgY29tcG9uZW50czogSVByb2plY3RDb21wb25lbnRbXSA9IFtcbiAgICAgIG5ldyBOcG1QYWNrYWdlQ29tcG9uZW50KHRoaXMpLFxuICAgICAgbmV3IERldkNvbnRhaW5lckNvbXBvbmVudCh0aGlzKSxcbiAgICAgIG5ldyBWc0NvZGVDb21wb25lbnQodGhpcyksXG4gICAgICBuZXcgR2l0SHViQ29tcG9uZW50KHRoaXMpLFxuICAgICAgbmV3IFByZXR0aWVyQ29tcG9uZW50KHRoaXMpLFxuICAgICAgbmV3IEh1c2t5Q29tcG9uZW50KHRoaXMpLFxuICAgICAgbmV3IENvbW1pdExpbnRDb21wb25lbnQodGhpcyksXG4gICAgICBuZXcgU2FtcGxlQ29tcG9uZW50KHRoaXMpLFxuICAgIF07XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQ6IElQcm9qZWN0Q29tcG9uZW50KTogdm9pZCA9PiB7XG4gICAgICBjb21wb25lbnQuc2V0dXAoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19