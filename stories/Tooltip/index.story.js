import React from 'react';
import { storySettings } from './storySettings';
import { baseScope } from '../utils/LiveCodeExample';
import {
  header,
  title as sectionTitle,
  description,
  table,
  importExample,
  columns,
  code,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';

import { Layout, Cell } from 'wix-style-react/Layout';
import TextButton from 'wix-style-react/TextButton';
import Tooltip from 'wix-style-react/Tooltip';
import SectionHelper from 'wix-style-react/SectionHelper';
import { Category } from '../storiesHierarchy';

const liveCode = config =>
  code({
    previewProps: {
      style: { backgroundColor: '#f0f4f7' },
    },
    compact: true,
    components: baseScope,
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <Layout gap={10}>
          <Cell>
            <Tooltip upgrade appendTo="window" content="HERE I AM! THIS IS ME!">
              <TextButton skin="dark">Hover me</TextButton>
            </Tooltip>
          </Cell>
          <Cell span={6}>
            <SectionHelper title="Next Generation Tooltip">
              To enable new generation read more on Tooltip's API docs
            </SectionHelper>
          </Cell>
        </Layout>
      ),

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),

    columns([
      description({
        title: 'Description',
        text: `Tooltips can be attached to any active element (icons, text links, buttons, etc.) on a page. They provide descriptions or explanations for their paired element. Thus, tooltips are highly contextual and specific and don’t explain the bigger picture or entire task flow.`,
      }),
    ]),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Tooltip"
            >{`<Tooltip/>`}</LinkTo>,
            'content element',
          ],
          [
            <LinkTo
              kind={Category.BUTTONS}
              story="5.3 TextButton"
            >{`<TextButton/>`}</LinkTo>,
            'trigger element',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Text"
            >{`<Text/>`}</LinkTo>,
            'trigger element',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    sectionTitle('Examples'),

    ...[
      {
        title: 'Plain Example',
        text: 'Plain example of how to use tooltip.',
        source: examples.basic,
      },
      {
        title: 'Placement',
        text:
          'Tooltips have four standard placements available: `top`, `right`, `bottom`, and `left`. Each standard position center-aligns itself along the appropriate axis and appears outside the target element.',
        source: examples.placements,
      },
      {
        title: 'Delay',
        text:
          'Time in milliseconds to wait before showing or hiding the tooltip. Controlled by props `enterDelay` or `exitDelay`.',
        source: examples.delay,
      },
      {
        title: 'Size',
        text: 'Tooltip supports two sizes: `small` and `medium`.',
        source: examples.size,
      },
      {
        title: 'Disabled Elements',
        text:
          'By default disabled elements like `<button>` do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element like a `span`.',
        source: examples.disabled,
      },
    ].map(example),
  ],
};
