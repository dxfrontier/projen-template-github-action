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
DevContainerJsii[_a] = { fqn: "@dxfrontier/projen-template-projects.DevContainerJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWtFO0FBRWxFOztHQUVHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSx1QkFBZ0I7SUFDcEQ7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLFVBQVU7UUFDdEIsT0FBTztZQUNMLE9BQU87WUFDUCxrQkFBa0I7WUFDbEIsOEJBQThCO1lBRTlCLE9BQU87WUFDUCxtQkFBbUI7WUFFbkIsU0FBUztZQUNULDRCQUE0QjtZQUM1Qix1QkFBdUI7WUFDdkIsNkJBQTZCO1lBRTdCLE1BQU07WUFDTixtQ0FBbUM7WUFDbkMsdUJBQXVCO1lBRXZCLFFBQVE7WUFDUiwyQkFBMkI7WUFDM0IsNkJBQTZCO1lBQzdCLDRCQUE0QjtZQUU1QixTQUFTO1lBQ1Qsb0NBQW9DO1lBRXBDLE9BQU87WUFDUCxrQkFBa0I7WUFFbEIsYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4QiwwQkFBMEI7WUFDMUIsdUNBQXVDO1lBQ3ZDLDZCQUE2QjtZQUM3Qix1QkFBdUI7WUFDdkIsd0NBQXdDO1lBRXhDLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBRXBCLE1BQU07WUFDTixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLG1DQUFtQztZQUVuQyxTQUFTO1lBQ1QsNEJBQTRCO1lBQzVCLGdDQUFnQztZQUNoQyxxQ0FBcUM7WUFFckMsU0FBUztZQUNULHdDQUF3QztZQUN4QyxvQ0FBb0M7WUFDcEMsNkJBQTZCO1lBQzdCLDBCQUEwQjtTQUMzQixDQUFDO0lBQ0osQ0FBQzs7QUEzRUgsNENBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2Q29udGFpbmVyQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogRGV2Q29udGFpbmVyIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgSnNpaSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGV2Q29udGFpbmVySnNpaSBleHRlbmRzIERldkNvbnRhaW5lckJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIERldkNvbnRhaW5lciBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgQ29tbWl0TGludCBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIEplc3RcbiAgICAgICdPcnRhLnZzY29kZS1qZXN0JyxcbiAgICAgICdmaXJzdHRyaXMudnNjb2RlLWplc3QtcnVubmVyJyxcblxuICAgICAgLy8gUmVzdFxuICAgICAgJ2h1bWFvLnJlc3QtY2xpZW50JyxcblxuICAgICAgLy8gVnNDb2RlXG4gICAgICAnYWFyb24tYm9uZC5iZXR0ZXItY29tbWVudHMnLFxuICAgICAgJ2FsZWZyYWduYW5pLkJvb2ttYXJrcycsXG4gICAgICAnYWxlZnJhZ25hbmkucHJvamVjdC1tYW5hZ2VyJyxcblxuICAgICAgLy8gTlBNXG4gICAgICAnY2hyaXN0aWFuLWtvaGxlci5ucG0taW50ZWxsaXNlbnNlJyxcbiAgICAgICdtc2tlbHRvbi5ucG0tb3V0ZGF0ZWQnLFxuXG4gICAgICAvLyBUaGVtZVxuICAgICAgJ1BLaWVmLm1hdGVyaWFsLWljb24tdGhlbWUnLFxuICAgICAgJ3podWFuZ3RvbmdmYS5tYXRlcmlhbC10aGVtZScsXG4gICAgICAnR2l0SHViLmdpdGh1Yi12c2NvZGUtdGhlbWUnLFxuXG4gICAgICAvLyBEb2NrZXJcbiAgICAgICdtcy12c2NvZGUtcmVtb3RlLnJlbW90ZS1jb250YWluZXJzJyxcblxuICAgICAgLy8gLmVudlxuICAgICAgJ21pa2VzdGVhZC5kb3RlbnYnLFxuXG4gICAgICAvLyBUeXBlU2NyaXB0XG4gICAgICAndXNlcm5hbWVody5lcnJvcmxlbnMnLFxuICAgICAgJ2RiYWV1bWVyLnZzY29kZS1lc2xpbnQnLFxuICAgICAgJ29kZXJ3YXQuaW5kZW50LXJhaW5ib3cnLFxuICAgICAgJ2VzYmVucC5wcmV0dGllci12c2NvZGUnLFxuICAgICAgJ1lvYXZCbHMucHJldHR5LXRzLWVycm9ycycsXG4gICAgICAnc3RyZWV0c2lkZXNvZnR3YXJlLmNvZGUtc3BlbGwtY2hlY2tlcicsXG4gICAgICAnd2F5b3UudnNjb2RlLXRvZG8taGlnaGxpZ2h0JyxcbiAgICAgICdtaWtlLWNvLmltcG9ydC1zb3J0ZXInLFxuICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcblxuICAgICAgLy8gWE1MICYgWUFNTCdcbiAgICAgICdyZWRoYXQudnNjb2RlLXlhbWwnLFxuICAgICAgJ0RvdEpvc2hKb2huc29uLnhtbCcsXG5cbiAgICAgIC8vIEdpdFxuICAgICAgJ3dhZGVyeWFuLmdpdGJsYW1lJyxcbiAgICAgICdkb25qYXlhbWFubmUuZ2l0aGlzdG9yeScsXG4gICAgICAnR2l0SHViLnZzY29kZS1wdWxsLXJlcXVlc3QtZ2l0aHViJyxcblxuICAgICAgLy8gUkVBRE1FXG4gICAgICAneXpoYW5nLm1hcmtkb3duLWFsbC1pbi1vbmUnLFxuICAgICAgJ0RhdmlkQW5zb24udnNjb2RlLW1hcmtkb3dubGludCcsXG4gICAgICAnYmllcm5lci5qc2RvYy1tYXJrZG93bi1oaWdobGlnaHRpbmcnLFxuXG4gICAgICAvLyBPdGhlcnNcbiAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG4gICAgICAnY2hyaXN0aWFuLWtvaGxlci5wYXRoLWludGVsbGlzZW5zZScsXG4gICAgICAnQXlrdXRTYXJhYy5qc29uY3JhY2stdnNjb2RlJyxcbiAgICAgICd0YW1hc2ZlLmV2ZW4tYmV0dGVyLXRvbWwnLFxuICAgIF07XG4gIH1cbn1cbiJdfQ==