"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prettier = void 0;
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
    postSynthesize() {
        console.log('Prettier Post Synthesize');
    }
}
exports.Prettier = Prettier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2l0aHViLWFjdGlvbi9wcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrQ0FBOEQ7QUFFOUQ7O0dBRUc7QUFDSCxNQUFhLFFBQVMsU0FBUSxtQkFBWTtJQUN4Qzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxjQUFjO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUFmRCw0QkFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByZXR0aWVyQmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogUHJldHRpZXIgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJldHRpZXIgZXh0ZW5kcyBQcmV0dGllckJhc2Uge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFByZXR0aWVyIGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBQcmV0dGllciBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIHB1YmxpYyBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnUHJldHRpZXIgUG9zdCBTeW50aGVzaXplJyk7XG4gIH1cbn1cbiJdfQ==