"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuskyJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * Husky builder implementing all relevant configuration for the Jsii project.
 */
class HuskyJsii extends base_1.HuskyBase {
    /**
     * Initializes the Husky builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Husky for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * Entries in `.gitattributes` are already done by `.projenrc.ts`
     * @protected
     * @override
     */
    // eslint-disable-next-line prettier/prettier
    addGitAttributes() { }
}
exports.HuskyJsii = HuskyJsii;
_a = JSII_RTTI_SYMBOL_1;
HuskyJsii[_a] = { fqn: "projen-template-projects.HuskyJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVza3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanNpaS9odXNreS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUEyRDtBQUUzRDs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLGdCQUFTO0lBQ3RDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2Q0FBNkM7SUFDbkMsZ0JBQWdCLEtBQVUsQ0FBQzs7QUFsQnZDLDhCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh1c2t5QmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogSHVza3kgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBKc2lpIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBIdXNreUpzaWkgZXh0ZW5kcyBIdXNreUJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIEh1c2t5IGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBIdXNreSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnRyaWVzIGluIGAuZ2l0YXR0cmlidXRlc2AgYXJlIGFscmVhZHkgZG9uZSBieSBgLnByb2plbnJjLnRzYFxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gIHByb3RlY3RlZCBhZGRHaXRBdHRyaWJ1dGVzKCk6IHZvaWQge31cbn1cbiJdfQ==