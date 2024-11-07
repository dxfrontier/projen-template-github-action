/**
 * Defines methods for a component to be created in the project.
 */
export interface IProjectComponent {
    add?(): void;
    addScripts?(): void;
    updateGitAttributes?(): void;
    addDevDependencies?(): void;
    setup(): void;
}
