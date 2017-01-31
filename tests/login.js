var general = require('../config/general');
var personal = require('../config/personal');

module.exports = {
  'FHOÖ Check Exam Results' : function (browser) {
    browser
      .url(general.loginUrl)
      .waitForElementVisible('body', 1000)
      .setValue(general.usernameFieldSelector, personal.username)
      .setValue(general.passwordFieldSelector, personal.password)
      .click(general.submitButtonSelector)
      .waitForElementVisible(general.latestCourseGradedSelector, 1000)
      .assert.containsText(general.latestCourseGradedSelector, personal.latestCourseGraded)
      .end();
  }
};
