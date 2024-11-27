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
        // new SampleCode(this);
    }
}
exports.CapServiceProject = CapServiceProject;
_a = JSII_RTTI_SYMBOL_1;
CapServiceProject[_a] = { fqn: "@dxfrontier/projen-template-projects.CapServiceProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQThFO0FBQzlFLDZDQUEwQztBQUMxQyxpREFBOEM7QUFDOUMscUNBQWtDO0FBQ2xDLCtCQUE0QjtBQUM1QixxQ0FBa0M7QUFDbEMsbUNBQWdDO0FBQ2hDLCtCQUFtQztBQUNuQyx5Q0FBc0M7QUFDdEMscUNBQWtDO0FBRWxDOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSw0QkFBcUI7SUFDMUQ7OztPQUdHO0lBQ0gsWUFBWSxPQUFxQztRQUMvQyxLQUFLLENBQUM7WUFDSixHQUFHLE9BQU87WUFDVixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLDZEQUE2RDtZQUM3RCxRQUFRLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztnQkFDbkMsZUFBZSxFQUFFO29CQUNmLE9BQU8sRUFBRSxHQUFHO29CQUNaLE1BQU0sRUFBRSxXQUFXO29CQUNuQixLQUFLLEVBQUU7d0JBQ0wsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7cUJBQzlDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLGdCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksU0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQix3QkFBd0I7SUFDMUIsQ0FBQzs7QUFoQ0gsOENBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZVNjcmlwdFByb2plY3RCYXNlLCBUeXBlU2NyaXB0UHJvamVjdEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBDb21taXRMaW50IH0gZnJvbSAnLi9jb21taXRsaW50JztcbmltcG9ydCB7IERldkNvbnRhaW5lciB9IGZyb20gJy4vZGV2Y29udGFpbmVyJztcbmltcG9ydCB7IEVzTGludCB9IGZyb20gJy4vZXNsaW50JztcbmltcG9ydCB7IEdpdCB9IGZyb20gJy4vZ2l0JztcbmltcG9ydCB7IEdpdEh1YiB9IGZyb20gJy4vZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5IH0gZnJvbSAnLi9odXNreSc7XG5pbXBvcnQgeyBOcG1QYWNrYWdlIH0gZnJvbSAnLi9ucG0nO1xuaW1wb3J0IHsgUHJldHRpZXIgfSBmcm9tICcuL3ByZXR0aWVyJztcbmltcG9ydCB7IFZzQ29kZSB9IGZyb20gJy4vdnNjb2RlJztcblxuLyoqXG4gKiBEZWZpbmVzIGEgQ0FQIFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENhcFNlcnZpY2VQcm9qZWN0IGV4dGVuZHMgVHlwZVNjcmlwdFByb2plY3RCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBDYXAgU2VydmljZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZU9wdGlvbnMpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGlzYWJsZVRzY29uZmlnRGV2OiB0cnVlLFxuICAgICAgLy8gdGhlc2Ugc2V0dGluZ3MgY2Fubm90IGJlIHNldCBieSBhIFR5cGVTY3JpcHQgYnVpbGRlciBsYXRlclxuICAgICAgdHNjb25maWc6IHtcbiAgICAgICAgaW5jbHVkZTogWycuL3NydicsICcuL0BkaXNwYXRjaGVyJ10sXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIHJvb3REaXI6ICcuJyxcbiAgICAgICAgICBvdXREaXI6ICcuL2dlbi9zcnYnLFxuICAgICAgICAgIHBhdGhzOiB7XG4gICAgICAgICAgICAnI2Nkcy1tb2RlbHMvKic6IFsnLi9AY2RzLW1vZGVscy8qL2luZGV4LnRzJ10sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBuZXcgTnBtUGFja2FnZSh0aGlzKTtcbiAgICBuZXcgRGV2Q29udGFpbmVyKHRoaXMpO1xuICAgIG5ldyBWc0NvZGUodGhpcyk7XG4gICAgbmV3IEdpdCh0aGlzKTtcbiAgICBuZXcgR2l0SHViKHRoaXMpO1xuICAgIG5ldyBFc0xpbnQodGhpcyk7XG4gICAgbmV3IFByZXR0aWVyKHRoaXMpO1xuICAgIG5ldyBIdXNreSh0aGlzKTtcbiAgICBuZXcgQ29tbWl0TGludCh0aGlzKTtcbiAgICAvLyBuZXcgU2FtcGxlQ29kZSh0aGlzKTtcbiAgfVxufVxuIl19