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
            '/.gitattributes',
            '/.github/ISSUE_TEMPLATE/bug.yml',
            '/.github/ISSUE_TEMPLATE/feature.yml',
            '/.github/ISSUE_TEMPLATE/housekeeping.yml',
            '/.github/ISSUE_TEMPLATE/question.yml',
            '/.github/pull_request_template.md',
            '/.github/workflows/release.yml',
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
            '/eslint.config.mjs',
            '/cliff.toml',
            '/package-lock.json',
            '/package.json',
            '/tsconfig.dev.json',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwRjtBQUMxRix1Q0FBb0M7QUFJcEM7OztHQUdHO0FBQ0gsTUFBc0IsWUFBYSxTQUFRLGlCQUFPO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsaUNBQWlDO1lBQ2pDLHFDQUFxQztZQUNyQywwQ0FBMEM7WUFDMUMsc0NBQXNDO1lBQ3RDLG1DQUFtQztZQUNuQyxnQ0FBZ0M7WUFDaEMsYUFBYTtZQUNiLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixvQkFBb0I7U0FDckIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsSUFBSTtnQkFDVixhQUFhLEVBQUUsMEJBQWEsQ0FBQyxHQUFHO2dCQUNoQyxXQUFXLEVBQUUsSUFBSTtnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLENBQUM7YUFDUTtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVTLFVBQVU7UUFDbEIsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSSxhQUFhO1FBQ2xCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDTyx3QkFBd0I7UUFDaEMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNILENBQUM7O0FBL0hILG9DQWdJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyT3ZlcnJpZGUsIFByZXR0aWVyU2V0dGluZ3MsIFRyYWlsaW5nQ29tbWEgfSBmcm9tICdwcm9qZW4vbGliL2phdmFzY3JpcHQnO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBTY3JpcHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBQcmV0dGllciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJldHRpZXJCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBQcmV0dGllciBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgUHJldHRpZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBQcmV0dGllciBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gaWdub3JlIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5wcmV0dGllcmlnbm9yZSc7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBQcmV0dGllciBzZXR0aW5ncyBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBzZXR0aW5nIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3NGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnByZXR0aWVycmMuanNvbic7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRocyB0byB0aGUgUHJldHRpZXIgaWdub3JlIGVudHJpZXMuXG4gICAqIEByZXR1cm4gRmlsZSBwYXRocyBmb3IgaWdub3JlIGZpbGUgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnKi5zbmFwJyxcbiAgICAgICcvLmNvbW1pdGxpbnRyYy50cycsXG4gICAgICAnLy5kZXZjb250YWluZXIuanNvbicsXG4gICAgICAnLy5naXRhdHRyaWJ1dGVzJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9idWcueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9mZWF0dXJlLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvaG91c2VrZWVwaW5nLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvcXVlc3Rpb24ueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9wdWxsX3JlcXVlc3RfdGVtcGxhdGUubWQnLFxuICAgICAgJy8uZ2l0aHViL3dvcmtmbG93cy9yZWxlYXNlLnltbCcsXG4gICAgICAnLy5naXRpZ25vcmUnLFxuICAgICAgJy8uaHVza3kvY29tbWl0LW1zZycsXG4gICAgICAnLy5odXNreS9wcmUtY29tbWl0JyxcbiAgICAgICcvLnByZXR0aWVyaWdub3JlJyxcbiAgICAgICcvLnByZXR0aWVycmMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vKionLFxuICAgICAgJy8ucHJvamVuL2RlcHMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vZmlsZXMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vdGFza3MuanNvbicsXG4gICAgICAnLy52c2NvZGUvc2V0dGluZ3MuanNvbicsXG4gICAgICAnL2VzbGludC5jb25maWcubWpzJyxcbiAgICAgICcvY2xpZmYudG9tbCcsXG4gICAgICAnL3BhY2thZ2UtbG9jay5qc29uJyxcbiAgICAgICcvcGFja2FnZS5qc29uJyxcbiAgICAgICcvdHNjb25maWcuZGV2Lmpzb24nLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogU2V0dGluZ3MgZm9yIHRoZSBQcmV0dGllciBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEVudHJpZXMgZm9yIHRoZSBzZXR0aW5ncyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNldHRpbmdzKCk6IFByZXR0aWVyT3ZlcnJpZGUge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogJyouKicsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNlbWk6IHRydWUsXG4gICAgICAgIHRyYWlsaW5nQ29tbWE6IFRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgcHJpbnRXaWR0aDogMTIwLFxuICAgICAgICB0YWJXaWR0aDogMixcbiAgICAgIH0gYXMgUHJldHRpZXJTZXR0aW5ncyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE5QTSBzY3JpcHRzIHVzZWQgYnkgUHJldHRpZXIuXG4gICAqIEByZXR1cm4gTnBtIHNjcmlwdCBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXR0aWVyOiAncHJldHRpZXIgLiAtLXdyaXRlJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5wcmV0dGllcj8uYWRkT3ZlcnJpZGUodGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb21tYW5kXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNjcmlwdHMpKSB7XG4gICAgICB0aGlzLnByb2plY3QuYWRkVGFzayhuYW1lLCB7IGV4ZWM6IGNvbW1hbmQsIHJlY2VpdmVBcmdzOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBwb3N0LXN5bnRoZXNpcyB0YXNrcywgZm9jdXNpbmcgb24gdXBkYXRpbmcgdGhlIGAucHJldHRpZXJpZ25vcmVgIGZpbGUgd2l0aCBwYXRocyBmcm9tIGAuZ2l0YXR0cmlidXRlc2AuXG4gICAqXG4gICAqIFRyaWVkIHNjZW5hcmlvczpcbiAgICogICAtIEFjY2Vzc2luZyBhdHRyaWJ1dGVzIGRpcmVjdGx5IGZyb20gYC5naXRhdHRyaWJ1dGVzYCBmaWxlIChidXQgYC5naXRhdHRyaWJ1dGVzYCBpcyBwcml2YXRlIGFuZCBpbmFjY2Vzc2libGUpLlxuICAgKiAgICAgVGhpcyB3b3VsZCBiZSB0aGUgbW9zdCBlZmZpY2llbnQgYW5kIGVsZWdhbnQgc29sdXRpb24gYXMgaXQgYWxsb3dzIHVzIHRvIGFkZCB0aGUgZW50cmllcyB1c2luZyBBUEkuXG4gICAqICAgLSBSZXRyaWV2aW5nIGFsbCBmaWxlcyBmcm9tIHRoZSBwcm9qZWN0IChtaXNzZXMgc29tZSBmaWxlcyBsaWtlIGB0c2NvbmZpZy5qc29uYCkuXG4gICAqICAgLSBMZXR0aW5nIGVhY2ggY29tcG9uZW50IGFkZCBpdHMgcGF0aHMgaW5kaXZpZHVhbGx5IChsZWF2ZXMgb3V0IG1hbnkgc3RhbmRhcmQgZmlsZXMpLlxuICAgKiAgIC0gTWFudWFsbHkgYWRkaW5nIHBhdGhzIChwcm9uZSB0byBlcnJvcnMpLlxuICAgKiAgIC0gTW9kaWZ5aW5nIGAucHJldHRpZXJpZ25vcmVgIGFmdGVyIHBvc3Qtc3ludGhlc2lzIChidXQgYC5wcmV0dGllcmlnbm9yZWAgaXMgcmVhZG9ubHkpIGFuZCBsZWFkcyB0byB0ZXN0IGlzc3Vlc1xuICAgKiAgICAgYXMgdGhlc2UgY2hhbmdlcyBhcmUgbm90IHJlZmxlY3RlZCBpbiBgc3ludGVzaXplKClgLlxuICAgKlxuICAgKiBXZSB3aWxsIHVwZGF0ZSBpdCBtYW51YWxseSBhbmQgY292ZXIgaXQgYnkgdGVzdHMgY2FzZXMgY2hlY2tpbmcgaWYgY2hhbmdlcyBvbiB0aGUgZmlsZXMgYXJlIHJlZmxlY3RlZCBoZXJlLlxuICAgKi9cbiAgcHVibGljIHByZVN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRQcmV0dGllcklnbm9yZUVudHJpZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGVudHJpZXMgdG8gdGhlIGAucHJldHRpZXJpZ25vcmVgIGZpbGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkUHJldHRpZXJJZ25vcmVFbnRyaWVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5pZ25vcmVGaWxlUGF0aHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllcj8uYWRkSWdub3JlUGF0dGVybihlbnRyeSk7XG4gICAgfVxuICB9XG59XG4iXX0=