"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeComponent = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
/**
 * Configures the VSCode templates, settings and npm scripts for the project.
 */
class VsCodeComponent {
    /**
     * Initializes the VSCode component.
     * @param project The project to configure VSCode for.
     */
    constructor(project) {
        this.project = project;
    }
    /**
     * Getter retrieving the file path for the VSCode settings configuration.
     */
    get settingsFilePath() {
        return '.vscode/settings.json';
    }
    /**
     * Getter retrieving the settings to be installed in VSCode.
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
    /**
     * Adds settings to the VSCode component.
     */
    add() {
        this.project.vscode?.settings.addSettings(this.settings);
    }
    /**
     * Configures the `.gitattributes` file to treat VSCode component related files as generated code, optimizing diffs.
     */
    updateGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.settingsFilePath}`, 'linguist-generated');
    }
    /**
     * Executes setup for the VSCode component.
     */
    setup() {
        this.add();
        this.updateGitAttributes();
    }
}
exports.VsCodeComponent = VsCodeComponent;
_a = JSII_RTTI_SYMBOL_1;
VsCodeComponent[_a] = { fqn: "projen-template-github-action.VsCodeComponent", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnNDb2RlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvVnNDb2RlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFHMUI7OztPQUdHO0lBQ0gsWUFBWSxPQUEwQjtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLGdCQUFnQjtRQUMxQixPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksUUFBUTtRQUNsQixPQUFPO1lBQ0wsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQix1QkFBdUIsRUFBRSxJQUFJO1lBQzdCLDhDQUE4QyxFQUFFLEtBQUs7WUFDckQsZ0RBQWdELEVBQUUsSUFBSTtZQUN0RCw2Q0FBNkMsRUFBRSxJQUFJO1lBQ25ELHdEQUF3RCxFQUFFLElBQUk7WUFDOUQsc0VBQXNFLEVBQUUsS0FBSztZQUM3RSxpRUFBaUUsRUFBRSxLQUFLO1lBQ3hFLHVEQUF1RCxFQUFFLElBQUk7WUFDN0QsOENBQThDLEVBQUUsSUFBSTtZQUNwRCw0QkFBNEIsRUFBRSxFQUFFO1lBQ2hDLDJCQUEyQixFQUFFLElBQUk7WUFDakMscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixzQkFBc0IsRUFBRSxJQUFJO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNWLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7O0FBNURILDBDQTZEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0IH0gZnJvbSAncHJvamVuL2xpYi90eXBlc2NyaXB0JztcbmltcG9ydCB7IElQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIFZTQ29kZSB0ZW1wbGF0ZXMsIHNldHRpbmdzIGFuZCBucG0gc2NyaXB0cyBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBWc0NvZGVDb21wb25lbnQgaW1wbGVtZW50cyBJUHJvamVjdENvbXBvbmVudCB7XG4gIHByaXZhdGUgcHJvamVjdDogVHlwZVNjcmlwdFByb2plY3Q7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBWU0NvZGUgY29tcG9uZW50LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgVlNDb2RlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgZmlsZSBwYXRoIGZvciB0aGUgVlNDb2RlIHNldHRpbmdzIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGdldCBzZXR0aW5nc0ZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcudnNjb2RlL3NldHRpbmdzLmpzb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBzZXR0aW5ncyB0byBiZSBpbnN0YWxsZWQgaW4gVlNDb2RlLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgc2V0dGluZ3MoKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZWRpdG9yLnRhYlNpemUnOiAyLFxuICAgICAgJ2VkaXRvci5zdGlja3lUYWJTdG9wcyc6IHRydWUsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLmVuYWJsZWQnOiAnYWxsJyxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMuZW51bU1lbWJlclZhbHVlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMudmFyaWFibGVUeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucHJvcGVydHlEZWNsYXJhdGlvblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJOYW1lcy5zdXBwcmVzc1doZW5Bcmd1bWVudE1hdGNoZXNOYW1lJzogZmFsc2UsXG4gICAgICAnamF2YXNjcmlwdC5pbmxheUhpbnRzLnZhcmlhYmxlVHlwZXMuc3VwcHJlc3NXaGVuVHlwZU1hdGNoZXNOYW1lJzogZmFsc2UsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLmZ1bmN0aW9uTGlrZVJldHVyblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJUeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICdlZGl0b3IuaW5sYXlIaW50cy5mb250U2l6ZSc6IDEwLFxuICAgICAgJ2VkaXRvci5pbmxheUhpbnRzLnBhZGRpbmcnOiB0cnVlLFxuICAgICAgJ2VkaXRvci5mb3JtYXRPblNhdmUnOiB0cnVlLFxuICAgICAgJ2VkaXRvci5mb3JtYXRPblBhc3RlJzogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgc2V0dGluZ3MgdG8gdGhlIFZTQ29kZSBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgYWRkKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC52c2NvZGU/LnNldHRpbmdzLmFkZFNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIGAuZ2l0YXR0cmlidXRlc2AgZmlsZSB0byB0cmVhdCBWU0NvZGUgY29tcG9uZW50IHJlbGF0ZWQgZmlsZXMgYXMgZ2VuZXJhdGVkIGNvZGUsIG9wdGltaXppbmcgZGlmZnMuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLnNldHRpbmdzRmlsZVBhdGh9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHNldHVwIGZvciB0aGUgVlNDb2RlIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZCgpO1xuICAgIHRoaXMudXBkYXRlR2l0QXR0cmlidXRlcygpO1xuICB9XG59XG4iXX0=