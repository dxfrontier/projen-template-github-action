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
            'prettier:fix': 'prettier . --write',
            'prettier:message': 'echo "Prettier started ..."',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwRjtBQUMxRix1Q0FBb0M7QUFJcEM7OztHQUdHO0FBQ0gsTUFBc0IsWUFBYSxTQUFRLGlCQUFPO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQ0FBcUM7WUFDckMsMENBQTBDO1lBQzFDLHNDQUFzQztZQUN0QyxtQ0FBbUM7WUFDbkMsZ0NBQWdDO1lBQ2hDLDhCQUE4QjtZQUM5QixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLGFBQWE7WUFDYixVQUFVO1lBQ1Ysb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsZ0JBQWdCO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsYUFBYSxFQUFFLDBCQUFhLENBQUMsR0FBRztnQkFDaEMsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFFBQVEsRUFBRSxDQUFDO2FBQ1E7U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxjQUFjLEVBQUUsb0JBQW9CO1lBQ3BDLGtCQUFrQixFQUFFLDZCQUE2QjtTQUNsRCxDQUFDO0lBQ0osQ0FBQztJQUVTLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRVMsVUFBVTtRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBaUIsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3RSxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSSxhQUFhO1FBQ2xCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDTyx3QkFBd0I7UUFDaEMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNILENBQUM7O0FBcElILG9DQXFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyT3ZlcnJpZGUsIFByZXR0aWVyU2V0dGluZ3MsIFRyYWlsaW5nQ29tbWEgfSBmcm9tICdwcm9qZW4vbGliL2phdmFzY3JpcHQnO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBTY3JpcHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBQcmV0dGllciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJldHRpZXJCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBQcmV0dGllciBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgUHJldHRpZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBQcmV0dGllciBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gaWdub3JlIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5wcmV0dGllcmlnbm9yZSc7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBQcmV0dGllciBzZXR0aW5ncyBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBzZXR0aW5nIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3NGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnByZXR0aWVycmMuanNvbic7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRocyB0byB0aGUgUHJldHRpZXIgaWdub3JlIGVudHJpZXMuXG4gICAqIEByZXR1cm4gRmlsZSBwYXRocyBmb3IgaWdub3JlIGZpbGUgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnKi5zbmFwJyxcbiAgICAgICcvLmNvbW1pdGxpbnRyYy50cycsXG4gICAgICAnLy5kZXZjb250YWluZXIuanNvbicsXG4gICAgICAnLy5lc2xpbnRyYy5qc29uJyxcbiAgICAgICcvLmdpdGF0dHJpYnV0ZXMnLFxuICAgICAgJy8uZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2J1Zy55bWwnLFxuICAgICAgJy8uZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2ZlYXR1cmUueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9ob3VzZWtlZXBpbmcueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9xdWVzdGlvbi55bWwnLFxuICAgICAgJy8uZ2l0aHViL3B1bGxfcmVxdWVzdF90ZW1wbGF0ZS5tZCcsXG4gICAgICAnLy5naXRodWIvd29ya2Zsb3dzL3JlbGVhc2UueW1sJyxcbiAgICAgICcvLmdpdGh1Yi93b3JrZmxvd3Mvc3RhbGUueW1sJyxcbiAgICAgICcvLmdpdGlnbm9yZScsXG4gICAgICAnLy5odXNreS9jb21taXQtbXNnJyxcbiAgICAgICcvLmh1c2t5L3ByZS1jb21taXQnLFxuICAgICAgJy8ubnBtaWdub3JlJyxcbiAgICAgICcvLnByZXR0aWVyaWdub3JlJyxcbiAgICAgICcvLnByZXR0aWVycmMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vKionLFxuICAgICAgJy8ucHJvamVuL2RlcHMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vZmlsZXMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vdGFza3MuanNvbicsXG4gICAgICAnLy52c2NvZGUvc2V0dGluZ3MuanNvbicsXG4gICAgICAnL2NsaWZmLnRvbWwnLFxuICAgICAgJy9MSUNFTlNFJyxcbiAgICAgICcvcGFja2FnZS1sb2NrLmpzb24nLFxuICAgICAgJy9wYWNrYWdlLmpzb24nLFxuICAgICAgJy90c2NvbmZpZy5kZXYuanNvbicsXG4gICAgICAnL3RzY29uZmlnLmpzb24nLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogU2V0dGluZ3MgZm9yIHRoZSBQcmV0dGllciBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEVudHJpZXMgZm9yIHRoZSBzZXR0aW5ncyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNldHRpbmdzKCk6IFByZXR0aWVyT3ZlcnJpZGUge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogJyouKicsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNlbWk6IHRydWUsXG4gICAgICAgIHRyYWlsaW5nQ29tbWE6IFRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgcHJpbnRXaWR0aDogMTIwLFxuICAgICAgICB0YWJXaWR0aDogMixcbiAgICAgIH0gYXMgUHJldHRpZXJTZXR0aW5ncyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE5QTSBzY3JpcHRzIHVzZWQgYnkgUHJldHRpZXIuXG4gICAqIEByZXR1cm4gTnBtIHNjcmlwdCBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdwcmV0dGllcjpmaXgnOiAncHJldHRpZXIgLiAtLXdyaXRlJyxcbiAgICAgICdwcmV0dGllcjptZXNzYWdlJzogJ2VjaG8gXCJQcmV0dGllciBzdGFydGVkIC4uLlwiJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5wcmV0dGllcj8uYWRkT3ZlcnJpZGUodGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb21tYW5kXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNjcmlwdHMpKSB7XG4gICAgICB0aGlzLnByb2plY3QuYWRkVGFzayhuYW1lLCB7IGV4ZWM6IGNvbW1hbmQgYXMgc3RyaW5nLCByZWNlaXZlQXJnczogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgcG9zdC1zeW50aGVzaXMgdGFza3MsIGZvY3VzaW5nIG9uIHVwZGF0aW5nIHRoZSBgLnByZXR0aWVyaWdub3JlYCBmaWxlIHdpdGggcGF0aHMgZnJvbSBgLmdpdGF0dHJpYnV0ZXNgLlxuICAgKlxuICAgKiBUcmllZCBzY2VuYXJpb3M6XG4gICAqICAgLSBBY2Nlc3NpbmcgYXR0cmlidXRlcyBkaXJlY3RseSBmcm9tIGAuZ2l0YXR0cmlidXRlc2AgZmlsZSAoYnV0IGAuZ2l0YXR0cmlidXRlc2AgaXMgcHJpdmF0ZSBhbmQgaW5hY2Nlc3NpYmxlKS5cbiAgICogICAgIFRoaXMgd291bGQgYmUgdGhlIG1vc3QgZWZmaWNpZW50IGFuZCBlbGVnYW50IHNvbHV0aW9uIGFzIGl0IGFsbG93cyB1cyB0byBhZGQgdGhlIGVudHJpZXMgdXNpbmcgQVBJLlxuICAgKiAgIC0gUmV0cmlldmluZyBhbGwgZmlsZXMgZnJvbSB0aGUgcHJvamVjdCAobWlzc2VzIHNvbWUgZmlsZXMgbGlrZSBgdHNjb25maWcuanNvbmApLlxuICAgKiAgIC0gTGV0dGluZyBlYWNoIGNvbXBvbmVudCBhZGQgaXRzIHBhdGhzIGluZGl2aWR1YWxseSAobGVhdmVzIG91dCBtYW55IHN0YW5kYXJkIGZpbGVzKS5cbiAgICogICAtIE1hbnVhbGx5IGFkZGluZyBwYXRocyAocHJvbmUgdG8gZXJyb3JzKS5cbiAgICogICAtIE1vZGlmeWluZyBgLnByZXR0aWVyaWdub3JlYCBhZnRlciBwb3N0LXN5bnRoZXNpcyAoYnV0IGAucHJldHRpZXJpZ25vcmVgIGlzIHJlYWRvbmx5KSBhbmQgbGVhZHMgdG8gdGVzdCBpc3N1ZXNcbiAgICogICAgIGFzIHRoZXNlIGNoYW5nZXMgYXJlIG5vdCByZWZsZWN0ZWQgaW4gYHN5bnRlc2l6ZSgpYC5cbiAgICpcbiAgICogV2Ugd2lsbCB1cGRhdGUgaXQgbWFudWFsbHkgYW5kIGNvdmVyIGl0IGJ5IHRlc3RzIGNhc2VzIGNoZWNraW5nIGlmIGNoYW5nZXMgb24gdGhlIGZpbGVzIGFyZSByZWZsZWN0ZWQgaGVyZS5cbiAgICovXG4gIHB1YmxpYyBwcmVTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUHJldHRpZXJJZ25vcmVFbnRyaWVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBlbnRyaWVzIHRvIHRoZSBgLnByZXR0aWVyaWdub3JlYCBmaWxlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFByZXR0aWVySWdub3JlRW50cmllcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuaWdub3JlRmlsZVBhdGhzKSB7XG4gICAgICB0aGlzLnByb2plY3QucHJldHRpZXI/LmFkZElnbm9yZVBhdHRlcm4oZW50cnkpO1xuICAgIH1cbiAgfVxufVxuIl19