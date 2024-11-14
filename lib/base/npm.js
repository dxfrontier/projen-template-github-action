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
        return ['.eslintrc.json', 'tsconfig.dev.json', 'tsconfig.json'];
    }
    /**
     * NPM file paths to be packaged for the NPM Package.
     * @return File paths for package.json file entry.
     * @protected
     */
    get npmFilePaths() {
        return ['lib', 'README.md', 'LICENSE'];
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
NpmPackageBase[_a] = { fqn: "projen-template-projects.NpmPackageBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBSXBDOzs7R0FHRztBQUNILE1BQXNCLGNBQWUsU0FBUSxpQkFBTztJQUNsRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsY0FBYztRQUMxQixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxZQUFZO1FBQ3hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBYyxhQUFhO1FBQ3pCLE9BQU87WUFDTCxNQUFNO1lBQ04sU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7WUFDUixTQUFTO1lBQ1QsY0FBYztZQUNkLGNBQWM7WUFDZCxhQUFhO1lBQ2IsU0FBUztZQUNULE1BQU07WUFDTixZQUFZO1lBQ1osUUFBUTtZQUNSLFNBQVM7WUFDVCxPQUFPO1lBQ1AsUUFBUTtTQUNULENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sV0FBVztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxhQUFhO1FBQ3JCLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRVMsZ0JBQWdCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFGLDZHQUE2RztRQUM3Ryw4QkFBOEI7UUFDOUIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlFLENBQUM7SUFDSCxDQUFDOztBQWhHSCx3Q0FpR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcbmltcG9ydCB7IFByb2plblN0YW5kYXJkU2NyaXB0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBOUE0gUGFja2FnZSBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnBtUGFja2FnZUJhc2UgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIE5QTSBQYWNrYWdlIGJ1aWxkZXIuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBOUE0gZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBOUE0gUGFja2FnZSBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gaWdub3JlIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5ucG1pZ25vcmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aHMgZm9yIHRoZSAuZ2l0YXR0cmlidXRlcyBmaWxlIGVudHJpZXMuXG4gICAqIFRoZXNlIGVudHJpZXMgYXJlIG5vdCBhZGRlZCBhdXRvbWF0aWNhbGx5IGJ5IHByb2plblxuICAgKiBhbmQgd2UgaGF2ZSBub3QgZXh0cmEgYnVpbGRlciBmb3IgdGhlc2UuIFNvIHdlIGhhbmRsZSB0aGVtIGhlcmUuXG4gICAqIEByZXR1cm4gRmlsZSBwYXRocyBmb3IgLmdpdGF0dHJpYnV0ZXMgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBnaXRBdHRyaWJ1dGVzRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWycuZXNsaW50cmMuanNvbicsICd0c2NvbmZpZy5kZXYuanNvbicsICd0c2NvbmZpZy5qc29uJ107XG4gIH1cblxuICAvKipcbiAgICogTlBNIGZpbGUgcGF0aHMgdG8gYmUgcGFja2FnZWQgZm9yIHRoZSBOUE0gUGFja2FnZS5cbiAgICogQHJldHVybiBGaWxlIHBhdGhzIGZvciBwYWNrYWdlLmpzb24gZmlsZSBlbnRyeS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBucG1GaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2xpYicsICdSRUFETUUubWQnLCAnTElDRU5TRSddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBucG0gc2NyaXB0cyB0byBiZSByZW1vdmVkIGZyb20gTlBNIFBhY2thZ2UuXG4gICAqIFRoZXNlIHNjcmlwdHMgYXJlIGFkZGVkIGJ5IFByb2plbiBvbiBwcm9qZWN0IGluaXRpYWxpemF0aW9uXG4gICAqIGFuZCBhcmUgbm90IG5lZWRlZCBmb3Igb3VyIHByb2plY3RzLlxuICAgKiBPdmVyd3JpdGUgdGhpcyBtZXRob2QgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgcHJvamVuIHN0YW5kYXJkIHNjcmlwdHMuXG4gICAqIEByZXR1cm4gUHJvamVuIHN0YW5kYXJkIHNjcmlwdCBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHByb2plblNjcmlwdHMoKTogUHJvamVuU3RhbmRhcmRTY3JpcHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdidW1wJyxcbiAgICAgICdjbG9iYmVyJyxcbiAgICAgICdjb21waWxlJyxcbiAgICAgICdkZWZhdWx0JyxcbiAgICAgICdlamVjdCcsXG4gICAgICAnZXNsaW50JyxcbiAgICAgICdwYWNrYWdlJyxcbiAgICAgICdwb3N0LWNvbXBpbGUnLFxuICAgICAgJ3Bvc3QtdXBncmFkZScsXG4gICAgICAncHJlLWNvbXBpbGUnLFxuICAgICAgJ3JlbGVhc2UnLFxuICAgICAgJ3Rlc3QnLFxuICAgICAgJ3Rlc3Q6d2F0Y2gnLFxuICAgICAgJ3VuYnVtcCcsXG4gICAgICAndXBncmFkZScsXG4gICAgICAnd2F0Y2gnLFxuICAgICAgJ3Byb2plbicsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHNldHRpbmdzIHNwZWNpZmljIHRvIHRoZSBidWlsZGVyIHdpdGhpbiB0aGUgcHJvamVjdC5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5hZGRGaWVsZHMoe1xuICAgICAgZmlsZXM6IHRoaXMubnBtRmlsZVBhdGhzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIE5QTSBQYWNrYWdlIHNjcmlwdHMgYXNzb2NpYXRlZCB3aXRoIFByb2plbiBOUE0gUGFja2FnZSBpbml0aWFsaXphdGlvbi5cbiAgICogT3ZlcndyaXRlIHRoaXMgbWV0aG9kIGlmIHlvdSB3YW50IHRvIGtlZXAgdGhlIHByb2plbiBzdGFuZGFyZCBzY3JpcHRzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVtb3ZlU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiB0aGlzLnByb2plblNjcmlwdHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5yZW1vdmVTY3JpcHQoc2NyaXB0KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLmlnbm9yZUZpbGVQYXRofWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICAvLyBhcyB0aGUgZm9sbG93aW5nIGZpbGVzIGFyZSBub3QgYWRkZWQgYXV0b21hdGljYWxseSAoY29tcGFyZWQgdG8gY2FsbGluZyBgcHJvamVuYCBkaXJlY3RseSwgdGhlcmUgaXQgd29ya3MpXG4gICAgLy8gd2UgYWRkIHRoZXNlIGZpbGVzIG1hbnVhbGx5XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLmdpdEF0dHJpYnV0ZXNGaWxlUGF0aHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3ZhbHVlfWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==