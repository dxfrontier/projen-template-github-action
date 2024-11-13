import { SynthOutput } from 'projen/lib/util/synth';
import { TaskSteps } from '../src/types';

/**
 * Validates that npm scripts are added correctly by comparing the snapshot of tasks.json with expected tasks and steps.
 */
export function testNpmScriptsAddedProperly(snapshot: SynthOutput, expectedTasks: TaskSteps): void {
  const tasks: Record<string, any> = snapshot['.projen/tasks.json'].tasks;
  for (const [name, steps] of Object.entries(expectedTasks)) {
    expect(tasks).toHaveProperty(name);
    steps.forEach((step: string, index: number): void => {
      expect(tasks[name].steps[index].exec).toBe(step);
    });
  }
}
