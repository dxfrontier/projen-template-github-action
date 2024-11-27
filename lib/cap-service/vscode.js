"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCode = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../base");
/**
 * VsCode builder implementing all relevant configuration for the project.
 */
class VsCode extends base_1.VsCodeBase {
    /**
     * Initializes the VsCode builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure VsCode Package for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * File path to the VsCode launch configuration.
     * @return File path to launch file.
     * @protected
     */
    get launchFilePath() {
        return '.vscode/launch.json';
    }
    /**
     * File path to the VsCode tasks configuration.
     * @return File path to tasks file.
     * @protected
     */
    get tasksFilePath() {
        return '.vscode/tasks.json';
    }
    /**
     * Template file for VsCode launch config.
     * @return Template for the config file.
     * @protected
     */
    get launchTemplate() {
        return {
            omitEmpty: true,
            allowComments: true,
            obj: {
                version: '0.2.0',
                configurations: [
                    {
                        address: '127.0.0.1',
                        localRoot: '${workspaceFolder}',
                        remoteRoot: '/home/vcap/app',
                        name: 'Attach to Remote',
                        port: 9229,
                        request: 'attach',
                        skipFiles: ['<node_internals>/**'],
                        type: 'node',
                    },
                ],
            },
        };
    }
    /**
     * Template file for VsCode tasks config.
     * @return Template for the config file.
     * @protected
     */
    get tasksTemplate() {
        return {
            omitEmpty: true,
            allowComments: true,
            obj: {
                version: '2.0.0',
                tasks: [
                    {
                        type: 'shell',
                        label: 'cds watch',
                        command: 'cds',
                        args: ['watch'],
                        group: {
                            kind: 'build',
                            isDefault: true,
                        },
                    },
                    {
                        type: 'shell',
                        label: 'cds serve',
                        command: 'cds',
                        args: ['serve', '--with-mocks', '--in-memory?'],
                    },
                ],
            },
        };
    }
    /**
     * @override
     */
    addTemplates() {
        new projen_1.JsonFile(this.project, this.tasksFilePath, this.tasksTemplate);
    }
    /**
     * @override
     *
     */
    addSettings() {
        super.addSettings();
        // A new JsonFile is created instead of using the projects vscode launch settings as
        // it is not allowed to use localRoot and remoteRoot with launch settings. This is crucial
        // for remote capire debugging.
        new projen_1.JsonFile(this.project, this.launchFilePath, this.launchTemplate);
    }
}
exports.VsCode = VsCode;
_a = JSII_RTTI_SYMBOL_1;
VsCode[_a] = { fqn: "@dxfrontier/projen-template-projects.VsCode", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL3ZzY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFtRDtBQUNuRCxrQ0FBNEQ7QUFHNUQ7O0dBRUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxpQkFBVTtJQUNwQzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLGFBQWE7UUFDekIsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsY0FBYztRQUMxQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUUsSUFBSTtZQUNuQixHQUFHLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLGNBQWMsRUFBRTtvQkFDZDt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsU0FBUyxFQUFFLG9CQUFvQjt3QkFDL0IsVUFBVSxFQUFFLGdCQUFnQjt3QkFDNUIsSUFBSSxFQUFFLGtCQUFrQjt3QkFDeEIsSUFBSSxFQUFFLElBQUk7d0JBQ1YsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNsQyxJQUFJLEVBQUUsTUFBTTtxQkFDYjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxhQUFhO1FBQ3pCLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEdBQUcsRUFBRTtnQkFDSCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxXQUFXO3dCQUNsQixPQUFPLEVBQUUsS0FBSzt3QkFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ2YsS0FBSyxFQUFFOzRCQUNMLElBQUksRUFBRSxPQUFPOzRCQUNiLFNBQVMsRUFBRSxJQUFJO3lCQUNoQjtxQkFDRjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUUsV0FBVzt3QkFDbEIsT0FBTyxFQUFFLEtBQUs7d0JBQ2QsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7cUJBQ2hEO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sWUFBWTtRQUNwQixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sV0FBVztRQUNuQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsb0ZBQW9GO1FBQ3BGLDBGQUEwRjtRQUMxRiwrQkFBK0I7UUFDL0IsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7QUEzR0gsd0JBNEdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkZpbGUsIEpzb25GaWxlT3B0aW9ucyB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBWc0NvZGVCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IExhdW5jaFNldHRpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogVnNDb2RlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFZzQ29kZSBleHRlbmRzIFZzQ29kZUJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFZzQ29kZSBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgVnNDb2RlIFBhY2thZ2UgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBWc0NvZGUgbGF1bmNoIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIGxhdW5jaCBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGxhdW5jaEZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcudnNjb2RlL2xhdW5jaC5qc29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIFZzQ29kZSB0YXNrcyBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byB0YXNrcyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHRhc2tzRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy52c2NvZGUvdGFza3MuanNvbic7XG4gIH1cblxuICAvKipcbiAgICogVGVtcGxhdGUgZmlsZSBmb3IgVnNDb2RlIGxhdW5jaCBjb25maWcuXG4gICAqIEByZXR1cm4gVGVtcGxhdGUgZm9yIHRoZSBjb25maWcgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBsYXVuY2hUZW1wbGF0ZSgpOiBMYXVuY2hTZXR0aW5nIHtcbiAgICByZXR1cm4ge1xuICAgICAgb21pdEVtcHR5OiB0cnVlLFxuICAgICAgYWxsb3dDb21tZW50czogdHJ1ZSxcbiAgICAgIG9iajoge1xuICAgICAgICB2ZXJzaW9uOiAnMC4yLjAnLFxuICAgICAgICBjb25maWd1cmF0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFkZHJlc3M6ICcxMjcuMC4wLjEnLFxuICAgICAgICAgICAgbG9jYWxSb290OiAnJHt3b3Jrc3BhY2VGb2xkZXJ9JyxcbiAgICAgICAgICAgIHJlbW90ZVJvb3Q6ICcvaG9tZS92Y2FwL2FwcCcsXG4gICAgICAgICAgICBuYW1lOiAnQXR0YWNoIHRvIFJlbW90ZScsXG4gICAgICAgICAgICBwb3J0OiA5MjI5LFxuICAgICAgICAgICAgcmVxdWVzdDogJ2F0dGFjaCcsXG4gICAgICAgICAgICBza2lwRmlsZXM6IFsnPG5vZGVfaW50ZXJuYWxzPi8qKiddLFxuICAgICAgICAgICAgdHlwZTogJ25vZGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVGVtcGxhdGUgZmlsZSBmb3IgVnNDb2RlIHRhc2tzIGNvbmZpZy5cbiAgICogQHJldHVybiBUZW1wbGF0ZSBmb3IgdGhlIGNvbmZpZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHRhc2tzVGVtcGxhdGUoKTogSnNvbkZpbGVPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgb21pdEVtcHR5OiB0cnVlLFxuICAgICAgYWxsb3dDb21tZW50czogdHJ1ZSxcbiAgICAgIG9iajoge1xuICAgICAgICB2ZXJzaW9uOiAnMi4wLjAnLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzaGVsbCcsXG4gICAgICAgICAgICBsYWJlbDogJ2NkcyB3YXRjaCcsXG4gICAgICAgICAgICBjb21tYW5kOiAnY2RzJyxcbiAgICAgICAgICAgIGFyZ3M6IFsnd2F0Y2gnXSxcbiAgICAgICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdidWlsZCcsXG4gICAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc2hlbGwnLFxuICAgICAgICAgICAgbGFiZWw6ICdjZHMgc2VydmUnLFxuICAgICAgICAgICAgY29tbWFuZDogJ2NkcycsXG4gICAgICAgICAgICBhcmdzOiBbJ3NlcnZlJywgJy0td2l0aC1tb2NrcycsICctLWluLW1lbW9yeT8nXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCB0aGlzLnRhc2tzRmlsZVBhdGgsIHRoaXMudGFza3NUZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgc3VwZXIuYWRkU2V0dGluZ3MoKTtcbiAgICAvLyBBIG5ldyBKc29uRmlsZSBpcyBjcmVhdGVkIGluc3RlYWQgb2YgdXNpbmcgdGhlIHByb2plY3RzIHZzY29kZSBsYXVuY2ggc2V0dGluZ3MgYXNcbiAgICAvLyBpdCBpcyBub3QgYWxsb3dlZCB0byB1c2UgbG9jYWxSb290IGFuZCByZW1vdGVSb290IHdpdGggbGF1bmNoIHNldHRpbmdzLiBUaGlzIGlzIGNydWNpYWxcbiAgICAvLyBmb3IgcmVtb3RlIGNhcGlyZSBkZWJ1Z2dpbmcuXG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgdGhpcy5sYXVuY2hGaWxlUGF0aCwgdGhpcy5sYXVuY2hUZW1wbGF0ZSk7XG4gIH1cbn1cbiJdfQ==