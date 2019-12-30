import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storySettings } from './storySettings';

import EmptyState from '..';
import TextButton from 'wix-style-react/TextButton';
import Heading from '../../Heading';

import { Add, Download, StatusComplete } from 'wix-ui-icons-common';

import ImagePlaceholder from '../../../stories/utils/ImagePlaceholder';
import { Category } from '../../../stories/storiesHierarchy';

const singleAction = <TextButton prefixIcon={<Add />}>New Item</TextButton>;

const singleActionLongText = (
  <TextButton ellipsis prefixIcon={<Add />}>
    New Item with a ridiculous length name that does not fit to a single line
  </TextButton>
);

const twoActions = (
  <span>
    <span style={{ margin: '0 15px' }}>
      <TextButton prefixIcon={<Add />}>New Item</TextButton>
    </span>
    <span style={{ margin: '0 15px' }}>
      <TextButton prefixIcon={<Download />}>Import Items</TextButton>
    </span>
  </span>
);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: EmptyState,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    theme: 'page',
    title: "You don't have any items yet",
    subtitle:
      'Create your product item in an easy & fast way to display it on your site',
    image: <ImagePlaceholder />,
    children: null,
  },

  exampleProps: {
    theme: ['page', 'page-no-border', 'section'],
    image: [
      { label: 'No image', value: null },
      {
        label: 'Image URL',
        value:
          'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg',
      },
      { label: 'Node', value: <ImagePlaceholder /> },
      { label: 'SVG', value: <StatusComplete size="120px" /> },
    ],
    children: [
      { label: 'No children', value: null },
      { label: 'Single action', value: singleAction },
      { label: 'Two actions', value: twoActions },
      { label: 'Single action with long text', value: singleActionLongText },
    ],
    align: [
      { label: 'left', value: 'left' },
      { label: 'center', value: 'center' },
      { label: 'right', value: 'right' },
    ],
  },

  examples: (
    <div>
      <Heading appearance="H2">
        You can find more examples for components that utilize the EmptyState:
      </Heading>

      <ul>
        <li>
          <TextButton onClick={linkTo(Category.LAYOUT, '2.1 Page Layout')}>
            Page
          </TextButton>
          <br />
        </li>
        <li>
          <TextButton onClick={linkTo(Category.LAYOUT, '2.1 Page Layout')}>
            Card
          </TextButton>
          <br />
        </li>
        <li>
          <TextButton onClick={linkTo(Category.MODALS, '9.1 Alert')}>
            Alert
          </TextButton>
          <br />
        </li>
        <li>
          <TextButton
            onClick={linkTo(Category.COMPONENTS, 'MessageBoxFunctionalLayout')}
          >
            MessageBoxFunctionalLayout
          </TextButton>
          <br />
        </li>
      </ul>
    </div>
  ),
};
