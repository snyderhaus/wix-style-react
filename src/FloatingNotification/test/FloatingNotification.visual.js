import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusComplete from 'wix-ui-icons-common/StatusComplete';
import { TYPES } from '../constants';

import FloatingNotification from '..';

const LONG_TEXT = 'all work and no play makes jack a dull boy '.repeat(2);

const defaultProps = {
  text: 'Some content text',
  prefixIcon: <StatusComplete />,
  textButtonProps: { label: 'Trash' },
  buttonProps: { label: 'Undo' },
};

const types = Object.values(TYPES);
const test = (it, props) => ({ it, props });

const tests = [
  {
    describe: 'Types',
    its: types.map(type => test(type, { type })),
  },
  {
    describe: 'Long text',
    its: [
      {
        it: 'example',
        props: {
          text: LONG_TEXT,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FloatingNotification/${describe}`, module).add(it, () => (
      <FloatingNotification {...defaultProps} {...props} />
    ));
  });
});
