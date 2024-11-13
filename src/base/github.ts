import { TextFile } from 'projen';
import { GithubWorkflow, PullRequestTemplate } from 'projen/lib/github';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { TypeScriptProject } from 'projen/lib/typescript';
import { Component } from './component';
import { WorkflowOptions } from '../types';

/**
 * Base class for GitHub component implementeing all relevant configuration.
 */
export abstract class GitHubBase extends Component {
  /**
   * Initializes the base GitHub component.
   * @param project The project to configure GitHub component for.
   */
  constructor(project: TypeScriptProject) {
    super(project);
  }

  /**
   * File path to GitHub bug issue template.
   * @protected
   */
  protected get bugIssueFilePath(): string {
    return '.github/ISSUE_TEMPLATE/bug.yml';
  }

  /**
   *File path to GitHub feature issue template.
   @protected
   */
  protected get featureIssueFilePath(): string {
    return '.github/ISSUE_TEMPLATE/feature.yml';
  }

  /**
   * File path to GitHub question issue template.
   * @protected
   */
  protected get questionIssueFilePath(): string {
    return '.github/ISSUE_TEMPLATE/question.yml';
  }

  /**
   * File path to the Cliff toml configuration.
   * This file is used by release workflow to create the Changelog.
   * @protected
   */
  protected get cliffTomlFilePath(): string {
    return 'cliff.toml';
  }

  /**
   * Pull Request template for the GitHub configuration.
   * @protected
   */
  protected get pullRequestTemplate(): string[] {
    return [
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
    ];
  }

  /**
   * Issue template for the GitHub Bug configuration.
   * @protected
   */
  protected get bugIssueTemplate(): string[] {
    return [
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
    ];
  }

  /**
   * Issue template for the GitHub feature configuration.
   * @protected
   */
  protected get featureIssueTemplate(): string[] {
    return [
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
    ];
  }

  /**
   * Template for the GitHub Question Issue configuration.
   * @protected
   */
  protected get questionIssueTemplate(): string[] {
    return [
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
    ];
  }

  /**
   * Cliff toml configuration for the GitHub configuration.
   * This file is used by release workflow to create the Changelog.
   * @protected
   */
  protected get cliffTomlConfiguration(): string[] {
    return [
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
    ];
  }

  /**
   * Workflow release template for the GitHub configuration.
   * @protected
   */
  protected get releaseWorkflowOptions(): WorkflowOptions {
    return {
      on: {
        pullRequest: {
          branches: ['main'],
          types: ['closed'],
        },
      },
      job: {
        runsOn: ['ubuntu-latest'],
        permissions: {
          contents: JobPermission.WRITE,
          pullRequests: JobPermission.WRITE,
        },
        steps: [
          {
            name: 'Create release',
            uses: 'dxfrontier/gh-action-release@main',
            with: {
              GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
              BRANCH: 'main',
            },
          },
        ],
      },
    };
  }

  /**
   * Workflow stale template options for the GitHub configuration.
   * @protected
   */
  protected get staleWorkflowOptions(): WorkflowOptions {
    return {
      on: {
        schedule: [
          {
            cron: '36 18 * * *',
          },
        ],
      },
      job: {
        runsOn: ['ubuntu-latest'],
        permissions: {
          issues: JobPermission.WRITE,
          pullRequests: JobPermission.WRITE,
        },
        steps: [
          {
            uses: 'actions/stale@v5',
            with: {
              'repo-token': '${{ secrets.GITHUB_TOKEN }}',
              'days-before-issue-stale': 30,
              'stale-issue-message':
                'This issue has not been updated in a while. If it is still relevant, please comment on it to keep it open. The issue will be closed soon if it remains inactive.',
              'close-issue-message': 'This issue has been closed automatically due to inactivity.',
              'stale-pr-message':
                'This PR has not been updated in a while. If it is still relevant, please comment on it to keep it open. The PR will be closed soon if it remains inactive.',
              'close-pr-message': 'This PR has been closed automatically due to inactivity.',
              'stale-issue-label': 'status: stale',
              'stale-pr-label': 'status: stale',
              'exempt-issue-labels': 'type: feature request',
              'exempt-pr-labels': 'type: feature request',
              'exempt-all-milestones': true,
            },
          },
        ],
      },
    };
  }

  /**
   * Creates the template file for a GitHub pull request.
   * @private
   */
  private createPullRequest(): void {
    new PullRequestTemplate(this.project.github!, {
      lines: this.pullRequestTemplate,
    });
  }

  /**
   * Creates the template file for a GitHub bug issue.
   * @private
   */
  private createBugIssue(): void {
    new TextFile(this.project, this.bugIssueFilePath, {
      lines: this.bugIssueTemplate,
    });
  }

  /**
   * Creates the template file for a GitHub feature issue.
   * @private
   */
  private createFeatureIssue(): void {
    new TextFile(this.project, this.featureIssueFilePath, {
      lines: this.featureIssueTemplate,
    });
  }

  /**
   * Creates the template file for a GitHub question issue.
   * @private
   */
  private createQuestionIssue(): void {
    new TextFile(this.project, this.questionIssueFilePath, {
      lines: this.questionIssueTemplate,
    });
  }

  /**
   * Creates the template file for a GitHub release workflow.
   * @private
   */
  private createReleaseWorkflow(): void {
    const workflow: GithubWorkflow | undefined = this.project.github?.addWorkflow('Release');
    workflow?.on(this.releaseWorkflowOptions.on);
    workflow?.addJob('release', this.releaseWorkflowOptions.job);
  }

  /**
   * Creates the template file for a GitHub stale workflow.
   * @private
   */
  private createStaleWorkflow(): void {
    const workflow: GithubWorkflow | undefined = this.project.github?.addWorkflow('Stale');
    workflow?.on(this.staleWorkflowOptions.on);
    workflow?.addJob('stale', this.staleWorkflowOptions.job);
  }

  /**
   * Creates the configuration file for the cliff toml CHANGELOG creation in release workflow.
   * @private
   */
  private createCliffTomlConfiguration(): void {
    new TextFile(this.project, this.cliffTomlFilePath, {
      lines: this.cliffTomlConfiguration,
    });
  }

  protected addTemplates(): void {
    this.createPullRequest();
    this.createBugIssue();
    this.createFeatureIssue();
    this.createQuestionIssue();

    this.createReleaseWorkflow();
    this.createStaleWorkflow();
    this.createCliffTomlConfiguration();
  }

  protected addGitAttributes(): void {
    // Pull request template is added automatically
    this.project.gitattributes.addAttributes(`/${this.bugIssueFilePath}`, 'linguist-generated');
    this.project.gitattributes.addAttributes(`/${this.featureIssueFilePath}`, 'linguist-generated');
    this.project.gitattributes.addAttributes(`/${this.questionIssueFilePath}`, 'linguist-generated');
    this.project.gitattributes.addAttributes(`/${this.cliffTomlFilePath}`, 'linguist-generated');
    // Workflows templates are added automatically
  }
}