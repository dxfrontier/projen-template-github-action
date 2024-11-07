"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierComponent = void 0;
const prettier_1 = require("projen/lib/javascript/prettier");
/**
 * Configures the templates, settings and npm scripts for the project.
 */
class PrettierComponent {
    /**
     * Initializes the Prettier component.
     * @param project The project to configure Prettier for.
     */
    constructor(project) {
        this.project = project;
    }
    /**
     * Getter retrieving the file path for the Prettier ignore configuration.
     */
    get ignoreFilePath() {
        return '.prettierignore';
    }
    /**
     * Getter retrieving the file path for the Prettier settings configuration.
     */
    get settingsFilePath() {
        return '.prettierrc.json';
    }
    /**
     * Getter retrieving settings for the Prettier configuration.
     */
    get settings() {
        return {
            files: '*.*',
            options: {
                semi: true,
                trailingComma: prettier_1.TrailingComma.ALL,
                singleQuote: true,
                printWidth: 120,
                tabWidth: 2,
            },
        };
    }
    /**
     *  Getter retrieving the npm scripts used by Prettier.
     */
    get scripts() {
        return {
            'format:fix': 'prettier . --write',
            'format:message': 'echo "Prettier started ..."',
        };
    }
    /**
     * Adds settings to the DevContainer component.
     */
    add() {
        var _a;
        (_a = this.project.prettier) === null || _a === void 0 ? void 0 : _a.addOverride(this.settings);
    }
    /**
     * Adds npm scripts specific to Prettier setup within the project configuration.
     */
    addScripts() {
        for (const [name, command] of Object.entries(this.scripts)) {
            this.project.addTask(name, { exec: command });
        }
    }
    /**
     * Configures the `.gitattributes` file to treat Prettier component related files as generated code, optimizing diffs.
     */
    updateGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.ignoreFilePath}`, 'linguist-generated');
        this.project.gitattributes.addAttributes(`/${this.settingsFilePath}`, 'linguist-generated');
    }
    /**
     * Executes setup for the Prettier component.
     */
    setup() {
        this.add();
        this.addScripts();
        this.updateGitAttributes();
    }
}
exports.PrettierComponent = PrettierComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldHRpZXJDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9QcmV0dGllckNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBbUc7QUFJbkc7O0dBRUc7QUFDSCxNQUFhLGlCQUFpQjtJQUc1Qjs7O09BR0c7SUFDSCxZQUFZLE9BQTBCO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksY0FBYztRQUN4QixPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksZ0JBQWdCO1FBQzFCLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxRQUFRO1FBQ2xCLE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsSUFBSTtnQkFDVixhQUFhLEVBQUUsd0JBQWEsQ0FBQyxHQUFHO2dCQUNoQyxXQUFXLEVBQUUsSUFBSTtnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLENBQUM7YUFDUTtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxPQUFPO1FBQ2pCLE9BQU87WUFDTCxZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLGdCQUFnQixFQUFFLDZCQUE2QjtTQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksR0FBRzs7UUFDUixNQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSwwQ0FBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7T0FFRztJQUNJLFVBQVU7UUFDZixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSztRQUNWLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFuRkQsOENBbUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJldHRpZXJPdmVycmlkZSwgUHJldHRpZXJTZXR0aW5ncywgVHJhaWxpbmdDb21tYSB9IGZyb20gJ3Byb2plbi9saWIvamF2YXNjcmlwdC9wcmV0dGllcic7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdCB9IGZyb20gJ3Byb2plbi9saWIvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBJUHJvamVjdENvbXBvbmVudCwgU2NyaXB0cyB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSB0ZW1wbGF0ZXMsIHNldHRpbmdzIGFuZCBucG0gc2NyaXB0cyBmb3IgdGhlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmV0dGllckNvbXBvbmVudCBpbXBsZW1lbnRzIElQcm9qZWN0Q29tcG9uZW50IHtcbiAgcHJpdmF0ZSBwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFByZXR0aWVyIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFByZXR0aWVyIGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgZmlsZSBwYXRoIGZvciB0aGUgUHJldHRpZXIgaWdub3JlIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGdldCBpZ25vcmVGaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLnByZXR0aWVyaWdub3JlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgZmlsZSBwYXRoIGZvciB0aGUgUHJldHRpZXIgc2V0dGluZ3MgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHNldHRpbmdzRmlsZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy5wcmV0dGllcnJjLmpzb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciByZXRyaWV2aW5nIHNldHRpbmdzIGZvciB0aGUgUHJldHRpZXIgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHNldHRpbmdzKCk6IFByZXR0aWVyT3ZlcnJpZGUge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogJyouKicsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNlbWk6IHRydWUsXG4gICAgICAgIHRyYWlsaW5nQ29tbWE6IFRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgcHJpbnRXaWR0aDogMTIwLFxuICAgICAgICB0YWJXaWR0aDogMixcbiAgICAgIH0gYXMgUHJldHRpZXJTZXR0aW5ncyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBHZXR0ZXIgcmV0cmlldmluZyB0aGUgbnBtIHNjcmlwdHMgdXNlZCBieSBQcmV0dGllci5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtYXQ6Zml4JzogJ3ByZXR0aWVyIC4gLS13cml0ZScsXG4gICAgICAnZm9ybWF0Om1lc3NhZ2UnOiAnZWNobyBcIlByZXR0aWVyIHN0YXJ0ZWQgLi4uXCInLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBzZXR0aW5ncyB0byB0aGUgRGV2Q29udGFpbmVyIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBhZGQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LnByZXR0aWVyPy5hZGRPdmVycmlkZSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG5wbSBzY3JpcHRzIHNwZWNpZmljIHRvIFByZXR0aWVyIHNldHVwIHdpdGhpbiB0aGUgcHJvamVjdCBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHVibGljIGFkZFNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29tbWFuZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY3JpcHRzKSkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFRhc2sobmFtZSwgeyBleGVjOiBjb21tYW5kIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBgLmdpdGF0dHJpYnV0ZXNgIGZpbGUgdG8gdHJlYXQgUHJldHRpZXIgY29tcG9uZW50IHJlbGF0ZWQgZmlsZXMgYXMgZ2VuZXJhdGVkIGNvZGUsIG9wdGltaXppbmcgZGlmZnMuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlR2l0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLmlnbm9yZUZpbGVQYXRofWAsICdsaW5ndWlzdC1nZW5lcmF0ZWQnKTtcbiAgICB0aGlzLnByb2plY3QuZ2l0YXR0cmlidXRlcy5hZGRBdHRyaWJ1dGVzKGAvJHt0aGlzLnNldHRpbmdzRmlsZVBhdGh9YCwgJ2xpbmd1aXN0LWdlbmVyYXRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHNldHVwIGZvciB0aGUgUHJldHRpZXIgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIHNldHVwKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkKCk7XG4gICAgdGhpcy5hZGRTY3JpcHRzKCk7XG4gICAgdGhpcy51cGRhdGVHaXRBdHRyaWJ1dGVzKCk7XG4gIH1cbn1cbiJdfQ==