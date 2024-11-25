"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainer = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * DevContainer builder implementing all relevant configuration for the project.
 */
class DevContainer extends base_1.DevContainerBase {
    /**
     * Initializes the DevContainer builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
}
exports.DevContainer = DevContainer;
_a = JSII_RTTI_SYMBOL_1;
DevContainer[_a] = { fqn: "@dxfrontier/projen-template-projects.DevContainer", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWtFO0FBRWxFOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsdUJBQWdCO0lBQ2hEOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7QUFWSCxvQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldkNvbnRhaW5lckJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG4vKipcbiAqIERldkNvbnRhaW5lciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZDb250YWluZXIgZXh0ZW5kcyBEZXZDb250YWluZXJCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBEZXZDb250YWluZXIgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIENvbW1pdExpbnQgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cbn1cbiJdfQ==