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

import Box from 'wix-style-react/Box';
import Text from 'wix-style-react/Text';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import PreviewWidget from '..';
import { Layout, Cell } from 'wix-style-react/Layout';

import { borderType, contentAreaType, backgroundColor } from '../constants';

const code = config => baseCode({ components: allComponents, ...config });

const childNode = (
  <Box
    align="center"
    verticalAlign="middle"
    height="50px"
    width="150px"
    backgroundColor="D80"
  >
    <Text>Content goes here</Text>
  </Box>
);

const childNodeString = `<Box align=\'center\' verticalAlign=\'middle\' height=\'50px\' width=\'150px\' backgroundColor=\'D80\'>\n
<Text>Content  goes here</Text>\n 
</Box>\n`;

export default {
  category: storySettings.category,
  storyName: 'PreviewWidget',

  component: PreviewWidget,
  componentPath: '..',

  componentProps: {
    dataHook: 'preview-story',
    type: contentAreaType.blank,
    backgroundColor: backgroundColor.grey,
    borderType: borderType.shadow,
    children: childNode,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/PreviewWidget/',
      component: <PreviewWidget>{childNode}</PreviewWidget>,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Preview content widget.',
            }),
          ]),

          columns([
            importExample(
              "import PreviewWidget from 'wix-style-react/PreviewWidget';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Type',
              text: 'Preview widget supports `blank` type.',
            }),

            code({
              compact: true,
              source: `<PreviewWidget type="blank" >\n ${childNodeString} </PreviewWidget>`,
            }),
          ]),

          columns([
            description({
              title: 'Color background',
              text: 'PreviewWidget supports `grey` and `gradient` colors.',
            }),

            code({
              compact: true,
              source: `<Layout>\n
                <Cell>\n
                    <PreviewWidget>\n ${childNodeString} </PreviewWidget>\n
                </Cell>
                <Cell>
                    <PreviewWidget backgroundColor=\'gradient\' >\n ${childNodeString} </PreviewWidget>\n
                </Cell>\n 
              </Layout>`,
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
