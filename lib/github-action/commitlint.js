"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLint = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * CommitLint builder implementing all relevant configuration for the project.
 */
class CommitLint extends base_1.CommitLintBase {
    /**
     * Initializes the CommitLint builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * Settings to be added to package.json for the CommitLint builder.
     * @return Template for the config file.
     * @protected
     * @override
     */
    get npmSettings() {
        return {
            '**/*.{yml,yaml}': ['npm run prettier'],
        };
    }
}
exports.CommitLint = CommitLint;
_a = JSII_RTTI_SYMBOL_1;
CommitLint[_a] = { fqn: "@dxfrontier/projen-template-projects.CommitLint", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBZ0U7QUFHaEU7O0dBRUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxxQkFBYztJQUM1Qzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsV0FBVztRQUN2QixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztTQUN4QyxDQUFDO0lBQ0osQ0FBQzs7QUF0QkgsZ0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWl0TGludEJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgTGludFN0YWdlZENvbmZpZyB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBDb21taXRMaW50IGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbW1pdExpbnQgZXh0ZW5kcyBDb21taXRMaW50QmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgQ29tbWl0TGludCBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgQ29tbWl0TGludCBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0aW5ncyB0byBiZSBhZGRlZCB0byBwYWNrYWdlLmpzb24gZm9yIHRoZSBDb21taXRMaW50IGJ1aWxkZXIuXG4gICAqIEByZXR1cm4gVGVtcGxhdGUgZm9yIHRoZSBjb25maWcgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgbnBtU2V0dGluZ3MoKTogTGludFN0YWdlZENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcqKi8qLnt5bWwseWFtbH0nOiBbJ25wbSBydW4gcHJldHRpZXInXSxcbiAgICB9O1xuICB9XG59XG4iXX0=