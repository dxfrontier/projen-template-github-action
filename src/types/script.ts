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
 * Structure for an npm script.
 */
export type Script = {
  name: string;
  exec: string;
};

/**
 * Collection of npm scripts, indexed by their names
 */
export type Scripts = {
  [key: string]: string;
};
