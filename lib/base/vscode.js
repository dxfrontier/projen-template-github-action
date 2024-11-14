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
     * @protected
     */
    get settingsFilePath() {
        return '.vscode/settings.json';
    }
    /**
     * Settings to be installed in VSCode.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvdnNjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQW9DO0FBR3BDOzs7R0FHRztBQUNILE1BQXNCLFVBQVcsU0FBUSxpQkFBTztJQUM5Qzs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxnQkFBZ0I7UUFDNUIsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHVCQUF1QixFQUFFLElBQUk7WUFDN0IsOENBQThDLEVBQUUsS0FBSztZQUNyRCxnREFBZ0QsRUFBRSxJQUFJO1lBQ3RELDZDQUE2QyxFQUFFLElBQUk7WUFDbkQsd0RBQXdELEVBQUUsSUFBSTtZQUM5RCxzRUFBc0UsRUFBRSxLQUFLO1lBQzdFLGlFQUFpRSxFQUFFLEtBQUs7WUFDeEUsdURBQXVELEVBQUUsSUFBSTtZQUM3RCw4Q0FBOEMsRUFBRSxJQUFJO1lBQ3BELDRCQUE0QixFQUFFLEVBQUU7WUFDaEMsMkJBQTJCLEVBQUUsSUFBSTtZQUNqQyxxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLHNCQUFzQixFQUFFLElBQUk7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFUyxnQkFBZ0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM5RixDQUFDOztBQTlDSCxnQ0ErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgVlNDb2RlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWU0NvZGVCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBWU0NvZGUgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFZTQ29kZSBidWlsZGVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgVlNDb2RlIHNldHRpbmdzIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2V0dGluZ3NGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnZzY29kZS9zZXR0aW5ncy5qc29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0aW5ncyB0byBiZSBpbnN0YWxsZWQgaW4gVlNDb2RlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNldHRpbmdzKCk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2VkaXRvci50YWJTaXplJzogMixcbiAgICAgICdlZGl0b3Iuc3RpY2t5VGFiU3RvcHMnOiB0cnVlLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5wYXJhbWV0ZXJOYW1lcy5lbmFibGVkJzogJ2FsbCcsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLmVudW1NZW1iZXJWYWx1ZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnZhcmlhYmxlVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLnByb3BlcnR5RGVjbGFyYXRpb25UeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0LmlubGF5SGludHMucGFyYW1ldGVyTmFtZXMuc3VwcHJlc3NXaGVuQXJndW1lbnRNYXRjaGVzTmFtZSc6IGZhbHNlLFxuICAgICAgJ2phdmFzY3JpcHQuaW5sYXlIaW50cy52YXJpYWJsZVR5cGVzLnN1cHByZXNzV2hlblR5cGVNYXRjaGVzTmFtZSc6IGZhbHNlLFxuICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5mdW5jdGlvbkxpa2VSZXR1cm5UeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucGFyYW1ldGVyVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAnZWRpdG9yLmlubGF5SGludHMuZm9udFNpemUnOiAxMCxcbiAgICAgICdlZGl0b3IuaW5sYXlIaW50cy5wYWRkaW5nJzogdHJ1ZSxcbiAgICAgICdlZGl0b3IuZm9ybWF0T25TYXZlJzogdHJ1ZSxcbiAgICAgICdlZGl0b3IuZm9ybWF0T25QYXN0ZSc6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRTZXR0aW5ncygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QudnNjb2RlPy5zZXR0aW5ncy5hZGRTZXR0aW5ncyh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRHaXRBdHRyaWJ1dGVzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3RoaXMuc2V0dGluZ3NGaWxlUGF0aH1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gIH1cbn1cbiJdfQ==