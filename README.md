# basic
Repository for JS Basics

## To Begin:
- clone down repo at branch `develop`
- cut from current branch (`develop`) to `choose-branch-name` -- Choose a new name for a branch, make it logical, like the bundle of work or directory you will be commiting for this branch.
- from terminal in repository on branch `choose-branch-name` run `npm install` (this installs necesssary JS packages)
- begin coding...

### Merging:
- in order to get commits to show up as contribution history on Github you need to `merge` to the default branch-- `develop` in this repo. 
- When you finish commiting with  your commit message run the push command. `git push origin choose-branch-name`  which will push this give branch to gitbub. Follow the link and open a pull request against `develop`. 
- Xavyr will review this PR request, ensuring professional coding standards in the exact same way a teammate will review your code at a company. 
- Xavyr will then give the go ahead after any revisions to `git merge` which will merge your dev branch into `develop` and make `develop` the new standard for your repo.

### Coding...Again
- Since you just `merged` your devving branch into `develop` that branch <i>now dead, forever, dead and gone</i>
- From your terminal run `git checkout develop` which will checkout your <i>local</i> version of develop, which we now is outdated since you just merged into `develop` in the cloud.
- run `git pull origin develop` and those additional changed will be fetched. 
- Now we are clear to start the same process in section <b>To Begin</b> with the exception of fetching develop-- you already have it (and its most updated) locally. 
- This is the professional, modern full cycle of development for contributing to a codebase.

# In Progress:
- to run tests and see progress from root of repository run `npm run test-terminal` (this will run all code and tests) in the terminal
- to run individual tests in the cypress testing user interface run `npm run test` in the terminal 
- remember to actively commit your code and push to github <b>on your branch</b> to grow git history

# Finished:
- push final commit 
- slack xavyr that you are finished with <b>your branch name</b>
- I will pull down your code and review to professional standards