import React from 'react';
import { storiesOf } from '@storybook/react';
import SidebarBackButton from '../SidebarBackButton';

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', //prop variation (e.g. small)
        props: {},
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it }) => {
    storiesOf(`SidebarBackButton/${describe}`, module).add(it, () => (
      <SidebarBackButton>Go Back</SidebarBackButton>
    ));
  });
});
