import { TrailingComma } from 'projen/lib/javascript/prettier';
import { type ProjenStandardScript, IScripts } from '../types/common';

const constants = {
  GITHUB: {
    BUG_ISSUE_FILE_PATH: '.github/ISSUE_TEMPLATE/bug.yml',
    PULL_REQUEST_TEMPLATE: [
      '## Reviewers Checklist',
      '',
      'for complete review list refer to ABS Loop - Review Aspects',
      '',
      '### Organizational Section',
      '',
      '- [ ] PR is assigned to the according feature/bug',
      '- [ ] Feature/bug is descriptive',
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
      '<!-- Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".-->',
    ],
    BUG_ISSUE_TEMPLATE: [
      'name: 🐞 Bug',
      'description: File a bug/issue',
      'title: "[BUG] < title >"',
      'labels: ["type: bug"]',
      'body:',
      '  - type: textarea',
      '    attributes:',
      '      label: Current behavior',
      '      description: A description of what you\'re experiencing.',
      '    validations:',
      '      required: true',
      '',
      '  - type: textarea',
      '    attributes:',
      '      label: Expected behavior',
      '      description: A description of what you expected to happen.',
      '    validations:',
      '      required: true',
      '# Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".',
    ],
    FEATURE_ISSUE_FILE_PATH: '.github/ISSUE_TEMPLATE/feature.yml',
    FEATURE_ISSUE_TEMPLATE: [
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
      '# Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".',
    ],
    QUESTION_ISSUE_FILE_PATH: '.github/ISSUE_TEMPLATE/question.yml',
    QUESTION_ISSUE_TEMPLATE: [
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
      '# Generated by projen. To modify, edit .projenrc.ts and run \"npx projen\".',
    ],
  },
  DEV_CONTAINER: {
    FILE_PATH: '.devcontainer.json',
    DOCKER_IMAGE: 'mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye',
    FEATURES: {
      'ghcr.io/devcontainers-contrib/features/curl-apt-get': 'latest',
      'ghcr.io/devcontainers/features/github-cli': 'latest',
      'ghcr.io/devcontainers-contrib/features/projen': 'latest',
    },
    EXTENSIONS: [
      // Jest
      'Orta.vscode-jest',
      'firsttris.vscode-jest-runner',

      // Rest
      'humao.rest-client',

      // VSCode
      'aaron-bond.better-comments',
      'alefragnani.Bookmarks',
      'alefragnani.project-manager',

      // NPM
      'christian-kohler.npm-intellisense',
      'mskelton.npm-outdated',

      // Theme
      'PKief.material-icon-theme',
      'zhuangtongfa.material-theme',
      'GitHub.github-vscode-theme',

      // Docker
      'ms-vscode-remote.remote-containers',

      // .env
      'mikestead.dotenv',

      // TypeScript
      'usernamehw.errorlens',
      'dbaeumer.vscode-eslint',
      'oderwat.indent-rainbow',
      'esbenp.prettier-vscode',
      'YoavBls.pretty-ts-errors',
      'streetsidesoftware.code-spell-checker',
      'wayou.vscode-todo-highlight',
      'mike-co.import-sorter',
      'VisualStudioExptTeam.vscodeintellicode',

      // XML & YAML'
      'redhat.vscode-yaml',
      'DotJoshJohnson.xml',

      // Git
      'waderyan.gitblame',
      'donjayamanne.githistory',
      'GitHub.vscode-pull-request-github',

      // README
      'yzhang.markdown-all-in-one',
      'DavidAnson.vscode-markdownlint',
      'bierner.jsdoc-markdown-highlighting',

      // Others
      'VisualStudioExptTeam.vscodeintellicode',
      'christian-kohler.path-intellisense',
      'AykutSarac.jsoncrack-vscode',
      'tamasfe.even-better-toml',
    ],
  },
  VS_CODE: {
    SETTINGS: {
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
    },
  },
  NPM_PACKAGE: {
    PROJEN_STANDARD_SCRIPTS: [
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
    ] as ProjenStandardScript[],
  },
  PRETTIER: {
    SETTINGS: {
      files: '*.*',
      options: {
        semi: true,
        trailingComma: TrailingComma.ALL,
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
      },
    },
    SCRIPTS: {
      MESSAGE: {
        NAME: 'format:message',
        EXEC: 'echo "Prettier started ...',
      },
      FIX: {
        NAME: 'format:fix',
        EXEC: 'prettier. --write',
      },
    } as IScripts,
  },
};

export default constants;