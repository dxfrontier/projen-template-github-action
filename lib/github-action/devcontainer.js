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
DevContainer[_a] = { fqn: "@dxfrontier/projen-template-projects.DevContainer", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWtFO0FBRWxFOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsdUJBQWdCO0lBQ2hEOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxVQUFVO1FBQ3RCLE9BQU87WUFDTCxPQUFPO1lBQ1Asa0JBQWtCO1lBQ2xCLDhCQUE4QjtZQUU5QixPQUFPO1lBQ1AsbUJBQW1CO1lBRW5CLFNBQVM7WUFDVCw0QkFBNEI7WUFDNUIsdUJBQXVCO1lBQ3ZCLDZCQUE2QjtZQUU3QixNQUFNO1lBQ04sbUNBQW1DO1lBQ25DLHVCQUF1QjtZQUV2QixRQUFRO1lBQ1IsMkJBQTJCO1lBQzNCLDZCQUE2QjtZQUM3Qiw0QkFBNEI7WUFFNUIsU0FBUztZQUNULG9DQUFvQztZQUVwQyxPQUFPO1lBQ1Asa0JBQWtCO1lBRWxCLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsMEJBQTBCO1lBQzFCLHVDQUF1QztZQUN2Qyw2QkFBNkI7WUFDN0IsdUJBQXVCO1lBQ3ZCLHdDQUF3QztZQUV4QyxjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUVwQixNQUFNO1lBQ04sbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6QixtQ0FBbUM7WUFFbkMsU0FBUztZQUNULDRCQUE0QjtZQUM1QixnQ0FBZ0M7WUFDaEMscUNBQXFDO1lBRXJDLFNBQVM7WUFDVCx3Q0FBd0M7WUFDeEMsb0NBQW9DO1lBQ3BDLDZCQUE2QjtZQUM3QiwwQkFBMEI7U0FDM0IsQ0FBQztJQUNKLENBQUM7O0FBM0VILG9DQTRFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldkNvbnRhaW5lckJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG4vKipcbiAqIERldkNvbnRhaW5lciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZDb250YWluZXIgZXh0ZW5kcyBEZXZDb250YWluZXJCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBEZXZDb250YWluZXIgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIENvbW1pdExpbnQgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBKZXN0XG4gICAgICAnT3J0YS52c2NvZGUtamVzdCcsXG4gICAgICAnZmlyc3R0cmlzLnZzY29kZS1qZXN0LXJ1bm5lcicsXG5cbiAgICAgIC8vIFJlc3RcbiAgICAgICdodW1hby5yZXN0LWNsaWVudCcsXG5cbiAgICAgIC8vIFZzQ29kZVxuICAgICAgJ2Fhcm9uLWJvbmQuYmV0dGVyLWNvbW1lbnRzJyxcbiAgICAgICdhbGVmcmFnbmFuaS5Cb29rbWFya3MnLFxuICAgICAgJ2FsZWZyYWduYW5pLnByb2plY3QtbWFuYWdlcicsXG5cbiAgICAgIC8vIE5QTVxuICAgICAgJ2NocmlzdGlhbi1rb2hsZXIubnBtLWludGVsbGlzZW5zZScsXG4gICAgICAnbXNrZWx0b24ubnBtLW91dGRhdGVkJyxcblxuICAgICAgLy8gVGhlbWVcbiAgICAgICdQS2llZi5tYXRlcmlhbC1pY29uLXRoZW1lJyxcbiAgICAgICd6aHVhbmd0b25nZmEubWF0ZXJpYWwtdGhlbWUnLFxuICAgICAgJ0dpdEh1Yi5naXRodWItdnNjb2RlLXRoZW1lJyxcblxuICAgICAgLy8gRG9ja2VyXG4gICAgICAnbXMtdnNjb2RlLXJlbW90ZS5yZW1vdGUtY29udGFpbmVycycsXG5cbiAgICAgIC8vIC5lbnZcbiAgICAgICdtaWtlc3RlYWQuZG90ZW52JyxcblxuICAgICAgLy8gVHlwZVNjcmlwdFxuICAgICAgJ3VzZXJuYW1laHcuZXJyb3JsZW5zJyxcbiAgICAgICdkYmFldW1lci52c2NvZGUtZXNsaW50JyxcbiAgICAgICdvZGVyd2F0LmluZGVudC1yYWluYm93JyxcbiAgICAgICdlc2JlbnAucHJldHRpZXItdnNjb2RlJyxcbiAgICAgICdZb2F2QmxzLnByZXR0eS10cy1lcnJvcnMnLFxuICAgICAgJ3N0cmVldHNpZGVzb2Z0d2FyZS5jb2RlLXNwZWxsLWNoZWNrZXInLFxuICAgICAgJ3dheW91LnZzY29kZS10b2RvLWhpZ2hsaWdodCcsXG4gICAgICAnbWlrZS1jby5pbXBvcnQtc29ydGVyJyxcbiAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG5cbiAgICAgIC8vIFhNTCAmIFlBTUwnXG4gICAgICAncmVkaGF0LnZzY29kZS15YW1sJyxcbiAgICAgICdEb3RKb3NoSm9obnNvbi54bWwnLFxuXG4gICAgICAvLyBHaXRcbiAgICAgICd3YWRlcnlhbi5naXRibGFtZScsXG4gICAgICAnZG9uamF5YW1hbm5lLmdpdGhpc3RvcnknLFxuICAgICAgJ0dpdEh1Yi52c2NvZGUtcHVsbC1yZXF1ZXN0LWdpdGh1YicsXG5cbiAgICAgIC8vIFJFQURNRVxuICAgICAgJ3l6aGFuZy5tYXJrZG93bi1hbGwtaW4tb25lJyxcbiAgICAgICdEYXZpZEFuc29uLnZzY29kZS1tYXJrZG93bmxpbnQnLFxuICAgICAgJ2JpZXJuZXIuanNkb2MtbWFya2Rvd24taGlnaGxpZ2h0aW5nJyxcblxuICAgICAgLy8gT3RoZXJzXG4gICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuICAgICAgJ2NocmlzdGlhbi1rb2hsZXIucGF0aC1pbnRlbGxpc2Vuc2UnLFxuICAgICAgJ0F5a3V0U2FyYWMuanNvbmNyYWNrLXZzY29kZScsXG4gICAgICAndGFtYXNmZS5ldmVuLWJldHRlci10b21sJyxcbiAgICBdO1xuICB9XG59XG4iXX0=