"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const builder_1 = require("./builder");
/**
 * Base class for Git builder implementing all relevant configuration.
 * @abstract
 */
class GitBase extends builder_1.Builder {
    /**
     * Initializes the base Git builder.
     * @param project The project to configure Git builder for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * Ignore settings to be used in Git.
     * @return Patterns for the ignore settings.
     * @protected
     */
    get ignoreSettings() {
        return [];
    }
    /**
     * @override
     */
    addSettings() {
        for (const setting of this.ignoreSettings) {
            this.project.gitignore.addPatterns(setting);
        }
    }
}
exports.GitBase = GitBase;
_a = JSII_RTTI_SYMBOL_1;
GitBase[_a] = { fqn: "@dxfrontier/projen-template-projects.GitBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZ2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBR3BDOzs7R0FHRztBQUNILE1BQXNCLE9BQVEsU0FBUSxpQkFBTztJQUMzQzs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsY0FBYztRQUMxQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7T0FFRztJQUNPLFdBQVc7UUFDbkIsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDOztBQXpCSCwwQkEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgR2l0IGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHaXRCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBHaXQgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIEdpdCBidWlsZGVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIElnbm9yZSBzZXR0aW5ncyB0byBiZSB1c2VkIGluIEdpdC5cbiAgICogQHJldHVybiBQYXR0ZXJucyBmb3IgdGhlIGlnbm9yZSBzZXR0aW5ncy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVTZXR0aW5ncygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc2V0dGluZyBvZiB0aGlzLmlnbm9yZVNldHRpbmdzKSB7XG4gICAgICB0aGlzLnByb2plY3QuZ2l0aWdub3JlLmFkZFBhdHRlcm5zKHNldHRpbmcpO1xuICAgIH1cbiAgfVxufVxuIl19