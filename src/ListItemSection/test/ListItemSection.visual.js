import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItemSection from '../ListItemSection';
import Box from '../../Box';
import Text from '../../Text';

const commonProps = {
  title: 'I am a list section',
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'text',
        props: {},
      },
      {
        it: 'text with suffix',
        props: {
          suffix: 'I am a suffix',
        },
      },
      {
        it: 'subheader',
        props: {
          type: 'subheader',
        },
      },
      {
        it: 'subheader with suffix',
        props: {
          type: 'subheader',
          suffix: 'I am a suffix',
        },
      },
      {
        it: 'whitespace',
        props: {
          type: 'whitespace',
        },
      },
      {
        it: 'divider',
        props: {
          type: 'divider',
        },
      },
    ],
  },
  {
    describe: 'ellipsis',
    its: [
      {
        it: 'only text',
        props: {
          title:
            'This is a very long title which exceeds the maximum width of its container',
        },
      },
      {
        it: 'with suffix',
        props: {
          title:
            'This is a very long title which exceeds the maximum width of its container',
          suffix:
            'This is a very long suffix which exceeds the maximum width of its container',
        },
      },
      {
        it: 'ellipsis - only text',
        props: {
          title:
            'This is a very long title which exceeds the maximum width of its container',
          ellipsis: true,
        },
      },
      {
        it: 'ellipsis - with suffix',
        props: {
          title:
            'This is a very long title which exceeds the maximum width of its container',
          ellipsis: true,
          suffix:
            'This is a very long suffix which exceeds the maximum width of its container',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ListItemSection/${describe}`, module).add(it, () => (
      <Box width="400px">
        <ListItemSection {...commonProps} {...props} />
      </Box>
    ));
  });
});
