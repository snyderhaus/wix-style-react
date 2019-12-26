/* eslint-disable */
class InnerMenuExample extends React.Component {
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
              Inner Menu Sidebar
            </div>
          </Sidebar.PersistentHeader>

          <SidebarSectionItem>
            Item 1
          </SidebarSectionItem>
          <SidebarSectionItem>
            Item 2
          </SidebarSectionItem>

          <Sidebar.Item
            itemKey={'apps'}
            innerMenu={[
              <Sidebar.BackButton>
                <SidebarBackButton>
                  Main Menu
                </SidebarBackButton>
              </Sidebar.BackButton>,
              <SidebarSectionItem>
                Inner item 1
              </SidebarSectionItem>,
              <SidebarSectionItem>
                Inner item 2
              </SidebarSectionItem>,
            ]}
          >
            <SidebarSectionItem drillable>
              Inner Menu
            </SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.PersistentFooter>
            <div
              style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
            >
              Inner Menu Footer
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
