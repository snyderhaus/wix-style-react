import React from 'react';
import TimeTable from '../..';

class TimeTableExample extends React.Component {
  state = {
    columns: [
      {
        title: '1',
        subtitle: 'DAY',
        items: [{ content: 'Item 1' }],
        disabled: true,
      },
      {
        title: '2',
        subtitle: 'DAY',
        items: [{ content: 'Item 2' }],
        active: true,
      },
      {
        title: '3',
        subtitle: 'DAY',
        items: [],
      },
      {
        title: '4',
        subtitle: 'DAY',
        items: [],
      },
      {
        title: '5',
        subtitle: 'DAY',
        items: [],
      },
      {
        title: '6',
        subtitle: 'DAY',
        items: [],
      },
      {
        title: '7',
        subtitle: 'DAY',
        items: [],
      },
    ],
  };

  handleOnChange = columns => {
    this.setState({ columns });
  };

  render() {
    return (
      <TimeTable
        columns={this.state.columns}
        onChange={this.handleOnChange}
        height="100%"
      />
    );
  }
}

export default TimeTableExample;
