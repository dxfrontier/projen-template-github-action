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
        const elementsToRemove = ['*.snap', '/.eslintrc.json'];
        return base.filter((file) => !elementsToRemove.includes(file));
    }
}
exports.Prettier = Prettier;
_a = JSII_RTTI_SYMBOL_1;
Prettier[_a] = { fqn: "@dxfrontier/projen-template-projects.Prettier", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2l0aHViLWFjdGlvbi9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUE4RDtBQUU5RDs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLG1CQUFZO0lBQ3hDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUE4QjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxlQUFlO1FBQzNCLE1BQU0sSUFBSSxHQUFhLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDN0MsTUFBTSxnQkFBZ0IsR0FBYSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVksRUFBVyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOztBQW5CSCw0QkFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmV0dGllckJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG4vKipcbiAqIFByZXR0aWVyIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByZXR0aWVyIGV4dGVuZHMgUHJldHRpZXJCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBQcmV0dGllciBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgUHJldHRpZXIgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGlnbm9yZUZpbGVQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgYmFzZTogc3RyaW5nW10gPSBzdXBlci5pZ25vcmVGaWxlUGF0aHM7XG4gICAgY29uc3QgZWxlbWVudHNUb1JlbW92ZTogc3RyaW5nW10gPSBbJyouc25hcCcsICcvLmVzbGludHJjLmpzb24nXTtcbiAgICByZXR1cm4gYmFzZS5maWx0ZXIoKGZpbGU6IHN0cmluZyk6IGJvb2xlYW4gPT4gIWVsZW1lbnRzVG9SZW1vdmUuaW5jbHVkZXMoZmlsZSkpO1xuICB9XG59XG4iXX0=