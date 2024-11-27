"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prettier = void 0;
const base_1 = require("../base");
/**
 * Prettier builder implementing all relevant configuration for the project.
 */
class Prettier extends base_1.PrettierBase {
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
        const base = super.ignoreFilePaths;
        const elementsToRemove = ['*.snap', '/.eslintrc.json', '/tsconfig.json'];
        return base.filter((file) => !elementsToRemove.includes(file));
    }
}
exports.Prettier = Prettier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2l0aHViLWFjdGlvbi9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrQ0FBOEQ7QUFFOUQ7O0dBRUc7QUFDSCxNQUFhLFFBQVMsU0FBUSxtQkFBWTtJQUN4Qzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsZUFBZTtRQUMzQixNQUFNLElBQUksR0FBYSxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQzdDLE1BQU0sZ0JBQWdCLEdBQWEsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFZLEVBQVcsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztDQUNGO0FBcEJELDRCQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogUHJldHRpZXIgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJldHRpZXIgZXh0ZW5kcyBQcmV0dGllckJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFByZXR0aWVyIGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBQcmV0dGllciBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBiYXNlOiBzdHJpbmdbXSA9IHN1cGVyLmlnbm9yZUZpbGVQYXRocztcbiAgICBjb25zdCBlbGVtZW50c1RvUmVtb3ZlOiBzdHJpbmdbXSA9IFsnKi5zbmFwJywgJy8uZXNsaW50cmMuanNvbicsICcvdHNjb25maWcuanNvbiddO1xuICAgIHJldHVybiBiYXNlLmZpbHRlcigoZmlsZTogc3RyaW5nKTogYm9vbGVhbiA9PiAhZWxlbWVudHNUb1JlbW92ZS5pbmNsdWRlcyhmaWxlKSk7XG4gIH1cbn1cbiJdfQ==