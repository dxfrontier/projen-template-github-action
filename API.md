# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapServiceProject <a name="CapServiceProject" id="@dxfrontier/projen-template-projects.CapServiceProject"></a>

Defines a CAP Service project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.CapServiceProject.Initializer"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/projen-template-projects'

new CapServiceProject(options: CapServiceProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions">CapServiceProjectOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/projen-template-projects.CapServiceProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions">CapServiceProjectOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.findBuilderByName">findBuilderByName</a></code> | Finds a builder in the registry by its constructor name. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.registerBuilder">registerBuilder</a></code> | Register a builder to be managed by this project. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.CapServiceProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/projen-template-projects.CapServiceProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/projen-template-projects.CapServiceProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/projen-template-projects.CapServiceProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.CapServiceProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/projen-template-projects.CapServiceProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.CapServiceProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/projen-template-projects.CapServiceProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/projen-template-projects.CapServiceProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/projen-template-projects.CapServiceProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/projen-template-projects.CapServiceProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/projen-template-projects.CapServiceProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/projen-template-projects.CapServiceProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.CapServiceProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.CapServiceProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/projen-template-projects.CapServiceProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/projen-template-projects.CapServiceProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/projen-template-projects.CapServiceProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.CapServiceProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/projen-template-projects.CapServiceProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.CapServiceProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/projen-template-projects.CapServiceProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/projen-template-projects.CapServiceProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/projen-template-projects.CapServiceProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.CapServiceProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/projen-template-projects.CapServiceProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/projen-template-projects.CapServiceProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/projen-template-projects.CapServiceProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/projen-template-projects.CapServiceProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/projen-template-projects.CapServiceProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.CapServiceProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/projen-template-projects.CapServiceProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.CapServiceProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.CapServiceProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.CapServiceProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/projen-template-projects.CapServiceProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/projen-template-projects.CapServiceProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/projen-template-projects.CapServiceProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/projen-template-projects.CapServiceProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/projen-template-projects.CapServiceProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/projen-template-projects.CapServiceProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `findBuilderByName` <a name="findBuilderByName" id="@dxfrontier/projen-template-projects.CapServiceProject.findBuilderByName"></a>

```typescript
public findBuilderByName(name: string): Builder
```

Finds a builder in the registry by its constructor name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.findBuilderByName.parameter.name"></a>

- *Type:* string

The name of the builder to search for.

---

##### `registerBuilder` <a name="registerBuilder" id="@dxfrontier/projen-template-projects.CapServiceProject.registerBuilder"></a>

```typescript
public registerBuilder(builder: Builder): void
```

Register a builder to be managed by this project.

###### `builder`<sup>Required</sup> <a name="builder" id="@dxfrontier/projen-template-projects.CapServiceProject.registerBuilder.parameter.builder"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.Builder">Builder</a>

The builder to register (must extend BaseBuilder).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.CapServiceProject.isConstruct"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/projen-template-projects'

CapServiceProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CapServiceProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/projen-template-projects.CapServiceProject.isProject"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/projen-template-projects'

CapServiceProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.CapServiceProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/projen-template-projects.CapServiceProject.of"></a>

```typescript
import { CapServiceProject } from '@dxfrontier/projen-template-projects'

CapServiceProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/projen-template-projects.CapServiceProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.builderRegistry">builderRegistry</a></code> | <code><a href="#@dxfrontier/projen-template-projects.Builder">Builder</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.CapServiceProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.CapServiceProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/projen-template-projects.CapServiceProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/projen-template-projects.CapServiceProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/projen-template-projects.CapServiceProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/projen-template-projects.CapServiceProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.CapServiceProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/projen-template-projects.CapServiceProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.CapServiceProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/projen-template-projects.CapServiceProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/projen-template-projects.CapServiceProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/projen-template-projects.CapServiceProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/projen-template-projects.CapServiceProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/projen-template-projects.CapServiceProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.CapServiceProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.CapServiceProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/projen-template-projects.CapServiceProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.CapServiceProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.CapServiceProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.CapServiceProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.CapServiceProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.CapServiceProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.CapServiceProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/projen-template-projects.CapServiceProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/projen-template-projects.CapServiceProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.CapServiceProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/projen-template-projects.CapServiceProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/projen-template-projects.CapServiceProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/projen-template-projects.CapServiceProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.CapServiceProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/projen-template-projects.CapServiceProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.CapServiceProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.CapServiceProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/projen-template-projects.CapServiceProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.CapServiceProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.CapServiceProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.CapServiceProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/projen-template-projects.CapServiceProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.CapServiceProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/projen-template-projects.CapServiceProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.CapServiceProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.CapServiceProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.CapServiceProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.CapServiceProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/projen-template-projects.CapServiceProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.CapServiceProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.CapServiceProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/projen-template-projects.CapServiceProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `builderRegistry`<sup>Required</sup> <a name="builderRegistry" id="@dxfrontier/projen-template-projects.CapServiceProject.property.builderRegistry"></a>

```typescript
public readonly builderRegistry: Builder[];
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.Builder">Builder</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/projen-template-projects.CapServiceProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/projen-template-projects.CapServiceProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### GitHubActionProject <a name="GitHubActionProject" id="@dxfrontier/projen-template-projects.GitHubActionProject"></a>

Defines a GitHub Action project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitHubActionProject.Initializer"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/projen-template-projects'

new GitHubActionProject(options: TypeScriptProjectBaseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions">TypeScriptProjectBaseOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/projen-template-projects.GitHubActionProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions">TypeScriptProjectBaseOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.findBuilderByName">findBuilderByName</a></code> | Finds a builder in the registry by its constructor name. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.registerBuilder">registerBuilder</a></code> | Register a builder to be managed by this project. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.GitHubActionProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/projen-template-projects.GitHubActionProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/projen-template-projects.GitHubActionProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/projen-template-projects.GitHubActionProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.GitHubActionProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/projen-template-projects.GitHubActionProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.GitHubActionProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/projen-template-projects.GitHubActionProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/projen-template-projects.GitHubActionProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitHubActionProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitHubActionProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/projen-template-projects.GitHubActionProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/projen-template-projects.GitHubActionProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.GitHubActionProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/projen-template-projects.GitHubActionProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/projen-template-projects.GitHubActionProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.GitHubActionProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/projen-template-projects.GitHubActionProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/projen-template-projects.GitHubActionProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/projen-template-projects.GitHubActionProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.GitHubActionProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.GitHubActionProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.GitHubActionProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.GitHubActionProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/projen-template-projects.GitHubActionProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/projen-template-projects.GitHubActionProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/projen-template-projects.GitHubActionProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/projen-template-projects.GitHubActionProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/projen-template-projects.GitHubActionProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/projen-template-projects.GitHubActionProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `findBuilderByName` <a name="findBuilderByName" id="@dxfrontier/projen-template-projects.GitHubActionProject.findBuilderByName"></a>

```typescript
public findBuilderByName(name: string): Builder
```

Finds a builder in the registry by its constructor name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.findBuilderByName.parameter.name"></a>

- *Type:* string

The name of the builder to search for.

---

##### `registerBuilder` <a name="registerBuilder" id="@dxfrontier/projen-template-projects.GitHubActionProject.registerBuilder"></a>

```typescript
public registerBuilder(builder: Builder): void
```

Register a builder to be managed by this project.

###### `builder`<sup>Required</sup> <a name="builder" id="@dxfrontier/projen-template-projects.GitHubActionProject.registerBuilder.parameter.builder"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.Builder">Builder</a>

The builder to register (must extend BaseBuilder).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.GitHubActionProject.isConstruct"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/projen-template-projects'

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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitHubActionProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/projen-template-projects.GitHubActionProject.isProject"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/projen-template-projects'

GitHubActionProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.GitHubActionProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/projen-template-projects.GitHubActionProject.of"></a>

```typescript
import { GitHubActionProject } from '@dxfrontier/projen-template-projects'

GitHubActionProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/projen-template-projects.GitHubActionProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.builderRegistry">builderRegistry</a></code> | <code><a href="#@dxfrontier/projen-template-projects.Builder">Builder</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `builderRegistry`<sup>Required</sup> <a name="builderRegistry" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.builderRegistry"></a>

```typescript
public readonly builderRegistry: Builder[];
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.Builder">Builder</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubActionProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/projen-template-projects.GitHubActionProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### TypeScriptProjectBase <a name="TypeScriptProjectBase" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase"></a>

Base class for managing project configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.Initializer"></a>

```typescript
import { TypeScriptProjectBase } from '@dxfrontier/projen-template-projects'

new TypeScriptProjectBase(options: TypeScriptProjectBaseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.Initializer.parameter.options">options</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions">TypeScriptProjectBaseOptions</a></code> | Additional project options. |

---

##### `options`<sup>Required</sup> <a name="options" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.Initializer.parameter.options"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions">TypeScriptProjectBaseOptions</a>

Additional project options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.findBuilderByName">findBuilderByName</a></code> | Finds a builder in the registry by its constructor name. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.registerBuilder">registerBuilder</a></code> | Register a builder to be managed by this project. |

---

##### `toString` <a name="toString" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `findBuilderByName` <a name="findBuilderByName" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.findBuilderByName"></a>

```typescript
public findBuilderByName(name: string): Builder
```

Finds a builder in the registry by its constructor name.

###### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.findBuilderByName.parameter.name"></a>

- *Type:* string

The name of the builder to search for.

---

##### `registerBuilder` <a name="registerBuilder" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.registerBuilder"></a>

```typescript
public registerBuilder(builder: Builder): void
```

Register a builder to be managed by this project.

###### `builder`<sup>Required</sup> <a name="builder" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.registerBuilder.parameter.builder"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.Builder">Builder</a>

The builder to register (must extend BaseBuilder).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.isConstruct"></a>

```typescript
import { TypeScriptProjectBase } from '@dxfrontier/projen-template-projects'

TypeScriptProjectBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.isProject"></a>

```typescript
import { TypeScriptProjectBase } from '@dxfrontier/projen-template-projects'

TypeScriptProjectBase.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.of"></a>

```typescript
import { TypeScriptProjectBase } from '@dxfrontier/projen-template-projects'

TypeScriptProjectBase.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.builderRegistry">builderRegistry</a></code> | <code><a href="#@dxfrontier/projen-template-projects.Builder">Builder</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `builderRegistry`<sup>Required</sup> <a name="builderRegistry" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.builderRegistry"></a>

```typescript
public readonly builderRegistry: Builder[];
```

- *Type:* <a href="#@dxfrontier/projen-template-projects.Builder">Builder</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@dxfrontier/projen-template-projects.TypeScriptProjectBase.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CapServiceProjectOptions <a name="CapServiceProjectOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.Initializer"></a>

```typescript
import { CapServiceProjectOptions } from '@dxfrontier/projen-template-projects'

const capServiceProjectOptions: CapServiceProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entityName">entityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

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

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

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

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `entityName`<sup>Optional</sup> <a name="entityName" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.entityName"></a>

```typescript
public readonly entityName: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@dxfrontier/projen-template-projects.CapServiceProjectOptions.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

### TypeScriptProjectBaseOptions <a name="TypeScriptProjectBaseOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions"></a>

#### Initializer <a name="Initializer" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.Initializer"></a>

```typescript
import { TypeScriptProjectBaseOptions } from '@dxfrontier/projen-template-projects'

const typeScriptProjectBaseOptions: TypeScriptProjectBaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |

---

##### `name`<sup>Required</sup> <a name="name" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

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

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

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

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@dxfrontier/projen-template-projects.TypeScriptProjectBaseOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

## Classes <a name="Classes" id="Classes"></a>

### Builder <a name="Builder" id="@dxfrontier/projen-template-projects.Builder"></a>

Base class for managing project builder configurations.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.Builder.Initializer"></a>

```typescript
import { Builder } from '@dxfrontier/projen-template-projects'

new Builder(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Builder.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure the builder for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.Builder.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure the builder for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Builder.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.Builder.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.Builder.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.Builder.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.Builder.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.Builder.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### CommitLint <a name="CommitLint" id="@dxfrontier/projen-template-projects.CommitLint"></a>

CommitLint builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.CommitLint.Initializer"></a>

```typescript
import { CommitLint } from '@dxfrontier/projen-template-projects'

new CommitLint(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLint.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.CommitLint.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLint.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLint.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLint.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.CommitLint.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.CommitLint.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.CommitLint.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### CommitLintBase <a name="CommitLintBase" id="@dxfrontier/projen-template-projects.CommitLintBase"></a>

Base class for CommitLint builder implementing all relevant configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.CommitLintBase.Initializer"></a>

```typescript
import { CommitLintBase } from '@dxfrontier/projen-template-projects'

new CommitLintBase(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.CommitLintBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintBase.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintBase.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintBase.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.CommitLintBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.CommitLintBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.CommitLintBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### CommitLintJsii <a name="CommitLintJsii" id="@dxfrontier/projen-template-projects.CommitLintJsii"></a>

CommitLint builder implementing all relevant configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.CommitLintJsii.Initializer"></a>

```typescript
import { CommitLintJsii } from '@dxfrontier/projen-template-projects'

new CommitLintJsii(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintJsii.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.CommitLintJsii.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintJsii.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintJsii.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.CommitLintJsii.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.CommitLintJsii.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.CommitLintJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.CommitLintJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### DevContainer <a name="DevContainer" id="@dxfrontier/projen-template-projects.DevContainer"></a>

DevContainer builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.DevContainer.Initializer"></a>

```typescript
import { DevContainer } from '@dxfrontier/projen-template-projects'

new DevContainer(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainer.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.DevContainer.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainer.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainer.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainer.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.DevContainer.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.DevContainer.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.DevContainer.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### DevContainerBase <a name="DevContainerBase" id="@dxfrontier/projen-template-projects.DevContainerBase"></a>

Base class for DevContainer builder implementing all relevant configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.DevContainerBase.Initializer"></a>

```typescript
import { DevContainerBase } from '@dxfrontier/projen-template-projects'

new DevContainerBase(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure DevContainer for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.DevContainerBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure DevContainer for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerBase.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerBase.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerBase.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.DevContainerBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.DevContainerBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.DevContainerBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### DevContainerJsii <a name="DevContainerJsii" id="@dxfrontier/projen-template-projects.DevContainerJsii"></a>

DevContainer builder implementing all relevant configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.DevContainerJsii.Initializer"></a>

```typescript
import { DevContainerJsii } from '@dxfrontier/projen-template-projects'

new DevContainerJsii(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerJsii.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.DevContainerJsii.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerJsii.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerJsii.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.DevContainerJsii.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.DevContainerJsii.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.DevContainerJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.DevContainerJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### EsLint <a name="EsLint" id="@dxfrontier/projen-template-projects.EsLint"></a>

EsLint builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.EsLint.Initializer"></a>

```typescript
import { EsLint } from '@dxfrontier/projen-template-projects'

new EsLint(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLint.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.EsLint.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLint.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLint.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLint.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.EsLint.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.EsLint.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.EsLint.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### EsLintBase <a name="EsLintBase" id="@dxfrontier/projen-template-projects.EsLintBase"></a>

Base class for ESLint builder implementing all relevant configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.EsLintBase.Initializer"></a>

```typescript
import { EsLintBase } from '@dxfrontier/projen-template-projects'

new EsLintBase(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure EsLint builder for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.EsLintBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure EsLint builder for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintBase.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintBase.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.EsLintBase.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.EsLintBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.EsLintBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.EsLintBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### Git <a name="Git" id="@dxfrontier/projen-template-projects.Git"></a>

Git builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.Git.Initializer"></a>

```typescript
import { Git } from '@dxfrontier/projen-template-projects'

new Git(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Git.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure CommitLint for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.Git.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure CommitLint for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Git.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.Git.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.Git.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.Git.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.Git.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.Git.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### GitBase <a name="GitBase" id="@dxfrontier/projen-template-projects.GitBase"></a>

Base class for Git builder implementing all relevant configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitBase.Initializer"></a>

```typescript
import { GitBase } from '@dxfrontier/projen-template-projects'

new GitBase(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure Git builder for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure Git builder for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitBase.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitBase.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitBase.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.GitBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### GitHub <a name="GitHub" id="@dxfrontier/projen-template-projects.GitHub"></a>

GitHub builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitHub.Initializer"></a>

```typescript
import { GitHub } from '@dxfrontier/projen-template-projects'

new GitHub(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHub.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure GitHub for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitHub.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure GitHub for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHub.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHub.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHub.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.GitHub.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitHub.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitHub.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### GitHubBase <a name="GitHubBase" id="@dxfrontier/projen-template-projects.GitHubBase"></a>

Base class for GitHub builder implementing all relevant configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitHubBase.Initializer"></a>

```typescript
import { GitHubBase } from '@dxfrontier/projen-template-projects'

new GitHubBase(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure GitHub builder for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitHubBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure GitHub builder for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubBase.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubBase.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubBase.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.GitHubBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitHubBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitHubBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### GitHubJsii <a name="GitHubJsii" id="@dxfrontier/projen-template-projects.GitHubJsii"></a>

GitHub builder implementing all relevant configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.GitHubJsii.Initializer"></a>

```typescript
import { GitHubJsii } from '@dxfrontier/projen-template-projects'

new GitHubJsii(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubJsii.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure GitHub for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.GitHubJsii.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure GitHub for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubJsii.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubJsii.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.GitHubJsii.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.GitHubJsii.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.GitHubJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.GitHubJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### Husky <a name="Husky" id="@dxfrontier/projen-template-projects.Husky"></a>

Husky builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.Husky.Initializer"></a>

```typescript
import { Husky } from '@dxfrontier/projen-template-projects'

new Husky(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Husky.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure Husky for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.Husky.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure Husky for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Husky.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.Husky.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.Husky.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.Husky.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.Husky.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.Husky.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### HuskyBase <a name="HuskyBase" id="@dxfrontier/projen-template-projects.HuskyBase"></a>

Base class for Husky builder implementing all relevant configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.HuskyBase.Initializer"></a>

```typescript
import { HuskyBase } from '@dxfrontier/projen-template-projects'

new HuskyBase(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure Husky for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.HuskyBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure Husky for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyBase.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyBase.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyBase.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.HuskyBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.HuskyBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.HuskyBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### HuskyJsii <a name="HuskyJsii" id="@dxfrontier/projen-template-projects.HuskyJsii"></a>

Husky builder implementing all relevant configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.HuskyJsii.Initializer"></a>

```typescript
import { HuskyJsii } from '@dxfrontier/projen-template-projects'

new HuskyJsii(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyJsii.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure Husky for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.HuskyJsii.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure Husky for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyJsii.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyJsii.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.HuskyJsii.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.HuskyJsii.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.HuskyJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.HuskyJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### NpmPackage <a name="NpmPackage" id="@dxfrontier/projen-template-projects.NpmPackage"></a>

NPM Package builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.NpmPackage.Initializer"></a>

```typescript
import { NpmPackage } from '@dxfrontier/projen-template-projects'

new NpmPackage(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackage.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure NPM Package for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmPackage.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure NPM Package for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackage.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackage.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackage.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.NpmPackage.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.NpmPackage.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.NpmPackage.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### NpmPackageBase <a name="NpmPackageBase" id="@dxfrontier/projen-template-projects.NpmPackageBase"></a>

Base class for NPM Package builder implementing all relevant configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.NpmPackageBase.Initializer"></a>

```typescript
import { NpmPackageBase } from '@dxfrontier/projen-template-projects'

new NpmPackageBase(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackageBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure NPM for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmPackageBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure NPM for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackageBase.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackageBase.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackageBase.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.NpmPackageBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.NpmPackageBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.NpmPackageBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### NpmPackageJsii <a name="NpmPackageJsii" id="@dxfrontier/projen-template-projects.NpmPackageJsii"></a>

NPM Package builder implementing all relevant configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.NpmPackageJsii.Initializer"></a>

```typescript
import { NpmPackageJsii } from '@dxfrontier/projen-template-projects'

new NpmPackageJsii(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackageJsii.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure NPM Package for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.NpmPackageJsii.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure NPM Package for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackageJsii.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackageJsii.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.NpmPackageJsii.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.NpmPackageJsii.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.NpmPackageJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.NpmPackageJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### Prettier <a name="Prettier" id="@dxfrontier/projen-template-projects.Prettier"></a>

Prettier builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.Prettier.Initializer"></a>

```typescript
import { Prettier } from '@dxfrontier/projen-template-projects'

new Prettier(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Prettier.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure Prettier for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.Prettier.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure Prettier for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.Prettier.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.Prettier.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.Prettier.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.Prettier.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.Prettier.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.Prettier.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### PrettierBase <a name="PrettierBase" id="@dxfrontier/projen-template-projects.PrettierBase"></a>

Base class for Prettier builder implementing all relevant configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.PrettierBase.Initializer"></a>

```typescript
import { PrettierBase } from '@dxfrontier/projen-template-projects'

new PrettierBase(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure Prettier for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.PrettierBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure Prettier for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierBase.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierBase.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierBase.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.PrettierBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.PrettierBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.PrettierBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### PrettierJsii <a name="PrettierJsii" id="@dxfrontier/projen-template-projects.PrettierJsii"></a>

Prettier builder implementing all relevant configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.PrettierJsii.Initializer"></a>

```typescript
import { PrettierJsii } from '@dxfrontier/projen-template-projects'

new PrettierJsii(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierJsii.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure Prettier for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.PrettierJsii.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure Prettier for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierJsii.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierJsii.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.PrettierJsii.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.PrettierJsii.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.PrettierJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.PrettierJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### SampleCode <a name="SampleCode" id="@dxfrontier/projen-template-projects.SampleCode"></a>

SampleCode builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.SampleCode.Initializer"></a>

```typescript
import { SampleCode } from '@dxfrontier/projen-template-projects'

new SampleCode(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCode.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure SampleCode for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.SampleCode.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure SampleCode for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCode.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCode.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.SampleCode.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.SampleCode.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.SampleCode.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.SampleCode.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### VsCode <a name="VsCode" id="@dxfrontier/projen-template-projects.VsCode"></a>

VsCode builder implementing all relevant configuration for the project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.VsCode.Initializer"></a>

```typescript
import { VsCode } from '@dxfrontier/projen-template-projects'

new VsCode(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCode.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure VsCode Package for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.VsCode.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure VsCode Package for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCode.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCode.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCode.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.VsCode.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.VsCode.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.VsCode.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### VsCodeBase <a name="VsCodeBase" id="@dxfrontier/projen-template-projects.VsCodeBase"></a>

Base class for VsCode builder implementing all relevant configuration.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.VsCodeBase.Initializer"></a>

```typescript
import { VsCodeBase } from '@dxfrontier/projen-template-projects'

new VsCodeBase(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeBase.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure VsCode builder for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.VsCodeBase.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure VsCode builder for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeBase.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeBase.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeBase.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.VsCodeBase.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.VsCodeBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.VsCodeBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.




### VsCodeJsii <a name="VsCodeJsii" id="@dxfrontier/projen-template-projects.VsCodeJsii"></a>

VsCode builder implementing all relevant configuration for the Jsii project.

#### Initializers <a name="Initializers" id="@dxfrontier/projen-template-projects.VsCodeJsii.Initializer"></a>

```typescript
import { VsCodeJsii } from '@dxfrontier/projen-template-projects'

new VsCodeJsii(project: TypeScriptProjectBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeJsii.Initializer.parameter.project">project</a></code> | <code><a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a></code> | The project to configure VsCode Package for. |

---

##### `project`<sup>Required</sup> <a name="project" id="@dxfrontier/projen-template-projects.VsCodeJsii.Initializer.parameter.project"></a>

- *Type:* <a href="#@dxfrontier/projen-template-projects.TypeScriptProjectBase">TypeScriptProjectBase</a>

The project to configure VsCode Package for.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeJsii.initialize">initialize</a></code> | Initialize builder configuration for the project. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeJsii.postSynthesize">postSynthesize</a></code> | Hook to be called after synthesis. |
| <code><a href="#@dxfrontier/projen-template-projects.VsCodeJsii.preSynthesize">preSynthesize</a></code> | Hook to be called before synthesis. |

---

##### `initialize` <a name="initialize" id="@dxfrontier/projen-template-projects.VsCodeJsii.initialize"></a>

```typescript
public initialize(): void
```

Initialize builder configuration for the project.

##### `postSynthesize` <a name="postSynthesize" id="@dxfrontier/projen-template-projects.VsCodeJsii.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Hook to be called after synthesis.

##### `preSynthesize` <a name="preSynthesize" id="@dxfrontier/projen-template-projects.VsCodeJsii.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Hook to be called before synthesis.





