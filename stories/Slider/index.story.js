import React from 'react';
import {
  description,
  table,
  header,
  columns,
  title,
  divider,
  code as baseLiveCode,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import { baseScope } from '../utils/LiveCodeExample';
import * as examples from './examples';

import Slider from 'wix-style-react/Slider';

import { storySettings } from './storySettings';
import { Category } from '../storiesHierarchy';

const liveCode = config =>
  baseLiveCode({
    compact: true,
    components: baseScope,
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

class SlideWithState extends React.Component {
  state = {
    value: 4,
  };

  change = value => this.setState({ value });

  render() {
    return (
      <div style={{ width: '50%', padding: '10px' }}>
        <Slider
          onChange={this.change}
          value={this.state.value}
          displayMarks={false}
          displayTooltip={false}
        />
      </div>
    );
  }
}
export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: <SlideWithState />,
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Slider/Slider.js',
    }),

    description(
      `Sliders allow users to make selections from a range of values.`,
    ),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
            'Layout component for form elements',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Slider"
            >{`<Slider/>`}</LinkTo>,
            'Selection component',
          ],
        ],
      }),
    ]),

    divider(),

    title('Examples'),

    ...[
      {
        title: 'Single Value',
        text: 'Single value slider is a default setup.',
        source: examples.plainExample,
      },
      {
        title: 'Range Value',
        text: 'Slider supports selection of 2 or more values as well.',
        source: examples.rangeSlider,
      },
      {
        title: 'Scale Marks',
        text:
          'It is supported to display marks under the slider to indicate the available of values.',
        source: examples.plainSliderMarks,
      },
      {
        title: 'Label Position',
        text:
          'Slider’s label can be positioned on top, left or can be hidden. Additional properties behave accordingly.',
        source: examples.label,
      },
    ].map(example),
  ],
};
