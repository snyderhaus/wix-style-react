import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarketingLayout.st.css';
import Content from './Content';
import { APPEARANCES } from '../Heading';
import { SIZES as TEXT_SIZES } from '../Text';
import { SIZES } from './constants';

/** Marketing layout is a layout designed to promote new features or display first time visit.
 * Component has title, description, action and illustration areas. */
class MarketingLayout extends React.PureComponent {
  static displayName = 'MarketingLayout';

  static propTypes = {
    /** DataHook for the marketing layout component */
    dataHook: PropTypes.string,
    /** Image for the marketing layout */
    image: PropTypes.node,
    /** Size of the marketing layout */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Invert marketing layout */
    inverted: PropTypes.bool,
    /** Marketing layout actions */
    actions: PropTypes.node,
    /** Marketing layout title */
    title: PropTypes.node,
    /** Marketing layout description */
    description: PropTypes.node,
  };

  static defaultProps = {
    size: SIZES.small,
    inverted: false,
  };

  sizes = {
    [SIZES.small]: {
      titleAppearance: APPEARANCES.H3,
      descriptionSize: TEXT_SIZES.small,
    },
    [SIZES.medium]: {
      titleAppearance: APPEARANCES.H2,
      descriptionSize: TEXT_SIZES.medium,
    },
    [SIZES.large]: {
      titleAppearance: APPEARANCES.H2,
      descriptionSize: TEXT_SIZES.medium,
    },
  };

  _renderContent = () => {
    const { inverted, actions, title, description, image, size } = this.props;
    const layoutProps = this.sizes[size];

    const toRender = [
      <div key="image" className={styles.imageContainer}>
        {image || <div className={styles.imagePlaceholder} />}
      </div>,
      <Content
        key="content"
        layoutProps={layoutProps}
        actions={actions}
        title={title}
        description={description}
      />,
    ];

    return inverted ? toRender : toRender.reverse();
  };

  render() {
    const { size, inverted, actions, dataHook } = this.props;

    return (
      <div
        {...styles('root', { size, inverted, actions }, this.props)}
        data-hook={dataHook}
      >
        {this._renderContent()}
      </div>
    );
  }
}

export default MarketingLayout;
