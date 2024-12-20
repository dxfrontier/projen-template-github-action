"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmPackageBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const builder_1 = require("./builder");
/**
 * Base class for NPM Package builder implementing all relevant configuration.
 * @abstract
 */
class NpmPackageBase extends builder_1.Builder {
    /**
     * Initializes the base NPM Package builder.
     * @param project The project to configure NPM for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * File paths for the .gitattributes file entries.
     * These entries are not added automatically by projen
     * and we have not extra builder for these. So we handle them here.
     * @return File paths for .gitattributes entries.
     * @protected
     */
    get gitAttributesFilePaths() {
        return [];
    }
    /**
     * @override
     */
    get devDependencies() {
        return [];
    }
    /**
     * Getter retrieving the npm scripts to be removed from NPM Package.
     * These scripts are added by Projen on project initialization
     * and are not needed for our projects.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @return Projen standard script entries.
     * @protected
     */
    get projenScripts() {
        return [
            'bump',
            'clobber',
            'compile',
            'default',
            'eject',
            'eslint',
            'package',
            'post-compile',
            'post-upgrade',
            'pre-compile',
            'release',
            'test',
            'test:watch',
            'unbump',
            'upgrade',
            'watch',
            'projen',
        ];
    }
    /**
     * Configures settings specific to the builder within the project.
     * @protected
     */
    addSettings() {
        this.project.addFields({
            files: this.npmFilePaths,
        });
    }
    /**
     * Removes the NPM Package scripts associated with Projen NPM Package initialization.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @protected
     */
    removeScripts() {
        for (const script of this.projenScripts) {
            this.project.removeScript(script);
        }
    }
    addGitAttributes() {
        // as the following files are not added automatically (compared to calling `projen` directly, there it works)
        // we add these files manually
        for (const value of this.gitAttributesFilePaths) {
            this.project.gitattributes.addAttributes(`/${value}`, 'linguist-generated');
        }
    }
    /**
     * @override
     */
    addDevDependencies() {
        this.project.addDevDeps(...this.devDependencies);
    }
}
exports.NpmPackageBase = NpmPackageBase;
_a = JSII_RTTI_SYMBOL_1;
NpmPackageBase[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmPackageBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBSXBDOzs7R0FHRztBQUNILE1BQXNCLGNBQWUsU0FBUSxpQkFBTztJQUNsRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBVUQ7O09BRUc7SUFDSCxJQUFjLGVBQWU7UUFDM0IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILElBQWMsYUFBYTtRQUN6QixPQUFPO1lBQ0wsTUFBTTtZQUNOLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULE9BQU87WUFDUCxRQUFRO1lBQ1IsU0FBUztZQUNULGNBQWM7WUFDZCxjQUFjO1lBQ2QsYUFBYTtZQUNiLFNBQVM7WUFDVCxNQUFNO1lBQ04sWUFBWTtZQUNaLFFBQVE7WUFDUixTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNPLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sYUFBYTtRQUNyQixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUVTLGdCQUFnQjtRQUN4Qiw2R0FBNkc7UUFDN0csOEJBQThCO1FBQzlCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ08sa0JBQWtCO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O0FBbkdILHdDQW9HQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgUHJvamVuU3RhbmRhcmRTY3JpcHQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIE5QTSBQYWNrYWdlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOcG1QYWNrYWdlQmFzZSBleHRlbmRzIEJ1aWxkZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGJhc2UgTlBNIFBhY2thZ2UgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIE5QTSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGhzIGZvciB0aGUgLmdpdGF0dHJpYnV0ZXMgZmlsZSBlbnRyaWVzLlxuICAgKiBUaGVzZSBlbnRyaWVzIGFyZSBub3QgYWRkZWQgYXV0b21hdGljYWxseSBieSBwcm9qZW5cbiAgICogYW5kIHdlIGhhdmUgbm90IGV4dHJhIGJ1aWxkZXIgZm9yIHRoZXNlLiBTbyB3ZSBoYW5kbGUgdGhlbSBoZXJlLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aHMgZm9yIC5naXRhdHRyaWJ1dGVzIGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZ2l0QXR0cmlidXRlc0ZpbGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIE5QTSBmaWxlIHBhdGhzIHRvIGJlIHBhY2thZ2VkIGZvciB0aGUgTlBNIFBhY2thZ2UuXG4gICAqIEByZXR1cm4gRmlsZSBwYXRocyBmb3IgcGFja2FnZS5qc29uIGZpbGUgZW50cnkuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IG5wbUZpbGVQYXRocygpOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGRldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBucG0gc2NyaXB0cyB0byBiZSByZW1vdmVkIGZyb20gTlBNIFBhY2thZ2UuXG4gICAqIFRoZXNlIHNjcmlwdHMgYXJlIGFkZGVkIGJ5IFByb2plbiBvbiBwcm9qZWN0IGluaXRpYWxpemF0aW9uXG4gICAqIGFuZCBhcmUgbm90IG5lZWRlZCBmb3Igb3VyIHByb2plY3RzLlxuICAgKiBPdmVyd3JpdGUgdGhpcyBtZXRob2QgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgcHJvamVuIHN0YW5kYXJkIHNjcmlwdHMuXG4gICAqIEByZXR1cm4gUHJvamVuIHN0YW5kYXJkIHNjcmlwdCBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHByb2plblNjcmlwdHMoKTogUHJvamVuU3RhbmRhcmRTY3JpcHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdidW1wJyxcbiAgICAgICdjbG9iYmVyJyxcbiAgICAgICdjb21waWxlJyxcbiAgICAgICdkZWZhdWx0JyxcbiAgICAgICdlamVjdCcsXG4gICAgICAnZXNsaW50JyxcbiAgICAgICdwYWNrYWdlJyxcbiAgICAgICdwb3N0LWNvbXBpbGUnLFxuICAgICAgJ3Bvc3QtdXBncmFkZScsXG4gICAgICAncHJlLWNvbXBpbGUnLFxuICAgICAgJ3JlbGVhc2UnLFxuICAgICAgJ3Rlc3QnLFxuICAgICAgJ3Rlc3Q6d2F0Y2gnLFxuICAgICAgJ3VuYnVtcCcsXG4gICAgICAndXBncmFkZScsXG4gICAgICAnd2F0Y2gnLFxuICAgICAgJ3Byb2plbicsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHNldHRpbmdzIHNwZWNpZmljIHRvIHRoZSBidWlsZGVyIHdpdGhpbiB0aGUgcHJvamVjdC5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5hZGRGaWVsZHMoe1xuICAgICAgZmlsZXM6IHRoaXMubnBtRmlsZVBhdGhzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIE5QTSBQYWNrYWdlIHNjcmlwdHMgYXNzb2NpYXRlZCB3aXRoIFByb2plbiBOUE0gUGFja2FnZSBpbml0aWFsaXphdGlvbi5cbiAgICogT3ZlcndyaXRlIHRoaXMgbWV0aG9kIGlmIHlvdSB3YW50IHRvIGtlZXAgdGhlIHByb2plbiBzdGFuZGFyZCBzY3JpcHRzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVtb3ZlU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiB0aGlzLnByb2plblNjcmlwdHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5yZW1vdmVTY3JpcHQoc2NyaXB0KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICAvLyBhcyB0aGUgZm9sbG93aW5nIGZpbGVzIGFyZSBub3QgYWRkZWQgYXV0b21hdGljYWxseSAoY29tcGFyZWQgdG8gY2FsbGluZyBgcHJvamVuYCBkaXJlY3RseSwgdGhlcmUgaXQgd29ya3MpXG4gICAgLy8gd2UgYWRkIHRoZXNlIGZpbGVzIG1hbnVhbGx5XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLmdpdEF0dHJpYnV0ZXNGaWxlUGF0aHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3ZhbHVlfWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkRGV2RGVwZW5kZW5jaWVzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5hZGREZXZEZXBzKC4uLnRoaXMuZGV2RGVwZW5kZW5jaWVzKTtcbiAgfVxufVxuIl19