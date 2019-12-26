import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from 'wix-style-react/Box';
import Button from 'wix-style-react/Button';
import IconButton from 'wix-style-react/IconButton';
import Print from 'wix-ui-icons-common/Print';
import More from 'wix-ui-icons-common/More';

import ascendInvoice from '../../../test/assets/ascend-invoice.jpg';
import ModalPreviewLayout from '..';

const commonProps = {};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'scrollable', //prop variation (e.g. small)
        props: {
          title: 'Basic Website Design',
          children: (
            <Box>
              <img src={ascendInvoice} />
            </Box>
          ),
          actions: (
            <Box align="space-between" width={'276px'}>
              <Button prefixIcon={<Print />} skin="dark">
                Print
              </Button>
              <Button priority="secondary" skin="light">
                Send
              </Button>
              <IconButton skin="light">
                <More />
              </IconButton>
            </Box>
          ),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ModalPreviewLayout/${describe}`, module).add(it, () => (
      <ModalPreviewLayout {...commonProps} {...props} />
    ));
  });
});
