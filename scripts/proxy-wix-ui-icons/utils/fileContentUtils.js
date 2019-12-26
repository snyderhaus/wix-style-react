const { readArrayOfFilesInFolderOnDisk } = require('./diskUtils');

const byJsExtension = filename => filename.endsWith('.js');

const deprecationWarning = [
  'Using icons from "wix-style-react/new-icons" has been deprecated.',
  'Please install and use icons from "wix-ui-icons-common" package directly.',
  'You can run a codemod to upgrade all icon import paths with "npx wix-ui-codemod wix-style-react/icons-common <path>" command.',
].join(' ');

const createIconProxyFileContent = (iconName, rootDir) =>
  `/*eslint-disable*/
var deprecationLog = require('${rootDir}/dist/src/utils/deprecationLog').default;
deprecationLog('${deprecationWarning}');
module.exports = require('wix-ui-icons-common/${iconName}');
`;

const createIconIndexProxyFileContent = indexFileContent =>
  `/*eslint-disable*/
Object.defineProperty(exports, '__esModule', {value: true});
var deprecationLog = require('../dist/src/utils/deprecationLog').default;
deprecationLog('${deprecationWarning}');
${indexFileContent}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
`;

const getPathToWixUiIconsCommonFolder = moduleName => {
  const pathToModuleRoot = require.resolve(moduleName);
  return pathToModuleRoot.substr(
    0,
    pathToModuleRoot.indexOf('wix-ui-icons-common') + moduleName.length,
  );
};

const getArrayOfGeneralIcons = moduleName =>
  readArrayOfFilesInFolderOnDisk(
    getPathToWixUiIconsCommonFolder(moduleName),
  ).filter(byJsExtension);

const getArrayOfSystemIcons = moduleName =>
  readArrayOfFilesInFolderOnDisk(
    `${getPathToWixUiIconsCommonFolder(moduleName)}/system`,
  ).filter(byJsExtension);

/* {[systemIconName]: `module.exports = require('wix-ui-icons-common/system/${systemIconName}');`} */
const prepareSystemIconsContentMap = moduleName => {
  const listOfSystemIcons = getArrayOfSystemIcons(moduleName);
  return listOfSystemIcons.reduce((res, iconName) => {
    res[iconName] = createIconProxyFileContent(`system/${iconName}`, '../..');
    return res;
  }, {});
};

/* {[generalIconName]: `module.exports = require('wix-ui-icons-common/${generalIconName}');`} */
const prepareGeneralIconsContentMap = moduleName => {
  const listOfCommonIcons = getArrayOfGeneralIcons(moduleName);
  return listOfCommonIcons.reduce((res, iconName) => {
    res[iconName] = createIconProxyFileContent(iconName, '..');
    return res;
  }, {});
};

/* named exports for all available icons */
const prepareIndexFileContentForNamedExport = icons => {
  const indexFileContent = Object.keys(icons).reduce((res, iconName) => {
    const name = iconName.replace('.js', '');
    const exportFunc = `Object.defineProperty(exports, '${name}', {enumerable: true, get: function get() { return _interopRequireDefault(_${name}).default;}});\n`;
    return res + `var _${name} = require('./${iconName}');\n` + exportFunc;
  }, '');
  return createIconIndexProxyFileContent(indexFileContent);
};

module.exports = {
  prepareIndexFileContentForNamedExport,
  prepareGeneralIconsContentMap,
  prepareSystemIconsContentMap,
};
