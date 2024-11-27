"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmPackage = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * NPM Package builder implementing all relevant configuration for the project.
 */
class NpmPackage extends base_1.NpmPackageBase {
    /**
     * Initializes the NPM Package builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * Additionally it calls `removeScripts()` to ensure, that no projen standard scripts are defined
     * as these scripts are not needed for this kind of project.
     * @param project The project to configure NPM Package for.
     */
    constructor(project) {
        super(project);
        this.initialize();
        this.removeScripts();
    }
    /**
     * @override
     */
    get npmFilePaths() {
        return ['action.yml', 'README.md', 'LICENSE'];
    }
}
exports.NpmPackage = NpmPackage;
_a = JSII_RTTI_SYMBOL_1;
NpmPackage[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmPackage", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWdFO0FBRWhFOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEscUJBQWM7SUFDNUM7Ozs7Ozs7T0FPRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLFlBQVk7UUFDeEIsT0FBTyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7QUFwQkgsZ0NBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnBtUGFja2FnZUJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG4vKipcbiAqIE5QTSBQYWNrYWdlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5wbVBhY2thZ2UgZXh0ZW5kcyBOcG1QYWNrYWdlQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgTlBNIFBhY2thZ2UgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQWRkaXRpb25hbGx5IGl0IGNhbGxzIGByZW1vdmVTY3JpcHRzKClgIHRvIGVuc3VyZSwgdGhhdCBubyBwcm9qZW4gc3RhbmRhcmQgc2NyaXB0cyBhcmUgZGVmaW5lZFxuICAgKiBhcyB0aGVzZSBzY3JpcHRzIGFyZSBub3QgbmVlZGVkIGZvciB0aGlzIGtpbmQgb2YgcHJvamVjdC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIE5QTSBQYWNrYWdlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMucmVtb3ZlU2NyaXB0cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBucG1GaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2FjdGlvbi55bWwnLCAnUkVBRE1FLm1kJywgJ0xJQ0VOU0UnXTtcbiAgfVxufVxuIl19