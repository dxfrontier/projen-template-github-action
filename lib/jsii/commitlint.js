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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc2lpL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBZ0U7QUFHaEU7O0dBRUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxxQkFBYztJQUNoRDs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxXQUFXO1FBQ3ZCLE9BQU87WUFDTCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQztTQUNwRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2Q0FBNkM7SUFDbkMsZ0JBQWdCLEtBQVUsQ0FBQzs7QUE3QnZDLHdDQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1pdExpbnRCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IExpbnRTdGFnZWRDb25maWcgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQ29tbWl0TGludCBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIEpzaWkgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbW1pdExpbnRKc2lpIGV4dGVuZHMgQ29tbWl0TGludEJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIENvbW1pdExpbnQgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIENvbW1pdExpbnQgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGluZ3MgdG8gYmUgYWRkZWQgdG8gcGFja2FnZS5qc29uIGZvciB0aGUgQ29tbWl0TGludCBidWlsZGVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBucG1TZXR0aW5ncygpOiBMaW50U3RhZ2VkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgJyoqLyoudHMnOiBbJ25wbSBydW4gZXNsaW50JywgJ25wbSBydW4gZm9ybWF0OmZpeCddLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRW50cmllcyBpbiBgLmdpdGF0dHJpYnV0ZXNgIGFyZSBhbHJlYWR5IGRvbmUgYnkgYC5wcm9qZW5yYy50c2BcbiAgICogQHByb3RlY3RlZFxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICBwcm90ZWN0ZWQgYWRkR2l0QXR0cmlidXRlcygpOiB2b2lkIHt9XG59XG4iXX0=