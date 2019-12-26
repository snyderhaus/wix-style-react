import React from 'react';
import {
  header,
  tabs,
  tab,
  title,
  description,
  columns,
  importExample,
  divider,
  code as baseCode,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import InfoCircle from 'wix-ui-icons-common/InfoCircle';

import { storySettings } from './storySettings';
import Accordion from '..';
import RichTextInputArea from '../../RichTextInputArea';
import { buttonTypes } from '../constants';

import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const item = config => ({
  title: 'Item',
  icon: <InfoCircle />,
  expandLabel: 'See More',
  collapseLabel: 'Less',
  children: examples.text,
  ...config,
});

const exampleItems = [
  {
    label: 'Two Rows',
    value: [
      item({
        title: 'First Row',
      }),
      item({
        title: 'Second Row',
      }),
    ],
  },

  {
    label: 'Three Rows having a button',
    value: [
      item({
        title: 'First Row',
      }),
      item({
        title: 'Second Row',
      }),

      item({
        title: 'Third Row With Editor',
        buttonType: buttonTypes.button,
        expandLabel: 'Show Editor',
        collapseLabel: 'Hide Editor',
        children: <RichTextInputArea />,
      }),
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Accordion,
  componentPath: '..',

  componentProps: {
    itemsHook: storySettings.itemsHook,
    items: exampleItems[0].value,
    multiple: false,
  },

  exampleProps: {
    items: exampleItems,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(`Component for collapsible content`),

          importExample("import Accordion from 'wix-style-react/Accordion';"),

          divider(),

          title('Examples'),

          ...[
            { title: 'Simple Usage', source: examples.simple },
            { title: 'With Button & Icon', source: examples.withButton },
            {
              title: 'Multiple with Initially Open',
              source: examples.multiple,
            },
            { title: 'Disabled Accordion Rows', source: examples.disabled },
            { title: 'Usage in Card', source: examples.inCard },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
