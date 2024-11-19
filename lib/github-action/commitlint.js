"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLint = void 0;
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
            '**/*.{yml,yaml}': ['npm run prettier:message', 'npm run prettier:fix'],
        };
    }
}
exports.CommitLint = CommitLint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0NBQWdFO0FBR2hFOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEscUJBQWM7SUFDNUM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLFdBQVc7UUFDdkIsT0FBTztZQUNMLGlCQUFpQixFQUFFLENBQUMsMEJBQTBCLEVBQUUsc0JBQXNCLENBQUM7U0FDeEUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXZCRCxnQ0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXRMaW50QmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBMaW50U3RhZ2VkQ29uZmlnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbW1pdExpbnQgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludCBleHRlbmRzIENvbW1pdExpbnRCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBDb21taXRMaW50IGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBDb21taXRMaW50IGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRpbmdzIHRvIGJlIGFkZGVkIHRvIHBhY2thZ2UuanNvbiBmb3IgdGhlIENvbW1pdExpbnQgYnVpbGRlci5cbiAgICogQHJldHVybiBUZW1wbGF0ZSBmb3IgdGhlIGNvbmZpZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBucG1TZXR0aW5ncygpOiBMaW50U3RhZ2VkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgJyoqLyoue3ltbCx5YW1sfSc6IFsnbnBtIHJ1biBwcmV0dGllcjptZXNzYWdlJywgJ25wbSBydW4gcHJldHRpZXI6Zml4J10sXG4gICAgfTtcbiAgfVxufVxuIl19