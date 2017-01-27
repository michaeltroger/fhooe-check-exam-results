# FHOÖ check Levis automatically for new exam results with Slack notification

Settings to set:
personal.js
- Rename `personal.js.template` to `personal.js` in config. 
- Set the login data and the slack webhook url accordingly.
- Enter the name of your latest graded course in the property `latestCourseGraded` (the one at the very top shown in Levis)

nightwatch.conf.js
- set the chromedriver according to your operating system

Run it:
`./node_modules/.bin/nightwatch`
that way it's run once
For letting it run every x seconds choose a tool of your choice. 
On Linux one could use watch:
`watch -n60 ./node_modules/.bin/nightwatch`
This runs the check every 60 seconds
A Slack notification is only sent if there is a new grade online.
