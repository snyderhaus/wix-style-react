# Using icons from `wix-ui-icons-common` package

## How to migrate

Make sure you have `wix-ui-icons-common` package installed:

```bash
npm i wix-ui-icons-common
# or
yarn add wix-ui-icons-common
```

Then use our provided codemod or manually replace all icon imports with the following pattern:

```diff
- import Add from 'wix-style-react/new-icons/Add';
+ import Add from 'wix-ui-icons-common/Add';
```

To use codemod, run the following command (where the last argument is the directory or file for source code you want to transform):

```bash
npx wix-ui-codemod wix-style-react/icons-common src/
```

Please see [README.md](https://github.com/wix/wix-ui/blob/master/packages/wix-ui-codemod/README.md#wix-ui-codemod) file for more details on how to use the provided codemod.

## Using icons in your code

The icons from `wix-ui-icons-common` support all the same features as the old `wix-style-react/new-icons` icons. They are backwards compatible and their usage is the same:

```jsx
import Add from 'wix-ui-icons-common/Add';

export default () => (
  <div>
    <Add />
  </div>
);
```
