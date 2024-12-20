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
    addTemplates() { }
    /**
     * Configures settings specific to the builder within the project.
     * @protected
     */
    addSettings() { }
    /**
     * Adds npm scripts specific to the builder within the project.
     * @protected
     */
    addScripts() { }
    /**
     * Installs development dependencies for the builder in the project.
     * @protected
     */
    addDevDependencies() { }
    /**
     * Adds custom entries to the `.gitattributes` file for the builder in the project.
     * Overwrite this in case that manual entries need to be done.
     * @protected
     */
    addGitAttributes() { }
    /**
     * Hook to be called before synthesis.
     * @public
     */
    preSynthesize() { }
    /**
     * Hook to be called after synthesis.
     * @public
     */
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
Builder[_a] = { fqn: "@dxfrontier/projen-template-projects.Builder", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTs7O0dBR0c7QUFDSCxNQUFzQixPQUFPO0lBRzNCOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFVBQVU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFlBQVksS0FBVSxDQUFDO0lBRWpDOzs7T0FHRztJQUNPLFdBQVcsS0FBVSxDQUFDO0lBRWhDOzs7T0FHRztJQUNPLFVBQVUsS0FBVSxDQUFDO0lBRS9COzs7T0FHRztJQUNPLGtCQUFrQixLQUFVLENBQUM7SUFFdkM7Ozs7T0FJRztJQUNPLGdCQUFnQixLQUFVLENBQUM7SUFFckM7OztPQUdHO0lBQ0ksYUFBYSxLQUFVLENBQUM7SUFFL0I7OztPQUdHO0lBQ0ksY0FBYyxLQUFVLENBQUM7SUFFaEM7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOztBQWxGSCwwQkFtRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIHByb2plY3QgYnVpbGRlciBjb25maWd1cmF0aW9ucy5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnVpbGRlciB7XG4gIHByb3RlY3RlZCBwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2U7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBidWlsZGVyIGZvciBhIHNwZWNpZmllZCBwcm9qZWN0LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgdGhlIGJ1aWxkZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGJ1aWxkZXIgdG8gdGhlIHByb2plY3RzIGJ1aWxkZXIgcmVnaXN0cnkuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBhZGRCdWlsZGVyKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5yZWdpc3RlckJ1aWxkZXIodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0ZW1wbGF0ZSBmaWxlcyB0byB0aGUgYnVpbGRlcidzIHByb2plY3QgZGlyZWN0b3J5LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkVGVtcGxhdGVzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQ29uZmlndXJlcyBzZXR0aW5ncyBzcGVjaWZpYyB0byB0aGUgYnVpbGRlciB3aXRoaW4gdGhlIHByb2plY3QuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBhZGRTZXR0aW5ncygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgbnBtIHNjcmlwdHMgc3BlY2lmaWMgdG8gdGhlIGJ1aWxkZXIgd2l0aGluIHRoZSBwcm9qZWN0LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU2NyaXB0cygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEluc3RhbGxzIGRldmVsb3BtZW50IGRlcGVuZGVuY2llcyBmb3IgdGhlIGJ1aWxkZXIgaW4gdGhlIHByb2plY3QuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBhZGREZXZEZXBlbmRlbmNpZXMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBlbnRyaWVzIHRvIHRoZSBgLmdpdGF0dHJpYnV0ZXNgIGZpbGUgZm9yIHRoZSBidWlsZGVyIGluIHRoZSBwcm9qZWN0LlxuICAgKiBPdmVyd3JpdGUgdGhpcyBpbiBjYXNlIHRoYXQgbWFudWFsIGVudHJpZXMgbmVlZCB0byBiZSBkb25lLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkR2l0QXR0cmlidXRlcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhvb2sgdG8gYmUgY2FsbGVkIGJlZm9yZSBzeW50aGVzaXMuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHB1YmxpYyBwcmVTeW50aGVzaXplKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSG9vayB0byBiZSBjYWxsZWQgYWZ0ZXIgc3ludGhlc2lzLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwdWJsaWMgcG9zdFN5bnRoZXNpemUoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGJ1aWxkZXIgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgaW50ZW5kZWQgdG8gYmUgY2FsbGVkIGluIHRoZSBjb25zdHJ1Y3RvciBvZiBlYWNoIGNoaWxkIGNsYXNzXG4gICAqIHRvIHNldCB1cCB0aGUgYmFzaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJ1aWxkZXIuIEl0IHNlcXVlbnRpYWxseSBjYWxsc1xuICAgKiBhIHNldCBvZiBzZXR1cCBtZXRob2RzIHdoaWNoIHBlcmZvcm1zIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gdGFza3MgZm9yIHRoZSBwcm9qZWN0LlxuICAgKiBXZSBjYW5ub3QgdXNlIHRoZSBwcmVTeW50aGVzaXplIGhvb2sgYXMgYXQgdGhpcyBwb2ludCBpdCBpcyB0b28gbGF0ZSBzZXR0aW5nIGFsbCB1cC5cbiAgICpcbiAgICogIyMjIFVzYWdlXG4gICAqIC0gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpbiBlYWNoIGNoaWxkJ3MgY29uc3RydWN0b3IgaW1tZWRpYXRlbHkgYWZ0ZXJcbiAgICogICBpbnZva2luZyBgc3VwZXIoKWAgdG8gZW5zdXJlIHRoZSBidWlsZGVyIGlzIGZ1bGx5IGluaXRpYWxpemVkLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRCdWlsZGVyKCk7XG4gICAgdGhpcy5hZGRUZW1wbGF0ZXMoKTtcbiAgICB0aGlzLmFkZFNldHRpbmdzKCk7XG4gICAgdGhpcy5hZGRTY3JpcHRzKCk7XG4gICAgdGhpcy5hZGREZXZEZXBlbmRlbmNpZXMoKTtcbiAgICB0aGlzLmFkZEdpdEF0dHJpYnV0ZXMoKTtcbiAgfVxufVxuIl19