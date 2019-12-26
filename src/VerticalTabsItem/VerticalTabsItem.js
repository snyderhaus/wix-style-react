import React from 'react';
import { string, oneOf, node, bool, func, number } from 'prop-types';
import Text from '../Text';
import TextButton from '../TextButton';
import styles from './VerticalTabsItem.st.css';
import VerticalTabsContext from '../VerticalTabs/VerticalTabsContext';

/** Internal Component to be used by VerticalTabs */
class VerticalTabsItem extends React.PureComponent {
  static displayName = 'VerticalTabsItem';

  static propTypes = {
    /** type of vertical tab item. can be of the following: 'tab' (default), 'action', 'title' */
    type: oneOf(['tab', 'action', 'title']),

    /** Data attribute for testing purposes */
    dataHook: string,

    /** Prefix Icon - should be <code>Icon</code>*/
    prefixIcon: node,

    /** Suffix Icon - should be <code>Icon</code> or <code>IconButton</code> with the <code>size="tiny"</code> prop*/
    suffixIcon: node,

    /** Children - only single child is allowed here */
    children: node,

    /** Disabled */
    disabled: bool,

    /** identifier to help identify the current selected tab */
    id: number,
  };

  static defaultProps = {
    type: 'tab',
  };

  _renderText() {
    const { children, type, disabled } = this.props;
    const { size } = this.context;
    const isTitle = type === 'title';
    const commonProps = {
      weight: 'normal',
      size: isTitle ? 'small' : size,
      dataHook: 'vertical-tabs-item-text',
    };
    return type === 'action' ? (
      <TextButton {...commonProps} disabled={disabled}>
        {children}
      </TextButton>
    ) : (
      <Text
        light={isTitle}
        secondary={isTitle}
        skin={disabled ? 'disabled' : 'standard'}
        {...commonProps}
      >
        {children}
      </Text>
    );
  }

  _renderPrefix() {
    const { prefixIcon, type } = this.props;
    const { size } = this.context;
    return React.cloneElement(prefixIcon, {
      size: size === 'medium' ? 24 : 18,
      'data-hook': 'vertical-tabs-item-prefix-icon',
      ...styles('prefixIcon', { action: type === 'action' }, this.props),
    });
  }

  _renderSuffix() {
    const { suffixIcon } = this.props;
    const { size } = this.context;
    return React.cloneElement(suffixIcon, {
      size: size === 'medium' ? 24 : 18,
      className: styles.suffixIcon,
      'data-hook': 'vertical-tabs-item-suffix-icon',
    });
  }

  render() {
    const {
      id,
      dataHook,
      disabled,
      prefixIcon,
      suffixIcon,
      tabIndex,
      type,
    } = this.props;
    const selected =
      !!id && !!this.context.activeTabId && id === this.context.activeTabId;
    return (
      <div
        {...styles(
          'root',
          {
            disabled,
            action: type === 'action',
            title: type === 'title',
            suffixIcon: !!suffixIcon,
            prefixIcon: !!prefixIcon,
            selected,
          },
          this.props,
        )}
        id={id}
        tabIndex={tabIndex}
        ref={ref => (this.innerComponentRef = ref)}
        data-hook={dataHook}
        onClick={!disabled ? () => this.context.onChange(id) : undefined}
      >
        {prefixIcon && this._renderPrefix()}
        {this._renderText()}
        {suffixIcon && this._renderSuffix()}
      </div>
    );
  }
}

VerticalTabsItem.contextType = VerticalTabsContext;
export default VerticalTabsItem;
