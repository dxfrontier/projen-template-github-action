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
_a = JSII_RTTI_SYMBOL_1;
GitHubActionProject[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubActionProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5QkFBMkY7QUFDM0YsNkNBQTBDO0FBQzFDLDZDQUFzRjtBQUV0Rjs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsK0JBQXFCO0lBQzVEOzs7T0FHRztJQUNILFlBQVksT0FBcUM7UUFDL0MsS0FBSyxDQUFDO1lBQ0osR0FBRyxPQUFPO1lBQ1YsZUFBZSxFQUFFLElBQUk7WUFDckIsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQztRQUVILElBQUksYUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksZUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksU0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksU0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksV0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksUUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLGFBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOztBQXJCSCxrREFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZDb250YWluZXIsIEdpdEh1YiwgSHVza3ksIE5wbVBhY2thZ2UsIFNhbXBsZUNvZGUsIFZzQ29kZSwgUHJldHRpZXIgfSBmcm9tICcuLyc7XG5pbXBvcnQgeyBDb21taXRMaW50IH0gZnJvbSAnLi9jb21taXRsaW50JztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UvcHJvamVjdCc7XG5cbi8qKlxuICogRGVmaW5lcyBhIEdpdEh1YiBBY3Rpb24gcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdEh1YkFjdGlvblByb2plY3QgZXh0ZW5kcyBUeXBlU2NyaXB0UHJvamVjdEJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIEdpdEh1YiBBY3Rpb24gcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRpc2FibGVUc2NvbmZpZzogdHJ1ZSxcbiAgICAgIGVzbGludDogZmFsc2UsXG4gICAgICBqZXN0OiBmYWxzZSxcbiAgICB9KTtcblxuICAgIG5ldyBOcG1QYWNrYWdlKHRoaXMpO1xuICAgIG5ldyBEZXZDb250YWluZXIodGhpcyk7XG4gICAgbmV3IFZzQ29kZSh0aGlzKTtcbiAgICBuZXcgR2l0SHViKHRoaXMpO1xuICAgIG5ldyBQcmV0dGllcih0aGlzKTtcbiAgICBuZXcgSHVza3kodGhpcyk7XG4gICAgbmV3IENvbW1pdExpbnQodGhpcyk7XG4gICAgbmV3IFNhbXBsZUNvZGUodGhpcyk7XG4gIH1cbn1cbiJdfQ==