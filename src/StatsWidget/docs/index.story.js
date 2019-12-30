import React from 'react';

import {
  tab,
  tabs,
  description,
  api,
  testkit,
  header,
} from 'wix-storybook-utils/Sections';
import SectionHelper from 'wix-style-react/SectionHelper';
import CodeExample from 'wix-storybook-utils/CodeExample';

import StatsWidget from '..';

import ExampleStatsWidgetStandard from './ExampleStatsWidgetStandard';
import ExampleStatsWidgetStandardRaw from '!raw-loader!./ExampleStatsWidgetStandard';

import ExampleStatsWidgetWithSuffix from './ExampleStatsWidgetWithSuffix';
import ExampleStatsWidgetWithSuffixRaw from '!raw-loader!./ExampleStatsWidgetWithSuffix';

import ExampleStatsWidgetWithPercents from './ExampleStatsWidgetWithPercents';
import ExampleStatsWidgetWithPercentsRaw from '!raw-loader!./ExampleStatsWidgetWithPercents';

import ExampleStatsWidgetWithInvertPercentColor from './ExampleStatsWidgetWithInvertPercentColor';
import ExampleStatsWidgetWithInvertPercentColorRaw from '!raw-loader!./ExampleStatsWidgetWithInvertPercentColor';

import ExampleStatsWidgetWithFilters from './ExampleStatsWidgetWithFilters';
import ExampleStatsWidgetWithFiltersRaw from '!raw-loader!./ExampleStatsWidgetWithFilters';

import ExampleStatsWidgetEmptyState from './ExampleStatsWidgetEmptyState';
import ExampleStatsWidgetEmptyStateRaw from '!raw-loader!./ExampleStatsWidgetEmptyState';

import ExampleStatsWidgetWithFilterWithNoBorder from './ExampleStatsWidgetWithFilterWithNoBorder';
import ExampleStatsWidgetWithFilterWithNoBorderRaw from '!raw-loader!./ExampleStatsWidgetWithFilterWithNoBorder';

import { storySettings } from './storySettings';
import LinkTo from '@storybook/addon-links/react';
import { Category } from '../../../stories/storiesHierarchy';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: StatsWidget,
  componentPath: '..',

  sections: [
    header({
      component: (
        <SectionHelper title="Deprecated">
          This component is deprecated.
          <br />
          Instead, we advise you to use the newer{' '}
          <LinkTo
            kind={Category.COMPONENTS}
            story="StatisticsWidget"
          >{`<StatisticsWidget/>`}</LinkTo>{' '}
          component.
          <br />
          See the
          <a href="https://github.com/wix/wix-style-react/blob/master/docs/migration/StatsWidget.md">
            {' '}
            migration guide
          </a>{' '}
          for more information
        </SectionHelper>
      ),
    }),
    tabs([
      tab({}),
      tab({
        title: 'Examples',
        sections: [
          description({
            text: (
              <div>
                <CodeExample
                  title="Stats widget"
                  code={ExampleStatsWidgetStandardRaw}
                >
                  <ExampleStatsWidgetStandard />
                </CodeExample>
                <CodeExample
                  title="Stats widget with TextButton suffix"
                  code={ExampleStatsWidgetWithSuffixRaw}
                >
                  <ExampleStatsWidgetWithSuffix />
                </CodeExample>
                <CodeExample
                  title="Stats widget example with percents"
                  code={ExampleStatsWidgetWithPercentsRaw}
                >
                  <ExampleStatsWidgetWithPercents />
                </CodeExample>
                <CodeExample
                  title="Stats widget example with invert percent color"
                  code={ExampleStatsWidgetWithInvertPercentColorRaw}
                >
                  <ExampleStatsWidgetWithInvertPercentColor />
                </CodeExample>
                <CodeExample
                  title="Stats widget example with filter"
                  code={ExampleStatsWidgetWithFilterWithNoBorderRaw}
                >
                  <ExampleStatsWidgetWithFilterWithNoBorder />
                </CodeExample>
                <CodeExample
                  title="Stats widget example with multiple filters"
                  code={ExampleStatsWidgetWithFiltersRaw}
                >
                  <ExampleStatsWidgetWithFilters />
                </CodeExample>
                <CodeExample
                  title="Stats widget example with empty state"
                  code={ExampleStatsWidgetEmptyStateRaw}
                >
                  <ExampleStatsWidgetEmptyState />
                </CodeExample>
              </div>
            ),
          }),
        ],
      }),

      tab({
        title: 'API',
        sections: [api()],
      }),

      tab({
        title: 'Testkit',
        sections: [testkit()],
      }),
    ]),
  ],
};
