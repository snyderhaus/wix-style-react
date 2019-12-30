import React from 'react';
import LinkTo from '@storybook/addon-links/react';
import {
  title,
  description,
  columns,
  table,
  importExample,
  code as baseCode,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import { baseScope } from '../utils/LiveCodeExample';

import * as examples from './examples';

import ExampleGeneralLayoutRaw from '!raw-loader!./ExampleGeneralLayout';
import ExampleSplitLayoutRaw from '!raw-loader!./ExampleSplitLayout';
import ExampleGalleryLayoutRaw from '!raw-loader!./ExampleGalleryLayout';
import ExampleEmptyStateRaw from '!raw-loader!./ExampleEmptyState';
import { Category } from '../storiesHierarchy';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    description({
      title: 'Description',
      text: `Compositions from multiple components that help to setup a page.`,
    }),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Page"
              children="<Page/>"
            />,
            'Business Manager’s root component',
          ],

          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="PageHeader"
              children="<Page.Header/>"
            />,
            '`<Page/>` component’s child',
          ],

          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Grid"
              children="<Grid/>"
            />,
            'Component that constructs a grid',
          ],

          [
            <LinkTo
              kind={Category.LAYOUT}
              story="2.2 Card Layout"
              children="<Card/>"
            />,
            'Light card component',
          ],

          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="EmptyState"
              children="<EmptyState/>"
            />,
            'Component that render Empty state layout',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    title('Examples'),

    ...[
      {
        pretitle: '2.1.A',
        title: 'General Layout',
        description: 'A classic layout for forms and lists',
        source: ExampleGeneralLayoutRaw,
      },

      {
        pretitle: '2.1.B',
        title: 'Split Layout',
        description: 'A Layout for forms item previews',
        source: ExampleSplitLayoutRaw,
      },

      {
        pretitle: '2.1.C',
        title: 'Gallery Layout',
        description: 'Best for product category lists',
        source: ExampleGalleryLayoutRaw,
      },

      {
        pretitle: '2.1.D',
        title: 'Empty State',
        description: 'Best for initial call to action',
        source: ExampleEmptyStateRaw,
      },
    ].map(code),
  ],
};
