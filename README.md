# react-hacking-fun
A repository for hacking react projects. Since this is a learning experience, and some of us are more experienced than others, this Readme will have very basic instructions to start.

# Project ideas
We can collect ideas of *what* we want to build here. This will also give us a simple way to get used to a PR workflow. I think it makes sense to break these up in terms of complexity. We may want to start with a simple idea, then move on to something more full-fledged once we're all a bit more familiar:

## Just a pup (can likely be completed in one session with just React, e.g., a to-do list, weather tracker, etc.)
-

## A fine boi (probably several coding sessions, maybe a light backend, e.g., firebase)
-

## Oh Lawd He Comin' (requires more complex features, like authentication, and a full backend)
- Meal planner/grocery list app
- RPG or card game

# Basic git workflow for contributing
## Submitting code changes:
- If this is your first time working on the repo, then go to the github repo and click the `Code` button in the top. That will give you a url to clone from (either HTTPS or SSH). In your terminal, clone the repo with `git clone <url>`

- Otherwise, if you have already cloned the repo, then checkout the `main` branch and pull down the latest changes with the following commands:
 * `git checkout main`
 * `git pull`
 This will make sure you have all code others have contributed and avoid any gross merge conflicts.

- Open up the folder in your code editor, and make any changes to this file you want, then save them.

- Create a branch to hold your changes by typing `git checkout -b <whatever-name-you-want>`

- Stage your changes. You can do this in VS Code by clicking on the Version Control tab on the left and clicking the `+` sign next to the changed files (this is how I tend to do it). Or you can do this in the command line with the command `git add .` (to add all files) or `git add README.md` (to just add a specific file).

- Commit your changes with the following command: `git commit -m "A descriptive commit message to describe the changes I made"`. Best practice is for your commit message to be an imperative statement that can be used to figure out what was going on in the repo later, like, "Add the create button to home page" or "Remove unneeded styling from Hero banner"

- Push your changes up to github with the command `git push origin whatever-your-branch-is-called`

- Go to `github.com/evanperriello/react-hacking-fun/`. You should see a pop up to open a PR with your changes from your branch. Click that, and you'll be given a PR form. Make sure you add the other two folks in the Reviewers section at the top right, and create the pull request.

**Note: for fun: you can add a gif to your PR in the description like so `![Some text to label the gif](the gif's url)` Just remember that this is a public repo, and we may want to show it to folks to show off our sweet React skrills.**

## Reviewing PRS
- Go to the repo on github, click the Pull Requests tab in the top, and click over to the changed files. You can then click on any line of code and it will pop up with a box to add any comments. To keep things from getting too messy, it's best if all your comments are part of your review, so type what you want, then click `Start Your Review`. Once you've made all the comments you like, you can end your review by either denying, requesting changes, or accepting.

## After your PR is approved
- Click the green `squash and merge` button. You can then clean up the commit message to only contain the important info (so, you can keep the commit message that says, "Add project ideas" while getting rid of the one that says, "delete console logs I left in by accident :facepalm:")

## Dance dance dance!