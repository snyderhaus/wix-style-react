import React from 'react';
import { storiesOf } from '@storybook/react';
import More from 'wix-ui-icons-common/More';
import MoreSmall from 'wix-ui-icons-common/MoreSmall';
import IconButton from '../IconButton';
import { SKINS } from '../constants';

const skins = Object.keys(SKINS);

const tests = [
  {
    describe: 'size',
    its: [
      {
        it: 'tiny',
        props: { size: 'tiny', children: <MoreSmall /> },
      },
      {
        it: 'small',
        props: { size: 'small', children: <MoreSmall /> },
      },
      {
        it: 'medium',
        props: { size: 'medium', children: <More /> },
      },
      {
        it: 'large',
        props: { size: 'large', children: <More /> },
      },
    ],
  },
  {
    describe: 'skins',
    its: skins.reduce((its, skin) => {
      const primary = {
        it: `Primary ${skin}`,
        props: {
          as: 'a',
          children: <More />,
          skin,
        },
      };
      const secondary = {
        it: `Secondary ${skin}`,
        props: {
          ...primary.props,
          priority: 'secondary',
        },
      };

      return [...its, primary, secondary];
    }, []),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`IconButton/${describe}`, module).add(it, () => (
      <div style={{ background: '#ccc', padding: '12px 18px', height: '42px' }}>
        <IconButton {...props} />
      </div>
    ));
  });
});
