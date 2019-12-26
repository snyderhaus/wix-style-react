/* eslint-disable no-console */
const fs = require('fs');

const createFile = (name, content, pathToFile) =>
  fs.writeFileSync(pathToFile + name, content);

const createFolderForIconsOnDisk = iconsDir => {
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }
  if (!fs.existsSync(`${iconsDir}/system`)) {
    fs.mkdirSync(`${iconsDir}/system`);
  }
};

const writeIconsFilesToFolderOnDisk = (
  iconsFilesContentMap,
  iconsDir,
  prefix = '',
) => {
  Object.entries(iconsFilesContentMap).forEach(([iconName, iconContent]) => {
    createFile(iconName, iconContent, `${iconsDir}/${prefix}`);
    console.log('\x1b[36m', `"${iconsDir}/${prefix}${iconName}" was created`);
  });
};

const writeIndexFileToDisk = (indexFileContent, iconsDir) => {
  createFile('index.js', indexFileContent, iconsDir + '/');
  console.log('\x1b[36m', `"${iconsDir}/index.js was created`);
};

const readArrayOfFilesInFolderOnDisk = dirname => fs.readdirSync(dirname);

module.exports = {
  createFolderForIconsOnDisk,
  writeIconsFilesToFolderOnDisk,
  writeIndexFileToDisk,
  readArrayOfFilesInFolderOnDisk,
};
