"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmPackageJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * NPM Package builder implementing all relevant configuration for the Jsii project.
 */
class NpmPackageJsii extends base_1.NpmPackageBase {
    /**
     * Initializes the NPM Package builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure NPM Package for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * @override
     */
    get npmFilePaths() {
        return ['lib', 'README.md', '.jsii'];
    }
    /**
     * @override
     */
    addDevDependencies() { }
}
exports.NpmPackageJsii = NpmPackageJsii;
_a = JSII_RTTI_SYMBOL_1;
NpmPackageJsii[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmPackageJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWdFO0FBRWhFOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEscUJBQWM7SUFDaEQ7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLFlBQVk7UUFDeEIsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ08sa0JBQWtCLEtBQVUsQ0FBQzs7QUF0QnpDLHdDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5wbVBhY2thZ2VCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBOUE0gUGFja2FnZSBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIEpzaWkgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5wbVBhY2thZ2VKc2lpIGV4dGVuZHMgTnBtUGFja2FnZUJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIE5QTSBQYWNrYWdlIGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBOUE0gUGFja2FnZSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgbnBtRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydsaWInLCAnUkVBRE1FLm1kJywgJy5qc2lpJ107XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkRGV2RGVwZW5kZW5jaWVzKCk6IHZvaWQge31cbn1cbiJdfQ==