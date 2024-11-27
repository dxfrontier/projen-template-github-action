"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubActionProject = void 0;
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
            jest: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQTJGO0FBQzNGLDZDQUEwQztBQUMxQyw2Q0FBc0Y7QUFFdEY7O0dBRUc7QUFDSCxNQUFhLG1CQUFvQixTQUFRLCtCQUFxQjtJQUM1RDs7O09BR0c7SUFDSCxZQUFZLE9BQXFDO1FBQy9DLEtBQUssQ0FBQztZQUNKLEdBQUcsT0FBTztZQUNWLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7UUFFSCxJQUFJLGFBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLGVBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLFdBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLFFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxhQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBdEJELGtEQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldkNvbnRhaW5lciwgR2l0SHViLCBIdXNreSwgTnBtUGFja2FnZSwgU2FtcGxlQ29kZSwgVnNDb2RlLCBQcmV0dGllciB9IGZyb20gJy4vJztcbmltcG9ydCB7IENvbW1pdExpbnQgfSBmcm9tICcuL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vYmFzZS9wcm9qZWN0JztcblxuLyoqXG4gKiBEZWZpbmVzIGEgR2l0SHViIEFjdGlvbiBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViQWN0aW9uUHJvamVjdCBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgR2l0SHViIEFjdGlvbiBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZU9wdGlvbnMpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGlzYWJsZVRzY29uZmlnOiB0cnVlLFxuICAgICAgZXNsaW50OiBmYWxzZSxcbiAgICAgIGplc3Q6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgbmV3IE5wbVBhY2thZ2UodGhpcyk7XG4gICAgbmV3IERldkNvbnRhaW5lcih0aGlzKTtcbiAgICBuZXcgVnNDb2RlKHRoaXMpO1xuICAgIG5ldyBHaXRIdWIodGhpcyk7XG4gICAgbmV3IFByZXR0aWVyKHRoaXMpO1xuICAgIG5ldyBIdXNreSh0aGlzKTtcbiAgICBuZXcgQ29tbWl0TGludCh0aGlzKTtcbiAgICBuZXcgU2FtcGxlQ29kZSh0aGlzKTtcbiAgfVxufVxuIl19