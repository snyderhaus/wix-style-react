const items = [1, 2, 3, 4, 5].map(index => ({
  id: index,
  title: `item ${index}`,
}));

const sideContent = `
<div>
  <div>This is a</div>
  <div>side content</div>
</div>
`;

export const base = `
class TabsExample extends React.Component {
  constructor() {
    super();
    this.state = {
      activeId: 1,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ activeId: value.id }) }

  render() {
    const { activeId } = this.state;
    return (
      <Tabs
        activeId={activeId}
        onClick={this.change}
        items={${JSON.stringify(items)}}
      />
    );
  }
}
`;

export const hasDivider = `
  <Tabs
    items={${JSON.stringify(items)}}
    activeId={2}
    hasDivider={false}
  />
`;

export const types = `
  <div>
    <Heading appearance="H3">Default</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
    />
    <Heading appearance="H3" style={{marginTop: '15px'}}>Compact</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
      type="compact"
    />
    <Heading appearance="H3" style={{marginTop: '15px'}}>compactSide</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
      type="compactSide"
    />
    <Heading appearance="H3" style={{marginTop: '15px'}}>uniformSide</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
      type="uniformSide"
    />
    <Heading appearance="H3" style={{marginTop: '15px'}}>uniformFull</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
      type="uniformFull"
    />
  </div>
`;
