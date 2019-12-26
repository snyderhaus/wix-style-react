import React from 'react';
import CropRotate from 'wix-ui-icons-common/CropRotate';
import {
  tab,
  tabs,
  api,
  playground,
  description,
  divider,
  importExample,
  columns,
  header,
  title,
  code as baseLiveCode,
} from 'wix-storybook-utils/Sections';

import ToggleButton from '..';
import { Layout } from '../../Layout';
import { storySettings } from '../test/storySettings';
import icons from '../../../stories/utils/icons-for-story';
import { baseScope } from '../../../stories/utils/LiveCodeExample';
import testkit from '!raw-loader!./testkit.md';
import * as examples from './examples';

const Link = ({ children, ...rest }) => <a {...rest}>{children}</a>;

const liveCode = config =>
  baseLiveCode({
    previewProps: {
      style: { backgroundColor: '#f0f4f7' },
    },
    compact: true,
    components: { ...baseScope, Link },
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,
  component: ToggleButton,
  componentPath: '..',

  componentProps: {
    as: 'button',
    children: <CropRotate />,
    skin: 'standard',
    priority: 'primary',
    size: 'medium',
    tooltip: 'I am a tooltip',
    selected: false,
    disabled: false,
    tooltipContent: 'Crop & Rotate',
    tooltipProps: { placement: 'top' },
  },
  exampleProps: {
    onClick: () => 'Clicked!',
    children: icons,
    as: ['button', 'a', 'span', 'div'],
  },

  sections: [
    header({
      component: (
        <Layout gap={0}>
          <ToggleButton tooltipContent="Crop & Rotate">
            <CropRotate />
          </ToggleButton>
        </Layout>
      ),
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/ToggleButton/ToggleButton.js',
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),
    tabs({
      tabs: [
        tab({
          title: 'Description',
          sections: [
            columns([
              description({
                text: `Toggle Button is used when action is lower priority than a regular action or there’s no space available to place a button with text.`,
              }),
            ]),

            importExample(
              "import ToggleButton from 'wix-style-react/ToggleButton';",
            ),

            divider(),

            columns([title('Examples')]),

            ...[
              {
                title: 'Skin',
                text:
                  'Toggle Button supports 2 skin styles: `standard` and `dark`',
                source: examples.skins,
              },
              {
                title: 'Selected',
                text:
                  'It can be `selected` when needed to indicate that some state is enabled',
                source: examples.selected,
              },
              {
                title: 'Disabled',
                text:
                  'It can be `disabled` when needed to indicate that action is available, but cannot be performed at the moment.',
                source: examples.disabled,
              },
              {
                title: 'Custom HTML tag',
                text: `
                  This component can be rendered as any given HTML tag – \`<button/>\`, \`<a/>\`, \`<Link/>\` (from react router), \`<div/>\`, \`<span/>\` etc.<br/>
                  All props/attributes will pass to the <em>rendered</em> HTML tag.<br/>
                  <br/>
                  For example:<br/>
                  - as an \`<a/>\`, the component can have attributes like \`href\`, \`target\`, etc.<br/>
                  - as a \`<Link/>\` from react router, the component can have props like \`to\`, \`replace\`, etc.
                `,
                source: examples.custom,
              },
            ].map(example),
          ],
        }),

        tab({
          title: 'API',
          sections: [api()],
        }),

        tab({
          title: 'Testkit',
          sections: [description({ text: testkit })],
        }),

        tab({
          title: 'Playground',
          sections: [playground()],
        }),
      ],
    }),
  ],
};
