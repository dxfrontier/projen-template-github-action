"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Husky = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * Husky builder implementing all relevant configuration for the project.
 */
class Husky extends base_1.HuskyBase {
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
}
exports.Husky = Husky;
_a = JSII_RTTI_SYMBOL_1;
Husky[_a] = { fqn: "@dxfrontier/projen-template-projects.Husky", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVza3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2l0aHViLWFjdGlvbi9odXNreS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUEyRDtBQUUzRDs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLGdCQUFTO0lBQ2xDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7QUFWSCxzQkFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh1c2t5QmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogSHVza3kgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgSHVza3kgZXh0ZW5kcyBIdXNreUJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIEh1c2t5IGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBIdXNreSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxufVxuIl19