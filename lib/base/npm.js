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
        return ['ts-node@^10.9.2', '@types/node@^20.9.3', 'projen'];
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
    /**
     * @override
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvbnBtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBSXBDOzs7R0FHRztBQUNILE1BQXNCLGNBQWUsU0FBUSxpQkFBTztJQUNsRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBYyxzQkFBc0I7UUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBVUQ7O09BRUc7SUFDSCxJQUFjLGVBQWU7UUFDM0IsT0FBTyxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBYyxhQUFhO1FBQ3pCLE9BQU87WUFDTCxNQUFNO1lBQ04sU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7WUFDUixTQUFTO1lBQ1QsY0FBYztZQUNkLGNBQWM7WUFDZCxhQUFhO1lBQ2IsU0FBUztZQUNULE1BQU07WUFDTixZQUFZO1lBQ1osUUFBUTtZQUNSLFNBQVM7WUFDVCxPQUFPO1lBQ1AsUUFBUTtTQUNULENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sV0FBVztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxhQUFhO1FBQ3JCLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxnQkFBZ0I7UUFDeEIsNkdBQTZHO1FBQzdHLDhCQUE4QjtRQUM5QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLGtCQUFrQjtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRCxDQUFDOztBQXRHSCx3Q0F1R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcbmltcG9ydCB7IFByb2plblN0YW5kYXJkU2NyaXB0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBOUE0gUGFja2FnZSBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnBtUGFja2FnZUJhc2UgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIE5QTSBQYWNrYWdlIGJ1aWxkZXIuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBOUE0gZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRocyBmb3IgdGhlIC5naXRhdHRyaWJ1dGVzIGZpbGUgZW50cmllcy5cbiAgICogVGhlc2UgZW50cmllcyBhcmUgbm90IGFkZGVkIGF1dG9tYXRpY2FsbHkgYnkgcHJvamVuXG4gICAqIGFuZCB3ZSBoYXZlIG5vdCBleHRyYSBidWlsZGVyIGZvciB0aGVzZS4gU28gd2UgaGFuZGxlIHRoZW0gaGVyZS5cbiAgICogQHJldHVybiBGaWxlIHBhdGhzIGZvciAuZ2l0YXR0cmlidXRlcyBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGdpdEF0dHJpYnV0ZXNGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOUE0gZmlsZSBwYXRocyB0byBiZSBwYWNrYWdlZCBmb3IgdGhlIE5QTSBQYWNrYWdlLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aHMgZm9yIHBhY2thZ2UuanNvbiBmaWxlIGVudHJ5LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBucG1GaWxlUGF0aHMoKTogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBkZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ3RzLW5vZGVAXjEwLjkuMicsICdAdHlwZXMvbm9kZUBeMjAuOS4zJywgJ3Byb2plbiddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBucG0gc2NyaXB0cyB0byBiZSByZW1vdmVkIGZyb20gTlBNIFBhY2thZ2UuXG4gICAqIFRoZXNlIHNjcmlwdHMgYXJlIGFkZGVkIGJ5IFByb2plbiBvbiBwcm9qZWN0IGluaXRpYWxpemF0aW9uXG4gICAqIGFuZCBhcmUgbm90IG5lZWRlZCBmb3Igb3VyIHByb2plY3RzLlxuICAgKiBPdmVyd3JpdGUgdGhpcyBtZXRob2QgaWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgcHJvamVuIHN0YW5kYXJkIHNjcmlwdHMuXG4gICAqIEByZXR1cm4gUHJvamVuIHN0YW5kYXJkIHNjcmlwdCBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHByb2plblNjcmlwdHMoKTogUHJvamVuU3RhbmRhcmRTY3JpcHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdidW1wJyxcbiAgICAgICdjbG9iYmVyJyxcbiAgICAgICdjb21waWxlJyxcbiAgICAgICdkZWZhdWx0JyxcbiAgICAgICdlamVjdCcsXG4gICAgICAnZXNsaW50JyxcbiAgICAgICdwYWNrYWdlJyxcbiAgICAgICdwb3N0LWNvbXBpbGUnLFxuICAgICAgJ3Bvc3QtdXBncmFkZScsXG4gICAgICAncHJlLWNvbXBpbGUnLFxuICAgICAgJ3JlbGVhc2UnLFxuICAgICAgJ3Rlc3QnLFxuICAgICAgJ3Rlc3Q6d2F0Y2gnLFxuICAgICAgJ3VuYnVtcCcsXG4gICAgICAndXBncmFkZScsXG4gICAgICAnd2F0Y2gnLFxuICAgICAgJ3Byb2plbicsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHNldHRpbmdzIHNwZWNpZmljIHRvIHRoZSBidWlsZGVyIHdpdGhpbiB0aGUgcHJvamVjdC5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5hZGRGaWVsZHMoe1xuICAgICAgZmlsZXM6IHRoaXMubnBtRmlsZVBhdGhzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIE5QTSBQYWNrYWdlIHNjcmlwdHMgYXNzb2NpYXRlZCB3aXRoIFByb2plbiBOUE0gUGFja2FnZSBpbml0aWFsaXphdGlvbi5cbiAgICogT3ZlcndyaXRlIHRoaXMgbWV0aG9kIGlmIHlvdSB3YW50IHRvIGtlZXAgdGhlIHByb2plbiBzdGFuZGFyZCBzY3JpcHRzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVtb3ZlU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiB0aGlzLnByb2plblNjcmlwdHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5yZW1vdmVTY3JpcHQoc2NyaXB0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICAvLyBhcyB0aGUgZm9sbG93aW5nIGZpbGVzIGFyZSBub3QgYWRkZWQgYXV0b21hdGljYWxseSAoY29tcGFyZWQgdG8gY2FsbGluZyBgcHJvamVuYCBkaXJlY3RseSwgdGhlcmUgaXQgd29ya3MpXG4gICAgLy8gd2UgYWRkIHRoZXNlIGZpbGVzIG1hbnVhbGx5XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLmdpdEF0dHJpYnV0ZXNGaWxlUGF0aHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3ZhbHVlfWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkRGV2RGVwZW5kZW5jaWVzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5hZGREZXZEZXBzKC4uLnRoaXMuZGV2RGVwZW5kZW5jaWVzKTtcbiAgfVxufVxuIl19