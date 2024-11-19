"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainer = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dpdGh1Yi1hY3Rpb24vZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtDQUFrRTtBQUVsRTs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLHVCQUFnQjtJQUNoRDs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPO1lBQ0wsT0FBTztZQUNQLGtCQUFrQjtZQUNsQiw4QkFBOEI7WUFFOUIsT0FBTztZQUNQLG1CQUFtQjtZQUVuQixTQUFTO1lBQ1QsNEJBQTRCO1lBQzVCLHVCQUF1QjtZQUN2Qiw2QkFBNkI7WUFFN0IsTUFBTTtZQUNOLG1DQUFtQztZQUNuQyx1QkFBdUI7WUFFdkIsUUFBUTtZQUNSLDJCQUEyQjtZQUMzQiw2QkFBNkI7WUFDN0IsNEJBQTRCO1lBRTVCLFNBQVM7WUFDVCxvQ0FBb0M7WUFFcEMsT0FBTztZQUNQLGtCQUFrQjtZQUVsQixhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQix1Q0FBdUM7WUFDdkMsNkJBQTZCO1lBQzdCLHVCQUF1QjtZQUN2Qix3Q0FBd0M7WUFFeEMsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFFcEIsTUFBTTtZQUNOLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsbUNBQW1DO1lBRW5DLFNBQVM7WUFDVCw0QkFBNEI7WUFDNUIsZ0NBQWdDO1lBQ2hDLHFDQUFxQztZQUVyQyxTQUFTO1lBQ1Qsd0NBQXdDO1lBQ3hDLG9DQUFvQztZQUNwQyw2QkFBNkI7WUFDN0IsMEJBQTBCO1NBQzNCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUEvRUQsb0NBK0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2Q29udGFpbmVyQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogRGV2Q29udGFpbmVyIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERldkNvbnRhaW5lciBleHRlbmRzIERldkNvbnRhaW5lckJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIERldkNvbnRhaW5lciBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgQ29tbWl0TGludCBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWc0NvZGUgZXh0ZW5zaW9ucyB0byBiZSBpbnN0YWxsZWQgaW4gdGhlIERldkNvbnRhaW5lci5cbiAgICogQHJldHVybiBFeHRlbnNpb25zIHVzZWQgaW4gY29udGFpbmVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBleHRlbnNpb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gSmVzdFxuICAgICAgJ09ydGEudnNjb2RlLWplc3QnLFxuICAgICAgJ2ZpcnN0dHJpcy52c2NvZGUtamVzdC1ydW5uZXInLFxuXG4gICAgICAvLyBSZXN0XG4gICAgICAnaHVtYW8ucmVzdC1jbGllbnQnLFxuXG4gICAgICAvLyBWc0NvZGVcbiAgICAgICdhYXJvbi1ib25kLmJldHRlci1jb21tZW50cycsXG4gICAgICAnYWxlZnJhZ25hbmkuQm9va21hcmtzJyxcbiAgICAgICdhbGVmcmFnbmFuaS5wcm9qZWN0LW1hbmFnZXInLFxuXG4gICAgICAvLyBOUE1cbiAgICAgICdjaHJpc3RpYW4ta29obGVyLm5wbS1pbnRlbGxpc2Vuc2UnLFxuICAgICAgJ21za2VsdG9uLm5wbS1vdXRkYXRlZCcsXG5cbiAgICAgIC8vIFRoZW1lXG4gICAgICAnUEtpZWYubWF0ZXJpYWwtaWNvbi10aGVtZScsXG4gICAgICAnemh1YW5ndG9uZ2ZhLm1hdGVyaWFsLXRoZW1lJyxcbiAgICAgICdHaXRIdWIuZ2l0aHViLXZzY29kZS10aGVtZScsXG5cbiAgICAgIC8vIERvY2tlclxuICAgICAgJ21zLXZzY29kZS1yZW1vdGUucmVtb3RlLWNvbnRhaW5lcnMnLFxuXG4gICAgICAvLyAuZW52XG4gICAgICAnbWlrZXN0ZWFkLmRvdGVudicsXG5cbiAgICAgIC8vIFR5cGVTY3JpcHRcbiAgICAgICd1c2VybmFtZWh3LmVycm9ybGVucycsXG4gICAgICAnZGJhZXVtZXIudnNjb2RlLWVzbGludCcsXG4gICAgICAnb2RlcndhdC5pbmRlbnQtcmFpbmJvdycsXG4gICAgICAnZXNiZW5wLnByZXR0aWVyLXZzY29kZScsXG4gICAgICAnWW9hdkJscy5wcmV0dHktdHMtZXJyb3JzJyxcbiAgICAgICdzdHJlZXRzaWRlc29mdHdhcmUuY29kZS1zcGVsbC1jaGVja2VyJyxcbiAgICAgICd3YXlvdS52c2NvZGUtdG9kby1oaWdobGlnaHQnLFxuICAgICAgJ21pa2UtY28uaW1wb3J0LXNvcnRlcicsXG4gICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuXG4gICAgICAvLyBYTUwgJiBZQU1MJ1xuICAgICAgJ3JlZGhhdC52c2NvZGUteWFtbCcsXG4gICAgICAnRG90Sm9zaEpvaG5zb24ueG1sJyxcblxuICAgICAgLy8gR2l0XG4gICAgICAnd2FkZXJ5YW4uZ2l0YmxhbWUnLFxuICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICdHaXRIdWIudnNjb2RlLXB1bGwtcmVxdWVzdC1naXRodWInLFxuXG4gICAgICAvLyBSRUFETUVcbiAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAnRGF2aWRBbnNvbi52c2NvZGUtbWFya2Rvd25saW50JyxcbiAgICAgICdiaWVybmVyLmpzZG9jLW1hcmtkb3duLWhpZ2hsaWdodGluZycsXG5cbiAgICAgIC8vIE90aGVyc1xuICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcbiAgICAgICdjaHJpc3RpYW4ta29obGVyLnBhdGgtaW50ZWxsaXNlbnNlJyxcbiAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgJ3RhbWFzZmUuZXZlbi1iZXR0ZXItdG9tbCcsXG4gICAgXTtcbiAgfVxufVxuIl19