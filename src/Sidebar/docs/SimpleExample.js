/* eslint-disable */
class SimpleSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {isHidden: false};
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <div style={{ overflow: 'hidden', height: '500px', color: 'white' }}>
        <Sidebar selectedKey={'item1'} isHidden={this.state.isHidden}>
          <Sidebar.PersistentHeader>
            <div
              style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
            >
              Simple Sidebar
            </div>
          </Sidebar.PersistentHeader>

          <Sidebar.Item itemKey={'item1'} disable="true">
            This is just a long text without any margins or padding that will break into several lines
          </Sidebar.Item>

          <Sidebar.Item itemKey={'item2'} disable="true">
            <Box margin={1} backgroundColor={"#eee"} padding={1}>
              <Checkbox disabled>
                Disabled
              </Checkbox>
            </Box>
          </Sidebar.Item>
          <Sidebar.Item itemKey={'item3'}>
            <Box margin={3}>
              <Button size="small" skin="premium">
                A button
              </Button>
            </Box>
          </Sidebar.Item>

          <Sidebar.PersistentFooter>
            <div
              style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
            >
              Sidebar Footer
            </div>
          </Sidebar.PersistentFooter>
        </Sidebar>

        <button style={{position: 'absolute', left: '300px', top: '50%'}}
                onClick={this.onClick}>Toggle</button>
      </div>
    );
  }

  onClick() {
    this.setState({isHidden: !this.state.isHidden});
  }
}
