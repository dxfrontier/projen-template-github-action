"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmPackageJsii = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtDQUFnRTtBQUVoRTs7R0FFRztBQUNILE1BQWEsY0FBZSxTQUFRLHFCQUFjO0lBQ2hEOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsWUFBWTtRQUN4QixPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ08sa0JBQWtCLEtBQVUsQ0FBQztDQUN4QztBQTlCRCx3Q0E4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOcG1QYWNrYWdlQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogTlBNIFBhY2thZ2UgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBKc2lpIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBOcG1QYWNrYWdlSnNpaSBleHRlbmRzIE5wbVBhY2thZ2VCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBOUE0gUGFja2FnZSBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgTlBNIFBhY2thZ2UgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGdpdEF0dHJpYnV0ZXNGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ3RzY29uZmlnLmpzb24nXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgbnBtRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydsaWInLCAnUkVBRE1FLm1kJywgJ0xJQ0VOU0UnLCAnLmpzaWknXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBhZGREZXZEZXBlbmRlbmNpZXMoKTogdm9pZCB7fVxufVxuIl19