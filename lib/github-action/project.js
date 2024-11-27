"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubActionProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const commitlint_1 = require("./commitlint");
const devcontainer_1 = require("./devcontainer");
const github_1 = require("./github");
const husky_1 = require("./husky");
const npm_1 = require("./npm");
const prettier_1 = require("./prettier");
const samplecode_1 = require("./samplecode");
const vscode_1 = require("./vscode");
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
        new npm_1.NpmPackage(this);
        new devcontainer_1.DevContainer(this);
        new vscode_1.VsCode(this);
        new github_1.GitHub(this);
        new prettier_1.Prettier(this);
        new husky_1.Husky(this);
        new commitlint_1.CommitLint(this);
        new samplecode_1.SampleCode(this);
    }
}
exports.GitHubActionProject = GitHubActionProject;
_a = JSII_RTTI_SYMBOL_1;
GitHubActionProject[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubActionProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3Byb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2Q0FBMEM7QUFDMUMsaURBQThDO0FBQzlDLHFDQUFrQztBQUNsQyxtQ0FBZ0M7QUFDaEMsK0JBQW1DO0FBQ25DLHlDQUFzQztBQUN0Qyw2Q0FBMEM7QUFDMUMscUNBQWtDO0FBQ2xDLDZDQUFzRjtBQUV0Rjs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsK0JBQXFCO0lBQzVEOzs7T0FHRztJQUNILFlBQVksT0FBcUM7UUFDL0MsS0FBSyxDQUFDO1lBQ0osR0FBRyxPQUFPO1lBQ1YsZUFBZSxFQUFFLElBQUk7WUFDckIsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQztRQUVILElBQUksZ0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLDJCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7QUFyQkgsa0RBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWl0TGludCB9IGZyb20gJy4vY29tbWl0bGludCc7XG5pbXBvcnQgeyBEZXZDb250YWluZXIgfSBmcm9tICcuL2RldmNvbnRhaW5lcic7XG5pbXBvcnQgeyBHaXRIdWIgfSBmcm9tICcuL2dpdGh1Yic7XG5pbXBvcnQgeyBIdXNreSB9IGZyb20gJy4vaHVza3knO1xuaW1wb3J0IHsgTnBtUGFja2FnZSB9IGZyb20gJy4vbnBtJztcbmltcG9ydCB7IFByZXR0aWVyIH0gZnJvbSAnLi9wcmV0dGllcic7XG5pbXBvcnQgeyBTYW1wbGVDb2RlIH0gZnJvbSAnLi9zYW1wbGVjb2RlJztcbmltcG9ydCB7IFZzQ29kZSB9IGZyb20gJy4vdnNjb2RlJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UvcHJvamVjdCc7XG5cbi8qKlxuICogRGVmaW5lcyBhIEdpdEh1YiBBY3Rpb24gcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEdpdEh1YkFjdGlvblByb2plY3QgZXh0ZW5kcyBUeXBlU2NyaXB0UHJvamVjdEJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIEdpdEh1YiBBY3Rpb24gcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRpc2FibGVUc2NvbmZpZzogdHJ1ZSxcbiAgICAgIGVzbGludDogZmFsc2UsXG4gICAgICBqZXN0OiBmYWxzZSxcbiAgICB9KTtcblxuICAgIG5ldyBOcG1QYWNrYWdlKHRoaXMpO1xuICAgIG5ldyBEZXZDb250YWluZXIodGhpcyk7XG4gICAgbmV3IFZzQ29kZSh0aGlzKTtcbiAgICBuZXcgR2l0SHViKHRoaXMpO1xuICAgIG5ldyBQcmV0dGllcih0aGlzKTtcbiAgICBuZXcgSHVza3kodGhpcyk7XG4gICAgbmV3IENvbW1pdExpbnQodGhpcyk7XG4gICAgbmV3IFNhbXBsZUNvZGUodGhpcyk7XG4gIH1cbn1cbiJdfQ==