/* eslint-disable */
class TimeTableExample extends React.Component {
  state = {
    columns: [
      {
        title: '1',
        subtitle: 'Group',
        items: [
          { content: 'Item 1' },
        ],
      },
      {
        title: '2',
        subtitle: 'Group',
        items: [
          { content: 'Item 2' },
          { content: 'Item 3' },
        ],
        active: true,
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
