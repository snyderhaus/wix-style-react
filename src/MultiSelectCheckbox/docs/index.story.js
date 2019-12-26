import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import { storySettings } from './storySettings';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import MultiSelectCheckbox from '..';
import options from './multiSelectOptions';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MultiSelectCheckbox,
  componentPath: '..',

  componentProps: (setState, getState) => ({
    options,
    disableClickOutsideWhenClosed: true,
    selectedOptions: [],
    onClickOutside: () => {},
    onDeselect: selectedOption => {
      setState({
        selectedOptions: getState().selectedOptions.filter(
          val => val !== selectedOption,
        ),
      });
    },
    onSelect: selectedOption => {
      setState({
        selectedOptions: [...getState().selectedOptions, selectedOption],
      });
    },
    dataHook: storySettings.dataHook,
  }),

  exampleProps: {
    options: [
      { label: 'One option', value: [{ id: 0, value: 'Just me here' }] },
      { label: `${options.length} options`, value: options },
    ],
  },

  examples: (
    <CodeExample title="Standard" code={ExampleStandardRaw}>
      <ExampleStandard />
    </CodeExample>
  ),
};
