import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import More from 'wix-ui-icons-common/More';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import Popover from '../Popover';
import IconButton from '../../IconButton';
import popoverUniDriverFactory from '../Popover.uni.driver';

const dataHook = 'storybook-popover';

const popoverUniTestkitFactory = uniTestkitFactoryCreator(
  popoverUniDriverFactory,
);

const createDriver = () =>
  popoverUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const InteractivePopover = ({ componentDidMount, ...props }) => {
  const [shown, toggleShown] = useState(false);

  const onClick = () => toggleShown(!shown);

  useEffect(() => {
    componentDidMount && componentDidMount();
  }, [componentDidMount]);

  return (
    <div style={{ padding: '50px' }}>
      <Popover dataHook={dataHook} shown={shown} onClick={onClick} {...props} />
    </div>
  );
};

const defaultProps = {
  flip: true,
  placement: 'auto',
  children: [
    <Popover.Element key="1">
      <IconButton>
        <More />
      </IconButton>
    </Popover.Element>,
    <Popover.Content key="2">
      <div
        style={{
          width: 168,
          height: 90,
        }}
      >
        Content
      </div>
    </Popover.Content>,
  ],
};

const tests = [
  {
    describe: 'theme',
    its: [
      {
        it: 'light',
        props: { theme: 'light' },
        componentDidMount: () => createDriver().click(),
      },
      {
        it: 'dark',
        props: { theme: 'dark' },
        componentDidMount: () => createDriver().click(),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`Popover/${describe}`, module).add(it, () => (
      <InteractivePopover
        {...defaultProps}
        {...props}
        componentDidMount={componentDidMount}
      />
    ));
  });
});
