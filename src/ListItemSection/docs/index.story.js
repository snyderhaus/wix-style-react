import React from 'react';
import Star from 'wix-ui-icons-common/Star';
import Download from 'wix-ui-icons-common/Download';
import Hint from 'wix-ui-icons-common/Hint';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import ListItemSection from '..';
import Box from '../../Box';

const code = config =>
  baseCode({
    components: { ...allComponents, Star, Download, Hint },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: 'ListItemSection',

  component: ListItemSection,
  componentPath: '..',

  componentProps: {
    title: 'List item Section title',
    suffix: 'Suffix',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/ListItemSection/',

      component: (
        <Box
          width="500px"
          backgroundColor="#f0f4f7"
          padding="25px"
          border="1px solid #e5e5e5"
        >
          <ListItemSection title="List Item Section" suffix="Suffix" />
        </Box>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'ListItemSection is an internal component which is used to build dropdown or menu like components. Usually this item should not be used by consumers, though custom options builder is exposed for usage with DropdownBase.',
            }),
          ]),

          importExample(`
// Use directly
import ListItemSection, { ListItemSectionTypes } from 'wix-style-react/ListItemSection';
// Or use a builder
import { listItemSectionBuilder, ListItemSectionTypes } from 'wix-style-react/ListItemSection';
`),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Types',
              text:
                'Component divides lists by 4 types – adding title, subheader, divider or simnple whitespace.',
            }),

            code({
              source: `
                <Layout cols={1}>
                  <ListItemSection
                    title="Section title"
                  />
                  <ListItemSection
                    type="subheader"
                    title="Subheader title"
                  />
                   <ListItemSection
                    type="divider"
                  />
                  <ListItemSection
                    type="whitespace"
                  />
                </Layout>
              `,
              compact: true,
            }),
          ]),

          columns([
            description({
              title: 'Suffix',
              text: 'For actions title and subheader types support a suffix.',
            }),

            code({
              source: `
                <Layout cols={1}>
                  <ListItemSection
                    title="Title area"
                    suffix="Suffix Action"
                  />
                  <ListItemSection
                    type="subheader"
                    title="Title area"
                    suffix="Suffix Action"
                  />
                </Layout>
              `,
              compact: true,
            }),
          ]),

          columns([
            description({
              title: 'Text cropping',
              text:
                'By default component wraps the text. If needed it can be configured to show ellipsis and display full value on hover.',
            }),

            code({
              source: `
                <Layout cols={1}>
                  <Cell>
                    <ListItemSection
                      ellipsis
                      title="This is a very very very very long text that will be cropped by ellipsis at some point"
                      suffix="Nice long long long long long Suffix"
                    />
                  </Cell>
                  <Cell>
                    <ListItemSection
                      title="This is a very very very very long text that will *not* be cropped by ellipsis at some point"
                      suffix="Nice long long long long long Suffix"
                    />
                  </Cell>
                </Layout>
              `,
              compact: true,
            }),
          ]),

          columns([
            description({
              title: 'Advanced Example 1',
            }),

            code({
              source: `
                <Box height='230px'>
                  <DropdownLayout
                    visible
                    selectedId={2}
                    options={[
                      listItemSectionBuilder({
                        title: 'Most Popular',
                      }),
                      listItemSelectBuilder({
                        id: 0,
                        title: 'Wix Stores',
                      }),
                      listItemSelectBuilder({
                        id: 1,
                        title: 'Wix Bookings',
                      }),
                      listItemSelectBuilder({
                        id: 2,
                        title: 'Wix Blog',
                      }),
                       listItemSectionBuilder({
                        title: 'Other',
                      }),
                      listItemSelectBuilder({
                        title: 'Wix Events',
                      }),
                      listItemSelectBuilder({
                        id: 3,
                        title: 'Wix Forum',
                      }),
                      listItemSelectBuilder({
                        id: 4,
                        title: 'Wix Restaurants',
                      }),
                      listItemActionBuilder({
                        id: 5,
                        title: 'See All Results',
                      }),
                    ]}
                  />
                </Box>
              `,
              compact: true,
            }),
          ]),

          columns([
            description({
              title: 'Advanced Example 2',
            }),

            code({
              source: `
                <Box height='230px'>
                  <DropdownLayout
                    visible
                    selectedId={2}
                    options={[
                      listItemActionBuilder({
                        id: 0,
                        skin: 'dark',
                        size: 'small',
                        title: 'Edit',
                        prefixIcon: <Icons.EditSmall />,
                      }),
                      listItemActionBuilder({
                        id: 1,
                        skin: 'dark',
                        size: 'small',
                        title: 'Duplicate',
                        prefixIcon: <Icons.EditSmall />,
                      }),
                       listItemActionBuilder({
                        id: 3,
                        skin: 'dark',
                        size: 'small',
                        title: 'Move to',
                        prefixIcon: <Icons.MoveToSmall />,
                      }),
                      listItemSectionBuilder({
                        type: 'divider',
                      }),
                      listItemActionBuilder({
                        id: 4,
                        skin: 'dark',
                        size: 'small',
                        title: 'Archive',
                        prefixIcon: <Icons.ArchiveSmall />,
                      }),
                      listItemActionBuilder({
                        id: 4,
                        skin: 'destructive',
                        size: 'small',
                        title: 'Delete',
                        prefixIcon: <Icons.DeleteSmall />,
                      }),
                    ]}
                  />
                </Box>
              `,
              compact: true,
            }),
          ]),

          columns([
            description({
              title: 'Advanced Example 3',
            }),

            code({
              source: `
                <Box height='230px'>
                  <DropdownLayout
                    visible
                    selectedId={2}
                    options={[
                      listItemSectionBuilder({
                        title: 'Admins',
                        type: 'subheader',
                        suffix: 'Edit',
                      }),
                      listItemSelectBuilder({
                        id: 0,
                        title: 'John Wilson',
                      }),
                      listItemSelectBuilder({
                        id: 1,
                        title: 'Silvester Grant',
                      }),
                       listItemSectionBuilder({
                        title: 'Members',
                        type: 'subheader',
                        suffix: 'Edit',
                      }),
                      listItemSelectBuilder({
                        title: 'Jason Angel',
                      }),
                      listItemSelectBuilder({
                        id: 3,
                        title: 'Kalvin Mcleod',
                      }),
                      listItemSelectBuilder({
                        id: 4,
                        title: 'Ro Giberton',
                      }),
                    ]}
                  />
                </Box>
              `,
              compact: true,
            }),
          ]),
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
