"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const builder_1 = require("./builder");
/**
 * Base class for VsCode builder implementing all relevant configuration.
 * @abstract
 */
class VsCodeBase extends builder_1.Builder {
    /**
     * Initializes the base VsCode builder.
     * @param project The project to configure VsCode builder for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * File path to the VsCode settings configuration.
     * @return File path to settings file.
     * @protected
     */
    get settingsFilePath() {
        return '.vscode/settings.json';
    }
    /**
     * Settings to be installed in VsCode.
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
}
exports.VsCodeBase = VsCodeBase;
_a = JSII_RTTI_SYMBOL_1;
VsCodeBase[_a] = { fqn: "@dxfrontier/projen-template-projects.VsCodeBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvdnNjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBR3BDOzs7R0FHRztBQUNILE1BQXNCLFVBQVcsU0FBUSxpQkFBTztJQUM5Qzs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsZ0JBQWdCO1FBQzVCLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsdUJBQXVCLEVBQUUsSUFBSTtZQUM3Qiw4Q0FBOEMsRUFBRSxLQUFLO1lBQ3JELGdEQUFnRCxFQUFFLElBQUk7WUFDdEQsNkNBQTZDLEVBQUUsSUFBSTtZQUNuRCx3REFBd0QsRUFBRSxJQUFJO1lBQzlELHNFQUFzRSxFQUFFLEtBQUs7WUFDN0UsaUVBQWlFLEVBQUUsS0FBSztZQUN4RSx1REFBdUQsRUFBRSxJQUFJO1lBQzdELDhDQUE4QyxFQUFFLElBQUk7WUFDcEQsNEJBQTRCLEVBQUUsRUFBRTtZQUNoQywyQkFBMkIsRUFBRSxJQUFJO1lBQ2pDLHFCQUFxQixFQUFFLElBQUk7WUFDM0Isc0JBQXNCLEVBQUUsSUFBSTtTQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVTLFdBQVc7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7QUE1Q0gsZ0NBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFZzQ29kZSBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVnNDb2RlQmFzZSBleHRlbmRzIEJ1aWxkZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGJhc2UgVnNDb2RlIGJ1aWxkZXIuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBWc0NvZGUgYnVpbGRlciBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIFZzQ29kZSBzZXR0aW5ncyBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBzZXR0aW5ncyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNldHRpbmdzRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy52c2NvZGUvc2V0dGluZ3MuanNvbic7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGluZ3MgdG8gYmUgaW5zdGFsbGVkIGluIFZzQ29kZS5cbiAgICogQHJldHVybiBFbnRyaWVzIGZvciB0aGUgc2V0dGluZ3MgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzZXR0aW5ncygpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdlZGl0b3IudGFiU2l6ZSc6IDIsXG4gICAgICAnZWRpdG9yLnN0aWNreVRhYlN0b3BzJzogdHJ1ZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucGFyYW1ldGVyTmFtZXMuZW5hYmxlZCc6ICdhbGwnLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5lbnVtTWVtYmVyVmFsdWVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy52YXJpYWJsZVR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5wcm9wZXJ0eURlY2xhcmF0aW9uVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlck5hbWVzLnN1cHByZXNzV2hlbkFyZ3VtZW50TWF0Y2hlc05hbWUnOiBmYWxzZSxcbiAgICAgICdqYXZhc2NyaXB0LmlubGF5SGludHMudmFyaWFibGVUeXBlcy5zdXBwcmVzc1doZW5UeXBlTWF0Y2hlc05hbWUnOiBmYWxzZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMuZnVuY3Rpb25MaWtlUmV0dXJuVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnBhcmFtZXRlclR5cGVzLmVuYWJsZWQnOiB0cnVlLFxuICAgICAgJ2VkaXRvci5pbmxheUhpbnRzLmZvbnRTaXplJzogMTAsXG4gICAgICAnZWRpdG9yLmlubGF5SGludHMucGFkZGluZyc6IHRydWUsXG4gICAgICAnZWRpdG9yLmZvcm1hdE9uU2F2ZSc6IHRydWUsXG4gICAgICAnZWRpdG9yLmZvcm1hdE9uUGFzdGUnOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LnZzY29kZT8uc2V0dGluZ3MuYWRkU2V0dGluZ3ModGhpcy5zZXR0aW5ncyk7XG4gIH1cbn1cbiJdfQ==