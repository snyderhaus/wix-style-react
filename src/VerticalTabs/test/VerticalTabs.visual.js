import React from 'react';
import { storiesOf } from '@storybook/react';
import Check from 'wix-ui-icons-common/Check';
import CircleSmallFilled from 'wix-ui-icons-common/CircleSmallFilled';
import VerticalTabs from '../VerticalTabs';

const tests = [
  {
    describe: 'size',
    its: [
      {
        it: 'small',
        props: {
          size: 'small',
        },
      },
      {
        it: 'medium',
        props: {
          size: 'medium',
        },
      },
    ],
  },
  {
    describe: 'activeTabId',
    its: [
      {
        it: 'active tab 1',
        props: {
          activeTabId: 1,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`VerticalTabs/${describe}`, module).add(it, () => (
      <VerticalTabs {...props}>
        <VerticalTabs.TabsGroup title="Current Benefits">
          <VerticalTabs.TabItem id={0} prefixIcon={<Check />}>
            Experts Dashboard
          </VerticalTabs.TabItem>
          <VerticalTabs.TabItem id={1} prefixIcon={<Check />}>
            Product Betas
          </VerticalTabs.TabItem>
          <VerticalTabs.TabItem id={2} prefixIcon={<Check />}>
            Wix Arena Exposure
          </VerticalTabs.TabItem>
        </VerticalTabs.TabsGroup>
        <VerticalTabs.TabsGroup title="Next Level Benefits">
          <VerticalTabs.TabItem id={3} prefixIcon={<CircleSmallFilled />}>
            Loyalty Program
          </VerticalTabs.TabItem>
          <VerticalTabs.TabItem id={4} prefixIcon={<CircleSmallFilled />}>
            20% Revenue Share
          </VerticalTabs.TabItem>
          <VerticalTabs.TabItem id={5} prefixIcon={<CircleSmallFilled />}>
            Dedicated Account Manager
          </VerticalTabs.TabItem>
        </VerticalTabs.TabsGroup>
      </VerticalTabs>
    ));
  });
});
