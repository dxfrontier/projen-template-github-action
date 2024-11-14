"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const builder_1 = require("./builder");
/**
 * Base class for CommitLint builder implementing all relevant configuration.
 * @abstract
 */
class CommitLintBase extends builder_1.Builder {
    /**
     * Initializes the base CommitLint builder.
     * @param project The project to configure CommitLint for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * File path to the CommitLint configuration.
     * @return File path to config file.
     * @protected
     */
    get filePath() {
        return '.commitlintrc.ts';
    }
    /**
     * Template file for the CommitLint configuration.
     * @return Template for the config file.
     * @protected
     */
    get template() {
        return [
            '// Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
            '',
            // eslint-disable-next-line prettier/prettier
            "import type { UserConfig } from '@commitlint/types';",
            // eslint-disable-next-line prettier/prettier
            "import { RuleConfigSeverity } from '@commitlint/types';",
            '',
            'const Configuration: UserConfig = {',
            // eslint-disable-next-line prettier/prettier
            "  extends: ['@commitlint/config-conventional'],",
            '  rules: {',
            // eslint-disable-next-line prettier/prettier
            "    'type-enum': [",
            '      RuleConfigSeverity.Error,',
            // eslint-disable-next-line prettier/prettier
            "      'always',",
            // eslint-disable-next-line prettier/prettier
            "      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'delete'],",
            '    ],',
            // eslint-disable-next-line prettier/prettier
            "    'scope-empty': [RuleConfigSeverity.Error, 'never'],",
            // eslint-disable-next-line prettier/prettier
            "    'subject-empty': [RuleConfigSeverity.Error, 'never'],",
            '  },',
            // eslint-disable-next-line prettier/prettier
            "  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',",
            '};',
            '',
            'export default Configuration;',
        ];
    }
    /**
     * NPM scripts for the CommitLint builder.
     * @return Npm script entries.
     * @protected
     */
    get scripts() {
        return {
            commit: 'commit',
        };
    }
    /**
     * NPM packages to be installed as devDependencies for the CommitLint builder.
     * @return Npm dev dependencies.
     * @protected
     */
    get devDependencies() {
        return [
            '@commitlint/cli',
            '@commitlint/config-conventional',
            '@commitlint/prompt-cli',
            '@commitlint/types',
            'lint-staged',
        ];
    }
    /**
     * Settings to be added to package.json for the CommitLint builder.
     * @return Configuration entries for package.json.
     * @protected
     */
    get npmSettings() {
        return {};
    }
    addTemplates() {
        new projen_1.TextFile(this.project, this.filePath, {
            lines: this.template,
        });
    }
    addSettings() {
        this.project.addFields({
            'lint-staged': this.npmSettings,
        });
    }
    addScripts() {
        for (const [name, command] of Object.entries(this.scripts)) {
            this.project.addTask(name, { exec: command });
        }
    }
    addDevDependencies() {
        this.project.addDevDeps(...this.devDependencies);
    }
    addGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.filePath}`, 'linguist-generated');
    }
}
exports.CommitLintBase = CommitLintBase;
_a = JSII_RTTI_SYMBOL_1;
CommitLintBase[_a] = { fqn: "projen-template-projects.CommitLintBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNlL2NvbW1pdGxpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMsdUNBQW9DO0FBSXBDOzs7R0FHRztBQUNILE1BQXNCLGNBQWUsU0FBUSxpQkFBTztJQUNsRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU87WUFDTCwwRUFBMEU7WUFDMUUsRUFBRTtZQUNGLDZDQUE2QztZQUM3QyxzREFBc0Q7WUFDdEQsNkNBQTZDO1lBQzdDLHlEQUF5RDtZQUN6RCxFQUFFO1lBQ0YscUNBQXFDO1lBQ3JDLDZDQUE2QztZQUM3QyxpREFBaUQ7WUFDakQsWUFBWTtZQUNaLDZDQUE2QztZQUM3QyxvQkFBb0I7WUFDcEIsaUNBQWlDO1lBQ2pDLDZDQUE2QztZQUM3QyxpQkFBaUI7WUFDakIsNkNBQTZDO1lBQzdDLGlIQUFpSDtZQUNqSCxRQUFRO1lBQ1IsNkNBQTZDO1lBQzdDLHlEQUF5RDtZQUN6RCw2Q0FBNkM7WUFDN0MsMkRBQTJEO1lBQzNELE1BQU07WUFDTiw2Q0FBNkM7WUFDN0Msd0ZBQXdGO1lBQ3hGLElBQUk7WUFDSixFQUFFO1lBQ0YsK0JBQStCO1NBQ2hDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsT0FBTztRQUNuQixPQUFPO1lBQ0wsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE9BQU87WUFDTCxpQkFBaUI7WUFDakIsaUNBQWlDO1lBQ2pDLHdCQUF3QjtZQUN4QixtQkFBbUI7WUFDbkIsYUFBYTtTQUNkLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsV0FBVztRQUN2QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFUyxZQUFZO1FBQ3BCLElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsVUFBVTtRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVTLGtCQUFrQjtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRVMsZ0JBQWdCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7O0FBcEhILHdDQXFIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgTGludFN0YWdlZENvbmZpZywgU2NyaXB0cyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgQ29tbWl0TGludCBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tbWl0TGludEJhc2UgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIENvbW1pdExpbnQgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIENvbW1pdExpbnQgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBDb21taXRMaW50IGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIGNvbmZpZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuY29tbWl0bGludHJjLnRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBmaWxlIGZvciB0aGUgQ29tbWl0TGludCBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIFRlbXBsYXRlIGZvciB0aGUgY29uZmlnIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgdGVtcGxhdGUoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnLy8gR2VuZXJhdGVkIGJ5IHByb2plbi5UbyBtb2RpZnksIGVkaXQucHJvamVucmMudHMgYW5kIHJ1biBcIm5weCBwcm9qZW5cIi4nLFxuICAgICAgJycsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAnQGNvbW1pdGxpbnQvdHlwZXMnO1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcImltcG9ydCB7IFJ1bGVDb25maWdTZXZlcml0eSB9IGZyb20gJ0Bjb21taXRsaW50L3R5cGVzJztcIixcbiAgICAgICcnLFxuICAgICAgJ2NvbnN0IENvbmZpZ3VyYXRpb246IFVzZXJDb25maWcgPSB7JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgIGV4dGVuZHM6IFsnQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbCddLFwiLFxuICAgICAgJyAgcnVsZXM6IHsnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICAndHlwZS1lbnVtJzogW1wiLFxuICAgICAgJyAgICAgIFJ1bGVDb25maWdTZXZlcml0eS5FcnJvciwnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICAgICdhbHdheXMnLFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICAgIFsnYnVpbGQnLCAnY2hvcmUnLCAnY2knLCAnZG9jcycsICdmZWF0JywgJ2ZpeCcsICdwZXJmJywgJ3JlZmFjdG9yJywgJ3JldmVydCcsICdzdHlsZScsICd0ZXN0JywgJ2RlbGV0ZSddLFwiLFxuICAgICAgJyAgICBdLCcsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICAgICdzY29wZS1lbXB0eSc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsICduZXZlciddLFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICAnc3ViamVjdC1lbXB0eSc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsICduZXZlciddLFwiLFxuICAgICAgJyAgfSwnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgaGVscFVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb252ZW50aW9uYWwtY2hhbmdlbG9nL2NvbW1pdGxpbnQvI3doYXQtaXMtY29tbWl0bGludCcsXCIsXG4gICAgICAnfTsnLFxuICAgICAgJycsXG4gICAgICAnZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbjsnLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogTlBNIHNjcmlwdHMgZm9yIHRoZSBDb21taXRMaW50IGJ1aWxkZXIuXG4gICAqIEByZXR1cm4gTnBtIHNjcmlwdCBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbW1pdDogJ2NvbW1pdCcsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOUE0gcGFja2FnZXMgdG8gYmUgaW5zdGFsbGVkIGFzIGRldkRlcGVuZGVuY2llcyBmb3IgdGhlIENvbW1pdExpbnQgYnVpbGRlci5cbiAgICogQHJldHVybiBOcG0gZGV2IGRlcGVuZGVuY2llcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBkZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAnQGNvbW1pdGxpbnQvY2xpJyxcbiAgICAgICdAY29tbWl0bGludC9jb25maWctY29udmVudGlvbmFsJyxcbiAgICAgICdAY29tbWl0bGludC9wcm9tcHQtY2xpJyxcbiAgICAgICdAY29tbWl0bGludC90eXBlcycsXG4gICAgICAnbGludC1zdGFnZWQnLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogU2V0dGluZ3MgdG8gYmUgYWRkZWQgdG8gcGFja2FnZS5qc29uIGZvciB0aGUgQ29tbWl0TGludCBidWlsZGVyLlxuICAgKiBAcmV0dXJuIENvbmZpZ3VyYXRpb24gZW50cmllcyBmb3IgcGFja2FnZS5qc29uLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IG5wbVNldHRpbmdzKCk6IExpbnRTdGFnZWRDb25maWcge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgdGhpcy5maWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMudGVtcGxhdGUsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmFkZEZpZWxkcyh7XG4gICAgICAnbGludC1zdGFnZWQnOiB0aGlzLm5wbVNldHRpbmdzLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29tbWFuZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY3JpcHRzKSkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFRhc2sobmFtZSwgeyBleGVjOiBjb21tYW5kIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhZGREZXZEZXBlbmRlbmNpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmFkZERldkRlcHMoLi4udGhpcy5kZXZEZXBlbmRlbmNpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZEdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dGhpcy5maWxlUGF0aH1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gIH1cbn1cbiJdfQ==