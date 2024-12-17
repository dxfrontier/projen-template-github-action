"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapServiceProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../base");
const commitlint_1 = require("./commitlint");
const devcontainer_1 = require("./devcontainer");
const eslint_1 = require("./eslint");
const git_1 = require("./git");
const github_1 = require("./github");
const husky_1 = require("./husky");
const npm_1 = require("./npm");
const prettier_1 = require("./prettier");
const samplecode_1 = require("./samplecode");
const vscode_1 = require("./vscode");
/**
 * Defines a CAP Service project.
 */
class CapServiceProject extends base_1.TypeScriptProjectBase {
    /**
     * Initializes the Cap Service project.
     * @param options Additional project options.
     */
    constructor(options) {
        super({
            ...options,
            projenrcTs: false,
            projenrcJs: false,
            projenrcJson: false,
            disableTsconfigDev: true,
            jest: false,
            // these settings cannot be set by a TypeScript builder later
            licensed: false,
            tsconfig: {
                include: ['./srv', './@dispatcher'],
                compilerOptions: {
                    rootDir: '.',
                    outDir: './gen/srv',
                    paths: {
                        '#cds-models/*': ['./@cds-models/*/index.ts'],
                    },
                },
            },
        });
        const packageJson = this.tryFindObjectFile('package.json');
        packageJson?.patch(projen_1.JsonPatch.remove('/publishConfig'));
        // defaults
        this.defaults = {
            namespace: options.namespace ?? 'de.customer.org.project',
            description: options.description ?? 'SAP CAP Project',
            name: options.name,
            entityName: options.entityName ?? 'Entity1',
        };
        new npm_1.NpmPackage(this);
        new devcontainer_1.DevContainer(this);
        new vscode_1.VsCode(this);
        new git_1.Git(this);
        new github_1.GitHub(this);
        new eslint_1.EsLint(this);
        new prettier_1.Prettier(this);
        new husky_1.Husky(this);
        new commitlint_1.CommitLint(this);
        new samplecode_1.SampleCode(this, this.defaults);
    }
}
exports.CapServiceProject = CapServiceProject;
_a = JSII_RTTI_SYMBOL_1;
CapServiceProject[_a] = { fqn: "@dxfrontier/projen-template-projects.CapServiceProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLGtDQUE4RTtBQUM5RSw2Q0FBMEM7QUFDMUMsaURBQThDO0FBQzlDLHFDQUFrQztBQUNsQywrQkFBNEI7QUFDNUIscUNBQWtDO0FBQ2xDLG1DQUFnQztBQUNoQywrQkFBbUM7QUFDbkMseUNBQXNDO0FBQ3RDLDZDQUEwQztBQUMxQyxxQ0FBa0M7QUFPbEM7O0dBRUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLDRCQUFxQjtJQUcxRDs7O09BR0c7SUFDSCxZQUFZLE9BQWlDO1FBQzNDLEtBQUssQ0FBQztZQUNKLEdBQUcsT0FBTztZQUNWLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFlBQVksRUFBRSxLQUFLO1lBQ25CLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsSUFBSSxFQUFFLEtBQUs7WUFDWCw2REFBNkQ7WUFDN0QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztnQkFDbkMsZUFBZSxFQUFFO29CQUNmLE9BQU8sRUFBRSxHQUFHO29CQUNaLE1BQU0sRUFBRSxXQUFXO29CQUNuQixLQUFLLEVBQUU7d0JBQ0wsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7cUJBQzlDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsV0FBVyxFQUFFLEtBQUssQ0FBQyxrQkFBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFdkQsV0FBVztRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsSUFBSSx5QkFBeUI7WUFDekQsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksaUJBQWlCO1lBQ3JELElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxTQUFTO1NBQzVDLENBQUM7UUFFRixJQUFJLGdCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksU0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLHVCQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDOztBQWxESCw4Q0FtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uUGF0Y2ggfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBDb21taXRMaW50IH0gZnJvbSAnLi9jb21taXRsaW50JztcbmltcG9ydCB7IERldkNvbnRhaW5lciB9IGZyb20gJy4vZGV2Y29udGFpbmVyJztcbmltcG9ydCB7IEVzTGludCB9IGZyb20gJy4vZXNsaW50JztcbmltcG9ydCB7IEdpdCB9IGZyb20gJy4vZ2l0JztcbmltcG9ydCB7IEdpdEh1YiB9IGZyb20gJy4vZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5IH0gZnJvbSAnLi9odXNreSc7XG5pbXBvcnQgeyBOcG1QYWNrYWdlIH0gZnJvbSAnLi9ucG0nO1xuaW1wb3J0IHsgUHJldHRpZXIgfSBmcm9tICcuL3ByZXR0aWVyJztcbmltcG9ydCB7IFNhbXBsZUNvZGUgfSBmcm9tICcuL3NhbXBsZWNvZGUnO1xuaW1wb3J0IHsgVnNDb2RlIH0gZnJvbSAnLi92c2NvZGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0QmFzZU9wdGlvbnMge1xuICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGVudGl0eU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGVmaW5lcyBhIENBUCBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXBTZXJ2aWNlUHJvamVjdCBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB7XG4gIHByaXZhdGUgZGVmYXVsdHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBDYXAgU2VydmljZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBwcm9qZW5yY1RzOiBmYWxzZSxcbiAgICAgIHByb2plbnJjSnM6IGZhbHNlLFxuICAgICAgcHJvamVucmNKc29uOiBmYWxzZSxcbiAgICAgIGRpc2FibGVUc2NvbmZpZ0RldjogdHJ1ZSxcbiAgICAgIGplc3Q6IGZhbHNlLFxuICAgICAgLy8gdGhlc2Ugc2V0dGluZ3MgY2Fubm90IGJlIHNldCBieSBhIFR5cGVTY3JpcHQgYnVpbGRlciBsYXRlclxuICAgICAgbGljZW5zZWQ6IGZhbHNlLFxuICAgICAgdHNjb25maWc6IHtcbiAgICAgICAgaW5jbHVkZTogWycuL3NydicsICcuL0BkaXNwYXRjaGVyJ10sXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIHJvb3REaXI6ICcuJyxcbiAgICAgICAgICBvdXREaXI6ICcuL2dlbi9zcnYnLFxuICAgICAgICAgIHBhdGhzOiB7XG4gICAgICAgICAgICAnI2Nkcy1tb2RlbHMvKic6IFsnLi9AY2RzLW1vZGVscy8qL2luZGV4LnRzJ10sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYWNrYWdlSnNvbiA9IHRoaXMudHJ5RmluZE9iamVjdEZpbGUoJ3BhY2thZ2UuanNvbicpO1xuICAgIHBhY2thZ2VKc29uPy5wYXRjaChKc29uUGF0Y2gucmVtb3ZlKCcvcHVibGlzaENvbmZpZycpKTtcblxuICAgIC8vIGRlZmF1bHRzXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIG5hbWVzcGFjZTogb3B0aW9ucy5uYW1lc3BhY2UgPz8gJ2RlLmN1c3RvbWVyLm9yZy5wcm9qZWN0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uID8/ICdTQVAgQ0FQIFByb2plY3QnLFxuICAgICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgICAgZW50aXR5TmFtZTogb3B0aW9ucy5lbnRpdHlOYW1lID8/ICdFbnRpdHkxJyxcbiAgICB9O1xuXG4gICAgbmV3IE5wbVBhY2thZ2UodGhpcyk7XG4gICAgbmV3IERldkNvbnRhaW5lcih0aGlzKTtcbiAgICBuZXcgVnNDb2RlKHRoaXMpO1xuICAgIG5ldyBHaXQodGhpcyk7XG4gICAgbmV3IEdpdEh1Yih0aGlzKTtcbiAgICBuZXcgRXNMaW50KHRoaXMpO1xuICAgIG5ldyBQcmV0dGllcih0aGlzKTtcbiAgICBuZXcgSHVza3kodGhpcyk7XG4gICAgbmV3IENvbW1pdExpbnQodGhpcyk7XG4gICAgbmV3IFNhbXBsZUNvZGUodGhpcywgdGhpcy5kZWZhdWx0cyk7XG4gIH1cbn1cbiJdfQ==