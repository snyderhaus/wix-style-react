import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import MultiSelect from '../../src/MultiSelect';

import {
  description,
  divider,
  importExample,
  tab,
  table,
  title,
  code as baseCode,
} from 'wix-storybook-utils/Sections';

import LinkTo from '@storybook/addon-links/react';
import playgroundStoryConfig from '../../src/MultiSelect/docs/MultiSelectPlaygroundConfig';
import allComponents from '../utils/allComponents';

import ExampleSelectSimpleRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleSelectSimple';
import ExampleSelectAutocompleteRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleSelectAutocomplete';
import ExampleSuggestionsRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleSuggestions';
import ExampleTagInputRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleTagInput';
import ExampleTagInputSelectionRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleTagInputSelection';

import ExampleReorderableRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleReorderable';

import ExampleThumbVariations from '../../src/MultiSelect/docs/ExampleThumbVariations';
import ExampleThumbVariationsRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleThumbVariations';

import { storySettings } from './storySettings';
import { Category } from '../storiesHierarchy';

const code = config =>
  baseCode({
    components: allComponents,
    compact: true,
    autoRender: false,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MultiSelect,

  componentPath: '..',
  ...playgroundStoryConfig,

  sections: [
    tab({
      title: 'Description',
      sections: [
        description(
          'A component for selecting/creating multiple values, and displaying them as tags.',
        ),

        table({
          title: 'Included Components',
          rows: [
            [
              <LinkTo
                kind={Category.COMPONENTS}
                story="MultiSelect"
              >{`<MultiSelect/>`}</LinkTo>,
            ],
            [
              <LinkTo
                kind={Category.COMPONENTS}
                story="Tag"
              >{`<Tag/>`}</LinkTo>,
            ],
          ],
        }),

        importExample("import MultiSelect from 'wix-style-react/MultiSelect';"),

        divider(),

        title('Examples'),

        ...[
          { title: 'Select', source: ExampleSelectSimpleRaw },
          {
            title: 'Select + Autocomplete',
            source: ExampleSelectAutocompleteRaw,
          },
          { title: 'Tag Input', source: ExampleTagInputRaw },
          { title: 'Tag Input + Suggestions', source: ExampleSuggestionsRaw },
          {
            title: 'Tag Input + Selection',
            source: ExampleTagInputSelectionRaw,
          },
          { title: 'Reorderable', source: ExampleReorderableRaw },
        ].map(code),

        description(
          <CodeExample title="ThumbVariations" code={ExampleThumbVariationsRaw}>
            <div style={{ maxWidth: 720 }}>
              <ExampleThumbVariations />
            </div>
          </CodeExample>,
        ),
      ],
    }),
  ],
};
