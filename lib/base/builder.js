"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
/**
 * Base class for managing project builder configurations.
 * @abstract
 */
class Builder {
    /**
     * Initializes the builder for a specified project.
     * @param project The project to configure the builder for.
     */
    constructor(project) {
        this.project = project;
    }
    /**
     * Adds builder to the projects builder registry.
     * @protected
     */
    addBuilder() {
        this.project.registerBuilder(this);
    }
    /**
     * Adds template files to the builder's project directory.
     * @protected
     */
    // eslint-disable-next-line prettier/prettier
    addTemplates() { }
    /**
     * Configures settings specific to the builder within the project.
     * @protected
     */
    // eslint-disable-next-line prettier/prettier
    addSettings() { }
    /**
     * Adds npm scripts specific to the builder within the project.
     * @protected
     */
    // eslint-disable-next-line prettier/prettier
    addScripts() { }
    /**
     * Installs development dependencies for the builder in the project.
     * @protected
     */
    // eslint-disable-next-line prettier/prettier
    addDevDependencies() { }
    /**
     * Adds custom entries to the `.gitattributes` file for the builder in the project.
     * @protected
     */
    // eslint-disable-next-line prettier/prettier
    addGitAttributes() { }
    /**
     * Hook to be called before synthesis.
     * @public
     */
    // eslint-disable-next-line prettier/prettier
    preSynthesize() { }
    /**
     * Hook to be called after synthesis.
     * @public
     */
    // eslint-disable-next-line prettier/prettier
    postSynthesize() { }
    /**
     * Initialize builder configuration for the project.
     * @public
     *
     * This method is intended to be called in the constructor of each child class
     * to set up the basic configuration for the builder. It sequentially calls
     * a set of setup methods which performs specific configuration tasks for the project.
     * We cannot use the preSynthesize hook as at this point it is too late setting all up.
     *
     * ### Usage
     * - This method should be called in each child's constructor immediately after
     *   invoking `super()` to ensure the builder is fully initialized.
     */
    initialize() {
        this.addBuilder();
        this.addTemplates();
        this.addSettings();
        this.addScripts();
        this.addDevDependencies();
        this.addGitAttributes();
    }
}
exports.Builder = Builder;
_a = JSII_RTTI_SYMBOL_1;
Builder[_a] = { fqn: "projen-template-projects.Builder", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTs7O0dBR0c7QUFDSCxNQUFzQixPQUFPO0lBRzNCOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFVBQVU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDZDQUE2QztJQUNuQyxZQUFZLEtBQVUsQ0FBQztJQUVqQzs7O09BR0c7SUFDSCw2Q0FBNkM7SUFDbkMsV0FBVyxLQUFVLENBQUM7SUFFaEM7OztPQUdHO0lBQ0gsNkNBQTZDO0lBQ25DLFVBQVUsS0FBVSxDQUFDO0lBRS9COzs7T0FHRztJQUNILDZDQUE2QztJQUNuQyxrQkFBa0IsS0FBVSxDQUFDO0lBRXZDOzs7T0FHRztJQUNILDZDQUE2QztJQUNuQyxnQkFBZ0IsS0FBVSxDQUFDO0lBRXJDOzs7T0FHRztJQUNILDZDQUE2QztJQUN0QyxhQUFhLEtBQVUsQ0FBQztJQUUvQjs7O09BR0c7SUFDSCw2Q0FBNkM7SUFDdEMsY0FBYyxLQUFVLENBQUM7SUFFaEM7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOztBQXhGSCwwQkF5RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIHByb2plY3QgYnVpbGRlciBjb25maWd1cmF0aW9ucy5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnVpbGRlciB7XG4gIHByb3RlY3RlZCBwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2U7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBidWlsZGVyIGZvciBhIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgdGhlIGJ1aWxkZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGJ1aWxkZXIgdG8gdGhlIHByb2plY3RzIGJ1aWxkZXIgcmVnaXN0cnkuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBhZGRCdWlsZGVyKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5yZWdpc3RlckJ1aWxkZXIodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0ZW1wbGF0ZSBmaWxlcyB0byB0aGUgYnVpbGRlcidzIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgcHJvdGVjdGVkIGFkZFRlbXBsYXRlcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgc2V0dGluZ3Mgc3BlY2lmaWMgdG8gdGhlIGJ1aWxkZXIgd2l0aGluIHRoZSBwcm9qZWN0LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQWRkcyBucG0gc2NyaXB0cyBzcGVjaWZpYyB0byB0aGUgYnVpbGRlciB3aXRoaW4gdGhlIHByb2plY3QuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICBwcm90ZWN0ZWQgYWRkU2NyaXB0cygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEluc3RhbGxzIGRldmVsb3BtZW50IGRlcGVuZGVuY2llcyBmb3IgdGhlIGJ1aWxkZXIgaW4gdGhlIHByb2plY3QuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICBwcm90ZWN0ZWQgYWRkRGV2RGVwZW5kZW5jaWVzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gZW50cmllcyB0byB0aGUgYC5naXRhdHRyaWJ1dGVzYCBmaWxlIGZvciB0aGUgYnVpbGRlciBpbiB0aGUgcHJvamVjdC5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gIHByb3RlY3RlZCBhZGRHaXRBdHRyaWJ1dGVzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSG9vayB0byBiZSBjYWxsZWQgYmVmb3JlIHN5bnRoZXNpcy5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gIHB1YmxpYyBwcmVTeW50aGVzaXplKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSG9vayB0byBiZSBjYWxsZWQgYWZ0ZXIgc3ludGhlc2lzLlxuICAgKiBAcHVibGljXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgcHVibGljIHBvc3RTeW50aGVzaXplKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBidWlsZGVyIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludGVuZGVkIHRvIGJlIGNhbGxlZCBpbiB0aGUgY29uc3RydWN0b3Igb2YgZWFjaCBjaGlsZCBjbGFzc1xuICAgKiB0byBzZXQgdXAgdGhlIGJhc2ljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBidWlsZGVyLiBJdCBzZXF1ZW50aWFsbHkgY2FsbHNcbiAgICogYSBzZXQgb2Ygc2V0dXAgbWV0aG9kcyB3aGljaCBwZXJmb3JtcyBzcGVjaWZpYyBjb25maWd1cmF0aW9uIHRhc2tzIGZvciB0aGUgcHJvamVjdC5cbiAgICogV2UgY2Fubm90IHVzZSB0aGUgcHJlU3ludGhlc2l6ZSBob29rIGFzIGF0IHRoaXMgcG9pbnQgaXQgaXMgdG9vIGxhdGUgc2V0dGluZyBhbGwgdXAuXG4gICAqXG4gICAqICMjIyBVc2FnZVxuICAgKiAtIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgaW4gZWFjaCBjaGlsZCdzIGNvbnN0cnVjdG9yIGltbWVkaWF0ZWx5IGFmdGVyXG4gICAqICAgaW52b2tpbmcgYHN1cGVyKClgIHRvIGVuc3VyZSB0aGUgYnVpbGRlciBpcyBmdWxseSBpbml0aWFsaXplZC5cbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQnVpbGRlcigpO1xuICAgIHRoaXMuYWRkVGVtcGxhdGVzKCk7XG4gICAgdGhpcy5hZGRTZXR0aW5ncygpO1xuICAgIHRoaXMuYWRkU2NyaXB0cygpO1xuICAgIHRoaXMuYWRkRGV2RGVwZW5kZW5jaWVzKCk7XG4gICAgdGhpcy5hZGRHaXRBdHRyaWJ1dGVzKCk7XG4gIH1cbn1cbiJdfQ==