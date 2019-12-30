import React from 'react';
import LinkTo from '@storybook/addon-links/react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import { description } from 'wix-storybook-utils/Sections';

import { Category } from '../../../stories/storiesHierarchy';

import styles from './styles.scss';

import BasicClassesExample from './BasicClassesExample';
import BasicClassesExampleRaw from '!raw-loader!./BasicClassesExample';

import BasicClassesSassExampleJs from './BasicClassesSassExample.js';
import BasicClassesSassExampleJsRaw from '!raw-loader!./BasicClassesSassExample.js';
import BasicClassesSassExampleSassRaw from '!raw-loader!./BasicClassesSassExample.scss';

import TypographyClassesTable from './TypographyClassesTable.md';
import TypographyClassesMigration from './TypographyClassesMigration.md';

export default {
  category: Category.STYLING,
  storyName: '1.2 Typography Classes',
  sections: [
    description({
      title: 'Typography Components',
      text: `The recommended way to use \`wix-style-react\` typography is with \`<Text/>\` and \`<Heading/>\` components. Not only they provide correct styling but also feature ellipsis and tooltip, when necessary.`,
    }),

    description({
      text: (
        <div>
          See
          <LinkTo
            kind={Category.FOUNDATION}
            story="1.2 Typography"
          >{`1. Foundation > 1.2 Typography`}</LinkTo>
        </div>
      ),
    }),

    description({
      title: 'Typography Classes',
      text: `In case the \`<Text/>\` and \`<Heading/>\` components do not suit your need, you can use the Typography classes directly.
> Note: some styles are available only by using typography CSS classes (like link and disabled text colors)`,
    }),

    description({
      text: (
        <div>
          <CodeExample
            title="Basic Example (JS)"
            code={BasicClassesExampleRaw}
            autoExpand
          >
            <div className={styles.codeExample}>
              <BasicClassesExample />
            </div>
          </CodeExample>

          <CodeExample
            title="Basic Example (Sass)"
            code={BasicClassesSassExampleJsRaw + BasicClassesSassExampleSassRaw}
            autoExpand
          >
            <div className={styles.codeExample}>
              <BasicClassesSassExampleJs />
            </div>
          </CodeExample>
        </div>
      ),
    }),

    description(TypographyClassesTable),
    description({
      title: 'Typography Classes Migration (from previous to WSR 5.6.x)',
      text: TypographyClassesMigration,
    }),
  ],
};
