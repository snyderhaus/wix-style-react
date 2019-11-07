import React from 'react';
import PropTypes from 'prop-types';

import SideContent from './core/SideContent';
import TabItems from './core/TabItems';
import classNames from 'classnames';
import styles from './Tabs.scss';

class Tabs extends React.Component {
  static displayName = 'Tabs';

  static defaultProps = {
    hasDivider: true,
  };

  getTabItemsProps = () => {
    /* eslint-disable no-unused-vars */
    const { sideContent, ...tabItemsProps } = this.props;
    return tabItemsProps;
  };

  render() {
    const { sideContent, hasDivider } = this.props;
    const tabItemsProps = this.getTabItemsProps();
    const className = classNames(styles.container, {
      [styles.hasDivider]: hasDivider,
    });

    return (
      <div className={className}>
        <TabItems {...tabItemsProps} />
        <SideContent content={sideContent} />
      </div>
    );
  }
}

Tabs.propTypes = {
  /** A selected tab id */
  activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** Places a divider on bottom */
  hasDivider: PropTypes.bool,
  /** An array of tabs
   | propName | propType | isRequired | description |
   |----------|----------|------------|-------------|
   | id | string or number| + | Item id |
   | title | node | + | Tab title |
   | dataHook | string | - | Datahook |
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.node,
      dataHook: PropTypes.string,
    }),
  ).isRequired,
  /** A minimum width of the container */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** One of: '', compact, compactSide, uniformSide, uniformFull */
  type: PropTypes.oneOf([
    '',
    'compact',
    'compactSide',
    'uniformSide',
    'uniformFull',
  ]),
  /** Can be either string or renderable node */
  sideContent: PropTypes.node,
  /** A specific width of a tab (only for uniformSide type) */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Click event handler  */
  onClick: PropTypes.func,
};

export default Tabs;
