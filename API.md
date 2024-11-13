# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitHubActionProject <a name="GitHubActionProject" id="projen-template-projects.GitHubActionProject"></a>

Defines a GitHub Action project.

#### Initializers <a name="Initializers" id="projen-template-projects.GitHubActionProject.Initializer"></a>

```typescript
import { GitHubActionProject } from 'projen-template-projects'

new GitHubActionProject(options: ProjectOptions)
```

| **Name**                                                                                                       | **Type**                                                                           | **Description**             |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------- |
| <code><a href="#projen-template-projects.GitHubActionProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen-template-projects.ProjectOptions">ProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-template-projects.GitHubActionProject.Initializer.parameter.options"></a>

- _Type:_ <a href="#projen-template-projects.ProjectOptions">ProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                                             | **Description**                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <code><a href="#projen-template-projects.GitHubActionProject.toString">toString</a></code>                           | Returns a string representation of this construct.                                       |
| <code><a href="#projen-template-projects.GitHubActionProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup.                                       |
| <code><a href="#projen-template-projects.GitHubActionProject.addGitIgnore">addGitIgnore</a></code>                   | Adds a .gitignore pattern.                                                               |
| <code><a href="#projen-template-projects.GitHubActionProject.addPackageIgnore">addPackageIgnore</a></code>           | Adds patterns to be ignored by npm.                                                      |
| <code><a href="#projen-template-projects.GitHubActionProject.addTask">addTask</a></code>                             | Adds a new task to this project.                                                         |
| <code><a href="#projen-template-projects.GitHubActionProject.addTip">addTip</a></code>                               | Prints a "tip" message during synthesis.                                                 |
| <code><a href="#projen-template-projects.GitHubActionProject.annotateGenerated">annotateGenerated</a></code>         | Marks the provided file(s) as being generated.                                           |
| <code><a href="#projen-template-projects.GitHubActionProject.postSynthesize">postSynthesize</a></code>               | Called after all components are synthesized.                                             |
| <code><a href="#projen-template-projects.GitHubActionProject.preSynthesize">preSynthesize</a></code>                 | Called before all components are synthesized.                                            |
| <code><a href="#projen-template-projects.GitHubActionProject.removeTask">removeTask</a></code>                       | Removes a task from a project.                                                           |
| <code><a href="#projen-template-projects.GitHubActionProject.runTaskCommand">runTaskCommand</a></code>               | Returns the shell command to execute in order to run a task.                             |
| <code><a href="#projen-template-projects.GitHubActionProject.synth">synth</a></code>                                 | Synthesize all project files into `outdir`.                                              |
| <code><a href="#projen-template-projects.GitHubActionProject.tryFindFile">tryFindFile</a></code>                     | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-template-projects.GitHubActionProject.tryFindJsonFile">tryFindJsonFile</a></code>             | Finds a json file by name.                                                               |
| <code><a href="#projen-template-projects.GitHubActionProject.tryFindObjectFile">tryFindObjectFile</a></code>         | Finds an object file (like JsonFile, YamlFile, etc.) by name.                            |
| <code><a href="#projen-template-projects.GitHubActionProject.tryRemoveFile">tryRemoveFile</a></code>                 | Finds a file at the specified relative path within this project and removes it.          |
| <code><a href="#projen-template-projects.GitHubActionProject.addBins">addBins</a></code>                             | _No description._                                                                        |
| <code><a href="#projen-template-projects.GitHubActionProject.addBundledDeps">addBundledDeps</a></code>               | Defines bundled dependencies.                                                            |
| <code><a href="#projen-template-projects.GitHubActionProject.addCompileCommand">addCompileCommand</a></code>         | DEPRECATED.                                                                              |
| <code><a href="#projen-template-projects.GitHubActionProject.addDeps">addDeps</a></code>                             | Defines normal dependencies.                                                             |
| <code><a href="#projen-template-projects.GitHubActionProject.addDevDeps">addDevDeps</a></code>                       | Defines development/test dependencies.                                                   |
| <code><a href="#projen-template-projects.GitHubActionProject.addFields">addFields</a></code>                         | Directly set fields in `package.json`.                                                   |
| <code><a href="#projen-template-projects.GitHubActionProject.addKeywords">addKeywords</a></code>                     | Adds keywords to package.json (deduplicated).                                            |
| <code><a href="#projen-template-projects.GitHubActionProject.addPeerDeps">addPeerDeps</a></code>                     | Defines peer dependencies.                                                               |
| <code><a href="#projen-template-projects.GitHubActionProject.addScripts">addScripts</a></code>                       | Replaces the contents of multiple npm package.json scripts.                              |
| <code><a href="#projen-template-projects.GitHubActionProject.addTestCommand">addTestCommand</a></code>               | DEPRECATED.                                                                              |
| <code><a href="#projen-template-projects.GitHubActionProject.hasScript">hasScript</a></code>                         | Indicates if a script by the name name is defined.                                       |
| <code><a href="#projen-template-projects.GitHubActionProject.removeScript">removeScript</a></code>                   | Removes the npm script (always successful).                                              |
| <code><a href="#projen-template-projects.GitHubActionProject.renderWorkflowSetup">renderWorkflowSetup</a></code>     | Returns the set of workflow steps which should be executed to bootstrap a workflow.      |
| <code><a href="#projen-template-projects.GitHubActionProject.setScript">setScript</a></code>                         | Replaces the contents of an npm package.json script.                                     |

---

##### `toString` <a name="toString" id="projen-template-projects.GitHubActionProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-template-projects.GitHubActionProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-template-projects.GitHubActionProject.addExcludeFromCleanup.parameter.globs"></a>

- _Type:_ ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-template-projects.GitHubActionProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-template-projects.GitHubActionProject.addGitIgnore.parameter.pattern"></a>

- _Type:_ string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-template-projects.GitHubActionProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-template-projects.GitHubActionProject.addPackageIgnore.parameter.pattern"></a>

- _Type:_ string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen-template-projects.GitHubActionProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.GitHubActionProject.addTask.parameter.name"></a>

- _Type:_ string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-template-projects.GitHubActionProject.addTask.parameter.props"></a>

- _Type:_ projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-template-projects.GitHubActionProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-template-projects.GitHubActionProject.addTip.parameter.message"></a>

- _Type:_ string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-template-projects.GitHubActionProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-template-projects.GitHubActionProject.annotateGenerated.parameter.glob"></a>

- _Type:_ string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-template-projects.GitHubActionProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is _not_ guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-template-projects.GitHubActionProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-template-projects.GitHubActionProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.GitHubActionProject.removeTask.parameter.name"></a>

- _Type:_ string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-template-projects.GitHubActionProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-template-projects.GitHubActionProject.runTaskCommand.parameter.task"></a>

- _Type:_ projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-template-projects.GitHubActionProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-template-projects.GitHubActionProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-template-projects.GitHubActionProject.tryFindFile.parameter.filePath"></a>

- _Type:_ string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-template-projects.GitHubActionProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-template-projects.GitHubActionProject.tryFindJsonFile.parameter.filePath"></a>

- _Type:_ string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-template-projects.GitHubActionProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-template-projects.GitHubActionProject.tryFindObjectFile.parameter.filePath"></a>

- _Type:_ string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-template-projects.GitHubActionProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-template-projects.GitHubActionProject.tryRemoveFile.parameter.filePath"></a>

- _Type:_ string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-template-projects.GitHubActionProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-template-projects.GitHubActionProject.addBins.parameter.bins"></a>

- _Type:_ {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-template-projects.GitHubActionProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.GitHubActionProject.addBundledDeps.parameter.deps"></a>

- _Type:_ ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-template-projects.GitHubActionProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-template-projects.GitHubActionProject.addCompileCommand.parameter.commands"></a>

- _Type:_ ...string[]

---

##### `addDeps` <a name="addDeps" id="projen-template-projects.GitHubActionProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.GitHubActionProject.addDeps.parameter.deps"></a>

- _Type:_ ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-template-projects.GitHubActionProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.GitHubActionProject.addDevDeps.parameter.deps"></a>

- _Type:_ ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-template-projects.GitHubActionProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-template-projects.GitHubActionProject.addFields.parameter.fields"></a>

- _Type:_ {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-template-projects.GitHubActionProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-template-projects.GitHubActionProject.addKeywords.parameter.keywords"></a>

- _Type:_ ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-template-projects.GitHubActionProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.GitHubActionProject.addPeerDeps.parameter.deps"></a>

- _Type:_ ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen-template-projects.GitHubActionProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen-template-projects.GitHubActionProject.addScripts.parameter.scripts"></a>

- _Type:_ {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-template-projects.GitHubActionProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-template-projects.GitHubActionProject.addTestCommand.parameter.commands"></a>

- _Type:_ ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen-template-projects.GitHubActionProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.GitHubActionProject.hasScript.parameter.name"></a>

- _Type:_ string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-template-projects.GitHubActionProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.GitHubActionProject.removeScript.parameter.name"></a>

- _Type:_ string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-template-projects.GitHubActionProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-template-projects.GitHubActionProject.renderWorkflowSetup.parameter.options"></a>

- _Type:_ projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-template-projects.GitHubActionProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.GitHubActionProject.setScript.parameter.name"></a>

- _Type:_ string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-template-projects.GitHubActionProject.setScript.parameter.command"></a>

- _Type:_ string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                                         | **Description**                                        |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| <code><a href="#projen-template-projects.GitHubActionProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct.                          |
| <code><a href="#projen-template-projects.GitHubActionProject.isProject">isProject</a></code>     | Test whether the given construct is a project.         |
| <code><a href="#projen-template-projects.GitHubActionProject.of">of</a></code>                   | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-template-projects.GitHubActionProject.isConstruct"></a>

```typescript
import { GitHubActionProject } from 'projen-template-projects'

GitHubActionProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-template-projects.GitHubActionProject.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

##### `isProject` <a name="isProject" id="projen-template-projects.GitHubActionProject.isProject"></a>

```typescript
import { GitHubActionProject } from 'projen-template-projects'

GitHubActionProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-template-projects.GitHubActionProject.isProject.parameter.x"></a>

- _Type:_ any

---

##### `of` <a name="of" id="projen-template-projects.GitHubActionProject.of"></a>

```typescript
import { GitHubActionProject } from 'projen-template-projects'

GitHubActionProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-template-projects.GitHubActionProject.of.parameter.construct"></a>

- _Type:_ constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                    | **Type**                                           | **Description**                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <code><a href="#projen-template-projects.GitHubActionProject.property.node">node</a></code>                                                 | <code>constructs.Node</code>                       | The tree node.                                                                                   |
| <code><a href="#projen-template-projects.GitHubActionProject.property.buildTask">buildTask</a></code>                                       | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.commitGenerated">commitGenerated</a></code>                           | <code>boolean</code>                               | Whether to commit the managed files by default.                                                  |
| <code><a href="#projen-template-projects.GitHubActionProject.property.compileTask">compileTask</a></code>                                   | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.components">components</a></code>                                     | <code>projen.Component[]</code>                    | Returns all the components within this project.                                                  |
| <code><a href="#projen-template-projects.GitHubActionProject.property.deps">deps</a></code>                                                 | <code>projen.Dependencies</code>                   | Project dependencies.                                                                            |
| <code><a href="#projen-template-projects.GitHubActionProject.property.ejected">ejected</a></code>                                           | <code>boolean</code>                               | Whether or not the project is being ejected.                                                     |
| <code><a href="#projen-template-projects.GitHubActionProject.property.files">files</a></code>                                               | <code>projen.FileBase[]</code>                     | All files in this project.                                                                       |
| <code><a href="#projen-template-projects.GitHubActionProject.property.gitattributes">gitattributes</a></code>                               | <code>projen.GitAttributesFile</code>              | The .gitattributes file for this repository.                                                     |
| <code><a href="#projen-template-projects.GitHubActionProject.property.gitignore">gitignore</a></code>                                       | <code>projen.IgnoreFile</code>                     | .gitignore.                                                                                      |
| <code><a href="#projen-template-projects.GitHubActionProject.property.logger">logger</a></code>                                             | <code>projen.Logger</code>                         | Logging utilities.                                                                               |
| <code><a href="#projen-template-projects.GitHubActionProject.property.name">name</a></code>                                                 | <code>string</code>                                | Project name.                                                                                    |
| <code><a href="#projen-template-projects.GitHubActionProject.property.outdir">outdir</a></code>                                             | <code>string</code>                                | Absolute output directory of this project.                                                       |
| <code><a href="#projen-template-projects.GitHubActionProject.property.packageTask">packageTask</a></code>                                   | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.postCompileTask">postCompileTask</a></code>                           | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.preCompileTask">preCompileTask</a></code>                             | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.projectBuild">projectBuild</a></code>                                 | <code>projen.ProjectBuild</code>                   | Manages the build process of the project.                                                        |
| <code><a href="#projen-template-projects.GitHubActionProject.property.projenCommand">projenCommand</a></code>                               | <code>string</code>                                | The command to use in order to run the projen CLI.                                               |
| <code><a href="#projen-template-projects.GitHubActionProject.property.root">root</a></code>                                                 | <code>projen.Project</code>                        | The root project.                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.subprojects">subprojects</a></code>                                   | <code>projen.Project[]</code>                      | Returns all the subprojects within this project.                                                 |
| <code><a href="#projen-template-projects.GitHubActionProject.property.tasks">tasks</a></code>                                               | <code>projen.Tasks</code>                          | Project tasks.                                                                                   |
| <code><a href="#projen-template-projects.GitHubActionProject.property.testTask">testTask</a></code>                                         | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.defaultTask">defaultTask</a></code>                                   | <code>projen.Task</code>                           | This is the "default" task, the one that executes "projen".                                      |
| <code><a href="#projen-template-projects.GitHubActionProject.property.initProject">initProject</a></code>                                   | <code>projen.InitProject</code>                    | The options used when this project is bootstrapped via `projen new`.                             |
| <code><a href="#projen-template-projects.GitHubActionProject.property.parent">parent</a></code>                                             | <code>projen.Project</code>                        | A parent project.                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.projectType">projectType</a></code>                                   | <code>projen.ProjectType</code>                    | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.autoApprove">autoApprove</a></code>                                   | <code>projen.github.AutoApprove</code>             | Auto approve set up for this project.                                                            |
| <code><a href="#projen-template-projects.GitHubActionProject.property.devContainer">devContainer</a></code>                                 | <code>projen.vscode.DevContainer</code>            | Access for .devcontainer.json (used for GitHub Codespaces).                                      |
| <code><a href="#projen-template-projects.GitHubActionProject.property.github">github</a></code>                                             | <code>projen.github.GitHub</code>                  | Access all github components.                                                                    |
| <code><a href="#projen-template-projects.GitHubActionProject.property.gitpod">gitpod</a></code>                                             | <code>projen.Gitpod</code>                         | Access for Gitpod.                                                                               |
| <code><a href="#projen-template-projects.GitHubActionProject.property.vscode">vscode</a></code>                                             | <code>projen.vscode.VsCode</code>                  | Access all VSCode components.                                                                    |
| <code><a href="#projen-template-projects.GitHubActionProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code>         | <code>boolean</code>                               | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.artifactsDirectory">artifactsDirectory</a></code>                     | <code>string</code>                                | The build output directory.                                                                      |
| <code><a href="#projen-template-projects.GitHubActionProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code>                                | The location of the npm tarball after build (`${artifactsDirectory}/js`).                        |
| <code><a href="#projen-template-projects.GitHubActionProject.property.bundler">bundler</a></code>                                           | <code>projen.javascript.Bundler</code>             | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.entrypoint">entrypoint</a></code>                                     | <code>string</code>                                | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.manifest">manifest</a></code>                                         | <code>any</code>                                   | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.npmrc">npmrc</a></code>                                               | <code>projen.javascript.NpmConfig</code>           | The .npmrc file.                                                                                 |
| <code><a href="#projen-template-projects.GitHubActionProject.property.package">package</a></code>                                           | <code>projen.javascript.NodePackage</code>         | API for managing the node package.                                                               |
| <code><a href="#projen-template-projects.GitHubActionProject.property.packageManager">packageManager</a></code>                             | <code>projen.javascript.NodePackageManager</code>  | The package manager to use.                                                                      |
| <code><a href="#projen-template-projects.GitHubActionProject.property.runScriptCommand">runScriptCommand</a></code>                         | <code>string</code>                                | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-template-projects.GitHubActionProject.property.autoMerge">autoMerge</a></code>                                       | <code>projen.github.AutoMerge</code>               | Component that sets up mergify for merging approved pull requests.                               |
| <code><a href="#projen-template-projects.GitHubActionProject.property.buildWorkflow">buildWorkflow</a></code>                               | <code>projen.build.BuildWorkflow</code>            | The PR build GitHub workflow.                                                                    |
| <code><a href="#projen-template-projects.GitHubActionProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code>                     | <code>string</code>                                | The job ID of the build workflow.                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.jest">jest</a></code>                                                 | <code>projen.javascript.Jest</code>                | The Jest configuration (if enabled).                                                             |
| <code><a href="#projen-template-projects.GitHubActionProject.property.maxNodeVersion">maxNodeVersion</a></code>                             | <code>string</code>                                | Maximum node version supported by this package.                                                  |
| <code><a href="#projen-template-projects.GitHubActionProject.property.minNodeVersion">minNodeVersion</a></code>                             | <code>string</code>                                | The minimum node version required by this package to function.                                   |
| <code><a href="#projen-template-projects.GitHubActionProject.property.npmignore">npmignore</a></code>                                       | <code>projen.IgnoreFile</code>                     | The .npmignore file.                                                                             |
| <code><a href="#projen-template-projects.GitHubActionProject.property.prettier">prettier</a></code>                                         | <code>projen.javascript.Prettier</code>            | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.publisher">publisher</a></code>                                       | <code>projen.release.Publisher</code>              | Package publisher.                                                                               |
| <code><a href="#projen-template-projects.GitHubActionProject.property.release">release</a></code>                                           | <code>projen.release.Release</code>                | Release management.                                                                              |
| <code><a href="#projen-template-projects.GitHubActionProject.property.upgradeWorkflow">upgradeWorkflow</a></code>                           | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow.                                                                            |
| <code><a href="#projen-template-projects.GitHubActionProject.property.docsDirectory">docsDirectory</a></code>                               | <code>string</code>                                | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.libdir">libdir</a></code>                                             | <code>string</code>                                | The directory in which compiled .js files reside.                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.srcdir">srcdir</a></code>                                             | <code>string</code>                                | The directory in which the .ts sources reside.                                                   |
| <code><a href="#projen-template-projects.GitHubActionProject.property.testdir">testdir</a></code>                                           | <code>string</code>                                | The directory in which tests reside.                                                             |
| <code><a href="#projen-template-projects.GitHubActionProject.property.tsconfigDev">tsconfigDev</a></code>                                   | <code>projen.javascript.TypescriptConfig</code>    | A typescript configuration file which covers all files (sources, tests, projen).                 |
| <code><a href="#projen-template-projects.GitHubActionProject.property.watchTask">watchTask</a></code>                                       | <code>projen.Task</code>                           | The "watch" task.                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.docgen">docgen</a></code>                                             | <code>boolean</code>                               | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.eslint">eslint</a></code>                                             | <code>projen.javascript.Eslint</code>              | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.tsconfig">tsconfig</a></code>                                         | <code>projen.javascript.TypescriptConfig</code>    | _No description._                                                                                |
| <code><a href="#projen-template-projects.GitHubActionProject.property.tsconfigEslint">tsconfigEslint</a></code>                             | <code>projen.javascript.TypescriptConfig</code>    | _No description._                                                                                |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-template-projects.GitHubActionProject.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-template-projects.GitHubActionProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- _Type:_ projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-template-projects.GitHubActionProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- _Type:_ boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-template-projects.GitHubActionProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- _Type:_ projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-template-projects.GitHubActionProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- _Type:_ projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.GitHubActionProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- _Type:_ projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-template-projects.GitHubActionProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- _Type:_ boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-template-projects.GitHubActionProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- _Type:_ projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-template-projects.GitHubActionProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- _Type:_ projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-template-projects.GitHubActionProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- _Type:_ projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-template-projects.GitHubActionProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- _Type:_ projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.GitHubActionProject.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-template-projects.GitHubActionProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- _Type:_ string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-template-projects.GitHubActionProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- _Type:_ projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-template-projects.GitHubActionProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- _Type:_ projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-template-projects.GitHubActionProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- _Type:_ projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-template-projects.GitHubActionProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- _Type:_ projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-template-projects.GitHubActionProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- _Type:_ string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-template-projects.GitHubActionProject.property.root"></a>

```typescript
public readonly root: Project;
```

- _Type:_ projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-template-projects.GitHubActionProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- _Type:_ projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-template-projects.GitHubActionProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- _Type:_ projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-template-projects.GitHubActionProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- _Type:_ projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-template-projects.GitHubActionProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- _Type:_ projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-template-projects.GitHubActionProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- _Type:_ projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-template-projects.GitHubActionProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- _Type:_ projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-template-projects.GitHubActionProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- _Type:_ projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-template-projects.GitHubActionProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- _Type:_ projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-template-projects.GitHubActionProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- _Type:_ projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-template-projects.GitHubActionProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- _Type:_ projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-template-projects.GitHubActionProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- _Type:_ projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-template-projects.GitHubActionProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- _Type:_ projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-template-projects.GitHubActionProject.property.allowLibraryDependencies"></a>

- _Deprecated:_ use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- _Type:_ boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-template-projects.GitHubActionProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- _Type:_ string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-template-projects.GitHubActionProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- _Type:_ string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-template-projects.GitHubActionProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- _Type:_ projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-template-projects.GitHubActionProject.property.entrypoint"></a>

- _Deprecated:_ use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- _Type:_ string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-template-projects.GitHubActionProject.property.manifest"></a>

- _Deprecated:_ use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- _Type:_ any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen-template-projects.GitHubActionProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- _Type:_ projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen-template-projects.GitHubActionProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- _Type:_ projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-template-projects.GitHubActionProject.property.packageManager"></a>

- _Deprecated:_ use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- _Type:_ projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-template-projects.GitHubActionProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- _Type:_ string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-template-projects.GitHubActionProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- _Type:_ projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-template-projects.GitHubActionProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- _Type:_ projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-template-projects.GitHubActionProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- _Type:_ string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-template-projects.GitHubActionProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- _Type:_ projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-template-projects.GitHubActionProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- _Type:_ string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-template-projects.GitHubActionProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- _Type:_ string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-template-projects.GitHubActionProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- _Type:_ projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-template-projects.GitHubActionProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- _Type:_ projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-template-projects.GitHubActionProject.property.publisher"></a>

- _Deprecated:_ use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- _Type:_ projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-template-projects.GitHubActionProject.property.release"></a>

```typescript
public readonly release: Release;
```

- _Type:_ projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-template-projects.GitHubActionProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- _Type:_ projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-template-projects.GitHubActionProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- _Type:_ string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-template-projects.GitHubActionProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- _Type:_ string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-template-projects.GitHubActionProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- _Type:_ string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-template-projects.GitHubActionProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- _Type:_ string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-template-projects.GitHubActionProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-template-projects.GitHubActionProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- _Type:_ projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-template-projects.GitHubActionProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- _Type:_ boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-template-projects.GitHubActionProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- _Type:_ projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-template-projects.GitHubActionProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-template-projects.GitHubActionProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name**                                                                                                                                            | **Type**            | **Description**                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| <code><a href="#projen-template-projects.GitHubActionProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code>                                         | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen-template-projects.GitHubActionProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | _No description._                                                                        |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-template-projects.GitHubActionProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- _Type:_ string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen-template-projects.GitHubActionProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- _Type:_ string

---

### Project <a name="Project" id="projen-template-projects.Project"></a>

Base class for managing project configuration.

#### Initializers <a name="Initializers" id="projen-template-projects.Project.Initializer"></a>

```typescript
import { Project } from 'projen-template-projects'

new Project(options: ProjectOptions)
```

| **Name**                                                                                           | **Type**                                                                           | **Description**             |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------- |
| <code><a href="#projen-template-projects.Project.Initializer.parameter.options">options</a></code> | <code><a href="#projen-template-projects.ProjectOptions">ProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-template-projects.Project.Initializer.parameter.options"></a>

- _Type:_ <a href="#projen-template-projects.ProjectOptions">ProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                                 | **Description**                                                                          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <code><a href="#projen-template-projects.Project.toString">toString</a></code>                           | Returns a string representation of this construct.                                       |
| <code><a href="#projen-template-projects.Project.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup.                                       |
| <code><a href="#projen-template-projects.Project.addGitIgnore">addGitIgnore</a></code>                   | Adds a .gitignore pattern.                                                               |
| <code><a href="#projen-template-projects.Project.addPackageIgnore">addPackageIgnore</a></code>           | Adds patterns to be ignored by npm.                                                      |
| <code><a href="#projen-template-projects.Project.addTask">addTask</a></code>                             | Adds a new task to this project.                                                         |
| <code><a href="#projen-template-projects.Project.addTip">addTip</a></code>                               | Prints a "tip" message during synthesis.                                                 |
| <code><a href="#projen-template-projects.Project.annotateGenerated">annotateGenerated</a></code>         | Marks the provided file(s) as being generated.                                           |
| <code><a href="#projen-template-projects.Project.postSynthesize">postSynthesize</a></code>               | Called after all components are synthesized.                                             |
| <code><a href="#projen-template-projects.Project.preSynthesize">preSynthesize</a></code>                 | Called before all components are synthesized.                                            |
| <code><a href="#projen-template-projects.Project.removeTask">removeTask</a></code>                       | Removes a task from a project.                                                           |
| <code><a href="#projen-template-projects.Project.runTaskCommand">runTaskCommand</a></code>               | Returns the shell command to execute in order to run a task.                             |
| <code><a href="#projen-template-projects.Project.synth">synth</a></code>                                 | Synthesize all project files into `outdir`.                                              |
| <code><a href="#projen-template-projects.Project.tryFindFile">tryFindFile</a></code>                     | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-template-projects.Project.tryFindJsonFile">tryFindJsonFile</a></code>             | Finds a json file by name.                                                               |
| <code><a href="#projen-template-projects.Project.tryFindObjectFile">tryFindObjectFile</a></code>         | Finds an object file (like JsonFile, YamlFile, etc.) by name.                            |
| <code><a href="#projen-template-projects.Project.tryRemoveFile">tryRemoveFile</a></code>                 | Finds a file at the specified relative path within this project and removes it.          |
| <code><a href="#projen-template-projects.Project.addBins">addBins</a></code>                             | _No description._                                                                        |
| <code><a href="#projen-template-projects.Project.addBundledDeps">addBundledDeps</a></code>               | Defines bundled dependencies.                                                            |
| <code><a href="#projen-template-projects.Project.addCompileCommand">addCompileCommand</a></code>         | DEPRECATED.                                                                              |
| <code><a href="#projen-template-projects.Project.addDeps">addDeps</a></code>                             | Defines normal dependencies.                                                             |
| <code><a href="#projen-template-projects.Project.addDevDeps">addDevDeps</a></code>                       | Defines development/test dependencies.                                                   |
| <code><a href="#projen-template-projects.Project.addFields">addFields</a></code>                         | Directly set fields in `package.json`.                                                   |
| <code><a href="#projen-template-projects.Project.addKeywords">addKeywords</a></code>                     | Adds keywords to package.json (deduplicated).                                            |
| <code><a href="#projen-template-projects.Project.addPeerDeps">addPeerDeps</a></code>                     | Defines peer dependencies.                                                               |
| <code><a href="#projen-template-projects.Project.addScripts">addScripts</a></code>                       | Replaces the contents of multiple npm package.json scripts.                              |
| <code><a href="#projen-template-projects.Project.addTestCommand">addTestCommand</a></code>               | DEPRECATED.                                                                              |
| <code><a href="#projen-template-projects.Project.hasScript">hasScript</a></code>                         | Indicates if a script by the name name is defined.                                       |
| <code><a href="#projen-template-projects.Project.removeScript">removeScript</a></code>                   | Removes the npm script (always successful).                                              |
| <code><a href="#projen-template-projects.Project.renderWorkflowSetup">renderWorkflowSetup</a></code>     | Returns the set of workflow steps which should be executed to bootstrap a workflow.      |
| <code><a href="#projen-template-projects.Project.setScript">setScript</a></code>                         | Replaces the contents of an npm package.json script.                                     |

---

##### `toString` <a name="toString" id="projen-template-projects.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-template-projects.Project.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-template-projects.Project.addExcludeFromCleanup.parameter.globs"></a>

- _Type:_ ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-template-projects.Project.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-template-projects.Project.addGitIgnore.parameter.pattern"></a>

- _Type:_ string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-template-projects.Project.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-template-projects.Project.addPackageIgnore.parameter.pattern"></a>

- _Type:_ string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen-template-projects.Project.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.Project.addTask.parameter.name"></a>

- _Type:_ string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-template-projects.Project.addTask.parameter.props"></a>

- _Type:_ projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-template-projects.Project.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-template-projects.Project.addTip.parameter.message"></a>

- _Type:_ string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-template-projects.Project.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-template-projects.Project.annotateGenerated.parameter.glob"></a>

- _Type:_ string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-template-projects.Project.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is _not_ guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-template-projects.Project.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-template-projects.Project.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.Project.removeTask.parameter.name"></a>

- _Type:_ string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-template-projects.Project.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-template-projects.Project.runTaskCommand.parameter.task"></a>

- _Type:_ projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-template-projects.Project.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-template-projects.Project.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-template-projects.Project.tryFindFile.parameter.filePath"></a>

- _Type:_ string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-template-projects.Project.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-template-projects.Project.tryFindJsonFile.parameter.filePath"></a>

- _Type:_ string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-template-projects.Project.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-template-projects.Project.tryFindObjectFile.parameter.filePath"></a>

- _Type:_ string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-template-projects.Project.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-template-projects.Project.tryRemoveFile.parameter.filePath"></a>

- _Type:_ string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-template-projects.Project.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-template-projects.Project.addBins.parameter.bins"></a>

- _Type:_ {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-template-projects.Project.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.Project.addBundledDeps.parameter.deps"></a>

- _Type:_ ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-template-projects.Project.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-template-projects.Project.addCompileCommand.parameter.commands"></a>

- _Type:_ ...string[]

---

##### `addDeps` <a name="addDeps" id="projen-template-projects.Project.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.Project.addDeps.parameter.deps"></a>

- _Type:_ ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-template-projects.Project.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.Project.addDevDeps.parameter.deps"></a>

- _Type:_ ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-template-projects.Project.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-template-projects.Project.addFields.parameter.fields"></a>

- _Type:_ {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-template-projects.Project.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-template-projects.Project.addKeywords.parameter.keywords"></a>

- _Type:_ ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-template-projects.Project.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.Project.addPeerDeps.parameter.deps"></a>

- _Type:_ ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen-template-projects.Project.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen-template-projects.Project.addScripts.parameter.scripts"></a>

- _Type:_ {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-template-projects.Project.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-template-projects.Project.addTestCommand.parameter.commands"></a>

- _Type:_ ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen-template-projects.Project.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.Project.hasScript.parameter.name"></a>

- _Type:_ string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-template-projects.Project.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.Project.removeScript.parameter.name"></a>

- _Type:_ string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-template-projects.Project.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-template-projects.Project.renderWorkflowSetup.parameter.options"></a>

- _Type:_ projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-template-projects.Project.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.Project.setScript.parameter.name"></a>

- _Type:_ string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-template-projects.Project.setScript.parameter.command"></a>

- _Type:_ string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                             | **Description**                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| <code><a href="#projen-template-projects.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct.                          |
| <code><a href="#projen-template-projects.Project.isProject">isProject</a></code>     | Test whether the given construct is a project.         |
| <code><a href="#projen-template-projects.Project.of">of</a></code>                   | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-template-projects.Project.isConstruct"></a>

```typescript
import { Project } from 'projen-template-projects'

Project.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-template-projects.Project.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

##### `isProject` <a name="isProject" id="projen-template-projects.Project.isProject"></a>

```typescript
import { Project } from 'projen-template-projects'

Project.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-template-projects.Project.isProject.parameter.x"></a>

- _Type:_ any

---

##### `of` <a name="of" id="projen-template-projects.Project.of"></a>

```typescript
import { Project } from 'projen-template-projects'

Project.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-template-projects.Project.of.parameter.construct"></a>

- _Type:_ constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                        | **Type**                                           | **Description**                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <code><a href="#projen-template-projects.Project.property.node">node</a></code>                                                 | <code>constructs.Node</code>                       | The tree node.                                                                                   |
| <code><a href="#projen-template-projects.Project.property.buildTask">buildTask</a></code>                                       | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.commitGenerated">commitGenerated</a></code>                           | <code>boolean</code>                               | Whether to commit the managed files by default.                                                  |
| <code><a href="#projen-template-projects.Project.property.compileTask">compileTask</a></code>                                   | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.components">components</a></code>                                     | <code>projen.Component[]</code>                    | Returns all the components within this project.                                                  |
| <code><a href="#projen-template-projects.Project.property.deps">deps</a></code>                                                 | <code>projen.Dependencies</code>                   | Project dependencies.                                                                            |
| <code><a href="#projen-template-projects.Project.property.ejected">ejected</a></code>                                           | <code>boolean</code>                               | Whether or not the project is being ejected.                                                     |
| <code><a href="#projen-template-projects.Project.property.files">files</a></code>                                               | <code>projen.FileBase[]</code>                     | All files in this project.                                                                       |
| <code><a href="#projen-template-projects.Project.property.gitattributes">gitattributes</a></code>                               | <code>projen.GitAttributesFile</code>              | The .gitattributes file for this repository.                                                     |
| <code><a href="#projen-template-projects.Project.property.gitignore">gitignore</a></code>                                       | <code>projen.IgnoreFile</code>                     | .gitignore.                                                                                      |
| <code><a href="#projen-template-projects.Project.property.logger">logger</a></code>                                             | <code>projen.Logger</code>                         | Logging utilities.                                                                               |
| <code><a href="#projen-template-projects.Project.property.name">name</a></code>                                                 | <code>string</code>                                | Project name.                                                                                    |
| <code><a href="#projen-template-projects.Project.property.outdir">outdir</a></code>                                             | <code>string</code>                                | Absolute output directory of this project.                                                       |
| <code><a href="#projen-template-projects.Project.property.packageTask">packageTask</a></code>                                   | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.postCompileTask">postCompileTask</a></code>                           | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.preCompileTask">preCompileTask</a></code>                             | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.projectBuild">projectBuild</a></code>                                 | <code>projen.ProjectBuild</code>                   | Manages the build process of the project.                                                        |
| <code><a href="#projen-template-projects.Project.property.projenCommand">projenCommand</a></code>                               | <code>string</code>                                | The command to use in order to run the projen CLI.                                               |
| <code><a href="#projen-template-projects.Project.property.root">root</a></code>                                                 | <code>projen.Project</code>                        | The root project.                                                                                |
| <code><a href="#projen-template-projects.Project.property.subprojects">subprojects</a></code>                                   | <code>projen.Project[]</code>                      | Returns all the subprojects within this project.                                                 |
| <code><a href="#projen-template-projects.Project.property.tasks">tasks</a></code>                                               | <code>projen.Tasks</code>                          | Project tasks.                                                                                   |
| <code><a href="#projen-template-projects.Project.property.testTask">testTask</a></code>                                         | <code>projen.Task</code>                           | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.defaultTask">defaultTask</a></code>                                   | <code>projen.Task</code>                           | This is the "default" task, the one that executes "projen".                                      |
| <code><a href="#projen-template-projects.Project.property.initProject">initProject</a></code>                                   | <code>projen.InitProject</code>                    | The options used when this project is bootstrapped via `projen new`.                             |
| <code><a href="#projen-template-projects.Project.property.parent">parent</a></code>                                             | <code>projen.Project</code>                        | A parent project.                                                                                |
| <code><a href="#projen-template-projects.Project.property.projectType">projectType</a></code>                                   | <code>projen.ProjectType</code>                    | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.autoApprove">autoApprove</a></code>                                   | <code>projen.github.AutoApprove</code>             | Auto approve set up for this project.                                                            |
| <code><a href="#projen-template-projects.Project.property.devContainer">devContainer</a></code>                                 | <code>projen.vscode.DevContainer</code>            | Access for .devcontainer.json (used for GitHub Codespaces).                                      |
| <code><a href="#projen-template-projects.Project.property.github">github</a></code>                                             | <code>projen.github.GitHub</code>                  | Access all github components.                                                                    |
| <code><a href="#projen-template-projects.Project.property.gitpod">gitpod</a></code>                                             | <code>projen.Gitpod</code>                         | Access for Gitpod.                                                                               |
| <code><a href="#projen-template-projects.Project.property.vscode">vscode</a></code>                                             | <code>projen.vscode.VsCode</code>                  | Access all VSCode components.                                                                    |
| <code><a href="#projen-template-projects.Project.property.allowLibraryDependencies">allowLibraryDependencies</a></code>         | <code>boolean</code>                               | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.artifactsDirectory">artifactsDirectory</a></code>                     | <code>string</code>                                | The build output directory.                                                                      |
| <code><a href="#projen-template-projects.Project.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code>                                | The location of the npm tarball after build (`${artifactsDirectory}/js`).                        |
| <code><a href="#projen-template-projects.Project.property.bundler">bundler</a></code>                                           | <code>projen.javascript.Bundler</code>             | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.entrypoint">entrypoint</a></code>                                     | <code>string</code>                                | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.manifest">manifest</a></code>                                         | <code>any</code>                                   | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.npmrc">npmrc</a></code>                                               | <code>projen.javascript.NpmConfig</code>           | The .npmrc file.                                                                                 |
| <code><a href="#projen-template-projects.Project.property.package">package</a></code>                                           | <code>projen.javascript.NodePackage</code>         | API for managing the node package.                                                               |
| <code><a href="#projen-template-projects.Project.property.packageManager">packageManager</a></code>                             | <code>projen.javascript.NodePackageManager</code>  | The package manager to use.                                                                      |
| <code><a href="#projen-template-projects.Project.property.runScriptCommand">runScriptCommand</a></code>                         | <code>string</code>                                | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-template-projects.Project.property.autoMerge">autoMerge</a></code>                                       | <code>projen.github.AutoMerge</code>               | Component that sets up mergify for merging approved pull requests.                               |
| <code><a href="#projen-template-projects.Project.property.buildWorkflow">buildWorkflow</a></code>                               | <code>projen.build.BuildWorkflow</code>            | The PR build GitHub workflow.                                                                    |
| <code><a href="#projen-template-projects.Project.property.buildWorkflowJobId">buildWorkflowJobId</a></code>                     | <code>string</code>                                | The job ID of the build workflow.                                                                |
| <code><a href="#projen-template-projects.Project.property.jest">jest</a></code>                                                 | <code>projen.javascript.Jest</code>                | The Jest configuration (if enabled).                                                             |
| <code><a href="#projen-template-projects.Project.property.maxNodeVersion">maxNodeVersion</a></code>                             | <code>string</code>                                | Maximum node version supported by this package.                                                  |
| <code><a href="#projen-template-projects.Project.property.minNodeVersion">minNodeVersion</a></code>                             | <code>string</code>                                | The minimum node version required by this package to function.                                   |
| <code><a href="#projen-template-projects.Project.property.npmignore">npmignore</a></code>                                       | <code>projen.IgnoreFile</code>                     | The .npmignore file.                                                                             |
| <code><a href="#projen-template-projects.Project.property.prettier">prettier</a></code>                                         | <code>projen.javascript.Prettier</code>            | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.publisher">publisher</a></code>                                       | <code>projen.release.Publisher</code>              | Package publisher.                                                                               |
| <code><a href="#projen-template-projects.Project.property.release">release</a></code>                                           | <code>projen.release.Release</code>                | Release management.                                                                              |
| <code><a href="#projen-template-projects.Project.property.upgradeWorkflow">upgradeWorkflow</a></code>                           | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow.                                                                            |
| <code><a href="#projen-template-projects.Project.property.docsDirectory">docsDirectory</a></code>                               | <code>string</code>                                | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.libdir">libdir</a></code>                                             | <code>string</code>                                | The directory in which compiled .js files reside.                                                |
| <code><a href="#projen-template-projects.Project.property.srcdir">srcdir</a></code>                                             | <code>string</code>                                | The directory in which the .ts sources reside.                                                   |
| <code><a href="#projen-template-projects.Project.property.testdir">testdir</a></code>                                           | <code>string</code>                                | The directory in which tests reside.                                                             |
| <code><a href="#projen-template-projects.Project.property.tsconfigDev">tsconfigDev</a></code>                                   | <code>projen.javascript.TypescriptConfig</code>    | A typescript configuration file which covers all files (sources, tests, projen).                 |
| <code><a href="#projen-template-projects.Project.property.watchTask">watchTask</a></code>                                       | <code>projen.Task</code>                           | The "watch" task.                                                                                |
| <code><a href="#projen-template-projects.Project.property.docgen">docgen</a></code>                                             | <code>boolean</code>                               | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.eslint">eslint</a></code>                                             | <code>projen.javascript.Eslint</code>              | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.tsconfig">tsconfig</a></code>                                         | <code>projen.javascript.TypescriptConfig</code>    | _No description._                                                                                |
| <code><a href="#projen-template-projects.Project.property.tsconfigEslint">tsconfigEslint</a></code>                             | <code>projen.javascript.TypescriptConfig</code>    | _No description._                                                                                |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-template-projects.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-template-projects.Project.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- _Type:_ projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-template-projects.Project.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- _Type:_ boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-template-projects.Project.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- _Type:_ projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-template-projects.Project.property.components"></a>

```typescript
public readonly components: Component[];
```

- _Type:_ projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-template-projects.Project.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- _Type:_ projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-template-projects.Project.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- _Type:_ boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-template-projects.Project.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- _Type:_ projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-template-projects.Project.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- _Type:_ projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-template-projects.Project.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- _Type:_ projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-template-projects.Project.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- _Type:_ projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.Project.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-template-projects.Project.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- _Type:_ string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-template-projects.Project.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- _Type:_ projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-template-projects.Project.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- _Type:_ projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-template-projects.Project.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- _Type:_ projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-template-projects.Project.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- _Type:_ projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-template-projects.Project.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- _Type:_ string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-template-projects.Project.property.root"></a>

```typescript
public readonly root: Project;
```

- _Type:_ projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-template-projects.Project.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- _Type:_ projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-template-projects.Project.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- _Type:_ projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-template-projects.Project.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- _Type:_ projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-template-projects.Project.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- _Type:_ projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-template-projects.Project.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- _Type:_ projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-template-projects.Project.property.parent"></a>

```typescript
public readonly parent: Project;
```

- _Type:_ projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-template-projects.Project.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- _Type:_ projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-template-projects.Project.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- _Type:_ projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-template-projects.Project.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- _Type:_ projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-template-projects.Project.property.github"></a>

```typescript
public readonly github: GitHub;
```

- _Type:_ projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-template-projects.Project.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- _Type:_ projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-template-projects.Project.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- _Type:_ projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-template-projects.Project.property.allowLibraryDependencies"></a>

- _Deprecated:_ use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- _Type:_ boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-template-projects.Project.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- _Type:_ string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-template-projects.Project.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- _Type:_ string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-template-projects.Project.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- _Type:_ projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-template-projects.Project.property.entrypoint"></a>

- _Deprecated:_ use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- _Type:_ string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-template-projects.Project.property.manifest"></a>

- _Deprecated:_ use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- _Type:_ any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen-template-projects.Project.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- _Type:_ projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen-template-projects.Project.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- _Type:_ projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-template-projects.Project.property.packageManager"></a>

- _Deprecated:_ use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- _Type:_ projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-template-projects.Project.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- _Type:_ string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-template-projects.Project.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- _Type:_ projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-template-projects.Project.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- _Type:_ projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-template-projects.Project.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- _Type:_ string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-template-projects.Project.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- _Type:_ projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-template-projects.Project.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- _Type:_ string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-template-projects.Project.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- _Type:_ string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-template-projects.Project.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- _Type:_ projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-template-projects.Project.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- _Type:_ projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-template-projects.Project.property.publisher"></a>

- _Deprecated:_ use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- _Type:_ projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-template-projects.Project.property.release"></a>

```typescript
public readonly release: Release;
```

- _Type:_ projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-template-projects.Project.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- _Type:_ projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-template-projects.Project.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- _Type:_ string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-template-projects.Project.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- _Type:_ string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-template-projects.Project.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- _Type:_ string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-template-projects.Project.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- _Type:_ string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-template-projects.Project.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-template-projects.Project.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- _Type:_ projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-template-projects.Project.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- _Type:_ boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-template-projects.Project.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- _Type:_ projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-template-projects.Project.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-template-projects.Project.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- _Type:_ projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name**                                                                                                                                | **Type**            | **Description**                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| <code><a href="#projen-template-projects.Project.property.DEFAULT_TASK">DEFAULT_TASK</a></code>                                         | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen-template-projects.Project.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | _No description._                                                                        |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-template-projects.Project.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- _Type:_ string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen-template-projects.Project.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- _Type:_ string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectOptions <a name="ProjectOptions" id="projen-template-projects.ProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen-template-projects.ProjectOptions.Initializer"></a>

```typescript
import { ProjectOptions } from 'projen-template-projects'

const projectOptions: ProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                             | **Type**                                                     | **Description**                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><a href="#projen-template-projects.ProjectOptions.property.name">name</a></code>                                               | <code>string</code>                                          | This is the name of your project.                                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.commitGenerated">commitGenerated</a></code>                         | <code>boolean</code>                                         | Whether to commit the managed files by default.                                                                                                                                                      |
| <code><a href="#projen-template-projects.ProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code>                       | <code>projen.IgnoreFileOptions</code>                        | Configuration options for .gitignore file.                                                                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.gitOptions">gitOptions</a></code>                                   | <code>projen.GitOptions</code>                               | Configuration options for git.                                                                                                                                                                       |
| <code><a href="#projen-template-projects.ProjectOptions.property.logging">logging</a></code>                                         | <code>projen.LoggerOptions</code>                            | Configure logging options such as verbosity.                                                                                                                                                         |
| <code><a href="#projen-template-projects.ProjectOptions.property.outdir">outdir</a></code>                                           | <code>string</code>                                          | The root directory of the project.                                                                                                                                                                   |
| <code><a href="#projen-template-projects.ProjectOptions.property.parent">parent</a></code>                                           | <code>projen.Project</code>                                  | The parent project, if this project is part of a bigger project.                                                                                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenCommand">projenCommand</a></code>                             | <code>string</code>                                          | The shell command to use in order to run the projen CLI.                                                                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenrcJson">projenrcJson</a></code>                               | <code>boolean</code>                                         | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code>                 | <code>projen.ProjenrcJsonOptions</code>                      | Options for .projenrc.json.                                                                                                                                                                          |
| <code><a href="#projen-template-projects.ProjectOptions.property.renovatebot">renovatebot</a></code>                                 | <code>boolean</code>                                         | Use renovatebot to handle dependency upgrades.                                                                                                                                                       |
| <code><a href="#projen-template-projects.ProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code>                   | <code>projen.RenovatebotOptions</code>                       | Options for renovatebot.                                                                                                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code>                   | <code>projen.github.AutoApproveOptions</code>                | Enable and configure the 'auto approve' workflow.                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.autoMerge">autoMerge</a></code>                                     | <code>boolean</code>                                         | Enable automatic merging on GitHub.                                                                                                                                                                  |
| <code><a href="#projen-template-projects.ProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code>                       | <code>projen.github.AutoMergeOptions</code>                  | Configure options for automatic merging on GitHub.                                                                                                                                                   |
| <code><a href="#projen-template-projects.ProjectOptions.property.clobber">clobber</a></code>                                         | <code>boolean</code>                                         | Add a `clobber` task which resets the repo to origin.                                                                                                                                                |
| <code><a href="#projen-template-projects.ProjectOptions.property.devContainer">devContainer</a></code>                               | <code>boolean</code>                                         | Add a VSCode development environment (used for GitHub Codespaces).                                                                                                                                   |
| <code><a href="#projen-template-projects.ProjectOptions.property.github">github</a></code>                                           | <code>boolean</code>                                         | Enable GitHub integration.                                                                                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.githubOptions">githubOptions</a></code>                             | <code>projen.github.GitHubOptions</code>                     | Options for GitHub integration.                                                                                                                                                                      |
| <code><a href="#projen-template-projects.ProjectOptions.property.gitpod">gitpod</a></code>                                           | <code>boolean</code>                                         | Add a Gitpod development environment.                                                                                                                                                                |
| <code><a href="#projen-template-projects.ProjectOptions.property.mergify">mergify</a></code>                                         | <code>boolean</code>                                         | Whether mergify should be enabled on this repository or not.                                                                                                                                         |
| <code><a href="#projen-template-projects.ProjectOptions.property.mergifyOptions">mergifyOptions</a></code>                           | <code>projen.github.MergifyOptions</code>                    | Options for mergify.                                                                                                                                                                                 |
| <code><a href="#projen-template-projects.ProjectOptions.property.projectType">projectType</a></code>                                 | <code>projen.ProjectType</code>                              | Which type of project this is (library/app).                                                                                                                                                         |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenCredentials">projenCredentials</a></code>                     | <code>projen.github.GithubCredentials</code>                 | Choose a method of providing GitHub API access for projen workflows.                                                                                                                                 |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code>                     | <code>string</code>                                          | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.                                                                                                   |
| <code><a href="#projen-template-projects.ProjectOptions.property.readme">readme</a></code>                                           | <code>projen.SampleReadmeProps</code>                        | The README setup.                                                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.stale">stale</a></code>                                             | <code>boolean</code>                                         | Auto-close of stale issues and pull request.                                                                                                                                                         |
| <code><a href="#projen-template-projects.ProjectOptions.property.staleOptions">staleOptions</a></code>                               | <code>projen.github.StaleOptions</code>                      | Auto-close stale issues and pull requests.                                                                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.vscode">vscode</a></code>                                           | <code>boolean</code>                                         | Enable VSCode integration.                                                                                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code>       | <code>boolean</code>                                         | Allow the project to include `peerDependencies` and `bundledDependencies`.                                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.authorEmail">authorEmail</a></code>                                 | <code>string</code>                                          | Author's e-mail.                                                                                                                                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.authorName">authorName</a></code>                                   | <code>string</code>                                          | Author's name.                                                                                                                                                                                       |
| <code><a href="#projen-template-projects.ProjectOptions.property.authorOrganization">authorOrganization</a></code>                   | <code>boolean</code>                                         | Is the author an organization.                                                                                                                                                                       |
| <code><a href="#projen-template-projects.ProjectOptions.property.authorUrl">authorUrl</a></code>                                     | <code>string</code>                                          | Author's URL / Website.                                                                                                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.autoDetectBin">autoDetectBin</a></code>                             | <code>boolean</code>                                         | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.                                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.bin">bin</a></code>                                                 | <code>{[ key: string ]: string}</code>                       | Binary programs vended with your module.                                                                                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.bugsEmail">bugsEmail</a></code>                                     | <code>string</code>                                          | The email address to which issues should be reported.                                                                                                                                                |
| <code><a href="#projen-template-projects.ProjectOptions.property.bugsUrl">bugsUrl</a></code>                                         | <code>string</code>                                          | The url to your project's issue tracker.                                                                                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.bundledDeps">bundledDeps</a></code>                                 | <code>string[]</code>                                        | List of dependencies to bundle into this module.                                                                                                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code>                 | <code>projen.javascript.CodeArtifactOptions</code>           | Options for npm packages using AWS CodeArtifact.                                                                                                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.deps">deps</a></code>                                               | <code>string[]</code>                                        | Runtime dependencies of this module.                                                                                                                                                                 |
| <code><a href="#projen-template-projects.ProjectOptions.property.description">description</a></code>                                 | <code>string</code>                                          | The description is just a string that helps people understand the purpose of the package.                                                                                                            |
| <code><a href="#projen-template-projects.ProjectOptions.property.devDeps">devDeps</a></code>                                         | <code>string[]</code>                                        | Build dependencies for this module.                                                                                                                                                                  |
| <code><a href="#projen-template-projects.ProjectOptions.property.entrypoint">entrypoint</a></code>                                   | <code>string</code>                                          | Module entrypoint (`main` in `package.json`).                                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.homepage">homepage</a></code>                                       | <code>string</code>                                          | Package's Homepage / Website.                                                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.keywords">keywords</a></code>                                       | <code>string[]</code>                                        | Keywords to include in `package.json`.                                                                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.license">license</a></code>                                         | <code>string</code>                                          | License's SPDX identifier.                                                                                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.licensed">licensed</a></code>                                       | <code>boolean</code>                                         | Indicates if a license should be added.                                                                                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code>                           | <code>string</code>                                          | The maximum node version supported by this package. Most projects should not use this option.                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.minNodeVersion">minNodeVersion</a></code>                           | <code>string</code>                                          | The minimum node version required by this package to function. Most projects should not use this option.                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.npmAccess">npmAccess</a></code>                                     | <code>projen.javascript.NpmAccess</code>                     | Access level of the npm package.                                                                                                                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.npmProvenance">npmProvenance</a></code>                             | <code>boolean</code>                                         | Should provenance statements be generated when the package is published.                                                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.npmRegistry">npmRegistry</a></code>                                 | <code>string</code>                                          | The host name of the npm registry to publish to.                                                                                                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code>                           | <code>string</code>                                          | The base URL of the npm package registry.                                                                                                                                                            |
| <code><a href="#projen-template-projects.ProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code>                           | <code>string</code>                                          | GitHub secret which contains the NPM token to use when publishing packages.                                                                                                                          |
| <code><a href="#projen-template-projects.ProjectOptions.property.packageManager">packageManager</a></code>                           | <code>projen.javascript.NodePackageManager</code>            | The Node Package Manager used to execute scripts.                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.packageName">packageName</a></code>                                 | <code>string</code>                                          | The "name" in package.json.                                                                                                                                                                          |
| <code><a href="#projen-template-projects.ProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code>             | <code>projen.javascript.PeerDependencyOptions</code>         | Options for `peerDeps`.                                                                                                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.peerDeps">peerDeps</a></code>                                       | <code>string[]</code>                                        | Peer dependencies for this module.                                                                                                                                                                   |
| <code><a href="#projen-template-projects.ProjectOptions.property.pnpmVersion">pnpmVersion</a></code>                                 | <code>string</code>                                          | The version of PNPM to use if using PNPM as a package manager.                                                                                                                                       |
| <code><a href="#projen-template-projects.ProjectOptions.property.repository">repository</a></code>                                   | <code>string</code>                                          | The repository is the location where the actual code for your package lives.                                                                                                                         |
| <code><a href="#projen-template-projects.ProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code>                 | <code>string</code>                                          | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code>             | <code>projen.javascript.ScopedPackagesOptions[]</code>       | Options for privately hosted scoped packages.                                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.scripts">scripts</a></code>                                         | <code>{[ key: string ]: string}</code>                       | npm scripts to include.                                                                                                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.stability">stability</a></code>                                     | <code>string</code>                                          | Package's Stability.                                                                                                                                                                                 |
| <code><a href="#projen-template-projects.ProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code>                       | <code>projen.javascript.YarnBerryOptions</code>              | Options for Yarn Berry.                                                                                                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code>                   | <code>string</code>                                          | Version requirement of `publib` which is used to publish modules to npm.                                                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.majorVersion">majorVersion</a></code>                               | <code>number</code>                                          | Major version to release from the default branch.                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.minMajorVersion">minMajorVersion</a></code>                         | <code>number</code>                                          | Minimal Major version to release.                                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.npmDistTag">npmDistTag</a></code>                                   | <code>string</code>                                          | The npmDistTag to use when publishing from the default branch.                                                                                                                                       |
| <code><a href="#projen-template-projects.ProjectOptions.property.postBuildSteps">postBuildSteps</a></code>                           | <code>projen.github.workflows.JobStep[]</code>               | Steps to execute after build as part of the release workflow.                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.prerelease">prerelease</a></code>                                   | <code>string</code>                                          | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").                                                                                                                 |
| <code><a href="#projen-template-projects.ProjectOptions.property.publishDryRun">publishDryRun</a></code>                             | <code>boolean</code>                                         | Instead of actually publishing to package managers, just print the publishing command.                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.publishTasks">publishTasks</a></code>                               | <code>boolean</code>                                         | Define publishing tasks that can be executed manually as well as workflows.                                                                                                                          |
| <code><a href="#projen-template-projects.ProjectOptions.property.releasableCommits">releasableCommits</a></code>                     | <code>projen.ReleasableCommits</code>                        | Find commits that should be considered releasable Used to decide if a release is required.                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseBranches">releaseBranches</a></code>                         | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches.                                                                                                                                                                 |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code>                   | <code>boolean</code>                                         | Automatically release new versions every commit to one of branches in `releaseBranches`.                                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code>                 | <code>boolean</code>                                         | Create a github issue on every failed publishing task.                                                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code>       | <code>string</code>                                          | The label to apply to issues indicating publish failures.                                                                                                                                            |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseSchedule">releaseSchedule</a></code>                         | <code>string</code>                                          | CRON schedule to trigger new releases.                                                                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code>                       | <code>string</code>                                          | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseTrigger">releaseTrigger</a></code>                           | <code>projen.release.ReleaseTrigger</code>                   | The release trigger to use.                                                                                                                                                                          |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code>                 | <code>string</code>                                          | The name of the default release workflow.                                                                                                                                                            |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code>     | <code>projen.github.workflows.JobStep[]</code>               | A set of workflow steps to execute in order to setup the workflow container.                                                                                                                         |
| <code><a href="#projen-template-projects.ProjectOptions.property.versionrcOptions">versionrcOptions</a></code>                       | <code>{[ key: string ]: any}</code>                          | Custom configuration used when creating changelog with commit-and-tag-version package.                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code>           | <code>string</code>                                          | Container image to use for GitHub workflows.                                                                                                                                                         |
| <code><a href="#projen-template-projects.ProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code>                           | <code>string[]</code>                                        | Github Runner selection labels.                                                                                                                                                                      |
| <code><a href="#projen-template-projects.ProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code>                 | <code>projen.GroupRunnerOptions</code>                       | Github Runner Group selection options.                                                                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code>               | <code>string</code>                                          | The name of the main release branch.                                                                                                                                                                 |
| <code><a href="#projen-template-projects.ProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code>                   | <code>string</code>                                          | A directory which will contain build artifacts.                                                                                                                                                      |
| <code><a href="#projen-template-projects.ProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code>                 | <code>boolean</code>                                         | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.buildWorkflow">buildWorkflow</a></code>                             | <code>boolean</code>                                         | Define a GitHub workflow for building PRs.                                                                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code>               | <code>projen.javascript.BuildWorkflowOptions</code>          | Options for PR build workflow.                                                                                                                                                                       |
| <code><a href="#projen-template-projects.ProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code>             | <code>projen.github.workflows.Triggers</code>                | Build workflow triggers.                                                                                                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.bundlerOptions">bundlerOptions</a></code>                           | <code>projen.javascript.BundlerOptions</code>                | Options for `Bundler`.                                                                                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.checkLicenses">checkLicenses</a></code>                             | <code>projen.javascript.LicenseCheckerOptions</code>         | Configure which licenses should be deemed acceptable for use by dependencies.                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.codeCov">codeCov</a></code>                                         | <code>boolean</code>                                         | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen-template-projects.ProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code>                   | <code>string</code>                                          | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.copyrightOwner">copyrightOwner</a></code>                           | <code>string</code>                                          | License copyright owner.                                                                                                                                                                             |
| <code><a href="#projen-template-projects.ProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code>                         | <code>string</code>                                          | The copyright years to put in the LICENSE file.                                                                                                                                                      |
| <code><a href="#projen-template-projects.ProjectOptions.property.dependabot">dependabot</a></code>                                   | <code>boolean</code>                                         | Use dependabot to handle dependency upgrades.                                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.dependabotOptions">dependabotOptions</a></code>                     | <code>projen.github.DependabotOptions</code>                 | Options for dependabot.                                                                                                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.depsUpgrade">depsUpgrade</a></code>                                 | <code>boolean</code>                                         | Use tasks and github workflows to handle dependency upgrades.                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code>                   | <code>projen.javascript.UpgradeDependenciesOptions</code>    | Options for `UpgradeDependencies`.                                                                                                                                                                   |
| <code><a href="#projen-template-projects.ProjectOptions.property.gitignore">gitignore</a></code>                                     | <code>string[]</code>                                        | Additional entries to .gitignore.                                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.jest">jest</a></code>                                               | <code>boolean</code>                                         | Setup jest unit tests.                                                                                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.jestOptions">jestOptions</a></code>                                 | <code>projen.javascript.JestOptions</code>                   | Jest options.                                                                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.mutableBuild">mutableBuild</a></code>                               | <code>boolean</code>                                         | Automatically update files modified during builds to pull-request branches.                                                                                                                          |
| <code><a href="#projen-template-projects.ProjectOptions.property.npmignore">npmignore</a></code>                                     | <code>string[]</code>                                        | Additional entries to .npmignore.                                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code>                       | <code>boolean</code>                                         | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.                                                                                                |
| <code><a href="#projen-template-projects.ProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code>                       | <code>projen.IgnoreFileOptions</code>                        | Configuration options for .npmignore file.                                                                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.package">package</a></code>                                         | <code>boolean</code>                                         | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.prettier">prettier</a></code>                                       | <code>boolean</code>                                         | Setup prettier.                                                                                                                                                                                      |
| <code><a href="#projen-template-projects.ProjectOptions.property.prettierOptions">prettierOptions</a></code>                         | <code>projen.javascript.PrettierOptions</code>               | Prettier options.                                                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenDevDependency">projenDevDependency</a></code>                 | <code>boolean</code>                                         | Indicates of "projen" should be installed as a devDependency.                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenrcJs">projenrcJs</a></code>                                   | <code>boolean</code>                                         | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.                                                                                            |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code>                     | <code>projen.javascript.ProjenrcOptions</code>               | Options for .projenrc.js.                                                                                                                                                                            |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenVersion">projenVersion</a></code>                             | <code>string</code>                                          | Version of projen to install.                                                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code>                 | <code>boolean</code>                                         | Include a GitHub pull request template.                                                                                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code>                                        | The contents of the pull request template.                                                                                                                                                           |
| <code><a href="#projen-template-projects.ProjectOptions.property.release">release</a></code>                                         | <code>boolean</code>                                         | Add release management to this project.                                                                                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseToNpm">releaseToNpm</a></code>                               | <code>boolean</code>                                         | Automatically release to npm when new versions are introduced.                                                                                                                                       |
| <code><a href="#projen-template-projects.ProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code>                         | <code>boolean</code>                                         | DEPRECATED: renamed to `release`.                                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code>           | <code>projen.github.workflows.JobStep[]</code>               | Workflow steps to use in order to bootstrap this repo.                                                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code>                 | <code>projen.github.GitIdentity</code>                       | The git identity to use in workflows.                                                                                                                                                                |
| <code><a href="#projen-template-projects.ProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code>                 | <code>string</code>                                          | The node version used in GitHub Actions workflows.                                                                                                                                                   |
| <code><a href="#projen-template-projects.ProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code>               | <code>boolean</code>                                         | Enable Node.js package cache in GitHub workflows.                                                                                                                                                    |
| <code><a href="#projen-template-projects.ProjectOptions.property.disableTsconfig">disableTsconfig</a></code>                         | <code>boolean</code>                                         | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).                                                                                |
| <code><a href="#projen-template-projects.ProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code>                   | <code>boolean</code>                                         | Do not generate a `tsconfig.dev.json` file.                                                                                                                                                          |
| <code><a href="#projen-template-projects.ProjectOptions.property.docgen">docgen</a></code>                                           | <code>boolean</code>                                         | Docgen by Typedoc.                                                                                                                                                                                   |
| <code><a href="#projen-template-projects.ProjectOptions.property.docsDirectory">docsDirectory</a></code>                             | <code>string</code>                                          | Docs directory.                                                                                                                                                                                      |
| <code><a href="#projen-template-projects.ProjectOptions.property.entrypointTypes">entrypointTypes</a></code>                         | <code>string</code>                                          | The .d.ts file that includes the type declarations for this module.                                                                                                                                  |
| <code><a href="#projen-template-projects.ProjectOptions.property.eslint">eslint</a></code>                                           | <code>boolean</code>                                         | Setup eslint.                                                                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.eslintOptions">eslintOptions</a></code>                             | <code>projen.javascript.EslintOptions</code>                 | Eslint options.                                                                                                                                                                                      |
| <code><a href="#projen-template-projects.ProjectOptions.property.libdir">libdir</a></code>                                           | <code>string</code>                                          | Typescript artifacts output directory.                                                                                                                                                               |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenrcTs">projenrcTs</a></code>                                   | <code>boolean</code>                                         | Use TypeScript for your projenrc file (`.projenrc.ts`).                                                                                                                                              |
| <code><a href="#projen-template-projects.ProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code>                     | <code>projen.typescript.ProjenrcOptions</code>               | Options for .projenrc.ts.                                                                                                                                                                            |
| <code><a href="#projen-template-projects.ProjectOptions.property.sampleCode">sampleCode</a></code>                                   | <code>boolean</code>                                         | Generate one-time sample in `src/` and `test/` if there are no files there.                                                                                                                          |
| <code><a href="#projen-template-projects.ProjectOptions.property.srcdir">srcdir</a></code>                                           | <code>string</code>                                          | Typescript sources directory.                                                                                                                                                                        |
| <code><a href="#projen-template-projects.ProjectOptions.property.testdir">testdir</a></code>                                         | <code>string</code>                                          | Jest tests directory. Tests files should be named `xxx.test.ts`.                                                                                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.tsconfig">tsconfig</a></code>                                       | <code>projen.javascript.TypescriptConfigOptions</code>       | Custom TSConfig.                                                                                                                                                                                     |
| <code><a href="#projen-template-projects.ProjectOptions.property.tsconfigDev">tsconfigDev</a></code>                                 | <code>projen.javascript.TypescriptConfigOptions</code>       | Custom tsconfig options for the development tsconfig.json file (used for testing).                                                                                                                   |
| <code><a href="#projen-template-projects.ProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code>                         | <code>string</code>                                          | The name of the development tsconfig.json file.                                                                                                                                                      |
| <code><a href="#projen-template-projects.ProjectOptions.property.tsJestOptions">tsJestOptions</a></code>                             | <code>projen.typescript.TsJestOptions</code>                 | Options for ts-jest.                                                                                                                                                                                 |
| <code><a href="#projen-template-projects.ProjectOptions.property.typescriptVersion">typescriptVersion</a></code>                     | <code>string</code>                                          | TypeScript version to use.                                                                                                                                                                           |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-template-projects.ProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string
- _Default:_ $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-template-projects.ProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- _Type:_ boolean
- _Default:_ true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-template-projects.ProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- _Type:_ projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-template-projects.ProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- _Type:_ projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-template-projects.ProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- _Type:_ projen.LoggerOptions
- _Default:_ {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-template-projects.ProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- _Type:_ string
- _Default:_ "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-template-projects.ProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- _Type:_ projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-template-projects.ProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- _Type:_ string
- _Default:_ "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-template-projects.ProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- _Type:_ boolean
- _Default:_ false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-template-projects.ProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- _Type:_ projen.ProjenrcJsonOptions
- _Default:_ default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-template-projects.ProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- _Type:_ boolean
- _Default:_ false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-template-projects.ProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- _Type:_ projen.RenovatebotOptions
- _Default:_ default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-template-projects.ProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- _Type:_ projen.github.AutoApproveOptions
- _Default:_ auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-template-projects.ProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-template-projects.ProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- _Type:_ projen.github.AutoMergeOptions
- _Default:_ see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-template-projects.ProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- _Type:_ boolean
- _Default:_ true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-template-projects.ProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- _Type:_ boolean
- _Default:_ false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-template-projects.ProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-template-projects.ProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- _Type:_ projen.github.GitHubOptions
- _Default:_ see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-template-projects.ProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- _Type:_ boolean
- _Default:_ false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-template-projects.ProjectOptions.property.mergify"></a>

- _Deprecated:_ use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- _Type:_ boolean
- _Default:_ true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-template-projects.ProjectOptions.property.mergifyOptions"></a>

- _Deprecated:_ use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- _Type:_ projen.github.MergifyOptions
- _Default:_ default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-template-projects.ProjectOptions.property.projectType"></a>

- _Deprecated:_ no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- _Type:_ projen.ProjectType
- _Default:_ ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-template-projects.ProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- _Type:_ projen.github.GithubCredentials
- _Default:_ use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-template-projects.ProjectOptions.property.projenTokenSecret"></a>

- _Deprecated:_ use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- _Type:_ string
- _Default:_ "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-template-projects.ProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- _Type:_ projen.SampleReadmeProps
- _Default:_ { filename: 'README.md', contents: '# replace this' }

The README setup.

---

_Example_

```typescript
"{ filename: 'readme.md', contents: '# title' }";
```

##### `stale`<sup>Optional</sup> <a name="stale" id="projen-template-projects.ProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- _Type:_ boolean
- _Default:_ false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-template-projects.ProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- _Type:_ projen.github.StaleOptions
- _Default:_ see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-template-projects.ProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- _Type:_ boolean
- _Default:_ true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen-template-projects.ProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- _Type:_ boolean
- _Default:_ true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen-template-projects.ProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- _Type:_ string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen-template-projects.ProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- _Type:_ string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen-template-projects.ProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- _Type:_ boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen-template-projects.ProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- _Type:_ string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen-template-projects.ProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen-template-projects.ProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen-template-projects.ProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- _Type:_ string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen-template-projects.ProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- _Type:_ string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen-template-projects.ProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- _Type:_ string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen-template-projects.ProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- _Type:_ projen.javascript.CodeArtifactOptions
- _Default:_ undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-template-projects.ProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- _Type:_ string[]
- _Default:_ []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

_Example_

```typescript
['express', 'lodash', 'foo@^2'];
```

##### `description`<sup>Optional</sup> <a name="description" id="projen-template-projects.ProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- _Type:_ string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-template-projects.ProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- _Type:_ string[]
- _Default:_ []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

_Example_

```typescript
['typescript', '@types/express'];
```

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-template-projects.ProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- _Type:_ string
- _Default:_ "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-template-projects.ProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- _Type:_ string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen-template-projects.ProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- _Type:_ string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-template-projects.ProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- _Type:_ string
- _Default:_ "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen-template-projects.ProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- _Type:_ boolean
- _Default:_ true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-template-projects.ProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- _Type:_ string
- _Default:_ no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-template-projects.ProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- _Type:_ string
- _Default:_ no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen-template-projects.ProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- _Type:_ projen.javascript.NpmAccess
- _Default:_ for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen-template-projects.ProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- _Type:_ boolean
- _Default:_ true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen-template-projects.ProjectOptions.property.npmRegistry"></a>

- _Deprecated:_ use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- _Type:_ string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen-template-projects.ProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- _Type:_ string
- _Default:_ "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen-template-projects.ProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- _Type:_ string
- _Default:_ "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen-template-projects.ProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- _Type:_ projen.javascript.NodePackageManager
- _Default:_ NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-template-projects.ProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- _Type:_ string
- _Default:_ defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen-template-projects.ProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- _Type:_ projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen-template-projects.ProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- _Type:_ string[]
- _Default:_ []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen-template-projects.ProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- _Type:_ string
- _Default:_ "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen-template-projects.ProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- _Type:_ string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen-template-projects.ProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- _Type:_ string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen-template-projects.ProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- _Type:_ projen.javascript.ScopedPackagesOptions[]
- _Default:_ fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen-template-projects.ProjectOptions.property.scripts"></a>

- _Deprecated:_ use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen-template-projects.ProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- _Type:_ string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen-template-projects.ProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- _Type:_ projen.javascript.YarnBerryOptions
- _Default:_ Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen-template-projects.ProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- _Type:_ string
- _Default:_ "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen-template-projects.ProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- _Type:_ number
- _Default:_ Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen-template-projects.ProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- _Type:_ number
- _Default:_ No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen-template-projects.ProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- _Type:_ string
- _Default:_ "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen-template-projects.ProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- _Type:_ projen.github.workflows.JobStep[]
- _Default:_ []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen-template-projects.ProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- _Type:_ string
- _Default:_ normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen-template-projects.ProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- _Type:_ boolean
- _Default:_ false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen-template-projects.ProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- _Type:_ boolean
- _Default:_ false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen-template-projects.ProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- _Type:_ projen.ReleasableCommits
- _Default:_ ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen-template-projects.ProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- _Type:_ {[ key: string ]: projen.release.BranchOptions}
- _Default:_ no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen-template-projects.ProjectOptions.property.releaseEveryCommit"></a>

- _Deprecated:_ Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen-template-projects.ProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- _Type:_ boolean
- _Default:_ false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen-template-projects.ProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- _Type:_ string
- _Default:_ "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen-template-projects.ProjectOptions.property.releaseSchedule"></a>

- _Deprecated:_ Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- _Type:_ string
- _Default:_ no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen-template-projects.ProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- _Type:_ string
- _Default:_ "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen-template-projects.ProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- _Type:_ projen.release.ReleaseTrigger
- _Default:_ Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen-template-projects.ProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- _Type:_ string
- _Default:_ "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen-template-projects.ProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- _Type:_ projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen-template-projects.ProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- _Type:_ {[ key: string ]: any}
- _Default:_ standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen-template-projects.ProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- _Type:_ string
- _Default:_ default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen-template-projects.ProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- _Type:_ string[]
- _Default:_ ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen-template-projects.ProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- _Type:_ projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen-template-projects.ProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- _Type:_ string
- _Default:_ "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen-template-projects.ProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- _Type:_ string
- _Default:_ "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen-template-projects.ProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-template-projects.ProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- _Type:_ boolean
- _Default:_ true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen-template-projects.ProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- _Type:_ projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen-template-projects.ProjectOptions.property.buildWorkflowTriggers"></a>

- _Deprecated:_ - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- _Type:_ projen.github.workflows.Triggers
- _Default:_ "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen-template-projects.ProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- _Type:_ projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen-template-projects.ProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- _Type:_ projen.javascript.LicenseCheckerOptions
- _Default:_ no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen-template-projects.ProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- _Type:_ boolean
- _Default:_ false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen-template-projects.ProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- _Type:_ string
- _Default:_ if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen-template-projects.ProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- _Type:_ string
- _Default:_ defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen-template-projects.ProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- _Type:_ string
- _Default:_ current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen-template-projects.ProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- _Type:_ boolean
- _Default:_ false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen-template-projects.ProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- _Type:_ projen.github.DependabotOptions
- _Default:_ default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen-template-projects.ProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- _Type:_ boolean
- _Default:_ true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen-template-projects.ProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- _Type:_ projen.javascript.UpgradeDependenciesOptions
- _Default:_ default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen-template-projects.ProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- _Type:_ string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-template-projects.ProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- _Type:_ boolean
- _Default:_ true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen-template-projects.ProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- _Type:_ projen.javascript.JestOptions
- _Default:_ default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen-template-projects.ProjectOptions.property.mutableBuild"></a>

- _Deprecated:_ - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- _Type:_ boolean
- _Default:_ true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen-template-projects.ProjectOptions.property.npmignore"></a>

- _Deprecated:_ - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- _Type:_ string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen-template-projects.ProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- _Type:_ boolean
- _Default:_ true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen-template-projects.ProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- _Type:_ projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen-template-projects.ProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- _Type:_ boolean
- _Default:_ true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-template-projects.ProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- _Type:_ boolean
- _Default:_ false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen-template-projects.ProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- _Type:_ projen.javascript.PrettierOptions
- _Default:_ default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen-template-projects.ProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- _Type:_ boolean
- _Default:_ true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-template-projects.ProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- _Type:_ boolean
- _Default:_ true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-template-projects.ProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- _Type:_ projen.javascript.ProjenrcOptions
- _Default:_ default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen-template-projects.ProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- _Type:_ string
- _Default:_ Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-template-projects.ProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- _Type:_ boolean
- _Default:_ true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-template-projects.ProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- _Type:_ string[]
- _Default:_ default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-template-projects.ProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- _Type:_ boolean
- _Default:_ true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen-template-projects.ProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- _Type:_ boolean
- _Default:_ false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen-template-projects.ProjectOptions.property.releaseWorkflow"></a>

- _Deprecated:_ see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- _Type:_ boolean
- _Default:_ true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen-template-projects.ProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- _Type:_ projen.github.workflows.JobStep[]
- _Default:_ "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen-template-projects.ProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- _Type:_ projen.github.GitIdentity
- _Default:_ GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen-template-projects.ProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- _Type:_ string
- _Default:_ `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen-template-projects.ProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- _Type:_ boolean
- _Default:_ false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen-template-projects.ProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- _Type:_ boolean
- _Default:_ false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen-template-projects.ProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- _Type:_ boolean
- _Default:_ false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-template-projects.ProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- _Type:_ boolean
- _Default:_ false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen-template-projects.ProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- _Type:_ string
- _Default:_ "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen-template-projects.ProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- _Type:_ string
- _Default:_ .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-template-projects.ProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- _Type:_ boolean
- _Default:_ true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen-template-projects.ProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- _Type:_ projen.javascript.EslintOptions
- _Default:_ opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen-template-projects.ProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- _Type:_ string
- _Default:_ "lib"

Typescript artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-template-projects.ProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- _Type:_ boolean
- _Default:_ false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-template-projects.ProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- _Type:_ projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen-template-projects.ProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- _Type:_ boolean
- _Default:_ true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen-template-projects.ProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- _Type:_ string
- _Default:_ "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen-template-projects.ProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- _Type:_ string
- _Default:_ "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-template-projects.ProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- _Type:_ projen.javascript.TypescriptConfigOptions
- _Default:_ default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen-template-projects.ProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- _Type:_ projen.javascript.TypescriptConfigOptions
- _Default:_ use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen-template-projects.ProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- _Type:_ string
- _Default:_ "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen-template-projects.ProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- _Type:_ projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen-template-projects.ProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- _Type:_ string
- _Default:_ "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

## Classes <a name="Classes" id="Classes"></a>

### CommitLint <a name="CommitLint" id="projen-template-projects.CommitLint"></a>

CommitLint component implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="projen-template-projects.CommitLint.Initializer"></a>

```typescript
import { CommitLint } from 'projen-template-projects'

new CommitLint(project: TypeScriptProject)
```

| **Name**                                                                                              | **Type**                                         | **Description**                          |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| <code><a href="#projen-template-projects.CommitLint.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.CommitLint.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                              | **Description**                                     |
| ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.CommitLint.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.CommitLint.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### CommitLintBase <a name="CommitLintBase" id="projen-template-projects.CommitLintBase"></a>

Base class for CommitLint component implementing all relevant configuration.

#### Initializers <a name="Initializers" id="projen-template-projects.CommitLintBase.Initializer"></a>

```typescript
import { CommitLintBase } from 'projen-template-projects'

new CommitLintBase(project: TypeScriptProject)
```

| **Name**                                                                                                  | **Type**                                         | **Description**                          |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| <code><a href="#projen-template-projects.CommitLintBase.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.CommitLintBase.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                  | **Description**                                     |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.CommitLintBase.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.CommitLintBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### Component <a name="Component" id="projen-template-projects.Component"></a>

Base class for managing project component configurations.

#### Initializers <a name="Initializers" id="projen-template-projects.Component.Initializer"></a>

```typescript
import { Component } from 'projen-template-projects'

new Component(project: TypeScriptProject)
```

| **Name**                                                                                             | **Type**                                         | **Description**                             |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------- |
| <code><a href="#projen-template-projects.Component.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure the component for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.Component.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure the component for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                             | **Description**                                     |
| ------------------------------------------------------------------------------------ | --------------------------------------------------- |
| <code><a href="#projen-template-projects.Component.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.Component.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### DevContainer <a name="DevContainer" id="projen-template-projects.DevContainer"></a>

DevContainer component implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="projen-template-projects.DevContainer.Initializer"></a>

```typescript
import { DevContainer } from 'projen-template-projects'

new DevContainer(project: TypeScriptProject)
```

| **Name**                                                                                                | **Type**                                         | **Description**                          |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| <code><a href="#projen-template-projects.DevContainer.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.DevContainer.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                | **Description**                                     |
| --------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.DevContainer.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.DevContainer.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### DevContainerBase <a name="DevContainerBase" id="projen-template-projects.DevContainerBase"></a>

Base class for DevContainer component implementing all relevant configuration.

#### Initializers <a name="Initializers" id="projen-template-projects.DevContainerBase.Initializer"></a>

```typescript
import { DevContainerBase } from 'projen-template-projects'

new DevContainerBase(project: TypeScriptProject)
```

| **Name**                                                                                                    | **Type**                                         | **Description**                            |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| <code><a href="#projen-template-projects.DevContainerBase.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure DevContainer for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.DevContainerBase.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure DevContainer for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                    | **Description**                                     |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.DevContainerBase.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.DevContainerBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### GitHub <a name="GitHub" id="projen-template-projects.GitHub"></a>

GitHub component implementing all relevant configurtion for the project.

#### Initializers <a name="Initializers" id="projen-template-projects.GitHub.Initializer"></a>

```typescript
import { GitHub } from 'projen-template-projects'

new GitHub(project: TypeScriptProject)
```

| **Name**                                                                                          | **Type**                                         | **Description**                      |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------ |
| <code><a href="#projen-template-projects.GitHub.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure GitHub for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.GitHub.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure GitHub for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                          | **Description**                                     |
| --------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.GitHub.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.GitHub.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### GitHubBase <a name="GitHubBase" id="projen-template-projects.GitHubBase"></a>

Base class for GitHub component implementeing all relevant configuration.

#### Initializers <a name="Initializers" id="projen-template-projects.GitHubBase.Initializer"></a>

```typescript
import { GitHubBase } from 'projen-template-projects'

new GitHubBase(project: TypeScriptProject)
```

| **Name**                                                                                              | **Type**                                         | **Description**                                |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------- |
| <code><a href="#projen-template-projects.GitHubBase.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure GitHub component for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.GitHubBase.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure GitHub component for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                              | **Description**                                     |
| ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.GitHubBase.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.GitHubBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### Husky <a name="Husky" id="projen-template-projects.Husky"></a>

Husky component implementing all relevant configurtion for the project.

#### Initializers <a name="Initializers" id="projen-template-projects.Husky.Initializer"></a>

```typescript
import { Husky } from 'projen-template-projects'

new Husky(project: TypeScriptProject)
```

| **Name**                                                                                         | **Type**                                         | **Description**                     |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ----------------------------------- |
| <code><a href="#projen-template-projects.Husky.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure Husky for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.Husky.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure Husky for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                         | **Description**                                     |
| -------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.Husky.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.Husky.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### HuskyBase <a name="HuskyBase" id="projen-template-projects.HuskyBase"></a>

Base class for Husky component implementing all relevant configuration.

#### Initializers <a name="Initializers" id="projen-template-projects.HuskyBase.Initializer"></a>

```typescript
import { HuskyBase } from 'projen-template-projects'

new HuskyBase(project: TypeScriptProject)
```

| **Name**                                                                                             | **Type**                                         | **Description**                     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------- |
| <code><a href="#projen-template-projects.HuskyBase.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure Husky for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.HuskyBase.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure Husky for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                             | **Description**                                     |
| ------------------------------------------------------------------------------------ | --------------------------------------------------- |
| <code><a href="#projen-template-projects.HuskyBase.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.HuskyBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### NpmPackage <a name="NpmPackage" id="projen-template-projects.NpmPackage"></a>

NPM Package component implementing all relevant configurtion for the project.

#### Initializers <a name="Initializers" id="projen-template-projects.NpmPackage.Initializer"></a>

```typescript
import { NpmPackage } from 'projen-template-projects'

new NpmPackage(project: TypeScriptProject)
```

| **Name**                                                                                              | **Type**                                         | **Description**                           |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------- |
| <code><a href="#projen-template-projects.NpmPackage.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure NPM Package for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.NpmPackage.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure NPM Package for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                              | **Description**                                     |
| ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.NpmPackage.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.NpmPackage.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### NpmPackageBase <a name="NpmPackageBase" id="projen-template-projects.NpmPackageBase"></a>

Base class for NPM Package component implementing all relevant configuration.

#### Initializers <a name="Initializers" id="projen-template-projects.NpmPackageBase.Initializer"></a>

```typescript
import { NpmPackageBase } from 'projen-template-projects'

new NpmPackageBase(project: TypeScriptProject)
```

| **Name**                                                                                                  | **Type**                                         | **Description**                   |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------- |
| <code><a href="#projen-template-projects.NpmPackageBase.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure NPM for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.NpmPackageBase.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure NPM for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                  | **Description**                                     |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.NpmPackageBase.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.NpmPackageBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### Prettier <a name="Prettier" id="projen-template-projects.Prettier"></a>

Prettier component implementing all relevant configurtion for the project.

#### Initializers <a name="Initializers" id="projen-template-projects.Prettier.Initializer"></a>

```typescript
import { Prettier } from 'projen-template-projects'

new Prettier(project: TypeScriptProject)
```

| **Name**                                                                                            | **Type**                                         | **Description**                        |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------- |
| <code><a href="#projen-template-projects.Prettier.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure Prettier for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.Prettier.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure Prettier for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                            | **Description**                                     |
| ----------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.Prettier.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.Prettier.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### PrettierBase <a name="PrettierBase" id="projen-template-projects.PrettierBase"></a>

Base class for Prettier component implementing all relevant configuration.

#### Initializers <a name="Initializers" id="projen-template-projects.PrettierBase.Initializer"></a>

```typescript
import { PrettierBase } from 'projen-template-projects'

new PrettierBase(project: TypeScriptProject)
```

| **Name**                                                                                                | **Type**                                         | **Description**                        |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------- |
| <code><a href="#projen-template-projects.PrettierBase.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure Prettier for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.PrettierBase.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure Prettier for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                | **Description**                                     |
| --------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.PrettierBase.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.PrettierBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### SampleCode <a name="SampleCode" id="projen-template-projects.SampleCode"></a>

SampleCode component implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="projen-template-projects.SampleCode.Initializer"></a>

```typescript
import { SampleCode } from 'projen-template-projects'

new SampleCode(project: TypeScriptProject)
```

| **Name**                                                                                              | **Type**                                         | **Description**                          |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| <code><a href="#projen-template-projects.SampleCode.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure SampleCode for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.SampleCode.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure SampleCode for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                              | **Description**                                     |
| ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.SampleCode.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.SampleCode.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### VSCode <a name="VSCode" id="projen-template-projects.VSCode"></a>

VSCode component implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="projen-template-projects.VSCode.Initializer"></a>

```typescript
import { VSCode } from 'projen-template-projects'

new VSCode(project: TypeScriptProject)
```

| **Name**                                                                                          | **Type**                                         | **Description**                              |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------- |
| <code><a href="#projen-template-projects.VSCode.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure VSCode Package for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.VSCode.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure VSCode Package for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                          | **Description**                                     |
| --------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.VSCode.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.VSCode.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.

### VSCodeBase <a name="VSCodeBase" id="projen-template-projects.VSCodeBase"></a>

Base class for VSCode component implementing all relevant configurarion.

#### Initializers <a name="Initializers" id="projen-template-projects.VSCodeBase.Initializer"></a>

```typescript
import { VSCodeBase } from 'projen-template-projects'

new VSCodeBase(project: TypeScriptProject)
```

| **Name**                                                                                              | **Type**                                         | **Description**                                |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------- |
| <code><a href="#projen-template-projects.VSCodeBase.Initializer.parameter.project">project</a></code> | <code>projen.typescript.TypeScriptProject</code> | The project to configure VSCode component for. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-template-projects.VSCodeBase.Initializer.parameter.project"></a>

- _Type:_ projen.typescript.TypeScriptProject

The project to configure VSCode component for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                              | **Description**                                     |
| ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <code><a href="#projen-template-projects.VSCodeBase.initialize">initialize</a></code> | Initialize component configuration for the project. |

---

##### `initialize` <a name="initialize" id="projen-template-projects.VSCodeBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize component configuration for the project.
