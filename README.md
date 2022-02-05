# basic
Repository for JS Basics

## To Begin:
- clone down repo at branch `develop`
- cut from current branch (`develop`) to `choose-branch-name` using the command `git checkout -b "chosen-branch-name" -- Choose a new name for a branch, make it logical, like the bundle of work or directory you will be commiting for this branch.
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

### Executing (or running) Your Code:
- As you code in this files, picking up the basics of JS, you will need to be executing your files in order to see your progress, complete the challenges and find bugs. You do this by taking note of the file path of the given file you want to execute. If you are in the same directory you run `node name-of-file.js` from within the terminal. This command calls upon the node software package (a JS runtime engine) to execute the file. You 'screen' will be the terminal. It's where outputs like console.log() will print to. 
- If you are not in the directory of the file you may `cd` into it and follow the previous example... or traverse the files path in the terminal command like so: `node folderOne/folderTwo/deeplyNestedFolder/name-of-file.js`. This will not change your `pwd`, but allow you to execute a file that exists in nested folders. 
- Please Note: It is possible to invoke an infinite loop in which if you are printing things to the console you will see copious outputs and if you are not you will soon hear your fans come on your computer will eventually shut down. (Don't panic I know of newbie devs that had an infinite loop running for 7-15 minutes). You exit an infinite loop, thus killing your program by typing `Control-C` in the terminal. 
- Please Note:  Node cannot execute files that have the keyword `export`. All of your files have `export` for the sake of running the programmatic tests. You will need to comment out the final line of every file so that `export` is commented out and not invoked when executing your code. You comment out a line of code in a JS file by writing two backslashes at the start of the line `//`.

# Programatically Testing Your Code:
- to run tests and see progress from root of repository run `npm run test-terminal` (this will run all code and tests) in the terminal
- to run individual tests in the cypress testing user interface run `npm run test` in the terminal 
- remember to actively commit your code and push to github <b>on your branch</b> to grow git history

# Finished:
- push final commit 
- open a `merge` request against the `develop` branch. 
- slack xavyr the link of the `merge` request; this is exactly the same flow we use in software development teams. 
- I will review your code to professional standards and ask you via Slack to ammend files if changes are necessary. 
