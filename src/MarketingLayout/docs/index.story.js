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
import MarketingLayout from '..';
import {
  sizeSmall,
  sizeMedium,
  sizeLarge,
  inverted,
  advanced,
  description as descriptionText,
  actions,
  images,
} from './examples';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'MarketingLayout',

  component: MarketingLayout,
  componentPath: '..',

  componentProps: {
    title: 'Marketing Card Title',
    description:
      'Connect to Google and get indexed in seconds so people can easily find your site.',
    actions: actions[0].value,
    image: images[0].value,
    size: 'small',
    inverted: false,
  },

  exampleProps: {
    image: images,
    actions,
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/MarketingLayout/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([description(descriptionText)]),

          columns([
            importExample(
              "import MarketingLayout from 'wix-style-react/MarketingLayout';",
            ),
          ]),

          divider(),

          title('Examples'),

          description({
            title: 'Size',
            text:
              'Component supports three sizes small, medium, large. For each size are dedicated illustration sizes. Please note, action sizes must be adjusted too.',
          }),
          code({
            compact: true,
            source: sizeSmall,
          }),
          code({
            compact: true,
            source: sizeMedium,
          }),
          code({
            compact: true,
            source: sizeLarge,
          }),

          description({
            title: 'Invert Image',
            text: `Card's image can be positioned on the right and the left. To change it's position use 'inverted' prop.`,
          }),
          code({
            compact: true,
            source: inverted,
          }),

          description({
            title: 'Advanced Example',
            text:
              'Marketing card can be customized to support complex layouts.',
          }),
          code({
            compact: true,
            source: advanced,
          }),
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
