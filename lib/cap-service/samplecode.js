"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCode = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../base");
/**
 * SampleCode builder implementing all relevant configuration for the project.
 */
class SampleCode extends base_1.Builder {
    /**
     * Initializes the base SampleCode builder.
     * It sets the default options immediately after invoking `super(project)`
     * and before `initialize()` to ensure that all necessary configuration steps are applied.
     * @param project The project to configure SampleCode for.
     * @param options The project constructor options to configure SampleCode for.
     */
    constructor(project, options) {
        super(project);
        // defaults
        this.options = {
            entityName: options.entityName ?? 'Entity1',
        };
        this.initialize();
    }
    /**
     * Paths to the sample db directory files.
     * @return List of file paths to sample db directory files.
     * @protected
     */
    get dbPaths() {
        return ['db/schema.cds'];
    }
    /**
     * Capire db directory templates for the SampleCode configuration.
     * @return Contents for sample db directory files.
     * @protected
     */
    get dbTemplatesLines() {
        return {
            'db/schema.cds': [this.options.entityName],
        };
    }
    /**
     * Creates the template files for the db directory.
     * @protected
     */
    createDbTemplates() {
        for (const path of this.dbPaths) {
            if (this.dbTemplatesLines[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.dbTemplatesLines[path].join('\n'),
                });
            }
        }
    }
    /**
     * @override
     */
    addTemplates() {
        this.createDbTemplates();
    }
}
exports.SampleCode = SampleCode;
_a = JSII_RTTI_SYMBOL_1;
SampleCode[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCode", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9zYW1wbGVjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW9DO0FBQ3BDLGtDQUF5RDtBQUd6RDs7R0FFRztBQUNILE1BQWEsVUFBVyxTQUFRLGNBQU87SUFHckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxPQUE4QixFQUFFLE9BQWlDO1FBQzNFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLFdBQVc7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUksU0FBUztTQUM1QyxDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsZ0JBQWdCO1FBQzVCLE9BQU87WUFDTCxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNPLGlCQUFpQjtRQUN6QixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLG1CQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7b0JBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDakQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7O0FBNURILGdDQTZEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQnVpbGRlciwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIFNhbXBsZUNvZGUgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZSBleHRlbmRzIEJ1aWxkZXIge1xuICBwcml2YXRlIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIFNhbXBsZUNvZGUgYnVpbGRlci5cbiAgICogSXQgc2V0cyB0aGUgZGVmYXVsdCBvcHRpb25zIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogYW5kIGJlZm9yZSBgaW5pdGlhbGl6ZSgpYCB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBTYW1wbGVDb2RlIGZvci5cbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIHByb2plY3QgY29uc3RydWN0b3Igb3B0aW9ucyB0byBjb25maWd1cmUgU2FtcGxlQ29kZSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UsIG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucykge1xuICAgIHN1cGVyKHByb2plY3QpO1xuXG4gICAgLy8gZGVmYXVsdHNcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBlbnRpdHlOYW1lOiBvcHRpb25zLmVudGl0eU5hbWUgPz8gJ0VudGl0eTEnLFxuICAgIH07XG5cbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXRocyB0byB0aGUgc2FtcGxlIGRiIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHJldHVybiBMaXN0IG9mIGZpbGUgcGF0aHMgdG8gc2FtcGxlIGRiIGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBkYlBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydkYi9zY2hlbWEuY2RzJ107XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXJlIGRiIGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSBkYiBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZGJUZW1wbGF0ZXNMaW5lcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZGIvc2NoZW1hLmNkcyc6IFt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZV0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0ZW1wbGF0ZSBmaWxlcyBmb3IgdGhlIGRiIGRpcmVjdG9yeS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZURiVGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiB0aGlzLmRiUGF0aHMpIHtcbiAgICAgIGlmICh0aGlzLmRiVGVtcGxhdGVzTGluZXNbcGF0aF0pIHtcbiAgICAgICAgbmV3IFNhbXBsZUZpbGUodGhpcy5wcm9qZWN0LCBwYXRoLCB7XG4gICAgICAgICAgY29udGVudHM6IHRoaXMuZGJUZW1wbGF0ZXNMaW5lc1twYXRoXS5qb2luKCdcXG4nKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZURiVGVtcGxhdGVzKCk7XG4gIH1cbn1cbiJdfQ==