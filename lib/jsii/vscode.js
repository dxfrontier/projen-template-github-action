"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSCodeJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * VSCode builder implementing all relevant configuration for the Jsii project.
 */
class VSCodeJsii extends base_1.VSCodeBase {
    /**
     * Initializes the VSCode builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure VSCode Package for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
}
exports.VSCodeJsii = VSCodeJsii;
_a = JSII_RTTI_SYMBOL_1;
VSCodeJsii[_a] = { fqn: "projen-template-projects.VSCodeJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvdnNjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQTREO0FBRTVEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsaUJBQVU7SUFDeEM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztBQVZILGdDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVlNDb2RlQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogVlNDb2RlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgSnNpaSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgVlNDb2RlSnNpaSBleHRlbmRzIFZTQ29kZUJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFZTQ29kZSBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgVlNDb2RlIFBhY2thZ2UgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cbn1cbiJdfQ==