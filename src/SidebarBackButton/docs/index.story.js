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
import SidebarBackButton from '..';
import * as examples from './examples';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'SidebarBackButton',

  component: SidebarBackButton,
  componentPath: '..',

  componentProps: {
    children: 'Go back',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SidebarBackButton/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'A suggested back button for the sidebar, accepting text and onClick.',
            }),
          ]),

          columns([
            importExample(
              "import SidebarBackButton from 'wix-style-react/SidebarBackButton';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text: 'the arrow will move only on hover',
            }),

            code({
              compact: true,
              source: examples.plain,
            }),
          ]),
          columns([
            description({
              title: 'Animated Arrow',
              text:
                'The arrow will animate every 5 seconds, to achieve prominence',
            }),
            code({
              compact: true,
              source: examples.withAnimation,
            }),
          ]),
          columns([
            description({
              title: 'Light Skin',
              text: 'Using a Sidebar container with skin="light"',
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
