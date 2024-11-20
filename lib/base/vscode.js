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
    /**
     * @override
     */
    addSettings() {
        this.project.vscode?.settings.addSettings(this.settings);
    }
}
exports.VsCodeBase = VsCodeBase;
_a = JSII_RTTI_SYMBOL_1;
VsCodeBase[_a] = { fqn: "@dxfrontier/projen-template-projects.VsCodeBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvdnNjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBR3BDOzs7R0FHRztBQUNILE1BQXNCLFVBQVcsU0FBUSxpQkFBTztJQUM5Qzs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsZ0JBQWdCO1FBQzVCLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsdUJBQXVCLEVBQUUsSUFBSTtZQUM3Qiw4Q0FBOEMsRUFBRSxLQUFLO1lBQ3JELGdEQUFnRCxFQUFFLElBQUk7WUFDdEQsNkNBQTZDLEVBQUUsSUFBSTtZQUNuRCx3REFBd0QsRUFBRSxJQUFJO1lBQzlELHNFQUFzRSxFQUFFLEtBQUs7WUFDN0UsaUVBQWlFLEVBQUUsS0FBSztZQUN4RSx1REFBdUQsRUFBRSxJQUFJO1lBQzdELDhDQUE4QyxFQUFFLElBQUk7WUFDcEQsNEJBQTRCLEVBQUUsRUFBRTtZQUNoQywyQkFBMkIsRUFBRSxJQUFJO1lBQ2pDLHFCQUFxQixFQUFFLElBQUk7WUFDM0Isc0JBQXNCLEVBQUUsSUFBSTtTQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sV0FBVztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOztBQS9DSCxnQ0FnREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgVnNDb2RlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWc0NvZGVCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBWc0NvZGUgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFZzQ29kZSBidWlsZGVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgVnNDb2RlIHNldHRpbmdzIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIHNldHRpbmdzIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3NGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnZzY29kZS9zZXR0aW5ncy5qc29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0aW5ncyB0byBiZSBpbnN0YWxsZWQgaW4gVnNDb2RlLlxuICAgKiBAcmV0dXJuIEVudHJpZXMgZm9yIHRoZSBzZXR0aW5ncyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNldHRpbmdzKCk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2VkaXRvci50YWJTaXplJzogMixcbiAgICAgICdlZGl0b3Iuc3RpY2t5VGFiU3RvcHMnOiB0cnVlLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJOYW1lcy5lbmFibGVkJzogJ2FsbCcsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLmVudW1NZW1iZXJWYWx1ZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnZhcmlhYmxlVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnByb3BlcnR5RGVjbGFyYXRpb25UeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0LmlubGF5SGludHMucGFyYW1ldGVyTmFtZXMuc3VwcHJlc3NXaGVuQXJndW1lbnRNYXRjaGVzTmFtZSc6IGZhbHNlLFxuICAgICAgJ2phdmFzY3JpcHQuaW5sYXlIaW50cy52YXJpYWJsZVR5cGVzLnN1cHByZXNzV2hlblR5cGVNYXRjaGVzTmFtZSc6IGZhbHNlLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5mdW5jdGlvbkxpa2VSZXR1cm5UeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucGFyYW1ldGVyVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAnZWRpdG9yLmlubGF5SGludHMuZm9udFNpemUnOiAxMCxcbiAgICAgICdlZGl0b3IuaW5sYXlIaW50cy5wYWRkaW5nJzogdHJ1ZSxcbiAgICAgICdlZGl0b3IuZm9ybWF0T25TYXZlJzogdHJ1ZSxcbiAgICAgICdlZGl0b3IuZm9ybWF0T25QYXN0ZSc6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBhZGRTZXR0aW5ncygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QudnNjb2RlPy5zZXR0aW5ncy5hZGRTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcbiAgfVxufVxuIl19