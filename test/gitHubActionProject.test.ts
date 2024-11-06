import { Tasks } from 'projen';
import { SynthOutput, synthSnapshot } from 'projen/lib/util/synth';
import { GitHubActionProject, GitHubActionProjectOptions } from '../src';
import { Scripts, type ProjenStandardScript } from '../src/types/script';

describe('GitHubActionProject', (): void => {
  let props: GitHubActionProjectOptions;
  let snapshot: SynthOutput;

  beforeEach((): void => {
    props = {
      name: 'my-github-action',
      defaultReleaseBranch: 'main', // this is needed due to https://github.com/projen/projen/pull/524
      description: 'my-description',
      repository: 'my-repository',
    };

    snapshot = [];
  });

  describe('NPM Package', (): void => {
    test('Dynamic options in package.json are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['package.json']!.name).toBe('my-github-action');
      expect(snapshot['package.json']!.description).toBe('my-description');
      expect(snapshot['package.json']!.repository).toStrictEqual({
        type: 'git',
        url: 'my-repository',
      });
    });

    test('Projen standard npm scripts are removed from package.json', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const keys: string[] = Object.keys(snapshot['package.json']!.scripts);
      const scriptsToRemove: ProjenStandardScript[] = [
        'bump',
        'clobber',
        'compile',
        'default',
        'eject',
        'eslint',
        'package',
        'post-compile',
        'post-upgrade',
        'pre-compile',
        'release',
        'test',
        'test:watch',
        'unbump',
        'upgrade',
        'watch',
        'projen',
      ];
      const keyFound: boolean = keys.some((key: string): boolean =>
        scriptsToRemove.includes(key as ProjenStandardScript),
      );
      expect(keyFound).toBe(false);
    });

    test('Files property in package.json is set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedFiles: string[] = ['lib', 'README.md', 'LICENSE'];
      expect(snapshot['package.json']!.files).toStrictEqual(expectedFiles);
    });

    test('NPM Package related files are added to .gitattributes and defined as linguist-generated', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['.gitattributes']).toMatch(/\/\.npmignore linguist-generated( $|\s|$)/m);
    });
  });

  describe('DevContainers', (): void => {
    test('Container image is set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['.devcontainer.json'].image).toBe(
        'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
      );
    });

    test('Container features are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedFeatures = {
        'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
        'ghcr.io/devcontainers/features/github-cli': 'latest',
        'ghcr.io/devcontainers-contrib/features/projen': 'latest',
      };
      expect(snapshot['.devcontainer.json'].features).toStrictEqual(expectedFeatures);
    });

    test('Container VSCode extensions are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
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
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedTask = {
        name: 'install-dependencies',
        steps: [{ exec: 'npm install' }],
      };
      expect(snapshot['.devcontainer.json'].postCreateCommand).toBe('npx projen install-dependencies');
      expect(snapshot['.projen/tasks.json'].tasks).toHaveProperty('install-dependencies');
      expect(snapshot['.projen/tasks.json'].tasks['install-dependencies']).toMatchObject(expectedTask);
    });

    test('DevContainer related files are added to .gitattributes and defined as linguist-generated', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['.gitattributes']).toMatch(/\/\.devcontainer\.json linguist-generated( $|\s|$)/m);
    });
  });

  describe('Visual Studio Code', (): void => {
    test('VSCode settings are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedSettings = {
        '//': '~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".',
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
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['.gitattributes']).toMatch(/\/\.vscode\/settings\.json linguist-generated( $|\s|$)/m);
    });
  });

  describe('GitHub', (): void => {
    describe('GitHub Templates', (): void => {
      test('PR template matches expected template', (): void => {
        // GIVEN
        const project = new GitHubActionProject(props);

        // WHEN
        snapshot = synthSnapshot(project);

        // THEN
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
        // GIVEN
        const project = new GitHubActionProject(props);

        // WHEN
        snapshot = synthSnapshot(project);

        // THEN
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
        // GIVEN
        const project = new GitHubActionProject(props);

        // WHEN
        snapshot = synthSnapshot(project);

        // THEN
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
        // GIVEN
        const project = new GitHubActionProject(props);

        // WHEN
        snapshot = synthSnapshot(project);

        // THEN
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
        // GIVEN
        const project = new GitHubActionProject(props);

        // WHEN
        snapshot = synthSnapshot(project);

        // THEN
        const keys: string[] = Object.keys(snapshot).filter((key: string): boolean =>
          key.includes('.github/workflows'),
        );
        expect(keys.length).toEqual(2); // release and stale workflows are custom created
      });

      test('Release workflow template matches expected template', (): void => {
        // GIVEN
        const project = new GitHubActionProject(props);

        // WHEN
        snapshot = synthSnapshot(project);

        // THEN
        const expectedTemplateLines: string = [
          '# ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".',
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
        // GIVEN
        const project = new GitHubActionProject(props);

        // WHEN
        snapshot = synthSnapshot(project);

        // THEN
        const expectedTemplateLines: string = [
          '# ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".',
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
    });

    test('GitHub related files are added to .gitattributes and defined as linguist-generated', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['.gitattributes']).toMatch(/\/\.github\/pull_request_template\.md linguist-generated( $|\s|$)/m);
      expect(snapshot['.gitattributes']).toMatch(/\/\.github\/ISSUE_TEMPLATE\/bug\.yml linguist-generated( $|\s|$)/m);
      expect(snapshot['.gitattributes']).toMatch(
        /\/\.github\/ISSUE_TEMPLATE\/feature\.yml linguist-generated( $|\s|$)/m,
      );
      expect(snapshot['.gitattributes']).toMatch(
        /\/\.github\/ISSUE_TEMPLATE\/question\.yml linguist-generated( $|\s|$)/m,
      );
    });
  });

  describe('Prettier', (): void => {
    test('Prettier settings are set properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
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
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const keys: string[] = Object.keys(snapshot['package.json']!.scripts);
      const expectedScripts: string[] = ['format:fix', 'format:message'];
      const expectedCommands: Scripts = {
        'format:message': 'echo "Prettier started ..."',
        'format:fix': 'prettier . --write',
      };
      const keyFound: boolean = keys.some((key: string): boolean => expectedScripts.includes(key));
      const tasks: Tasks = snapshot['.projen/tasks.json'].tasks;

      expect(keyFound).toBe(true);
      for (const [name, command] of Object.entries(tasks)) {
        if (expectedScripts.includes(name)) {
          const commandFound: boolean = command.steps.some(
            (step: { exec: string }): boolean => step.exec === expectedCommands[name],
          );
          expect(commandFound).toBe(true);
        }
      }
    });

    test('Prettier related files are added to .gitattributes and defined as linguist-generated', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['.gitattributes']).toMatch(/\/\.prettierignore linguist-generated( $|\s|$)/m);
      expect(snapshot['.gitattributes']).toMatch(/\/\.prettierrc\.json linguist-generated( $|\s|$)/m);
    });
  });

  describe('Husky', (): void => {
    test('Commit-msg hook template matches expected template', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedTemplateLines: string = [
        '# Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
        '',
        'npx --no-install commitlint --edit "$1"',
      ].join('\n');
      expect(snapshot['.husky/commit-msg']).toStrictEqual(expectedTemplateLines);
    });

    test('Pre-commit hook template matches expected template', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const expectedTemplateLines: string = [
        '# Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
        '',
        'npx lint-staged',
      ].join('\n');
      expect(snapshot['.husky/pre-commit']).toStrictEqual(expectedTemplateLines);
    });

    test('Husky npm scripts are added properly', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      const keys: string[] = Object.keys(snapshot['package.json']!.scripts);
      const expectedScripts: string[] = ['prepare'];
      const expectedCommands: Scripts = {
        prepare: 'husky || true',
      };
      const keyFound: boolean = keys.some((key: string): boolean => expectedScripts.includes(key));
      const tasks: Tasks = snapshot['.projen/tasks.json'].tasks;

      expect(keyFound).toBe(true);
      for (const [name, command] of Object.entries(tasks)) {
        if (expectedScripts.includes(name)) {
          const commandFound: boolean = command.steps.some(
            (step: { exec: string }): boolean => step.exec === expectedCommands[name],
          );
          expect(commandFound).toBe(true);
        }
      }
    });

    test('Husky related files are added to .gitattributes and defined as linguist-generated', (): void => {
      // GIVEN
      const project = new GitHubActionProject(props);

      // WHEN
      snapshot = synthSnapshot(project);

      // THEN
      expect(snapshot['.gitattributes']).toMatch(/\/\.husky\/commit-msg linguist-generated( $|\s|$)/m);
      expect(snapshot['.gitattributes']).toMatch(/\/\.husky\/pre-commit linguist-generated( $|\s|$)/m);
    });
  });
});
