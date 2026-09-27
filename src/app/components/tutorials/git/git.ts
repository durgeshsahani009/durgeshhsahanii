import { Component } from '@angular/core';

@Component({
  selector: 'app-git',
  imports: [],
  templateUrl: './git.html',
  styleUrl: './git.scss',
})
export class Git {

  dataset:any = [];
  constructor() {
    this.dataset = this.getContent();
  }

  getContent() {
    return [
      {
        title: 'Repository & Configuration',
        data: [
          {
            command: "git --version",
            purpose: "Check Git version.",
            explanation: "Useful for verifying Git is installed and checking the installed version."
          },
          {
            command: "git config --global user.name 'Your Name'",
            purpose: "Set global Git username.",
            explanation: "The name is stored in Git configuration and is used for future commits."
          },
          {
            command: "git config --global user.email 'you@example.com'",
            purpose: "Set global Git email.",
            explanation: "Sets the email associated with commits made from this machine."
          },
          {
            command: "git config --list",
            purpose: "Show Git configuration.",
            explanation: "Displays configured Git settings so you can verify username, email, editor, etc."
          },
          {
            command: "git init",
            purpose: "Initialize a Git repository.",
            explanation: "Creates a new .git directory in the current folder and starts Git tracking."
          },
          {
            command: "git clone <repository-url>",
            purpose: "Clone a remote repository.",
            explanation: "Downloads the repository, its history, and remote configuration to your local machine."
          }
        ]
      },

      {
        title: 'Status & History',
        data: [
          {
            command: "git status",
            purpose: "Show working-tree status.",
            explanation: "Shows modified, staged, and untracked files and the current branch."
          },
          {
            command: "git log",
            purpose: "Show commit history.",
            explanation: "Displays detailed commit history."
          },
          {
            command: "git log --oneline",
            purpose: "Show compact commit history.",
            explanation: "Shows one concise line per commit and is useful for quickly reviewing history."
          },
          {
            command: "git log --oneline --graph --all",
            purpose: "Show graphical history.",
            explanation: "Displays branches and commits as a compact ASCII graph."
          },
          {
            command: "git show <commit-id>",
            purpose: "Show a commit.",
            explanation: "Displays the commit message, metadata, and changes introduced by a specific commit."
          }
        ]
      },

      {
        title: 'Branches',
        data: [
          {
            command: "git branch",
            purpose: "List local branches.",
            explanation: "Shows local branches and marks the current branch with *."
          },
          {
            command: "git branch -a",
            purpose: "List all branches.",
            explanation: "Shows both local and remote-tracking branches."
          },
          {
            command: "git branch <branch-name>",
            purpose: "Create a branch.",
            explanation: "Creates a new branch without switching to it."
          },
          {
            command: "git checkout <branch-name>",
            purpose: "Switch branches.",
            explanation: "Switches the working directory to an existing branch."
          },
          {
            command: "git switch <branch-name>",
            purpose: "Switch branches.",
            explanation: "Modern command specifically designed for switching branches."
          },
          {
            command: "git switch -c <branch-name>",
            purpose: "Create and switch branch.",
            explanation: "Creates a new branch and immediately switches to it."
          },
          {
            command: "git branch -d <branch-name>",
            purpose: "Delete local branch.",
            explanation: "Deletes a merged local branch. Git normally prevents deletion if it contains unmerged work."
          }
        ]
      },

      {
        title: 'Remote Repository',
        data: [
          {
            command: "git remote -v",
            purpose: "Show remote URLs.",
            explanation: "Displays fetch and push URLs for configured remotes such as origin."
          },
          {
            command: "git remote add origin <url>",
            purpose: "Add a remote.",
            explanation: "Connects the local repository to a remote repository using the name origin."
          },
          {
            command: "git fetch",
            purpose: "Download remote updates.",
            explanation: "Downloads new commits and remote references without changing your current files."
          },
          {
            command: "git fetch origin",
            purpose: "Fetch from origin.",
            explanation: "Downloads updates specifically from the origin remote."
          },
          {
            command: "git fetch --all",
            purpose: "Fetch all remotes.",
            explanation: "Downloads updates from all configured remotes."
          },
          {
            command: "git pull",
            purpose: "Fetch and integrate changes.",
            explanation: "Fetches remote changes and integrates them into the local branch."
          },
          {
            command: "git pull origin <branch-name>",
            purpose: "Pull a specific remote branch.",
            explanation: "Fetches and integrates the specified branch from origin."
          },
          {
            command: "git push",
            purpose: "Upload local commits.",
            explanation: "Pushes commits to the configured upstream remote branch."
          },
          {
            command: "git push origin <branch-name>",
            purpose: "Push a branch.",
            explanation: "Uploads the specified local branch to origin."
          },
          {
            command: "git push -u origin <branch-name>",
            purpose: "Push and set upstream.",
            explanation: "Pushes the branch and establishes its default upstream for future pull and push commands."
          }
        ]
      },

      {
        title: 'Add & Commit',
        data: [
          {
            command: "git add <file>",
            purpose: "Stage a file.",
            explanation: "Adds the selected file's current changes to the staging area."
          },
          {
            command: "git add .",
            purpose: "Stage changes.",
            explanation: "Stages changes under the current directory."
          },
          {
            command: "git add -A",
            purpose: "Stage all changes.",
            explanation: "Stages additions, modifications, and deletions across the repository."
          },
          {
            command: "git commit -m 'message'",
            purpose: "Create a commit.",
            explanation: "Records staged changes in the local repository with the supplied commit message."
          },
          {
            command: "git commit --amend",
            purpose: "Modify the latest commit.",
            explanation: "Replaces the latest commit, commonly used to fix its message or add forgotten staged changes."
          }
        ]
      },

      {
        title: 'Undo & Restore',
        data: [
          {
            command: "git restore <file>",
            purpose: "Discard unstaged file changes.",
            explanation: "Restores the file to its last committed state. The discarded changes can be difficult to recover."
          },
          {
            command: "git restore --staged <file>",
            purpose: "Unstage a file.",
            explanation: "Removes a file from staging while keeping its working-tree changes."
          },
          {
            command: "git reset --soft HEAD~1",
            purpose: "Undo last commit and keep changes staged.",
            explanation: "Moves HEAD back one commit while preserving changes in the staging area."
          },
          {
            command: "git reset --hard HEAD~1",
            purpose: "Undo last commit and discard changes.",
            explanation: "Moves HEAD back one commit and resets tracked files. This is destructive and should be used carefully."
          }
        ]
      },

      {
        title: 'Stash',
        data: [
          {
            command: "git stash",
            purpose: "Temporarily save changes.",
            explanation: "Stores uncommitted changes so you can switch branches or perform another task without committing unfinished work."
          },
          {
            command: "git stash list",
            purpose: "List stashes.",
            explanation: "Shows saved stash entries."
          },
          {
            command: "git stash pop",
            purpose: "Apply and remove latest stash.",
            explanation: "Restores the latest stash and removes it from the stash list if successful."
          },
          {
            command: "git stash apply",
            purpose: "Apply stash and keep it.",
            explanation: "Restores a stash without removing it from the stash list."
          },
          {
            command: "git stash drop",
            purpose: "Delete a stash.",
            explanation: "Removes a selected stash entry."
          },
          {
            command: "git stash clear",
            purpose: "Delete all stashes.",
            explanation: "Removes every stash entry. Use carefully."
          },
          {
            command: "git stash push -m 'message'",
            purpose: "Create named stash.",
            explanation: "Saves current changes with a descriptive stash message."
          }
        ]
      },

      {
        title: 'Merge & Conflict Resolution',
        data: [
          {
            command: "git merge <branch>",
            purpose: "Merge another branch.",
            explanation: "Integrates the specified branch into the current branch."
          },
          {
            command: "git merge --abort",
            purpose: "Abort a merge.",
            explanation: "Returns the working tree to the state before the merge started, when possible."
          },
          {
            command: "git status",
            purpose: "Inspect merge conflicts.",
            explanation: "Shows files that need conflict resolution during a merge."
          },
          {
            command: "git add .",
            purpose: "Mark conflicts resolved.",
            explanation: "After manually resolving conflicts, stages the resolved files."
          },
          {
            command: "git commit",
            purpose: "Finish a merge.",
            explanation: "Creates the merge commit when the merge requires one."
          }
        ]
      },

      {
        title: 'Rebase',
        data: [
          {
            command: "git rebase origin/main",
            purpose: "Rebase current work.",
            explanation: "Replays your current branch commits on top of the latest origin/main history."
          },
          {
            command: "git rebase --continue",
            purpose: "Continue rebase.",
            explanation: "Continues the rebase after resolving a conflict and staging the corrected files."
          },
          {
            command: "git rebase --abort",
            purpose: "Abort rebase.",
            explanation: "Stops the rebase and attempts to restore the pre-rebase state."
          }
        ]
      },

      {
        title: 'Remote Branches',
        data: [
          {
            command: "git branch -r",
            purpose: "List remote branches.",
            explanation: "Shows remote-tracking branches."
          },
          {
            command: "git branch -a",
            purpose: "List local and remote branches.",
            explanation: "Shows the complete local and remote branch view."
          },
          {
            command: "git checkout -b my-branch origin/my-branch",
            purpose: "Create local tracking branch.",
            explanation: "Creates a local branch from a remote-tracking branch and switches to it."
          },
          {
            command: "git switch --track origin/my-branch",
            purpose: "Track a remote branch.",
            explanation: "Creates a local branch that tracks the specified remote branch."
          },
          {
            command: "git push origin --delete my-branch",
            purpose: "Delete remote branch.",
            explanation: "Deletes the specified branch from the origin remote."
          }
        ]
      },

      {
        title: 'Compare Changes',
        data: [
          {
            command: "git diff",
            purpose: "Show unstaged changes.",
            explanation: "Compares working-tree changes against the index."
          },
          {
            command: "git diff --staged",
            purpose: "Show staged changes.",
            explanation: "Shows what will be included in the next commit."
          },
          {
            command: "git diff <branch1> <branch2>",
            purpose: "Compare branches.",
            explanation: "Shows differences between two branch tips."
          },
          {
            command: "git diff HEAD~1",
            purpose: "Compare with previous commit.",
            explanation: "Shows changes between the current HEAD and its parent."
          }
        ]
      },

      {
        title: 'Find & Inspect Commits',
        data: [
          {
            command: "git log --author='name'",
            purpose: "Filter history by author.",
            explanation: "Shows commits matching the specified author."
          },
          {
            command: "git log --since='2 weeks ago'",
            purpose: "Filter history by date.",
            explanation: "Shows commits newer than the specified time."
          },
          {
            command: "git log -- <file-name>",
            purpose: "Show file history.",
            explanation: "Displays commits that changed the specified file."
          },
          {
            command: "git blame <file-name>",
            purpose: "Show line authorship.",
            explanation: "Shows which commit and author last changed each line of a file."
          }
        ]
      },

      {
        title: 'Tags',
        data: [
          {
            command: "git tag",
            purpose: "List tags.",
            explanation: "Shows tags in the repository."
          },
          {
            command: "git tag v1.0.0",
            purpose: "Create a tag.",
            explanation: "Creates a lightweight tag pointing to the current commit."
          },
          {
            command: "git push origin v1.0.0",
            purpose: "Push one tag.",
            explanation: "Uploads the specified tag to origin."
          },
          {
            command: "git push origin --tags",
            purpose: "Push all tags.",
            explanation: "Uploads local tags that are not already present on the remote."
          },
          {
            command: "git tag -d v1.0.0",
            purpose: "Delete local tag.",
            explanation: "Removes the tag from the local repository."
          },
          {
            command: "git push origin --delete v1.0.0",
            purpose: "Delete remote tag.",
            explanation: "Removes the specified tag from origin."
          }
        ]
      },

      {
        title: 'Cherry-pick',
        data: [
          {
            command: "git cherry-pick <commit-id>",
            purpose: "Apply one commit.",
            explanation: "Copies the changes introduced by a specific commit onto the current branch."
          },
          {
            command: "git cherry-pick --abort",
            purpose: "Abort cherry-pick.",
            explanation: "Stops an in-progress cherry-pick and restores the pre-operation state."
          }
        ]
      },

      {
        title: 'Common Problem Fixes',
        data: [
          {
            command: "git pull origin <branch> --allow-unrelated-histories",
            purpose: "Allow unrelated histories.",
            explanation: "Allows Git to merge histories that do not share a common ancestor. Use only when you understand why the histories are unrelated."
          },
          {
            command: "git fetch --prune",
            purpose: "Clean stale remote branches.",
            explanation: "Removes local remote-tracking references for branches that no longer exist on the remote."
          },
          {
            command: "git fetch origin",
            purpose: "Refresh remote information.",
            explanation: "Updates your local knowledge of origin before comparing or integrating branches."
          },
          {
            command: "git diff HEAD origin/<branch>",
            purpose: "Compare local HEAD with remote branch.",
            explanation: "Shows differences after fetching, without changing your working files."
          },
          {
            command: "git push --force-with-lease",
            purpose: "Safely force-push.",
            explanation: "Force-pushes while checking that the remote branch has not changed unexpectedly. Safer than plain --force."
          },
          {
            command: "git push --force",
            purpose: "Force-push.",
            explanation: "Overwrites remote branch history. High risk when others share the branch; avoid unless necessary."
          }
        ]
      }
    ]
  }
}
