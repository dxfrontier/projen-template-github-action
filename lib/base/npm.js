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
     * NPM file paths to be packaged for the NPM Package.
     * @return File paths for package.json file entry.
     * @protected
     */
    get npmFilePaths() {
        return ['lib', 'README.md', 'LICENSE', '.jsii'];
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
}
exports.NpmPackageBase = NpmPackageBase;
_a = JSII_RTTI_SYMBOL_1;
NpmPackageBase[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmPackageBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBSXBDOzs7R0FHRztBQUNILE1BQXNCLGNBQWUsU0FBUSxpQkFBTztJQUNsRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsWUFBWTtRQUN4QixPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxJQUFjLGFBQWE7UUFDekIsT0FBTztZQUNMLE1BQU07WUFDTixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxPQUFPO1lBQ1AsUUFBUTtZQUNSLFNBQVM7WUFDVCxjQUFjO1lBQ2QsY0FBYztZQUNkLGFBQWE7WUFDYixTQUFTO1lBQ1QsTUFBTTtZQUNOLFlBQVk7WUFDWixRQUFRO1lBQ1IsU0FBUztZQUNULE9BQU87WUFDUCxRQUFRO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDTyxXQUFXO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLGFBQWE7UUFDckIsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFUyxnQkFBZ0I7UUFDeEIsNkdBQTZHO1FBQzdHLDhCQUE4QjtRQUM5QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7O0FBdEZILHdDQXVGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgUHJvamVuU3RhbmRhcmRTY3JpcHQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIE5QTSBQYWNrYWdlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOcG1QYWNrYWdlQmFzZSBleHRlbmRzIEJ1aWxkZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGJhc2UgTlBNIFBhY2thZ2UgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIE5QTSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGhzIGZvciB0aGUgLmdpdGF0dHJpYnV0ZXMgZmlsZSBlbnRyaWVzLlxuICAgKiBUaGVzZSBlbnRyaWVzIGFyZSBub3QgYWRkZWQgYXV0b21hdGljYWxseSBieSBwcm9qZW5cbiAgICogYW5kIHdlIGhhdmUgbm90IGV4dHJhIGJ1aWxkZXIgZm9yIHRoZXNlLiBTbyB3ZSBoYW5kbGUgdGhlbSBoZXJlLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aHMgZm9yIC5naXRhdHRyaWJ1dGVzIGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZ2l0QXR0cmlidXRlc0ZpbGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIE5QTSBmaWxlIHBhdGhzIHRvIGJlIHBhY2thZ2VkIGZvciB0aGUgTlBNIFBhY2thZ2UuXG4gICAqIEByZXR1cm4gRmlsZSBwYXRocyBmb3IgcGFja2FnZS5qc29uIGZpbGUgZW50cnkuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgbnBtRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydsaWInLCAnUkVBRE1FLm1kJywgJ0xJQ0VOU0UnLCAnLmpzaWknXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgbnBtIHNjcmlwdHMgdG8gYmUgcmVtb3ZlZCBmcm9tIE5QTSBQYWNrYWdlLlxuICAgKiBUaGVzZSBzY3JpcHRzIGFyZSBhZGRlZCBieSBQcm9qZW4gb24gcHJvamVjdCBpbml0aWFsaXphdGlvblxuICAgKiBhbmQgYXJlIG5vdCBuZWVkZWQgZm9yIG91ciBwcm9qZWN0cy5cbiAgICogT3ZlcndyaXRlIHRoaXMgbWV0aG9kIGlmIHlvdSB3YW50IHRvIGtlZXAgdGhlIHByb2plbiBzdGFuZGFyZCBzY3JpcHRzLlxuICAgKiBAcmV0dXJuIFByb2plbiBzdGFuZGFyZCBzY3JpcHQgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBwcm9qZW5TY3JpcHRzKCk6IFByb2plblN0YW5kYXJkU2NyaXB0W10ge1xuICAgIHJldHVybiBbXG4gICAgICAnYnVtcCcsXG4gICAgICAnY2xvYmJlcicsXG4gICAgICAnY29tcGlsZScsXG4gICAgICAnZGVmYXVsdCcsXG4gICAgICAnZWplY3QnLFxuICAgICAgJ2VzbGludCcsXG4gICAgICAncGFja2FnZScsXG4gICAgICAncG9zdC1jb21waWxlJyxcbiAgICAgICdwb3N0LXVwZ3JhZGUnLFxuICAgICAgJ3ByZS1jb21waWxlJyxcbiAgICAgICdyZWxlYXNlJyxcbiAgICAgICd0ZXN0JyxcbiAgICAgICd0ZXN0OndhdGNoJyxcbiAgICAgICd1bmJ1bXAnLFxuICAgICAgJ3VwZ3JhZGUnLFxuICAgICAgJ3dhdGNoJyxcbiAgICAgICdwcm9qZW4nLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyBzZXR0aW5ncyBzcGVjaWZpYyB0byB0aGUgYnVpbGRlciB3aXRoaW4gdGhlIHByb2plY3QuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBhZGRTZXR0aW5ncygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuYWRkRmllbGRzKHtcbiAgICAgIGZpbGVzOiB0aGlzLm5wbUZpbGVQYXRocyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBOUE0gUGFja2FnZSBzY3JpcHRzIGFzc29jaWF0ZWQgd2l0aCBQcm9qZW4gTlBNIFBhY2thZ2UgaW5pdGlhbGl6YXRpb24uXG4gICAqIE92ZXJ3cml0ZSB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBrZWVwIHRoZSBwcm9qZW4gc3RhbmRhcmQgc2NyaXB0cy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIHJlbW92ZVNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzY3JpcHQgb2YgdGhpcy5wcm9qZW5TY3JpcHRzKSB7XG4gICAgICB0aGlzLnByb2plY3QucmVtb3ZlU2NyaXB0KHNjcmlwdCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFkZEdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgLy8gYXMgdGhlIGZvbGxvd2luZyBmaWxlcyBhcmUgbm90IGFkZGVkIGF1dG9tYXRpY2FsbHkgKGNvbXBhcmVkIHRvIGNhbGxpbmcgYHByb2plbmAgZGlyZWN0bHksIHRoZXJlIGl0IHdvcmtzKVxuICAgIC8vIHdlIGFkZCB0aGVzZSBmaWxlcyBtYW51YWxseVxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy5naXRBdHRyaWJ1dGVzRmlsZVBhdGhzKSB7XG4gICAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt2YWx1ZX1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=