import { SynthOutput } from 'projen/lib/util/synth';
import * as common from './common';
import { TaskSteps } from '../../src/types';

/**
 * Validates that commit-msg hook matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testCommitMsgHook(snapshot: SynthOutput): void {
  const expectedTemplateLines: string = [
    '# Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
    '',
    'npx --no-install commitlint --edit "$1"',
  ].join('\n');
  expect(snapshot['.husky/commit-msg']).toStrictEqual(expectedTemplateLines);
}

/**
 * Validates that pre-commit hook matches expected template.
 * @param snapshot Synthesized project output.
 */
export function testPreCommitHook(snapshot: SynthOutput): void {
  const expectedTemplateLines: string = [
    '# Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
    '',
    'npx lint-staged',
  ].join('\n');
  expect(snapshot['.husky/pre-commit']).toStrictEqual(expectedTemplateLines);
}

/**
 * Validates that npm scripts are added properly.
 * @param snapshot Synthesized project output.
 */
export function testScripts(snapshot: SynthOutput): void {
  const expectedTasks: TaskSteps = {
    prepare: ['husky || true'],
  };
  common.testScripts(snapshot, expectedTasks);
}

/**
 * Validates that npm dev dependencies are added properly.
 * @param snapshot Synthesized project output.
 */
export function testDevDependencies(snapshot: SynthOutput): void {
  const expectedDevDependencies: string[] = ['husky'];
  common.testDevDependencies(snapshot, expectedDevDependencies);
}

/**
 * Validates that project related files are added to .gitattributes and defined as linguist-generated.
 * @param snapshot Synthesized project output.
 */
export function testGitAttributes(snapshot: SynthOutput): void {
  const patterns: RegExp[] = [
    /\/\.husky\/commit-msg linguist-generated( $|\s|$)/m,
    /\/\.husky\/pre-commit linguist-generated( $|\s|$)/m,
  ];

  common.testGitAttributes(snapshot, patterns);
}