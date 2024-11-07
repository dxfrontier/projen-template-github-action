"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmPackageComponent = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
/**
 * Configures the NPM Package templates, settings and npm scripts for the project.
 */
class NpmPackageComponent {
    /**
     * Initializes the Npm Package Component.
     * @param project The project to configure the NPM Package for.
     */
    constructor(project) {
        this.project = project;
    }
    /**
     * Getter retrieving the file path for the NPM Package ignore configuration.
     */
    get ignoreFilePath() {
        return '.npmignore';
    }
    /**
     * Getter retrieving the file paths for the missing .gitattributes file entries.
     */
    get gitAttributesFilePaths() {
        return ['.eslintrc.json', 'tsconfig.dev.json', 'tsconfig.json'];
    }
    /**
     * Getter retrieving the npm files to be packaged for the NPM Package.
     */
    get npmFiles() {
        return ['lib', 'README.md', 'LICENSE'];
    }
    /**
     * Getter retrieving the npm scripts to be removed from NPM Package.
     *
     * These scripts are added by Projen on project initialization
     * and are not needed in this project.
     */
    get scripts() {
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
     * Adds settings to the NPM Package component.
     */
    add() {
        this.project.addFields({
            files: this.npmFiles,
        });
    }
    /**
     * Removes the NPM Package scripts associated with Projen NPM Package initialization.
     */
    removeScripts() {
        for (const script of this.scripts) {
            this.project.removeScript(script);
        }
    }
    /**
     * Configures the `.gitattributes` file to treat NPM Package component related files as generated code, optimizing diffs.
     */
    updateGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.ignoreFilePath}`, 'linguist-generated');
        // as the following files are not added automatically (compared to calling `projen` directly, there it works)
        // we add these files manually
        for (const value of this.gitAttributesFilePaths) {
            this.project.gitattributes.addAttributes(`/${value}`, 'linguist-generated');
        }
    }
    /**
     * Executes setup for the DevContainer component.
     */
    setup() {
        this.add();
        this.removeScripts();
        this.updateGitAttributes();
    }
}
exports.NpmPackageComponent = NpmPackageComponent;
_a = JSII_RTTI_SYMBOL_1;
NpmPackageComponent[_a] = { fqn: "projen-template-github-action.NpmPackageComponent", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnBtUGFja2FnZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL05wbVBhY2thZ2VDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTs7R0FFRztBQUNILE1BQWEsbUJBQW1CO0lBRzlCOzs7T0FHRztJQUNILFlBQVksT0FBMEI7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxjQUFjO1FBQ3hCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksc0JBQXNCO1FBQ2hDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLFFBQVE7UUFDbEIsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBWSxPQUFPO1FBQ2pCLE9BQU87WUFDTCxNQUFNO1lBQ04sU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7WUFDUixTQUFTO1lBQ1QsY0FBYztZQUNkLGNBQWM7WUFDZCxhQUFhO1lBQ2IsU0FBUztZQUNULE1BQU07WUFDTixZQUFZO1lBQ1osUUFBUTtZQUNSLFNBQVM7WUFDVCxPQUFPO1lBQ1AsUUFBUTtTQUNULENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWE7UUFDbEIsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFDRDs7T0FFRztJQUNJLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUMxRiw2R0FBNkc7UUFDN0csOEJBQThCO1FBQzlCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNWLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOztBQWhHSCxrREFpR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdCB9IGZyb20gJ3Byb2plbi9saWIvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBJUHJvamVjdENvbXBvbmVudCwgUHJvamVuU3RhbmRhcmRTY3JpcHQgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgTlBNIFBhY2thZ2UgdGVtcGxhdGVzLCBzZXR0aW5ncyBhbmQgbnBtIHNjcmlwdHMgZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTnBtUGFja2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIElQcm9qZWN0Q29tcG9uZW50IHtcbiAgcHJpdmF0ZSBwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIE5wbSBQYWNrYWdlIENvbXBvbmVudC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIHRoZSBOUE0gUGFja2FnZSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIGZpbGUgcGF0aCBmb3IgdGhlIE5QTSBQYWNrYWdlIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaWdub3JlRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5ucG1pZ25vcmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBmaWxlIHBhdGhzIGZvciB0aGUgbWlzc2luZyAuZ2l0YXR0cmlidXRlcyBmaWxlIGVudHJpZXMuXG4gICAqL1xuICBwcml2YXRlIGdldCBnaXRBdHRyaWJ1dGVzRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWycuZXNsaW50cmMuanNvbicsICd0c2NvbmZpZy5kZXYuanNvbicsICd0c2NvbmZpZy5qc29uJ107XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIG5wbSBmaWxlcyB0byBiZSBwYWNrYWdlZCBmb3IgdGhlIE5QTSBQYWNrYWdlLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgbnBtRmlsZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2xpYicsICdSRUFETUUubWQnLCAnTElDRU5TRSddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBucG0gc2NyaXB0cyB0byBiZSByZW1vdmVkIGZyb20gTlBNIFBhY2thZ2UuXG4gICAqXG4gICAqIFRoZXNlIHNjcmlwdHMgYXJlIGFkZGVkIGJ5IFByb2plbiBvbiBwcm9qZWN0IGluaXRpYWxpemF0aW9uXG4gICAqIGFuZCBhcmUgbm90IG5lZWRlZCBpbiB0aGlzIHByb2plY3QuXG4gICAqL1xuICBwcml2YXRlIGdldCBzY3JpcHRzKCk6IFByb2plblN0YW5kYXJkU2NyaXB0W10ge1xuICAgIHJldHVybiBbXG4gICAgICAnYnVtcCcsXG4gICAgICAnY2xvYmJlcicsXG4gICAgICAnY29tcGlsZScsXG4gICAgICAnZGVmYXVsdCcsXG4gICAgICAnZWplY3QnLFxuICAgICAgJ2VzbGludCcsXG4gICAgICAncGFja2FnZScsXG4gICAgICAncG9zdC1jb21waWxlJyxcbiAgICAgICdwb3N0LXVwZ3JhZGUnLFxuICAgICAgJ3ByZS1jb21waWxlJyxcbiAgICAgICdyZWxlYXNlJyxcbiAgICAgICd0ZXN0JyxcbiAgICAgICd0ZXN0OndhdGNoJyxcbiAgICAgICd1bmJ1bXAnLFxuICAgICAgJ3VwZ3JhZGUnLFxuICAgICAgJ3dhdGNoJyxcbiAgICAgICdwcm9qZW4nLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBzZXR0aW5ncyB0byB0aGUgTlBNIFBhY2thZ2UgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIGFkZCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuYWRkRmllbGRzKHtcbiAgICAgIGZpbGVzOiB0aGlzLm5wbUZpbGVzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIE5QTSBQYWNrYWdlIHNjcmlwdHMgYXNzb2NpYXRlZCB3aXRoIFByb2plbiBOUE0gUGFja2FnZSBpbml0aWFsaXphdGlvbi5cbiAgICovXG4gIHB1YmxpYyByZW1vdmVTY3JpcHRzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc2NyaXB0IG9mIHRoaXMuc2NyaXB0cykge1xuICAgICAgdGhpcy5wcm9qZWN0LnJlbW92ZVNjcmlwdChzY3JpcHQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgYC5naXRhdHRyaWJ1dGVzYCBmaWxlIHRvIHRyZWF0IE5QTSBQYWNrYWdlIGNvbXBvbmVudCByZWxhdGVkIGZpbGVzIGFzIGdlbmVyYXRlZCBjb2RlLCBvcHRpbWl6aW5nIGRpZmZzLlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZUdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dGhpcy5pZ25vcmVGaWxlUGF0aH1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gICAgLy8gYXMgdGhlIGZvbGxvd2luZyBmaWxlcyBhcmUgbm90IGFkZGVkIGF1dG9tYXRpY2FsbHkgKGNvbXBhcmVkIHRvIGNhbGxpbmcgYHByb2plbmAgZGlyZWN0bHksIHRoZXJlIGl0IHdvcmtzKVxuICAgIC8vIHdlIGFkZCB0aGVzZSBmaWxlcyBtYW51YWxseVxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdGhpcy5naXRBdHRyaWJ1dGVzRmlsZVBhdGhzKSB7XG4gICAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt2YWx1ZX1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHNldHVwIGZvciB0aGUgRGV2Q29udGFpbmVyIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZCgpO1xuICAgIHRoaXMucmVtb3ZlU2NyaXB0cygpO1xuICAgIHRoaXMudXBkYXRlR2l0QXR0cmlidXRlcygpO1xuICB9XG59XG4iXX0=