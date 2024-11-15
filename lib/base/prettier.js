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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZS9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwRjtBQUMxRix1Q0FBb0M7QUFJcEM7OztHQUdHO0FBQ0gsTUFBc0IsWUFBYSxTQUFRLGlCQUFPO0lBQ2hEOzs7T0FHRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQ0FBcUM7WUFDckMsMENBQTBDO1lBQzFDLHNDQUFzQztZQUN0QyxtQ0FBbUM7WUFDbkMsZ0NBQWdDO1lBQ2hDLDhCQUE4QjtZQUM5QixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsd0JBQXdCO1lBQ3hCLGFBQWE7WUFDYixVQUFVO1lBQ1Ysb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsZ0JBQWdCO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsYUFBYSxFQUFFLDBCQUFhLENBQUMsR0FBRztnQkFDaEMsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFFBQVEsRUFBRSxDQUFDO2FBQ1E7U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLGdCQUFnQixFQUFFLDZCQUE2QjtTQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVTLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRVMsVUFBVTtRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNJLGFBQWE7UUFDbEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNPLHdCQUF3QjtRQUNoQyxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0gsQ0FBQzs7QUFwSUgsb0NBcUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJldHRpZXJPdmVycmlkZSwgUHJldHRpZXJTZXR0aW5ncywgVHJhaWxpbmdDb21tYSB9IGZyb20gJ3Byb2plbi9saWIvamF2YXNjcmlwdCc7XG5pbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcbmltcG9ydCB7IFNjcmlwdHMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFByZXR0aWVyIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcmV0dGllckJhc2UgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIFByZXR0aWVyIGJ1aWxkZXIuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBQcmV0dGllciBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIFByZXR0aWVyIGlnbm9yZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBpZ25vcmUgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnByZXR0aWVyaWdub3JlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIFByZXR0aWVyIHNldHRpbmdzIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIHNldHRpbmcgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzZXR0aW5nc0ZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcucHJldHRpZXJyYy5qc29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGhzIHRvIHRoZSBQcmV0dGllciBpZ25vcmUgZW50cmllcy5cbiAgICogQHJldHVybiBGaWxlIHBhdGhzIGZvciBpZ25vcmUgZmlsZSBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZUZpbGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICcqLnNuYXAnLFxuICAgICAgJy8uY29tbWl0bGludHJjLnRzJyxcbiAgICAgICcvLmRldmNvbnRhaW5lci5qc29uJyxcbiAgICAgICcvLmVzbGludHJjLmpzb24nLFxuICAgICAgJy8uZ2l0YXR0cmlidXRlcycsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvYnVnLnltbCcsXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvZmVhdHVyZS55bWwnLFxuICAgICAgJy8uZ2l0aHViL0lTU1VFX1RFTVBMQVRFL2hvdXNla2VlcGluZy55bWwnLFxuICAgICAgJy8uZ2l0aHViL0lTU1VFX1RFTVBMQVRFL3F1ZXN0aW9uLnltbCcsXG4gICAgICAnLy5naXRodWIvcHVsbF9yZXF1ZXN0X3RlbXBsYXRlLm1kJyxcbiAgICAgICcvLmdpdGh1Yi93b3JrZmxvd3MvcmVsZWFzZS55bWwnLFxuICAgICAgJy8uZ2l0aHViL3dvcmtmbG93cy9zdGFsZS55bWwnLFxuICAgICAgJy8uZ2l0aWdub3JlJyxcbiAgICAgICcvLmh1c2t5L2NvbW1pdC1tc2cnLFxuICAgICAgJy8uaHVza3kvcHJlLWNvbW1pdCcsXG4gICAgICAnLy5ucG1pZ25vcmUnLFxuICAgICAgJy8ucHJldHRpZXJpZ25vcmUnLFxuICAgICAgJy8ucHJldHRpZXJyYy5qc29uJyxcbiAgICAgICcvLnByb2plbi8qKicsXG4gICAgICAnLy5wcm9qZW4vZGVwcy5qc29uJyxcbiAgICAgICcvLnByb2plbi9maWxlcy5qc29uJyxcbiAgICAgICcvLnByb2plbi90YXNrcy5qc29uJyxcbiAgICAgICcvLnZzY29kZS9zZXR0aW5ncy5qc29uJyxcbiAgICAgICcvY2xpZmYudG9tbCcsXG4gICAgICAnL0xJQ0VOU0UnLFxuICAgICAgJy9wYWNrYWdlLWxvY2suanNvbicsXG4gICAgICAnL3BhY2thZ2UuanNvbicsXG4gICAgICAnL3RzY29uZmlnLmRldi5qc29uJyxcbiAgICAgICcvdHNjb25maWcuanNvbicsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0aW5ncyBmb3IgdGhlIFByZXR0aWVyIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRW50cmllcyBmb3IgdGhlIHNldHRpbmdzIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3MoKTogUHJldHRpZXJPdmVycmlkZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVzOiAnKi4qJyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc2VtaTogdHJ1ZSxcbiAgICAgICAgdHJhaWxpbmdDb21tYTogVHJhaWxpbmdDb21tYS5BTEwsXG4gICAgICAgIHNpbmdsZVF1b3RlOiB0cnVlLFxuICAgICAgICBwcmludFdpZHRoOiAxMjAsXG4gICAgICAgIHRhYldpZHRoOiAyLFxuICAgICAgfSBhcyBQcmV0dGllclNldHRpbmdzLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTlBNIHNjcmlwdHMgdXNlZCBieSBQcmV0dGllci5cbiAgICogQHJldHVybiBOcG0gc2NyaXB0IGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2NyaXB0cygpOiBTY3JpcHRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2Zvcm1hdDpmaXgnOiAncHJldHRpZXIgLiAtLXdyaXRlJyxcbiAgICAgICdmb3JtYXQ6bWVzc2FnZSc6ICdlY2hvIFwiUHJldHRpZXIgc3RhcnRlZCAuLi5cIicsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRTZXR0aW5ncygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QucHJldHRpZXI/LmFkZE92ZXJyaWRlKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29tbWFuZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY3JpcHRzKSkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFRhc2sobmFtZSwgeyBleGVjOiBjb21tYW5kLCByZWNlaXZlQXJnczogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgcG9zdC1zeW50aGVzaXMgdGFza3MsIGZvY3VzaW5nIG9uIHVwZGF0aW5nIHRoZSBgLnByZXR0aWVyaWdub3JlYCBmaWxlIHdpdGggcGF0aHMgZnJvbSBgLmdpdGF0dHJpYnV0ZXNgLlxuICAgKlxuICAgKiBUcmllZCBzY2VuYXJpb3M6XG4gICAqICAgLSBBY2Nlc3NpbmcgYXR0cmlidXRlcyBkaXJlY3RseSBmcm9tIGAuZ2l0YXR0cmlidXRlc2AgZmlsZSAoYnV0IGAuZ2l0YXR0cmlidXRlc2AgaXMgcHJpdmF0ZSBhbmQgaW5hY2Nlc3NpYmxlKS5cbiAgICogICAgIFRoaXMgd291bGQgYmUgdGhlIG1vc3QgZWZmaWNpZW50IGFuZCBlbGVnYW50IHNvbHV0aW9uIGFzIGl0IGFsbG93cyB1cyB0byBhZGQgdGhlIGVudHJpZXMgdXNpbmcgQVBJLlxuICAgKiAgIC0gUmV0cmlldmluZyBhbGwgZmlsZXMgZnJvbSB0aGUgcHJvamVjdCAobWlzc2VzIHNvbWUgZmlsZXMgbGlrZSBgdHNjb25maWcuanNvbmApLlxuICAgKiAgIC0gTGV0dGluZyBlYWNoIGNvbXBvbmVudCBhZGQgaXRzIHBhdGhzIGluZGl2aWR1YWxseSAobGVhdmVzIG91dCBtYW55IHN0YW5kYXJkIGZpbGVzKS5cbiAgICogICAtIE1hbnVhbGx5IGFkZGluZyBwYXRocyAocHJvbmUgdG8gZXJyb3JzKS5cbiAgICogICAtIE1vZGlmeWluZyBgLnByZXR0aWVyaWdub3JlYCBhZnRlciBwb3N0LXN5bnRoZXNpcyAoYnV0IGAucHJldHRpZXJpZ25vcmVgIGlzIHJlYWRvbmx5KSBhbmQgbGVhZHMgdG8gdGVzdCBpc3N1ZXNcbiAgICogICAgIGFzIHRoZXNlIGNoYW5nZXMgYXJlIG5vdCByZWZsZWN0ZWQgaW4gYHN5bnRlc2l6ZSgpYC5cbiAgICpcbiAgICogV2Ugd2lsbCB1cGRhdGUgaXQgbWFudWFsbHkgYW5kIGNvdmVyIGl0IGJ5IHRlc3RzIGNhc2VzIGNoZWNraW5nIGlmIGNoYW5nZXMgb24gdGhlIGZpbGVzIGFyZSByZWZsZWN0ZWQgaGVyZS5cbiAgICovXG4gIHB1YmxpYyBwcmVTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUHJldHRpZXJJZ25vcmVFbnRyaWVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBlbnRyaWVzIHRvIHRoZSBgLnByZXR0aWVyaWdub3JlYCBmaWxlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFByZXR0aWVySWdub3JlRW50cmllcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuaWdub3JlRmlsZVBhdGhzKSB7XG4gICAgICB0aGlzLnByb2plY3QucHJldHRpZXI/LmFkZElnbm9yZVBhdHRlcm4oZW50cnkpO1xuICAgIH1cbiAgfVxufVxuIl19