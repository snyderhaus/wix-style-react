const { proxyWixUiIconsCommon } = require('./proxy-wix-ui-icons');

const MODULE_NAME = 'wix-ui-icons-common';
const ICONS_DIR = './new-icons';

/*
  proxyWixUiIconsCommon will create folder wix-style-react/new-icons which will contain:
    - separate file for each available general icon
    - wix-style-react/new-icons/system/ folder, with separate file for each available system icon
    - wix-style-react/new-icons/index.js file with named export for each available general icon
 */
proxyWixUiIconsCommon(MODULE_NAME, ICONS_DIR);
