import React from 'react';
import { storiesOf } from '@storybook/react';

import Accordion from 'wix-style-react/Accordion';
import Text from 'wix-style-react/Text';
import Card from 'wix-style-react/Card';
import InfoCircle from 'wix-ui-icons-common/InfoCircle';

export const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

storiesOf('Accordion', module).add('simple', () => (
  <Accordion
    items={[
      { title: 'First Row', children: <Text>${text}</Text> },
      { title: 'Second Row', children: <Text>${text}</Text> },
    ]}
  />
));

storiesOf('Accordion', module).add('withButton', () => (
  <Accordion
    items={[
      {
        title: 'First Row With Button',
        children: <Text>${text}</Text>,
        buttonType: 'button',
        expandLabel: 'Show More',
        collapseLabel: 'Less',
      },
      {
        title: 'Second Row With Icon',
        children: <Text>${text}</Text>,
        icon: <InfoCircle />,
        expandLabel: 'Show More',
        collapseLabel: 'Less',
      },
    ]}
  />
));

storiesOf('Accordion', module).add('multiple', () => (
  <Accordion
    multiple
    items={[
      {
        title: 'First Initially Open Row',
        children: <Text>${text}</Text>,
        open: true,
        collapseLabel: 'Less',
      },
      {
        title: 'Second Row',
        children: <Text>${text}</Text>,
        open: true,
        collapseLabel: 'Less',
      },
      {
        title: 'Third Row',
        children: <Text>${text}</Text>,
        collapseLabel: 'Less',
      },
      {
        title: 'Disable Row',
        children: <Text>${text}</Text>,
        collapseLabel: 'Less',
        disabled: true,
      },
    ]}
  />
));

storiesOf('Accordion', module).add('inCard', () => (
  <Card>
    <Card.Header title="Card with Accordion" />
    <Accordion
      items={[
        {
          title: 'First Item',
          icon: <InfoCircle />,
          expandLabel: 'More',
          collapseLabel: 'Less',
          buttonType: 'button',
          children: <Text>${text}</Text>,
        },
      ]}
    />
  </Card>
));
