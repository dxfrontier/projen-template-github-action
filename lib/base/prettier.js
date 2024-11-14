"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const javascript_1 = require("projen/lib/javascript");
const builder_1 = require("./builder");
/**
 * Base class for Prettier builder implementing all relevant configuration.
 * @abstract
 */
class PrettierBase extends builder_1.Builder {
    /**
     * Initializes the base Prettier builder.
     * @param project The project to configure Prettier for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * File path to the Prettier ignore configuration.
     * @return File path to ignore file.
     * @protected
     */
    get ignoreFilePath() {
        return '.prettierignore';
    }
    /**
     * File path to the Prettier settings configuration.
     * @return File path to setting file.
     * @protected
     */
    get settingsFilePath() {
        return '.prettierrc.json';
    }
    /**
     * File paths to the Prettier ignore entries.
     * @return File paths for ignore file entries.
     * @protected
     */
    get ignoreFilePaths() {
        return [
            '*.snap',
            '/.commitlintrc.ts',
            '/.devcontainer.json',
            '/.eslintrc.json',
            '/.gitattributes',
            '/.github/ISSUE_TEMPLATE/bug.yml',
            '/.github/ISSUE_TEMPLATE/feature.yml',
            '/.github/ISSUE_TEMPLATE/question.yml',
            '/.github/pull_request_template.md',
            '/.github/workflows/release.yml',
            '/.github/workflows/stale.yml',
            '/.gitignore',
            '/.husky/commit-msg',
            '/.husky/pre-commit',
            '/.npmignore',
            '/.prettierignore',
            '/.prettierrc.json',
            '/.projen/**',
            '/.projen/deps.json',
            '/.projen/files.json',
            '/.projen/tasks.json',
            '/.vscode/settings.json',
            '/cliff.toml',
            '/LICENSE',
            '/package-lock.json',
            '/package.json',
            '/tsconfig.dev.json',
            '/tsconfig.json',
        ];
    }
    /**
     * Settings for the Prettier configuration.
     * @return Entries for the settings file.
     * @protected
     */
    get settings() {
        return {
            files: '*.*',
            options: {
                semi: true,
                trailingComma: javascript_1.TrailingComma.ALL,
                singleQuote: true,
                printWidth: 120,
                tabWidth: 2,
            },
        };
    }
    /**
     * NPM scripts used by Prettier.
     * @return Npm script entries.
     * @protected
     */
    get scripts() {
        return {
            'format:fix': 'prettier . --write',
            'format:message': 'echo "Prettier started ..."',
        };
    }
    addSettings() {
        this.project.prettier?.addOverride(this.settings);
    }
    addScripts() {
        for (const [name, command] of Object.entries(this.scripts)) {
            this.project.addTask(name, { exec: command, receiveArgs: true });
        }
    }
    addGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.ignoreFilePath}`, 'linguist-generated');
        this.project.gitattributes.addAttributes(`/${this.settingsFilePath}`, 'linguist-generated');
    }
    /**
     * Executes post-synthesis tasks, focusing on updating the `.prettierignore` file with paths from `.gitattributes`.
     *
     * Tried scenarios:
     *   - Accessing attributes directly from `.gitattributes` file (but `.gitattributes` is private and inaccessible).
     *     This would be the most efficient and elegant solution as it allows us to add the entries using API.
     *   - Retrieving all files from the project (misses some files like `tsconfig.json`).
     *   - Letting each component add its paths individually (leaves out many standard files).
     *   - Manually adding paths (prone to errors).
     *   - Modifying `.prettierignore` after post-synthesis (but `.prettierignore` is readonly) and leads to test issues
     *     as these changes are not reflected in `syntesize()`.
     *
     * We will update it manually and cover it by tests cases checking if changes on the files are reflected here.
     */
    preSynthesize() {
        this.addPrettierIgnoreEntries();
    }
    /**
     * Adds entries to the `.prettierignore` file.
     * @private
     */
    addPrettierIgnoreEntries() {
        for (const entry of this.ignoreFilePaths) {
            this.project.prettier?.addIgnorePattern(entry);
        }
    }
}
exports.PrettierBase = PrettierBase;
_a = JSII_RTTI_SYMBOL_1;
PrettierBase[_a] = { fqn: "projen-template-projects.PrettierBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwRjtBQUMxRix1Q0FBb0M7QUFJcEM7OztHQUdHO0FBQ0gsTUFBc0IsWUFBYSxTQUFRLGlCQUFPO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQ0FBcUM7WUFDckMsc0NBQXNDO1lBQ3RDLG1DQUFtQztZQUNuQyxnQ0FBZ0M7WUFDaEMsOEJBQThCO1lBQzlCLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLFVBQVU7WUFDVixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixnQkFBZ0I7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsSUFBSTtnQkFDVixhQUFhLEVBQUUsMEJBQWEsQ0FBQyxHQUFHO2dCQUNoQyxXQUFXLEVBQUUsSUFBSTtnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLENBQUM7YUFDUTtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLE9BQU87UUFDbkIsT0FBTztZQUNMLFlBQVksRUFBRSxvQkFBb0I7WUFDbEMsZ0JBQWdCLEVBQUUsNkJBQTZCO1NBQ2hELENBQUM7SUFDSixDQUFDO0lBRVMsV0FBVztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFUyxVQUFVO1FBQ2xCLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNILENBQUM7SUFFUyxnQkFBZ0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNJLGFBQWE7UUFDbEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNPLHdCQUF3QjtRQUNoQyxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0gsQ0FBQzs7QUF4SUgsb0NBeUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJldHRpZXJPdmVycmlkZSwgUHJldHRpZXJTZXR0aW5ncywgVHJhaWxpbmdDb21tYSB9IGZyb20gJ3Byb2plbi9saWIvamF2YXNjcmlwdCc7XG5pbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcbmltcG9ydCB7IFNjcmlwdHMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFByZXR0aWVyIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcmV0dGllckJhc2UgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIFByZXR0aWVyIGJ1aWxkZXIuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBQcmV0dGllciBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIFByZXR0aWVyIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBpZ25vcmUgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnByZXR0aWVyaWdub3JlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIFByZXR0aWVyIHNldHRpbmdzIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIHNldHRpbmcgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzZXR0aW5nc0ZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcucHJldHRpZXJyYy5qc29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGhzIHRvIHRoZSBQcmV0dGllciBpZ25vcmUgZW50cmllcy5cbiAgICogQHJldHVybiBGaWxlIHBhdGhzIGZvciBpZ25vcmUgZmlsZSBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZUZpbGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICcqLnNuYXAnLFxuICAgICAgJy8uY29tbWl0bGludHJjLnRzJyxcbiAgICAgICcvLmRldmNvbnRhaW5lci5qc29uJyxcbiAgICAgICcvLmVzbGludHJjLmpzb24nLFxuICAgICAgJy8uZ2l0YXR0cmlidXRlcycsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvYnVnLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvZmVhdHVyZS55bWwnLFxuICAgICAgJy8uZ2l0aHViL0lTU1VFX1RFTVBMQVRFL3F1ZXN0aW9uLnltbCcsXG4gICAgICAnLy5naXRodWIvcHVsbF9yZXF1ZXN0X3RlbXBsYXRlLm1kJyxcbiAgICAgICcvLmdpdGh1Yi93b3JrZmxvd3MvcmVsZWFzZS55bWwnLFxuICAgICAgJy8uZ2l0aHViL3dvcmtmbG93cy9zdGFsZS55bWwnLFxuICAgICAgJy8uZ2l0aWdub3JlJyxcbiAgICAgICcvLmh1c2t5L2NvbW1pdC1tc2cnLFxuICAgICAgJy8uaHVza3kvcHJlLWNvbW1pdCcsXG4gICAgICAnLy5ucG1pZ25vcmUnLFxuICAgICAgJy8ucHJldHRpZXJpZ25vcmUnLFxuICAgICAgJy8ucHJldHRpZXJyYy5qc29uJyxcbiAgICAgICcvLnByb2plbi8qKicsXG4gICAgICAnLy5wcm9qZW4vZGVwcy5qc29uJyxcbiAgICAgICcvLnByb2plbi9maWxlcy5qc29uJyxcbiAgICAgICcvLnByb2plbi90YXNrcy5qc29uJyxcbiAgICAgICcvLnZzY29kZS9zZXR0aW5ncy5qc29uJyxcbiAgICAgICcvY2xpZmYudG9tbCcsXG4gICAgICAnL0xJQ0VOU0UnLFxuICAgICAgJy9wYWNrYWdlLWxvY2suanNvbicsXG4gICAgICAnL3BhY2thZ2UuanNvbicsXG4gICAgICAnL3RzY29uZmlnLmRldi5qc29uJyxcbiAgICAgICcvdHNjb25maWcuanNvbicsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0aW5ncyBmb3IgdGhlIFByZXR0aWVyIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRW50cmllcyBmb3IgdGhlIHNldHRpbmdzIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3MoKTogUHJldHRpZXJPdmVycmlkZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVzOiAnKi4qJyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc2VtaTogdHJ1ZSxcbiAgICAgICAgdHJhaWxpbmdDb21tYTogVHJhaWxpbmdDb21tYS5BTEwsXG4gICAgICAgIHNpbmdsZVF1b3RlOiB0cnVlLFxuICAgICAgICBwcmludFdpZHRoOiAxMjAsXG4gICAgICAgIHRhYldpZHRoOiAyLFxuICAgICAgfSBhcyBQcmV0dGllclNldHRpbmdzLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTlBNIHNjcmlwdHMgdXNlZCBieSBQcmV0dGllci5cbiAgICogQHJldHVybiBOcG0gc2NyaXB0IGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2NyaXB0cygpOiBTY3JpcHRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2Zvcm1hdDpmaXgnOiAncHJldHRpZXIgLiAtLXdyaXRlJyxcbiAgICAgICdmb3JtYXQ6bWVzc2FnZSc6ICdlY2hvIFwiUHJldHRpZXIgc3RhcnRlZCAuLi5cIicsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRTZXR0aW5ncygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QucHJldHRpZXI/LmFkZE92ZXJyaWRlKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29tbWFuZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY3JpcHRzKSkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFRhc2sobmFtZSwgeyBleGVjOiBjb21tYW5kLCByZWNlaXZlQXJnczogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLmlnbm9yZUZpbGVQYXRofWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLnNldHRpbmdzRmlsZVBhdGh9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHBvc3Qtc3ludGhlc2lzIHRhc2tzLCBmb2N1c2luZyBvbiB1cGRhdGluZyB0aGUgYC5wcmV0dGllcmlnbm9yZWAgZmlsZSB3aXRoIHBhdGhzIGZyb20gYC5naXRhdHRyaWJ1dGVzYC5cbiAgICpcbiAgICogVHJpZWQgc2NlbmFyaW9zOlxuICAgKiAgIC0gQWNjZXNzaW5nIGF0dHJpYnV0ZXMgZGlyZWN0bHkgZnJvbSBgLmdpdGF0dHJpYnV0ZXNgIGZpbGUgKGJ1dCBgLmdpdGF0dHJpYnV0ZXNgIGlzIHByaXZhdGUgYW5kIGluYWNjZXNzaWJsZSkuXG4gICAqICAgICBUaGlzIHdvdWxkIGJlIHRoZSBtb3N0IGVmZmljaWVudCBhbmQgZWxlZ2FudCBzb2x1dGlvbiBhcyBpdCBhbGxvd3MgdXMgdG8gYWRkIHRoZSBlbnRyaWVzIHVzaW5nIEFQSS5cbiAgICogICAtIFJldHJpZXZpbmcgYWxsIGZpbGVzIGZyb20gdGhlIHByb2plY3QgKG1pc3NlcyBzb21lIGZpbGVzIGxpa2UgYHRzY29uZmlnLmpzb25gKS5cbiAgICogICAtIExldHRpbmcgZWFjaCBjb21wb25lbnQgYWRkIGl0cyBwYXRocyBpbmRpdmlkdWFsbHkgKGxlYXZlcyBvdXQgbWFueSBzdGFuZGFyZCBmaWxlcykuXG4gICAqICAgLSBNYW51YWxseSBhZGRpbmcgcGF0aHMgKHByb25lIHRvIGVycm9ycykuXG4gICAqICAgLSBNb2RpZnlpbmcgYC5wcmV0dGllcmlnbm9yZWAgYWZ0ZXIgcG9zdC1zeW50aGVzaXMgKGJ1dCBgLnByZXR0aWVyaWdub3JlYCBpcyByZWFkb25seSkgYW5kIGxlYWRzIHRvIHRlc3QgaXNzdWVzXG4gICAqICAgICBhcyB0aGVzZSBjaGFuZ2VzIGFyZSBub3QgcmVmbGVjdGVkIGluIGBzeW50ZXNpemUoKWAuXG4gICAqXG4gICAqIFdlIHdpbGwgdXBkYXRlIGl0IG1hbnVhbGx5IGFuZCBjb3ZlciBpdCBieSB0ZXN0cyBjYXNlcyBjaGVja2luZyBpZiBjaGFuZ2VzIG9uIHRoZSBmaWxlcyBhcmUgcmVmbGVjdGVkIGhlcmUuXG4gICAqL1xuICBwdWJsaWMgcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFByZXR0aWVySWdub3JlRW50cmllcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZW50cmllcyB0byB0aGUgYC5wcmV0dGllcmlnbm9yZWAgZmlsZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb3RlY3RlZCBhZGRQcmV0dGllcklnbm9yZUVudHJpZXMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmlnbm9yZUZpbGVQYXRocykge1xuICAgICAgdGhpcy5wcm9qZWN0LnByZXR0aWVyPy5hZGRJZ25vcmVQYXR0ZXJuKGVudHJ5KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==