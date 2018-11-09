const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const gulpfile = require('./gulpfile.js');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'step_definitions/web',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'features'
  ]
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: 'page_objects',
  test_workers: {
    enable: true,
    workers: 'auto'
  },
  live_output: false,
  disable_colors: false,
  globals_path: 'resources/global.js',
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      launch_url: gulpfile.URL,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'reports/screenshots'
      },
    },
    chrome_web: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless', 'start-maximized', 'incognito']
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
  }
};