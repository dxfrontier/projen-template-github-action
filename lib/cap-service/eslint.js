"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsLint = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * EsLint builder implementing all relevant configuration for the project.
 */
class EsLint extends base_1.EsLintBase {
    /**
     * Initializes the EsLint builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * @override
     */
    get ignoreSettings() {
        return ['dist/', 'test/', 'gen/', '@cds-models', 'default-env.js', '@dispatcher'];
    }
}
exports.EsLint = EsLint;
_a = JSII_RTTI_SYMBOL_1;
EsLint[_a] = { fqn: "@dxfrontier/projen-template-projects.EsLint", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2VzbGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE0RDtBQUU1RDs7R0FFRztBQUNILE1BQWEsTUFBTyxTQUFRLGlCQUFVO0lBQ3BDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7QUFqQkgsd0JBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXNMaW50QmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogRXNMaW50IGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEVzTGludCBleHRlbmRzIEVzTGludEJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIEVzTGludCBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgQ29tbWl0TGludCBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlU2V0dGluZ3MoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2Rpc3QvJywgJ3Rlc3QvJywgJ2dlbi8nLCAnQGNkcy1tb2RlbHMnLCAnZGVmYXVsdC1lbnYuanMnLCAnQGRpc3BhdGNoZXInXTtcbiAgfVxufVxuIl19