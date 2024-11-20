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
     * @return File path to sample code file.
     * @protected
     */
    get filePath() {
        return 'action.yml';
    }
    /**
     * GitHub action template for the SampleCode configuration.
     * @return Content for sample code file.
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
SampleCode[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCode", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3NhbXBsZWNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsa0NBQXlEO0FBRXpEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsY0FBTztJQUNyQzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxZQUFZO1FBQ3hCLE9BQU87WUFDTCw2Q0FBNkM7WUFDN0Msb0NBQW9DO1lBQ3BDLDZDQUE2QztZQUM3QyxzRUFBc0U7WUFDdEUsNkNBQTZDO1lBQzdDLDRCQUE0QjtZQUM1QixXQUFXO1lBQ1gsNkNBQTZDO1lBQzdDLGVBQWU7WUFDZiw2Q0FBNkM7WUFDN0MsaUJBQWlCO1lBQ2pCLEVBQUU7WUFDRixTQUFTO1lBQ1Qsa0JBQWtCO1lBQ2xCLDZDQUE2QztZQUM3QywrREFBK0Q7WUFDL0QscUJBQXFCO1lBQ3JCLDZDQUE2QztZQUM3Qyw4QkFBOEI7WUFDOUIsRUFBRTtZQUNGLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsNkNBQTZDO1lBQzdDLHVEQUF1RDtZQUN2RCxFQUFFO1lBQ0YsT0FBTztZQUNQLDZDQUE2QztZQUM3QyxzQkFBc0I7WUFDdEIsVUFBVTtZQUNWLDZDQUE2QztZQUM3QyxzQkFBc0I7WUFDdEIsNkNBQTZDO1lBQzdDLDBFQUEwRTtZQUMxRSxFQUFFO1lBQ0YsNkNBQTZDO1lBQzdDLHNCQUFzQjtZQUN0Qiw2Q0FBNkM7WUFDN0Msa0NBQWtDO1lBQ2xDLEVBQUU7WUFDRixNQUFNO1lBQ04sNkNBQTZDO1lBQzdDLG9DQUFvQztTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVTLFlBQVk7UUFDcEIsSUFBSSxtQkFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3ZDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBN0VILGdDQThFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQnVpbGRlciwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogU2FtcGxlQ29kZSBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBTYW1wbGVDb2RlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBTYW1wbGVDb2RlIGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBTYW1wbGVDb2RlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgc2FtcGxlIEdpdEh1YiBhY3Rpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIHNhbXBsZSBjb2RlIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FjdGlvbi55bWwnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdEh1YiBhY3Rpb24gdGVtcGxhdGUgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudCBmb3Igc2FtcGxlIGNvZGUgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVBY3Rpb24oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwibmFtZTogJ015IEN1c3RvbSBDb21wb3NpdGUgQWN0aW9uJ1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcImRlc2NyaXB0aW9uOiAnQSBzYW1wbGUgR2l0SHViIGNvbXBvc2l0ZSBhY3Rpb24gY3JlYXRlZCB3aXRoIFByb2plbi4nXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiYXV0aG9yOiAnWW91ciBOYW1lIG9yIE9yZydcIixcbiAgICAgICdicmFuZGluZzonLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgaWNvbjogJ3phcCdcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgIGNvbG9yOiAnYmx1ZSdcIixcbiAgICAgICcnLFxuICAgICAgJ2lucHV0czonLFxuICAgICAgJyAgZXhhbXBsZS1pbnB1dDonLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICBkZXNjcmlwdGlvbjogJ0FuIGV4YW1wbGUgaW5wdXQgcGFyYW1ldGVyIGZvciB0aGUgYWN0aW9uLidcIixcbiAgICAgICcgICAgcmVxdWlyZWQ6IGZhbHNlJyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgICAgZGVmYXVsdDogJ2RlZmF1bHQgdmFsdWUnXCIsXG4gICAgICAnJyxcbiAgICAgICdvdXRwdXRzOicsXG4gICAgICAnICBleGFtcGxlLW91dHB1dDonLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICBkZXNjcmlwdGlvbjogJ0FuIGV4YW1wbGUgb3V0cHV0IGZyb20gdGhlIGFjdGlvbi4nXCIsXG4gICAgICAnJyxcbiAgICAgICdydW5zOicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICB1c2luZzogJ2NvbXBvc2l0ZSdcIixcbiAgICAgICcgIHN0ZXBzOicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICAgIC0gbmFtZTogJ1N0ZXAgMSdcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgICAgICBydW46IGVjaG8gJ1J1bm5pbmcgU3RlcCAxIHdpdGggaW5wdXQ6ICR7eyBpbnB1dHMuZXhhbXBsZS1pbnB1dCB9fSdcIixcbiAgICAgICcnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICAtIG5hbWU6ICdTdGVwIDInXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICAgICAgcnVuOiBlY2hvICdSdW5uaW5nIFN0ZXAgMidcIixcbiAgICAgICcnLFxuICAgICAgJ2VudjonLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgRVhBTVBMRV9FTlZfVkFSOiAnZXhhbXBsZS12YWx1ZSdcIixcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIHRoaXMuZmlsZVBhdGgsIHtcbiAgICAgIGNvbnRlbnRzOiB0aGlzLnNhbXBsZUFjdGlvbi5qb2luKCdcXG4nKSxcbiAgICB9KTtcbiAgfVxufVxuIl19