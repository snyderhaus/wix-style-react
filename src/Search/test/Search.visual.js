import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import Search from '../Search';
import { searchUniDriverFactory } from '../Search.uni.driver';
import { storySettings } from '../docs/storySettings';

const { dataHook, storyName } = storySettings;

const createDriver = () =>
  uniTestkitFactoryCreator(searchUniDriverFactory)({
    wrapper: document.body,
    dataHook,
  });

const expand = async () => createDriver().click();

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'should render',
        props: {},
      },
    ],
  },
  {
    describe: 'expandable',
    its: [
      {
        it: 'should render',
        props: {
          expandable: true,
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'expandable',
    its: [
      {
        it: 'should expand on click',
        props: {
          expandable: true,
        },
        componentDidMount: expand,
      },
      {
        it: 'should expand to fixed width on click',
        props: {
          expandable: true,
          expandWidth: '250px',
        },
        componentDidMount: expand,
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`${storyName}/${describe}`, module).add(it, () => (
      <Search {...props} />
    ));
  });
});

const InteractiveSearchWrapper = ({ componentDidMount, ...props }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  });

  return <Search {...props} />;
};

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`${storyName}/${describe}`, module).add(it, () => (
      <InteractiveSearchWrapper
        dataHook={dataHook}
        {...props}
        componentDidMount={componentDidMount}
      />
    ));
  });
});
