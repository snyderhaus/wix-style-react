import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from './storySettings';
import MultiSelectCheckboxTest from './MultiSelectCheckboxTest';
import TestTabSwitches from '../test/TestTabSwitches';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

const TestContainer = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f4f7',
    }}
  >
    {children}
  </div>
);

const MultiSelectCheckboxTests = storiesOf(kind, module);

MultiSelectCheckboxTests.add(testStories.multiSelectCheckbox, () => (
  <MultiSelectCheckboxTest />
));

MultiSelectCheckboxTests.add(testStories.tabsSwitches, () => (
  <TestContainer>
    <input data-hook="input-for-initial-focus" />
    <TestTabSwitches />
    <input style={{ position: 'relative', top: '400px' }} />
  </TestContainer>
));
