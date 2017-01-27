var personal = require('./config/personal.js');

module.exports = {
  reporter: (require('nightwatch-slack-reporter')
  ({
    slack_message: function(results, options) 
    {
      if (results.failed > 0) {
        console.log("New grades!");
        return {
          text: 'New grades online!',
          username: 'incoming-webhook',
          icon_emoji: ':ghost:'
        } 
      } else {
        console.log("No new grades!");
        return {
          text: 'No new grades online!',
          username: 'incoming-webhook',
          icon_emoji: ':ghost:'
        } 
      }
    },
    slack_webhook_url: personal.slackWebhookUrl,   // This can be specified with SLACK_WEBHOOK_URL environment variable 
    slack_send_only_on_failure: true,
    slack_send_only_failed_tests: true
  }))
};