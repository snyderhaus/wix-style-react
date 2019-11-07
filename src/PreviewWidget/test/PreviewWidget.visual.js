import React from 'react';
import { storiesOf } from '@storybook/react';
import { borderType, contentAreaType, backgroundColor } from '../constants';

import PreviewWidget from '../PreviewWidget';

import Box from 'wix-style-react/Box';
import Text from 'wix-style-react/Text';

const childNode = (
  <Box
    align="center"
    verticalAlign="middle"
    height={'50px'}
    width={'150px'}
    backgroundColor={'D80'}
  >
    <Text>Content goes here</Text>
  </Box>
);

const tests = [
  {
    describe: 'type',
    its: [
      {
        it: 'blank',
        props: { type: contentAreaType.blank },
      },
    ],
  },
  {
    describe: 'backgroundColor',
    its: [
      {
        it: 'grey',
        props: { backgroundColor: backgroundColor.grey },
      },

      {
        it: 'gradient',
        props: { backgroundColor: backgroundColor.gradient },
      },
    ],
  },
  {
    describe: 'borderType',
    its: [
      {
        it: 'shadow',
        props: { borderType: borderType.shadow },
      },
      //TODO: Should be tested when custom background is implemented.
      // {
      //   it: 'solid',
      //   props: { borderType: borderType.solid },
      // },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`PreviewWidget/${describe}`, module).add(it, () => (
      <PreviewWidget {...props}>{childNode}</PreviewWidget>
    ));
  });
});
