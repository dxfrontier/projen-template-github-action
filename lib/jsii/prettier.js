"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * Prettier builder implementing all relevant configuration for the Jsii project.
 */
class PrettierJsii extends base_1.PrettierBase {
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
        const baseEntries = super.ignoreFilePaths;
        return [...baseEntries, '/API.md'];
    }
}
exports.PrettierJsii = PrettierJsii;
_a = JSII_RTTI_SYMBOL_1;
PrettierJsii[_a] = { fqn: "@dxfrontier/projen-template-projects.PrettierJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanNpaS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE4RDtBQUU5RDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLG1CQUFZO0lBQzVDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE1BQU0sV0FBVyxHQUFhLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O0FBbEJILG9DQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogUHJldHRpZXIgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBKc2lpIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmV0dGllckpzaWkgZXh0ZW5kcyBQcmV0dGllckJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFByZXR0aWVyIGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBQcmV0dGllciBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBiYXNlRW50cmllczogc3RyaW5nW10gPSBzdXBlci5pZ25vcmVGaWxlUGF0aHM7XG4gICAgcmV0dXJuIFsuLi5iYXNlRW50cmllcywgJy9BUEkubWQnXTtcbiAgfVxufVxuIl19