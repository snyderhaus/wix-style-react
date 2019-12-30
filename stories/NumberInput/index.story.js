import React from 'react';
import { storySettings } from './storySettings';
import { baseScope } from '../utils/LiveCodeExample';
import {
  header,
  title,
  description,
  table,
  importExample,
  columns,
  code as baseCode,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';

import NumberInput from 'wix-style-react/NumberInput';
import FormField from 'wix-style-react/FormField';
import { Category } from '../storiesHierarchy';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <FormField label="Number Input">
            <NumberInput />
          </FormField>
        </div>
      ),

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/blob/master/src/NumberInput',
    }),

    columns([
      description({
        title: 'Description',
        text: `Number Input is a composition of 2 individual components – &lt;FormField/&gt; and &lt;NumberInput /&gt;. This composition is used to build various forms.`,
      }),
    ]),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
            'Layout component for form elements',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="NumberInput"
            >{`<NumberInput/>`}</LinkTo>,
            'Component that receives data',
          ],
        ],
      }),
    ]),

    columns([importExample(examples.importExample)]),

    title('Examples'),

    ...[
      {
        title: 'Size',
        text: 'Text Input supports 3 sizes',
        source: examples.sizes,
      },

      {
        title: 'Affix',
        text: 'Text Input has additional container in prefix and suffix area',
        source: examples.affix,
      },

      {
        title: 'Required Info',
        text: 'You can add an asterisk if the field is required',
        source: examples.required,
      },

      {
        title: 'Label Position',
        text:
          'Text Input’s label can be position on top, left or can be hidden. Additional properties behave accordingly.',
        source: examples.position,
      },
    ].map(({ title, text, source }) =>
      columns([description({ title, text }), code({ source })]),
    ),
  ],
};
