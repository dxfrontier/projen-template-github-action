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
        return ['ts-node@^10.9.2', '@types/node@^20.9.3', 'projen@^0.9.3'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBSXBDOzs7R0FHRztBQUNILE1BQXNCLGNBQWUsU0FBUSxpQkFBTztJQUNsRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBVUQ7O09BRUc7SUFDSCxJQUFjLGVBQWU7UUFDM0IsT0FBTyxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBYyxhQUFhO1FBQ3pCLE9BQU87WUFDTCxNQUFNO1lBQ04sU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7WUFDUixTQUFTO1lBQ1QsY0FBYztZQUNkLGNBQWM7WUFDZCxhQUFhO1lBQ2IsU0FBUztZQUNULE1BQU07WUFDTixZQUFZO1lBQ1osUUFBUTtZQUNSLFNBQVM7WUFDVCxPQUFPO1lBQ1AsUUFBUTtTQUNULENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sV0FBVztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxhQUFhO1FBQ3JCLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRVMsZ0JBQWdCO1FBQ3hCLDZHQUE2RztRQUM3Ryw4QkFBOEI7UUFDOUIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlFLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxrQkFBa0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7QUFuR0gsd0NBb0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBQcm9qZW5TdGFuZGFyZFNjcmlwdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgTlBNIFBhY2thZ2UgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5wbVBhY2thZ2VCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBOUE0gUGFja2FnZSBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgTlBNIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aHMgZm9yIHRoZSAuZ2l0YXR0cmlidXRlcyBmaWxlIGVudHJpZXMuXG4gICAqIFRoZXNlIGVudHJpZXMgYXJlIG5vdCBhZGRlZCBhdXRvbWF0aWNhbGx5IGJ5IHByb2plblxuICAgKiBhbmQgd2UgaGF2ZSBub3QgZXh0cmEgYnVpbGRlciBmb3IgdGhlc2UuIFNvIHdlIGhhbmRsZSB0aGVtIGhlcmUuXG4gICAqIEByZXR1cm4gRmlsZSBwYXRocyBmb3IgLmdpdGF0dHJpYnV0ZXMgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBnaXRBdHRyaWJ1dGVzRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogTlBNIGZpbGUgcGF0aHMgdG8gYmUgcGFja2FnZWQgZm9yIHRoZSBOUE0gUGFja2FnZS5cbiAgICogQHJldHVybiBGaWxlIHBhdGhzIGZvciBwYWNrYWdlLmpzb24gZmlsZSBlbnRyeS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgbnBtRmlsZVBhdGhzKCk6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWyd0cy1ub2RlQF4xMC45LjInLCAnQHR5cGVzL25vZGVAXjIwLjkuMycsICdwcm9qZW5AXjAuOS4zJ107XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIG5wbSBzY3JpcHRzIHRvIGJlIHJlbW92ZWQgZnJvbSBOUE0gUGFja2FnZS5cbiAgICogVGhlc2Ugc2NyaXB0cyBhcmUgYWRkZWQgYnkgUHJvamVuIG9uIHByb2plY3QgaW5pdGlhbGl6YXRpb25cbiAgICogYW5kIGFyZSBub3QgbmVlZGVkIGZvciBvdXIgcHJvamVjdHMuXG4gICAqIE92ZXJ3cml0ZSB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBrZWVwIHRoZSBwcm9qZW4gc3RhbmRhcmQgc2NyaXB0cy5cbiAgICogQHJldHVybiBQcm9qZW4gc3RhbmRhcmQgc2NyaXB0IGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcHJvamVuU2NyaXB0cygpOiBQcm9qZW5TdGFuZGFyZFNjcmlwdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2J1bXAnLFxuICAgICAgJ2Nsb2JiZXInLFxuICAgICAgJ2NvbXBpbGUnLFxuICAgICAgJ2RlZmF1bHQnLFxuICAgICAgJ2VqZWN0JyxcbiAgICAgICdlc2xpbnQnLFxuICAgICAgJ3BhY2thZ2UnLFxuICAgICAgJ3Bvc3QtY29tcGlsZScsXG4gICAgICAncG9zdC11cGdyYWRlJyxcbiAgICAgICdwcmUtY29tcGlsZScsXG4gICAgICAncmVsZWFzZScsXG4gICAgICAndGVzdCcsXG4gICAgICAndGVzdDp3YXRjaCcsXG4gICAgICAndW5idW1wJyxcbiAgICAgICd1cGdyYWRlJyxcbiAgICAgICd3YXRjaCcsXG4gICAgICAncHJvamVuJyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgc2V0dGluZ3Mgc3BlY2lmaWMgdG8gdGhlIGJ1aWxkZXIgd2l0aGluIHRoZSBwcm9qZWN0LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmFkZEZpZWxkcyh7XG4gICAgICBmaWxlczogdGhpcy5ucG1GaWxlUGF0aHMsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgTlBNIFBhY2thZ2Ugc2NyaXB0cyBhc3NvY2lhdGVkIHdpdGggUHJvamVuIE5QTSBQYWNrYWdlIGluaXRpYWxpemF0aW9uLlxuICAgKiBPdmVyd3JpdGUgdGhpcyBtZXRob2QgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgcHJvamVuIHN0YW5kYXJkIHNjcmlwdHMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCByZW1vdmVTY3JpcHRzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc2NyaXB0IG9mIHRoaXMucHJvamVuU2NyaXB0cykge1xuICAgICAgdGhpcy5wcm9qZWN0LnJlbW92ZVNjcmlwdChzY3JpcHQpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRHaXRBdHRyaWJ1dGVzKCk6IHZvaWQge1xuICAgIC8vIGFzIHRoZSBmb2xsb3dpbmcgZmlsZXMgYXJlIG5vdCBhZGRlZCBhdXRvbWF0aWNhbGx5IChjb21wYXJlZCB0byBjYWxsaW5nIGBwcm9qZW5gIGRpcmVjdGx5LCB0aGVyZSBpdCB3b3JrcylcbiAgICAvLyB3ZSBhZGQgdGhlc2UgZmlsZXMgbWFudWFsbHlcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuZ2l0QXR0cmlidXRlc0ZpbGVQYXRocykge1xuICAgICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dmFsdWV9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBhZGREZXZEZXBlbmRlbmNpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmFkZERldkRlcHMoLi4udGhpcy5kZXZEZXBlbmRlbmNpZXMpO1xuICB9XG59XG4iXX0=