import React from 'react';
import CropRotate from 'wix-ui-icons-common/CropRotate';
import { storiesOf } from '@storybook/react';
import ToggleButton from '../ToggleButton';

const tests = [
  {
    describe: 'skin',
    its: [
      {
        it: 'standard',
        props: { tooltipContent: 'Crop & Rotate', children: <CropRotate /> },
      },
      {
        it: 'dark',
        props: {
          skin: 'dark',
          tooltipContent: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'selected',
    its: [
      {
        it: 'false',
        props: { tooltipContent: 'Crop & Rotate', children: <CropRotate /> },
      },
      {
        it: 'true',
        props: {
          selected: true,
          tooltipContent: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'false',
        props: {
          tooltipContent: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'true',
        props: {
          disabled: true,
          selected: true,
          tooltipContent: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ToggleButton/${describe}`, module).add(it, () => (
      <ToggleButton {...props} />
    ));
  });
});
