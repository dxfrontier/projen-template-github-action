import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { GitHubActionProject, GitHubActionProjectOptions } from '../src';

describe('GitHubActionProject', (): void => {
  let props: GitHubActionProjectOptions;
  let snapshot: SynthOutput;

  beforeEach((): void => {
    props = {
      name: 'my-github-action',
      defaultReleaseBranch: 'main',
    };

    snapshot = [];
  });

  test('Project name is set properly', (): void => {
    // GIVEN
    const project = new GitHubActionProject(props);

    // WHEN
    snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['package.json']!.name).toBe(
      'my-github-action',
    );
  });

});