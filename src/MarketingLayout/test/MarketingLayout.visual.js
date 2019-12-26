import React from 'react';
import { storiesOf } from '@storybook/react';
import MarketingLayout from '../MarketingLayout';
import Button from '../../Button';
import Box from '../../Box';

const images = [
  <Box backgroundColor="lightgrey" width="126px" height="126px"></Box>,
  <Box backgroundColor="lightgrey" width="282px" height="188px"></Box>,
  <Box backgroundColor="lightgrey" width="360px" height="240px"></Box>,
];

const commonProps = {
  image: images[0],
  title: 'Marketing Card Title',
  description:
    'Connect to Google and get indexed in seconds so people can easily find your site.',
  actions: <Button size="small">Go for it</Button>,
};

const tests = [
  {
    describe: 'Sanity',
    its: [
      {
        it: 'Default props',
        props: {},
      },
    ],
  },
  {
    describe: 'Size',
    its: [
      {
        it: 'Small',
        props: {
          size: 'small',
        },
      },
      {
        it: 'Medium',
        props: {
          size: 'medium',
          image: images[1],
        },
      },
      {
        it: 'Large',
        props: {
          size: 'large',
          image: images[2],
        },
      },
    ],
  },
  {
    describe: 'Inverted Layout',
    its: [
      {
        it: 'Small',
        props: {
          inverted: true,
          size: 'small',
        },
      },
      {
        it: 'Medium',
        props: {
          inverted: true,
          size: 'medium',
          image: images[1],
        },
      },
      {
        it: 'Large',
        props: {
          inverted: true,
          size: 'large',
          image: images[2],
        },
      },
    ],
  },
  {
    describe: 'No actions',
    its: [
      {
        it: 'Small',
        props: {
          size: 'small',
          actions: null,
        },
      },
      {
        it: 'Medium',
        props: {
          size: 'medium',
          actions: null,
          image: images[1],
        },
      },
      {
        it: 'Large',
        props: {
          size: 'large',
          actions: null,
          image: images[2],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`MarketingLayout/${describe}`, module).add(it, () => (
      <MarketingLayout {...commonProps} {...props} />
    ));
  });
});
