"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * GitHub builder implementing all relevant configuration for the Jsii project.
 */
class GitHubJsii extends base_1.GitHubBase {
    /**
     * Initializes the GitHub builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure GitHub for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
}
exports.GitHubJsii = GitHubJsii;
_a = JSII_RTTI_SYMBOL_1;
GitHubJsii[_a] = { fqn: "@dxfrontier/projen-template-projects.GitHubJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvZ2l0aHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQTREO0FBRTVEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsaUJBQVU7SUFDeEM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztBQVZILGdDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2l0SHViQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogR2l0SHViIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgSnNpaSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgR2l0SHViSnNpaSBleHRlbmRzIEdpdEh1YkJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIEdpdEh1YiBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgR2l0SHViIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG59XG4iXX0=