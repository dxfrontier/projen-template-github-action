import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { Builder } from './builder';
export interface TypeScriptProjectBaseOptions extends TypeScriptProjectOptions {
}
/**
 * Base class for managing project configuration.
 * @abstract
 */
export declare abstract class TypeScriptProjectBase extends TypeScriptProject {
    builderRegistry: Builder[];
    /**
     * Initializes the project.
     * @param options Additional project options.
     */
    constructor(options: TypeScriptProjectBaseOptions);
    /**
     * Register a builder to be managed by this project.
     * @param builder The builder to register (must extend BaseBuilder).
     * @public
     */
    registerBuilder(builder: Builder): void;
    /**
     * Finds a builder in the registry by its constructor name.
     * @param name The name of the builder to search for.
     * @returns The builder if found, otherwise undefined.
     */
    findBuilderByName(name: string): Builder | undefined;
    /**
     * @public
     * @override
     */
    preSynthesize(): void;
    /**
     * @public
     * @override
     */
    postSynthesize(): void;
}
