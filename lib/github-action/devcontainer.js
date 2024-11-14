"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainer = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * DevContainer builder implementing all relevant configuration for the project.
 */
class DevContainer extends base_1.DevContainerBase {
    /**
     * Initializes the DevContainer builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * VsCode extensions to be installed in the DevContainer.
     * @return Extensions used in container.
     * @protected
     * @override
     */
    get extensions() {
        return [
            // Jest
            'Orta.vscode-jest',
            'firsttris.vscode-jest-runner',
            // Rest
            'humao.rest-client',
            // VsCode
            'aaron-bond.better-comments',
            'alefragnani.Bookmarks',
            'alefragnani.project-manager',
            // NPM
            'christian-kohler.npm-intellisense',
            'mskelton.npm-outdated',
            // Theme
            'PKief.material-icon-theme',
            'zhuangtongfa.material-theme',
            'GitHub.github-vscode-theme',
            // Docker
            'ms-vscode-remote.remote-containers',
            // .env
            'mikestead.dotenv',
            // TypeScript
            'usernamehw.errorlens',
            'dbaeumer.vscode-eslint',
            'oderwat.indent-rainbow',
            'esbenp.prettier-vscode',
            'YoavBls.pretty-ts-errors',
            'streetsidesoftware.code-spell-checker',
            'wayou.vscode-todo-highlight',
            'mike-co.import-sorter',
            'VisualStudioExptTeam.vscodeintellicode',
            // XML & YAML'
            'redhat.vscode-yaml',
            'DotJoshJohnson.xml',
            // Git
            'waderyan.gitblame',
            'donjayamanne.githistory',
            'GitHub.vscode-pull-request-github',
            // README
            'yzhang.markdown-all-in-one',
            'DavidAnson.vscode-markdownlint',
            'bierner.jsdoc-markdown-highlighting',
            // Others
            'VisualStudioExptTeam.vscodeintellicode',
            'christian-kohler.path-intellisense',
            'AykutSarac.jsoncrack-vscode',
            'tamasfe.even-better-toml',
        ];
    }
}
exports.DevContainer = DevContainer;
_a = JSII_RTTI_SYMBOL_1;
DevContainer[_a] = { fqn: "projen-template-projects.DevContainer", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWtFO0FBRWxFOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsdUJBQWdCO0lBQ2hEOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBYyxVQUFVO1FBQ3RCLE9BQU87WUFDTCxPQUFPO1lBQ1Asa0JBQWtCO1lBQ2xCLDhCQUE4QjtZQUU5QixPQUFPO1lBQ1AsbUJBQW1CO1lBRW5CLFNBQVM7WUFDVCw0QkFBNEI7WUFDNUIsdUJBQXVCO1lBQ3ZCLDZCQUE2QjtZQUU3QixNQUFNO1lBQ04sbUNBQW1DO1lBQ25DLHVCQUF1QjtZQUV2QixRQUFRO1lBQ1IsMkJBQTJCO1lBQzNCLDZCQUE2QjtZQUM3Qiw0QkFBNEI7WUFFNUIsU0FBUztZQUNULG9DQUFvQztZQUVwQyxPQUFPO1lBQ1Asa0JBQWtCO1lBRWxCLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsMEJBQTBCO1lBQzFCLHVDQUF1QztZQUN2Qyw2QkFBNkI7WUFDN0IsdUJBQXVCO1lBQ3ZCLHdDQUF3QztZQUV4QyxjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUVwQixNQUFNO1lBQ04sbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6QixtQ0FBbUM7WUFFbkMsU0FBUztZQUNULDRCQUE0QjtZQUM1QixnQ0FBZ0M7WUFDaEMscUNBQXFDO1lBRXJDLFNBQVM7WUFDVCx3Q0FBd0M7WUFDeEMsb0NBQW9DO1lBQ3BDLDZCQUE2QjtZQUM3QiwwQkFBMEI7U0FDM0IsQ0FBQztJQUNKLENBQUM7O0FBOUVILG9DQStFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldkNvbnRhaW5lckJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG4vKipcbiAqIERldkNvbnRhaW5lciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZDb250YWluZXIgZXh0ZW5kcyBEZXZDb250YWluZXJCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBEZXZDb250YWluZXIgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIENvbW1pdExpbnQgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogVnNDb2RlIGV4dGVuc2lvbnMgdG8gYmUgaW5zdGFsbGVkIGluIHRoZSBEZXZDb250YWluZXIuXG4gICAqIEByZXR1cm4gRXh0ZW5zaW9ucyB1c2VkIGluIGNvbnRhaW5lci5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIEplc3RcbiAgICAgICdPcnRhLnZzY29kZS1qZXN0JyxcbiAgICAgICdmaXJzdHRyaXMudnNjb2RlLWplc3QtcnVubmVyJyxcblxuICAgICAgLy8gUmVzdFxuICAgICAgJ2h1bWFvLnJlc3QtY2xpZW50JyxcblxuICAgICAgLy8gVnNDb2RlXG4gICAgICAnYWFyb24tYm9uZC5iZXR0ZXItY29tbWVudHMnLFxuICAgICAgJ2FsZWZyYWduYW5pLkJvb2ttYXJrcycsXG4gICAgICAnYWxlZnJhZ25hbmkucHJvamVjdC1tYW5hZ2VyJyxcblxuICAgICAgLy8gTlBNXG4gICAgICAnY2hyaXN0aWFuLWtvaGxlci5ucG0taW50ZWxsaXNlbnNlJyxcbiAgICAgICdtc2tlbHRvbi5ucG0tb3V0ZGF0ZWQnLFxuXG4gICAgICAvLyBUaGVtZVxuICAgICAgJ1BLaWVmLm1hdGVyaWFsLWljb24tdGhlbWUnLFxuICAgICAgJ3podWFuZ3RvbmdmYS5tYXRlcmlhbC10aGVtZScsXG4gICAgICAnR2l0SHViLmdpdGh1Yi12c2NvZGUtdGhlbWUnLFxuXG4gICAgICAvLyBEb2NrZXJcbiAgICAgICdtcy12c2NvZGUtcmVtb3RlLnJlbW90ZS1jb250YWluZXJzJyxcblxuICAgICAgLy8gLmVudlxuICAgICAgJ21pa2VzdGVhZC5kb3RlbnYnLFxuXG4gICAgICAvLyBUeXBlU2NyaXB0XG4gICAgICAndXNlcm5hbWVody5lcnJvcmxlbnMnLFxuICAgICAgJ2RiYWV1bWVyLnZzY29kZS1lc2xpbnQnLFxuICAgICAgJ29kZXJ3YXQuaW5kZW50LXJhaW5ib3cnLFxuICAgICAgJ2VzYmVucC5wcmV0dGllci12c2NvZGUnLFxuICAgICAgJ1lvYXZCbHMucHJldHR5LXRzLWVycm9ycycsXG4gICAgICAnc3RyZWV0c2lkZXNvZnR3YXJlLmNvZGUtc3BlbGwtY2hlY2tlcicsXG4gICAgICAnd2F5b3UudnNjb2RlLXRvZG8taGlnaGxpZ2h0JyxcbiAgICAgICdtaWtlLWNvLmltcG9ydC1zb3J0ZXInLFxuICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcblxuICAgICAgLy8gWE1MICYgWUFNTCdcbiAgICAgICdyZWRoYXQudnNjb2RlLXlhbWwnLFxuICAgICAgJ0RvdEpvc2hKb2huc29uLnhtbCcsXG5cbiAgICAgIC8vIEdpdFxuICAgICAgJ3dhZGVyeWFuLmdpdGJsYW1lJyxcbiAgICAgICdkb25qYXlhbWFubmUuZ2l0aGlzdG9yeScsXG4gICAgICAnR2l0SHViLnZzY29kZS1wdWxsLXJlcXVlc3QtZ2l0aHViJyxcblxuICAgICAgLy8gUkVBRE1FXG4gICAgICAneXpoYW5nLm1hcmtkb3duLWFsbC1pbi1vbmUnLFxuICAgICAgJ0RhdmlkQW5zb24udnNjb2RlLW1hcmtkb3dubGludCcsXG4gICAgICAnYmllcm5lci5qc2RvYy1tYXJrZG93bi1oaWdobGlnaHRpbmcnLFxuXG4gICAgICAvLyBPdGhlcnNcbiAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG4gICAgICAnY2hyaXN0aWFuLWtvaGxlci5wYXRoLWludGVsbGlzZW5zZScsXG4gICAgICAnQXlrdXRTYXJhYy5qc29uY3JhY2stdnNjb2RlJyxcbiAgICAgICd0YW1hc2ZlLmV2ZW4tYmV0dGVyLXRvbWwnLFxuICAgIF07XG4gIH1cbn1cbiJdfQ==