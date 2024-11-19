"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubActionProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const _1 = require("./");
const commitlint_1 = require("./commitlint");
const project_1 = require("../base/project");
/**
 * Defines a GitHub Action project.
 */
class GitHubActionProject extends project_1.TypeScriptProjectBase {
    /**
     * Initializes the GitHub Action project.
     * @param options Additional project options.
     */
    constructor(options) {
        super({
            ...options,
            disableTsconfig: true,
            eslint: false,
            buildWorkflow: true
        });
        new _1.NpmPackage(this);
        new _1.DevContainer(this);
        new _1.VsCode(this);
        new _1.GitHub(this);
        new _1.Prettier(this);
        new _1.Husky(this);
        new commitlint_1.CommitLint(this);
        new _1.SampleCode(this);
    }
}
exports.GitHubActionProject = GitHubActionProject;
_a = JSII_RTTI_SYMBOL_1;
GitHubActionProject[_a] = { fqn: "projen-template-projects.GitHubActionProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5QkFBMkY7QUFDM0YsNkNBQTBDO0FBQzFDLDZDQUFzRjtBQUV0Rjs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsK0JBQXFCO0lBQzVEOzs7T0FHRztJQUNILFlBQVksT0FBcUM7UUFDL0MsS0FBSyxDQUFDO1lBQ0osR0FBRyxPQUFPO1lBQ1YsZUFBZSxFQUFFLElBQUk7WUFDckIsTUFBTSxFQUFFLEtBQUs7WUFDYixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUM7UUFFSCxJQUFJLGFBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLGVBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLFdBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLFFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxhQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7QUFyQkgsa0RBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2Q29udGFpbmVyLCBHaXRIdWIsIEh1c2t5LCBOcG1QYWNrYWdlLCBTYW1wbGVDb2RlLCBWc0NvZGUsIFByZXR0aWVyIH0gZnJvbSAnLi8nO1xuaW1wb3J0IHsgQ29tbWl0TGludCB9IGZyb20gJy4vY29tbWl0bGludCc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlL3Byb2plY3QnO1xuXG4vKipcbiAqIERlZmluZXMgYSBHaXRIdWIgQWN0aW9uIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBHaXRIdWJBY3Rpb25Qcm9qZWN0IGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3RCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBHaXRIdWIgQWN0aW9uIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogVHlwZVNjcmlwdFByb2plY3RCYXNlT3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBkaXNhYmxlVHNjb25maWc6IHRydWUsXG4gICAgICBlc2xpbnQ6IGZhbHNlLFxuICAgICAgYnVpbGRXb3JrZmxvdzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgbmV3IE5wbVBhY2thZ2UodGhpcyk7XG4gICAgbmV3IERldkNvbnRhaW5lcih0aGlzKTtcbiAgICBuZXcgVnNDb2RlKHRoaXMpO1xuICAgIG5ldyBHaXRIdWIodGhpcyk7XG4gICAgbmV3IFByZXR0aWVyKHRoaXMpO1xuICAgIG5ldyBIdXNreSh0aGlzKTtcbiAgICBuZXcgQ29tbWl0TGludCh0aGlzKTtcbiAgICBuZXcgU2FtcGxlQ29kZSh0aGlzKTtcbiAgfVxufVxuIl19