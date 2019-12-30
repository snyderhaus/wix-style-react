import { Category } from '../../../stories/storiesHierarchy';

import Loader from '..';
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
import React from 'react';
import * as examples from './examples';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

export default {
  category: Category.COMPONENTS,
  storyName: 'Loader',

  component: Loader,
  componentPath: '..',

  componentProps: {
    dataHook: 'storybook-loader',
    status: 'loading',
    statusMessage: 'some message here',
    text: '',
  },

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <Loader />
        </div>
      ),

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/blob/master/src/Loader',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(`Provides a spinner to be used for async operations.`),

          importExample("import Loader from 'wix-style-react/Loader';"),

          divider(),

          title('Examples'),

          ...[
            { title: 'Size', source: examples.sizes },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),
          ...[
            { title: 'Status', source: examples.status },
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
