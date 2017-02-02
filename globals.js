var personal = require('./config/personal');
var newGradesMsg = {
  text: 'New grades online!',
  username: 'incoming-webhook',
  icon_emoji: ':ghost:'
};
var noNewGradesMsg = {
  text: 'No new grades online!',
  username: 'incoming-webhook',
  icon_emoji: ':ghost:'
}; 
var errorMsg = {
  text: 'An error occured while checking!',
  username: 'incoming-webhook',
  icon_emoji: ':ghost:'
}
var slackReporterOptions = {
  slack_message: function(results, options) 
  {
    if (results.failed > 0) { // at least one test failed
      if (results.passed < 2) {
        console.log("An error occured while checking!");
        return errorMsg;
      }
      // only the final test failed -> a new grade must be there
      console.log("New grades online!");
      return newGradesMsg; 
    } else { // all tests successful
      console.log("No new grades online!");
      return noNewGradesMsg;
    }
  },
  slack_webhook_url: personal.slackWebhookUrl,
  slack_send_only_on_failure: true,
  slack_send_only_failed_tests: true
}

module.exports = {
  reporter: (require('nightwatch-slack-reporter')(slackReporterOptions))
};
