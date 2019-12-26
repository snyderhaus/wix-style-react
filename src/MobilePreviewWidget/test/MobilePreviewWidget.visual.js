import React from 'react';
import { storiesOf } from '@storybook/react';
import MobilePreviewWidget from '../MobilePreviewWidget';
import Box from '../../Box';
import Text from '../../Text';
import { skins } from '../constants';

const commonProps = {
  children: (
    <Box
      align="center"
      verticalAlign="middle"
      height="100%"
      padding="20px"
      backgroundColor="Y30"
    >
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
  {
    describe: 'Scroll',
    its: [
      {
        it: 'Large Content ',
        props: {
          children: (
            <Box
              align="center"
              verticalAlign="middle"
              height="600px"
              backgroundColor="Y30"
            >
              <Text>Content goes here</Text>
            </Box>
          ),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`MobilePreviewWidget/${describe}`, module).add(it, () => (
      <MobilePreviewWidget {...commonProps} {...props} />
    ));
  });
});
