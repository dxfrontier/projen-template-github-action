"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsLintBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const builder_1 = require("./builder");
/**
 * Base class for ESLint builder implementing all relevant configuration.
 * @abstract
 */
class EsLintBase extends builder_1.Builder {
    /**
     * Initializes the base EsLint builder.
     * @param project The project to configure EsLint builder for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * Ignore settings to be used in EsLint.
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
            this.project.eslint?.addIgnorePattern(setting);
        }
    }
}
exports.EsLintBase = EsLintBase;
_a = JSII_RTTI_SYMBOL_1;
EsLintBase[_a] = { fqn: "@dxfrontier/projen-template-projects.EsLintBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZXNsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBR3BDOzs7R0FHRztBQUNILE1BQXNCLFVBQVcsU0FBUSxpQkFBTztJQUM5Qzs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsY0FBYztRQUMxQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7T0FFRztJQUNPLFdBQVc7UUFDbkIsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNILENBQUM7O0FBekJILGdDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBFU0xpbnQgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVzTGludEJhc2UgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIEVzTGludCBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgRXNMaW50IGJ1aWxkZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogSWdub3JlIHNldHRpbmdzIHRvIGJlIHVzZWQgaW4gRXNMaW50LlxuICAgKiBAcmV0dXJuIFBhdHRlcm5zIGZvciB0aGUgaWdub3JlIHNldHRpbmdzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZVNldHRpbmdzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzZXR0aW5nIG9mIHRoaXMuaWdub3JlU2V0dGluZ3MpIHtcbiAgICAgIHRoaXMucHJvamVjdC5lc2xpbnQ/LmFkZElnbm9yZVBhdHRlcm4oc2V0dGluZyk7XG4gICAgfVxuICB9XG59XG4iXX0=