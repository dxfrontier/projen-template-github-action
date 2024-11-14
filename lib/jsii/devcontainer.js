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
exports.DevContainerJsii = DevContainerJsii;
_a = JSII_RTTI_SYMBOL_1;
DevContainerJsii[_a] = { fqn: "projen-template-projects.DevContainerJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWtFO0FBRWxFOztHQUVHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSx1QkFBZ0I7SUFDcEQ7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLFVBQVU7UUFDdEIsT0FBTztZQUNMLE9BQU87WUFDUCxrQkFBa0I7WUFDbEIsOEJBQThCO1lBRTlCLE9BQU87WUFDUCxtQkFBbUI7WUFFbkIsU0FBUztZQUNULDRCQUE0QjtZQUM1Qix1QkFBdUI7WUFDdkIsNkJBQTZCO1lBRTdCLE1BQU07WUFDTixtQ0FBbUM7WUFDbkMsdUJBQXVCO1lBRXZCLFFBQVE7WUFDUiwyQkFBMkI7WUFDM0IsNkJBQTZCO1lBQzdCLDRCQUE0QjtZQUU1QixTQUFTO1lBQ1Qsb0NBQW9DO1lBRXBDLE9BQU87WUFDUCxrQkFBa0I7WUFFbEIsYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4QiwwQkFBMEI7WUFDMUIsdUNBQXVDO1lBQ3ZDLDZCQUE2QjtZQUM3Qix1QkFBdUI7WUFDdkIsd0NBQXdDO1lBRXhDLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBRXBCLE1BQU07WUFDTixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLG1DQUFtQztZQUVuQyxTQUFTO1lBQ1QsNEJBQTRCO1lBQzVCLGdDQUFnQztZQUNoQyxxQ0FBcUM7WUFFckMsU0FBUztZQUNULHdDQUF3QztZQUN4QyxvQ0FBb0M7WUFDcEMsNkJBQTZCO1lBQzdCLDBCQUEwQjtTQUMzQixDQUFDO0lBQ0osQ0FBQzs7QUE5RUgsNENBK0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2Q29udGFpbmVyQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogRGV2Q29udGFpbmVyIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgSnNpaSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGV2Q29udGFpbmVySnNpaSBleHRlbmRzIERldkNvbnRhaW5lckJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIERldkNvbnRhaW5lciBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgQ29tbWl0TGludCBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWc0NvZGUgZXh0ZW5zaW9ucyB0byBiZSBpbnN0YWxsZWQgaW4gdGhlIERldkNvbnRhaW5lci5cbiAgICogQHJldHVybiBFeHRlbnNpb25zIHVzZWQgaW4gY29udGFpbmVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBleHRlbnNpb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gSmVzdFxuICAgICAgJ09ydGEudnNjb2RlLWplc3QnLFxuICAgICAgJ2ZpcnN0dHJpcy52c2NvZGUtamVzdC1ydW5uZXInLFxuXG4gICAgICAvLyBSZXN0XG4gICAgICAnaHVtYW8ucmVzdC1jbGllbnQnLFxuXG4gICAgICAvLyBWc0NvZGVcbiAgICAgICdhYXJvbi1ib25kLmJldHRlci1jb21tZW50cycsXG4gICAgICAnYWxlZnJhZ25hbmkuQm9va21hcmtzJyxcbiAgICAgICdhbGVmcmFnbmFuaS5wcm9qZWN0LW1hbmFnZXInLFxuXG4gICAgICAvLyBOUE1cbiAgICAgICdjaHJpc3RpYW4ta29obGVyLm5wbS1pbnRlbGxpc2Vuc2UnLFxuICAgICAgJ21za2VsdG9uLm5wbS1vdXRkYXRlZCcsXG5cbiAgICAgIC8vIFRoZW1lXG4gICAgICAnUEtpZWYubWF0ZXJpYWwtaWNvbi10aGVtZScsXG4gICAgICAnemh1YW5ndG9uZ2ZhLm1hdGVyaWFsLXRoZW1lJyxcbiAgICAgICdHaXRIdWIuZ2l0aHViLXZzY29kZS10aGVtZScsXG5cbiAgICAgIC8vIERvY2tlclxuICAgICAgJ21zLXZzY29kZS1yZW1vdGUucmVtb3RlLWNvbnRhaW5lcnMnLFxuXG4gICAgICAvLyAuZW52XG4gICAgICAnbWlrZXN0ZWFkLmRvdGVudicsXG5cbiAgICAgIC8vIFR5cGVTY3JpcHRcbiAgICAgICd1c2VybmFtZWh3LmVycm9ybGVucycsXG4gICAgICAnZGJhZXVtZXIudnNjb2RlLWVzbGludCcsXG4gICAgICAnb2RlcndhdC5pbmRlbnQtcmFpbmJvdycsXG4gICAgICAnZXNiZW5wLnByZXR0aWVyLXZzY29kZScsXG4gICAgICAnWW9hdkJscy5wcmV0dHktdHMtZXJyb3JzJyxcbiAgICAgICdzdHJlZXRzaWRlc29mdHdhcmUuY29kZS1zcGVsbC1jaGVja2VyJyxcbiAgICAgICd3YXlvdS52c2NvZGUtdG9kby1oaWdobGlnaHQnLFxuICAgICAgJ21pa2UtY28uaW1wb3J0LXNvcnRlcicsXG4gICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuXG4gICAgICAvLyBYTUwgJiBZQU1MJ1xuICAgICAgJ3JlZGhhdC52c2NvZGUteWFtbCcsXG4gICAgICAnRG90Sm9zaEpvaG5zb24ueG1sJyxcblxuICAgICAgLy8gR2l0XG4gICAgICAnd2FkZXJ5YW4uZ2l0YmxhbWUnLFxuICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICdHaXRIdWIudnNjb2RlLXB1bGwtcmVxdWVzdC1naXRodWInLFxuXG4gICAgICAvLyBSRUFETUVcbiAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAnRGF2aWRBbnNvbi52c2NvZGUtbWFya2Rvd25saW50JyxcbiAgICAgICdiaWVybmVyLmpzZG9jLW1hcmtkb3duLWhpZ2hsaWdodGluZycsXG5cbiAgICAgIC8vIE90aGVyc1xuICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcbiAgICAgICdjaHJpc3RpYW4ta29obGVyLnBhdGgtaW50ZWxsaXNlbnNlJyxcbiAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgJ3RhbWFzZmUuZXZlbi1iZXR0ZXItdG9tbCcsXG4gICAgXTtcbiAgfVxufVxuIl19