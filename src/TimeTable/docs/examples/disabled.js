/* eslint-disable */
class TimeTableExample extends React.Component {
  state = {
    columns: [
      {
        title: '1',
        subtitle: 'Group',
        items: [
          { content: 'Disabled 2' },
          { content: 'Draggable 1', disabled: false },
          { content: 'Disabled 3' },
        ],
        disabled: true,
      },
      {
        title: '2',
        subtitle: 'Group',
        items: [
          { content: 'Draggable 2', disabled: false },
        ],
      },
      {
        title: '3',
        subtitle: 'Group',
        items: [
          {
            content: 'Draggable Disabled 1',
            disabled: true,
            draggable: true,
          },
          { content: 'Draggable 3' },
        ],
      },
    ],
  };

  handleOnAdd = columnIndex => {
    const columns = this.state.columns.map((column, index) => ({
      ...column,
      items: columnIndex === index
        ? column.items.concat({ content: 'New Item' })
        : column.items
    }));

    this.setState({ columns });
  };

  handleOnChange = (
    columns,
    { addedToColumnIndex, removedFromColumnIndex, addedItemIndex, removedItemIndex },
  ) => {
    this.setState({ columns });
  };

  render() {
    return (
      <TimeTable
        addItemButtonLabel="Add Item"
        columns={this.state.columns}
        onAdd={this.handleOnAdd}
        onChange={this.handleOnChange}
      />
    );
  }
}
