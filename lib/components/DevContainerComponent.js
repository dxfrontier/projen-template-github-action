"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainerComponent = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2Q29udGFpbmVyQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvRGV2Q29udGFpbmVyQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtRDtBQUluRDs7R0FFRztBQUNILE1BQWEscUJBQXFCO0lBR2hDOzs7T0FHRztJQUNILFlBQVksT0FBMEI7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxRQUFRO1FBQ2xCLE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxXQUFXO1FBQ3JCLE9BQU8sK0RBQStELENBQUM7SUFDekUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxRQUFRO1FBQ2xCLE9BQU87WUFDTCxxREFBcUQsRUFBRSxRQUFRO1lBQy9ELDJDQUEyQyxFQUFFLFFBQVE7WUFDckQsK0NBQStDLEVBQUUsUUFBUTtTQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxPQUFPO1FBQ2pCLE9BQU87WUFDTCxzQkFBc0IsRUFBRSxhQUFhO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLFVBQVU7UUFDcEIsT0FBTztZQUNMLE9BQU87WUFDUCxrQkFBa0I7WUFDbEIsOEJBQThCO1lBRTlCLE9BQU87WUFDUCxtQkFBbUI7WUFFbkIsU0FBUztZQUNULDRCQUE0QjtZQUM1Qix1QkFBdUI7WUFDdkIsNkJBQTZCO1lBRTdCLE1BQU07WUFDTixtQ0FBbUM7WUFDbkMsdUJBQXVCO1lBRXZCLFFBQVE7WUFDUiwyQkFBMkI7WUFDM0IsNkJBQTZCO1lBQzdCLDRCQUE0QjtZQUU1QixTQUFTO1lBQ1Qsb0NBQW9DO1lBRXBDLE9BQU87WUFDUCxrQkFBa0I7WUFFbEIsYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4QiwwQkFBMEI7WUFDMUIsdUNBQXVDO1lBQ3ZDLDZCQUE2QjtZQUM3Qix1QkFBdUI7WUFDdkIsd0NBQXdDO1lBRXhDLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBRXBCLE1BQU07WUFDTixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLG1DQUFtQztZQUVuQyxTQUFTO1lBQ1QsNEJBQTRCO1lBQzVCLGdDQUFnQztZQUNoQyxxQ0FBcUM7WUFFckMsU0FBUztZQUNULHdDQUF3QztZQUN4QyxvQ0FBb0M7WUFDcEMsNkJBQTZCO1lBQzdCLDBCQUEwQjtTQUMzQixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLFFBQVE7UUFDbEIsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJO1lBQ2YsYUFBYSxFQUFFLElBQUk7WUFDbkIsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDdkIsaUJBQWlCLEVBQUUsY0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixjQUFjLEVBQUU7b0JBQ2QsTUFBTSxFQUFFO3dCQUNOLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtxQkFDNUI7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHO1FBQ1IsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNWLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFuS0Qsc0RBbUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkZpbGUsIEpzb25GaWxlT3B0aW9ucyB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdCB9IGZyb20gJ3Byb2plbi9saWIvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBJUHJvamVjdENvbXBvbmVudCwgU2NyaXB0cyB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBEZXZDb250YWluZXIgdGVtcGxhdGVzLCBzZXR0aW5ncyBhbmQgbnBtIHNjcmlwdHMgZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgRGV2Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgSVByb2plY3RDb21wb25lbnQge1xuICBwcml2YXRlIHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgRGV2Q29udGFpbmVyIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIERldkNvbnRhaW5lciBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIGZpbGUgcGF0aCBmb3IgdGhlIERldkNvbnRhaW5lciBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgZmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5kZXZjb250YWluZXIuanNvbic7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIERvY2tlciBpbWFnZSB1c2VkIGZvciB0aGUgRGV2Q29udGFpbmVyLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgZG9ja2VySW1hZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ21jci5taWNyb3NvZnQuY29tL2RldmNvbnRhaW5lcnMvdHlwZXNjcmlwdC1ub2RlOjEtMjAtYnVsbHNleWUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBmZWF0dXJlcyB0byBiZSBpbnN0YWxsZWQgaW4gdGhlIERldkNvbnRhaW5lci5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGZlYXR1cmVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzLWNvbnRyaWIvZmVhdHVyZXMvY3VybC1hcHQtZ2V0JzogJ2xhdGVzdCcsXG4gICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzL2ZlYXR1cmVzL2dpdGh1Yi1jbGknOiAnbGF0ZXN0JyxcbiAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMtY29udHJpYi9mZWF0dXJlcy9wcm9qZW4nOiAnbGF0ZXN0JyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBucG0gc2NyaXB0cyB1c2VkIHdpdGhpbiB0aGUgRGV2Q29udGFpbmVyIGVudmlyb25tZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgc2NyaXB0cygpOiBTY3JpcHRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2luc3RhbGwtZGVwZW5kZW5jaWVzJzogJ25wbSBpbnN0YWxsJyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSBWU0NvZGUgZXh0ZW5zaW9ucyB0byBiZSBpbnN0YWxsZWQgaW4gdGhlIERldkNvbnRhaW5lci5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBKZXN0XG4gICAgICAnT3J0YS52c2NvZGUtamVzdCcsXG4gICAgICAnZmlyc3R0cmlzLnZzY29kZS1qZXN0LXJ1bm5lcicsXG5cbiAgICAgIC8vIFJlc3RcbiAgICAgICdodW1hby5yZXN0LWNsaWVudCcsXG5cbiAgICAgIC8vIFZTQ29kZVxuICAgICAgJ2Fhcm9uLWJvbmQuYmV0dGVyLWNvbW1lbnRzJyxcbiAgICAgICdhbGVmcmFnbmFuaS5Cb29rbWFya3MnLFxuICAgICAgJ2FsZWZyYWduYW5pLnByb2plY3QtbWFuYWdlcicsXG5cbiAgICAgIC8vIE5QTVxuICAgICAgJ2NocmlzdGlhbi1rb2hsZXIubnBtLWludGVsbGlzZW5zZScsXG4gICAgICAnbXNrZWx0b24ubnBtLW91dGRhdGVkJyxcblxuICAgICAgLy8gVGhlbWVcbiAgICAgICdQS2llZi5tYXRlcmlhbC1pY29uLXRoZW1lJyxcbiAgICAgICd6aHVhbmd0b25nZmEubWF0ZXJpYWwtdGhlbWUnLFxuICAgICAgJ0dpdEh1Yi5naXRodWItdnNjb2RlLXRoZW1lJyxcblxuICAgICAgLy8gRG9ja2VyXG4gICAgICAnbXMtdnNjb2RlLXJlbW90ZS5yZW1vdGUtY29udGFpbmVycycsXG5cbiAgICAgIC8vIC5lbnZcbiAgICAgICdtaWtlc3RlYWQuZG90ZW52JyxcblxuICAgICAgLy8gVHlwZVNjcmlwdFxuICAgICAgJ3VzZXJuYW1laHcuZXJyb3JsZW5zJyxcbiAgICAgICdkYmFldW1lci52c2NvZGUtZXNsaW50JyxcbiAgICAgICdvZGVyd2F0LmluZGVudC1yYWluYm93JyxcbiAgICAgICdlc2JlbnAucHJldHRpZXItdnNjb2RlJyxcbiAgICAgICdZb2F2QmxzLnByZXR0eS10cy1lcnJvcnMnLFxuICAgICAgJ3N0cmVldHNpZGVzb2Z0d2FyZS5jb2RlLXNwZWxsLWNoZWNrZXInLFxuICAgICAgJ3dheW91LnZzY29kZS10b2RvLWhpZ2hsaWdodCcsXG4gICAgICAnbWlrZS1jby5pbXBvcnQtc29ydGVyJyxcbiAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG5cbiAgICAgIC8vIFhNTCAmIFlBTUwnXG4gICAgICAncmVkaGF0LnZzY29kZS15YW1sJyxcbiAgICAgICdEb3RKb3NoSm9obnNvbi54bWwnLFxuXG4gICAgICAvLyBHaXRcbiAgICAgICd3YWRlcnlhbi5naXRibGFtZScsXG4gICAgICAnZG9uamF5YW1hbm5lLmdpdGhpc3RvcnknLFxuICAgICAgJ0dpdEh1Yi52c2NvZGUtcHVsbC1yZXF1ZXN0LWdpdGh1YicsXG5cbiAgICAgIC8vIFJFQURNRVxuICAgICAgJ3l6aGFuZy5tYXJrZG93bi1hbGwtaW4tb25lJyxcbiAgICAgICdEYXZpZEFuc29uLnZzY29kZS1tYXJrZG93bmxpbnQnLFxuICAgICAgJ2JpZXJuZXIuanNkb2MtbWFya2Rvd24taGlnaGxpZ2h0aW5nJyxcblxuICAgICAgLy8gT3RoZXJzXG4gICAgICAnVmlzdWFsU3R1ZGlvRXhwdFRlYW0udnNjb2RlaW50ZWxsaWNvZGUnLFxuICAgICAgJ2NocmlzdGlhbi1rb2hsZXIucGF0aC1pbnRlbGxpc2Vuc2UnLFxuICAgICAgJ0F5a3V0U2FyYWMuanNvbmNyYWNrLXZzY29kZScsXG4gICAgICAndGFtYXNmZS5ldmVuLWJldHRlci10b21sJyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSB0ZW1wbGF0ZSBmaWxlIGZvciBEZXZDb250YWluZXIgY3JlYXRpb24uXG4gICAqXG4gICAqIFRoZSBmaXJzdCBzY3JpcHQgaW4gYHNjcmlwdHNgIGlzIHVzZWQgYXMgdGhlIHBvc3RDcmVhdGVDb21tYW5kIHRvIGluc3RhbGwgZGVwZW5kZW5jaWVzIHVwb24gY3JlYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGdldCB0ZW1wbGF0ZSgpOiBKc29uRmlsZU9wdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBvbWl0RW1wdHk6IHRydWUsXG4gICAgICBhbGxvd0NvbW1lbnRzOiB0cnVlLFxuICAgICAgb2JqOiB7XG4gICAgICAgIGltYWdlOiB0aGlzLmRvY2tlckltYWdlLFxuICAgICAgICBwb3N0Q3JlYXRlQ29tbWFuZDogYG5weCBwcm9qZW4gJHtPYmplY3Qua2V5cyh0aGlzLnNjcmlwdHMpWzBdfWAsXG4gICAgICAgIGZlYXR1cmVzOiB0aGlzLmZlYXR1cmVzLFxuICAgICAgICBjdXN0b21pemF0aW9uczoge1xuICAgICAgICAgIHZzY29kZToge1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogdGhpcy5leHRlbnNpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0ZW1wbGF0ZSBmaWxlcyB0byB0aGUgRGV2Q29udGFpbmVyIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBhZGQoKTogdm9pZCB7XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgdGhpcy5maWxlUGF0aCwgdGhpcy50ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBucG0gc2NyaXB0cyBzcGVjaWZpYyB0byBEZXZDb250YWluZXIgc2V0dXAgd2l0aGluIHRoZSBwcm9qZWN0IGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwdWJsaWMgYWRkU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb21tYW5kXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNjcmlwdHMpKSB7XG4gICAgICB0aGlzLnByb2plY3QuYWRkVGFzayhuYW1lLCB7IGV4ZWM6IGNvbW1hbmQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIGAuZ2l0YXR0cmlidXRlc2AgZmlsZSB0byB0cmVhdCBEZXZDb250YWluZXIgY29tcG9uZW50IHJlbGF0ZWQgZmlsZXMgYXMgZ2VuZXJhdGVkIGNvZGUsIG9wdGltaXppbmcgZGlmZnMuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLmZpbGVQYXRofWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBzZXR1cCBmb3IgdGhlIERldkNvbnRhaW5lciBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgc2V0dXAoKTogdm9pZCB7XG4gICAgdGhpcy5hZGQoKTtcbiAgICB0aGlzLmFkZFNjcmlwdHMoKTtcbiAgICB0aGlzLnVwZGF0ZUdpdEF0dHJpYnV0ZXMoKTtcbiAgfVxufVxuIl19