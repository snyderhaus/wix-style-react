import React from 'react';
import { storySettings } from './storySettings';
import { baseScope } from '../utils/LiveCodeExample';
import {
  header,
  title,
  description,
  divider,
  table,
  importExample,
  columns,
  code as baseCode,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';
import ExampleTagInputSelectionRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleTagInputSelection';
import ExampleReorderableRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleReorderable';

import { Container, Row, Col } from 'wix-style-react/Grid';
import FormField from 'wix-style-react/FormField';
import MultiSelect from 'wix-style-react/MultiSelect';

const code = config =>
  baseCode({
    components: baseScope,
    compact: true,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <Container>
          <Row>
            <Col span={6}>
              <FormField label="Tag Input">
                <MultiSelect
                  tags={[
                    { id: '1', label: 'tag 1' },
                    { id: '2', label: 'tag 2' },
                  ]}
                />
              </FormField>
            </Col>
          </Row>
        </Container>
      ),
    }),
    columns([
      description({
        title: 'Description',
        text:
          'Tag Input is a composition of 2 individual components – `<FormField/>` and `<MultiSelect/>`. Use it when site owner needs to enter multiple keywords.A component for selecting/creating multiple values, and displaying them as tags.',
      }),
    ]),
    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind="Components"
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
          ],
          [
            <LinkTo
              kind="Components"
              story="Multiselect"
            >{`<MultiSelect/>`}</LinkTo>,
          ],
          [<LinkTo kind="Components" story="Tag">{`<Tag/>`}</LinkTo>],
          [
            <LinkTo
              kind="Components"
              story="TextButton"
            >{`<TextButton/>`}</LinkTo>,
          ],
          [<LinkTo kind="Components" story="Avatar">{`<Avatar/>`}</LinkTo>],
        ],
      }),
    ]),

    importExample(examples.importExample),

    divider(),

    title('Examples'),

    columns([
      description({
        title: 'Size',
        text: 'Tag input can appear in 3 sizes – `small`, `medium`, `large`',
      }),
      code({ source: examples.size }),
    ]),
    columns([
      description({
        title: 'Select Mode',
        text:
          'Tag Input has two select modes – select and type with a keyboard',
      }),
      code({ source: examples.mode }),
    ]),
    columns([
      description({
        title: 'Custom Values',
        text:
          'Tag Input can be set to allow only predefined values, custom values or both.',
      }),
      code({ source: examples.customValues }), // Needs a working example, I don't know how to properly import it
    ]),
    columns([
      description({
        title: 'Action',
        text: 'Encourage user intercation by displaying the call to action',
      }),
      code({ source: examples.action }),
    ]),
    columns([
      description({
        title: 'Required',
        text: 'You can add an asterisk if the field is required.',
      }),
      code({ source: examples.required }),
    ]),
    columns([
      description({
        title: 'Label Position',
        text:
          'Tag Input’s label can be position on top, left or can be hidden. Additional properties behave accordingly.',
      }),
      code({ source: examples.labelPosition }),
    ]),

    divider(),

    title('Advanced Examples'),

    columns([
      description({
        title: 'Reordering Tags',
        text: 'You can allow reodering tags using drag and drop functionality.',
        source: ExampleReorderableRaw, // Needs a working example, I don't know how to properly import it
      }),
      description({
        title: 'Styling Options',
        text:
          'To provide more information about availale options a list of items can be styled.',
        source: ExampleTagInputSelectionRaw, // Needs a working example, I don't know how to properly import it
      }),
    ]),
  ],
};
