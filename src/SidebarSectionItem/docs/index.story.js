import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import SidebarSectionItem from '..';
import Box from '../../Box';
import CounterBadge from '../../CounterBadge';

const code = config => baseCode({ components: allComponents, ...config });

const childrenExamples = [
  { label: 'Text', value: 'Some text' },
  {
    label: 'Multiple lines',
    value: 'This is an example of multiple lines',
  },
];

export default {
  category: storySettings.category,
  storyName: 'SidebarSectionItem',

  component: SidebarSectionItem,
  componentPath: '..',

  componentProps: {
    children: childrenExamples[0].value,
  },

  exampleProps: {
    children: childrenExamples,
    prefix: [
      {
        label: 'Green circle',
        value: (
          <Box
            width="8px"
            height="8px"
            borderRadius="50%"
            backgroundColor="G10"
          ></Box>
        ),
      },
    ],
    suffix: [
      {
        label: 'Counter badge',
        value: <CounterBadge skin="standard">5</CounterBadge>,
      },
    ],
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SidebarSectionItem/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'An item for the section within the sidebar.',
            }),
          ]),

          columns([
            importExample(
              "import SidebarSectionItem from 'wix-style-react/SidebarSectionItem';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Plain Example',
              text: 'A simple example for section item',
            }),

            code({
              compact: true,
              source: examples.plain,
            }),
          ]),

          columns([
            description({
              title: 'Selected Item',
              text: 'An example that demonstrates a selected item',
            }),

            code({
              compact: true,
              source: examples.selected,
            }),
          ]),

          columns([
            description({
              title: 'Disabled Item',
              text: 'An example that demonstrates a disabled item',
            }),

            code({
              compact: true,
              source: examples.disabled,
            }),
          ]),

          columns([
            description({
              title: 'Drillable Item',
              text:
                'An example that demonstrates an icon for drilling in when hovering the item',
            }),

            code({
              compact: true,
              source: examples.drillable,
            }),
          ]),
          columns([
            description({
              title: 'Drillable Item with always shown Chevron',
              text:
                'An example that demonstrates an icon for drilling even without hovering',
            }),

            code({
              compact: true,
              source: examples.drillableAndAlwaysShowChevron,
            }),
          ]),

          columns([
            description({
              title: 'Item with Multiple Lines',
              text: 'An example that demonstrates an item with multiple lines',
            }),

            code({
              compact: true,
              source: examples.multipleLines,
            }),
          ]),

          columns([
            description({
              title: 'Item with Prefix',
              text:
                'An example that demonstrates an item with provided prefix element',
            }),

            code({
              compact: true,
              source: examples.prefix,
            }),
          ]),

          columns([
            description({
              title: 'Item with Suffix (Counter Badge)',
              text:
                'An example that demonstrates an item with a `<CounterBadge />` used as a suffix element',
            }),

            code({
              compact: true,
              source: examples.counterBadgeSuffix,
            }),
          ]),

          columns([
            description({
              title: 'Item with Suffix (Badge)',
              text:
                'An example that demonstrates an item with a `<Badge />` used as a suffix element',
            }),

            code({
              compact: true,
              source: examples.badgeSuffix,
            }),
          ]),

          columns([
            description({
              title: 'Light Skin',
              text:
                'This example uses the `<Sidebar/>` to demonstrate the "light" skin design. Notice that when `<SidebarSectionItem/>` is contained inside `<Sidebar/>`, it affected by the `skin` prop accordingly',
            }),

            code({
              compact: true,
              source: examples.lightSkin,
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
