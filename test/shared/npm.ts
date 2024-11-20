import { SynthOutput } from 'projen/lib/util/synth';
import * as common from './common';

/**
 * Validates that files property in package.json is set properly.
 * @param snapshot Synthesized project output.
 * @param additionalPatterns List of additional file patterns to test for.
 */
export function testPackageJsonFiles(snapshot: SynthOutput, additionalPatterns: string[] = []): void {
  const standardPatterns: string[] = ['README.md', 'LICENSE'];
  const patterns: string[] = [...standardPatterns, ...additionalPatterns];
  expect(snapshot['package.json']!.files.sort()).toEqual(patterns.sort());
}

/**
 * Validates that project related files are added to .gitattributes and defined as linguist-generated.
 * @param snapshot Synthesized project output.
 * @param expectedPatterns List of expected file patterns to test for.
 */
export function testGitAttributes(snapshot: SynthOutput, expectedPatterns: RegExp[] = []): void {
  const standardPatterns: RegExp[] = [
    /\/\.eslintrc\.json linguist-generated( $|\s|$)/m,
    /\/tsconfig\.dev\.json linguist-generated( $|\s|$)/m,
    /\/tsconfig\.json linguist-generated( $|\s|$)/m,
  ];

  const patterns: RegExp[] = expectedPatterns.length ? expectedPatterns : standardPatterns;
  common.testGitAttributes(snapshot, patterns);
}
