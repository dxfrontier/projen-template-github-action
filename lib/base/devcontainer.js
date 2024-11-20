"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevContainerBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const builder_1 = require("./builder");
/**
 * Base class for DevContainer builder implementing all relevant configuration.
 * @abstract
 */
class DevContainerBase extends builder_1.Builder {
    /**
     * Initializes the base DevContainer builder.
     * @param project The project to configure DevContainer for.
     */
    constructor(project) {
        super(project);
    }
    /**
     * File path to the CommitLint configuration.
     * @return File path to config file.
     * @protected
     */
    get filePath() {
        return '.devcontainer.json';
    }
    /**
     * Docker image used for the DevContainer.
     * @return Docker image to be used for container.
     * @protected
     */
    get dockerImage() {
        return 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye';
    }
    /**
     * Features to be installed in the DevContainer.
     * @return Additional features used in container.
     * @protected
     */
    get features() {
        return {
            'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
            'ghcr.io/devcontainers/features/github-cli': 'latest',
            'ghcr.io/devcontainers-contrib/features/projen': 'latest',
        };
    }
    /**
     * VsCode extensions to be installed in the DevContainer.
     * @return Extensions used in container.
     * @protected
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
    /**
     * Template file for DevContainer creation.
     * The first script in `scripts` is used as the postCreateCommand to install dependencies upon creation.
     * @return Template for the config file.
     * @protected
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
     * NPM scripts used within the DevContainer environment.
     * @return Npm script entries.
     * @protected
     */
    get scripts() {
        return {
            'install-dependencies': 'npm install',
        };
    }
    addTemplates() {
        new projen_1.JsonFile(this.project, this.filePath, this.template);
    }
    addScripts() {
        for (const [name, command] of Object.entries(this.scripts)) {
            this.project.addTask(name, { exec: command });
        }
    }
}
exports.DevContainerBase = DevContainerBase;
_a = JSII_RTTI_SYMBOL_1;
DevContainerBase[_a] = { fqn: "@dxfrontier/projen-template-projects.DevContainerBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW1EO0FBQ25ELHVDQUFvQztBQUlwQzs7O0dBR0c7QUFDSCxNQUFzQixnQkFBaUIsU0FBUSxpQkFBTztJQUNwRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxXQUFXO1FBQ3ZCLE9BQU8sK0RBQStELENBQUM7SUFDekUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLHFEQUFxRCxFQUFFLFFBQVE7WUFDL0QsMkNBQTJDLEVBQUUsUUFBUTtZQUNyRCwrQ0FBK0MsRUFBRSxRQUFRO1NBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPO1lBQ0wsT0FBTztZQUNQLGtCQUFrQjtZQUNsQiw4QkFBOEI7WUFFOUIsT0FBTztZQUNQLG1CQUFtQjtZQUVuQixTQUFTO1lBQ1QsNEJBQTRCO1lBQzVCLHVCQUF1QjtZQUN2Qiw2QkFBNkI7WUFFN0IsTUFBTTtZQUNOLG1DQUFtQztZQUNuQyx1QkFBdUI7WUFFdkIsUUFBUTtZQUNSLDJCQUEyQjtZQUMzQiw2QkFBNkI7WUFDN0IsNEJBQTRCO1lBRTVCLFNBQVM7WUFDVCxvQ0FBb0M7WUFFcEMsT0FBTztZQUNQLGtCQUFrQjtZQUVsQixhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQix1Q0FBdUM7WUFDdkMsNkJBQTZCO1lBQzdCLHVCQUF1QjtZQUN2Qix3Q0FBd0M7WUFFeEMsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFFcEIsTUFBTTtZQUNOLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsbUNBQW1DO1lBRW5DLFNBQVM7WUFDVCw0QkFBNEI7WUFDNUIsZ0NBQWdDO1lBQ2hDLHFDQUFxQztZQUVyQyxTQUFTO1lBQ1Qsd0NBQXdDO1lBQ3hDLG9DQUFvQztZQUNwQyw2QkFBNkI7WUFDN0IsMEJBQTBCO1NBQzNCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJO1lBQ2YsYUFBYSxFQUFFLElBQUk7WUFDbkIsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDdkIsaUJBQWlCLEVBQUUsY0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixjQUFjLEVBQUU7b0JBQ2QsTUFBTSxFQUFFO3dCQUNOLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtxQkFDNUI7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsT0FBTztRQUNuQixPQUFPO1lBQ0wsc0JBQXNCLEVBQUUsYUFBYTtTQUN0QyxDQUFDO0lBQ0osQ0FBQztJQUVTLFlBQVk7UUFDcEIsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVTLFVBQVU7UUFDbEIsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7O0FBckpILDRDQXNKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlLCBKc29uRmlsZU9wdGlvbnMgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBTY3JpcHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBEZXZDb250YWluZXIgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERldkNvbnRhaW5lckJhc2UgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIERldkNvbnRhaW5lciBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgRGV2Q29udGFpbmVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgQ29tbWl0TGludCBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBjb25maWcgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLmRldmNvbnRhaW5lci5qc29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEb2NrZXIgaW1hZ2UgdXNlZCBmb3IgdGhlIERldkNvbnRhaW5lci5cbiAgICogQHJldHVybiBEb2NrZXIgaW1hZ2UgdG8gYmUgdXNlZCBmb3IgY29udGFpbmVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGRvY2tlckltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdtY3IubWljcm9zb2Z0LmNvbS9kZXZjb250YWluZXJzL3R5cGVzY3JpcHQtbm9kZToxLTIwLWJ1bGxzZXllJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGZWF0dXJlcyB0byBiZSBpbnN0YWxsZWQgaW4gdGhlIERldkNvbnRhaW5lci5cbiAgICogQHJldHVybiBBZGRpdGlvbmFsIGZlYXR1cmVzIHVzZWQgaW4gY29udGFpbmVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZlYXR1cmVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzLWNvbnRyaWIvZmVhdHVyZXMvY3VybC1hcHQtZ2V0JzogJ2xhdGVzdCcsXG4gICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzL2ZlYXR1cmVzL2dpdGh1Yi1jbGknOiAnbGF0ZXN0JyxcbiAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMtY29udHJpYi9mZWF0dXJlcy9wcm9qZW4nOiAnbGF0ZXN0JyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZzQ29kZSBleHRlbnNpb25zIHRvIGJlIGluc3RhbGxlZCBpbiB0aGUgRGV2Q29udGFpbmVyLlxuICAgKiBAcmV0dXJuIEV4dGVuc2lvbnMgdXNlZCBpbiBjb250YWluZXIuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIEplc3RcbiAgICAgICdPcnRhLnZzY29kZS1qZXN0JyxcbiAgICAgICdmaXJzdHRyaXMudnNjb2RlLWplc3QtcnVubmVyJyxcblxuICAgICAgLy8gUmVzdFxuICAgICAgJ2h1bWFvLnJlc3QtY2xpZW50JyxcblxuICAgICAgLy8gVnNDb2RlXG4gICAgICAnYWFyb24tYm9uZC5iZXR0ZXItY29tbWVudHMnLFxuICAgICAgJ2FsZWZyYWduYW5pLkJvb2ttYXJrcycsXG4gICAgICAnYWxlZnJhZ25hbmkucHJvamVjdC1tYW5hZ2VyJyxcblxuICAgICAgLy8gTlBNXG4gICAgICAnY2hyaXN0aWFuLWtvaGxlci5ucG0taW50ZWxsaXNlbnNlJyxcbiAgICAgICdtc2tlbHRvbi5ucG0tb3V0ZGF0ZWQnLFxuXG4gICAgICAvLyBUaGVtZVxuICAgICAgJ1BLaWVmLm1hdGVyaWFsLWljb24tdGhlbWUnLFxuICAgICAgJ3podWFuZ3RvbmdmYS5tYXRlcmlhbC10aGVtZScsXG4gICAgICAnR2l0SHViLmdpdGh1Yi12c2NvZGUtdGhlbWUnLFxuXG4gICAgICAvLyBEb2NrZXJcbiAgICAgICdtcy12c2NvZGUtcmVtb3RlLnJlbW90ZS1jb250YWluZXJzJyxcblxuICAgICAgLy8gLmVudlxuICAgICAgJ21pa2VzdGVhZC5kb3RlbnYnLFxuXG4gICAgICAvLyBUeXBlU2NyaXB0XG4gICAgICAndXNlcm5hbWVody5lcnJvcmxlbnMnLFxuICAgICAgJ2RiYWV1bWVyLnZzY29kZS1lc2xpbnQnLFxuICAgICAgJ29kZXJ3YXQuaW5kZW50LXJhaW5ib3cnLFxuICAgICAgJ2VzYmVucC5wcmV0dGllci12c2NvZGUnLFxuICAgICAgJ1lvYXZCbHMucHJldHR5LXRzLWVycm9ycycsXG4gICAgICAnc3RyZWV0c2lkZXNvZnR3YXJlLmNvZGUtc3BlbGwtY2hlY2tlcicsXG4gICAgICAnd2F5b3UudnNjb2RlLXRvZG8taGlnaGxpZ2h0JyxcbiAgICAgICdtaWtlLWNvLmltcG9ydC1zb3J0ZXInLFxuICAgICAgJ1Zpc3VhbFN0dWRpb0V4cHRUZWFtLnZzY29kZWludGVsbGljb2RlJyxcblxuICAgICAgLy8gWE1MICYgWUFNTCdcbiAgICAgICdyZWRoYXQudnNjb2RlLXlhbWwnLFxuICAgICAgJ0RvdEpvc2hKb2huc29uLnhtbCcsXG5cbiAgICAgIC8vIEdpdFxuICAgICAgJ3dhZGVyeWFuLmdpdGJsYW1lJyxcbiAgICAgICdkb25qYXlhbWFubmUuZ2l0aGlzdG9yeScsXG4gICAgICAnR2l0SHViLnZzY29kZS1wdWxsLXJlcXVlc3QtZ2l0aHViJyxcblxuICAgICAgLy8gUkVBRE1FXG4gICAgICAneXpoYW5nLm1hcmtkb3duLWFsbC1pbi1vbmUnLFxuICAgICAgJ0RhdmlkQW5zb24udnNjb2RlLW1hcmtkb3dubGludCcsXG4gICAgICAnYmllcm5lci5qc2RvYy1tYXJrZG93bi1oaWdobGlnaHRpbmcnLFxuXG4gICAgICAvLyBPdGhlcnNcbiAgICAgICdWaXN1YWxTdHVkaW9FeHB0VGVhbS52c2NvZGVpbnRlbGxpY29kZScsXG4gICAgICAnY2hyaXN0aWFuLWtvaGxlci5wYXRoLWludGVsbGlzZW5zZScsXG4gICAgICAnQXlrdXRTYXJhYy5qc29uY3JhY2stdnNjb2RlJyxcbiAgICAgICd0YW1hc2ZlLmV2ZW4tYmV0dGVyLXRvbWwnLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogVGVtcGxhdGUgZmlsZSBmb3IgRGV2Q29udGFpbmVyIGNyZWF0aW9uLlxuICAgKiBUaGUgZmlyc3Qgc2NyaXB0IGluIGBzY3JpcHRzYCBpcyB1c2VkIGFzIHRoZSBwb3N0Q3JlYXRlQ29tbWFuZCB0byBpbnN0YWxsIGRlcGVuZGVuY2llcyB1cG9uIGNyZWF0aW9uLlxuICAgKiBAcmV0dXJuIFRlbXBsYXRlIGZvciB0aGUgY29uZmlnIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgdGVtcGxhdGUoKTogSnNvbkZpbGVPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgb21pdEVtcHR5OiB0cnVlLFxuICAgICAgYWxsb3dDb21tZW50czogdHJ1ZSxcbiAgICAgIG9iajoge1xuICAgICAgICBpbWFnZTogdGhpcy5kb2NrZXJJbWFnZSxcbiAgICAgICAgcG9zdENyZWF0ZUNvbW1hbmQ6IGBucHggcHJvamVuICR7T2JqZWN0LmtleXModGhpcy5zY3JpcHRzKVswXX1gLFxuICAgICAgICBmZWF0dXJlczogdGhpcy5mZWF0dXJlcyxcbiAgICAgICAgY3VzdG9taXphdGlvbnM6IHtcbiAgICAgICAgICB2c2NvZGU6IHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHRoaXMuZXh0ZW5zaW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE5QTSBzY3JpcHRzIHVzZWQgd2l0aGluIHRoZSBEZXZDb250YWluZXIgZW52aXJvbm1lbnQuXG4gICAqIEByZXR1cm4gTnBtIHNjcmlwdCBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdpbnN0YWxsLWRlcGVuZGVuY2llcyc6ICducG0gaW5zdGFsbCcsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgdGhpcy5maWxlUGF0aCwgdGhpcy50ZW1wbGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb21tYW5kXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNjcmlwdHMpKSB7XG4gICAgICB0aGlzLnByb2plY3QuYWRkVGFzayhuYW1lLCB7IGV4ZWM6IGNvbW1hbmQgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=