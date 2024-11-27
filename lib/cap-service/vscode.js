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
     * Settings to be installed in VsCode.
     * @return Entries for the launch file.
     * @protected
     */
    get launch() {
        return {
            // address: '127.0.0.1', // typing says, not allowed - do not know what to do with them
            // localRoot: '${workspaceFolder}',
            // remoteRoot: '/home/vcap/app',
            name: 'Attach to Remote',
            port: 9229,
            request: 'attach',
            skipFiles: ['<node_internals>/**'],
            type: 'node',
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
     */
    addSettings() {
        super.addSettings();
        this.project.vscode?.launchConfiguration.addConfiguration(this.launch);
    }
}
exports.VsCode = VsCode;
_a = JSII_RTTI_SYMBOL_1;
VsCode[_a] = { fqn: "@dxfrontier/projen-template-projects.VsCode", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL3ZzY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFtRDtBQUVuRCxrQ0FBNEQ7QUFFNUQ7O0dBRUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxpQkFBVTtJQUNwQzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxJQUFjLGFBQWE7UUFDekIsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsTUFBTTtRQUNsQixPQUFPO1lBQ0wsdUZBQXVGO1lBQ3ZGLG1DQUFtQztZQUNuQyxnQ0FBZ0M7WUFDaEMsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxhQUFhO1FBQ3pCLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEdBQUcsRUFBRTtnQkFDSCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxXQUFXO3dCQUNsQixPQUFPLEVBQUUsS0FBSzt3QkFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ2YsS0FBSyxFQUFFOzRCQUNMLElBQUksRUFBRSxPQUFPOzRCQUNiLFNBQVMsRUFBRSxJQUFJO3lCQUNoQjtxQkFDRjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUUsV0FBVzt3QkFDbEIsT0FBTyxFQUFFLEtBQUs7d0JBQ2QsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7cUJBQ2hEO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sWUFBWTtRQUNwQixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7O09BRUc7SUFDTyxXQUFXO1FBQ25CLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7QUE3Rkgsd0JBOEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkZpbGUsIEpzb25GaWxlT3B0aW9ucyB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBWc0NvZGVMYXVuY2hDb25maWd1cmF0aW9uRW50cnkgfSBmcm9tICdwcm9qZW4vbGliL3ZzY29kZSc7XG5pbXBvcnQgeyBWc0NvZGVCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBWc0NvZGUgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgVnNDb2RlIGV4dGVuZHMgVnNDb2RlQmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgVnNDb2RlIGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBWc0NvZGUgUGFja2FnZSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIFZzQ29kZSBsYXVuY2ggY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gbGF1bmNoIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgbGF1bmNoRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy52c2NvZGUvbGF1bmNoLmpzb24nO1xuICB9XG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIFZzQ29kZSB0YXNrcyBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIEZpbGUgcGF0aCB0byB0YXNrcyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHRhc2tzRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy52c2NvZGUvdGFza3MuanNvbic7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGluZ3MgdG8gYmUgaW5zdGFsbGVkIGluIFZzQ29kZS5cbiAgICogQHJldHVybiBFbnRyaWVzIGZvciB0aGUgbGF1bmNoIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgbGF1bmNoKCk6IFZzQ29kZUxhdW5jaENvbmZpZ3VyYXRpb25FbnRyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGFkZHJlc3M6ICcxMjcuMC4wLjEnLCAvLyB0eXBpbmcgc2F5cywgbm90IGFsbG93ZWQgLSBkbyBub3Qga25vdyB3aGF0IHRvIGRvIHdpdGggdGhlbVxuICAgICAgLy8gbG9jYWxSb290OiAnJHt3b3Jrc3BhY2VGb2xkZXJ9JyxcbiAgICAgIC8vIHJlbW90ZVJvb3Q6ICcvaG9tZS92Y2FwL2FwcCcsXG4gICAgICBuYW1lOiAnQXR0YWNoIHRvIFJlbW90ZScsXG4gICAgICBwb3J0OiA5MjI5LFxuICAgICAgcmVxdWVzdDogJ2F0dGFjaCcsXG4gICAgICBza2lwRmlsZXM6IFsnPG5vZGVfaW50ZXJuYWxzPi8qKiddLFxuICAgICAgdHlwZTogJ25vZGUnLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVGVtcGxhdGUgZmlsZSBmb3IgVnNDb2RlIHRhc2tzIGNvbmZpZy5cbiAgICogQHJldHVybiBUZW1wbGF0ZSBmb3IgdGhlIGNvbmZpZyBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHRhc2tzVGVtcGxhdGUoKTogSnNvbkZpbGVPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgb21pdEVtcHR5OiB0cnVlLFxuICAgICAgYWxsb3dDb21tZW50czogdHJ1ZSxcbiAgICAgIG9iajoge1xuICAgICAgICB2ZXJzaW9uOiAnMi4wLjAnLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzaGVsbCcsXG4gICAgICAgICAgICBsYWJlbDogJ2NkcyB3YXRjaCcsXG4gICAgICAgICAgICBjb21tYW5kOiAnY2RzJyxcbiAgICAgICAgICAgIGFyZ3M6IFsnd2F0Y2gnXSxcbiAgICAgICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdidWlsZCcsXG4gICAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc2hlbGwnLFxuICAgICAgICAgICAgbGFiZWw6ICdjZHMgc2VydmUnLFxuICAgICAgICAgICAgY29tbWFuZDogJ2NkcycsXG4gICAgICAgICAgICBhcmdzOiBbJ3NlcnZlJywgJy0td2l0aC1tb2NrcycsICctLWluLW1lbW9yeT8nXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBuZXcgSnNvbkZpbGUodGhpcy5wcm9qZWN0LCB0aGlzLnRhc2tzRmlsZVBhdGgsIHRoaXMudGFza3NUZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgc3VwZXIuYWRkU2V0dGluZ3MoKTtcbiAgICB0aGlzLnByb2plY3QudnNjb2RlPy5sYXVuY2hDb25maWd1cmF0aW9uLmFkZENvbmZpZ3VyYXRpb24odGhpcy5sYXVuY2gpO1xuICB9XG59XG4iXX0=