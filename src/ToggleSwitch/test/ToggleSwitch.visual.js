import React from 'react';
import { storiesOf } from '@storybook/react';
import ToggleSwitch from '../ToggleSwitch';
import { SKINS, SIZES } from '../constants';

const skins = Object.values(SKINS);

const sizes = Object.values(SIZES);

const test = (it, props) => ({ it, props });

const tests = [
  {
    describe: 'Default',
    its: [
      {
        it: 'default',
        props: {},
      },
    ],
  },
  {
    describe: 'Disabled',
    its: sizes.map(size => test(size, { size, disabled: true })),
  },
  {
    describe: 'Skins',
    its: skins.map(skin => test(skin, { skin })),
  },
  {
    describe: 'Sizes',
    its: sizes.map(size => test(size, { size })),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ToggleSwitch/${describe}`, module).add(it, () => (
      <React.Fragment>
        <ToggleSwitch {...props} checked />
        <ToggleSwitch {...props} />
      </React.Fragment>
    ));
  });
});
