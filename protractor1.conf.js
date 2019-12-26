const {
  baseProtractorConfig,
} = require('wix-ui-test-utils/dist/src/protractor/protractor.conf');

module.exports.config = {
  ...baseProtractorConfig,
  specs: [
    'test/{A..J}**/**/*.e2e.js',
    'src/{A..J}**/**/*.e2e.js',
    'test/{a..z}**/**/*.e2e.js',
    'src/{a..z}**/**/*.e2e.js',
  ],
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
};
