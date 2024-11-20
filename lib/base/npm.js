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
     * File path to the NPM Package ignore configuration.
     * @return File path to ignore file.
     * @protected
     */
    get ignoreFilePath() {
        return '.npmignore';
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
        this.project.gitattributes.addAttributes(`/${this.ignoreFilePath}`, 'linguist-generated');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBSXBDOzs7R0FHRztBQUNILE1BQXNCLGNBQWUsU0FBUSxpQkFBTztJQUNsRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsY0FBYztRQUMxQixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsWUFBWTtRQUN4QixPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxJQUFjLGFBQWE7UUFDekIsT0FBTztZQUNMLE1BQU07WUFDTixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxPQUFPO1lBQ1AsUUFBUTtZQUNSLFNBQVM7WUFDVCxjQUFjO1lBQ2QsY0FBYztZQUNkLGFBQWE7WUFDYixTQUFTO1lBQ1QsTUFBTTtZQUNOLFlBQVk7WUFDWixRQUFRO1lBQ1IsU0FBUztZQUNULE9BQU87WUFDUCxRQUFRO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDTyxXQUFXO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLGFBQWE7UUFDckIsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFUyxnQkFBZ0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDMUYsNkdBQTZHO1FBQzdHLDhCQUE4QjtRQUM5QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7O0FBaEdILHdDQWlHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgUHJvamVuU3RhbmRhcmRTY3JpcHQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIE5QTSBQYWNrYWdlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOcG1QYWNrYWdlQmFzZSBleHRlbmRzIEJ1aWxkZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGJhc2UgTlBNIFBhY2thZ2UgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIE5QTSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIE5QTSBQYWNrYWdlIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBpZ25vcmUgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLm5wbWlnbm9yZSc7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRocyBmb3IgdGhlIC5naXRhdHRyaWJ1dGVzIGZpbGUgZW50cmllcy5cbiAgICogVGhlc2UgZW50cmllcyBhcmUgbm90IGFkZGVkIGF1dG9tYXRpY2FsbHkgYnkgcHJvamVuXG4gICAqIGFuZCB3ZSBoYXZlIG5vdCBleHRyYSBidWlsZGVyIGZvciB0aGVzZS4gU28gd2UgaGFuZGxlIHRoZW0gaGVyZS5cbiAgICogQHJldHVybiBGaWxlIHBhdGhzIGZvciAuZ2l0YXR0cmlidXRlcyBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGdpdEF0dHJpYnV0ZXNGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOUE0gZmlsZSBwYXRocyB0byBiZSBwYWNrYWdlZCBmb3IgdGhlIE5QTSBQYWNrYWdlLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aHMgZm9yIHBhY2thZ2UuanNvbiBmaWxlIGVudHJ5LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IG5wbUZpbGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnbGliJywgJ1JFQURNRS5tZCcsICdMSUNFTlNFJywgJy5qc2lpJ107XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIG5wbSBzY3JpcHRzIHRvIGJlIHJlbW92ZWQgZnJvbSBOUE0gUGFja2FnZS5cbiAgICogVGhlc2Ugc2NyaXB0cyBhcmUgYWRkZWQgYnkgUHJvamVuIG9uIHByb2plY3QgaW5pdGlhbGl6YXRpb25cbiAgICogYW5kIGFyZSBub3QgbmVlZGVkIGZvciBvdXIgcHJvamVjdHMuXG4gICAqIE92ZXJ3cml0ZSB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBrZWVwIHRoZSBwcm9qZW4gc3RhbmRhcmQgc2NyaXB0cy5cbiAgICogQHJldHVybiBQcm9qZW4gc3RhbmRhcmQgc2NyaXB0IGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcHJvamVuU2NyaXB0cygpOiBQcm9qZW5TdGFuZGFyZFNjcmlwdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2J1bXAnLFxuICAgICAgJ2Nsb2JiZXInLFxuICAgICAgJ2NvbXBpbGUnLFxuICAgICAgJ2RlZmF1bHQnLFxuICAgICAgJ2VqZWN0JyxcbiAgICAgICdlc2xpbnQnLFxuICAgICAgJ3BhY2thZ2UnLFxuICAgICAgJ3Bvc3QtY29tcGlsZScsXG4gICAgICAncG9zdC11cGdyYWRlJyxcbiAgICAgICdwcmUtY29tcGlsZScsXG4gICAgICAncmVsZWFzZScsXG4gICAgICAndGVzdCcsXG4gICAgICAndGVzdDp3YXRjaCcsXG4gICAgICAndW5idW1wJyxcbiAgICAgICd1cGdyYWRlJyxcbiAgICAgICd3YXRjaCcsXG4gICAgICAncHJvamVuJyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgc2V0dGluZ3Mgc3BlY2lmaWMgdG8gdGhlIGJ1aWxkZXIgd2l0aGluIHRoZSBwcm9qZWN0LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmFkZEZpZWxkcyh7XG4gICAgICBmaWxlczogdGhpcy5ucG1GaWxlUGF0aHMsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgTlBNIFBhY2thZ2Ugc2NyaXB0cyBhc3NvY2lhdGVkIHdpdGggUHJvamVuIE5QTSBQYWNrYWdlIGluaXRpYWxpemF0aW9uLlxuICAgKiBPdmVyd3JpdGUgdGhpcyBtZXRob2QgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgcHJvamVuIHN0YW5kYXJkIHNjcmlwdHMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCByZW1vdmVTY3JpcHRzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc2NyaXB0IG9mIHRoaXMucHJvamVuU2NyaXB0cykge1xuICAgICAgdGhpcy5wcm9qZWN0LnJlbW92ZVNjcmlwdChzY3JpcHQpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRHaXRBdHRyaWJ1dGVzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3RoaXMuaWdub3JlRmlsZVBhdGh9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICAgIC8vIGFzIHRoZSBmb2xsb3dpbmcgZmlsZXMgYXJlIG5vdCBhZGRlZCBhdXRvbWF0aWNhbGx5IChjb21wYXJlZCB0byBjYWxsaW5nIGBwcm9qZW5gIGRpcmVjdGx5LCB0aGVyZSBpdCB3b3JrcylcbiAgICAvLyB3ZSBhZGQgdGhlc2UgZmlsZXMgbWFudWFsbHlcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuZ2l0QXR0cmlidXRlc0ZpbGVQYXRocykge1xuICAgICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dmFsdWV9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICAgIH1cbiAgfVxufVxuIl19