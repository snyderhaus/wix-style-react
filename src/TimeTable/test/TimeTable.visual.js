import React from 'react';
import { storiesOf } from '@storybook/react';

import TimeTable from '../TimeTable';

const commonProps = {
  addItemButtonLabel: 'Add Task',
  columns: [
    {
      title: '1',
      subtitle: 'DAY',
      items: [{ content: 'Task 1' }],
      disabled: true,
    },
    {
      title: '2',
      subtitle: 'DAY',
      items: [
        {
          content: 'Task 2',
        },
        {
          content: 'Task 3',
          disabled: false,
        },
      ],
      disabled: true,
    },
    {
      title: '3',
      subtitle: 'DAY',
      items: [{ content: 'Task 4' }],
      disabled: true,
    },
    {
      title: '4',
      subtitle: 'DAY',
      items: [{ content: 'Task 5' }],
      active: true,
    },
    {
      title: '5',
      subtitle: 'DAY',
      items: [{ content: 'Task 6' }],
    },
    {
      title: '6',
      subtitle: 'DAY',
      items: [
        {
          content: 'Task 7',
          disabled: true,
          draggable: true,
        },
      ],
    },
    {
      title: '7',
      subtitle: 'DAY',
      items: [{ content: 'Task 8' }],
    },
  ],
};

const tests = [
  {
    it: 'basic',
  },
  {
    it: 'height = 150',
    props: {
      height: 150,
    },
  },
];

tests.forEach(({ it, props }) => {
  storiesOf('TimeTable', module).add(it, () => (
    <TimeTable {...commonProps} {...props} />
  ));
});
