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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwRjtBQUMxRix1Q0FBb0M7QUFJcEM7OztHQUdHO0FBQ0gsTUFBc0IsWUFBYSxTQUFRLGlCQUFPO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQ0FBcUM7WUFDckMsMENBQTBDO1lBQzFDLHNDQUFzQztZQUN0QyxtQ0FBbUM7WUFDbkMsZ0NBQWdDO1lBQ2hDLDhCQUE4QjtZQUM5QixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLGFBQWE7WUFDYixVQUFVO1lBQ1Ysb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsZ0JBQWdCO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsYUFBYSxFQUFFLDBCQUFhLENBQUMsR0FBRztnQkFDaEMsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFFBQVEsRUFBRSxDQUFDO2FBQ1E7U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBRVMsV0FBVztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFUyxVQUFVO1FBQ2xCLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0ksYUFBYTtRQUNsQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sd0JBQXdCO1FBQ2hDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDOztBQW5JSCxvQ0FvSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmV0dGllck92ZXJyaWRlLCBQcmV0dGllclNldHRpbmdzLCBUcmFpbGluZ0NvbW1hIH0gZnJvbSAncHJvamVuL2xpYi9qYXZhc2NyaXB0JztcbmltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgU2NyaXB0cyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgUHJldHRpZXIgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByZXR0aWVyQmFzZSBleHRlbmRzIEJ1aWxkZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGJhc2UgUHJldHRpZXIgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFByZXR0aWVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgUHJldHRpZXIgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIGlnbm9yZSBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZUZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcucHJldHRpZXJpZ25vcmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgUHJldHRpZXIgc2V0dGluZ3MgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gc2V0dGluZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNldHRpbmdzRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5wcmV0dGllcnJjLmpzb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aHMgdG8gdGhlIFByZXR0aWVyIGlnbm9yZSBlbnRyaWVzLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aHMgZm9yIGlnbm9yZSBmaWxlIGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJyouc25hcCcsXG4gICAgICAnLy5jb21taXRsaW50cmMudHMnLFxuICAgICAgJy8uZGV2Y29udGFpbmVyLmpzb24nLFxuICAgICAgJy8uZXNsaW50cmMuanNvbicsXG4gICAgICAnLy5naXRhdHRyaWJ1dGVzJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9idWcueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9mZWF0dXJlLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvaG91c2VrZWVwaW5nLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvcXVlc3Rpb24ueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9wdWxsX3JlcXVlc3RfdGVtcGxhdGUubWQnLFxuICAgICAgJy8uZ2l0aHViL3dvcmtmbG93cy9yZWxlYXNlLnltbCcsXG4gICAgICAnLy5naXRodWIvd29ya2Zsb3dzL3N0YWxlLnltbCcsXG4gICAgICAnLy5naXRpZ25vcmUnLFxuICAgICAgJy8uaHVza3kvY29tbWl0LW1zZycsXG4gICAgICAnLy5odXNreS9wcmUtY29tbWl0JyxcbiAgICAgICcvLm5wbWlnbm9yZScsXG4gICAgICAnLy5wcmV0dGllcmlnbm9yZScsXG4gICAgICAnLy5wcmV0dGllcnJjLmpzb24nLFxuICAgICAgJy8ucHJvamVuLyoqJyxcbiAgICAgICcvLnByb2plbi9kZXBzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL2ZpbGVzLmpzb24nLFxuICAgICAgJy8ucHJvamVuL3Rhc2tzLmpzb24nLFxuICAgICAgJy8udnNjb2RlL3NldHRpbmdzLmpzb24nLFxuICAgICAgJy9jbGlmZi50b21sJyxcbiAgICAgICcvTElDRU5TRScsXG4gICAgICAnL3BhY2thZ2UtbG9jay5qc29uJyxcbiAgICAgICcvcGFja2FnZS5qc29uJyxcbiAgICAgICcvdHNjb25maWcuZGV2Lmpzb24nLFxuICAgICAgJy90c2NvbmZpZy5qc29uJyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRpbmdzIGZvciB0aGUgUHJldHRpZXIgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBFbnRyaWVzIGZvciB0aGUgc2V0dGluZ3MgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzZXR0aW5ncygpOiBQcmV0dGllck92ZXJyaWRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZXM6ICcqLionLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBzZW1pOiB0cnVlLFxuICAgICAgICB0cmFpbGluZ0NvbW1hOiBUcmFpbGluZ0NvbW1hLkFMTCxcbiAgICAgICAgc2luZ2xlUXVvdGU6IHRydWUsXG4gICAgICAgIHByaW50V2lkdGg6IDEyMCxcbiAgICAgICAgdGFiV2lkdGg6IDIsXG4gICAgICB9IGFzIFByZXR0aWVyU2V0dGluZ3MsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOUE0gc2NyaXB0cyB1c2VkIGJ5IFByZXR0aWVyLlxuICAgKiBAcmV0dXJuIE5wbSBzY3JpcHQgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzY3JpcHRzKCk6IFNjcmlwdHMge1xuICAgIHJldHVybiB7XG4gICAgICBwcmV0dGllcjogJ3ByZXR0aWVyIC4gLS13cml0ZScsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRTZXR0aW5ncygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QucHJldHRpZXI/LmFkZE92ZXJyaWRlKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29tbWFuZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY3JpcHRzKSkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFRhc2sobmFtZSwgeyBleGVjOiBjb21tYW5kLCByZWNlaXZlQXJnczogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgcG9zdC1zeW50aGVzaXMgdGFza3MsIGZvY3VzaW5nIG9uIHVwZGF0aW5nIHRoZSBgLnByZXR0aWVyaWdub3JlYCBmaWxlIHdpdGggcGF0aHMgZnJvbSBgLmdpdGF0dHJpYnV0ZXNgLlxuICAgKlxuICAgKiBUcmllZCBzY2VuYXJpb3M6XG4gICAqICAgLSBBY2Nlc3NpbmcgYXR0cmlidXRlcyBkaXJlY3RseSBmcm9tIGAuZ2l0YXR0cmlidXRlc2AgZmlsZSAoYnV0IGAuZ2l0YXR0cmlidXRlc2AgaXMgcHJpdmF0ZSBhbmQgaW5hY2Nlc3NpYmxlKS5cbiAgICogICAgIFRoaXMgd291bGQgYmUgdGhlIG1vc3QgZWZmaWNpZW50IGFuZCBlbGVnYW50IHNvbHV0aW9uIGFzIGl0IGFsbG93cyB1cyB0byBhZGQgdGhlIGVudHJpZXMgdXNpbmcgQVBJLlxuICAgKiAgIC0gUmV0cmlldmluZyBhbGwgZmlsZXMgZnJvbSB0aGUgcHJvamVjdCAobWlzc2VzIHNvbWUgZmlsZXMgbGlrZSBgdHNjb25maWcuanNvbmApLlxuICAgKiAgIC0gTGV0dGluZyBlYWNoIGNvbXBvbmVudCBhZGQgaXRzIHBhdGhzIGluZGl2aWR1YWxseSAobGVhdmVzIG91dCBtYW55IHN0YW5kYXJkIGZpbGVzKS5cbiAgICogICAtIE1hbnVhbGx5IGFkZGluZyBwYXRocyAocHJvbmUgdG8gZXJyb3JzKS5cbiAgICogICAtIE1vZGlmeWluZyBgLnByZXR0aWVyaWdub3JlYCBhZnRlciBwb3N0LXN5bnRoZXNpcyAoYnV0IGAucHJldHRpZXJpZ25vcmVgIGlzIHJlYWRvbmx5KSBhbmQgbGVhZHMgdG8gdGVzdCBpc3N1ZXNcbiAgICogICAgIGFzIHRoZXNlIGNoYW5nZXMgYXJlIG5vdCByZWZsZWN0ZWQgaW4gYHN5bnRlc2l6ZSgpYC5cbiAgICpcbiAgICogV2Ugd2lsbCB1cGRhdGUgaXQgbWFudWFsbHkgYW5kIGNvdmVyIGl0IGJ5IHRlc3RzIGNhc2VzIGNoZWNraW5nIGlmIGNoYW5nZXMgb24gdGhlIGZpbGVzIGFyZSByZWZsZWN0ZWQgaGVyZS5cbiAgICovXG4gIHB1YmxpYyBwcmVTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUHJldHRpZXJJZ25vcmVFbnRyaWVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBlbnRyaWVzIHRvIHRoZSBgLnByZXR0aWVyaWdub3JlYCBmaWxlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFByZXR0aWVySWdub3JlRW50cmllcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuaWdub3JlRmlsZVBhdGhzKSB7XG4gICAgICB0aGlzLnByb2plY3QucHJldHRpZXI/LmFkZElnbm9yZVBhdHRlcm4oZW50cnkpO1xuICAgIH1cbiAgfVxufVxuIl19