"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintJsii = void 0;
const base_1 = require("../base");
/**
 * CommitLint builder implementing all relevant configuration for the Jsii project.
 */
class CommitLintJsii extends base_1.CommitLintBase {
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
     * @override
     */
    get npmSettings() {
        return {
            '**/*.ts': ['npm run eslint', 'npm run prettier'],
        };
    }
}
exports.CommitLintJsii = CommitLintJsii;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc2lpL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0NBQWdFO0FBR2hFOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEscUJBQWM7SUFDaEQ7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLFdBQVc7UUFDdkIsT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO1NBQ2xELENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFwQkQsd0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWl0TGludEJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgTGludFN0YWdlZENvbmZpZyB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBDb21taXRMaW50IGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgSnNpaSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludEpzaWkgZXh0ZW5kcyBDb21taXRMaW50QmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgQ29tbWl0TGludCBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgQ29tbWl0TGludCBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgbnBtU2V0dGluZ3MoKTogTGludFN0YWdlZENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICcqKi8qLnRzJzogWyducG0gcnVuIGVzbGludCcsICducG0gcnVuIHByZXR0aWVyJ10sXG4gICAgfTtcbiAgfVxufVxuIl19