/* eslint-disable */
class TogglablePopover extends React.Component {
  state = {
    shown: false,
  };

  render() {
    const { shown } = this.state;
    const { content, children } = this.props;
    return (
      <Popover
        animate
        flip
        showArrow
        appendTo="parent"
        placement="right"
        width={230}
        shown={shown}
        onClick={() => this.setState({ shown: !shown })}
        onClickOutside={() => this.setState({ shown: false })}
      >
        <Popover.Element>{children}</Popover.Element>
        <Popover.Content>
          <Box padding={2}>{content}</Box>
        </Popover.Content>
      </Popover>
    );
  }
};

class TimeTableExample extends React.Component {
  state = {
    columns: [
      {
        title: '1',
        subtitle: 'DAY',
        items: [],
      },
      {
        title: '2',
        subtitle: 'DAY',
        items: [
          {
            content: ({ Item, disabled, draggable }) => (
              <TogglablePopover content="Some content inside popover!">
                <Item disabled={disabled} draggable={draggable}>
                  Click on this item to show Popover!
                </Item>
              </TogglablePopover>
            ),
          },
        ],
      },
      {
        title: '3',
        subtitle: 'DAY',
        items: [],
      },
      {
        title: '4',
        subtitle: 'DAY',
        items: [
          {
            content: (
              <>
                <Badge skin="success" type="outlined" size="small" uppercase>Wow</Badge>
                <Box marginTop={1}>Custom node used as item content!</Box>
              </>
            )
          }
        ],
        active: true,
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
      />
    );
  }
};

render(<TimeTableExample />);
