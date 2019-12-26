import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './ListItemSelect.st.css';

import Checkbox from '../Checkbox';
import Box from '../Box';

export const SIZES = {
  small: 'small',
  medium: 'medium',
};

export const DATAHOOKS = {
  CHECKBOX: 'list-item-select-checkbox',
  PREFIX: 'list-item-select-prefix',
  SUFFIX: 'list-item-select-suffix',
  TITLE: 'list-item-select-title',
  SUBTITLE: 'list-item-select-subtitle',
};

/** ListItemSelect description */
class ListItemSelect extends React.PureComponent {
  static displayName = 'ListItemSelect';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** If true, a checkbox will be shown */
    checkbox: PropTypes.bool,

    /** Any prefix */
    prefix: PropTypes.node,

    /** Title of the list item */
    title: PropTypes.string,

    /** Text of the list item subtitle */
    subtitle: PropTypes.string,

    /** Any suffix */
    suffix: PropTypes.node,

    /** If true, the item is selected */
    selected: PropTypes.bool,

    /** If true, the item is disabled */
    disabled: PropTypes.bool,

    /** Callback function triggered when list item is clicked */
    onClick: PropTypes.func,

    /** Changing text size */
    size: PropTypes.oneOf(Object.keys(SIZES)),

    /** If true, long text won't break into more than one line and will be terminated with an ellipsis */
    ellipsis: PropTypes.bool,
  };

  static defaultProps = {
    checkbox: false,
    selected: false,
    ellipsis: false,
    size: SIZES.medium,
    dataHook: 'list-item-select',
  };

  state = {};

  render() {
    const {
      dataHook,
      className,
      checkbox,
      selected,
      disabled,
      onClick,
      size,
    } = this.props;

    return (
      <div
        {...styles(styles.root, { checkbox, selected, disabled }, className)}
        data-hook={dataHook}
        data-selected={selected}
        onClick={disabled ? undefined : onClick}
      >
        {/* Checkbox */}
        {checkbox ? (
          <Checkbox
            dataHook={DATAHOOKS.CHECKBOX}
            className={styles.fullWidthContent}
            size={size}
            checked={selected}
            disabled={disabled}
          >
            {this._renderContent()}
          </Checkbox>
        ) : (
          this._renderContent()
        )}
      </div>
    );
  }

  _renderContent() {
    const {
      checkbox,
      prefix,
      title,
      subtitle,
      suffix,
      selected,
      disabled,
      size,
      ellipsis,
    } = this.props;

    const textProps = {
      tagName: 'div',
      size,
      ellipsis,
      skin: disabled ? 'disabled' : 'standard',
      weight: checkbox ? 'thin' : 'normal',
      light: selected && !checkbox,
    };

    const secondaryTextProps = {
      ...textProps,
      light: !disabled,
      secondary: !selected || checkbox,
    };

    return (
      <Box width="100%" className={styles.textsWrapper}>
        {/* Prefix */}
        {prefix && (
          <Text
            {...styles(styles.prefix, { subtitle })}
            dataHook={DATAHOOKS.PREFIX}
            {...textProps}
            ellipsis={false}
          >
            {prefix}
          </Text>
        )}

        <Box
          display="grid"
          margin={1}
          direction={'vertical'}
          className={styles.title}
          lineHeight="initial"
          fontSize="initial"
        >
          {/* Title */}
          <Text dataHook={DATAHOOKS.TITLE} {...textProps}>
            {title}
          </Text>

          {/* Subtitle */}
          {subtitle && (
            <Text
              dataHook={DATAHOOKS.SUBTITLE}
              secondary
              {...secondaryTextProps}
              size={SIZES.small}
            >
              {subtitle}
            </Text>
          )}
        </Box>

        {/* Suffix */}
        {suffix && (
          <Text
            dataHook={DATAHOOKS.SUFFIX}
            className={styles.suffix}
            {...secondaryTextProps}
          >
            {suffix}
          </Text>
        )}
      </Box>
    );
  }
}

export default ListItemSelect;

export const listItemSelectBuilder = ({
  id,
  className,
  checkbox,
  prefix,
  title,
  subtitle,
  suffix,
  selected,
  disabled,
  size,
  ellipsis,
}) => ({
  id,
  disabled,
  overrideStyle: true,
  value: props => (
    <ListItemSelect
      className={className}
      checkbox={checkbox}
      prefix={prefix}
      title={title}
      subtitle={subtitle}
      suffix={suffix}
      size={size}
      ellipsis={ellipsis}
      selected={selected}
      {...props}
    />
  ),
});
