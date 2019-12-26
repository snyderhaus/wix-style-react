import React from 'react';
import { string, number, func, oneOf, node, arrayOf } from 'prop-types';
import VerticalTabsItem from '../VerticalTabsItem';
import VerticalTabsContext from './VerticalTabsContext';

/** Vertical tabs navigation panel. */
const Footer = ({ children }) => (
  <VerticalTabsItem type="action">{children}</VerticalTabsItem>
);

const TabsGroup = ({ title, children }) => (
  <>
    <VerticalTabsItem type="title">{title}</VerticalTabsItem>
    {children}
  </>
);
TabsGroup.propTypes = {
  title: string,
};
TabsGroup.defaultProps = {
  title: '',
};

class VerticalTabs extends React.Component {
  render() {
    const { dataHook, children, size, activeTabId, onChange } = this.props;
    return (
      <VerticalTabsContext.Provider value={{ size, activeTabId, onChange }}>
        <div data-hook={dataHook}>{children}</div>
      </VerticalTabsContext.Provider>
    );
  }
}

VerticalTabs.propTypes = {
  /** Text Size (small, medium) */
  size: oneOf(['small', 'medium']),

  /** Current selected tab id */
  activeTabId: number,

  /** Callback function called on tab selection change with the following parameters<code>(id)</code> */
  onChange: func,

  /** Child nodes of this component must be of type <code><VerticalTabs.TabsGroup></code> or <code><VerticalTabs.Footer></code>*/
  children: arrayOf(node),

  /** Data attribute for testing purposes */
  dataHook: string,
};
VerticalTabs.defaultProps = {
  size: 'medium',
  onChange: () => {},
};

VerticalTabs.TabsGroup = TabsGroup;
VerticalTabs.TabItem = VerticalTabsItem;
VerticalTabs.Footer = Footer;

export default VerticalTabs;
