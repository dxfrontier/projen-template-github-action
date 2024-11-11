import { CommitLint } from './commitlint';
import { DevContainer } from './devcontainer';
import { GitHub } from './github';
import { Husky } from './husky';
import { NpmPackage } from './npm';
import { Prettier } from './prettier';
import { SampleCode } from './samplecode';
import { VSCode } from './vscode';
import { Project, ProjectOptions } from '../base/project';

/**
 * Defines a GitHub Action project.
 */
export class GitHubActionProject extends Project {
  /**
   * Initializes the GitHub Action project.
   * @param options Additional project options.
   */
  constructor(options: ProjectOptions) {
    super(options);

    new NpmPackage(this);
    new DevContainer(this);
    new VSCode(this);
    new GitHub(this);
    new Prettier(this);
    new Husky(this);
    new CommitLint(this);
    new SampleCode(this);
  }
}
