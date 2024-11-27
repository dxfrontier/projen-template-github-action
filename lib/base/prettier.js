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
    /**
     * @override
     */
    addSettings() {
        this.project.prettier?.addOverride(this.settings);
    }
    /**
     * @override
     */
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
    /**
     * @override
     */
    preSynthesize() {
        this.addPrettierIgnoreEntries();
    }
    /**
     * Adds entries to the `.prettierignore` file.
     * @protected
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwRjtBQUMxRix1Q0FBb0M7QUFJcEM7OztHQUdHO0FBQ0gsTUFBc0IsWUFBYSxTQUFRLGlCQUFPO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQ0FBcUM7WUFDckMsMENBQTBDO1lBQzFDLHNDQUFzQztZQUN0QyxtQ0FBbUM7WUFDbkMsZ0NBQWdDO1lBQ2hDLDhCQUE4QjtZQUM5QixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLFVBQVU7WUFDVixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixnQkFBZ0I7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsSUFBSTtnQkFDVixhQUFhLEVBQUUsMEJBQWEsQ0FBQyxHQUFHO2dCQUNoQyxXQUFXLEVBQUUsSUFBSTtnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLENBQUM7YUFDUTtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNPLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxVQUFVO1FBQ2xCLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFpQixFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNIOztPQUVHO0lBQ0ksYUFBYTtRQUNsQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sd0JBQXdCO1FBQ2hDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDOztBQTNJSCxvQ0E0SUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmV0dGllck92ZXJyaWRlLCBQcmV0dGllclNldHRpbmdzLCBUcmFpbGluZ0NvbW1hIH0gZnJvbSAncHJvamVuL2xpYi9qYXZhc2NyaXB0JztcbmltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgU2NyaXB0cyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgUHJldHRpZXIgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByZXR0aWVyQmFzZSBleHRlbmRzIEJ1aWxkZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGJhc2UgUHJldHRpZXIgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFByZXR0aWVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgUHJldHRpZXIgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIGlnbm9yZSBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZUZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcucHJldHRpZXJpZ25vcmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgUHJldHRpZXIgc2V0dGluZ3MgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gc2V0dGluZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNldHRpbmdzRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5wcmV0dGllcnJjLmpzb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aHMgdG8gdGhlIFByZXR0aWVyIGlnbm9yZSBlbnRyaWVzLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aHMgZm9yIGlnbm9yZSBmaWxlIGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJyouc25hcCcsXG4gICAgICAnLy5jb21taXRsaW50cmMudHMnLFxuICAgICAgJy8uZGV2Y29udGFpbmVyLmpzb24nLFxuICAgICAgJy8uZXNsaW50cmMuanNvbicsXG4gICAgICAnLy5naXRhdHRyaWJ1dGVzJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9idWcueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9JU1NVRV9URU1QTEFURS9mZWF0dXJlLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvaG91c2VrZWVwaW5nLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvcXVlc3Rpb24ueW1sJyxcbiAgICAgICcvLmdpdGh1Yi9wdWxsX3JlcXVlc3RfdGVtcGxhdGUubWQnLFxuICAgICAgJy8uZ2l0aHViL3dvcmtmbG93cy9yZWxlYXNlLnltbCcsXG4gICAgICAnLy5naXRodWIvd29ya2Zsb3dzL3N0YWxlLnltbCcsXG4gICAgICAnLy5naXRpZ25vcmUnLFxuICAgICAgJy8uaHVza3kvY29tbWl0LW1zZycsXG4gICAgICAnLy5odXNreS9wcmUtY29tbWl0JyxcbiAgICAgICcvLnByZXR0aWVyaWdub3JlJyxcbiAgICAgICcvLnByZXR0aWVycmMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vKionLFxuICAgICAgJy8ucHJvamVuL2RlcHMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vZmlsZXMuanNvbicsXG4gICAgICAnLy5wcm9qZW4vdGFza3MuanNvbicsXG4gICAgICAnLy52c2NvZGUvc2V0dGluZ3MuanNvbicsXG4gICAgICAnL2NsaWZmLnRvbWwnLFxuICAgICAgJy9MSUNFTlNFJyxcbiAgICAgICcvcGFja2FnZS1sb2NrLmpzb24nLFxuICAgICAgJy9wYWNrYWdlLmpzb24nLFxuICAgICAgJy90c2NvbmZpZy5kZXYuanNvbicsXG4gICAgICAnL3RzY29uZmlnLmpzb24nLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogU2V0dGluZ3MgZm9yIHRoZSBQcmV0dGllciBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEVudHJpZXMgZm9yIHRoZSBzZXR0aW5ncyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNldHRpbmdzKCk6IFByZXR0aWVyT3ZlcnJpZGUge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogJyouKicsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNlbWk6IHRydWUsXG4gICAgICAgIHRyYWlsaW5nQ29tbWE6IFRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgcHJpbnRXaWR0aDogMTIwLFxuICAgICAgICB0YWJXaWR0aDogMixcbiAgICAgIH0gYXMgUHJldHRpZXJTZXR0aW5ncyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE5QTSBzY3JpcHRzIHVzZWQgYnkgUHJldHRpZXIuXG4gICAqIEByZXR1cm4gTnBtIHNjcmlwdCBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXR0aWVyOiAncHJldHRpZXIgLiAtLXdyaXRlJyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5wcmV0dGllcj8uYWRkT3ZlcnJpZGUodGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb21tYW5kXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNjcmlwdHMpKSB7XG4gICAgICB0aGlzLnByb2plY3QuYWRkVGFzayhuYW1lLCB7IGV4ZWM6IGNvbW1hbmQgYXMgc3RyaW5nLCByZWNlaXZlQXJnczogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgcG9zdC1zeW50aGVzaXMgdGFza3MsIGZvY3VzaW5nIG9uIHVwZGF0aW5nIHRoZSBgLnByZXR0aWVyaWdub3JlYCBmaWxlIHdpdGggcGF0aHMgZnJvbSBgLmdpdGF0dHJpYnV0ZXNgLlxuICAgKlxuICAgKiBUcmllZCBzY2VuYXJpb3M6XG4gICAqICAgLSBBY2Nlc3NpbmcgYXR0cmlidXRlcyBkaXJlY3RseSBmcm9tIGAuZ2l0YXR0cmlidXRlc2AgZmlsZSAoYnV0IGAuZ2l0YXR0cmlidXRlc2AgaXMgcHJpdmF0ZSBhbmQgaW5hY2Nlc3NpYmxlKS5cbiAgICogICAgIFRoaXMgd291bGQgYmUgdGhlIG1vc3QgZWZmaWNpZW50IGFuZCBlbGVnYW50IHNvbHV0aW9uIGFzIGl0IGFsbG93cyB1cyB0byBhZGQgdGhlIGVudHJpZXMgdXNpbmcgQVBJLlxuICAgKiAgIC0gUmV0cmlldmluZyBhbGwgZmlsZXMgZnJvbSB0aGUgcHJvamVjdCAobWlzc2VzIHNvbWUgZmlsZXMgbGlrZSBgdHNjb25maWcuanNvbmApLlxuICAgKiAgIC0gTGV0dGluZyBlYWNoIGNvbXBvbmVudCBhZGQgaXRzIHBhdGhzIGluZGl2aWR1YWxseSAobGVhdmVzIG91dCBtYW55IHN0YW5kYXJkIGZpbGVzKS5cbiAgICogICAtIE1hbnVhbGx5IGFkZGluZyBwYXRocyAocHJvbmUgdG8gZXJyb3JzKS5cbiAgICogICAtIE1vZGlmeWluZyBgLnByZXR0aWVyaWdub3JlYCBhZnRlciBwb3N0LXN5bnRoZXNpcyAoYnV0IGAucHJldHRpZXJpZ25vcmVgIGlzIHJlYWRvbmx5KSBhbmQgbGVhZHMgdG8gdGVzdCBpc3N1ZXNcbiAgICogICAgIGFzIHRoZXNlIGNoYW5nZXMgYXJlIG5vdCByZWZsZWN0ZWQgaW4gYHN5bnRlc2l6ZSgpYC5cbiAgICpcbiAgICogV2Ugd2lsbCB1cGRhdGUgaXQgbWFudWFsbHkgYW5kIGNvdmVyIGl0IGJ5IHRlc3RzIGNhc2VzIGNoZWNraW5nIGlmIGNoYW5nZXMgb24gdGhlIGZpbGVzIGFyZSByZWZsZWN0ZWQgaGVyZS5cbiAgICovXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHB1YmxpYyBwcmVTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUHJldHRpZXJJZ25vcmVFbnRyaWVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBlbnRyaWVzIHRvIHRoZSBgLnByZXR0aWVyaWdub3JlYCBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkUHJldHRpZXJJZ25vcmVFbnRyaWVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5pZ25vcmVGaWxlUGF0aHMpIHtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllcj8uYWRkSWdub3JlUGF0dGVybihlbnRyeSk7XG4gICAgfVxuICB9XG59XG4iXX0=