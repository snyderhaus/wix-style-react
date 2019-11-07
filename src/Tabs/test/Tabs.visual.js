import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../../Box';
import Tabs from '../Tabs';

const defaultProps = {
  items: [1, 2, 3, 4, 5].map(index => ({
    id: String(index),
    title: `item ${index}`,
  })),
  activeId: '2',
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'selected',
        props: {},
      },
      {
        it: 'unselected',
        props: { activeId: '' },
      },
      {
        it: 'without a divider',
        props: { hasDivider: false },
      },
      {
        it: 'with side content',
        props: { sideContent: <div>Side content!</div> },
      },
      {
        it: 'with long names',
        props: {
          items: [1, 2, 3, 4, 5].map(index => ({
            id: String(index),
            title: `This is item number ${index}`,
          })),
        },
      },
      {
        it: 'with 800px min container width',
        props: { minWidth: '800px' },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  let _describe = '';
  if (describe) {
    _describe += `/${describe}`;
  }

  its.forEach(({ it, props }) => {
    storiesOf(`Tabs${_describe}`, module).add(it, () => (
      <Box direction="vertical" maxWidth="800px">
        <Box margin={2}>
          <Tabs {...defaultProps} {...props} />
        </Box>
        <Box margin={2}>
          <Tabs type="compact" {...defaultProps} {...props} />
        </Box>
        <Box margin={2}>
          <Tabs type="compactSide" {...defaultProps} {...props} />
        </Box>
        <Box margin={2}>
          <Tabs type="uniformSide" {...defaultProps} {...props} />
        </Box>
        <Box margin={2}>
          <Tabs type="uniformFull" {...defaultProps} {...props} />
        </Box>
      </Box>
    ));
  });
});

storiesOf('Tabs', module).add('with tab width (Uniform Side)', () => (
  <Box direction="vertical">
    <Box margin={2}>
      <Tabs type="uniformSide" {...defaultProps} width="50px" />
    </Box>
    <Box margin={2}>
      <Tabs type="uniformSide" {...defaultProps} width="100px" />
    </Box>
    <Box margin={2}>
      <Tabs type="uniformSide" {...defaultProps} width="150px" />
    </Box>
    <Box margin={2}>
      <Tabs type="uniformSide" {...defaultProps} width="200px" />
    </Box>
  </Box>
));
