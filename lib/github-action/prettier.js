"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prettier = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * Prettier builder implementing all relevant configuration for the project.
 */
class Prettier extends base_1.PrettierBase {
    /**
     * Initializes the Prettier builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Prettier for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * @override
     */
    get ignoreFilePaths() {
        return [
            '/.commitlintrc.ts',
            '/.devcontainer.json',
            '/.gitattributes',
            '/.github/ISSUE_TEMPLATE/bug.yml',
            '/.github/ISSUE_TEMPLATE/feature.yml',
            '/.github/ISSUE_TEMPLATE/housekeeping.yml',
            '/.github/ISSUE_TEMPLATE/question.yml',
            '/.github/pull_request_template.md',
            '/.github/workflows/release.yml',
            '/.github/workflows/stale.yml',
            '/.gitignore',
            '/.husky/commit-msg',
            '/.husky/pre-commit',
            '/.npmignore',
            '/.prettierignore',
            '/.prettierrc.json',
            '/.projen/**',
            '/.projen/deps.json',
            '/.projen/files.json',
            '/.projen/tasks.json',
            '/.vscode/settings.json',
            '/cliff.toml',
            '/LICENSE',
            '/package-lock.json',
            '/package.json',
            '/tsconfig.dev.json',
            '/tsconfig.json',
        ];
    }
}
exports.Prettier = Prettier;
_a = JSII_RTTI_SYMBOL_1;
Prettier[_a] = { fqn: "@dxfrontier/projen-template-projects.Prettier", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2l0aHViLWFjdGlvbi9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE4RDtBQUU5RDs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLG1CQUFZO0lBQ3hDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLGlCQUFpQjtZQUNqQixpQ0FBaUM7WUFDakMscUNBQXFDO1lBQ3JDLDBDQUEwQztZQUMxQyxzQ0FBc0M7WUFDdEMsbUNBQW1DO1lBQ25DLGdDQUFnQztZQUNoQyw4QkFBOEI7WUFDOUIsYUFBYTtZQUNiLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIscUJBQXFCO1lBQ3JCLHdCQUF3QjtZQUN4QixhQUFhO1lBQ2IsVUFBVTtZQUNWLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGdCQUFnQjtTQUNqQixDQUFDO0lBQ0osQ0FBQzs7QUE3Q0gsNEJBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJldHRpZXJCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBQcmV0dGllciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmV0dGllciBleHRlbmRzIFByZXR0aWVyQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgUHJldHRpZXIgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFByZXR0aWVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnLy5jb21taXRsaW50cmMudHMnLFxuICAgICAgJy8uZGV2Y29udGFpbmVyLmpzb24nLFxuICAgICAgJy8uZ2l0YXR0cmlidXRlcycsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvYnVnLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvZmVhdHVyZS55bWwnLFxuICAgICAgJy8uZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2hvdXNla2VlcGluZy55bWwnLFxuICAgICAgJy8uZ2l0aHViL0lTU1VFX1RFTVBMQVRFL3F1ZXN0aW9uLnltbCcsXG4gICAgICAnLy5naXRodWIvcHVsbF9yZXF1ZXN0X3RlbXBsYXRlLm1kJyxcbiAgICAgICcvLmdpdGh1Yi93b3JrZmxvd3MvcmVsZWFzZS55bWwnLFxuICAgICAgJy8uZ2l0aHViL3dvcmtmbG93cy9zdGFsZS55bWwnLFxuICAgICAgJy8uZ2l0aWdub3JlJyxcbiAgICAgICcvLmh1c2t5L2NvbW1pdC1tc2cnLFxuICAgICAgJy8uaHVza3kvcHJlLWNvbW1pdCcsXG4gICAgICAnLy5ucG1pZ25vcmUnLFxuICAgICAgJy8ucHJldHRpZXJpZ25vcmUnLFxuICAgICAgJy8ucHJldHRpZXJyYy5qc29uJyxcbiAgICAgICcvLnByb2plbi8qKicsXG4gICAgICAnLy5wcm9qZW4vZGVwcy5qc29uJyxcbiAgICAgICcvLnByb2plbi9maWxlcy5qc29uJyxcbiAgICAgICcvLnByb2plbi90YXNrcy5qc29uJyxcbiAgICAgICcvLnZzY29kZS9zZXR0aW5ncy5qc29uJyxcbiAgICAgICcvY2xpZmYudG9tbCcsXG4gICAgICAnL0xJQ0VOU0UnLFxuICAgICAgJy9wYWNrYWdlLWxvY2suanNvbicsXG4gICAgICAnL3BhY2thZ2UuanNvbicsXG4gICAgICAnL3RzY29uZmlnLmRldi5qc29uJyxcbiAgICAgICcvdHNjb25maWcuanNvbicsXG4gICAgXTtcbiAgfVxufVxuIl19