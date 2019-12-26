import React from 'react';
import { storiesOf } from '@storybook/react';
import Favorite from 'wix-ui-icons-common/Favorite';

import ListItemSelect from '../ListItemSelect';
import Box from '../../Box';

const componentProps = {
  title: ['List item select'],
  size: ['small', 'medium'],
  prefix: [
    null,
    <Box>
      <Favorite />
    </Box>,
  ],
  suffix: [null, 'Suffix'],
};

let permutations = [];
Object.keys(componentProps).forEach(key => {
  if (permutations.length === 0) {
    componentProps[key].forEach(value => permutations.push({ [key]: value }));
  } else {
    const arr = [];
    componentProps[key].forEach(value =>
      permutations.forEach(group => arr.push({ ...group, [key]: value })),
    );
    permutations = arr;
  }
});

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'default',
      },
      {
        it: 'with subtitle',
        props: {
          subtitle: 'This is a nice subtitle',
        },
      },
      {
        it: 'selected',
        props: { selected: true },
      },
      {
        it: 'selected with subtitle',
        props: {
          selected: true,
          subtitle: 'This is a nice subtitle',
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'default',
        props: { disabled: true },
      },
      {
        it: 'with subtitle',
        props: { disabled: true, subtitle: 'This is a nice subtitle' },
      },
    ],
  },
  {
    describe: 'long text',
    its: [
      {
        it: 'without ellipsis',
        props: {
          title:
            'this is a long text that will eventually have an ellipsis at some point',
        },
      },
      {
        it: 'with ellipsis',
        props: {
          title:
            'this is a long text that will eventually have an ellipsis at some point',
          ellipsis: true,
        },
      },
      {
        it: 'long subtitle without ellipsis',
        props: {
          title:
            'this is a long text that will eventually have an ellipsis at some point',
          subtitle:
            'this is a long text that will eventually have an ellipsis at some point',
        },
      },
      {
        it: 'long subtitle with ellipsis',
        props: {
          title:
            'this is a long text that will eventually have an ellipsis at some point',
          subtitle:
            'this is a long text that will eventually have an ellipsis at some point',
          ellipsis: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ListItemSelect/${describe}`, module).add(it, () => (
      <React.Fragment>
        {permutations.map(_props => (
          <Box backgroundColor="#eee">
            <Box width="400px" margin={1}>
              <ListItemSelect {..._props} {...props} />
            </Box>
            <Box width="400px" margin={1}>
              <ListItemSelect checkbox {..._props} {...props} />
            </Box>
          </Box>
        ))}
      </React.Fragment>
    ));
  });
});
