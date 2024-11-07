"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubActionProject = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0SHViQWN0aW9uUHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9HaXRIdWJBY3Rpb25Qcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFvQztBQUNwQyxzREFBb0Y7QUFDcEYsNkNBU3NCO0FBUXRCOzs7R0FHRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsOEJBQWlCO0lBQ3hELFlBQVksT0FBbUM7UUFDN0MsS0FBSyxDQUFDO1lBQ0osR0FBRyxPQUFPO1lBRVYsY0FBYyxFQUFFLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUNqRCxjQUFjLEVBQUUsSUFBSTtZQUNwQixlQUFlLEVBQUUsS0FBSztZQUN0QixVQUFVLEVBQUUsSUFBSTtZQUVoQixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLO2dCQUNkLGVBQWUsRUFBRSxLQUFLLEVBQUUsaUNBQWlDO2FBQzFEO1lBQ0QsYUFBYSxFQUFFLEtBQUssRUFBRSxxQkFBcUI7WUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSx1QkFBdUI7WUFDdkMsV0FBVyxFQUFFLEtBQUssRUFBRSw0QkFBNEI7WUFDaEQsVUFBVSxFQUFFLEtBQUs7WUFFakIsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztTQUNqQyxDQUFDLENBQUM7UUFFSCxtQ0FBbUM7UUFDbkMsTUFBTSxVQUFVLEdBQXdCO1lBQ3RDLElBQUksZ0NBQW1CLENBQUMsSUFBSSxDQUFDO1lBQzdCLElBQUksa0NBQXFCLENBQUMsSUFBSSxDQUFDO1lBQy9CLElBQUksNEJBQWUsQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSw0QkFBZSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLDhCQUFpQixDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLDJCQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksZ0NBQW1CLENBQUMsSUFBSSxDQUFDO1lBQzdCLElBQUksNEJBQWUsQ0FBQyxJQUFJLENBQUM7U0FDMUIsQ0FBQztRQUNGLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUE0QixFQUFRLEVBQUU7WUFDeEQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBdkNELGtEQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGphdmFzY3JpcHQgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3QsIFR5cGVTY3JpcHRQcm9qZWN0T3B0aW9ucyB9IGZyb20gJ3Byb2plbi9saWIvdHlwZXNjcmlwdCc7XG5pbXBvcnQge1xuICBOcG1QYWNrYWdlQ29tcG9uZW50LFxuICBEZXZDb250YWluZXJDb21wb25lbnQsXG4gIFZzQ29kZUNvbXBvbmVudCxcbiAgR2l0SHViQ29tcG9uZW50LFxuICBQcmV0dGllckNvbXBvbmVudCxcbiAgSHVza3lDb21wb25lbnQsXG4gIENvbW1pdExpbnRDb21wb25lbnQsXG4gIFNhbXBsZUNvbXBvbmVudCxcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IElQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIEhhdmUgdG8gZGlzYWJsZSB0aGUgcHJldHRpZXIgcnVsZSBoZXJlIGZvciB0aGUgeyB9XG4vLyBvdGhlcndpc2Ugd2UgaGF2ZSBhIGNvbmZsaWN0IGJldHdlZW4gcHJldHRpZXIgYW5kIGxpbnRlci5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuZXhwb3J0IGludGVyZmFjZSBHaXRIdWJBY3Rpb25Qcm9qZWN0T3B0aW9ucyBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0T3B0aW9ucyB7IH1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgUHJvamVuIFR5cGVTY3JpcHQgcHJvamVjdCBjb25maWd1cmVkIGZvciBHaXRIdWIgQWN0aW9ucyxcbiAqIHByb3ZpZGluZyB2YXJpb3VzIHByb2plY3QgdGVtcGxhdGVzIGFuZCBzZXR0aW5ncy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdEh1YkFjdGlvblByb2plY3QgZXh0ZW5kcyBUeXBlU2NyaXB0UHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEdpdEh1YkFjdGlvblByb2plY3RPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4ub3B0aW9ucyxcblxuICAgICAgcGFja2FnZU1hbmFnZXI6IGphdmFzY3JpcHQuTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIG1pbk5vZGVWZXJzaW9uOiAnMjAnLFxuICAgICAgY29tbWl0R2VuZXJhdGVkOiBmYWxzZSxcbiAgICAgIHByb2plbnJjVHM6IHRydWUsXG5cbiAgICAgIHB1bGxSZXF1ZXN0VGVtcGxhdGU6IGZhbHNlLFxuICAgICAgcHJldHRpZXI6IHRydWUsXG4gICAgICBnaXRodWJPcHRpb25zOiB7XG4gICAgICAgIG1lcmdpZnk6IGZhbHNlLFxuICAgICAgICBwdWxsUmVxdWVzdExpbnQ6IGZhbHNlLCAvLyB3b3JrZmxvdyBwdWxsLXJlcXVlc3QtbGludC55bWxcbiAgICAgIH0sXG4gICAgICBidWlsZFdvcmtmbG93OiBmYWxzZSwgLy8gd29ya2Zsb3cgYnVpbGQueW1sXG4gICAgICByZWxlYXNlOiBmYWxzZSwgLy8gd29ya2Zsb3cgcmVsZWFzZS55bWxcbiAgICAgIGRlcHNVcGdyYWRlOiBmYWxzZSwgLy8gd29ya2Zsb3cgdXBncmFkZS1tYWluLnltbFxuICAgICAgc2FtcGxlQ29kZTogZmFsc2UsXG5cbiAgICAgIGRldkRlcHM6IFsncHJvamVuJywgJ2NvbnN0cnVjdCddLFxuICAgIH0pO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBwcm9qZWN0IGNvbmZpZ3VyYXRpb25cbiAgICBjb25zdCBjb21wb25lbnRzOiBJUHJvamVjdENvbXBvbmVudFtdID0gW1xuICAgICAgbmV3IE5wbVBhY2thZ2VDb21wb25lbnQodGhpcyksXG4gICAgICBuZXcgRGV2Q29udGFpbmVyQ29tcG9uZW50KHRoaXMpLFxuICAgICAgbmV3IFZzQ29kZUNvbXBvbmVudCh0aGlzKSxcbiAgICAgIG5ldyBHaXRIdWJDb21wb25lbnQodGhpcyksXG4gICAgICBuZXcgUHJldHRpZXJDb21wb25lbnQodGhpcyksXG4gICAgICBuZXcgSHVza3lDb21wb25lbnQodGhpcyksXG4gICAgICBuZXcgQ29tbWl0TGludENvbXBvbmVudCh0aGlzKSxcbiAgICAgIG5ldyBTYW1wbGVDb21wb25lbnQodGhpcyksXG4gICAgXTtcbiAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudDogSVByb2plY3RDb21wb25lbnQpOiB2b2lkID0+IHtcbiAgICAgIGNvbXBvbmVudC5zZXR1cCgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=