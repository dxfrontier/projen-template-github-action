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
        super(options);
        new _1.NpmPackage(this);
        new _1.DevContainer(this);
        new _1.VSCode(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5QkFBMkY7QUFDM0YsNkNBQTBDO0FBQzFDLDZDQUFzRjtBQUV0Rjs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsK0JBQXFCO0lBQzVEOzs7T0FHRztJQUNILFlBQVksT0FBcUM7UUFDL0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxhQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxlQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxXQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBSSxRQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksYUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O0FBaEJILGtEQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldkNvbnRhaW5lciwgR2l0SHViLCBIdXNreSwgTnBtUGFja2FnZSwgU2FtcGxlQ29kZSwgVlNDb2RlLCBQcmV0dGllciB9IGZyb20gJy4vJztcbmltcG9ydCB7IENvbW1pdExpbnQgfSBmcm9tICcuL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vYmFzZS9wcm9qZWN0JztcblxuLyoqXG4gKiBEZWZpbmVzIGEgR2l0SHViIEFjdGlvbiBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViQWN0aW9uUHJvamVjdCBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgR2l0SHViIEFjdGlvbiBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZU9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIG5ldyBOcG1QYWNrYWdlKHRoaXMpO1xuICAgIG5ldyBEZXZDb250YWluZXIodGhpcyk7XG4gICAgbmV3IFZTQ29kZSh0aGlzKTtcbiAgICBuZXcgR2l0SHViKHRoaXMpO1xuICAgIG5ldyBQcmV0dGllcih0aGlzKTtcbiAgICBuZXcgSHVza3kodGhpcyk7XG4gICAgbmV3IENvbW1pdExpbnQodGhpcyk7XG4gICAgbmV3IFNhbXBsZUNvZGUodGhpcyk7XG4gIH1cbn1cbiJdfQ==