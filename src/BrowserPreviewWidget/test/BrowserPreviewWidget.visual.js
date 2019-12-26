import React from 'react';
import { storiesOf } from '@storybook/react';
import BrowserPreviewWidget from '../BrowserPreviewWidget';
import { skins, browserBarSizes } from '../constants';
import Box from '../../Box';
import Text from '../../Text';

const commonProps = {
  children: (
    <Box padding="20px" backgroundColor="Y30">
      <Text>Content goes here</Text>
    </Box>
  ),
};

const tests = [
  {
    describe: 'Skins',
    its: [
      {
        it: skins.neutral,
        props: {
          skin: skins.neutral,
        },
      },
      {
        it: skins.gradient,
        props: {
          skin: skins.gradient,
        },
      },
      {
        it: skins.custom,
        props: {
          skin: skins.custom,
          backgroundColor: 'B10',
        },
      },
    ],
  },
  {
    describe: 'Browser Bar Size',
    its: Object.keys(browserBarSizes).map(browserBarSize => ({
      it: browserBarSize,
      props: { browserBarSize },
    })),
  },
  {
    describe: 'Custom Size',
    its: [
      {
        it: 'height',
        props: {
          height: '750px',
        },
      },
      {
        it: 'width',
        props: {
          width: '550px',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`BrowserPreviewWidget/${describe}`, module).add(it, () => (
      <BrowserPreviewWidget {...commonProps} {...props} />
    ));
  });
});
