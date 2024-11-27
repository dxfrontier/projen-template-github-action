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
            "name: 'My Custom Composite Action'",
            "description: 'A sample GitHub composite action created with Projen.'",
            "author: 'Your Name or Org'",
            'branding:',
            "  icon: 'zap'",
            "  color: 'blue'",
            '',
            'inputs:',
            '  example-input:',
            "    description: 'An example input parameter for the action.'",
            '    required: false',
            "    default: 'default value'",
            '',
            'outputs:',
            '  example-output:',
            "    description: 'An example output from the action.'",
            '',
            'runs:',
            "  using: 'composite'",
            '  steps:',
            "    - name: 'Step 1'",
            "      run: echo 'Running Step 1 with input: ${{ inputs.example-input }}'",
            '',
            "    - name: 'Step 2'",
            "      run: echo 'Running Step 2'",
            '',
            'env:',
            "  EXAMPLE_ENV_VAR: 'example-value'",
        ];
    }
    /**
     * @override
     */
    addTemplates() {
        new projen_1.SampleFile(this.project, this.filePath, {
            contents: this.sampleAction.join('\n'),
        });
    }
}
exports.SampleCode = SampleCode;
_a = JSII_RTTI_SYMBOL_1;
SampleCode[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCode", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3NhbXBsZWNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsa0NBQXlEO0FBRXpEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsY0FBTztJQUNyQzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxZQUFZO1FBQ3hCLE9BQU87WUFDTCxvQ0FBb0M7WUFDcEMsc0VBQXNFO1lBQ3RFLDRCQUE0QjtZQUM1QixXQUFXO1lBQ1gsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixFQUFFO1lBQ0YsU0FBUztZQUNULGtCQUFrQjtZQUNsQiwrREFBK0Q7WUFDL0QscUJBQXFCO1lBQ3JCLDhCQUE4QjtZQUM5QixFQUFFO1lBQ0YsVUFBVTtZQUNWLG1CQUFtQjtZQUNuQix1REFBdUQ7WUFDdkQsRUFBRTtZQUNGLE9BQU87WUFDUCxzQkFBc0I7WUFDdEIsVUFBVTtZQUNWLHNCQUFzQjtZQUN0QiwwRUFBMEU7WUFDMUUsRUFBRTtZQUNGLHNCQUFzQjtZQUN0QixrQ0FBa0M7WUFDbEMsRUFBRTtZQUNGLE1BQU07WUFDTixvQ0FBb0M7U0FDckMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNPLFlBQVk7UUFDcEIsSUFBSSxtQkFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3ZDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBbEVILGdDQW1FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbXBsZUZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQnVpbGRlciwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5cbi8qKlxuICogU2FtcGxlQ29kZSBidWlsZGVyIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBTYW1wbGVDb2RlIGV4dGVuZHMgQnVpbGRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYmFzZSBTYW1wbGVDb2RlIGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBTYW1wbGVDb2RlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGUgcGF0aCB0byB0aGUgc2FtcGxlIEdpdEh1YiBhY3Rpb24uXG4gICAqIEByZXR1cm4gRmlsZSBwYXRoIHRvIHNhbXBsZSBjb2RlIGZpbGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FjdGlvbi55bWwnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdEh1YiBhY3Rpb24gdGVtcGxhdGUgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudCBmb3Igc2FtcGxlIGNvZGUgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVBY3Rpb24oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXG4gICAgICBcIm5hbWU6ICdNeSBDdXN0b20gQ29tcG9zaXRlIEFjdGlvbidcIixcbiAgICAgIFwiZGVzY3JpcHRpb246ICdBIHNhbXBsZSBHaXRIdWIgY29tcG9zaXRlIGFjdGlvbiBjcmVhdGVkIHdpdGggUHJvamVuLidcIixcbiAgICAgIFwiYXV0aG9yOiAnWW91ciBOYW1lIG9yIE9yZydcIixcbiAgICAgICdicmFuZGluZzonLFxuICAgICAgXCIgIGljb246ICd6YXAnXCIsXG4gICAgICBcIiAgY29sb3I6ICdibHVlJ1wiLFxuICAgICAgJycsXG4gICAgICAnaW5wdXRzOicsXG4gICAgICAnICBleGFtcGxlLWlucHV0OicsXG4gICAgICBcIiAgICBkZXNjcmlwdGlvbjogJ0FuIGV4YW1wbGUgaW5wdXQgcGFyYW1ldGVyIGZvciB0aGUgYWN0aW9uLidcIixcbiAgICAgICcgICAgcmVxdWlyZWQ6IGZhbHNlJyxcbiAgICAgIFwiICAgIGRlZmF1bHQ6ICdkZWZhdWx0IHZhbHVlJ1wiLFxuICAgICAgJycsXG4gICAgICAnb3V0cHV0czonLFxuICAgICAgJyAgZXhhbXBsZS1vdXRwdXQ6JyxcbiAgICAgIFwiICAgIGRlc2NyaXB0aW9uOiAnQW4gZXhhbXBsZSBvdXRwdXQgZnJvbSB0aGUgYWN0aW9uLidcIixcbiAgICAgICcnLFxuICAgICAgJ3J1bnM6JyxcbiAgICAgIFwiICB1c2luZzogJ2NvbXBvc2l0ZSdcIixcbiAgICAgICcgIHN0ZXBzOicsXG4gICAgICBcIiAgICAtIG5hbWU6ICdTdGVwIDEnXCIsXG4gICAgICBcIiAgICAgIHJ1bjogZWNobyAnUnVubmluZyBTdGVwIDEgd2l0aCBpbnB1dDogJHt7IGlucHV0cy5leGFtcGxlLWlucHV0IH19J1wiLFxuICAgICAgJycsXG4gICAgICBcIiAgICAtIG5hbWU6ICdTdGVwIDInXCIsXG4gICAgICBcIiAgICAgIHJ1bjogZWNobyAnUnVubmluZyBTdGVwIDInXCIsXG4gICAgICAnJyxcbiAgICAgICdlbnY6JyxcbiAgICAgIFwiICBFWEFNUExFX0VOVl9WQVI6ICdleGFtcGxlLXZhbHVlJ1wiLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkVGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgdGhpcy5maWxlUGF0aCwge1xuICAgICAgY29udGVudHM6IHRoaXMuc2FtcGxlQWN0aW9uLmpvaW4oJ1xcbicpLFxuICAgIH0pO1xuICB9XG59XG4iXX0=