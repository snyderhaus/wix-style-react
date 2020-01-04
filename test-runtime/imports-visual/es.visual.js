import React from 'react';
import { storiesOf } from '@storybook/react';
import componentsMeta from '../../.wuf/components.json';

const components = Object.keys(componentsMeta).reduce(
  (accu, comp) => [...accu, comp],
  [],
);

const ignoreList = ['WarningIndicator', 'Layout', 'Box'];

components.forEach(name => {
  if (ignoreList.includes(name)) {
    return;
  }

  const Component = require(`../../dist/src/${name}/index.js`).default;
  storiesOf(`es modules`, module).add(`${name}`, () => <Component />);
});
