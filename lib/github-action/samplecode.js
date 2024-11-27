"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCode = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3NhbXBsZWNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW9DO0FBQ3BDLGtDQUF5RDtBQUV6RDs7R0FFRztBQUNILE1BQWEsVUFBVyxTQUFRLGNBQU87SUFDckM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsUUFBUTtRQUNwQixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsWUFBWTtRQUN4QixPQUFPO1lBQ0wsb0NBQW9DO1lBQ3BDLHNFQUFzRTtZQUN0RSw0QkFBNEI7WUFDNUIsV0FBVztZQUNYLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsRUFBRTtZQUNGLFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsK0RBQStEO1lBQy9ELHFCQUFxQjtZQUNyQiw4QkFBOEI7WUFDOUIsRUFBRTtZQUNGLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsdURBQXVEO1lBQ3ZELEVBQUU7WUFDRixPQUFPO1lBQ1Asc0JBQXNCO1lBQ3RCLFVBQVU7WUFDVixzQkFBc0I7WUFDdEIsMEVBQTBFO1lBQzFFLEVBQUU7WUFDRixzQkFBc0I7WUFDdEIsa0NBQWtDO1lBQ2xDLEVBQUU7WUFDRixNQUFNO1lBQ04sb0NBQW9DO1NBQ3JDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZO1FBQ3BCLElBQUksbUJBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDMUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN2QyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFuRUQsZ0NBbUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FtcGxlRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBCdWlsZGVyLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBTYW1wbGVDb2RlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNhbXBsZUNvZGUgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIFNhbXBsZUNvZGUgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFNhbXBsZUNvZGUgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBzYW1wbGUgR2l0SHViIGFjdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gc2FtcGxlIGNvZGUgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYWN0aW9uLnltbCc7XG4gIH1cblxuICAvKipcbiAgICogR2l0SHViIGFjdGlvbiB0ZW1wbGF0ZSBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50IGZvciBzYW1wbGUgY29kZSBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUFjdGlvbigpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFwibmFtZTogJ015IEN1c3RvbSBDb21wb3NpdGUgQWN0aW9uJ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvbjogJ0Egc2FtcGxlIEdpdEh1YiBjb21wb3NpdGUgYWN0aW9uIGNyZWF0ZWQgd2l0aCBQcm9qZW4uJ1wiLFxuICAgICAgXCJhdXRob3I6ICdZb3VyIE5hbWUgb3IgT3JnJ1wiLFxuICAgICAgJ2JyYW5kaW5nOicsXG4gICAgICBcIiAgaWNvbjogJ3phcCdcIixcbiAgICAgIFwiICBjb2xvcjogJ2JsdWUnXCIsXG4gICAgICAnJyxcbiAgICAgICdpbnB1dHM6JyxcbiAgICAgICcgIGV4YW1wbGUtaW5wdXQ6JyxcbiAgICAgIFwiICAgIGRlc2NyaXB0aW9uOiAnQW4gZXhhbXBsZSBpbnB1dCBwYXJhbWV0ZXIgZm9yIHRoZSBhY3Rpb24uJ1wiLFxuICAgICAgJyAgICByZXF1aXJlZDogZmFsc2UnLFxuICAgICAgXCIgICAgZGVmYXVsdDogJ2RlZmF1bHQgdmFsdWUnXCIsXG4gICAgICAnJyxcbiAgICAgICdvdXRwdXRzOicsXG4gICAgICAnICBleGFtcGxlLW91dHB1dDonLFxuICAgICAgXCIgICAgZGVzY3JpcHRpb246ICdBbiBleGFtcGxlIG91dHB1dCBmcm9tIHRoZSBhY3Rpb24uJ1wiLFxuICAgICAgJycsXG4gICAgICAncnVuczonLFxuICAgICAgXCIgIHVzaW5nOiAnY29tcG9zaXRlJ1wiLFxuICAgICAgJyAgc3RlcHM6JyxcbiAgICAgIFwiICAgIC0gbmFtZTogJ1N0ZXAgMSdcIixcbiAgICAgIFwiICAgICAgcnVuOiBlY2hvICdSdW5uaW5nIFN0ZXAgMSB3aXRoIGlucHV0OiAke3sgaW5wdXRzLmV4YW1wbGUtaW5wdXQgfX0nXCIsXG4gICAgICAnJyxcbiAgICAgIFwiICAgIC0gbmFtZTogJ1N0ZXAgMidcIixcbiAgICAgIFwiICAgICAgcnVuOiBlY2hvICdSdW5uaW5nIFN0ZXAgMidcIixcbiAgICAgICcnLFxuICAgICAgJ2VudjonLFxuICAgICAgXCIgIEVYQU1QTEVfRU5WX1ZBUjogJ2V4YW1wbGUtdmFsdWUnXCIsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RlY3RlZCBhZGRUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgbmV3IFNhbXBsZUZpbGUodGhpcy5wcm9qZWN0LCB0aGlzLmZpbGVQYXRoLCB7XG4gICAgICBjb250ZW50czogdGhpcy5zYW1wbGVBY3Rpb24uam9pbignXFxuJyksXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==