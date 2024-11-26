import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that ignore patterns matches expected content.
 * @param snapshot Synthesized project output.
 * @param additionalPatterns List of additional file patterns to test for.
 */
export function testIgnore(snapshot: SynthOutput, additionalPatterns: string[] = []): void {
  const standardPatterns: string[] = [
    '*.js',
    '*.d.ts',
    'node_modules/',
    '*.generated.ts',
    'coverage',
    '!.projenrc.ts',
    '!projenrc/**/*.ts',
  ];

  const ignorePatterns: string[] = snapshot['.eslintrc.json'].ignorePatterns;

  additionalPatterns.forEach((pattern: string): void => {
    expect(ignorePatterns).toContain(pattern);
  });

  const allExpectedPatterns: string[] = [...standardPatterns, ...additionalPatterns];
  expect(ignorePatterns).toHaveLength(allExpectedPatterns.length);
  expect(ignorePatterns).toEqual(expect.arrayContaining(allExpectedPatterns));
}
