import React from 'react';
import { storySettings } from './storySettings';
import {
  header,
  description,
  divider,
  columns,
  table,
  title,
  code as baseLiveCode,
} from 'wix-storybook-utils/Sections';

import SegmentedToggle from 'wix-style-react/SegmentedToggle';
import LockLocked from 'wix-ui-icons-common/LockLocked';
import LockUnlocked from 'wix-ui-icons-common/LockUnlocked';
import { Layout, Cell } from 'wix-style-react/Layout';
import LinkTo from '@storybook/addon-links/react';
import { baseScope } from '../utils/LiveCodeExample';

import * as examples from './examples';
import { Category } from '../storiesHierarchy';

const BasicExample = () => (
  <Layout>
    <Cell span={4}>
      <SegmentedToggle defaultSelected="locked">
        <SegmentedToggle.Button value="locked" prefixIcon={<LockLocked />}>
          Locked
        </SegmentedToggle.Button>
        <SegmentedToggle.Button value="unlocked" prefixIcon={<LockUnlocked />}>
          Unlocked
        </SegmentedToggle.Button>
      </SegmentedToggle>
    </Cell>
  </Layout>
);

const liveCode = config =>
  baseLiveCode({
    compact: true,
    components: baseScope,
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  componentProps: {
    dataHook: storySettings.dataHook,
    defaultSelected: 'locked',
    children: [
      <SegmentedToggle.Button value="locked" prefixIcon={<LockLocked />}>
        Locked
      </SegmentedToggle.Button>,
      <SegmentedToggle.Button value="unlocked" prefixIcon={<LockUnlocked />}>
        UnLocked
      </SegmentedToggle.Button>,
    ],
  },

  sections: [
    header({
      component: <BasicExample />,
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SegmentedToggle/SegmentedToggle.js',
    }),

    description({
      title: 'Description',
      text: `SegmentedToggle is a view group containing typically three or more buttons that can be toggled on and off. These buttons visibly change to indicate whether an option is active or inactive.`,
    }),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
            'Layout component for form elements',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="SegmentedToggle"
            >{`<SegmentedToggle/>`}</LinkTo>,
            'Selection component',
          ],
        ],
      }),
    ]),

    divider(),

    title('Examples'),

    ...[
      {
        title: 'Text & Prefix',
        text:
          'Icon accompanied by text make information easier to find and scan.',
        source: examples.textAndIcon,
      },
      {
        title: 'Text',
        text: 'Simple usecase where prefix icon is not an option.',
        source: examples.text,
      },
      {
        title: 'Icon',
        text:
          'Icon only option is mostly used in narrow places. This option provides additional tooltip on hover in order to inform users on icons meaning.',
        source: examples.icon,
      },
    ].map(example),
  ],
};
