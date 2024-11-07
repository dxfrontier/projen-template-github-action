"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleComponent = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
/**
 * Handles GitHub action sample file creation for the project.
 */
class SampleComponent {
    /**
     * Initializes the Sample component.
     * @param project The project to create sample GitHub action file for.
     */
    constructor(project) {
        this.project = project;
    }
    /**
     * Getter retrieving the file path for the sample GitHub action.
     */
    get filePath() {
        return 'action.yml';
    }
    /**
     * Getter retrieving the template file for the sample GitHub action.
     */
    get sampleAction() {
        return [
            // eslint-disable-next-line prettier/prettier
            'name: \'My Custom Composite Action\'',
            // eslint-disable-next-line prettier/prettier
            'description: \'A sample GitHub composite action created with Projen.\'',
            // eslint-disable-next-line prettier/prettier
            'author: \'Your Name or Org\'',
            'branding:',
            // eslint-disable-next-line prettier/prettier
            '  icon: \'zap\'',
            // eslint-disable-next-line prettier/prettier
            '  color: \'blue\'',
            '',
            'inputs:',
            '  example-input:',
            // eslint-disable-next-line prettier/prettier
            '    description: \'An example input parameter for the action.\'',
            '    required: false',
            // eslint-disable-next-line prettier/prettier
            '    default: \'default value\'',
            '',
            'outputs:',
            '  example-output:',
            // eslint-disable-next-line prettier/prettier
            '    description: \'An example output from the action.\'',
            '',
            'runs:',
            // eslint-disable-next-line prettier/prettier
            '  using: \'composite\'',
            '  steps:',
            // eslint-disable-next-line prettier/prettier
            '    - name: \'Step 1\'',
            // eslint-disable-next-line prettier/prettier
            '      run: echo \'Running Step 1 with input: ${{ inputs.example-input }}\'',
            '',
            // eslint-disable-next-line prettier/prettier
            '    - name: \'Step 2\'',
            // eslint-disable-next-line prettier/prettier
            '      run: echo \'Running Step 2\'',
            '',
            'env:',
            // eslint-disable-next-line prettier/prettier
            '  EXAMPLE_ENV_VAR: \'example-value\'',
        ];
    }
    /**
     * Creates the template file for the sample GitHub action.
     */
    createSampleAction() {
        new projen_1.SampleFile(this.project, this.filePath, {
            contents: this.sampleAction.join('\n'),
        });
    }
    /**
     * Adds sample action template files to the project.
     */
    add() {
        this.createSampleAction();
    }
    /**
     * Executes setup for sample file creation.
     */
    setup() {
        this.add();
    }
}
exports.SampleComponent = SampleComponent;
_a = JSII_RTTI_SYMBOL_1;
SampleComponent[_a] = { fqn: "projen-template-github-action.SampleComponent", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2FtcGxlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQW9DO0FBSXBDOztHQUVHO0FBQ0gsTUFBYSxlQUFlO0lBRzFCOzs7T0FHRztJQUNILFlBQVksT0FBMEI7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxRQUFRO1FBQ2xCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksWUFBWTtRQUN0QixPQUFPO1lBQ0wsNkNBQTZDO1lBQzdDLHNDQUFzQztZQUN0Qyw2Q0FBNkM7WUFDN0Msd0VBQXdFO1lBQ3hFLDZDQUE2QztZQUM3Qyw4QkFBOEI7WUFDOUIsV0FBVztZQUNYLDZDQUE2QztZQUM3QyxpQkFBaUI7WUFDakIsNkNBQTZDO1lBQzdDLG1CQUFtQjtZQUNuQixFQUFFO1lBQ0YsU0FBUztZQUNULGtCQUFrQjtZQUNsQiw2Q0FBNkM7WUFDN0MsaUVBQWlFO1lBQ2pFLHFCQUFxQjtZQUNyQiw2Q0FBNkM7WUFDN0MsZ0NBQWdDO1lBQ2hDLEVBQUU7WUFDRixVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLDZDQUE2QztZQUM3Qyx5REFBeUQ7WUFDekQsRUFBRTtZQUNGLE9BQU87WUFDUCw2Q0FBNkM7WUFDN0Msd0JBQXdCO1lBQ3hCLFVBQVU7WUFDViw2Q0FBNkM7WUFDN0Msd0JBQXdCO1lBQ3hCLDZDQUE2QztZQUM3Qyw0RUFBNEU7WUFDNUUsRUFBRTtZQUNGLDZDQUE2QztZQUM3Qyx3QkFBd0I7WUFDeEIsNkNBQTZDO1lBQzdDLG9DQUFvQztZQUNwQyxFQUFFO1lBQ0YsTUFBTTtZQUNOLDZDQUE2QztZQUM3QyxzQ0FBc0M7U0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLGtCQUFrQjtRQUN4QixJQUFJLG1CQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDdkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksR0FBRztRQUNSLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUs7UUFDVixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDOztBQXpGSCwwQ0EwRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW1wbGVGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0IH0gZnJvbSAncHJvamVuL2xpYi90eXBlc2NyaXB0JztcbmltcG9ydCB7IElQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIEhhbmRsZXMgR2l0SHViIGFjdGlvbiBzYW1wbGUgZmlsZSBjcmVhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBTYW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBJUHJvamVjdENvbXBvbmVudCB7XG4gIHByaXZhdGUgcHJvamVjdDogVHlwZVNjcmlwdFByb2plY3Q7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBTYW1wbGUgY29tcG9uZW50LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjcmVhdGUgc2FtcGxlIEdpdEh1YiBhY3Rpb24gZmlsZSBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIGZpbGUgcGF0aCBmb3IgdGhlIHNhbXBsZSBHaXRIdWIgYWN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgZmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FjdGlvbi55bWwnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHRoZSB0ZW1wbGF0ZSBmaWxlIGZvciB0aGUgc2FtcGxlIEdpdEh1YiBhY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGdldCBzYW1wbGVBY3Rpb24oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICduYW1lOiBcXCdNeSBDdXN0b20gQ29tcG9zaXRlIEFjdGlvblxcJycsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICdkZXNjcmlwdGlvbjogXFwnQSBzYW1wbGUgR2l0SHViIGNvbXBvc2l0ZSBhY3Rpb24gY3JlYXRlZCB3aXRoIFByb2plbi5cXCcnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnYXV0aG9yOiBcXCdZb3VyIE5hbWUgb3IgT3JnXFwnJyxcbiAgICAgICdicmFuZGluZzonLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICBpY29uOiBcXCd6YXBcXCcnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICBjb2xvcjogXFwnYmx1ZVxcJycsXG4gICAgICAnJyxcbiAgICAgICdpbnB1dHM6JyxcbiAgICAgICcgIGV4YW1wbGUtaW5wdXQ6JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJyAgICBkZXNjcmlwdGlvbjogXFwnQW4gZXhhbXBsZSBpbnB1dCBwYXJhbWV0ZXIgZm9yIHRoZSBhY3Rpb24uXFwnJyxcbiAgICAgICcgICAgcmVxdWlyZWQ6IGZhbHNlJyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJyAgICBkZWZhdWx0OiBcXCdkZWZhdWx0IHZhbHVlXFwnJyxcbiAgICAgICcnLFxuICAgICAgJ291dHB1dHM6JyxcbiAgICAgICcgIGV4YW1wbGUtb3V0cHV0OicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgICAgZGVzY3JpcHRpb246IFxcJ0FuIGV4YW1wbGUgb3V0cHV0IGZyb20gdGhlIGFjdGlvbi5cXCcnLFxuICAgICAgJycsXG4gICAgICAncnVuczonLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICB1c2luZzogXFwnY29tcG9zaXRlXFwnJyxcbiAgICAgICcgIHN0ZXBzOicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgICAgLSBuYW1lOiBcXCdTdGVwIDFcXCcnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICAgICAgcnVuOiBlY2hvIFxcJ1J1bm5pbmcgU3RlcCAxIHdpdGggaW5wdXQ6ICR7eyBpbnB1dHMuZXhhbXBsZS1pbnB1dCB9fVxcJycsXG4gICAgICAnJyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJyAgICAtIG5hbWU6IFxcJ1N0ZXAgMlxcJycsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgICAgICBydW46IGVjaG8gXFwnUnVubmluZyBTdGVwIDJcXCcnLFxuICAgICAgJycsXG4gICAgICAnZW52OicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgIEVYQU1QTEVfRU5WX1ZBUjogXFwnZXhhbXBsZS12YWx1ZVxcJycsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0ZW1wbGF0ZSBmaWxlIGZvciB0aGUgc2FtcGxlIEdpdEh1YiBhY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVNhbXBsZUFjdGlvbigpOiB2b2lkIHtcbiAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIHRoaXMuZmlsZVBhdGgsIHtcbiAgICAgIGNvbnRlbnRzOiB0aGlzLnNhbXBsZUFjdGlvbi5qb2luKCdcXG4nKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHNhbXBsZSBhY3Rpb24gdGVtcGxhdGUgZmlsZXMgdG8gdGhlIHByb2plY3QuXG4gICAqL1xuICBwdWJsaWMgYWRkKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlU2FtcGxlQWN0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgc2V0dXAgZm9yIHNhbXBsZSBmaWxlIGNyZWF0aW9uLlxuICAgKi9cbiAgcHVibGljIHNldHVwKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cbn1cbiJdfQ==