import React from 'react';
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
import Help from 'wix-ui-icons-common/Help';

import CloseButton from '..';
import { Layout } from '../../Layout';
import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import testkit from '!raw-loader!./testkit.md';

import * as examples from './examples';

const Link = ({ children, ...rest }) => <a {...rest}>{children}</a>;

const liveCode = config =>
  baseLiveCode({
    previewProps: {
      style: { backgroundColor: '#f0f4f7' },
    },
    compact: true,
    components: { ...allComponents, Link },
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: CloseButton,
  componentPath: '..',

  componentProps: {
    as: 'button',
    skin: 'standard',
    size: 'small',
    disabled: false,
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    as: ['button', 'a', 'span', 'div'],
    children: [
      { label: 'No children', value: null },
      { label: 'Custom Icon', value: <Help /> },
    ],
  },

  sections: [
    header({
      component: (
        <Layout gap={0}>
          <CloseButton />
        </Layout>
      ),
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/CloseButton/CloseButton.js',
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),
    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample(
            "import CloseButton from 'wix-style-react/CloseButton';",
          ),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Skin',
              text:
                'Close button has 5 skins. `standard`, `light`, `dark`, `standardFilled`, `lightFilled` and `transparent`.',
              source: examples.skinsExamples,
            },
            {
              title: 'Size',
              text: 'Close button has two sizes – `small` and `medium`.',
              source: examples.sizesExamples,
            },
            {
              title: 'Custom Icon',
              text:
                'Additional actions next to the close button can be formed by using close button with a custom icon',
              source: examples.customExamples,
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
        sections: [description(testkit)],
      }),

      tab({
        title: 'Playground',
        sections: [playground()],
      }),
    ]),
  ],
};
