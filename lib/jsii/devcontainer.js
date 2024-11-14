"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainerJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * DevContainer builder implementing all relevant configuration for the Jsii project.
 */
class DevContainerJsii extends base_1.DevContainerBase {
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
     * VSCode extensions to be installed in the DevContainer.
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
            // VSCode
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
exports.DevContainerJsii = DevContainerJsii;
_a = JSII_RTTI_SYMBOL_1;
DevContainerJsii[_a] = { fqn: "projen-template-projects.DevContainerJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWtFO0FBRWxFOztHQUVHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSx1QkFBZ0I7SUFDcEQ7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPO1lBQ0wsT0FBTztZQUNQLGtCQUFrQjtZQUNsQiw4QkFBOEI7WUFFOUIsT0FBTztZQUNQLG1CQUFtQjtZQUVuQixTQUFTO1lBQ1QsNEJBQTRCO1lBQzVCLHVCQUF1QjtZQUN2Qiw2QkFBNkI7WUFFN0IsTUFBTTtZQUNOLG1DQUFtQztZQUNuQyx1QkFBdUI7WUFFdkIsUUFBUTtZQUNSLDJCQUEyQjtZQUMzQiw2QkFBNkI7WUFDN0IsNEJBQTRCO1lBRTVCLFNBQVM7WUFDVCxvQ0FBb0M7WUFFcEMsT0FBTztZQUNQLGtCQUFrQjtZQUVsQixhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQix1Q0FBdUM7WUFDdkMsNkJBQTZCO1lBQzdCLHVCQUF1QjtZQUN2Qix3Q0FBd0M7WUFFeEMsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFFcEIsTUFBTTtZQUNOLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsbUNBQW1DO1lBRW5DLFNBQVM7WUFDVCw0QkFBNEI7WUFDNUIsZ0NBQWdDO1lBQ2hDLHFDQUFxQztZQUVyQyxTQUFTO1lBQ1Qsd0NBQXdDO1lBQ3hDLG9DQUFvQztZQUNwQyw2QkFBNkI7WUFDN0IsMEJBQTBCO1NBQzNCLENBQUM7SUFDSixDQUFDOztBQTdFSCw0Q0E4RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZDb250YWluZXJCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBEZXZDb250YWluZXIgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBKc2lpIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZDb250YWluZXJKc2lpIGV4dGVuZHMgRGV2Q29udGFpbmVyQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgRGV2Q29udGFpbmVyIGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBDb21taXRMaW50IGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZTQ29kZSBleHRlbnNpb25zIHRvIGJlIGluc3RhbGxlZCBpbiB0aGUgRGV2Q29udGFpbmVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBleHRlbnNpb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gSmVzdFxuICAgICAgJ09ydGEudnNjb2RlLWplc3QnLFxuICAgICAgJ2ZpcnN0dHJpcy52c2NvZGUtamVzdC1ydW5uZXInLFxuXG4gICAgICAvLyBSZXN0XG4gICAgICAnaHVtYW8ucmVzdC1jbGllbnQnLFxuXG4gICAgICAvLyBWU0NvZGVcbiAgICAgICdhYXJvbi1ib25kLmJldHRlci1jb21tZW50cycsXG4gICAgICAnYWxlZnJhZ25hbmkuQm9va21hcmtzJyxcbiAgICAgICdhbGVmcmFnbmFuaS5wcm9qZWN0LW1hbmFnZXInLFxuXG4gICAgICAvLyBOUE1cbiAgICAgICdjaHJpc3RpYW4ta29obGVyLm5wbS1pbnRlbGxpc2Vuc2UnLFxuICAgICAgJ21za2VsdG9uLm5wbS1vdXRkYXRlZCcsXG5cbiAgICAgIC8vIFRoZW1lXG4gICAgICAnUEtpZWYubWF0ZXJpYWwtaWNvbi10aGVtZScsXG4gICAgICAnemh1YW5ndG9uZ2ZhLm1hdGVyaWFsLXRoZW1lJyxcbiAgICAgICdHaXRIdWIuZ2l0aHViLXZzY29kZS10aGVtZScsXG5cbiAgICAgIC8vIERvY2tlclxuICAgICAgJ21zLXZzY29kZS1yZW1vdGUucmVtb3RlLWNvbnRhaW5lcnMnLFxuXG4gICAgICAvLyAuZW52XG4gICAgICAnbWlrZXN0ZWFkLmRvdGVudicsXG5cbiAgICAgIC8vIFR5cGVTY3JpcHRcbiAgICAgICd1c2VybmFtZWh3LmVycm9ybGVucycsXG4gICAgICAnZGJhZXVtZXIudnNjb2RlLWVzbGludCcsXG4gICAgICAnb2RlcndhdC5pbmRlbnQtcmFpbmJvdycsXG4gICAgICAnZXNiZW5wLnByZXR0aWVyLXZzY29kZScsXG4gICAgICAnWW9hdkJscy5wcmV0dHktdHMtZXJyb3JzJyxcbiAgICAgICdzdHJlZXRzaWRlc29mdHdhcmUuY29kZS1zcGVsbC1jaGVja2VyJyxcbiAgICAgICd3YXlvdS52c2NvZGUtdG9kby1oaWdobGlnaHQnLFxuICAgICAgJ21pa2UtY28uaW1wb3J0LXNvcnRlcicsXG4gICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuXG4gICAgICAvLyBYTUwgJiBZQU1MJ1xuICAgICAgJ3JlZGhhdC52c2NvZGUteWFtbCcsXG4gICAgICAnRG90Sm9zaEpvaG5zb24ueG1sJyxcblxuICAgICAgLy8gR2l0XG4gICAgICAnd2FkZXJ5YW4uZ2l0YmxhbWUnLFxuICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICdHaXRIdWIudnNjb2RlLXB1bGwtcmVxdWVzdC1naXRodWInLFxuXG4gICAgICAvLyBSRUFETUVcbiAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAnRGF2aWRBbnNvbi52c2NvZGUtbWFya2Rvd25saW50JyxcbiAgICAgICdiaWVybmVyLmpzZG9jLW1hcmtkb3duLWhpZ2hsaWdodGluZycsXG5cbiAgICAgIC8vIE90aGVyc1xuICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcbiAgICAgICdjaHJpc3RpYW4ta29obGVyLnBhdGgtaW50ZWxsaXNlbnNlJyxcbiAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgJ3RhbWFzZmUuZXZlbi1iZXR0ZXItdG9tbCcsXG4gICAgXTtcbiAgfVxufVxuIl19