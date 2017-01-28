# Check the FH Oberösterreich's Levis automatically for new exam results with Slack notification
##at https://levis.fh-ooe.at

##How does it work?
The Chrome browser is opened and the Levis webpage is called. The login data is inserted and the form submited. On the logged-in grading overview the name of the newest graded course is compared with the one given by you. If it doesn't equal this name there must be a new exam result.

A Slack notification is only sent if there is a new grade online.

Be aware that the opening of the browser will take the system's focus to this window. Running it not on your primary computer is therefore recommended (or run it in a virtual machine). Tested on Linux and Windows! Should work on OSX too.

##Requirements:
- Chrome browser
- Java
- Node.js with NPM

##Settings up:
install Nightwatch globally:
`npm install -g nightwatch`

then run `npm install` within the root of the project
in order to get only notifications on new grades unfortunately a file has to be adjusted:
Replace `node_modules/nightwatch-slack-reporter/lib/reporter.js` with:
https://raw.githubusercontent.com/ngs/nightwatch-slack-reporter/master/lib/reporter.js

personal.js
- Rename `personal.js.template` to `personal.js` in `config`. 
- Set the FHOÖ login data and the slack webhook url accordingly.
- Enter the name of your latest graded course in the property `latestCourseGraded`. It's the one at the very top shown in Levis - in the example underneath it would be Augmented Reality.

![Screenshot](/screenshot.png)


nightwatch.conf.js
- set the chromedriver according to your operating system

Copy

##Run it:
`nightwatch`
that way it's run once.
For letting it run every x seconds choose a tool of your choice. 
On Linux one could use watch:
`watch -n600 nightwatch`
This example runs the check every 10 minutes.
