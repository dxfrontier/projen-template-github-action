"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeComponent = void 0;
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
        var _a;
        (_a = this.project.vscode) === null || _a === void 0 ? void 0 : _a.settings.addSettings(this.settings);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnNDb2RlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvVnNDb2RlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOztHQUVHO0FBQ0gsTUFBYSxlQUFlO0lBRzFCOzs7T0FHRztJQUNILFlBQVksT0FBMEI7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxnQkFBZ0I7UUFDMUIsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLFFBQVE7UUFDbEIsT0FBTztZQUNMLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsdUJBQXVCLEVBQUUsSUFBSTtZQUM3Qiw4Q0FBOEMsRUFBRSxLQUFLO1lBQ3JELGdEQUFnRCxFQUFFLElBQUk7WUFDdEQsNkNBQTZDLEVBQUUsSUFBSTtZQUNuRCx3REFBd0QsRUFBRSxJQUFJO1lBQzlELHNFQUFzRSxFQUFFLEtBQUs7WUFDN0UsaUVBQWlFLEVBQUUsS0FBSztZQUN4RSx1REFBdUQsRUFBRSxJQUFJO1lBQzdELDhDQUE4QyxFQUFFLElBQUk7WUFDcEQsNEJBQTRCLEVBQUUsRUFBRTtZQUNoQywyQkFBMkIsRUFBRSxJQUFJO1lBQ2pDLHFCQUFxQixFQUFFLElBQUk7WUFDM0Isc0JBQXNCLEVBQUUsSUFBSTtTQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksR0FBRzs7UUFDUixNQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSwwQ0FBRSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBN0RELDBDQTZEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0IH0gZnJvbSAncHJvamVuL2xpYi90eXBlc2NyaXB0JztcbmltcG9ydCB7IElQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIFZTQ29kZSB0ZW1wbGF0ZXMsIHNldHRpbmdzIGFuZCBucG0gc2NyaXB0cyBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBWc0NvZGVDb21wb25lbnQgaW1wbGVtZW50cyBJUHJvamVjdENvbXBvbmVudCB7XG4gIHByaXZhdGUgcHJvamVjdDogVHlwZVNjcmlwdFByb2plY3Q7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBWU0NvZGUgY29tcG9uZW50LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgVlNDb2RlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgZmlsZSBwYXRoIGZvciB0aGUgVlNDb2RlIHNldHRpbmdzIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGdldCBzZXR0aW5nc0ZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcudnNjb2RlL3NldHRpbmdzLmpzb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBzZXR0aW5ncyB0byBiZSBpbnN0YWxsZWQgaW4gVlNDb2RlLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgc2V0dGluZ3MoKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZWRpdG9yLnRhYlNpemUnOiAyLFxuICAgICAgJ2VkaXRvci5zdGlja3lUYWJTdG9wcyc6IHRydWUsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLmVuYWJsZWQnOiAnYWxsJyxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMuZW51bU1lbWJlclZhbHVlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMudmFyaWFibGVUeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucHJvcGVydHlEZWNsYXJhdGlvblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJOYW1lcy5zdXBwcmVzc1doZW5Bcmd1bWVudE1hdGNoZXNOYW1lJzogZmFsc2UsXG4gICAgICAnamF2YXNjcmlwdC5pbmxheUhpbnRzLnZhcmlhYmxlVHlwZXMuc3VwcHJlc3NXaGVuVHlwZU1hdGNoZXNOYW1lJzogZmFsc2UsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLmZ1bmN0aW9uTGlrZVJldHVyblR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJUeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICdlZGl0b3IuaW5sYXlIaW50cy5mb250U2l6ZSc6IDEwLFxuICAgICAgJ2VkaXRvci5pbmxheUhpbnRzLnBhZGRpbmcnOiB0cnVlLFxuICAgICAgJ2VkaXRvci5mb3JtYXRPblNhdmUnOiB0cnVlLFxuICAgICAgJ2VkaXRvci5mb3JtYXRPblBhc3RlJzogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgc2V0dGluZ3MgdG8gdGhlIFZTQ29kZSBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgYWRkKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC52c2NvZGU/LnNldHRpbmdzLmFkZFNldHRpbmdzKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIGAuZ2l0YXR0cmlidXRlc2AgZmlsZSB0byB0cmVhdCBWU0NvZGUgY29tcG9uZW50IHJlbGF0ZWQgZmlsZXMgYXMgZ2VuZXJhdGVkIGNvZGUsIG9wdGltaXppbmcgZGlmZnMuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLnNldHRpbmdzRmlsZVBhdGh9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHNldHVwIGZvciB0aGUgVlNDb2RlIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZCgpO1xuICAgIHRoaXMudXBkYXRlR2l0QXR0cmlidXRlcygpO1xuICB9XG59XG4iXX0=