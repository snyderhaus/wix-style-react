# Adding icons

1. Receive the approval for the new icon from one of the library's UXs [wuwa](https://github.com/wuwa) or [milkyfruit](https://github.com/milkyfruit)
1. Go to [wix-ui-icons-common](https://github.com/wix/wix-ui/tree/master/packages/wix-ui-icons-common) package and follow the guidelines.
1. After a new `wix-ui-icons-common` version is published, update `wix-ui-icons-common`'s version to the new one in `package.json` (if you are using new icon in `wix-style-react` project).
1. The new icon will be available to be consumed from `wix-ui-icons-common` library `import MyAwesomeIcon from 'wix-ui-icons-common/MyAwesomeIcon'` or `import MyAwesomeIcon from 'wix-ui-icons-common/system/MyAwesomeIcon'`
