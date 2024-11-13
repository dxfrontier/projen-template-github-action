import { cdk, javascript } from 'projen';
import { JsiiProject } from 'projen/lib/cdk/index';
import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { testNpmScriptsAddedProperly } from './util.ts';
import { LintStagedConfig, TaskSteps } from '../src/types/types.ts';

jest.mock('projen', (): any => ({
  javascript: {
    NodePackageManager: {
      NPM: 'npm',
    },
  },
  cdk: {
    JsiiProject: jest.fn().mockImplementation((_config: any): Record<string, any> => {
      return {
        synth: jest.fn(),
        addFields: jest.fn(),
        gitattributes: {
          addAttributes: jest.fn(),
        },
        addTask: jest.fn(),
        addDevDeps: jest.fn(),
      };
    }),
  },
  JsonFile: jest.fn(),
  TextFile: jest.fn(),
}));

jest.mock('projen/lib/github/pr-template', (): any => {
  return {
    PullRequestTemplate: jest.fn(),
  };
});

describe('JsiiProject', (): void => {
  let project: JsiiProject;
  let snapshot: SynthOutput;

  describe('Static configuration', (): void => {
    beforeEach(async (): Promise<void> => {
      const projenrc = await import('../.projenrc.ts');
      project = projenrc.project;
    });

    afterEach((): void => {
      jest.resetAllMocks();
      jest.resetModules();
    });

    afterAll((): void => {
      jest.unmock('projen');
      jest.unmock('projen/lib/github/pr-template');
      jest.unmock('projen/lib/github');
    });

    test('Configuration is set properly', async (): Promise<void> => {
      expect(cdk.JsiiProject).toHaveBeenCalledWith({
        author: 'Mathias von Kaiz',
        authorAddress: 'mathias.von-kaiz@abs-gmbh.de',
        repositoryUrl: 'https://github.com/dxfrontier/projen-template-projects.git',
        copyrightOwner: 'ABS GmbH',
        defaultReleaseBranch: 'main',
        name: 'projen-template-projects',
        packageManager: javascript.NodePackageManager.NPM,
        projenrcTs: true,
        jsiiVersion: '~5.5.0',
        prettier: true,
        githubOptions: {
          mergify: false,
          pullRequestLint: false,
        },
        buildWorkflow: false,
        release: false,
        pullRequestTemplate: false,
        depsUpgrade: false,
        peerDeps: ['projen'],
        bundledDeps: ['construct'],
        tsconfig: {
          compilerOptions: {
            allowImportingTsExtensions: true,
          },
        },
      });
    });

    test('Mock of synth function was successful to avoid installation process', (): void => {
      expect(project.synth).toHaveBeenCalledTimes(1);
    });
  });

  describe('Additional Configuration', (): void => {
    beforeEach(async (): Promise<void> => {
      const jsiiProject = jest.requireActual('projen/lib/cdk/index').JsiiProject;

      jest.spyOn(jsiiProject.prototype, 'synth').mockImplementation();

      const projenrc = await import('../.projenrc.ts');
      project = projenrc.project;

      jsiiProject.prototype.synth.mockRestore();
      snapshot = synthSnapshot(project);
    });

    afterEach((): void => {
      jest.resetAllMocks();
      jest.resetModules();
    });

    describe('NPM Package', (): void => {
      test('Files property in package.json is set properly', (): void => {
        const expectedFiles: string[] = ['lib', 'README.md', 'LICENSE'];
        expect(snapshot['package.json']!.files).toStrictEqual(expectedFiles);
      });

      test('NPM Package related files are added to .gitattributes and defined as linguist-generated', (): void => {
        expect(snapshot['.gitattributes']).toMatch(/\/\.npmignore linguist-generated( $|\s|$)/m);
        expect(snapshot['.gitattributes']).toMatch(/\/\.eslintrc\.json linguist-generated( $|\s|$)/m);
        expect(snapshot['.gitattributes']).toMatch(/\/tsconfig\.dev\.json linguist-generated( $|\s|$)/m);
        expect(snapshot['.gitattributes']).toMatch(/\/tsconfig\.json linguist-generated( $|\s|$)/m);
      });
    });

    describe('DevContainers', (): void => {
      test('Container image is set properly', (): void => {
        expect(snapshot['.devcontainer.json'].image).toBe(
          'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
        );
      });

      test('Container features are set properly', (): void => {
        const expectedFeatures = {
          'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
          'ghcr.io/devcontainers/features/github-cli': 'latest',
          'ghcr.io/devcontainers-contrib/features/projen': 'latest',
        };
        expect(snapshot['.devcontainer.json'].features).toStrictEqual(expectedFeatures);
      });

      test('Container VSCode extensions are set properly', (): void => {
        const expectedExtensions: string[] = [
          'Orta.vscode-jest',
          'firsttris.vscode-jest-runner',
          'humao.rest-client',
          'aaron-bond.better-comments',
          'alefragnani.Bookmarks',
          'alefragnani.project-manager',
          'christian-kohler.npm-intellisense',
          'mskelton.npm-outdated',
          'PKief.material-icon-theme',
          'zhuangtongfa.material-theme',
          'GitHub.github-vscode-theme',
          'ms-vscode-remote.remote-containers',
          'mikestead.dotenv',
          'usernamehw.errorlens',
          'dbaeumer.vscode-eslint',
          'oderwat.indent-rainbow',
          'esbenp.prettier-vscode',
          'YoavBls.pretty-ts-errors',
          'streetsidesoftware.code-spell-checker',
          'wayou.vscode-todo-highlight',
          'mike-co.import-sorter',
          'VisualStudioExptTeam.vscodeintellicode',
          'redhat.vscode-yaml',
          'DotJoshJohnson.xml',
          'waderyan.gitblame',
          'donjayamanne.githistory',
          'GitHub.vscode-pull-request-github',
          'yzhang.markdown-all-in-one',
          'DavidAnson.vscode-markdownlint',
          'bierner.jsdoc-markdown-highlighting',
          'VisualStudioExptTeam.vscodeintellicode',
          'christian-kohler.path-intellisense',
          'AykutSarac.jsoncrack-vscode',
          'tamasfe.even-better-toml',
        ];
        expect(snapshot['.devcontainer.json'].customizations.vscode.extensions).toStrictEqual(expectedExtensions);
      });

      test('Container postCreateCommand is set properly', (): void => {
        const expectedTasks: TaskSteps = {
          'install-dependencies': ['npm install'],
        };
        expect(snapshot['.devcontainer.json'].postCreateCommand).toBe(
          snapshot['package.json']!.scripts['install-dependencies'],
        );
        testNpmScriptsAddedProperly(snapshot, expectedTasks);
      });

      test('DevContainer related files are added to .gitattributes and defined as linguist-generated', (): void => {
        expect(snapshot['.gitattributes']).toMatch(/\/\.devcontainer\.json linguist-generated( $|\s|$)/m);
      });
    });

    describe('Visual Studio Code', (): void => {
      test('VSCode settings are set properly', (): void => {
        const expectedSettings = {
          '//': '~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
          'editor.tabSize': 2,
          'editor.stickyTabStops': true,
          'typescript.inlayHints.parameterNames.enabled': 'all',
          'typescript.inlayHints.enumMemberValues.enabled': true,
          'typescript.inlayHints.variableTypes.enabled': true,
          'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
          'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
          'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
          'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
          'typescript.inlayHints.parameterTypes.enabled': true,
          'editor.inlayHints.fontSize': 10,
          'editor.inlayHints.padding': true,
          'editor.formatOnSave': true,
          'editor.formatOnPaste': true,
        };
        expect(snapshot['.vscode/settings.json']).toStrictEqual(expectedSettings);
      });

      test('VSCode related files are added to .gitattributes and defined as linguist-generated', (): void => {
        expect(snapshot['.gitattributes']).toMatch(/\/\.vscode\/settings\.json linguist-generated( $|\s|$)/m);
      });
    });

    describe('GitHub', (): void => {
      describe('GitHub Templates', (): void => {
        test('PR template matches expected template', (): void => {
          const expectedTemplateLines: string = [
            '## Reviewers Checklist',
            '',
            'for complete review list refer to ABS Loop - Review Aspects',
            '',
            '### Organizational Section',
            '',
            '- [ ] PR is assigned to the according feature/bug',
            '- [ ] Feature/bug is descriptive',
            '- [ ] Feature/bug is assigned to according labels',
            '- [ ] Feature/bug is assigned to a developer',
            '',
            '### Structure',
            '',
            '- [ ] Readability: Code is easy to understand, with meaningful names for variables, functions, and classes',
            '- [ ] Comments: Meaningful and helpful comments. Code is documented without being over-commented',
            '- [ ] DRY, KISS and YAGNI: Code implements only necessary features; no over-engineering',
            '- [ ] No sensitive data (e.g., passwords, API keys) in the code',
            '- [ ] No major updates for used packages',
            '',
            '### Testing',
            '',
            '- [ ] Code is locally tested by developer (if applicable)',
            '- [ ] Automated tests pass successfully',
            '<!-- Generated by projen. To modify, edit .projenrc.ts and run "npx projen".-->',
          ].join('\n');
          expect(snapshot['.github/pull_request_template.md']).toBe(expectedTemplateLines);
        });

        test('Bug issue template matches expected template', (): void => {
          const expectedTemplateLines: string = [
            'name: 🐞 Bug',
            'description: File a bug/issue',
            'title: "[BUG] <title>"',
            'labels: ["type: bug"]',
            'body:',
            '  - type: textarea',
            '    attributes:',
            '      label: Current behavior',
            "      description: A description of what you're experiencing.",
            '    validations:',
            '      required: true',
            '',
            '  - type: textarea',
            '    attributes:',
            '      label: Expected behavior',
            '      description: A description of what you expected to happen.',
            '    validations:',
            '      required: true',
            '# Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
          ].join('\n');
          expect(snapshot['.github/ISSUE_TEMPLATE/bug.yml']).toBe(expectedTemplateLines);
        });

        test('Feature issue template matches expected template', (): void => {
          const expectedTemplateLines: string = [
            'name: 💡 Feature',
            'description: Story related feature',
            'title: "[FEATURE] <title>"',
            'labels: ["type: feature"]',
            'body:',
            '  - type: textarea',
            '    attributes:',
            '      label: Description',
            '      description: A description of the feature.',
            '    validations:',
            '      required: true',
            '',
            '  - type: textarea',
            '    attributes:',
            '      label: Task List',
            '      description: Describe the steps to fulfill the feature.',
            '      value: |',
            '        - [ ] My First Task',
            '    validations:',
            '      required: true',
            '# Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
          ].join('\n');
          expect(snapshot['.github/ISSUE_TEMPLATE/feature.yml']).toBe(expectedTemplateLines);
        });

        test('Question issue template matches expected template', (): void => {
          const expectedTemplateLines: string = [
            'name: ❓ Question',
            'description: Ask a question',
            'title: "[QUESTION] <title>"',
            'labels: ["type: question"]',
            'body:',
            '  - type: textarea',
            '    attributes:',
            '      label: Question',
            '      description: What would you like to know? If you encounter unusual behavior or identified a missing feature, consider opening a bug report instead.',
            '    validations:',
            '      required: true',
            '# Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
          ].join('\n');
          expect(snapshot['.github/ISSUE_TEMPLATE/question.yml']).toBe(expectedTemplateLines);
        });
      });

      describe('GitHub Workflows', (): void => {
        test('Projen standard workflows are removed', (): void => {
          const keys: string[] = Object.keys(snapshot).filter((key: string): boolean =>
            key.includes('.github/workflows'),
          );
          expect(keys.length).toEqual(2); // release and stale workflows are custom created
        });

        test('Release workflow template matches expected template', (): void => {
          const expectedTemplateLines: string = [
            '# ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
            '',
            'name: Release',
            'on:',
            '  pull_request:',
            '    branches:',
            '      - main',
            '    types:',
            '      - closed',
            'jobs:',
            '  release:',
            '    runs-on: ubuntu-latest',
            '    permissions:',
            '      contents: write',
            '      pull-requests: write',
            '    steps:',
            '      - name: Create release',
            '        uses: dxfrontier/gh-action-release@main',
            '        with:',
            '          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}',
            '          BRANCH: main',
            '',
          ].join('\n');
          expect(snapshot['.github/workflows/release.yml']).toBe(expectedTemplateLines);
        });

        test('Stale workflow template matches expected template', (): void => {
          const expectedTemplateLines: string = [
            '# ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
            '',
            'name: Stale',
            'on:',
            '  schedule:',
            '    - cron: 36 18 * * *',
            'jobs:',
            '  stale:',
            '    runs-on: ubuntu-latest',
            '    permissions:',
            '      issues: write',
            '      pull-requests: write',
            '    steps:',
            '      - uses: actions/stale@v5',
            '        with:',
            '          repo-token: ${{ secrets.GITHUB_TOKEN }}',
            '          days-before-issue-stale: 30',
            '          stale-issue-message: This issue has not been updated in a while. If it is still relevant, please comment on it to keep it open. The issue will be closed soon if it remains inactive.',
            '          close-issue-message: This issue has been closed automatically due to inactivity.',
            '          stale-pr-message: This PR has not been updated in a while. If it is still relevant, please comment on it to keep it open. The PR will be closed soon if it remains inactive.',
            '          close-pr-message: This PR has been closed automatically due to inactivity.',
            '          stale-issue-label: "status: stale"',
            '          stale-pr-label: "status: stale"',
            '          exempt-issue-labels: "type: feature request"',
            '          exempt-pr-labels: "type: feature request"',
            '          exempt-all-milestones: true',
            '',
          ].join('\n');
          expect(snapshot['.github/workflows/stale.yml']).toBe(expectedTemplateLines);
        });

        test('Cliff toml template matches expected template', (): void => {
          const expectedTemplateLines: string = [
            '# ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
            '',
            '[changelog]',
            '# changelog header',
            'header = """',
            '# Changelog\n',
            'All notable changes to this project will be documented in this file.\n',
            '"""',
            '# template for the changelog body',
            '# https://keats.github.io/tera/docs/#introduction',
            'body = """',
            '{% if version %}\\',
            '    ## [{{ version | trim_start_matches(pat="v") }}] - {{ timestamp | date(format="%Y-%m-%d") }}',
            '{% else %}\\',
            '    ## [unreleased]',
            '{% endif %}\\',
            '{% for group, commits in commits | group_by(attribute="group") %}',
            '    ### {{ group | striptags | trim | upper_first }}',
            '    {% for commit in commits %}',
            '        - {% if commit.scope %}*({{ commit.scope }})* {% endif %}\\',
            '            {% if commit.breaking %}[**breaking**] {% endif %}\\',
            '            {{ commit.message | upper_first }}\\',
            '    {% endfor %}',
            '{% endfor %}\\',
            '"""',
            '# template for the changelog footer',
            'footer = """',
            '<!-- generated by git-cliff -->',
            '"""',
            '# remove the leading and trailing s',
            'trim = true',
            '# postprocessors',
            'postprocessors = [',
            '  # { pattern = "<REPO>", replace = "https://github.com/orhun/git-cliff" }, # replace repository URL',
            ']',
            '',
            '[git]',
            '# parse the commits based on https://www.conventionalcommits.org',
            'conventional_commits = true',
            '# filter out the commits that are not conventional',
            'filter_unconventional = true',
            '# process each line of a commit as an individual commit',
            'split_commits = false',
            '# regex for preprocessing the commit messages',
            'commit_preprocessors = [',
            '  # Replace issue numbers',
            '  #{ pattern = "\\((\\w+\\s)?#([0-9]+)\\)", replace = "([#${2}](<REPO>/issues/${2}))"},',
            '  # Check spelling of the commit with https://github.com/crate-ci/typos',
            '  # If the spelling is incorrect, it will be automatically fixed.',
            '  #{ pattern = ".*", replace_command = "typos --write-changes -" },',
            ']',
            '# regex for parsing and grouping commits',
            'commit_parsers = [',
            '  { message = "^feat", group = "<!-- 0 -->🚀 Features" },',
            '  { message = "^fix", group = "<!-- 1 -->🐛 Bug Fixes" },',
            '  { message = "^doc", group = "<!-- 3 -->📚 Documentation" },',
            '  { message = "^perf", group = "<!-- 4 -->⚡ Performance" },',
            '  { message = "^refactor", group = "<!-- 2 -->🚜 Refactor" },',
            '  { message = "^style", group = "<!-- 5 -->🎨 Styling" },',
            '  { message = "^test", group = "<!-- 6 -->🧪 Testing" },',
            '  { message = "^chore\\(release\\): prepare for", skip = true },',
            '  { message = "^chore\\(deps.*\\)", skip = true },',
            '  { message = "^chore\\(pr\\)", skip = true },',
            '  { message = "^chore\\(pull\\)", skip = true },',
            '  { message = "^chore|^ci", group = "<!-- 7 -->⚙️ Miscellaneous Tasks" },',
            '  { body = ".*security", group = "<!-- 8 -->🛡️ Security" },',
            '  { message = "^revert", group = "<!-- 9 -->◀️ Revert" },',
            ']',
            '# protect breaking changes from being skipped due to matching a skipping commit_parser',
            'protect_breaking_commits = false',
            '# filter out the commits that are not matched by commit parsers',
            'filter_commits = false',
            '# regex for matching git tags',
            '# tag_pattern = "v[0-9].*"',
            '# regex for skipping tags',
            '# skip_tags = ""',
            '# regex for ignoring tags',
            '# ignore_tags = ""',
            '# sort the tags topologically',
            'topo_order = false',
            '# sort the commits inside sections by oldest/newest order',
            'sort_commits = "oldest"',
            '# limit the number of commits included in the changelog.',
            '# limit_commits = 42',
          ].join('\n');
          expect(snapshot['cliff.toml']).toBe(expectedTemplateLines);
        });
      });

      test('GitHub related files are added to .gitattributes and defined as linguist-generated', (): void => {
        expect(snapshot['.gitattributes']).toMatch(
          /\/\.github\/pull_request_template\.md linguist-generated( $|\s|$)/m,
        );
        expect(snapshot['.gitattributes']).toMatch(/\/\.github\/ISSUE_TEMPLATE\/bug\.yml linguist-generated( $|\s|$)/m);
        expect(snapshot['.gitattributes']).toMatch(
          /\/\.github\/ISSUE_TEMPLATE\/feature\.yml linguist-generated( $|\s|$)/m,
        );
        expect(snapshot['.gitattributes']).toMatch(
          /\/\.github\/ISSUE_TEMPLATE\/question\.yml linguist-generated( $|\s|$)/m,
        );
        expect(snapshot['.gitattributes']).toMatch(/\/cliff\.toml linguist-generated( $|\s|$)/m);
      });
    });

    describe('Prettier', (): void => {
      test('Prettier settings are set properly', (): void => {
        const expectedSettings = {
          overrides: [
            {
              files: '*.*',
              options: {
                semi: true,
                trailingComma: 'all',
                singleQuote: true,
                printWidth: 120,
                tabWidth: 2,
              },
            },
          ],
        };
        expect(snapshot['.prettierrc.json']).toStrictEqual(expectedSettings);
      });

      test('Prettier npm scripts are added properly', (): void => {
        const expectedTasks: TaskSteps = {
          'format:message': ['echo "Prettier started ..."'],
          'format:fix': ['prettier . --write'],
        };
        testNpmScriptsAddedProperly(snapshot, expectedTasks);
      });

      test('Prettier related files are added to .gitattributes and defined as linguist-generated', (): void => {
        expect(snapshot['.gitattributes']).toMatch(/\/\.prettierignore linguist-generated( $|\s|$)/m);
        expect(snapshot['.gitattributes']).toMatch(/\/\.prettierrc\.json linguist-generated( $|\s|$)/m);
      });
    });

    describe('Husky', (): void => {
      test('Commit-msg hook template matches expected template', (): void => {
        const expectedTemplateLines: string = [
          '# Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
          '',
          'npx --no-install commitlint --edit "$1"',
        ].join('\n');
        expect(snapshot['.husky/commit-msg']).toStrictEqual(expectedTemplateLines);
      });

      test('Pre-commit hook template matches expected template', (): void => {
        const expectedTemplateLines: string = [
          '# Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
          '',
          'npx lint-staged',
        ].join('\n');
        expect(snapshot['.husky/pre-commit']).toStrictEqual(expectedTemplateLines);
      });

      test('Husky npm scripts are added properly', (): void => {
        const expectedTasks: TaskSteps = {
          prepare: ['husky || true'],
        };
        testNpmScriptsAddedProperly(snapshot, expectedTasks);
      });

      test('Husky npm devDependencies are added properly', (): void => {
        const expectedDevDependencies: string[] = ['husky'];
        expectedDevDependencies.forEach((dep: string): void => {
          expect(snapshot['package.json']!.devDependencies).toHaveProperty(dep);
        });
      });

      test('Husky related files are added to .gitattributes and defined as linguist-generated', (): void => {
        expect(snapshot['.gitattributes']).toMatch(/\/\.husky\/commit-msg linguist-generated( $|\s|$)/m);
        expect(snapshot['.gitattributes']).toMatch(/\/\.husky\/pre-commit linguist-generated( $|\s|$)/m);
      });
    });

    describe('CommitLint', (): void => {
      test('Commitlintrc typescript template matches expected template', (): void => {
        const expectedTemplateLines: string = [
          '// Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
          '',
          // eslint-disable-next-line prettier/prettier
          'import type { UserConfig } from \'@commitlint/types\';',
          // eslint-disable-next-line prettier/prettier
          'import { RuleConfigSeverity } from \'@commitlint/types\';',
          '',
          'const Configuration: UserConfig = {',
          // eslint-disable-next-line prettier/prettier
          '  extends: [\'@commitlint/config-conventional\'],',
          '  rules: {',
          // eslint-disable-next-line prettier/prettier
          '    \'type-enum\': [',
          '      RuleConfigSeverity.Error,',
          // eslint-disable-next-line prettier/prettier
          '      \'always\',',
          // eslint-disable-next-line prettier/prettier
          '      [\'build\', \'chore\', \'ci\', \'docs\', \'feat\', \'fix\', \'perf\', \'refactor\', \'revert\', \'style\', \'test\', \'delete\'],',
          '    ],',
          // eslint-disable-next-line prettier/prettier
          '    \'scope-empty\': [RuleConfigSeverity.Error, \'never\'],',
          // eslint-disable-next-line prettier/prettier
          '    \'subject-empty\': [RuleConfigSeverity.Error, \'never\'],',
          '  },',
          // eslint-disable-next-line prettier/prettier
          '  helpUrl: \'https://github.com/conventional-changelog/commitlint/#what-is-commitlint\',',
          '};',
          '',
          'export default Configuration;',
        ].join('\n');
        expect(snapshot['.commitlintrc.ts']).toBe(expectedTemplateLines);
      });

      test('CommitLint npm scrips are added properly', (): void => {
        const expectedTasks: TaskSteps = {
          commit: ['commit'],
        };
        testNpmScriptsAddedProperly(snapshot, expectedTasks);
      });

      test('CommitLint configuration in package.json is set properly', (): void => {
        const expectedConfiguration: LintStagedConfig = {
          '**/*.ts': ['npm run eslint', 'npm run format:fix'],
        };
        expect(snapshot['package.json']!['lint-staged']).toStrictEqual(expectedConfiguration);
      });

      test('CommitLint npm devDependencies are added properly', (): void => {
        const expectedDevDependencies: string[] = [
          '@commitlint/cli',
          '@commitlint/config-conventional',
          '@commitlint/prompt-cli',
          '@commitlint/types',
          'lint-staged',
        ];
        expectedDevDependencies.forEach((dep: string): void => {
          expect(snapshot['package.json']!.devDependencies).toHaveProperty(dep);
        });
      });

      test('CommitLint related files are added to .gitattributes and defined as linguist-generated', (): void => {
        expect(snapshot['.gitattributes']).toMatch(/\/\.commitlintrc\.ts linguist-generated( $|\s|$)/m);
      });
    });
  });
});
