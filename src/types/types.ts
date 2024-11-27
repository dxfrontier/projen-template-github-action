/**
 * Configuration for linting staged files, allowing string or array of strings.
 */
export type LintStagedConfig = {
  [key: string]: string | string[];
};

/**
 * Standard npm scripts that Projen automatically adds
 * to package.json during project initialization.
 */
export type ProjenStandardScript =
  | 'bump'
  | 'clobber'
  | 'compile'
  | 'default'
  | 'eject'
  | 'eslint'
  | 'package'
  | 'post-compile'
  | 'post-upgrade'
  | 'pre-compile'
  | 'release'
  | 'test'
  | 'test:watch'
  | 'unbump'
  | 'upgrade'
  | 'watch'
  | 'projen';

/**
 * Collection of npm scripts, indexed by their names
 */
export type Scripts = {
  [key: string]: string | string[];
};

/**
 * Structure of a projen task containing multiple steps.
 * This is derived from them Scripts type but contains an array keeping the task steps.
 */
export type TaskSteps = {
  [key: string]: string[];
};

/**
 * Options for github workflows
 */
export type WorkflowOptions = Record<string, any>;

/**
 * Settings for VsCode launch file
 */
export type LaunchSetting = Record<string, unknown>;
