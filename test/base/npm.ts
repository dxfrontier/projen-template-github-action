import { SynthOutput } from 'projen/lib/util/synth';
import * as common from './common';

/**
 * Validates that files property in package.json is set properly.
 * @param snapshot Synthesized project output.
 */
export function testPackageJsonFiles(snapshot: SynthOutput): void {
  const expectedFiles: string[] = ['lib', 'README.md', 'LICENSE', '.jsii'];
  expect(snapshot['package.json']!.files).toStrictEqual(expectedFiles);
}

/**
 * Validates that project related files are added to .gitattributes and defined as linguist-generated.
 * @param snapshot Synthesized project output.
 */
export function testGitAttributes(snapshot: SynthOutput): void {
  const patterns: RegExp[] = [
    /\/\.npmignore linguist-generated( $|\s|$)/m,
    /\/\.eslintrc\.json linguist-generated( $|\s|$)/m,
    /\/tsconfig\.dev\.json linguist-generated( $|\s|$)/m,
    /\/tsconfig\.json linguist-generated( $|\s|$)/m,
  ];

  common.testGitAttributes(snapshot, patterns);
}
