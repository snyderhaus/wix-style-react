import React from 'react';
import PropTypes from 'prop-types';

import styles from './ListItemSection.st.css';
import Box from '../Box';
import Divider from '../Divider';
import Text from '../Text';
import TextButton from '../TextButton';

export const TYPES = {
  WHITESPACE: 'whitespace',
  DIVIDER: 'divider',
  TITLE: 'title',
  SUBHEADER: 'subheader',
};

export const DATAHOOKS = {
  SUFFIX: 'list-item-section-suffix',
  TITLE: 'list-item-section-title',
};

/** ListItemSection description */
class ListItemSection extends React.PureComponent {
  static displayName = 'ListItemSection';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** A list item section can be
     *  * `title` - Acts as a title for following list items.
     *  * `subheader` - Acts as separator between list items for differentiation.
     *  * `whitespace` - Adds some padding between list items.
     *  * `divider` - Same as whitespace, but with a line.
     */
    type: PropTypes.oneOf(Object.values(TYPES)),

    /** Text of the list item */
    title: PropTypes.string,

    /** TextButton suffix */
    suffix: PropTypes.node,

    /** If true, long text won't break into more than one line and will be terminated with an ellipsis */
    ellipsis: PropTypes.bool,

    /** A callback function called when suffix is clicked */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    type: TYPES.TITLE,
    ellipsis: false,
    dataHook: 'list-item-section',
  };

  state = {};

  render() {
    const { type } = this.props;

    if (type === TYPES.WHITESPACE) return this._renderWhitespace();

    if (type === TYPES.DIVIDER) return this._renderDivider();

    return this._renderTitle();
  }

  _renderWhitespace = () => {
    return <Box className={styles.root} padding={1} />;
  };

  _renderDivider = () => {
    return (
      <Box
        className={styles.root}
        paddingTop={1}
        paddingRight={4}
        paddingBottom="5px"
        paddingLeft={4}
      >
        <Divider />
      </Box>
    );
  };

  _renderTitle = () => {
    const {
      dataHook,
      className,
      type,
      title,
      suffix,
      ellipsis,
      onClick,
    } = this.props;
    return (
      <div
        {...styles(
          styles.root,
          { subheader: type === TYPES.SUBHEADER },
          className,
        )}
        data-hook={dataHook}
      >
        {/* Text */}
        <Text
          dataHook={DATAHOOKS.TITLE}
          tagName="div"
          size="small"
          className={styles.title}
          ellipsis={ellipsis}
        >
          {title}
        </Text>

        {/* Suffix */}
        {suffix && (
          <TextButton
            onClick={onClick}
            {...styles(styles.suffix, { ellipsis })}
            dataHook={DATAHOOKS.SUFFIX}
            size="tiny"
          >
            {suffix}
          </TextButton>
        )}
      </div>
    );
  };
}

export default ListItemSection;

export const listItemSectionBuilder = ({
  id,
  className,
  type,
  title,
  suffix,
  ellipsis,
}) => ({
  id,
  overrideStyle: true,
  value: props => (
    <ListItemSection
      className={className}
      type={type}
      title={title}
      suffix={suffix}
      ellipsis={ellipsis}
      {...props}
    />
  ),
});
