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
     * @protected
     */
    get ignoreFilePath() {
        return '.prettierignore';
    }
    /**
     * File path to the Prettier settings configuration.
     * @protected
     */
    get settingsFilePath() {
        return '.prettierrc.json';
    }
    /**
     * File paths to the Prettier ignore entries.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwRjtBQUMxRix1Q0FBb0M7QUFJcEM7OztHQUdHO0FBQ0gsTUFBc0IsWUFBYSxTQUFRLGlCQUFPO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFjLGNBQWM7UUFDMUIsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxnQkFBZ0I7UUFDNUIsT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQ0FBcUM7WUFDckMsc0NBQXNDO1lBQ3RDLG1DQUFtQztZQUNuQyxnQ0FBZ0M7WUFDaEMsOEJBQThCO1lBQzlCLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLFVBQVU7WUFDVixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixnQkFBZ0I7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxJQUFJO2dCQUNWLGFBQWEsRUFBRSwwQkFBYSxDQUFDLEdBQUc7Z0JBQ2hDLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixRQUFRLEVBQUUsQ0FBQzthQUNRO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLGdCQUFnQixFQUFFLDZCQUE2QjtTQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVTLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRVMsVUFBVTtRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUM7SUFDSCxDQUFDO0lBRVMsZ0JBQWdCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSSxhQUFhO1FBQ2xCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDTyx3QkFBd0I7UUFDaEMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNILENBQUM7O0FBbklILG9DQW9JQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyT3ZlcnJpZGUsIFByZXR0aWVyU2V0dGluZ3MsIFRyYWlsaW5nQ29tbWEgfSBmcm9tICdwcm9qZW4vbGliL2phdmFzY3JpcHQnO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBTY3JpcHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBQcmV0dGllciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJldHRpZXJCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBQcmV0dGllciBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgUHJldHRpZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBQcmV0dGllciBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnByZXR0aWVyaWdub3JlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIFByZXR0aWVyIHNldHRpbmdzIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3NGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnByZXR0aWVycmMuanNvbic7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRocyB0byB0aGUgUHJldHRpZXIgaWdub3JlIGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJyouc25hcCcsXG4gICAgICAnLy5jb21taXRsaW50cmMudHMnLFxuICAgICAgJy8uZGV2Y29udGFpbmVyLmpzb24nLFxuICAgICAgJy8uZXNsaW50cmMuanNvbicsXG4gICAgICAnLy5naXRhdHRyaWJ1dGVzJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9idWcueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9mZWF0dXJlLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvcXVlc3Rpb24ueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9wdWxsX3JlcXVlc3RfdGVtcGxhdGUubWQnLFxuICAgICAgJy8uZ2l0aHViL3dvcmtmbG93cy9yZWxlYXNlLnltbCcsXG4gICAgICAnLy5naXRodWIvd29ya2Zsb3dzL3N0YWxlLnltbCcsXG4gICAgICAnLy5naXRpZ25vcmUnLFxuICAgICAgJy8uaHVza3kvY29tbWl0LW1zZycsXG4gICAgICAnLy5odXNreS9wcmUtY29tbWl0JyxcbiAgICAgICcvLm5wbWlnbm9yZScsXG4gICAgICAnLy5wcmV0dGllcmlnbm9yZScsXG4gICAgICAnLy5wcmV0dGllcnJjLmpzb24nLFxuICAgICAgJy8ucHJvamVuLyoqJyxcbiAgICAgICcvLnByb2plbi9kZXBzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL2ZpbGVzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL3Rhc2tzLmpzb24nLFxuICAgICAgJy8udnNjb2RlL3NldHRpbmdzLmpzb24nLFxuICAgICAgJy9jbGlmZi50b21sJyxcbiAgICAgICcvTElDRU5TRScsXG4gICAgICAnL3BhY2thZ2UtbG9jay5qc29uJyxcbiAgICAgICcvcGFja2FnZS5qc29uJyxcbiAgICAgICcvdHNjb25maWcuZGV2Lmpzb24nLFxuICAgICAgJy90c2NvbmZpZy5qc29uJyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRpbmdzIGZvciB0aGUgUHJldHRpZXIgY29uZmlndXJhdGlvbi5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzZXR0aW5ncygpOiBQcmV0dGllck92ZXJyaWRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZXM6ICcqLionLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBzZW1pOiB0cnVlLFxuICAgICAgICB0cmFpbGluZ0NvbW1hOiBUcmFpbGluZ0NvbW1hLkFMTCxcbiAgICAgICAgc2luZ2xlUXVvdGU6IHRydWUsXG4gICAgICAgIHByaW50V2lkdGg6IDEyMCxcbiAgICAgICAgdGFiV2lkdGg6IDIsXG4gICAgICB9IGFzIFByZXR0aWVyU2V0dGluZ3MsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOUE0gc2NyaXB0cyB1c2VkIGJ5IFByZXR0aWVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtYXQ6Zml4JzogJ3ByZXR0aWVyIC4gLS13cml0ZScsXG4gICAgICAnZm9ybWF0Om1lc3NhZ2UnOiAnZWNobyBcIlByZXR0aWVyIHN0YXJ0ZWQgLi4uXCInLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LnByZXR0aWVyPy5hZGRPdmVycmlkZSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRTY3JpcHRzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW25hbWUsIGNvbW1hbmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuc2NyaXB0cykpIHtcbiAgICAgIHRoaXMucHJvamVjdC5hZGRUYXNrKG5hbWUsIHsgZXhlYzogY29tbWFuZCwgcmVjZWl2ZUFyZ3M6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFkZEdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dGhpcy5pZ25vcmVGaWxlUGF0aH1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dGhpcy5zZXR0aW5nc0ZpbGVQYXRofWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBwb3N0LXN5bnRoZXNpcyB0YXNrcywgZm9jdXNpbmcgb24gdXBkYXRpbmcgdGhlIGAucHJldHRpZXJpZ25vcmVgIGZpbGUgd2l0aCBwYXRocyBmcm9tIGAuZ2l0YXR0cmlidXRlc2AuXG4gICAqXG4gICAqIFRyaWVkIHNjZW5hcmlvczpcbiAgICogICAtIEFjY2Vzc2luZyBhdHRyaWJ1dGVzIGRpcmVjdGx5IGZyb20gYC5naXRhdHRyaWJ1dGVzYCBmaWxlIChidXQgYC5naXRhdHRyaWJ1dGVzYCBpcyBwcml2YXRlIGFuZCBpbmFjY2Vzc2libGUpLlxuICAgKiAgICAgVGhpcyB3b3VsZCBiZSB0aGUgbW9zdCBlZmZpY2llbnQgYW5kIGVsZWdhbnQgc29sdXRpb24gYXMgaXQgYWxsb3dzIHVzIHRvIGFkZCB0aGUgZW50cmllcyB1c2luZyBBUEkuXG4gICAqICAgLSBSZXRyaWV2aW5nIGFsbCBmaWxlcyBmcm9tIHRoZSBwcm9qZWN0IChtaXNzZXMgc29tZSBmaWxlcyBsaWtlIGB0c2NvbmZpZy5qc29uYCkuXG4gICAqICAgLSBMZXR0aW5nIGVhY2ggY29tcG9uZW50IGFkZCBpdHMgcGF0aHMgaW5kaXZpZHVhbGx5IChsZWF2ZXMgb3V0IG1hbnkgc3RhbmRhcmQgZmlsZXMpLlxuICAgKiAgIC0gTWFudWFsbHkgYWRkaW5nIHBhdGhzIChwcm9uZSB0byBlcnJvcnMpLlxuICAgKiAgIC0gTW9kaWZ5aW5nIGAucHJldHRpZXJpZ25vcmVgIGFmdGVyIHBvc3Qtc3ludGhlc2lzIChidXQgYC5wcmV0dGllcmlnbm9yZWAgaXMgcmVhZG9ubHkpIGFuZCBsZWFkcyB0byB0ZXN0IGlzc3Vlc1xuICAgKiAgICAgYXMgdGhlc2UgY2hhbmdlcyBhcmUgbm90IHJlZmxlY3RlZCBpbiBgc3ludGVzaXplKClgLlxuICAgKlxuICAgKiBXZSB3aWxsIHVwZGF0ZSBpdCBtYW51YWxseSBhbmQgY292ZXIgaXQgYnkgdGVzdHMgY2FzZXMgY2hlY2tpbmcgaWYgY2hhbmdlcyBvbiB0aGUgZmlsZXMgYXJlIHJlZmxlY3RlZCBoZXJlLlxuICAgKi9cbiAgcHVibGljIHByZVN5bnRoZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRQcmV0dGllcklnbm9yZUVudHJpZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGVudHJpZXMgdG8gdGhlIGAucHJldHRpZXJpZ25vcmVgIGZpbGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkUHJldHRpZXJJZ25vcmVFbnRyaWVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5pZ25vcmVGaWxlUGF0aHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllcj8uYWRkSWdub3JlUGF0dGVybihlbnRyeSk7XG4gICAgfVxuICB9XG59XG4iXX0=