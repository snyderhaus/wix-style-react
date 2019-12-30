import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import LiveCodeExample from '../utils/LiveCodeExample';
import exampleCode from '!raw-loader!./example';

import { Category } from '../storiesHierarchy';

const playgroundExplanation = `
# Playground
> "Design is not just what it looks like and feels like. Design is how it works" (Steve Jobs)


This playground is a great way to play with the \`wix-style-react\` components and create prototypes.
`;

storiesOf(Category.PLAYGROUND, module).add('Playground', () => (
  <div>
    <Markdown source={playgroundExplanation} />
    <LiveCodeExample compact initialCode={exampleCode} />
  </div>
));
