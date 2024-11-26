import { SynthOutput } from 'projen/lib/util/synth';

/**
 * Validates that ignore patterns matches expected content.
 * @param snapshot Synthesized project output.
 * @param additionalPatterns List of additional file patterns to test for.
 */
export function testIgnore(snapshot: SynthOutput, additionalPatterns: string[] = []): void {
  const gitignoreLines: string = snapshot['.gitignore'].split('\n').map((line: string): string => line.trim());

  additionalPatterns.forEach((pattern: string): void => {
    expect(gitignoreLines).toContain(pattern);
  });
}
