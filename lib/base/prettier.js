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
            '/.github/ISSUE_TEMPLATE/housekeeping.yml',
            '/.github/ISSUE_TEMPLATE/question.yml',
            '/.github/pull_request_template.md',
            '/.github/workflows/release.yml',
            '/.github/workflows/stale.yml',
            '/.gitignore',
            '/.husky/commit-msg',
            '/.husky/pre-commit',
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
            prettier: 'prettier . --write',
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
PrettierBase[_a] = { fqn: "@dxfrontier/projen-template-projects.PrettierBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwRjtBQUMxRix1Q0FBb0M7QUFJcEM7OztHQUdHO0FBQ0gsTUFBc0IsWUFBYSxTQUFRLGlCQUFPO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQ0FBcUM7WUFDckMsMENBQTBDO1lBQzFDLHNDQUFzQztZQUN0QyxtQ0FBbUM7WUFDbkMsZ0NBQWdDO1lBQ2hDLDhCQUE4QjtZQUM5QixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLFVBQVU7WUFDVixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixnQkFBZ0I7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsSUFBSTtnQkFDVixhQUFhLEVBQUUsMEJBQWEsQ0FBQyxHQUFHO2dCQUNoQyxXQUFXLEVBQUUsSUFBSTtnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLENBQUM7YUFDUTtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVTLFVBQVU7UUFDbEIsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSSxhQUFhO1FBQ2xCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDTyx3QkFBd0I7UUFDaEMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNILENBQUM7O0FBbElILG9DQW1JQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyT3ZlcnJpZGUsIFByZXR0aWVyU2V0dGluZ3MsIFRyYWlsaW5nQ29tbWEgfSBmcm9tICdwcm9qZW4vbGliL2phdmFzY3JpcHQnO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBTY3JpcHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBQcmV0dGllciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJldHRpZXJCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBQcmV0dGllciBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgUHJldHRpZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBQcmV0dGllciBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gaWdub3JlIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5wcmV0dGllcmlnbm9yZSc7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBQcmV0dGllciBzZXR0aW5ncyBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBzZXR0aW5nIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3NGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnByZXR0aWVycmMuanNvbic7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRocyB0byB0aGUgUHJldHRpZXIgaWdub3JlIGVudHJpZXMuXG4gICAqIEByZXR1cm4gRmlsZSBwYXRocyBmb3IgaWdub3JlIGZpbGUgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnKi5zbmFwJyxcbiAgICAgICcvLmNvbW1pdGxpbnRyYy50cycsXG4gICAgICAnLy5kZXZjb250YWluZXIuanNvbicsXG4gICAgICAnLy5lc2xpbnRyYy5qc29uJyxcbiAgICAgICcvLmdpdGF0dHJpYnV0ZXMnLFxuICAgICAgJy8uZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2J1Zy55bWwnLFxuICAgICAgJy8uZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2ZlYXR1cmUueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9ob3VzZWtlZXBpbmcueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9xdWVzdGlvbi55bWwnLFxuICAgICAgJy8uZ2l0aHViL3B1bGxfcmVxdWVzdF90ZW1wbGF0ZS5tZCcsXG4gICAgICAnLy5naXRodWIvd29ya2Zsb3dzL3JlbGVhc2UueW1sJyxcbiAgICAgICcvLmdpdGh1Yi93b3JrZmxvd3Mvc3RhbGUueW1sJyxcbiAgICAgICcvLmdpdGlnbm9yZScsXG4gICAgICAnLy5odXNreS9jb21taXQtbXNnJyxcbiAgICAgICcvLmh1c2t5L3ByZS1jb21taXQnLFxuICAgICAgJy8ucHJldHRpZXJpZ25vcmUnLFxuICAgICAgJy8ucHJldHRpZXJyYy5qc29uJyxcbiAgICAgICcvLnByb2plbi8qKicsXG4gICAgICAnLy5wcm9qZW4vZGVwcy5qc29uJyxcbiAgICAgICcvLnByb2plbi9maWxlcy5qc29uJyxcbiAgICAgICcvLnByb2plbi90YXNrcy5qc29uJyxcbiAgICAgICcvLnZzY29kZS9zZXR0aW5ncy5qc29uJyxcbiAgICAgICcvY2xpZmYudG9tbCcsXG4gICAgICAnL0xJQ0VOU0UnLFxuICAgICAgJy9wYWNrYWdlLWxvY2suanNvbicsXG4gICAgICAnL3BhY2thZ2UuanNvbicsXG4gICAgICAnL3RzY29uZmlnLmRldi5qc29uJyxcbiAgICAgICcvdHNjb25maWcuanNvbicsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0aW5ncyBmb3IgdGhlIFByZXR0aWVyIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRW50cmllcyBmb3IgdGhlIHNldHRpbmdzIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3MoKTogUHJldHRpZXJPdmVycmlkZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVzOiAnKi4qJyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc2VtaTogdHJ1ZSxcbiAgICAgICAgdHJhaWxpbmdDb21tYTogVHJhaWxpbmdDb21tYS5BTEwsXG4gICAgICAgIHNpbmdsZVF1b3RlOiB0cnVlLFxuICAgICAgICBwcmludFdpZHRoOiAxMjAsXG4gICAgICAgIHRhYldpZHRoOiAyLFxuICAgICAgfSBhcyBQcmV0dGllclNldHRpbmdzLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTlBNIHNjcmlwdHMgdXNlZCBieSBQcmV0dGllci5cbiAgICogQHJldHVybiBOcG0gc2NyaXB0IGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2NyaXB0cygpOiBTY3JpcHRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJldHRpZXI6ICdwcmV0dGllciAuIC0td3JpdGUnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LnByZXR0aWVyPy5hZGRPdmVycmlkZSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRTY3JpcHRzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW25hbWUsIGNvbW1hbmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuc2NyaXB0cykpIHtcbiAgICAgIHRoaXMucHJvamVjdC5hZGRUYXNrKG5hbWUsIHsgZXhlYzogY29tbWFuZCwgcmVjZWl2ZUFyZ3M6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHBvc3Qtc3ludGhlc2lzIHRhc2tzLCBmb2N1c2luZyBvbiB1cGRhdGluZyB0aGUgYC5wcmV0dGllcmlnbm9yZWAgZmlsZSB3aXRoIHBhdGhzIGZyb20gYC5naXRhdHRyaWJ1dGVzYC5cbiAgICpcbiAgICogVHJpZWQgc2NlbmFyaW9zOlxuICAgKiAgIC0gQWNjZXNzaW5nIGF0dHJpYnV0ZXMgZGlyZWN0bHkgZnJvbSBgLmdpdGF0dHJpYnV0ZXNgIGZpbGUgKGJ1dCBgLmdpdGF0dHJpYnV0ZXNgIGlzIHByaXZhdGUgYW5kIGluYWNjZXNzaWJsZSkuXG4gICAqICAgICBUaGlzIHdvdWxkIGJlIHRoZSBtb3N0IGVmZmljaWVudCBhbmQgZWxlZ2FudCBzb2x1dGlvbiBhcyBpdCBhbGxvd3MgdXMgdG8gYWRkIHRoZSBlbnRyaWVzIHVzaW5nIEFQSS5cbiAgICogICAtIFJldHJpZXZpbmcgYWxsIGZpbGVzIGZyb20gdGhlIHByb2plY3QgKG1pc3NlcyBzb21lIGZpbGVzIGxpa2UgYHRzY29uZmlnLmpzb25gKS5cbiAgICogICAtIExldHRpbmcgZWFjaCBjb21wb25lbnQgYWRkIGl0cyBwYXRocyBpbmRpdmlkdWFsbHkgKGxlYXZlcyBvdXQgbWFueSBzdGFuZGFyZCBmaWxlcykuXG4gICAqICAgLSBNYW51YWxseSBhZGRpbmcgcGF0aHMgKHByb25lIHRvIGVycm9ycykuXG4gICAqICAgLSBNb2RpZnlpbmcgYC5wcmV0dGllcmlnbm9yZWAgYWZ0ZXIgcG9zdC1zeW50aGVzaXMgKGJ1dCBgLnByZXR0aWVyaWdub3JlYCBpcyByZWFkb25seSkgYW5kIGxlYWRzIHRvIHRlc3QgaXNzdWVzXG4gICAqICAgICBhcyB0aGVzZSBjaGFuZ2VzIGFyZSBub3QgcmVmbGVjdGVkIGluIGBzeW50ZXNpemUoKWAuXG4gICAqXG4gICAqIFdlIHdpbGwgdXBkYXRlIGl0IG1hbnVhbGx5IGFuZCBjb3ZlciBpdCBieSB0ZXN0cyBjYXNlcyBjaGVja2luZyBpZiBjaGFuZ2VzIG9uIHRoZSBmaWxlcyBhcmUgcmVmbGVjdGVkIGhlcmUuXG4gICAqL1xuICBwdWJsaWMgcHJlU3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFByZXR0aWVySWdub3JlRW50cmllcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZW50cmllcyB0byB0aGUgYC5wcmV0dGllcmlnbm9yZWAgZmlsZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb3RlY3RlZCBhZGRQcmV0dGllcklnbm9yZUVudHJpZXMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmlnbm9yZUZpbGVQYXRocykge1xuICAgICAgdGhpcy5wcm9qZWN0LnByZXR0aWVyPy5hZGRJZ25vcmVQYXR0ZXJuKGVudHJ5KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==