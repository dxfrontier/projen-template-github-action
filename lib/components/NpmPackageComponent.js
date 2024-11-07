"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmPackageComponent = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnBtUGFja2FnZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL05wbVBhY2thZ2VDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7O0dBRUc7QUFDSCxNQUFhLG1CQUFtQjtJQUc5Qjs7O09BR0c7SUFDSCxZQUFZLE9BQTBCO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksY0FBYztRQUN4QixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLHNCQUFzQjtRQUNoQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxRQUFRO1FBQ2xCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQVksT0FBTztRQUNqQixPQUFPO1lBQ0wsTUFBTTtZQUNOLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULE9BQU87WUFDUCxRQUFRO1lBQ1IsU0FBUztZQUNULGNBQWM7WUFDZCxjQUFjO1lBQ2QsYUFBYTtZQUNiLFNBQVM7WUFDVCxNQUFNO1lBQ04sWUFBWTtZQUNaLFFBQVE7WUFDUixTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksR0FBRztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxhQUFhO1FBQ2xCLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDMUYsNkdBQTZHO1FBQzdHLDhCQUE4QjtRQUM5QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUs7UUFDVixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBakdELGtEQWlHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0IH0gZnJvbSAncHJvamVuL2xpYi90eXBlc2NyaXB0JztcbmltcG9ydCB7IElQcm9qZWN0Q29tcG9uZW50LCBQcm9qZW5TdGFuZGFyZFNjcmlwdCB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBOUE0gUGFja2FnZSB0ZW1wbGF0ZXMsIHNldHRpbmdzIGFuZCBucG0gc2NyaXB0cyBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBOcG1QYWNrYWdlQ29tcG9uZW50IGltcGxlbWVudHMgSVByb2plY3RDb21wb25lbnQge1xuICBwcml2YXRlIHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgTnBtIFBhY2thZ2UgQ29tcG9uZW50LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgdGhlIE5QTSBQYWNrYWdlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgZmlsZSBwYXRoIGZvciB0aGUgTlBNIFBhY2thZ2UgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGdldCBpZ25vcmVGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLm5wbWlnbm9yZSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIGZpbGUgcGF0aHMgZm9yIHRoZSBtaXNzaW5nIC5naXRhdHRyaWJ1dGVzIGZpbGUgZW50cmllcy5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGdpdEF0dHJpYnV0ZXNGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJy5lc2xpbnRyYy5qc29uJywgJ3RzY29uZmlnLmRldi5qc29uJywgJ3RzY29uZmlnLmpzb24nXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgbnBtIGZpbGVzIHRvIGJlIHBhY2thZ2VkIGZvciB0aGUgTlBNIFBhY2thZ2UuXG4gICAqL1xuICBwcml2YXRlIGdldCBucG1GaWxlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsnbGliJywgJ1JFQURNRS5tZCcsICdMSUNFTlNFJ107XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIG5wbSBzY3JpcHRzIHRvIGJlIHJlbW92ZWQgZnJvbSBOUE0gUGFja2FnZS5cbiAgICpcbiAgICogVGhlc2Ugc2NyaXB0cyBhcmUgYWRkZWQgYnkgUHJvamVuIG9uIHByb2plY3QgaW5pdGlhbGl6YXRpb25cbiAgICogYW5kIGFyZSBub3QgbmVlZGVkIGluIHRoaXMgcHJvamVjdC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHNjcmlwdHMoKTogUHJvamVuU3RhbmRhcmRTY3JpcHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdidW1wJyxcbiAgICAgICdjbG9iYmVyJyxcbiAgICAgICdjb21waWxlJyxcbiAgICAgICdkZWZhdWx0JyxcbiAgICAgICdlamVjdCcsXG4gICAgICAnZXNsaW50JyxcbiAgICAgICdwYWNrYWdlJyxcbiAgICAgICdwb3N0LWNvbXBpbGUnLFxuICAgICAgJ3Bvc3QtdXBncmFkZScsXG4gICAgICAncHJlLWNvbXBpbGUnLFxuICAgICAgJ3JlbGVhc2UnLFxuICAgICAgJ3Rlc3QnLFxuICAgICAgJ3Rlc3Q6d2F0Y2gnLFxuICAgICAgJ3VuYnVtcCcsXG4gICAgICAndXBncmFkZScsXG4gICAgICAnd2F0Y2gnLFxuICAgICAgJ3Byb2plbicsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHNldHRpbmdzIHRvIHRoZSBOUE0gUGFja2FnZSBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgYWRkKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5hZGRGaWVsZHMoe1xuICAgICAgZmlsZXM6IHRoaXMubnBtRmlsZXMsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgTlBNIFBhY2thZ2Ugc2NyaXB0cyBhc3NvY2lhdGVkIHdpdGggUHJvamVuIE5QTSBQYWNrYWdlIGluaXRpYWxpemF0aW9uLlxuICAgKi9cbiAgcHVibGljIHJlbW92ZVNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzY3JpcHQgb2YgdGhpcy5zY3JpcHRzKSB7XG4gICAgICB0aGlzLnByb2plY3QucmVtb3ZlU2NyaXB0KHNjcmlwdCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBgLmdpdGF0dHJpYnV0ZXNgIGZpbGUgdG8gdHJlYXQgTlBNIFBhY2thZ2UgY29tcG9uZW50IHJlbGF0ZWQgZmlsZXMgYXMgZ2VuZXJhdGVkIGNvZGUsIG9wdGltaXppbmcgZGlmZnMuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLmlnbm9yZUZpbGVQYXRofWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICAvLyBhcyB0aGUgZm9sbG93aW5nIGZpbGVzIGFyZSBub3QgYWRkZWQgYXV0b21hdGljYWxseSAoY29tcGFyZWQgdG8gY2FsbGluZyBgcHJvamVuYCBkaXJlY3RseSwgdGhlcmUgaXQgd29ya3MpXG4gICAgLy8gd2UgYWRkIHRoZXNlIGZpbGVzIG1hbnVhbGx5XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB0aGlzLmdpdEF0dHJpYnV0ZXNGaWxlUGF0aHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3ZhbHVlfWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgc2V0dXAgZm9yIHRoZSBEZXZDb250YWluZXIgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIHNldHVwKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkKCk7XG4gICAgdGhpcy5yZW1vdmVTY3JpcHRzKCk7XG4gICAgdGhpcy51cGRhdGVHaXRBdHRyaWJ1dGVzKCk7XG4gIH1cbn1cbiJdfQ==