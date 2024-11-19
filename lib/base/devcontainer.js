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
        return [];
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
            if (Array.isArray(command)) {
                let steps = [];
                for (const cmd of command) {
                    steps.push({ exec: cmd });
                }
                this.project.addTask(name, { steps });
            }
            else {
                this.project.addTask(name, { exec: command });
            }
        }
    }
}
exports.DevContainerBase = DevContainerBase;
_a = JSII_RTTI_SYMBOL_1;
DevContainerBase[_a] = { fqn: "projen-template-projects.DevContainerBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQTZEO0FBQzdELHVDQUFvQztBQUlwQzs7O0dBR0c7QUFDSCxNQUFzQixnQkFBaUIsU0FBUSxpQkFBTztJQUNwRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxXQUFXO1FBQ3ZCLE9BQU8sK0RBQStELENBQUM7SUFDekUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLHFEQUFxRCxFQUFFLFFBQVE7WUFDL0QsMkNBQTJDLEVBQUUsUUFBUTtZQUNyRCwrQ0FBK0MsRUFBRSxRQUFRO1NBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUUsSUFBSTtZQUNuQixHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN2QixpQkFBaUIsRUFBRSxjQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO3FCQUM1QjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxzQkFBc0IsRUFBRSxhQUFhO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRVMsWUFBWTtRQUNwQixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRVMsVUFBVTtRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxLQUFLLEdBQWUsRUFBRSxDQUFDO2dCQUMzQixLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUMxQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4QyxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQzFELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzs7QUFuR0gsNENBb0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkZpbGUsIEpzb25GaWxlT3B0aW9ucywgVGFza1N0ZXAgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQgeyBTY3JpcHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBEZXZDb250YWluZXIgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24uXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERldkNvbnRhaW5lckJhc2UgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIERldkNvbnRhaW5lciBidWlsZGVyLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgRGV2Q29udGFpbmVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgQ29tbWl0TGludCBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byBjb25maWcgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLmRldmNvbnRhaW5lci5qc29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEb2NrZXIgaW1hZ2UgdXNlZCBmb3IgdGhlIERldkNvbnRhaW5lci5cbiAgICogQHJldHVybiBEb2NrZXIgaW1hZ2UgdG8gYmUgdXNlZCBmb3IgY29udGFpbmVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGRvY2tlckltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdtY3IubWljcm9zb2Z0LmNvbS9kZXZjb250YWluZXJzL3R5cGVzY3JpcHQtbm9kZToxLTIwLWJ1bGxzZXllJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGZWF0dXJlcyB0byBiZSBpbnN0YWxsZWQgaW4gdGhlIERldkNvbnRhaW5lci5cbiAgICogQHJldHVybiBBZGRpdGlvbmFsIGZlYXR1cmVzIHVzZWQgaW4gY29udGFpbmVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZlYXR1cmVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzLWNvbnRyaWIvZmVhdHVyZXMvY3VybC1hcHQtZ2V0JzogJ2xhdGVzdCcsXG4gICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzL2ZlYXR1cmVzL2dpdGh1Yi1jbGknOiAnbGF0ZXN0JyxcbiAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMtY29udHJpYi9mZWF0dXJlcy9wcm9qZW4nOiAnbGF0ZXN0JyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZzQ29kZSBleHRlbnNpb25zIHRvIGJlIGluc3RhbGxlZCBpbiB0aGUgRGV2Q29udGFpbmVyLlxuICAgKiBAcmV0dXJuIEV4dGVuc2lvbnMgdXNlZCBpbiBjb250YWluZXIuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZXh0ZW5zaW9ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbXBsYXRlIGZpbGUgZm9yIERldkNvbnRhaW5lciBjcmVhdGlvbi5cbiAgICogVGhlIGZpcnN0IHNjcmlwdCBpbiBgc2NyaXB0c2AgaXMgdXNlZCBhcyB0aGUgcG9zdENyZWF0ZUNvbW1hbmQgdG8gaW5zdGFsbCBkZXBlbmRlbmNpZXMgdXBvbiBjcmVhdGlvbi5cbiAgICogQHJldHVybiBUZW1wbGF0ZSBmb3IgdGhlIGNvbmZpZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHRlbXBsYXRlKCk6IEpzb25GaWxlT3B0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9taXRFbXB0eTogdHJ1ZSxcbiAgICAgIGFsbG93Q29tbWVudHM6IHRydWUsXG4gICAgICBvYmo6IHtcbiAgICAgICAgaW1hZ2U6IHRoaXMuZG9ja2VySW1hZ2UsXG4gICAgICAgIHBvc3RDcmVhdGVDb21tYW5kOiBgbnB4IHByb2plbiAke09iamVjdC5rZXlzKHRoaXMuc2NyaXB0cylbMF19YCxcbiAgICAgICAgZmVhdHVyZXM6IHRoaXMuZmVhdHVyZXMsXG4gICAgICAgIGN1c3RvbWl6YXRpb25zOiB7XG4gICAgICAgICAgdnNjb2RlOiB7XG4gICAgICAgICAgICBleHRlbnNpb25zOiB0aGlzLmV4dGVuc2lvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOUE0gc2NyaXB0cyB1c2VkIHdpdGhpbiB0aGUgRGV2Q29udGFpbmVyIGVudmlyb25tZW50LlxuICAgKiBAcmV0dXJuIE5wbSBzY3JpcHQgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzY3JpcHRzKCk6IFNjcmlwdHMge1xuICAgIHJldHVybiB7XG4gICAgICAnaW5zdGFsbC1kZXBlbmRlbmNpZXMnOiAnbnBtIGluc3RhbGwnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkVGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIG5ldyBKc29uRmlsZSh0aGlzLnByb2plY3QsIHRoaXMuZmlsZVBhdGgsIHRoaXMudGVtcGxhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29tbWFuZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY3JpcHRzKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29tbWFuZCkpIHtcbiAgICAgICAgbGV0IHN0ZXBzOiBUYXNrU3RlcFtdID0gW107XG4gICAgICAgIGZvciAoY29uc3QgY21kIG9mIGNvbW1hbmQpIHtcbiAgICAgICAgICBzdGVwcy5wdXNoKHsgZXhlYzogY21kIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvamVjdC5hZGRUYXNrKG5hbWUsIHsgc3RlcHMgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb2plY3QuYWRkVGFzayhuYW1lLCB7IGV4ZWM6IGNvbW1hbmQgYXMgc3RyaW5nIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19