var personal = require('./config/personal');

var SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: 'bin/selenium-server-standalone-3.0.1.jar',
  port: 4444,
  "cli_args" : {
      "webdriver.chrome.driver" : personal.chromeDriverPathRelativeFromRoot 
  }
};

var CHROME_CONFIGURATION = {
  browserName: 'chrome'
};

var DEFAULT_CONFIGURATION = {
  launch_url: 'http://localhost',
  selenium_port: 4444,
  selenium_host: 'localhost',
  desiredCapabilities: CHROME_CONFIGURATION
};

var ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION
};

module.exports = {
  src_folders: ['tests'],
  selenium: SELENIUM_CONFIGURATION,
  globals_path : 'globals.js',
  test_settings: ENVIRONMENTS
};

