import { JsonFile, JsonFileOptions } from 'projen';
import { VsCodeLaunchConfigurationEntry } from 'projen/lib/vscode';
import { VsCodeBase, TypeScriptProjectBase } from '../base';

/**
 * VsCode builder implementing all relevant configuration for the project.
 */
export class VsCode extends VsCodeBase {
  /**
   * Initializes the VsCode builder.
   * It calls the `initialize()` method immediately after invoking `super(project)`
   * to ensure that all necessary configuration steps are applied.
   * @param project The project to configure VsCode Package for.
   */
  constructor(project: TypeScriptProjectBase) {
    super(project);
    this.initialize();
  }

  /**
   * File path to the VsCode launch configuration.
   * @return File path to launch file.
   * @protected
   */
  protected get launchFilePath(): string {
    return '.vscode/launch.json';
  }
  /**
   * File path to the VsCode tasks configuration.
   * @return File path to tasks file.
   * @protected
   */
  protected get tasksFilePath(): string {
    return '.vscode/tasks.json';
  }

  /**
   * Settings to be installed in VsCode.
   * @return Entries for the launch file.
   * @protected
   */
  protected get launch(): VsCodeLaunchConfigurationEntry {
    return {
      // address: '127.0.0.1', // typing says, not allowed - do not know what to do with them
      // localRoot: '${workspaceFolder}',
      // remoteRoot: '/home/vcap/app',
      name: 'Attach to Remote',
      port: 9229,
      request: 'attach',
      skipFiles: ['<node_internals>/**'],
      type: 'node',
    };
  }

  /**
   * Template file for VsCode tasks config.
   * @return Template for the config file.
   * @protected
   */
  protected get tasksTemplate(): JsonFileOptions {
    return {
      omitEmpty: true,
      allowComments: true,
      obj: {
        version: '2.0.0',
        tasks: [
          {
            type: 'shell',
            label: 'cds watch',
            command: 'cds',
            args: ['watch'],
            group: {
              kind: 'build',
              isDefault: true,
            },
          },
          {
            type: 'shell',
            label: 'cds serve',
            command: 'cds',
            args: ['serve', '--with-mocks', '--in-memory?'],
          },
        ],
      },
    };
  }

  /**
   * @override
   */
  protected addTemplates(): void {
    new JsonFile(this.project, this.tasksFilePath, this.tasksTemplate);
  }

  /**
   * @override
   */
  protected addSettings(): void {
    super.addSettings();
    this.project.vscode?.launchConfiguration.addConfiguration(this.launch);
  }
}
