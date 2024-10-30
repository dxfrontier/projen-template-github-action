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

export interface IScript {
  NAME: string;
  EXEC: string;
}

export interface IScripts {
  [key: string]: IScript; // Allow any key of type string to have a Script value
}
