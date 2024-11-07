"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleComponent = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2FtcGxlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1DQUFvQztBQUVwQzs7R0FFRztBQUNILE1BQWEsZUFBZTtJQUcxQjs7O09BR0c7SUFDSCxZQUFZLE9BQTBCO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksUUFBUTtRQUNsQixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLFlBQVk7UUFDdEIsT0FBTztZQUNMLDZDQUE2QztZQUM3QyxzQ0FBc0M7WUFDdEMsNkNBQTZDO1lBQzdDLHdFQUF3RTtZQUN4RSw2Q0FBNkM7WUFDN0MsOEJBQThCO1lBQzlCLFdBQVc7WUFDWCw2Q0FBNkM7WUFDN0MsaUJBQWlCO1lBQ2pCLDZDQUE2QztZQUM3QyxtQkFBbUI7WUFDbkIsRUFBRTtZQUNGLFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsNkNBQTZDO1lBQzdDLGlFQUFpRTtZQUNqRSxxQkFBcUI7WUFDckIsNkNBQTZDO1lBQzdDLGdDQUFnQztZQUNoQyxFQUFFO1lBQ0YsVUFBVTtZQUNWLG1CQUFtQjtZQUNuQiw2Q0FBNkM7WUFDN0MseURBQXlEO1lBQ3pELEVBQUU7WUFDRixPQUFPO1lBQ1AsNkNBQTZDO1lBQzdDLHdCQUF3QjtZQUN4QixVQUFVO1lBQ1YsNkNBQTZDO1lBQzdDLHdCQUF3QjtZQUN4Qiw2Q0FBNkM7WUFDN0MsNEVBQTRFO1lBQzVFLEVBQUU7WUFDRiw2Q0FBNkM7WUFDN0Msd0JBQXdCO1lBQ3hCLDZDQUE2QztZQUM3QyxvQ0FBb0M7WUFDcEMsRUFBRTtZQUNGLE1BQU07WUFDTiw2Q0FBNkM7WUFDN0Msc0NBQXNDO1NBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyxrQkFBa0I7UUFDeEIsSUFBSSxtQkFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3ZDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLEdBQUc7UUFDUixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBMUZELDBDQTBGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0IH0gZnJvbSAncHJvamVuL2xpYi90eXBlc2NyaXB0JztcbmltcG9ydCB7IElQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgU2FtcGxlRmlsZSB9IGZyb20gJ3Byb2plbic7XG5cbi8qKlxuICogSGFuZGxlcyBHaXRIdWIgYWN0aW9uIHNhbXBsZSBmaWxlIGNyZWF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNhbXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIElQcm9qZWN0Q29tcG9uZW50IHtcbiAgcHJpdmF0ZSBwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFNhbXBsZSBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNyZWF0ZSBzYW1wbGUgR2l0SHViIGFjdGlvbiBmaWxlIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgZmlsZSBwYXRoIGZvciB0aGUgc2FtcGxlIEdpdEh1YiBhY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGdldCBmaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYWN0aW9uLnltbCc7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIHRlbXBsYXRlIGZpbGUgZm9yIHRoZSBzYW1wbGUgR2l0SHViIGFjdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHNhbXBsZUFjdGlvbigpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJ25hbWU6IFxcJ015IEN1c3RvbSBDb21wb3NpdGUgQWN0aW9uXFwnJyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJ2Rlc2NyaXB0aW9uOiBcXCdBIHNhbXBsZSBHaXRIdWIgY29tcG9zaXRlIGFjdGlvbiBjcmVhdGVkIHdpdGggUHJvamVuLlxcJycsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICdhdXRob3I6IFxcJ1lvdXIgTmFtZSBvciBPcmdcXCcnLFxuICAgICAgJ2JyYW5kaW5nOicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgIGljb246IFxcJ3phcFxcJycsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgIGNvbG9yOiBcXCdibHVlXFwnJyxcbiAgICAgICcnLFxuICAgICAgJ2lucHV0czonLFxuICAgICAgJyAgZXhhbXBsZS1pbnB1dDonLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICAgIGRlc2NyaXB0aW9uOiBcXCdBbiBleGFtcGxlIGlucHV0IHBhcmFtZXRlciBmb3IgdGhlIGFjdGlvbi5cXCcnLFxuICAgICAgJyAgICByZXF1aXJlZDogZmFsc2UnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICAgIGRlZmF1bHQ6IFxcJ2RlZmF1bHQgdmFsdWVcXCcnLFxuICAgICAgJycsXG4gICAgICAnb3V0cHV0czonLFxuICAgICAgJyAgZXhhbXBsZS1vdXRwdXQ6JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJyAgICBkZXNjcmlwdGlvbjogXFwnQW4gZXhhbXBsZSBvdXRwdXQgZnJvbSB0aGUgYWN0aW9uLlxcJycsXG4gICAgICAnJyxcbiAgICAgICdydW5zOicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgIHVzaW5nOiBcXCdjb21wb3NpdGVcXCcnLFxuICAgICAgJyAgc3RlcHM6JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJyAgICAtIG5hbWU6IFxcJ1N0ZXAgMVxcJycsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgICAgICBydW46IGVjaG8gXFwnUnVubmluZyBTdGVwIDEgd2l0aCBpbnB1dDogJHt7IGlucHV0cy5leGFtcGxlLWlucHV0IH19XFwnJyxcbiAgICAgICcnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICAgIC0gbmFtZTogXFwnU3RlcCAyXFwnJyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJyAgICAgIHJ1bjogZWNobyBcXCdSdW5uaW5nIFN0ZXAgMlxcJycsXG4gICAgICAnJyxcbiAgICAgICdlbnY6JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJyAgRVhBTVBMRV9FTlZfVkFSOiBcXCdleGFtcGxlLXZhbHVlXFwnJyxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGUgZm9yIHRoZSBzYW1wbGUgR2l0SHViIGFjdGlvbi5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlU2FtcGxlQWN0aW9uKCk6IHZvaWQge1xuICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgdGhpcy5maWxlUGF0aCwge1xuICAgICAgY29udGVudHM6IHRoaXMuc2FtcGxlQWN0aW9uLmpvaW4oJ1xcbicpLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgc2FtcGxlIGFjdGlvbiB0ZW1wbGF0ZSBmaWxlcyB0byB0aGUgcHJvamVjdC5cbiAgICovXG4gIHB1YmxpYyBhZGQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVTYW1wbGVBY3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBzZXR1cCBmb3Igc2FtcGxlIGZpbGUgY3JlYXRpb24uXG4gICAqL1xuICBwdWJsaWMgc2V0dXAoKTogdm9pZCB7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxufVxuIl19