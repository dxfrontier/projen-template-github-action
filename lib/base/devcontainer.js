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
            this.project.addTask(name, { exec: command });
        }
    }
}
exports.DevContainerBase = DevContainerBase;
_a = JSII_RTTI_SYMBOL_1;
DevContainerBase[_a] = { fqn: "projen-template-projects.DevContainerBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW1EO0FBQ25ELHVDQUFvQztBQUlwQzs7O0dBR0c7QUFDSCxNQUFzQixnQkFBaUIsU0FBUSxpQkFBTztJQUNwRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxXQUFXO1FBQ3ZCLE9BQU8sK0RBQStELENBQUM7SUFDekUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLHFEQUFxRCxFQUFFLFFBQVE7WUFDL0QsMkNBQTJDLEVBQUUsUUFBUTtZQUNyRCwrQ0FBK0MsRUFBRSxRQUFRO1NBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUUsSUFBSTtZQUNuQixHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN2QixpQkFBaUIsRUFBRSxjQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO3FCQUM1QjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxzQkFBc0IsRUFBRSxhQUFhO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRVMsWUFBWTtRQUNwQixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRVMsVUFBVTtRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQzs7QUEzRkgsNENBNEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkZpbGUsIEpzb25GaWxlT3B0aW9ucyB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVyJztcbmltcG9ydCB7IFNjcmlwdHMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuL3Byb2plY3QnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIERldkNvbnRhaW5lciBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbi5cbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGV2Q29udGFpbmVyQmFzZSBleHRlbmRzIEJ1aWxkZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGJhc2UgRGV2Q29udGFpbmVyIGJ1aWxkZXIuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBEZXZDb250YWluZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBDb21taXRMaW50IGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIGNvbmZpZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuZGV2Y29udGFpbmVyLmpzb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIERvY2tlciBpbWFnZSB1c2VkIGZvciB0aGUgRGV2Q29udGFpbmVyLlxuICAgKiBAcmV0dXJuIERvY2tlciBpbWFnZSB0byBiZSB1c2VkIGZvciBjb250YWluZXIuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZG9ja2VySW1hZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ21jci5taWNyb3NvZnQuY29tL2RldmNvbnRhaW5lcnMvdHlwZXNjcmlwdC1ub2RlOjEtMjAtYnVsbHNleWUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEZlYXR1cmVzIHRvIGJlIGluc3RhbGxlZCBpbiB0aGUgRGV2Q29udGFpbmVyLlxuICAgKiBAcmV0dXJuIEFkZGl0aW9uYWwgZmVhdHVyZXMgdXNlZCBpbiBjb250YWluZXIuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZmVhdHVyZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMtY29udHJpYi9mZWF0dXJlcy9jdXJsLWFwdC1nZXQnOiAnbGF0ZXN0JyxcbiAgICAgICdnaGNyLmlvL2RldmNvbnRhaW5lcnMvZmVhdHVyZXMvZ2l0aHViLWNsaSc6ICdsYXRlc3QnLFxuICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy1jb250cmliL2ZlYXR1cmVzL3Byb2plbic6ICdsYXRlc3QnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVnNDb2RlIGV4dGVuc2lvbnMgdG8gYmUgaW5zdGFsbGVkIGluIHRoZSBEZXZDb250YWluZXIuXG4gICAqIEByZXR1cm4gRXh0ZW5zaW9ucyB1c2VkIGluIGNvbnRhaW5lci5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBleHRlbnNpb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogVGVtcGxhdGUgZmlsZSBmb3IgRGV2Q29udGFpbmVyIGNyZWF0aW9uLlxuICAgKiBUaGUgZmlyc3Qgc2NyaXB0IGluIGBzY3JpcHRzYCBpcyB1c2VkIGFzIHRoZSBwb3N0Q3JlYXRlQ29tbWFuZCB0byBpbnN0YWxsIGRlcGVuZGVuY2llcyB1cG9uIGNyZWF0aW9uLlxuICAgKiBAcmV0dXJuIFRlbXBsYXRlIGZvciB0aGUgY29uZmlnIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgdGVtcGxhdGUoKTogSnNvbkZpbGVPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgb21pdEVtcHR5OiB0cnVlLFxuICAgICAgYWxsb3dDb21tZW50czogdHJ1ZSxcbiAgICAgIG9iajoge1xuICAgICAgICBpbWFnZTogdGhpcy5kb2NrZXJJbWFnZSxcbiAgICAgICAgcG9zdENyZWF0ZUNvbW1hbmQ6IGBucHggcHJvamVuICR7T2JqZWN0LmtleXModGhpcy5zY3JpcHRzKVswXX1gLFxuICAgICAgICBmZWF0dXJlczogdGhpcy5mZWF0dXJlcyxcbiAgICAgICAgY3VzdG9taXphdGlvbnM6IHtcbiAgICAgICAgICB2c2NvZGU6IHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHRoaXMuZXh0ZW5zaW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE5QTSBzY3JpcHRzIHVzZWQgd2l0aGluIHRoZSBEZXZDb250YWluZXIgZW52aXJvbm1lbnQuXG4gICAqIEByZXR1cm4gTnBtIHNjcmlwdCBlbnRyaWVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdpbnN0YWxsLWRlcGVuZGVuY2llcyc6ICducG0gaW5zdGFsbCcsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgdGhpcy5maWxlUGF0aCwgdGhpcy50ZW1wbGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkU2NyaXB0cygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb21tYW5kXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNjcmlwdHMpKSB7XG4gICAgICB0aGlzLnByb2plY3QuYWRkVGFzayhuYW1lLCB7IGV4ZWM6IGNvbW1hbmQgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=