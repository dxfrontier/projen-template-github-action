import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
export interface GitHubActionProjectOptions extends TypeScriptProjectOptions {
}
/**
 * Represents a Projen TypeScript project configured for GitHub Actions,
 * providing various project templates and settings.
 */
export declare class GitHubActionProject extends TypeScriptProject {
    constructor(options: GitHubActionProjectOptions);
}
