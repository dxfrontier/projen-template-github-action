"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapServiceProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
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
            disableTsconfigDev: true,
            // these settings cannot be set by a TypeScript builder later
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQThFO0FBQzlFLDZDQUEwQztBQUMxQyxpREFBOEM7QUFDOUMscUNBQWtDO0FBQ2xDLCtCQUE0QjtBQUM1QixxQ0FBa0M7QUFDbEMsbUNBQWdDO0FBQ2hDLCtCQUFtQztBQUNuQyx5Q0FBc0M7QUFDdEMsNkNBQTBDO0FBQzFDLHFDQUFrQztBQU9sQzs7R0FFRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsNEJBQXFCO0lBRzFEOzs7T0FHRztJQUNILFlBQVksT0FBaUM7UUFDM0MsS0FBSyxDQUFDO1lBQ0osR0FBRyxPQUFPO1lBQ1Ysa0JBQWtCLEVBQUUsSUFBSTtZQUN4Qiw2REFBNkQ7WUFDN0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7Z0JBQ25DLGVBQWUsRUFBRTtvQkFDZixPQUFPLEVBQUUsR0FBRztvQkFDWixNQUFNLEVBQUUsV0FBVztvQkFDbkIsS0FBSyxFQUFFO3dCQUNMLGVBQWUsRUFBRSxDQUFDLDBCQUEwQixDQUFDO3FCQUM5QztpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsV0FBVztRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsSUFBSSx5QkFBeUI7WUFDekQsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksaUJBQWlCO1lBQ3JELElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxTQUFTO1NBQzVDLENBQUM7UUFFRixJQUFJLGdCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksU0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLHVCQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDOztBQTFDSCw4Q0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IENvbW1pdExpbnQgfSBmcm9tICcuL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgRGV2Q29udGFpbmVyIH0gZnJvbSAnLi9kZXZjb250YWluZXInO1xuaW1wb3J0IHsgRXNMaW50IH0gZnJvbSAnLi9lc2xpbnQnO1xuaW1wb3J0IHsgR2l0IH0gZnJvbSAnLi9naXQnO1xuaW1wb3J0IHsgR2l0SHViIH0gZnJvbSAnLi9naXRodWInO1xuaW1wb3J0IHsgSHVza3kgfSBmcm9tICcuL2h1c2t5JztcbmltcG9ydCB7IE5wbVBhY2thZ2UgfSBmcm9tICcuL25wbSc7XG5pbXBvcnQgeyBQcmV0dGllciB9IGZyb20gJy4vcHJldHRpZXInO1xuaW1wb3J0IHsgU2FtcGxlQ29kZSB9IGZyb20gJy4vc2FtcGxlY29kZSc7XG5pbXBvcnQgeyBWc0NvZGUgfSBmcm9tICcuL3ZzY29kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwU2VydmljZVByb2plY3RPcHRpb25zIGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3RCYXNlT3B0aW9ucyB7XG4gIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZztcbiAgcmVhZG9ubHkgZW50aXR5TmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgQ0FQIFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENhcFNlcnZpY2VQcm9qZWN0IGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3RCYXNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0czogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIENhcCBTZXJ2aWNlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRpc2FibGVUc2NvbmZpZ0RldjogdHJ1ZSxcbiAgICAgIC8vIHRoZXNlIHNldHRpbmdzIGNhbm5vdCBiZSBzZXQgYnkgYSBUeXBlU2NyaXB0IGJ1aWxkZXIgbGF0ZXJcbiAgICAgIHRzY29uZmlnOiB7XG4gICAgICAgIGluY2x1ZGU6IFsnLi9zcnYnLCAnLi9AZGlzcGF0Y2hlciddLFxuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICByb290RGlyOiAnLicsXG4gICAgICAgICAgb3V0RGlyOiAnLi9nZW4vc3J2JyxcbiAgICAgICAgICBwYXRoczoge1xuICAgICAgICAgICAgJyNjZHMtbW9kZWxzLyonOiBbJy4vQGNkcy1tb2RlbHMvKi9pbmRleC50cyddLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gZGVmYXVsdHNcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgbmFtZXNwYWNlOiBvcHRpb25zLm5hbWVzcGFjZSA/PyAnZGUuY3VzdG9tZXIub3JnLnByb2plY3QnLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24gPz8gJ1NBUCBDQVAgUHJvamVjdCcsXG4gICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgICBlbnRpdHlOYW1lOiBvcHRpb25zLmVudGl0eU5hbWUgPz8gJ0VudGl0eTEnLFxuICAgIH07XG5cbiAgICBuZXcgTnBtUGFja2FnZSh0aGlzKTtcbiAgICBuZXcgRGV2Q29udGFpbmVyKHRoaXMpO1xuICAgIG5ldyBWc0NvZGUodGhpcyk7XG4gICAgbmV3IEdpdCh0aGlzKTtcbiAgICBuZXcgR2l0SHViKHRoaXMpO1xuICAgIG5ldyBFc0xpbnQodGhpcyk7XG4gICAgbmV3IFByZXR0aWVyKHRoaXMpO1xuICAgIG5ldyBIdXNreSh0aGlzKTtcbiAgICBuZXcgQ29tbWl0TGludCh0aGlzKTtcbiAgICBuZXcgU2FtcGxlQ29kZSh0aGlzLCB0aGlzLmRlZmF1bHRzKTtcbiAgfVxufVxuIl19