"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EslintBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const builder_1 = require("./builder");
/**
 * Base class for Eslint builder implementing all relevant configuration.
 * @abstract
 */
class EslintBase extends builder_1.Builder {
    /**
     * Initializes the Eslint builder.
     * @param project The project to configure Eslint for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * File path to the Eslint config.
     * @return File path to config file.
     * @protected
     */
    get configFilePath() {
        return 'eslint.config.mjs';
    }
    /**
     * File template for the Eslint configuration.
     * @return Template for the config file.
     * @protected
     */
    get configTemplate() {
        const rulesString = Object.entries(this.rules)
            .map(([rule, setting]) => `      '${rule}': '${setting}',`)
            .join('\n');
        const ignoresString = this.ignoreFilePaths.map((path) => `'${path}'`).join(', ');
        return [
            '// Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
            '',
            "import eslint from '@eslint/js';",
            "import tseslint from 'typescript-eslint';",
            '',
            'export default tseslint.config(',
            '  eslint.configs.recommended,',
            '  ...tseslint.configs.recommended,',
            '  ...tseslint.configs.stylistic,',
            '  {',
            '    rules: {',
            rulesString,
            '    },',
            '  },',
            '  {',
            `    ignores: [${ignoresString}],`,
            '  },',
            ');',
        ];
    }
    /**
     * File paths to the Eslint ignore entries.
     * @return File paths for ignore file entries.
     * @protected
     */
    get ignoreFilePaths() {
        return ['docs/', 'test/'];
    }
    /**
     * Rules for the Eslint config entries.
     * @return Rule entries.
     * @protected
     */
    get rules() {
        return {
            'no-console': 'off',
            'require-atomic-updates': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/consistent-type-imports': 'off',
        };
    }
    /**
     * NPM scripts for the Eslint builder.
     * @return Npm script entries.
     * @protected
     */
    get scripts() {
        return {
            eslint: 'eslint .',
        };
    }
    /**
     * NPM packages to be installed as devDependencies for the Eslint builder.
     * @return Npm dev dependencies.
     * @protected
     */
    get devDependencies() {
        return ['eslint@^9.17.0', 'typescript-eslint@^8.18.1'];
    }
    /**
     * Creates the template file for the Eslint commit-msg hook.
     * @private
     */
    createConfigFile() {
        new projen_1.TextFile(this.project, this.configFilePath, {
            lines: this.configTemplate,
        });
    }
    addTemplates() {
        this.createConfigFile();
    }
    addScripts() {
        for (const [name, command] of Object.entries(this.scripts)) {
            this.project.addTask(name, { exec: command, receiveArgs: true });
        }
    }
    addDevDependencies() {
        this.project.addDevDeps(...this.devDependencies);
    }
}
exports.EslintBase = EslintBase;
_a = JSII_RTTI_SYMBOL_1;
EslintBase[_a] = { fqn: "@dxfrontier/projen-template-projects.EslintBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZXNsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQWtDO0FBQ2xDLHVDQUFvQztBQUlwQzs7O0dBR0c7QUFDSCxNQUFzQixVQUFXLFNBQVEsaUJBQU87SUFDOUM7OztPQUdHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGNBQWM7UUFDMUIsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsY0FBYztRQUMxQixNQUFNLFdBQVcsR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFtQixFQUFVLEVBQUUsQ0FBQyxVQUFVLElBQUksT0FBTyxPQUFPLElBQUksQ0FBQzthQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFZCxNQUFNLGFBQWEsR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVksRUFBVSxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6RyxPQUFPO1lBQ0wsMEVBQTBFO1lBQzFFLEVBQUU7WUFDRixrQ0FBa0M7WUFDbEMsMkNBQTJDO1lBQzNDLEVBQUU7WUFDRixpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLG9DQUFvQztZQUNwQyxrQ0FBa0M7WUFDbEMsS0FBSztZQUNMLGNBQWM7WUFDZCxXQUFXO1lBQ1gsUUFBUTtZQUNSLE1BQU07WUFDTixLQUFLO1lBQ0wsaUJBQWlCLGFBQWEsSUFBSTtZQUNsQyxNQUFNO1lBQ04sSUFBSTtTQUNMLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsZUFBZTtRQUMzQixPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxLQUFLO1FBQ2pCLE9BQU87WUFDTCxZQUFZLEVBQUUsS0FBSztZQUNuQix3QkFBd0IsRUFBRSxLQUFLO1lBQy9CLDBDQUEwQyxFQUFFLEtBQUs7WUFDakQsOEJBQThCLEVBQUUsS0FBSztZQUNyQyxrREFBa0QsRUFBRSxLQUFLO1lBQ3pELDRDQUE0QyxFQUFFLEtBQUs7U0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxNQUFNLEVBQUUsVUFBVTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGVBQWU7UUFDM0IsT0FBTyxDQUFDLGdCQUFnQixFQUFFLDJCQUEyQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGdCQUFnQjtRQUN0QixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzlDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYztTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsWUFBWTtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRVMsVUFBVTtRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUM7SUFDSCxDQUFDO0lBRVMsa0JBQWtCO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O0FBdkhILGdDQXdIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgU2NyaXB0cyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgRXNsaW50IGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFc2xpbnRCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgRXNsaW50IGJ1aWxkZXIuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBFc2xpbnQgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBFc2xpbnQgY29uZmlnLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBjb25maWcgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZXNsaW50LmNvbmZpZy5tanMnO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgdGVtcGxhdGUgZm9yIHRoZSBFc2xpbnQgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBUZW1wbGF0ZSBmb3IgdGhlIGNvbmZpZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGNvbmZpZ1RlbXBsYXRlKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBydWxlc1N0cmluZzogc3RyaW5nID0gT2JqZWN0LmVudHJpZXModGhpcy5ydWxlcylcbiAgICAgIC5tYXAoKFtydWxlLCBzZXR0aW5nXTogW3N0cmluZywgc3RyaW5nXSk6IHN0cmluZyA9PiBgICAgICAgJyR7cnVsZX0nOiAnJHtzZXR0aW5nfScsYClcbiAgICAgIC5qb2luKCdcXG4nKTtcblxuICAgIGNvbnN0IGlnbm9yZXNTdHJpbmc6IHN0cmluZyA9IHRoaXMuaWdub3JlRmlsZVBhdGhzLm1hcCgocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IGAnJHtwYXRofSdgKS5qb2luKCcsICcpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgICcvLyBHZW5lcmF0ZWQgYnkgcHJvamVuLlRvIG1vZGlmeSwgZWRpdC5wcm9qZW5yYy50cyBhbmQgcnVuIFwibnB4IHByb2plblwiLicsXG4gICAgICAnJyxcbiAgICAgIFwiaW1wb3J0IGVzbGludCBmcm9tICdAZXNsaW50L2pzJztcIixcbiAgICAgIFwiaW1wb3J0IHRzZXNsaW50IGZyb20gJ3R5cGVzY3JpcHQtZXNsaW50JztcIixcbiAgICAgICcnLFxuICAgICAgJ2V4cG9ydCBkZWZhdWx0IHRzZXNsaW50LmNvbmZpZygnLFxuICAgICAgJyAgZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsJyxcbiAgICAgICcgIC4uLnRzZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsJyxcbiAgICAgICcgIC4uLnRzZXNsaW50LmNvbmZpZ3Muc3R5bGlzdGljLCcsXG4gICAgICAnICB7JyxcbiAgICAgICcgICAgcnVsZXM6IHsnLFxuICAgICAgcnVsZXNTdHJpbmcsXG4gICAgICAnICAgIH0sJyxcbiAgICAgICcgIH0sJyxcbiAgICAgICcgIHsnLFxuICAgICAgYCAgICBpZ25vcmVzOiBbJHtpZ25vcmVzU3RyaW5nfV0sYCxcbiAgICAgICcgIH0sJyxcbiAgICAgICcpOycsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGhzIHRvIHRoZSBFc2xpbnQgaWdub3JlIGVudHJpZXMuXG4gICAqIEByZXR1cm4gRmlsZSBwYXRocyBmb3IgaWdub3JlIGZpbGUgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBpZ25vcmVGaWxlUGF0aHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2RvY3MvJywgJ3Rlc3QvJ107XG4gIH1cblxuICAvKipcbiAgICogUnVsZXMgZm9yIHRoZSBFc2xpbnQgY29uZmlnIGVudHJpZXMuXG4gICAqIEByZXR1cm4gUnVsZSBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHJ1bGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICAnbm8tY29uc29sZSc6ICdvZmYnLFxuICAgICAgJ3JlcXVpcmUtYXRvbWljLXVwZGF0ZXMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtaW1wb3J0cyc6ICdvZmYnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTlBNIHNjcmlwdHMgZm9yIHRoZSBFc2xpbnQgYnVpbGRlci5cbiAgICogQHJldHVybiBOcG0gc2NyaXB0IGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2NyaXB0cygpOiBTY3JpcHRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXNsaW50OiAnZXNsaW50IC4nLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTlBNIHBhY2thZ2VzIHRvIGJlIGluc3RhbGxlZCBhcyBkZXZEZXBlbmRlbmNpZXMgZm9yIHRoZSBFc2xpbnQgYnVpbGRlci5cbiAgICogQHJldHVybiBOcG0gZGV2IGRlcGVuZGVuY2llcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBkZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ2VzbGludEBeOS4xNy4wJywgJ3R5cGVzY3JpcHQtZXNsaW50QF44LjE4LjEnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0ZW1wbGF0ZSBmaWxlIGZvciB0aGUgRXNsaW50IGNvbW1pdC1tc2cgaG9vay5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlQ29uZmlnRmlsZSgpOiB2b2lkIHtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCB0aGlzLmNvbmZpZ0ZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5jb25maWdUZW1wbGF0ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVDb25maWdGaWxlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb21tYW5kXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNjcmlwdHMpKSB7XG4gICAgICB0aGlzLnByb2plY3QuYWRkVGFzayhuYW1lLCB7IGV4ZWM6IGNvbW1hbmQsIHJlY2VpdmVBcmdzOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhZGREZXZEZXBlbmRlbmNpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmFkZERldkRlcHMoLi4udGhpcy5kZXZEZXBlbmRlbmNpZXMpO1xuICB9XG59XG4iXX0=