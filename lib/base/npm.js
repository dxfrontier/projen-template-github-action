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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBSXBDOzs7R0FHRztBQUNILE1BQXNCLGNBQWUsU0FBUSxpQkFBTztJQUNsRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBVUQ7Ozs7Ozs7T0FPRztJQUNILElBQWMsYUFBYTtRQUN6QixPQUFPO1lBQ0wsTUFBTTtZQUNOLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULE9BQU87WUFDUCxRQUFRO1lBQ1IsU0FBUztZQUNULGNBQWM7WUFDZCxjQUFjO1lBQ2QsYUFBYTtZQUNiLFNBQVM7WUFDVCxNQUFNO1lBQ04sWUFBWTtZQUNaLFFBQVE7WUFDUixTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNPLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sYUFBYTtRQUNyQixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUVTLGdCQUFnQjtRQUN4Qiw2R0FBNkc7UUFDN0csOEJBQThCO1FBQzlCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQzs7QUFyRkgsd0NBc0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBQcm9qZW5TdGFuZGFyZFNjcmlwdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgTlBNIFBhY2thZ2UgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5wbVBhY2thZ2VCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBOUE0gUGFja2FnZSBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgTlBNIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aHMgZm9yIHRoZSAuZ2l0YXR0cmlidXRlcyBmaWxlIGVudHJpZXMuXG4gICAqIFRoZXNlIGVudHJpZXMgYXJlIG5vdCBhZGRlZCBhdXRvbWF0aWNhbGx5IGJ5IHByb2plblxuICAgKiBhbmQgd2UgaGF2ZSBub3QgZXh0cmEgYnVpbGRlciBmb3IgdGhlc2UuIFNvIHdlIGhhbmRsZSB0aGVtIGhlcmUuXG4gICAqIEByZXR1cm4gRmlsZSBwYXRocyBmb3IgLmdpdGF0dHJpYnV0ZXMgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBnaXRBdHRyaWJ1dGVzRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogTlBNIGZpbGUgcGF0aHMgdG8gYmUgcGFja2FnZWQgZm9yIHRoZSBOUE0gUGFja2FnZS5cbiAgICogQHJldHVybiBGaWxlIHBhdGhzIGZvciBwYWNrYWdlLmpzb24gZmlsZSBlbnRyeS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgbnBtRmlsZVBhdGhzKCk6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgbnBtIHNjcmlwdHMgdG8gYmUgcmVtb3ZlZCBmcm9tIE5QTSBQYWNrYWdlLlxuICAgKiBUaGVzZSBzY3JpcHRzIGFyZSBhZGRlZCBieSBQcm9qZW4gb24gcHJvamVjdCBpbml0aWFsaXphdGlvblxuICAgKiBhbmQgYXJlIG5vdCBuZWVkZWQgZm9yIG91ciBwcm9qZWN0cy5cbiAgICogT3ZlcndyaXRlIHRoaXMgbWV0aG9kIGlmIHlvdSB3YW50IHRvIGtlZXAgdGhlIHByb2plbiBzdGFuZGFyZCBzY3JpcHRzLlxuICAgKiBAcmV0dXJuIFByb2plbiBzdGFuZGFyZCBzY3JpcHQgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBwcm9qZW5TY3JpcHRzKCk6IFByb2plblN0YW5kYXJkU2NyaXB0W10ge1xuICAgIHJldHVybiBbXG4gICAgICAnYnVtcCcsXG4gICAgICAnY2xvYmJlcicsXG4gICAgICAnY29tcGlsZScsXG4gICAgICAnZGVmYXVsdCcsXG4gICAgICAnZWplY3QnLFxuICAgICAgJ2VzbGludCcsXG4gICAgICAncGFja2FnZScsXG4gICAgICAncG9zdC1jb21waWxlJyxcbiAgICAgICdwb3N0LXVwZ3JhZGUnLFxuICAgICAgJ3ByZS1jb21waWxlJyxcbiAgICAgICdyZWxlYXNlJyxcbiAgICAgICd0ZXN0JyxcbiAgICAgICd0ZXN0OndhdGNoJyxcbiAgICAgICd1bmJ1bXAnLFxuICAgICAgJ3VwZ3JhZGUnLFxuICAgICAgJ3dhdGNoJyxcbiAgICAgICdwcm9qZW4nLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyBzZXR0aW5ncyBzcGVjaWZpYyB0byB0aGUgYnVpbGRlciB3aXRoaW4gdGhlIHByb2plY3QuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBhZGRTZXR0aW5ncygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuYWRkRmllbGRzKHtcbiAgICAgIGZpbGVzOiB0aGlzLm5wbUZpbGVQYXRocyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBOUE0gUGFja2FnZSBzY3JpcHRzIGFzc29jaWF0ZWQgd2l0aCBQcm9qZW4gTlBNIFBhY2thZ2UgaW5pdGlhbGl6YXRpb24uXG4gICAqIE92ZXJ3cml0ZSB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBrZWVwIHRoZSBwcm9qZW4gc3RhbmRhcmQgc2NyaXB0cy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIHJlbW92ZVNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzY3JpcHQgb2YgdGhpcy5wcm9qZW5TY3JpcHRzKSB7XG4gICAgICB0aGlzLnByb2plY3QucmVtb3ZlU2NyaXB0KHNjcmlwdCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFkZEdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgLy8gYXMgdGhlIGZvbGxvd2luZyBmaWxlcyBhcmUgbm90IGFkZGVkIGF1dG9tYXRpY2FsbHkgKGNvbXBhcmVkIHRvIGNhbGxpbmcgYHByb2plbmAgZGlyZWN0bHksIHRoZXJlIGl0IHdvcmtzKVxuICAgIC8vIHdlIGFkZCB0aGVzZSBmaWxlcyBtYW51YWxseVxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy5naXRBdHRyaWJ1dGVzRmlsZVBhdGhzKSB7XG4gICAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt2YWx1ZX1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=