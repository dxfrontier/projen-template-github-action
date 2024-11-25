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
     * Overwrite this in case that manual entries need to be done.
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
Builder[_a] = { fqn: "@dxfrontier/projen-template-projects.Builder", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTs7O0dBR0c7QUFDSCxNQUFzQixPQUFPO0lBRzNCOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFVBQVU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDZDQUE2QztJQUNuQyxZQUFZLEtBQVUsQ0FBQztJQUVqQzs7O09BR0c7SUFDSCw2Q0FBNkM7SUFDbkMsV0FBVyxLQUFVLENBQUM7SUFFaEM7OztPQUdHO0lBQ0gsNkNBQTZDO0lBQ25DLFVBQVUsS0FBVSxDQUFDO0lBRS9COzs7T0FHRztJQUNILDZDQUE2QztJQUNuQyxrQkFBa0IsS0FBVSxDQUFDO0lBRXZDOzs7O09BSUc7SUFDSCw2Q0FBNkM7SUFDbkMsZ0JBQWdCLEtBQVUsQ0FBQztJQUVyQzs7O09BR0c7SUFDSCw2Q0FBNkM7SUFDdEMsYUFBYSxLQUFVLENBQUM7SUFFL0I7OztPQUdHO0lBQ0gsNkNBQTZDO0lBQ3RDLGNBQWMsS0FBVSxDQUFDO0lBRWhDOzs7Ozs7Ozs7Ozs7T0FZRztJQUNJLFVBQVU7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7QUF6RkgsMEJBMEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IGJ1aWxkZXIgY29uZmlndXJhdGlvbnMuXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJ1aWxkZXIge1xuICBwcm90ZWN0ZWQgcHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYnVpbGRlciBmb3IgYSBzcGVjaWZpZWQgcHJvamVjdC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIHRoZSBidWlsZGVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBidWlsZGVyIHRvIHRoZSBwcm9qZWN0cyBidWlsZGVyIHJlZ2lzdHJ5LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkQnVpbGRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QucmVnaXN0ZXJCdWlsZGVyKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGVtcGxhdGUgZmlsZXMgdG8gdGhlIGJ1aWxkZXIncyBwcm9qZWN0IGRpcmVjdG9yeS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gIHByb3RlY3RlZCBhZGRUZW1wbGF0ZXMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHNldHRpbmdzIHNwZWNpZmljIHRvIHRoZSBidWlsZGVyIHdpdGhpbiB0aGUgcHJvamVjdC5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gIHByb3RlY3RlZCBhZGRTZXR0aW5ncygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgbnBtIHNjcmlwdHMgc3BlY2lmaWMgdG8gdGhlIGJ1aWxkZXIgd2l0aGluIHRoZSBwcm9qZWN0LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgcHJvdGVjdGVkIGFkZFNjcmlwdHMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbnN0YWxscyBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXMgZm9yIHRoZSBidWlsZGVyIGluIHRoZSBwcm9qZWN0LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgcHJvdGVjdGVkIGFkZERldkRlcGVuZGVuY2llcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGVudHJpZXMgdG8gdGhlIGAuZ2l0YXR0cmlidXRlc2AgZmlsZSBmb3IgdGhlIGJ1aWxkZXIgaW4gdGhlIHByb2plY3QuXG4gICAqIE92ZXJ3cml0ZSB0aGlzIGluIGNhc2UgdGhhdCBtYW51YWwgZW50cmllcyBuZWVkIHRvIGJlIGRvbmUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICBwcm90ZWN0ZWQgYWRkR2l0QXR0cmlidXRlcygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhvb2sgdG8gYmUgY2FsbGVkIGJlZm9yZSBzeW50aGVzaXMuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICBwdWJsaWMgcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhvb2sgdG8gYmUgY2FsbGVkIGFmdGVyIHN5bnRoZXNpcy5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gIHB1YmxpYyBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYnVpbGRlciBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBpbnRlbmRlZCB0byBiZSBjYWxsZWQgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIGVhY2ggY2hpbGQgY2xhc3NcbiAgICogdG8gc2V0IHVwIHRoZSBiYXNpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgYnVpbGRlci4gSXQgc2VxdWVudGlhbGx5IGNhbGxzXG4gICAqIGEgc2V0IG9mIHNldHVwIG1ldGhvZHMgd2hpY2ggcGVyZm9ybXMgc3BlY2lmaWMgY29uZmlndXJhdGlvbiB0YXNrcyBmb3IgdGhlIHByb2plY3QuXG4gICAqIFdlIGNhbm5vdCB1c2UgdGhlIHByZVN5bnRoZXNpemUgaG9vayBhcyBhdCB0aGlzIHBvaW50IGl0IGlzIHRvbyBsYXRlIHNldHRpbmcgYWxsIHVwLlxuICAgKlxuICAgKiAjIyMgVXNhZ2VcbiAgICogLSBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGluIGVhY2ggY2hpbGQncyBjb25zdHJ1Y3RvciBpbW1lZGlhdGVseSBhZnRlclxuICAgKiAgIGludm9raW5nIGBzdXBlcigpYCB0byBlbnN1cmUgdGhlIGJ1aWxkZXIgaXMgZnVsbHkgaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEJ1aWxkZXIoKTtcbiAgICB0aGlzLmFkZFRlbXBsYXRlcygpO1xuICAgIHRoaXMuYWRkU2V0dGluZ3MoKTtcbiAgICB0aGlzLmFkZFNjcmlwdHMoKTtcbiAgICB0aGlzLmFkZERldkRlcGVuZGVuY2llcygpO1xuICAgIHRoaXMuYWRkR2l0QXR0cmlidXRlcygpO1xuICB9XG59XG4iXX0=