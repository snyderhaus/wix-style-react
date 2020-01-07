import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import InputArea from '../InputArea';

import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { inputAreaUniDriverFactory } from '../InputArea.uni.driver';

const dataHook = 'storybook-inputarea';

const LONG_INPUT = 'all work and no play makes jack a dull boy\n';

const inputAreaUniTestkitFactory = uniTestkitFactoryCreator(
  inputAreaUniDriverFactory,
);

const createDriver = () =>
  inputAreaUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const InteractiveInputArea = ({ componentDidMount, ...props }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  }, [componentDidMount]);

  return <InputArea dataHook={dataHook} {...props} />;
};

const tests = [
  {
    describe: 'focus',
    its: [
      {
        it: 'should focus',
        props: {},
        componentDidMount: async () => {
          await createDriver().focus();
        },
      },
    ],
  },
  {
    describe: 'status',
    its: [
      {
        it: 'should display error icon',
        props: {
          status: 'error',
        },
      },
      {
        it: 'should display warning icon',
        props: {
          status: 'warning',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`InputArea/${describe}`, module).add(it, () => (
      <InteractiveInputArea {...props} componentDidMount={componentDidMount} />
    ));
  });
});
