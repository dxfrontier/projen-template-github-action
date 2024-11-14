"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSCodeBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const builder_1 = require("./builder");
/**
 * Base class for VSCode builder implementing all relevant configuration.
 * @abstract
 */
class VSCodeBase extends builder_1.Builder {
    /**
     * Initializes the base VSCode builder.
     * @param project The project to configure VSCode builder for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * File path to the VSCode settings configuration.
     * @return File path to settings file.
     * @protected
     */
    get settingsFilePath() {
        return '.vscode/settings.json';
    }
    /**
     * Settings to be installed in VSCode.
     * @return Entries for the settings file.
     * @protected
     */
    get settings() {
        return {
            'editor.tabSize': 2,
            'editor.stickyTabStops': true,
            'typescript.inlayHints.parameterNames.enabled': 'all',
            'typescript.inlayHints.enumMemberValues.enabled': true,
            'typescript.inlayHints.variableTypes.enabled': true,
            'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
            'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
            'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
            'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
            'typescript.inlayHints.parameterTypes.enabled': true,
            'editor.inlayHints.fontSize': 10,
            'editor.inlayHints.padding': true,
            'editor.formatOnSave': true,
            'editor.formatOnPaste': true,
        };
    }
    addSettings() {
        this.project.vscode?.settings.addSettings(this.settings);
    }
    addGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.settingsFilePath}`, 'linguist-generated');
    }
}
exports.VSCodeBase = VSCodeBase;
_a = JSII_RTTI_SYMBOL_1;
VSCodeBase[_a] = { fqn: "projen-template-projects.VSCodeBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvdnNjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBR3BDOzs7R0FHRztBQUNILE1BQXNCLFVBQVcsU0FBUSxpQkFBTztJQUM5Qzs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsZ0JBQWdCO1FBQzVCLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsdUJBQXVCLEVBQUUsSUFBSTtZQUM3Qiw4Q0FBOEMsRUFBRSxLQUFLO1lBQ3JELGdEQUFnRCxFQUFFLElBQUk7WUFDdEQsNkNBQTZDLEVBQUUsSUFBSTtZQUNuRCx3REFBd0QsRUFBRSxJQUFJO1lBQzlELHNFQUFzRSxFQUFFLEtBQUs7WUFDN0UsaUVBQWlFLEVBQUUsS0FBSztZQUN4RSx1REFBdUQsRUFBRSxJQUFJO1lBQzdELDhDQUE4QyxFQUFFLElBQUk7WUFDcEQsNEJBQTRCLEVBQUUsRUFBRTtZQUNoQywyQkFBMkIsRUFBRSxJQUFJO1lBQ2pDLHFCQUFxQixFQUFFLElBQUk7WUFDM0Isc0JBQXNCLEVBQUUsSUFBSTtTQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVTLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVTLGdCQUFnQjtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlGLENBQUM7O0FBaERILGdDQWlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBWU0NvZGUgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZTQ29kZUJhc2UgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIFZTQ29kZSBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgVlNDb2RlIGJ1aWxkZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBWU0NvZGUgc2V0dGluZ3MgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gc2V0dGluZ3MgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzZXR0aW5nc0ZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcudnNjb2RlL3NldHRpbmdzLmpzb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRpbmdzIHRvIGJlIGluc3RhbGxlZCBpbiBWU0NvZGUuXG4gICAqIEByZXR1cm4gRW50cmllcyBmb3IgdGhlIHNldHRpbmdzIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3MoKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZWRpdG9yLnRhYlNpemUnOiAyLFxuICAgICAgJ2VkaXRvci5zdGlja3lUYWJTdG9wcyc6IHRydWUsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLmVuYWJsZWQnOiAnYWxsJyxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMuZW51bU1lbWJlclZhbHVlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMudmFyaWFibGVUeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucHJvcGVydHlEZWNsYXJhdGlvblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJOYW1lcy5zdXBwcmVzc1doZW5Bcmd1bWVudE1hdGNoZXNOYW1lJzogZmFsc2UsXG4gICAgICAnamF2YXNjcmlwdC5pbmxheUhpbnRzLnZhcmlhYmxlVHlwZXMuc3VwcHJlc3NXaGVuVHlwZU1hdGNoZXNOYW1lJzogZmFsc2UsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLmZ1bmN0aW9uTGlrZVJldHVyblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJUeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICdlZGl0b3IuaW5sYXlIaW50cy5mb250U2l6ZSc6IDEwLFxuICAgICAgJ2VkaXRvci5pbmxheUhpbnRzLnBhZGRpbmcnOiB0cnVlLFxuICAgICAgJ2VkaXRvci5mb3JtYXRPblNhdmUnOiB0cnVlLFxuICAgICAgJ2VkaXRvci5mb3JtYXRPblBhc3RlJzogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNldHRpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC52c2NvZGU/LnNldHRpbmdzLmFkZFNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZEdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dGhpcy5zZXR0aW5nc0ZpbGVQYXRofWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgfVxufVxuIl19