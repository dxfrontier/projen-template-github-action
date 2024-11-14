import { PrettierOverride } from 'projen/lib/javascript';
import { Builder } from './builder';
import { Scripts } from '../types';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for Prettier builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class PrettierBase extends Builder {
    /**
     * Initializes the base Prettier builder.
     * @param project The project to configure Prettier for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File path to the Prettier ignore configuration.
     * @protected
     */
    protected get ignoreFilePath(): string;
    /**
     * File path to the Prettier settings configuration.
     * @protected
     */
    protected get settingsFilePath(): string;
    /**
     * File paths to the Prettier ignore entries.
     * @protected
     */
    protected get ignoreFilePaths(): string[];
    /**
     * Settings for the Prettier configuration.
     * @protected
     */
    protected get settings(): PrettierOverride;
    /**
     * NPM scripts used by Prettier.
     * @protected
     */
    protected get scripts(): Scripts;
    protected addSettings(): void;
    protected addScripts(): void;
    protected addGitAttributes(): void;
    /**
     * Executes post-synthesis tasks, focusing on updating the `.prettierignore` file with paths from `.gitattributes`.
     *
     * Tried scenarios:
     *   - Accessing attributes directly from `.gitattributes` file (but `.gitattributes` is private and inaccessible).
     *     This would be the most efficient and elegant solution as it allows us to add the entries using API.
     *   - Retrieving all files from the project (misses some files like `tsconfig.json`).
     *   - Letting each component add its paths individually (leaves out many standard files).
     *   - Manually adding paths (prone to errors).
     *   - Modifying `.prettierignore` after post-synthesis (but `.prettierignore` is readonly) and leads to test issues
     *     as these changes are not reflected in `syntesize()`.
     *
     * We will update it manually and cover it by tests cases checking if changes on the files are reflected here.
     */
    preSynthesize(): void;
    /**
     * Adds entries to the `.prettierignore` file.
     * @private
     */
    protected addPrettierIgnoreEntries(): void;
}
