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
    get gitAttributesFilePaths() {
        return ['tsconfig.json'];
    }
    /**
     * @override
     */
    get npmFilePaths() {
        return ['lib', 'README.md', 'LICENSE', '.jsii'];
    }
    /**
     * @override
     */
    addDevDependencies() { }
}
exports.NpmPackageJsii = NpmPackageJsii;
_a = JSII_RTTI_SYMBOL_1;
NpmPackageJsii[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmPackageJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWdFO0FBRWhFOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEscUJBQWM7SUFDaEQ7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLHNCQUFzQjtRQUNsQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxZQUFZO1FBQ3hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxrQkFBa0IsS0FBVSxDQUFDOztBQTdCekMsd0NBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnBtUGFja2FnZUJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG4vKipcbiAqIE5QTSBQYWNrYWdlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgSnNpaSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTnBtUGFja2FnZUpzaWkgZXh0ZW5kcyBOcG1QYWNrYWdlQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgTlBNIFBhY2thZ2UgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIE5QTSBQYWNrYWdlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBnaXRBdHRyaWJ1dGVzRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWyd0c2NvbmZpZy5qc29uJ107XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IG5wbUZpbGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnbGliJywgJ1JFQURNRS5tZCcsICdMSUNFTlNFJywgJy5qc2lpJ107XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkRGV2RGVwZW5kZW5jaWVzKCk6IHZvaWQge31cbn1cbiJdfQ==