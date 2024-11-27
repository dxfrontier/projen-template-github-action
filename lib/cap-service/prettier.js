"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prettier = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * Prettier builder implementing all relevant configuration for the project.
 */
class Prettier extends base_1.PrettierBase {
    /**
     * Initializes the Prettier builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Prettier for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * @override
     */
    get ignoreFilePaths() {
        const base = super.ignoreFilePaths;
        const elementsToAdd = [
            '/.github/ISSUE_TEMPLATE/story.yml',
            '/.github/workflows/deployment.yml',
            '/.husky/pre-push',
            '/.vscode/launch.json',
            '/.vscode/tasks.json',
            '/@cds-models',
            '/gen',
            '/dist',
            '/CHANGELOG.md',
        ];
        const elements = [...base, ...elementsToAdd];
        const elementsToRemove = ['/tsconfig.dev.json', '/.github/workflows/stale.yml'];
        return elements.filter((file) => !elementsToRemove.includes(file));
    }
    /**
     * @override
     */
    get scripts() {
        return {
            prettier: 'prettier . --write',
            'prettier:cds': 'format-cds',
        };
    }
}
exports.Prettier = Prettier;
_a = JSII_RTTI_SYMBOL_1;
Prettier[_a] = { fqn: "@dxfrontier/projen-template-projects.Prettier", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2FwLXNlcnZpY2UvcHJldHRpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQ0FBOEQ7QUFHOUQ7O0dBRUc7QUFDSCxNQUFhLFFBQVMsU0FBUSxtQkFBWTtJQUN4Qzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsZUFBZTtRQUMzQixNQUFNLElBQUksR0FBYSxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQzdDLE1BQU0sYUFBYSxHQUFhO1lBQzlCLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0QixxQkFBcUI7WUFDckIsY0FBYztZQUNkLE1BQU07WUFDTixPQUFPO1lBQ1AsZUFBZTtTQUNoQixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQWEsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sZ0JBQWdCLEdBQWEsQ0FBQyxvQkFBb0IsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBQzFGLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVksRUFBVyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsY0FBYyxFQUFFLFlBQVk7U0FDN0IsQ0FBQztJQUNKLENBQUM7O0FBMUNILDRCQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBTY3JpcHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIFByZXR0aWVyIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByZXR0aWVyIGV4dGVuZHMgUHJldHRpZXJCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBQcmV0dGllciBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgUHJldHRpZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZUZpbGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgYmFzZTogc3RyaW5nW10gPSBzdXBlci5pZ25vcmVGaWxlUGF0aHM7XG4gICAgY29uc3QgZWxlbWVudHNUb0FkZDogc3RyaW5nW10gPSBbXG4gICAgICAnLy5naXRodWIvSVNTVUVfVEVNUExBVEUvc3RvcnkueW1sJyxcbiAgICAgICcvLmdpdGh1Yi93b3JrZmxvd3MvZGVwbG95bWVudC55bWwnLFxuICAgICAgJy8uaHVza3kvcHJlLXB1c2gnLFxuICAgICAgJy8udnNjb2RlL2xhdW5jaC5qc29uJyxcbiAgICAgICcvLnZzY29kZS90YXNrcy5qc29uJyxcbiAgICAgICcvQGNkcy1tb2RlbHMnLFxuICAgICAgJy9nZW4nLFxuICAgICAgJy9kaXN0JyxcbiAgICAgICcvQ0hBTkdFTE9HLm1kJyxcbiAgICBdO1xuXG4gICAgY29uc3QgZWxlbWVudHM6IHN0cmluZ1tdID0gWy4uLmJhc2UsIC4uLmVsZW1lbnRzVG9BZGRdO1xuICAgIGNvbnN0IGVsZW1lbnRzVG9SZW1vdmU6IHN0cmluZ1tdID0gWycvdHNjb25maWcuZGV2Lmpzb24nLCAnLy5naXRodWIvd29ya2Zsb3dzL3N0YWxlLnltbCddO1xuICAgIHJldHVybiBlbGVtZW50cy5maWx0ZXIoKGZpbGU6IHN0cmluZyk6IGJvb2xlYW4gPT4gIWVsZW1lbnRzVG9SZW1vdmUuaW5jbHVkZXMoZmlsZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzY3JpcHRzKCk6IFNjcmlwdHMge1xuICAgIHJldHVybiB7XG4gICAgICBwcmV0dGllcjogJ3ByZXR0aWVyIC4gLS13cml0ZScsXG4gICAgICAncHJldHRpZXI6Y2RzJzogJ2Zvcm1hdC1jZHMnLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==