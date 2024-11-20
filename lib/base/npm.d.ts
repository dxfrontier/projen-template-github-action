import { Builder } from './builder';
import { ProjenStandardScript } from '../types';
import { TypeScriptProjectBase } from './project';
/**
 * Base class for NPM Package builder implementing all relevant configuration.
 * @abstract
 */
export declare abstract class NpmPackageBase extends Builder {
    /**
     * Initializes the base NPM Package builder.
     * @param project The project to configure NPM for.
     */
    constructor(project: TypeScriptProjectBase);
    /**
     * File paths for the .gitattributes file entries.
     * These entries are not added automatically by projen
     * and we have not extra builder for these. So we handle them here.
     * @return File paths for .gitattributes entries.
     * @protected
     */
    protected get gitAttributesFilePaths(): string[];
    /**
     * NPM file paths to be packaged for the NPM Package.
     * @return File paths for package.json file entry.
     * @protected
     * @abstract
     */
    protected abstract get npmFilePaths(): string[];
    /**
     * Getter retrieving the npm scripts to be removed from NPM Package.
     * These scripts are added by Projen on project initialization
     * and are not needed for our projects.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @return Projen standard script entries.
     * @protected
     */
    protected get projenScripts(): ProjenStandardScript[];
    /**
     * Configures settings specific to the builder within the project.
     * @protected
     */
    protected addSettings(): void;
    /**
     * Removes the NPM Package scripts associated with Projen NPM Package initialization.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @protected
     */
    protected removeScripts(): void;
    protected addGitAttributes(): void;
}
