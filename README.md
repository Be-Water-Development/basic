# basic
Repository for JS Basics

## To Begin:
- clone down repo at branch `develop`
- cut from current branch (`develop`) to `choose-branch-name` using the command `git checkout -b "chosen-branch-name"` -- Choose a new name for a branch, make it logical, like the bundle of work or directory you will be commiting for this branch.
- begin coding...

### Merging:
- in order to get commits to show up as contribution history on Github you need to `merge` to the default branch-- `develop` in this repo. 
- When you finish commiting with  your commit message run the push command. `git push origin choose-branch-name`  which will push this give branch to gitbub. Follow the link and open a pull request against `develop`. 

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

# Code Reviews:
- Slack Xavyr at the end of each directory -- he will review your code on a per directory basis, but this means the code is written and finished, aka you are getting the required output on each individual algo. 
- Its on you to ask questions via Slack in order to be able to complete each algo. When a directory is submitted Xavyr will be checking for professional standards / code smell / optimization and memory allocation... under the assumption that the algo outputs the desired output and 'is correct'. 
