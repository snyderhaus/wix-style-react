const {
  createFolderForIconsOnDisk,
  writeIconsFilesToFolderOnDisk,
  writeIndexFileToDisk,
} = require('./utils/diskUtils');

const {
  prepareGeneralIconsContentMap,
  prepareSystemIconsContentMap,
  prepareIndexFileContentForNamedExport,
} = require('./utils/fileContentUtils');

/*
  proxyWixUiIconsCommon will create folder wix-style-react/new-icons which will contain:
    - separate file for each available general icon
    - wix-style-react/new-icons/system/ folder, with separate file for each available system icon
    - wix-style-react/new-icons/index.js file with named export for each available general icon
  then proxyWixUiIconsCommon will copy wix-style-react/new-icons to wix-style-react/src/new-icons,
  this action required to work properly with wsr storybook
 */
const proxyWixUiIconsCommon = (moduleName, iconsDir) => {
  /* {[generalIconName]: `module.exports = require('wix-ui-icons-common/${generalIconName}');`} */
  const generalIconsFilesContentMap = prepareGeneralIconsContentMap(moduleName);
  /* {[systemIconName]: `module.exports = require('wix-ui-icons-common/system/${systemIconName}');`} */
  const systemIconsFilesContentMap = prepareSystemIconsContentMap(moduleName);
  /* content of index.js file with named exports of all icons */
  const indexFileContent = prepareIndexFileContentForNamedExport(
    generalIconsFilesContentMap,
  );

  /* here we creating folder where we will put icons files */
  createFolderForIconsOnDisk(iconsDir);

  /* write prepared files to disk */
  writeIconsFilesToFolderOnDisk(generalIconsFilesContentMap, iconsDir);
  writeIconsFilesToFolderOnDisk(
    systemIconsFilesContentMap,
    iconsDir,
    'system/',
  );
  writeIndexFileToDisk(indexFileContent, iconsDir);
};

module.exports.proxyWixUiIconsCommon = proxyWixUiIconsCommon;
