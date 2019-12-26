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

import Palette from '..';
import Box from '../../Box/Box';
import { baseScope } from '../../../stories/utils/LiveCodeExample';

import * as examples from './examples';

const liveCode = config =>
  baseCode({
    previewProps: {
      style: { backgroundColor: '#f0f4f7' },
    },
    compact: true,
    components: baseScope,
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

const colors3 = [
  'rgb(50, 132, 144)',
  'rgb(50, 183, 198)',
  'rgb(146, 224, 225)',
  'rgb(203, 246, 255)',
  'rgb(229, 250, 248)',
];
const colors6 = ['cyan', 'yellow', 'pink', '#fff', 'rgb(0, 0, 0)', '#aeaeae'];

export default {
  category: storySettings.category,
  storyName: 'Palette',

  component: Palette,
  componentPath: '..',

  componentProps: {
    fill: colors3,
  },
  componentWrapper: ({ component }) => (
    <Box width="100px" height="24px">
      {component}
    </Box>
  ),
  exampleProps: {
    fill: [
      { label: colors3.toString(), value: colors3 },
      { label: colors6.toString(), value: colors6 },
    ],
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Palette/',
      component: (
        <Box width={'200px'} height={'24px'}>
          <Palette fill={colors3} />
        </Box>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'Palette is a list of colors. It can be solid colors, gradients or images. Palette should be used when needed to demonstrate available styles.',
            }),
          ]),

          columns([
            importExample("import Palette from 'wix-style-react/Palette';"),
          ]),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Structure',
              text:
                'Component allows any number of color fills. It splits into equal columns horiontally.',
              source: examples.simple,
            },
            {
              title: 'Fill',
              text: 'It can be a palette of solid colors, gradients or images.',
              source: examples.fill,
            },
            {
              title: 'Size',
              text:
                'Component by default stretches 100% both vertically and hotizontally. It’s size can be controlled with external parent component.',
              source: examples.size,
            },
          ].map(example),

          divider(),

          title('Use Cases'),

          columns([
            description(
              'Palette can be used inside various components, for example, FormField or Thumbnail.',
            ),
          ]),

          columns([
            liveCode({ source: examples.formfield }),
            liveCode({ source: examples.thumbnailSmall }),
          ]),

          columns([liveCode({ source: examples.thumbnailBig })]),
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
