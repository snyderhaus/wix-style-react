import React from 'react';
import {
  header,
  description,
  title,
  table,
  importExample,
  columns,
  code as baseCode,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';

import { storySettings } from './storySettings';
import * as examples from './examples';
import { baseScope } from '../utils/LiveCodeExample';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), code({ source })]);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/RichTextInputArea/',
    }),
    columns([
      description({
        title: 'Description',
        text: `Rich text area allows to enter and edit long and complex descriptions.`,
      }),
    ]),
    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind="Components"
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
            'Layout component for form elements',
          ],
          [
            <LinkTo
              kind="Components"
              story="RichTextInputArea"
            >{`<RichTextInputArea/>`}</LinkTo>,
            'Component that receives rich data',
          ],
        ],
      }),
    ]),

    columns([
      importExample({
        source: examples.importExample,
      }),
    ]),

    title('Examples'),

    ...[
      {
        title: 'Plain Example',
        text: 'Default rich text area setup.',
        source: examples.plainFormFieldComposition,
      },
      {
        title: 'Text Styling',
        text:
          'Rich text area supports two types of bullet point styles, basic text styling and hyperlinks.',
        source: examples.textStylingFormFieldComposition,
      },
    ].map(example),
  ],
};
