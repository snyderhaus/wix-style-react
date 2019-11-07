import React from 'react';
import { storiesOf } from '@storybook/react';

import { storySettings } from '../docs/storySettings';
import CardGalleryItem from '../CardGalleryItem';
import Badge from '../../Badge';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';

const { dataHook } = storySettings;

const backgroundImageUrl =
  'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

const badge = (
  <Badge size="medium" skin="standard" type="solid" uppercase>
    new item
  </Badge>
);

const commonProps = {
  title: 'Card Title',
  subtitle: 'Card subtitle',
  primaryActionProps: {
    label: 'Button',
    onClick: () => {
      alert('Primary action clicked');
    },
  },
  secondaryActionProps: {
    label: 'Text link',
    onClick: () => {
      alert('Secondary action clicked');
    },
  },
  backgroundImageUrl,
  badge,
};

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'without badge',
        props: {
          ...commonProps,
          badge: undefined,
        },
      },
      {
        it: 'with badge',
        props: commonProps,
      },
      {
        it: 'without titles',
        props: {
          ...commonProps,
          title: undefined,
          subtitle: undefined,
          badge: undefined,
        },
      },
      {
        it: 'without subtitle',
        props: {
          ...commonProps,
          subtitle: undefined,
        },
      },
      {
        it: 'RTL',
        rtl: true,
        props: commonProps,
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, rtl }) => {
    storiesOf(`CardGalleryItem/${describe}`, module).add(it, () => (
      <div
        style={{
          width: '60%',
          height: '500px',
          backgroundColor: '#dfe6ef',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '40%' }}>
          <RTLWrapper rtl={rtl}>
            <CardGalleryItem {...props} dataHook={dataHook} />
          </RTLWrapper>
        </div>
      </div>
    ));
  });
});
