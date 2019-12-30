import Skeleton from '..';
import { Category } from '../../../stories/storiesHierarchy';
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
import { baseScope } from '../../../stories/utils/LiveCodeExample';
import * as examples from './examples';
import React from 'react';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

const exampleContent = [
  {
    label: 'small/large/medium',
    value: [
      {
        size: 'small',
        type: 'line',
      },
      {
        size: 'large',
        type: 'line',
      },
      {
        size: 'medium',
        type: 'line',
      },
    ],
  },
  {
    label: 'small/medium/full',
    value: [
      {
        size: 'small',
        type: 'line',
      },
      {
        size: 'medium',
        type: 'line',
      },
      {
        size: 'full',
        type: 'line',
      },
    ],
  },
];

export default {
  category: Category.COMPONENTS,
  storyName: 'Skeleton',
  component: Skeleton,
  componentPath: '..',

  componentProps: {
    content: exampleContent[0].value,
    dataHook: 'storybook-skeleton',
  },

  exampleProps: {
    content: exampleContent,
  },

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <Skeleton />
        </div>
      ),

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/blob/master/src/Skeleton',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `Placeholder for filling up screen, usually for when some async operation is ongoing.`,
          ),

          importExample("import Skeleton from 'wix-style-react/Skeleton';"),

          divider(),

          title('Examples'),

          ...[
            { title: 'Sizes', source: examples.sizes },
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
