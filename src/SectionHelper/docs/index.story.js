import SectionHelper from '..';
import { storySettings } from './storySettings';
import {
  api,
  code as baseCode,
  columns,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import * as examples from './examples';
import React from 'react';
import { baseScope } from '../../../stories/utils/LiveCodeExample';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

const titleExamples = [
  { label: 'short text', value: 'Look at this important message!' },

  {
    label: 'long text',
    value:
      'Look at this really long and important message that could in some cases contain many lengthy words like psychophysicotherapeutics!',
  },
];

const childrenExamples = [
  {
    label: 'short text',
    value: 'This is a very important message',
  },
  {
    label: 'long text',
    value:
      'This is the content of very important message which actually has a lot of detailed explanation about various things. It may even have multiple sentences but they do not need to be those boring "Lorem Ipsum"',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SectionHelper,
  componentPath: '..',

  componentProps: {
    dataHook: 'storybook-sectionhelper',
    actionText: 'I understand the consequences',
    appearance: 'standard',
    title: titleExamples[0].value,
    children: childrenExamples[0].value,
    showCloseButton: true,
    fullWidth: false,
  },

  exampleProps: {
    title: titleExamples,
    children: childrenExamples,

    onAction: () => 'onAction',
    onClose: () => 'onClose',
  },

  sections: [
    header({
      component: <div style={{ width: '50%' }}></div>,

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/blob/master/src/SectionHelper',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `Used in pages where you need to explain or mention things about the content or actions.`,
          ),

          importExample(
            "import SectionHelper from 'wix-style-react/SectionHelper';",
          ),

          divider(),

          title('Examples'),

          ...[
            { title: 'Appearance', source: examples.appearance },
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
