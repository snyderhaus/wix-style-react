/* eslint-disable no-console */
import {
  api,
  code as baseCode,
  columns,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';

import CardGalleryItem from '..';
import { storySettings } from './storySettings';
import componentProps from './exampleProps';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import PopoverMenu from '../../beta/PopoverMenu';

const { category, storyName } = storySettings;

const code = config =>
  baseCode({
    components: { ...allComponents, PopoverMenu },
    compact: true,
    ...config,
  });

const example = ({ title: exampleTitle, text, ...config }) =>
  columns([description({ title: exampleTitle, text }), code(config)]);

export default {
  category,
  storyName,

  component: CardGalleryItem,
  componentPath: '..',

  componentProps,

  sections: [
    header(),
    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample(
            "import CardGalleryItem from 'wix-style-react/CardGalleryItem';",
          ),
          divider(),
          title('Examples'),
          ...[
            {
              title: 'Settings Menu',
              text:
                'Settings menu can be provided with `settingsMenu` prop and can be an `IconButton`, `TextButton` or any other trigger based component.',
              source: examples.iconButton,
            },

            {
              title: 'Badge',
              text: 'Component can display a badge.',
              source: examples.badge,
            },
            {
              title: 'Background Image Node',
              text:
                'Component can display a background image node instead of image URL.',
              source: examples.backgroundImageNode,
            },
            {
              title: 'Disabled Primary Action',
              text: 'Primary Action can be disabled.',
              source: examples.disabledPrimaryAction,
            },
          ].map(example),
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
