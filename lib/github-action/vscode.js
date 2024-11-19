"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCode = void 0;
const base_1 = require("../base");
/**
 * VsCode builder implementing all relevant configuration for the project.
 */
class VsCode extends base_1.VsCodeBase {
    /**
     * Initializes the VsCode builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure VsCode Package for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
}
exports.VsCode = VsCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vdnNjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtDQUE0RDtBQUU1RDs7R0FFRztBQUNILE1BQWEsTUFBTyxTQUFRLGlCQUFVO0lBQ3BDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNGO0FBWEQsd0JBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWc0NvZGVCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBWc0NvZGUgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgVnNDb2RlIGV4dGVuZHMgVnNDb2RlQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgVnNDb2RlIGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBWc0NvZGUgUGFja2FnZSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxufVxuIl19