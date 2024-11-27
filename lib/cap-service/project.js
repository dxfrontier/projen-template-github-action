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
        new npm_1.NpmPackage(this);
        new devcontainer_1.DevContainer(this);
        new vscode_1.VsCode(this);
        new git_1.Git(this);
        new github_1.GitHub(this);
        new eslint_1.EsLint(this);
        new prettier_1.Prettier(this);
        new husky_1.Husky(this);
        new commitlint_1.CommitLint(this);
        new samplecode_1.SampleCode(this, options);
    }
}
exports.CapServiceProject = CapServiceProject;
_a = JSII_RTTI_SYMBOL_1;
CapServiceProject[_a] = { fqn: "@dxfrontier/projen-template-projects.CapServiceProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQThFO0FBQzlFLDZDQUEwQztBQUMxQyxpREFBOEM7QUFDOUMscUNBQWtDO0FBQ2xDLCtCQUE0QjtBQUM1QixxQ0FBa0M7QUFDbEMsbUNBQWdDO0FBQ2hDLCtCQUFtQztBQUNuQyx5Q0FBc0M7QUFDdEMsNkNBQTBDO0FBQzFDLHFDQUFrQztBQU1sQzs7R0FFRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsNEJBQXFCO0lBQzFEOzs7T0FHRztJQUNILFlBQVksT0FBaUM7UUFDM0MsS0FBSyxDQUFDO1lBQ0osR0FBRyxPQUFPO1lBQ1Ysa0JBQWtCLEVBQUUsSUFBSTtZQUN4Qiw2REFBNkQ7WUFDN0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7Z0JBQ25DLGVBQWUsRUFBRTtvQkFDZixPQUFPLEVBQUUsR0FBRztvQkFDWixNQUFNLEVBQUUsV0FBVztvQkFDbkIsS0FBSyxFQUFFO3dCQUNMLGVBQWUsRUFBRSxDQUFDLDBCQUEwQixDQUFDO3FCQUM5QztpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxnQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLElBQUksMkJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLFNBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOztBQWhDSCw4Q0FpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdEJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IENvbW1pdExpbnQgfSBmcm9tICcuL2NvbW1pdGxpbnQnO1xuaW1wb3J0IHsgRGV2Q29udGFpbmVyIH0gZnJvbSAnLi9kZXZjb250YWluZXInO1xuaW1wb3J0IHsgRXNMaW50IH0gZnJvbSAnLi9lc2xpbnQnO1xuaW1wb3J0IHsgR2l0IH0gZnJvbSAnLi9naXQnO1xuaW1wb3J0IHsgR2l0SHViIH0gZnJvbSAnLi9naXRodWInO1xuaW1wb3J0IHsgSHVza3kgfSBmcm9tICcuL2h1c2t5JztcbmltcG9ydCB7IE5wbVBhY2thZ2UgfSBmcm9tICcuL25wbSc7XG5pbXBvcnQgeyBQcmV0dGllciB9IGZyb20gJy4vcHJldHRpZXInO1xuaW1wb3J0IHsgU2FtcGxlQ29kZSB9IGZyb20gJy4vc2FtcGxlY29kZSc7XG5pbXBvcnQgeyBWc0NvZGUgfSBmcm9tICcuL3ZzY29kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwU2VydmljZVByb2plY3RPcHRpb25zIGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3RCYXNlT3B0aW9ucyB7XG4gIHJlYWRvbmx5IGVudGl0eU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGVmaW5lcyBhIENBUCBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXBTZXJ2aWNlUHJvamVjdCBleHRlbmRzIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgQ2FwIFNlcnZpY2UgcHJvamVjdC5cbiAgICogQHBhcmFtIG9wdGlvbnMgQWRkaXRpb25hbCBwcm9qZWN0IG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGlzYWJsZVRzY29uZmlnRGV2OiB0cnVlLFxuICAgICAgLy8gdGhlc2Ugc2V0dGluZ3MgY2Fubm90IGJlIHNldCBieSBhIFR5cGVTY3JpcHQgYnVpbGRlciBsYXRlclxuICAgICAgdHNjb25maWc6IHtcbiAgICAgICAgaW5jbHVkZTogWycuL3NydicsICcuL0BkaXNwYXRjaGVyJ10sXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIHJvb3REaXI6ICcuJyxcbiAgICAgICAgICBvdXREaXI6ICcuL2dlbi9zcnYnLFxuICAgICAgICAgIHBhdGhzOiB7XG4gICAgICAgICAgICAnI2Nkcy1tb2RlbHMvKic6IFsnLi9AY2RzLW1vZGVscy8qL2luZGV4LnRzJ10sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBuZXcgTnBtUGFja2FnZSh0aGlzKTtcbiAgICBuZXcgRGV2Q29udGFpbmVyKHRoaXMpO1xuICAgIG5ldyBWc0NvZGUodGhpcyk7XG4gICAgbmV3IEdpdCh0aGlzKTtcbiAgICBuZXcgR2l0SHViKHRoaXMpO1xuICAgIG5ldyBFc0xpbnQodGhpcyk7XG4gICAgbmV3IFByZXR0aWVyKHRoaXMpO1xuICAgIG5ldyBIdXNreSh0aGlzKTtcbiAgICBuZXcgQ29tbWl0TGludCh0aGlzKTtcbiAgICBuZXcgU2FtcGxlQ29kZSh0aGlzLCBvcHRpb25zKTtcbiAgfVxufVxuIl19