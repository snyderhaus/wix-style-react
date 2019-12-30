const {
  baseProtractorConfig,
} = require('wix-ui-test-utils/dist/src/protractor/protractor.conf');

module.exports.config = {
  ...baseProtractorConfig,
  specs: ['test/{K..Z}**/**/*.e2e.js', 'src/{K..Z}**/**/*.e2e.js'],
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
};
