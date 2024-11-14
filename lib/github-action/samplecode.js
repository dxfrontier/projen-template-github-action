"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCode = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../base");
/**
 * SampleCode builder implementing all relevant configuration for the project.
 */
class SampleCode extends base_1.Builder {
    /**
     * Initializes the base SampleCode builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure SampleCode for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * File path to the sample GitHub action.
     * @protected
     */
    get filePath() {
        return 'action.yml';
    }
    /**
     * GitHub action template for the SampleCode configuration.
     * @protected
     */
    get sampleAction() {
        return [
            // eslint-disable-next-line prettier/prettier
            "name: 'My Custom Composite Action'",
            // eslint-disable-next-line prettier/prettier
            "description: 'A sample GitHub composite action created with Projen.'",
            // eslint-disable-next-line prettier/prettier
            "author: 'Your Name or Org'",
            'branding:',
            // eslint-disable-next-line prettier/prettier
            "  icon: 'zap'",
            // eslint-disable-next-line prettier/prettier
            "  color: 'blue'",
            '',
            'inputs:',
            '  example-input:',
            // eslint-disable-next-line prettier/prettier
            "    description: 'An example input parameter for the action.'",
            '    required: false',
            // eslint-disable-next-line prettier/prettier
            "    default: 'default value'",
            '',
            'outputs:',
            '  example-output:',
            // eslint-disable-next-line prettier/prettier
            "    description: 'An example output from the action.'",
            '',
            'runs:',
            // eslint-disable-next-line prettier/prettier
            "  using: 'composite'",
            '  steps:',
            // eslint-disable-next-line prettier/prettier
            "    - name: 'Step 1'",
            // eslint-disable-next-line prettier/prettier
            "      run: echo 'Running Step 1 with input: ${{ inputs.example-input }}'",
            '',
            // eslint-disable-next-line prettier/prettier
            "    - name: 'Step 2'",
            // eslint-disable-next-line prettier/prettier
            "      run: echo 'Running Step 2'",
            '',
            'env:',
            // eslint-disable-next-line prettier/prettier
            "  EXAMPLE_ENV_VAR: 'example-value'",
        ];
    }
    addTemplates() {
        new projen_1.SampleFile(this.project, this.filePath, {
            contents: this.sampleAction.join('\n'),
        });
    }
}
exports.SampleCode = SampleCode;
_a = JSII_RTTI_SYMBOL_1;
SampleCode[_a] = { fqn: "projen-template-projects.SampleCode", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3NhbXBsZWNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsa0NBQXlEO0FBRXpEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsY0FBTztJQUNyQzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQWMsWUFBWTtRQUN4QixPQUFPO1lBQ0wsNkNBQTZDO1lBQzdDLG9DQUFvQztZQUNwQyw2Q0FBNkM7WUFDN0Msc0VBQXNFO1lBQ3RFLDZDQUE2QztZQUM3Qyw0QkFBNEI7WUFDNUIsV0FBVztZQUNYLDZDQUE2QztZQUM3QyxlQUFlO1lBQ2YsNkNBQTZDO1lBQzdDLGlCQUFpQjtZQUNqQixFQUFFO1lBQ0YsU0FBUztZQUNULGtCQUFrQjtZQUNsQiw2Q0FBNkM7WUFDN0MsK0RBQStEO1lBQy9ELHFCQUFxQjtZQUNyQiw2Q0FBNkM7WUFDN0MsOEJBQThCO1lBQzlCLEVBQUU7WUFDRixVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLDZDQUE2QztZQUM3Qyx1REFBdUQ7WUFDdkQsRUFBRTtZQUNGLE9BQU87WUFDUCw2Q0FBNkM7WUFDN0Msc0JBQXNCO1lBQ3RCLFVBQVU7WUFDViw2Q0FBNkM7WUFDN0Msc0JBQXNCO1lBQ3RCLDZDQUE2QztZQUM3QywwRUFBMEU7WUFDMUUsRUFBRTtZQUNGLDZDQUE2QztZQUM3QyxzQkFBc0I7WUFDdEIsNkNBQTZDO1lBQzdDLGtDQUFrQztZQUNsQyxFQUFFO1lBQ0YsTUFBTTtZQUNOLDZDQUE2QztZQUM3QyxvQ0FBb0M7U0FDckMsQ0FBQztJQUNKLENBQUM7SUFFUyxZQUFZO1FBQ3BCLElBQUksbUJBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDMUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN2QyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQTNFSCxnQ0E0RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW1wbGVGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IEJ1aWxkZXIsIFR5cGVTY3JpcHRQcm9qZWN0QmFzZSB9IGZyb20gJy4uL2Jhc2UnO1xuXG4vKipcbiAqIFNhbXBsZUNvZGUgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29kZSBleHRlbmRzIEJ1aWxkZXIge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGJhc2UgU2FtcGxlQ29kZSBidWlsZGVyLlxuICAgKiBJdCBjYWxscyB0aGUgYGluaXRpYWxpemUoKWAgbWV0aG9kIGltbWVkaWF0ZWx5IGFmdGVyIGludm9raW5nIGBzdXBlcihwcm9qZWN0KWBcbiAgICogdG8gZW5zdXJlIHRoYXQgYWxsIG5lY2Vzc2FyeSBjb25maWd1cmF0aW9uIHN0ZXBzIGFyZSBhcHBsaWVkLlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgU2FtcGxlQ29kZSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdEJhc2UpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGggdG8gdGhlIHNhbXBsZSBHaXRIdWIgYWN0aW9uLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdhY3Rpb24ueW1sJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXRIdWIgYWN0aW9uIHRlbXBsYXRlIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUFjdGlvbigpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCJuYW1lOiAnTXkgQ3VzdG9tIENvbXBvc2l0ZSBBY3Rpb24nXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiZGVzY3JpcHRpb246ICdBIHNhbXBsZSBHaXRIdWIgY29tcG9zaXRlIGFjdGlvbiBjcmVhdGVkIHdpdGggUHJvamVuLidcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCJhdXRob3I6ICdZb3VyIE5hbWUgb3IgT3JnJ1wiLFxuICAgICAgJ2JyYW5kaW5nOicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICBpY29uOiAnemFwJ1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgY29sb3I6ICdibHVlJ1wiLFxuICAgICAgJycsXG4gICAgICAnaW5wdXRzOicsXG4gICAgICAnICBleGFtcGxlLWlucHV0OicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICAgIGRlc2NyaXB0aW9uOiAnQW4gZXhhbXBsZSBpbnB1dCBwYXJhbWV0ZXIgZm9yIHRoZSBhY3Rpb24uJ1wiLFxuICAgICAgJyAgICByZXF1aXJlZDogZmFsc2UnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICBkZWZhdWx0OiAnZGVmYXVsdCB2YWx1ZSdcIixcbiAgICAgICcnLFxuICAgICAgJ291dHB1dHM6JyxcbiAgICAgICcgIGV4YW1wbGUtb3V0cHV0OicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICAgIGRlc2NyaXB0aW9uOiAnQW4gZXhhbXBsZSBvdXRwdXQgZnJvbSB0aGUgYWN0aW9uLidcIixcbiAgICAgICcnLFxuICAgICAgJ3J1bnM6JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgIHVzaW5nOiAnY29tcG9zaXRlJ1wiLFxuICAgICAgJyAgc3RlcHM6JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgICAgLSBuYW1lOiAnU3RlcCAxJ1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICAgIHJ1bjogZWNobyAnUnVubmluZyBTdGVwIDEgd2l0aCBpbnB1dDogJHt7IGlucHV0cy5leGFtcGxlLWlucHV0IH19J1wiLFxuICAgICAgJycsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICAgIC0gbmFtZTogJ1N0ZXAgMidcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgICAgICBydW46IGVjaG8gJ1J1bm5pbmcgU3RlcCAyJ1wiLFxuICAgICAgJycsXG4gICAgICAnZW52OicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICBFWEFNUExFX0VOVl9WQVI6ICdleGFtcGxlLXZhbHVlJ1wiLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkVGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgdGhpcy5maWxlUGF0aCwge1xuICAgICAgY29udGVudHM6IHRoaXMuc2FtcGxlQWN0aW9uLmpvaW4oJ1xcbicpLFxuICAgIH0pO1xuICB9XG59XG4iXX0=