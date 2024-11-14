"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * Prettier builder implementing all relevant configuration for the Jsii project.
 */
class PrettierJsii extends base_1.PrettierBase {
    /**
     * Initializes the Prettier builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Prettier for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * File paths to the Prettier ignore entries.
     * @protected
     */
    get ignoreFilePaths() {
        const baseEntries = super.ignoreFilePaths;
        return [...baseEntries, '/API.md'];
    }
    /**
     * Entries in `.gitattributes` are already done by `.projenrc.ts`
     * @protected
     * @override
     */
    // eslint-disable-next-line prettier/prettier
    addGitAttributes() { }
}
exports.PrettierJsii = PrettierJsii;
_a = JSII_RTTI_SYMBOL_1;
PrettierJsii[_a] = { fqn: "projen-template-projects.PrettierJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanNpaS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE4RDtBQUU5RDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLG1CQUFZO0lBQzVDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQWMsZUFBZTtRQUMzQixNQUFNLFdBQVcsR0FBYSxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILDZDQUE2QztJQUNuQyxnQkFBZ0IsS0FBVSxDQUFDOztBQTFCdkMsb0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJldHRpZXJCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBQcmV0dGllciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIEpzaWkgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByZXR0aWVySnNpaSBleHRlbmRzIFByZXR0aWVyQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgUHJldHRpZXIgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFByZXR0aWVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aHMgdG8gdGhlIFByZXR0aWVyIGlnbm9yZSBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZUZpbGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgYmFzZUVudHJpZXM6IHN0cmluZ1tdID0gc3VwZXIuaWdub3JlRmlsZVBhdGhzO1xuICAgIHJldHVybiBbLi4uYmFzZUVudHJpZXMsICcvQVBJLm1kJ107XG4gIH1cbiAgLyoqXG4gICAqIEVudHJpZXMgaW4gYC5naXRhdHRyaWJ1dGVzYCBhcmUgYWxyZWFkeSBkb25lIGJ5IGAucHJvamVucmMudHNgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgcHJvdGVjdGVkIGFkZEdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7fVxufVxuIl19