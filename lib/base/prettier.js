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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwRjtBQUMxRix1Q0FBb0M7QUFJcEM7OztHQUdHO0FBQ0gsTUFBc0IsWUFBYSxTQUFRLGlCQUFPO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQ0FBcUM7WUFDckMsc0NBQXNDO1lBQ3RDLG1DQUFtQztZQUNuQyxnQ0FBZ0M7WUFDaEMsOEJBQThCO1lBQzlCLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLFVBQVU7WUFDVixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixnQkFBZ0I7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsSUFBSTtnQkFDVixhQUFhLEVBQUUsMEJBQWEsQ0FBQyxHQUFHO2dCQUNoQyxXQUFXLEVBQUUsSUFBSTtnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLENBQUM7YUFDUTtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLE9BQU87UUFDbkIsT0FBTztZQUNMLFlBQVksRUFBRSxvQkFBb0I7WUFDbEMsZ0JBQWdCLEVBQUUsNkJBQTZCO1NBQ2hELENBQUM7SUFDSixDQUFDO0lBRVMsV0FBVztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFUyxVQUFVO1FBQ2xCLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0ksYUFBYTtRQUNsQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sd0JBQXdCO1FBQ2hDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDOztBQW5JSCxvQ0FvSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmV0dGllck92ZXJyaWRlLCBQcmV0dGllclNldHRpbmdzLCBUcmFpbGluZ0NvbW1hIH0gZnJvbSAncHJvamVuL2xpYi9qYXZhc2NyaXB0JztcbmltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgU2NyaXB0cyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgUHJldHRpZXIgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByZXR0aWVyQmFzZSBleHRlbmRzIEJ1aWxkZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGJhc2UgUHJldHRpZXIgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFByZXR0aWVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgUHJldHRpZXIgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIGlnbm9yZSBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZUZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcucHJldHRpZXJpZ25vcmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgUHJldHRpZXIgc2V0dGluZ3MgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gc2V0dGluZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNldHRpbmdzRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5wcmV0dGllcnJjLmpzb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aHMgdG8gdGhlIFByZXR0aWVyIGlnbm9yZSBlbnRyaWVzLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aHMgZm9yIGlnbm9yZSBmaWxlIGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJyouc25hcCcsXG4gICAgICAnLy5jb21taXRsaW50cmMudHMnLFxuICAgICAgJy8uZGV2Y29udGFpbmVyLmpzb24nLFxuICAgICAgJy8uZXNsaW50cmMuanNvbicsXG4gICAgICAnLy5naXRhdHRyaWJ1dGVzJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9idWcueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9mZWF0dXJlLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvcXVlc3Rpb24ueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9wdWxsX3JlcXVlc3RfdGVtcGxhdGUubWQnLFxuICAgICAgJy8uZ2l0aHViL3dvcmtmbG93cy9yZWxlYXNlLnltbCcsXG4gICAgICAnLy5naXRodWIvd29ya2Zsb3dzL3N0YWxlLnltbCcsXG4gICAgICAnLy5naXRpZ25vcmUnLFxuICAgICAgJy8uaHVza3kvY29tbWl0LW1zZycsXG4gICAgICAnLy5odXNreS9wcmUtY29tbWl0JyxcbiAgICAgICcvLm5wbWlnbm9yZScsXG4gICAgICAnLy5wcmV0dGllcmlnbm9yZScsXG4gICAgICAnLy5wcmV0dGllcnJjLmpzb24nLFxuICAgICAgJy8ucHJvamVuLyoqJyxcbiAgICAgICcvLnByb2plbi9kZXBzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL2ZpbGVzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL3Rhc2tzLmpzb24nLFxuICAgICAgJy8udnNjb2RlL3NldHRpbmdzLmpzb24nLFxuICAgICAgJy9jbGlmZi50b21sJyxcbiAgICAgICcvTElDRU5TRScsXG4gICAgICAnL3BhY2thZ2UtbG9jay5qc29uJyxcbiAgICAgICcvcGFja2FnZS5qc29uJyxcbiAgICAgICcvdHNjb25maWcuZGV2Lmpzb24nLFxuICAgICAgJy90c2NvbmZpZy5qc29uJyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRpbmdzIGZvciB0aGUgUHJldHRpZXIgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBFbnRyaWVzIGZvciB0aGUgc2V0dGluZ3MgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzZXR0aW5ncygpOiBQcmV0dGllck92ZXJyaWRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZXM6ICcqLionLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBzZW1pOiB0cnVlLFxuICAgICAgICB0cmFpbGluZ0NvbW1hOiBUcmFpbGluZ0NvbW1hLkFMTCxcbiAgICAgICAgc2luZ2xlUXVvdGU6IHRydWUsXG4gICAgICAgIHByaW50V2lkdGg6IDEyMCxcbiAgICAgICAgdGFiV2lkdGg6IDIsXG4gICAgICB9IGFzIFByZXR0aWVyU2V0dGluZ3MsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOUE0gc2NyaXB0cyB1c2VkIGJ5IFByZXR0aWVyLlxuICAgKiBAcmV0dXJuIE5wbSBzY3JpcHQgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzY3JpcHRzKCk6IFNjcmlwdHMge1xuICAgIHJldHVybiB7XG4gICAgICAnZm9ybWF0OmZpeCc6ICdwcmV0dGllciAuIC0td3JpdGUnLFxuICAgICAgJ2Zvcm1hdDptZXNzYWdlJzogJ2VjaG8gXCJQcmV0dGllciBzdGFydGVkIC4uLlwiJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5wcmV0dGllcj8uYWRkT3ZlcnJpZGUodGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb21tYW5kXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNjcmlwdHMpKSB7XG4gICAgICB0aGlzLnByb2plY3QuYWRkVGFzayhuYW1lLCB7IGV4ZWM6IGNvbW1hbmQsIHJlY2VpdmVBcmdzOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBwb3N0LXN5bnRoZXNpcyB0YXNrcywgZm9jdXNpbmcgb24gdXBkYXRpbmcgdGhlIGAucHJldHRpZXJpZ25vcmVgIGZpbGUgd2l0aCBwYXRocyBmcm9tIGAuZ2l0YXR0cmlidXRlc2AuXG4gICAqXG4gICAqIFRyaWVkIHNjZW5hcmlvczpcbiAgICogICAtIEFjY2Vzc2luZyBhdHRyaWJ1dGVzIGRpcmVjdGx5IGZyb20gYC5naXRhdHRyaWJ1dGVzYCBmaWxlIChidXQgYC5naXRhdHRyaWJ1dGVzYCBpcyBwcml2YXRlIGFuZCBpbmFjY2Vzc2libGUpLlxuICAgKiAgICAgVGhpcyB3b3VsZCBiZSB0aGUgbW9zdCBlZmZpY2llbnQgYW5kIGVsZWdhbnQgc29sdXRpb24gYXMgaXQgYWxsb3dzIHVzIHRvIGFkZCB0aGUgZW50cmllcyB1c2luZyBBUEkuXG4gICAqICAgLSBSZXRyaWV2aW5nIGFsbCBmaWxlcyBmcm9tIHRoZSBwcm9qZWN0IChtaXNzZXMgc29tZSBmaWxlcyBsaWtlIGB0c2NvbmZpZy5qc29uYCkuXG4gICAqICAgLSBMZXR0aW5nIGVhY2ggY29tcG9uZW50IGFkZCBpdHMgcGF0aHMgaW5kaXZpZHVhbGx5IChsZWF2ZXMgb3V0IG1hbnkgc3RhbmRhcmQgZmlsZXMpLlxuICAgKiAgIC0gTWFudWFsbHkgYWRkaW5nIHBhdGhzIChwcm9uZSB0byBlcnJvcnMpLlxuICAgKiAgIC0gTW9kaWZ5aW5nIGAucHJldHRpZXJpZ25vcmVgIGFmdGVyIHBvc3Qtc3ludGhlc2lzIChidXQgYC5wcmV0dGllcmlnbm9yZWAgaXMgcmVhZG9ubHkpIGFuZCBsZWFkcyB0byB0ZXN0IGlzc3Vlc1xuICAgKiAgICAgYXMgdGhlc2UgY2hhbmdlcyBhcmUgbm90IHJlZmxlY3RlZCBpbiBgc3ludGVzaXplKClgLlxuICAgKlxuICAgKiBXZSB3aWxsIHVwZGF0ZSBpdCBtYW51YWxseSBhbmQgY292ZXIgaXQgYnkgdGVzdHMgY2FzZXMgY2hlY2tpbmcgaWYgY2hhbmdlcyBvbiB0aGUgZmlsZXMgYXJlIHJlZmxlY3RlZCBoZXJlLlxuICAgKi9cbiAgcHVibGljIHByZVN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRQcmV0dGllcklnbm9yZUVudHJpZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGVudHJpZXMgdG8gdGhlIGAucHJldHRpZXJpZ25vcmVgIGZpbGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkUHJldHRpZXJJZ25vcmVFbnRyaWVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5pZ25vcmVGaWxlUGF0aHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllcj8uYWRkSWdub3JlUGF0dGVybihlbnRyeSk7XG4gICAgfVxuICB9XG59XG4iXX0=