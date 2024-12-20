"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EslintJsii = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * Eslint builder implementing all relevant configuration for the Jsii project.
 */
class EslintJsii extends base_1.EslintBase {
    /**
     * Initializes the Eslint builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure Eslint for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * @override
     */
    get ignoreFilePaths() {
        const baseEntries = super.ignoreFilePaths;
        return [...baseEntries, 'lib/', '.jsii'];
    }
    /**
     * @override
     */
    get rules() {
        const baseRules = super.rules;
        return {
            ...baseRules,
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/class-literal-property-style': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
        };
    }
}
exports.EslintJsii = EslintJsii;
_a = JSII_RTTI_SYMBOL_1;
EslintJsii[_a] = { fqn: "@dxfrontier/projen-template-projects.EslintJsii", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzaWkvZXNsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQTREO0FBRTVEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsaUJBQVU7SUFDeEM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLGVBQWU7UUFDM0IsTUFBTSxXQUFXLEdBQWEsS0FBSyxDQUFDLGVBQWUsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsS0FBSztRQUNqQixNQUFNLFNBQVMsR0FBMkIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN0RCxPQUFPO1lBQ0wsR0FBRyxTQUFTO1lBQ1osc0NBQXNDLEVBQUUsS0FBSztZQUM3QyxpREFBaUQsRUFBRSxLQUFLO1lBQ3hELHlDQUF5QyxFQUFFLEtBQUs7U0FDakQsQ0FBQztJQUNKLENBQUM7O0FBL0JILGdDQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVzbGludEJhc2UsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG4vKipcbiAqIEVzbGludCBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIEpzaWkgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEVzbGludEpzaWkgZXh0ZW5kcyBFc2xpbnRCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBFc2xpbnQgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIEVzbGludCBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgaWdub3JlRmlsZVBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBiYXNlRW50cmllczogc3RyaW5nW10gPSBzdXBlci5pZ25vcmVGaWxlUGF0aHM7XG4gICAgcmV0dXJuIFsuLi5iYXNlRW50cmllcywgJ2xpYi8nLCAnLmpzaWknXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcnVsZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgY29uc3QgYmFzZVJ1bGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gc3VwZXIucnVsZXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmJhc2VSdWxlcyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24nOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvY2xhc3MtbGl0ZXJhbC1wcm9wZXJ0eS1zdHlsZSc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1vYmplY3QtdHlwZSc6ICdvZmYnLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==