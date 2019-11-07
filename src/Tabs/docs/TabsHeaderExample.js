import React from 'react';
import Tabs from '../Tabs';

export default class TabsExample extends React.Component {
  constructor() {
    super();
    this.state = {
      activeId: '1',
    };
    this.change = this.change.bind(this);
  }

  change(value) {
    this.setState({ activeId: value.id });
  }

  render() {
    const { activeId } = this.state;
    return (
      <Tabs
        activeId={activeId}
        onClick={this.change}
        items={TabsExample.items}
      />
    );
  }

  static get items() {
    return [1, 2, 3, 4, 5].map(index => ({
      id: String(index),
      title: `item ${index}`,
    }));
  }
  static get items() {
    return [1, 2, 3, 4, 5].map(index => ({
      id: String(index),
      title: `item ${index}`,
    }));
  }
}
