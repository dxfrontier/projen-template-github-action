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
            // SAP CAP
            'SAPSE.vscode-cds',
            'SAPOSS.app-studio-toolkit',
            'SAPOSS.app-studio-remote-access',
            'SAPOS.yeoman-ui',
            // Docker
            'ms-vscode-remote.remote-containers',
            // .env
            'mikestead.dotenv',
            // UI5
            'SAPSE.sap-ux-fiori-tools-extension-pack',
            // SQLite
            'qwtel.sqlite-viewer',
            // CSV
            'janisdd.vscode-edit-csv',
            'mechatroner.rainbow-csv',
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
            'SAPOSS.xml-toolkit',
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
    /**
     * @override
     */
    get scripts() {
        return {
            'install-dependencies': [
                'sudo apt-get update',
                'sudo apt-get install -y xdg-utils',
                'npm install -g @sap/cds-dk typescript ts-node @ui5/cli git-cliff',
                'npm install',
                'wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -',
                'echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list',
                'sudo apt-get update',
                'sudo apt-get install cf8-cli',
            ],
        };
    }
}
exports.DevContainer = DevContainer;
_a = JSII_RTTI_SYMBOL_1;
DevContainer[_a] = { fqn: "@dxfrontier/projen-template-projects.DevContainer", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2RldmNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUFrRTtBQUdsRTs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLHVCQUFnQjtJQUNoRDs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPO1lBQ0wsT0FBTztZQUNQLGtCQUFrQjtZQUNsQiw4QkFBOEI7WUFFOUIsT0FBTztZQUNQLG1CQUFtQjtZQUVuQixTQUFTO1lBQ1QsNEJBQTRCO1lBQzVCLHVCQUF1QjtZQUN2Qiw2QkFBNkI7WUFFN0IsTUFBTTtZQUNOLG1DQUFtQztZQUNuQyx1QkFBdUI7WUFFdkIsUUFBUTtZQUNSLDJCQUEyQjtZQUMzQiw2QkFBNkI7WUFDN0IsNEJBQTRCO1lBRTVCLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsMkJBQTJCO1lBQzNCLGlDQUFpQztZQUNqQyxpQkFBaUI7WUFFakIsU0FBUztZQUNULG9DQUFvQztZQUVwQyxPQUFPO1lBQ1Asa0JBQWtCO1lBRWxCLE1BQU07WUFDTix5Q0FBeUM7WUFFekMsU0FBUztZQUNULHFCQUFxQjtZQUVyQixNQUFNO1lBQ04seUJBQXlCO1lBQ3pCLHlCQUF5QjtZQUV6QixhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQix1Q0FBdUM7WUFDdkMsNkJBQTZCO1lBQzdCLHVCQUF1QjtZQUN2Qix3Q0FBd0M7WUFFeEMsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBRXBCLE1BQU07WUFDTixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLG1DQUFtQztZQUVuQyxTQUFTO1lBQ1QsNEJBQTRCO1lBQzVCLGdDQUFnQztZQUNoQyxxQ0FBcUM7WUFFckMsU0FBUztZQUNULHdDQUF3QztZQUN4QyxvQ0FBb0M7WUFDcEMsNkJBQTZCO1lBQzdCLDBCQUEwQjtTQUMzQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxzQkFBc0IsRUFBRTtnQkFDdEIscUJBQXFCO2dCQUNyQixtQ0FBbUM7Z0JBQ25DLGtFQUFrRTtnQkFDbEUsYUFBYTtnQkFDYixxR0FBcUc7Z0JBQ3JHLDBIQUEwSDtnQkFDMUgscUJBQXFCO2dCQUNyQiw4QkFBOEI7YUFDL0I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7QUE5R0gsb0NBK0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2Q29udGFpbmVyQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBTY3JpcHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIERldkNvbnRhaW5lciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZDb250YWluZXIgZXh0ZW5kcyBEZXZDb250YWluZXJCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBEZXZDb250YWluZXIgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIENvbW1pdExpbnQgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBKZXN0XG4gICAgICAnT3J0YS52c2NvZGUtamVzdCcsXG4gICAgICAnZmlyc3R0cmlzLnZzY29kZS1qZXN0LXJ1bm5lcicsXG5cbiAgICAgIC8vIFJlc3RcbiAgICAgICdodW1hby5yZXN0LWNsaWVudCcsXG5cbiAgICAgIC8vIFZzQ29kZVxuICAgICAgJ2Fhcm9uLWJvbmQuYmV0dGVyLWNvbW1lbnRzJyxcbiAgICAgICdhbGVmcmFnbmFuaS5Cb29rbWFya3MnLFxuICAgICAgJ2FsZWZyYWduYW5pLnByb2plY3QtbWFuYWdlcicsXG5cbiAgICAgIC8vIE5QTVxuICAgICAgJ2NocmlzdGlhbi1rb2hsZXIubnBtLWludGVsbGlzZW5zZScsXG4gICAgICAnbXNrZWx0b24ubnBtLW91dGRhdGVkJyxcblxuICAgICAgLy8gVGhlbWVcbiAgICAgICdQS2llZi5tYXRlcmlhbC1pY29uLXRoZW1lJyxcbiAgICAgICd6aHVhbmd0b25nZmEubWF0ZXJpYWwtdGhlbWUnLFxuICAgICAgJ0dpdEh1Yi5naXRodWItdnNjb2RlLXRoZW1lJyxcblxuICAgICAgLy8gU0FQIENBUFxuICAgICAgJ1NBUFNFLnZzY29kZS1jZHMnLFxuICAgICAgJ1NBUE9TUy5hcHAtc3R1ZGlvLXRvb2xraXQnLFxuICAgICAgJ1NBUE9TUy5hcHAtc3R1ZGlvLXJlbW90ZS1hY2Nlc3MnLFxuICAgICAgJ1NBUE9TLnllb21hbi11aScsXG5cbiAgICAgIC8vIERvY2tlclxuICAgICAgJ21zLXZzY29kZS1yZW1vdGUucmVtb3RlLWNvbnRhaW5lcnMnLFxuXG4gICAgICAvLyAuZW52XG4gICAgICAnbWlrZXN0ZWFkLmRvdGVudicsXG5cbiAgICAgIC8vIFVJNVxuICAgICAgJ1NBUFNFLnNhcC11eC1maW9yaS10b29scy1leHRlbnNpb24tcGFjaycsXG5cbiAgICAgIC8vIFNRTGl0ZVxuICAgICAgJ3F3dGVsLnNxbGl0ZS12aWV3ZXInLFxuXG4gICAgICAvLyBDU1ZcbiAgICAgICdqYW5pc2RkLnZzY29kZS1lZGl0LWNzdicsXG4gICAgICAnbWVjaGF0cm9uZXIucmFpbmJvdy1jc3YnLFxuXG4gICAgICAvLyBUeXBlU2NyaXB0XG4gICAgICAndXNlcm5hbWVody5lcnJvcmxlbnMnLFxuICAgICAgJ2RiYWV1bWVyLnZzY29kZS1lc2xpbnQnLFxuICAgICAgJ29kZXJ3YXQuaW5kZW50LXJhaW5ib3cnLFxuICAgICAgJ2VzYmVucC5wcmV0dGllci12c2NvZGUnLFxuICAgICAgJ1lvYXZCbHMucHJldHR5LXRzLWVycm9ycycsXG4gICAgICAnc3RyZWV0c2lkZXNvZnR3YXJlLmNvZGUtc3BlbGwtY2hlY2tlcicsXG4gICAgICAnd2F5b3UudnNjb2RlLXRvZG8taGlnaGxpZ2h0JyxcbiAgICAgICdtaWtlLWNvLmltcG9ydC1zb3J0ZXInLFxuICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcblxuICAgICAgLy8gWE1MICYgWUFNTCdcbiAgICAgICdyZWRoYXQudnNjb2RlLXlhbWwnLFxuICAgICAgJ0RvdEpvc2hKb2huc29uLnhtbCcsXG4gICAgICAnU0FQT1NTLnhtbC10b29sa2l0JyxcblxuICAgICAgLy8gR2l0XG4gICAgICAnd2FkZXJ5YW4uZ2l0YmxhbWUnLFxuICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICdHaXRIdWIudnNjb2RlLXB1bGwtcmVxdWVzdC1naXRodWInLFxuXG4gICAgICAvLyBSRUFETUVcbiAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAnRGF2aWRBbnNvbi52c2NvZGUtbWFya2Rvd25saW50JyxcbiAgICAgICdiaWVybmVyLmpzZG9jLW1hcmtkb3duLWhpZ2hsaWdodGluZycsXG5cbiAgICAgIC8vIE90aGVyc1xuICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcbiAgICAgICdjaHJpc3RpYW4ta29obGVyLnBhdGgtaW50ZWxsaXNlbnNlJyxcbiAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgJ3RhbWFzZmUuZXZlbi1iZXR0ZXItdG9tbCcsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2NyaXB0cygpOiBTY3JpcHRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2luc3RhbGwtZGVwZW5kZW5jaWVzJzogW1xuICAgICAgICAnc3VkbyBhcHQtZ2V0IHVwZGF0ZScsXG4gICAgICAgICdzdWRvIGFwdC1nZXQgaW5zdGFsbCAteSB4ZGctdXRpbHMnLFxuICAgICAgICAnbnBtIGluc3RhbGwgLWcgQHNhcC9jZHMtZGsgdHlwZXNjcmlwdCB0cy1ub2RlIEB1aTUvY2xpIGdpdC1jbGlmZicsXG4gICAgICAgICducG0gaW5zdGFsbCcsXG4gICAgICAgICd3Z2V0IC1xIC1PIC0gaHR0cHM6Ly9wYWNrYWdlcy5jbG91ZGZvdW5kcnkub3JnL2RlYmlhbi9jbGkuY2xvdWRmb3VuZHJ5Lm9yZy5rZXkgfCBzdWRvIGFwdC1rZXkgYWRkIC0nLFxuICAgICAgICAnZWNobyBcImRlYiBodHRwczovL3BhY2thZ2VzLmNsb3VkZm91bmRyeS5vcmcvZGViaWFuIHN0YWJsZSBtYWluXCIgfCBzdWRvIHRlZSAvZXRjL2FwdC9zb3VyY2VzLmxpc3QuZC9jbG91ZGZvdW5kcnktY2xpLmxpc3QnLFxuICAgICAgICAnc3VkbyBhcHQtZ2V0IHVwZGF0ZScsXG4gICAgICAgICdzdWRvIGFwdC1nZXQgaW5zdGFsbCBjZjgtY2xpJyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19