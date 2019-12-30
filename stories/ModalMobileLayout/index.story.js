import React from 'react';
import { Category } from '../storiesHierarchy';
import { storySettings } from './storySettings';
import { baseScope } from '../utils/LiveCodeExample';
import {
  header,
  title,
  description,
  columns,
  code as baseCode,
  importExample,
  divider,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';

import HeaderComponent from '../../src/ModalMobileLayout/docs/examples/Plain';
import { MobileModalTemplates } from './MobileModalTemplates';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

export const propsVariationExamples = [
  {
    title: 'Title',
    text: '',
    source: examples.title,
  },

  {
    title: 'Sticky Title',
    text: '',
    source: examples.stickyTitle,
  },

  {
    title: 'Footer',
    text: '',
    source: examples.footer,
  },

  {
    title: 'Sticky Footer',
    text: '',
    source: examples.stickyFooter,
  },

  {
    title: 'Close Button',
    text: '',
    source: examples.closeButton,
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/ModalMobileLayout/',
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      component: <HeaderComponent />,
    }),

    columns([
      description({
        title: 'Description',
        text: [
          'Use this component together with ',
          <LinkTo
            kind={Category.COMPONENTS}
            story="Modal"
          >{`<Modal />`}</LinkTo>,
          ' to display content in this layout. You may place a title and/or a footer with actions relevant to the displayed content.',
        ],
      }),
    ]),

    columns([
      importExample(
        "import ModalMobileLayout from 'wix-style-react/ModalMobileLayout';",
      ),
    ]),

    divider(),

    title('Examples'),

    ...propsVariationExamples.map(({ title, text, source }) =>
      columns([description({ title, text }), code({ source })]),
    ),

    divider(),

    title('Templates'),

    <MobileModalTemplates />,
  ],
};
