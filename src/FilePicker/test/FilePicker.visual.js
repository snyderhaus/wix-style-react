import React from 'react';
import { storiesOf } from '@storybook/react';

import FilePicker from '../FilePicker';

const defaultProps = {
  mainLabel: 'Choose File',
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'header',
        props: {
          header: 'Header',
        },
      },
      {
        it: 'error',
        props: {
          error: true,
          errorMessage: 'ERROR',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FilePicker/${describe}`, module).add(it, () => (
      <FilePicker {...defaultProps} {...props} />
    ));
  });
});
