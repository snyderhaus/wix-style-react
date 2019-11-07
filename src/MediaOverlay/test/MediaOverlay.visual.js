import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { storySettings } from './storySettings';
import MediaOverlay from '../MediaOverlay';
import {
  allPlacements,
  topHoverMiddleAlwaysBottomDefault,
  numberedPlacements,
  dragHandle,
} from '../docs/examples/content';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';
import { mediaOverlayTestkitFactory } from '../../../testkit';

const createDriver = () =>
  mediaOverlayTestkitFactory({
    wrapper: document.body,
    dataHook: storySettings.dataHook,
  });

const hover = async () => await createDriver().hover();

const mediaUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8Exv7FAAF8AJtZv8v8wAAAABJRU5ErkJggg==';

const commonProps = {
  media: mediaUrl,
};

const tests = [
  {
    describe: 'media',
    its: [
      {
        it: 'Background Image',
      },
      {
        it: 'Custom Node',
        props: {
          media: (
            <div
              style={{
                height: '100%',
                background:
                  'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
              }}
            />
          ),
        },
      },
    ],
  },
  {
    describe: 'skin',
    its: [
      {
        it: 'gradient',
        props: {
          skin: 'gradient',
        },
      },
      {
        it: 'dark',
        props: {
          skin: 'dark',
        },
      },
    ],
  },
  {
    describe: 'hoverSkin',
    its: [
      {
        it: 'gradient',
        props: {
          hoverSkin: 'gradient',
        },
        componentDidMount: hover,
      },
      {
        it: 'dark',
        props: {
          hoverSkin: 'dark',
        },
        componentDidMount: hover,
      },
    ],
  },
  {
    describe: 'both skin and hoverSkin defined',
    its: [
      {
        it: 'both gradient without hover',
        props: {
          skin: 'gradient',
          hoverSkin: 'gradient',
        },
      },
      {
        it: 'both gradient with hover',
        props: {
          skin: 'gradient',
          hoverSkin: 'gradient',
        },
        componentDidMount: hover,
      },
      {
        it: 'skin=gradient and hoverSkin=dark with hover',
        props: {
          skin: 'gradient',
          hoverSkin: 'dark',
        },
        componentDidMount: hover,
      },
    ],
  },
  {
    describe: 'Content',
    its: [
      {
        it: 'all placements',
        props: {
          skin: 'gradient',
          children: allPlacements,
        },
      },
      {
        it: 'bottom default and middle always',
        props: {
          skin: 'gradient',
          children: topHoverMiddleAlwaysBottomDefault,
        },
      },
      {
        it: 'top on hover and middle always with hover',
        props: {
          skin: 'gradient',
          children: topHoverMiddleAlwaysBottomDefault,
        },
        componentDidMount: hover,
      },
      {
        it: 'rtl',
        props: {
          skin: 'gradient',
          children: numberedPlacements,
        },
        rtl: true,
      },
      {
        it: 'DragHandle',
        props: {
          hoverSkin: 'dark',
          children: dragHandle,
        },
        componentDidMount: hover,
      },
    ],
  },
];

const MediaOverlayWrapper = ({ componentDidMount, rtl, ...props }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  });

  return (
    <RTLWrapper rtl={rtl}>
      <div style={{ width: 250, height: 150 }}>
        <MediaOverlay {...props} />
      </div>
    </RTLWrapper>
  );
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount, rtl }) => {
    storiesOf(`MediaOverlay/${describe}`, module).add(it, () => (
      <MediaOverlayWrapper
        {...commonProps}
        {...props}
        data-hook={storySettings.dataHook}
        componentDidMount={componentDidMount}
        rtl={rtl}
      />
    ));
  });
});
