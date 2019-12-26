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

import { SIZES, SKINS } from '../constants';

import ControlledToggleSwitch from '!raw-loader!./ControlledToggleSwitch';
import * as examples from './examples';

import ToggleSwitch from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: ToggleSwitch,
  componentPath: '..',

  componentProps: (setState, getState) => ({
    checked: false,
    onChange: () => setState({ checked: !getState().checked }),
  }),

  exampleProps: {
    size: Object.keys(SIZES),
    skin: Object.keys(SKINS),

    onChange: () => 'changed',
  },

  sections: [
    header({
      component: <ToggleSwitch onChange={() => 'changed'} />,
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/blob/master/src/ToggleSwitch',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'Toggle Switch changes the state of a single setting on or off.',
            }),
          ]),

          columns([
            importExample(
              "import ToggleSwitch from 'wix-style-react/ToggleSwitch';",
            ),
          ]),

          divider(),

          title('Examples'),

          'standard',

          columns([
            description({
              title: 'Size',
              text: `ToggleSwitch has 3 sizes: \`${SIZES.small}\`,\`${SIZES.medium}\` and \`${SIZES.large}\` (default).`,
            }),

            code({
              compact: true,
              source: examples.sizes,
            }),
          ]),

          columns([
            description({
              title: 'Skins',
              text: `ToggleSwitch has 3 skins: \`${SKINS.standard}\` (default),\`${SIZES.success}\` and \`${SKINS.error}\`.`,
            }),

            code({
              compact: true,
              source: examples.skins,
            }),
          ]),

          columns([
            description({
              title: 'Controlled Toggle Switch',
              text: 'An example of a controlled Toggle Switch',
            }),

            code({
              compact: true,
              source: ControlledToggleSwitch,
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
