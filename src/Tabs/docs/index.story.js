import React from 'react';

import { createAutoExampleWrapper } from '../../../stories/utils/AutoExampleWrapper';
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
import TabsHeaderExample from './TabsHeaderExample';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

import { storySettings } from './storySettings';
import Tabs from '../Tabs';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: createAutoExampleWrapper(Tabs),
  componentPath: '..',
  componentProps: setProps => ({
    onClick: value => setProps({ activeId: value.id }),
    activeId: '1',
    hasDivider: true,
    items: [1, 2, 3].map(index => ({
      id: String(index),
      title: `item ${index}`,
    })),
  }),
  sections: [
    header({
      component: <TabsHeaderExample />,

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl: 'https://github.com/wix/wix-style-react/blob/master/src/Tabs',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `Tabs component enables navigation between content at the same page.`,
          ),

          importExample("import Tabs from 'wix-style-react/Tabs';"),

          divider(),

          title('Examples'),

          ...[
            { title: 'Basic use', source: examples.base },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),
          ...[
            { title: 'Without bottom divider', source: examples.hasDivider },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),
          code({ title: 'Tabs types', source: examples.types }),
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
