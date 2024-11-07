"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainerComponent = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
/**
 * Configures the DevContainer templates, settings and npm scripts for the project.
 */
class DevContainerComponent {
    /**
     * Initializes the DevContainer component.
     * @param project The project to configure DevContainer for.
     */
    constructor(project) {
        this.project = project;
    }
    /**
     * Getter retrieving the file path for the DevContainer configuration.
     */
    get filePath() {
        return '.devcontainer.json';
    }
    /**
     * Getter retrieving the Docker image used for the DevContainer.
     */
    get dockerImage() {
        return 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye';
    }
    /**
     * Getter retrieving the features to be installed in the DevContainer.
     */
    get features() {
        return {
            'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
            'ghcr.io/devcontainers/features/github-cli': 'latest',
            'ghcr.io/devcontainers-contrib/features/projen': 'latest',
        };
    }
    /**
     * Getter retrieving the npm scripts used within the DevContainer environment.
     */
    get scripts() {
        return {
            'install-dependencies': 'npm install',
        };
    }
    /**
     * Getter retrieving the VSCode extensions to be installed in the DevContainer.
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
    /**
     * Getter retrieving the template file for DevContainer creation.
     *
     * The first script in `scripts` is used as the postCreateCommand to install dependencies upon creation.
     */
    get template() {
        return {
            omitEmpty: true,
            allowComments: true,
            obj: {
                image: this.dockerImage,
                postCreateCommand: `npx projen ${Object.keys(this.scripts)[0]}`,
                features: this.features,
                customizations: {
                    vscode: {
                        extensions: this.extensions,
                    },
                },
            },
        };
    }
    /**
     * Adds template files to the DevContainer component.
     */
    add() {
        new projen_1.JsonFile(this.project, this.filePath, this.template);
    }
    /**
     * Adds npm scripts specific to DevContainer setup within the project configuration.
     */
    addScripts() {
        for (const [name, command] of Object.entries(this.scripts)) {
            this.project.addTask(name, { exec: command });
        }
    }
    /**
     * Configures the `.gitattributes` file to treat DevContainer component related files as generated code, optimizing diffs.
     */
    updateGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.filePath}`, 'linguist-generated');
    }
    /**
     * Executes setup for the DevContainer component.
     */
    setup() {
        this.add();
        this.addScripts();
        this.updateGitAttributes();
    }
}
exports.DevContainerComponent = DevContainerComponent;
_a = JSII_RTTI_SYMBOL_1;
DevContainerComponent[_a] = { fqn: "projen-template-github-action.DevContainerComponent", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2Q29udGFpbmVyQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvRGV2Q29udGFpbmVyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW1EO0FBSW5EOztHQUVHO0FBQ0gsTUFBYSxxQkFBcUI7SUFHaEM7OztPQUdHO0lBQ0gsWUFBWSxPQUEwQjtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLFFBQVE7UUFDbEIsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLFdBQVc7UUFDckIsT0FBTywrREFBK0QsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLFFBQVE7UUFDbEIsT0FBTztZQUNMLHFEQUFxRCxFQUFFLFFBQVE7WUFDL0QsMkNBQTJDLEVBQUUsUUFBUTtZQUNyRCwrQ0FBK0MsRUFBRSxRQUFRO1NBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLE9BQU87UUFDakIsT0FBTztZQUNMLHNCQUFzQixFQUFFLGFBQWE7U0FDdEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksVUFBVTtRQUNwQixPQUFPO1lBQ0wsT0FBTztZQUNQLGtCQUFrQjtZQUNsQiw4QkFBOEI7WUFFOUIsT0FBTztZQUNQLG1CQUFtQjtZQUVuQixTQUFTO1lBQ1QsNEJBQTRCO1lBQzVCLHVCQUF1QjtZQUN2Qiw2QkFBNkI7WUFFN0IsTUFBTTtZQUNOLG1DQUFtQztZQUNuQyx1QkFBdUI7WUFFdkIsUUFBUTtZQUNSLDJCQUEyQjtZQUMzQiw2QkFBNkI7WUFDN0IsNEJBQTRCO1lBRTVCLFNBQVM7WUFDVCxvQ0FBb0M7WUFFcEMsT0FBTztZQUNQLGtCQUFrQjtZQUVsQixhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQix1Q0FBdUM7WUFDdkMsNkJBQTZCO1lBQzdCLHVCQUF1QjtZQUN2Qix3Q0FBd0M7WUFFeEMsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFFcEIsTUFBTTtZQUNOLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsbUNBQW1DO1lBRW5DLFNBQVM7WUFDVCw0QkFBNEI7WUFDNUIsZ0NBQWdDO1lBQ2hDLHFDQUFxQztZQUVyQyxTQUFTO1lBQ1Qsd0NBQXdDO1lBQ3hDLG9DQUFvQztZQUNwQyw2QkFBNkI7WUFDN0IsMEJBQTBCO1NBQzNCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVksUUFBUTtRQUNsQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUUsSUFBSTtZQUNuQixHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN2QixpQkFBaUIsRUFBRSxjQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO3FCQUM1QjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNJLEdBQUc7UUFDUixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7O0FBbEtILHNEQW1LQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlLCBKc29uRmlsZU9wdGlvbnMgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3QgfSBmcm9tICdwcm9qZW4vbGliL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHsgSVByb2plY3RDb21wb25lbnQsIFNjcmlwdHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgRGV2Q29udGFpbmVyIHRlbXBsYXRlcywgc2V0dGluZ3MgYW5kIG5wbSBzY3JpcHRzIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERldkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIElQcm9qZWN0Q29tcG9uZW50IHtcbiAgcHJpdmF0ZSBwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIERldkNvbnRhaW5lciBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBEZXZDb250YWluZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBmaWxlIHBhdGggZm9yIHRoZSBEZXZDb250YWluZXIgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuZGV2Y29udGFpbmVyLmpzb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBEb2NrZXIgaW1hZ2UgdXNlZCBmb3IgdGhlIERldkNvbnRhaW5lci5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGRvY2tlckltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdtY3IubWljcm9zb2Z0LmNvbS9kZXZjb250YWluZXJzL3R5cGVzY3JpcHQtbm9kZToxLTIwLWJ1bGxzZXllJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgZmVhdHVyZXMgdG8gYmUgaW5zdGFsbGVkIGluIHRoZSBEZXZDb250YWluZXIuXG4gICAqL1xuICBwcml2YXRlIGdldCBmZWF0dXJlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy1jb250cmliL2ZlYXR1cmVzL2N1cmwtYXB0LWdldCc6ICdsYXRlc3QnLFxuICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy9mZWF0dXJlcy9naXRodWItY2xpJzogJ2xhdGVzdCcsXG4gICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzLWNvbnRyaWIvZmVhdHVyZXMvcHJvamVuJzogJ2xhdGVzdCcsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgbnBtIHNjcmlwdHMgdXNlZCB3aXRoaW4gdGhlIERldkNvbnRhaW5lciBlbnZpcm9ubWVudC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdpbnN0YWxsLWRlcGVuZGVuY2llcyc6ICducG0gaW5zdGFsbCcsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgVlNDb2RlIGV4dGVuc2lvbnMgdG8gYmUgaW5zdGFsbGVkIGluIHRoZSBEZXZDb250YWluZXIuXG4gICAqL1xuICBwcml2YXRlIGdldCBleHRlbnNpb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gSmVzdFxuICAgICAgJ09ydGEudnNjb2RlLWplc3QnLFxuICAgICAgJ2ZpcnN0dHJpcy52c2NvZGUtamVzdC1ydW5uZXInLFxuXG4gICAgICAvLyBSZXN0XG4gICAgICAnaHVtYW8ucmVzdC1jbGllbnQnLFxuXG4gICAgICAvLyBWU0NvZGVcbiAgICAgICdhYXJvbi1ib25kLmJldHRlci1jb21tZW50cycsXG4gICAgICAnYWxlZnJhZ25hbmkuQm9va21hcmtzJyxcbiAgICAgICdhbGVmcmFnbmFuaS5wcm9qZWN0LW1hbmFnZXInLFxuXG4gICAgICAvLyBOUE1cbiAgICAgICdjaHJpc3RpYW4ta29obGVyLm5wbS1pbnRlbGxpc2Vuc2UnLFxuICAgICAgJ21za2VsdG9uLm5wbS1vdXRkYXRlZCcsXG5cbiAgICAgIC8vIFRoZW1lXG4gICAgICAnUEtpZWYubWF0ZXJpYWwtaWNvbi10aGVtZScsXG4gICAgICAnemh1YW5ndG9uZ2ZhLm1hdGVyaWFsLXRoZW1lJyxcbiAgICAgICdHaXRIdWIuZ2l0aHViLXZzY29kZS10aGVtZScsXG5cbiAgICAgIC8vIERvY2tlclxuICAgICAgJ21zLXZzY29kZS1yZW1vdGUucmVtb3RlLWNvbnRhaW5lcnMnLFxuXG4gICAgICAvLyAuZW52XG4gICAgICAnbWlrZXN0ZWFkLmRvdGVudicsXG5cbiAgICAgIC8vIFR5cGVTY3JpcHRcbiAgICAgICd1c2VybmFtZWh3LmVycm9ybGVucycsXG4gICAgICAnZGJhZXVtZXIudnNjb2RlLWVzbGludCcsXG4gICAgICAnb2RlcndhdC5pbmRlbnQtcmFpbmJvdycsXG4gICAgICAnZXNiZW5wLnByZXR0aWVyLXZzY29kZScsXG4gICAgICAnWW9hdkJscy5wcmV0dHktdHMtZXJyb3JzJyxcbiAgICAgICdzdHJlZXRzaWRlc29mdHdhcmUuY29kZS1zcGVsbC1jaGVja2VyJyxcbiAgICAgICd3YXlvdS52c2NvZGUtdG9kby1oaWdobGlnaHQnLFxuICAgICAgJ21pa2UtY28uaW1wb3J0LXNvcnRlcicsXG4gICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuXG4gICAgICAvLyBYTUwgJiBZQU1MJ1xuICAgICAgJ3JlZGhhdC52c2NvZGUteWFtbCcsXG4gICAgICAnRG90Sm9zaEpvaG5zb24ueG1sJyxcblxuICAgICAgLy8gR2l0XG4gICAgICAnd2FkZXJ5YW4uZ2l0YmxhbWUnLFxuICAgICAgJ2RvbmpheWFtYW5uZS5naXRoaXN0b3J5JyxcbiAgICAgICdHaXRIdWIudnNjb2RlLXB1bGwtcmVxdWVzdC1naXRodWInLFxuXG4gICAgICAvLyBSRUFETUVcbiAgICAgICd5emhhbmcubWFya2Rvd24tYWxsLWluLW9uZScsXG4gICAgICAnRGF2aWRBbnNvbi52c2NvZGUtbWFya2Rvd25saW50JyxcbiAgICAgICdiaWVybmVyLmpzZG9jLW1hcmtkb3duLWhpZ2hsaWdodGluZycsXG5cbiAgICAgIC8vIE90aGVyc1xuICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcbiAgICAgICdjaHJpc3RpYW4ta29obGVyLnBhdGgtaW50ZWxsaXNlbnNlJyxcbiAgICAgICdBeWt1dFNhcmFjLmpzb25jcmFjay12c2NvZGUnLFxuICAgICAgJ3RhbWFzZmUuZXZlbi1iZXR0ZXItdG9tbCcsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgdGVtcGxhdGUgZmlsZSBmb3IgRGV2Q29udGFpbmVyIGNyZWF0aW9uLlxuICAgKlxuICAgKiBUaGUgZmlyc3Qgc2NyaXB0IGluIGBzY3JpcHRzYCBpcyB1c2VkIGFzIHRoZSBwb3N0Q3JlYXRlQ29tbWFuZCB0byBpbnN0YWxsIGRlcGVuZGVuY2llcyB1cG9uIGNyZWF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgdGVtcGxhdGUoKTogSnNvbkZpbGVPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgb21pdEVtcHR5OiB0cnVlLFxuICAgICAgYWxsb3dDb21tZW50czogdHJ1ZSxcbiAgICAgIG9iajoge1xuICAgICAgICBpbWFnZTogdGhpcy5kb2NrZXJJbWFnZSxcbiAgICAgICAgcG9zdENyZWF0ZUNvbW1hbmQ6IGBucHggcHJvamVuICR7T2JqZWN0LmtleXModGhpcy5zY3JpcHRzKVswXX1gLFxuICAgICAgICBmZWF0dXJlczogdGhpcy5mZWF0dXJlcyxcbiAgICAgICAgY3VzdG9taXphdGlvbnM6IHtcbiAgICAgICAgICB2c2NvZGU6IHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHRoaXMuZXh0ZW5zaW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGVtcGxhdGUgZmlsZXMgdG8gdGhlIERldkNvbnRhaW5lciBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgYWRkKCk6IHZvaWQge1xuICAgIG5ldyBKc29uRmlsZSh0aGlzLnByb2plY3QsIHRoaXMuZmlsZVBhdGgsIHRoaXMudGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbnBtIHNjcmlwdHMgc3BlY2lmaWMgdG8gRGV2Q29udGFpbmVyIHNldHVwIHdpdGhpbiB0aGUgcHJvamVjdCBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHVibGljIGFkZFNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29tbWFuZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY3JpcHRzKSkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFRhc2sobmFtZSwgeyBleGVjOiBjb21tYW5kIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBgLmdpdGF0dHJpYnV0ZXNgIGZpbGUgdG8gdHJlYXQgRGV2Q29udGFpbmVyIGNvbXBvbmVudCByZWxhdGVkIGZpbGVzIGFzIGdlbmVyYXRlZCBjb2RlLCBvcHRpbWl6aW5nIGRpZmZzLlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZUdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dGhpcy5maWxlUGF0aH1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgc2V0dXAgZm9yIHRoZSBEZXZDb250YWluZXIgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIHNldHVwKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkKCk7XG4gICAgdGhpcy5hZGRTY3JpcHRzKCk7XG4gICAgdGhpcy51cGRhdGVHaXRBdHRyaWJ1dGVzKCk7XG4gIH1cbn1cbiJdfQ==