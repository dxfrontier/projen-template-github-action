"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmPackage = void 0;
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
}
exports.NpmPackage = NpmPackage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtDQUFnRTtBQUVoRTs7R0FFRztBQUNILE1BQWEsVUFBVyxTQUFRLHFCQUFjO0lBQzVDOzs7Ozs7O09BT0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBZEQsZ0NBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOcG1QYWNrYWdlQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogTlBNIFBhY2thZ2UgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTnBtUGFja2FnZSBleHRlbmRzIE5wbVBhY2thZ2VCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBOUE0gUGFja2FnZSBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBBZGRpdGlvbmFsbHkgaXQgY2FsbHMgYHJlbW92ZVNjcmlwdHMoKWAgdG8gZW5zdXJlLCB0aGF0IG5vIHByb2plbiBzdGFuZGFyZCBzY3JpcHRzIGFyZSBkZWZpbmVkXG4gICAqIGFzIHRoZXNlIHNjcmlwdHMgYXJlIG5vdCBuZWVkZWQgZm9yIHRoaXMga2luZCBvZiBwcm9qZWN0LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgTlBNIFBhY2thZ2UgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5yZW1vdmVTY3JpcHRzKCk7XG4gIH1cbn1cbiJdfQ==