"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * CommitLint builder implementing all relevant configuration for the Jsii project.
 */
class CommitLintJsii extends base_1.CommitLintBase {
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
     * @return Configuration entries for package.json.
     * @protected
     * @override
     */
    get npmSettings() {
        return {
            '**/*.ts': ['npm run eslint', 'npm run format:fix'],
        };
    }
    /**
     * Entries in `.gitattributes` are already done by `.projenrc.ts`
     * @protected
     * @override
     */
    // eslint-disable-next-line prettier/prettier
    addGitAttributes() { }
}
exports.CommitLintJsii = CommitLintJsii;
_a = JSII_RTTI_SYMBOL_1;
CommitLintJsii[_a] = { fqn: "projen-template-projects.CommitLintJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc2lpL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBZ0U7QUFHaEU7O0dBRUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxxQkFBYztJQUNoRDs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsV0FBVztRQUN2QixPQUFPO1lBQ0wsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUM7U0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkNBQTZDO0lBQ25DLGdCQUFnQixLQUFXLENBQUM7O0FBOUJ4Qyx3Q0ErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXRMaW50QmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBMaW50U3RhZ2VkQ29uZmlnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbW1pdExpbnQgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBKc2lpIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21taXRMaW50SnNpaSBleHRlbmRzIENvbW1pdExpbnRCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBDb21taXRMaW50IGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBDb21taXRMaW50IGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRpbmdzIHRvIGJlIGFkZGVkIHRvIHBhY2thZ2UuanNvbiBmb3IgdGhlIENvbW1pdExpbnQgYnVpbGRlci5cbiAgICogQHJldHVybiBDb25maWd1cmF0aW9uIGVudHJpZXMgZm9yIHBhY2thZ2UuanNvbi5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgbnBtU2V0dGluZ3MoKTogTGludFN0YWdlZENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcqKi8qLnRzJzogWyducG0gcnVuIGVzbGludCcsICducG0gcnVuIGZvcm1hdDpmaXgnXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEVudHJpZXMgaW4gYC5naXRhdHRyaWJ1dGVzYCBhcmUgYWxyZWFkeSBkb25lIGJ5IGAucHJvamVucmMudHNgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgcHJvdGVjdGVkIGFkZEdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7IH1cbn1cbiJdfQ==