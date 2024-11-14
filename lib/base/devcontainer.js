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
     * @protected
     */
    get filePath() {
        return '.devcontainer.json';
    }
    /**
     * Docker image used for the DevContainer.
     * @protected
     */
    get dockerImage() {
        return 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye';
    }
    /**
     * Features to be installed in the DevContainer.
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
     * VSCode extensions to be installed in the DevContainer.
     * @protected
     */
    get extensions() {
        return [];
    }
    /**
     * Template file for DevContainer creation.
     * The first script in `scripts` is used as the postCreateCommand to install dependencies upon creation.
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
    addGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.filePath}`, 'linguist-generated');
    }
}
exports.DevContainerBase = DevContainerBase;
_a = JSII_RTTI_SYMBOL_1;
DevContainerBase[_a] = { fqn: "projen-template-projects.DevContainerBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW1EO0FBQ25ELHVDQUFvQztBQUlwQzs7O0dBR0c7QUFDSCxNQUFzQixnQkFBaUIsU0FBUSxpQkFBTztJQUNwRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQWMsV0FBVztRQUN2QixPQUFPLCtEQUErRCxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLHFEQUFxRCxFQUFFLFFBQVE7WUFDL0QsMkNBQTJDLEVBQUUsUUFBUTtZQUNyRCwrQ0FBK0MsRUFBRSxRQUFRO1NBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxVQUFVO1FBQ3RCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJO1lBQ2YsYUFBYSxFQUFFLElBQUk7WUFDbkIsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDdkIsaUJBQWlCLEVBQUUsY0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixjQUFjLEVBQUU7b0JBQ2QsTUFBTSxFQUFFO3dCQUNOLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtxQkFDNUI7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxzQkFBc0IsRUFBRSxhQUFhO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRVMsWUFBWTtRQUNwQixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRVMsVUFBVTtRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVTLGdCQUFnQjtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN0RixDQUFDOztBQXpGSCw0Q0EwRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSwgSnNvbkZpbGVPcHRpb25zIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgU2NyaXB0cyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgRGV2Q29udGFpbmVyIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEZXZDb250YWluZXJCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBEZXZDb250YWluZXIgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIERldkNvbnRhaW5lciBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIENvbW1pdExpbnQgY29uZmlndXJhdGlvbi5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLmRldmNvbnRhaW5lci5qc29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEb2NrZXIgaW1hZ2UgdXNlZCBmb3IgdGhlIERldkNvbnRhaW5lci5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBkb2NrZXJJbWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnbWNyLm1pY3Jvc29mdC5jb20vZGV2Y29udGFpbmVycy90eXBlc2NyaXB0LW5vZGU6MS0yMC1idWxsc2V5ZSc7XG4gIH1cblxuICAvKipcbiAgICogRmVhdHVyZXMgdG8gYmUgaW5zdGFsbGVkIGluIHRoZSBEZXZDb250YWluZXIuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZmVhdHVyZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMtY29udHJpYi9mZWF0dXJlcy9jdXJsLWFwdC1nZXQnOiAnbGF0ZXN0JyxcbiAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMvZmVhdHVyZXMvZ2l0aHViLWNsaSc6ICdsYXRlc3QnLFxuICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy1jb250cmliL2ZlYXR1cmVzL3Byb2plbic6ICdsYXRlc3QnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVlNDb2RlIGV4dGVuc2lvbnMgdG8gYmUgaW5zdGFsbGVkIGluIHRoZSBEZXZDb250YWluZXIuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbXBsYXRlIGZpbGUgZm9yIERldkNvbnRhaW5lciBjcmVhdGlvbi5cbiAgICogVGhlIGZpcnN0IHNjcmlwdCBpbiBgc2NyaXB0c2AgaXMgdXNlZCBhcyB0aGUgcG9zdENyZWF0ZUNvbW1hbmQgdG8gaW5zdGFsbCBkZXBlbmRlbmNpZXMgdXBvbiBjcmVhdGlvbi5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCB0ZW1wbGF0ZSgpOiBKc29uRmlsZU9wdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBvbWl0RW1wdHk6IHRydWUsXG4gICAgICBhbGxvd0NvbW1lbnRzOiB0cnVlLFxuICAgICAgb2JqOiB7XG4gICAgICAgIGltYWdlOiB0aGlzLmRvY2tlckltYWdlLFxuICAgICAgICBwb3N0Q3JlYXRlQ29tbWFuZDogYG5weCBwcm9qZW4gJHtPYmplY3Qua2V5cyh0aGlzLnNjcmlwdHMpWzBdfWAsXG4gICAgICAgIGZlYXR1cmVzOiB0aGlzLmZlYXR1cmVzLFxuICAgICAgICBjdXN0b21pemF0aW9uczoge1xuICAgICAgICAgIHZzY29kZToge1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogdGhpcy5leHRlbnNpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTlBNIHNjcmlwdHMgdXNlZCB3aXRoaW4gdGhlIERldkNvbnRhaW5lciBlbnZpcm9ubWVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzY3JpcHRzKCk6IFNjcmlwdHMge1xuICAgIHJldHVybiB7XG4gICAgICAnaW5zdGFsbC1kZXBlbmRlbmNpZXMnOiAnbnBtIGluc3RhbGwnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkVGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIG5ldyBKc29uRmlsZSh0aGlzLnByb2plY3QsIHRoaXMuZmlsZVBhdGgsIHRoaXMudGVtcGxhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29tbWFuZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY3JpcHRzKSkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFRhc2sobmFtZSwgeyBleGVjOiBjb21tYW5kIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRHaXRBdHRyaWJ1dGVzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdC5naXRhdHRyaWJ1dGVzLmFkZEF0dHJpYnV0ZXMoYC8ke3RoaXMuZmlsZVBhdGh9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICB9XG59XG4iXX0=