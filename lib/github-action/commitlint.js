"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLint = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * CommitLint builder implementing all relevant configuration for the project.
 */
class CommitLint extends base_1.CommitLintBase {
    /**
     * Initializes the CommitLint builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * Settings to be added to package.json for the CommitLint builder.
     * @protected
     * @override
     */
    get npmSettings() {
        return {
            '**/*.{yml,yaml}': ['npm run format:message', 'npm run format:fix'],
        };
    }
}
exports.CommitLint = CommitLint;
_a = JSII_RTTI_SYMBOL_1;
CommitLint[_a] = { fqn: "projen-template-projects.CommitLint", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBZ0U7QUFHaEU7O0dBRUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxxQkFBYztJQUM1Qzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxXQUFXO1FBQ3ZCLE9BQU87WUFDTCxpQkFBaUIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDO1NBQ3BFLENBQUM7SUFDSixDQUFDOztBQXJCSCxnQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXRMaW50QmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBMaW50U3RhZ2VkQ29uZmlnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbW1pdExpbnQgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludCBleHRlbmRzIENvbW1pdExpbnRCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBDb21taXRMaW50IGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBDb21taXRMaW50IGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRpbmdzIHRvIGJlIGFkZGVkIHRvIHBhY2thZ2UuanNvbiBmb3IgdGhlIENvbW1pdExpbnQgYnVpbGRlci5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgbnBtU2V0dGluZ3MoKTogTGludFN0YWdlZENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcqKi8qLnt5bWwseWFtbH0nOiBbJ25wbSBydW4gZm9ybWF0Om1lc3NhZ2UnLCAnbnBtIHJ1biBmb3JtYXQ6Zml4J10sXG4gICAgfTtcbiAgfVxufVxuIl19