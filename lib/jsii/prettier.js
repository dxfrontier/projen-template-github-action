"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierJsii = void 0;
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
     * @override
     */
    get ignoreFilePaths() {
        const baseEntries = super.ignoreFilePaths;
        return [...baseEntries, '/API.md'];
    }
}
exports.PrettierJsii = PrettierJsii;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanNpaS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrQ0FBOEQ7QUFFOUQ7O0dBRUc7QUFDSCxNQUFhLFlBQWEsU0FBUSxtQkFBWTtJQUM1Qzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsZUFBZTtRQUMzQixNQUFNLFdBQVcsR0FBYSxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0Y7QUFuQkQsb0NBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJldHRpZXJCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBQcmV0dGllciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIEpzaWkgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByZXR0aWVySnNpaSBleHRlbmRzIFByZXR0aWVyQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgUHJldHRpZXIgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFByZXR0aWVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGJhc2VFbnRyaWVzOiBzdHJpbmdbXSA9IHN1cGVyLmlnbm9yZUZpbGVQYXRocztcbiAgICByZXR1cm4gWy4uLmJhc2VFbnRyaWVzLCAnL0FQSS5tZCddO1xuICB9XG59XG4iXX0=