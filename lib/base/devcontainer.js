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
    addGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.filePath}`, 'linguist-generated');
    }
}
exports.DevContainerBase = DevContainerBase;
_a = JSII_RTTI_SYMBOL_1;
DevContainerBase[_a] = { fqn: "projen-template-projects.DevContainerBase", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2Y29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jhc2UvZGV2Y29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW1EO0FBQ25ELHVDQUFvQztBQUlwQzs7O0dBR0c7QUFDSCxNQUFzQixnQkFBaUIsU0FBUSxpQkFBTztJQUNwRDs7O09BR0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxXQUFXO1FBQ3ZCLE9BQU8sK0RBQStELENBQUM7SUFDekUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTztZQUNMLHFEQUFxRCxFQUFFLFFBQVE7WUFDL0QsMkNBQTJDLEVBQUUsUUFBUTtZQUNyRCwrQ0FBK0MsRUFBRSxRQUFRO1NBQzFELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsVUFBVTtRQUN0QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUUsSUFBSTtZQUNuQixHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN2QixpQkFBaUIsRUFBRSxjQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLGNBQWMsRUFBRTtvQkFDZCxNQUFNLEVBQUU7d0JBQ04sVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO3FCQUM1QjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxPQUFPO1FBQ25CLE9BQU87WUFDTCxzQkFBc0IsRUFBRSxhQUFhO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRVMsWUFBWTtRQUNwQixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRVMsVUFBVTtRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVTLGdCQUFnQjtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN0RixDQUFDOztBQS9GSCw0Q0FnR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSwgSnNvbkZpbGVPcHRpb25zIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgU2NyaXB0cyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4vcHJvamVjdCc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgRGV2Q29udGFpbmVyIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEZXZDb250YWluZXJCYXNlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBEZXZDb250YWluZXIgYnVpbGRlci5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIERldkNvbnRhaW5lciBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIENvbW1pdExpbnQgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gY29uZmlnIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5kZXZjb250YWluZXIuanNvbic7XG4gIH1cblxuICAvKipcbiAgICogRG9ja2VyIGltYWdlIHVzZWQgZm9yIHRoZSBEZXZDb250YWluZXIuXG4gICAqIEByZXR1cm4gRG9ja2VyIGltYWdlIHRvIGJlIHVzZWQgZm9yIGNvbnRhaW5lci5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBkb2NrZXJJbWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnbWNyLm1pY3Jvc29mdC5jb20vZGV2Y29udGFpbmVycy90eXBlc2NyaXB0LW5vZGU6MS0yMC1idWxsc2V5ZSc7XG4gIH1cblxuICAvKipcbiAgICogRmVhdHVyZXMgdG8gYmUgaW5zdGFsbGVkIGluIHRoZSBEZXZDb250YWluZXIuXG4gICAqIEByZXR1cm4gQWRkaXRpb25hbCBmZWF0dXJlcyB1c2VkIGluIGNvbnRhaW5lci5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmZWF0dXJlcygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy1jb250cmliL2ZlYXR1cmVzL2N1cmwtYXB0LWdldCc6ICdsYXRlc3QnLFxuICAgICAgJ2doY3IuaW8vZGV2Y29udGFpbmVycy9mZWF0dXJlcy9naXRodWItY2xpJzogJ2xhdGVzdCcsXG4gICAgICAnZ2hjci5pby9kZXZjb250YWluZXJzLWNvbnRyaWIvZmVhdHVyZXMvcHJvamVuJzogJ2xhdGVzdCcsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWc0NvZGUgZXh0ZW5zaW9ucyB0byBiZSBpbnN0YWxsZWQgaW4gdGhlIERldkNvbnRhaW5lci5cbiAgICogQHJldHVybiBFeHRlbnNpb25zIHVzZWQgaW4gY29udGFpbmVyLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGV4dGVuc2lvbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBmaWxlIGZvciBEZXZDb250YWluZXIgY3JlYXRpb24uXG4gICAqIFRoZSBmaXJzdCBzY3JpcHQgaW4gYHNjcmlwdHNgIGlzIHVzZWQgYXMgdGhlIHBvc3RDcmVhdGVDb21tYW5kIHRvIGluc3RhbGwgZGVwZW5kZW5jaWVzIHVwb24gY3JlYXRpb24uXG4gICAqIEByZXR1cm4gVGVtcGxhdGUgZm9yIHRoZSBjb25maWcgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCB0ZW1wbGF0ZSgpOiBKc29uRmlsZU9wdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBvbWl0RW1wdHk6IHRydWUsXG4gICAgICBhbGxvd0NvbW1lbnRzOiB0cnVlLFxuICAgICAgb2JqOiB7XG4gICAgICAgIGltYWdlOiB0aGlzLmRvY2tlckltYWdlLFxuICAgICAgICBwb3N0Q3JlYXRlQ29tbWFuZDogYG5weCBwcm9qZW4gJHtPYmplY3Qua2V5cyh0aGlzLnNjcmlwdHMpWzBdfWAsXG4gICAgICAgIGZlYXR1cmVzOiB0aGlzLmZlYXR1cmVzLFxuICAgICAgICBjdXN0b21pemF0aW9uczoge1xuICAgICAgICAgIHZzY29kZToge1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogdGhpcy5leHRlbnNpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTlBNIHNjcmlwdHMgdXNlZCB3aXRoaW4gdGhlIERldkNvbnRhaW5lciBlbnZpcm9ubWVudC5cbiAgICogQHJldHVybiBOcG0gc2NyaXB0IGVudHJpZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2NyaXB0cygpOiBTY3JpcHRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2luc3RhbGwtZGVwZW5kZW5jaWVzJzogJ25wbSBpbnN0YWxsJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCB0aGlzLmZpbGVQYXRoLCB0aGlzLnRlbXBsYXRlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRTY3JpcHRzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW25hbWUsIGNvbW1hbmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuc2NyaXB0cykpIHtcbiAgICAgIHRoaXMucHJvamVjdC5hZGRUYXNrKG5hbWUsIHsgZXhlYzogY29tbWFuZCB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLmZpbGVQYXRofWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgfVxufVxuIl19