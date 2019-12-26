export const verticalTabsExample = `
      <div style={{ width: 260 }}>
        <VerticalTabs activeTabId={2} onChange={(/*id*/) => {}}>
          <VerticalTabs.TabsGroup title="Current Benefits">
            <VerticalTabs.TabItem id={0} prefixIcon={<Icons.Check />}>
              Experts Dashboard
            </VerticalTabs.TabItem>
            <VerticalTabs.TabItem id={1} prefixIcon={<Icons.Check />}>Product Betas</VerticalTabs.TabItem>
            <VerticalTabs.TabItem id={2} prefixIcon={<Icons.Check />}>
              Wix Arena Exposure
            </VerticalTabs.TabItem>
          </VerticalTabs.TabsGroup>
          <VerticalTabs.TabsGroup title="Next Level Benefits">
            <VerticalTabs.TabItem id={3} prefixIcon={<Icons.CircleSmallFilled />}>Loyalty Program</VerticalTabs.TabItem>
            <VerticalTabs.TabItem id={4} prefixIcon={<Icons.CircleSmallFilled />}>
              20% Revenue Share
            </VerticalTabs.TabItem>
            <VerticalTabs.TabItem id={5} prefixIcon={<Icons.CircleSmallFilled />}>
              Dedicated Account Manager
            </VerticalTabs.TabItem>
          </VerticalTabs.TabsGroup>
        </VerticalTabs>
      </div>`;

export const verticalTabsSuffixExample = `
      <div style={{ width: 200 }}>
        <VerticalTabs onChange={(/*id*/) => {}}>
          <VerticalTabs.TabsGroup title="Settings">
            <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight />}>
              Profile
            </VerticalTabs.TabItem>
            <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight />} disabled>
              Account
            </VerticalTabs.TabItem>
            <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight />}>
              Support
            </VerticalTabs.TabItem>
          </VerticalTabs.TabsGroup>
        </VerticalTabs>
      </div>`;

export const verticalTabsSmallExample = `<div style={{ width: 200 }}>
      <VerticalTabs size="small" onChange={(/*id*/) => {}}>
        <VerticalTabs.TabsGroup title="Settings">
          <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight />}>
            Profile
          </VerticalTabs.TabItem>
          <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight />}>
            Account
          </VerticalTabs.TabItem>
          <VerticalTabs.TabItem suffixIcon={<Icons.ChevronRight />}>
            Support
          </VerticalTabs.TabItem>
        </VerticalTabs.TabsGroup>
      </VerticalTabs>
    </div>`;

export const verticalTabsFooterExample = `
      <div style={{ width: 200 }}>
        <VerticalTabs onChange={(/*id*/) => {}}>
          <VerticalTabs.TabsGroup title="Group Title">
            <VerticalTabs.TabItem>
              Tab 1
            </VerticalTabs.TabItem>
            <VerticalTabs.TabItem>
              Tab 2
            </VerticalTabs.TabItem>
            <VerticalTabs.TabItem>
              Tab 3
            </VerticalTabs.TabItem>
          </VerticalTabs.TabsGroup>
          <VerticalTabs.Footer>Footer</VerticalTabs.Footer>
        </VerticalTabs>
      </div>`;

export const verticalTabsSelectedExample = `
class Example extends React.Component {
  state = {
    selected: 1
  }
  render() {
      return (
        <div style={{ width: 200 }}>
          <VerticalTabs activeTabId={this.state.selected} onChange={id => this.setState({ selected: id })}>
            <VerticalTabs.TabsGroup title="Group Title">
              <VerticalTabs.TabItem id={1}>
                Tab 1
              </VerticalTabs.TabItem>
              <VerticalTabs.TabItem id={2}>
                Tab 2
              </VerticalTabs.TabItem>
              <VerticalTabs.TabItem id={3}>
                Tab 3
              </VerticalTabs.TabItem>
            </VerticalTabs.TabsGroup>
            <VerticalTabs.Footer>Footer</VerticalTabs.Footer>
          </VerticalTabs>
      </div>
    )
  }
}`;
