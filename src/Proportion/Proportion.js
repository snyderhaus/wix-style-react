import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Proportion.scss';
import { PREDEFINED_RATIOS } from './ratios';

class Proportion extends React.PureComponent {
  static PREDEFINED_RATIOS = PREDEFINED_RATIOS;

  static displayName = 'Proportion';

  static propTypes = {
    children: PropTypes.node.isRequired,
    dataHook: PropTypes.string,
    className: PropTypes.string,
    /** condition for wrapping content with Proportion or return original  */

    /** predefined Proportion.square (1), Proportion.portrait (3/4), Proportion.cinema (16/9), Proportion.landscape (4/3), or a custom number (width / height) or 'none' for original size */
    aspectRatio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    aspectRatio: 1,
  };

  render() {
    const { dataHook, className, aspectRatio } = this.props;
    const wrapperClass = classnames(styles.root, className);
    const aspectRatioHolder = this._getAspectRatioHolder();
    const disabled = aspectRatio === PREDEFINED_RATIOS.none ? true : false;
    const content = this._getContent(disabled);

    return (
      <div className={wrapperClass} data-hook={dataHook}>
        {!disabled && aspectRatioHolder}
        {content}
      </div>
    );
  }

  _getContent(disabled) {
    const { children } = this.props;
    return disabled ? (
      children
    ) : (
      <div className={styles.contentWrapper}>{children}</div>
    );
  }

  /**
   * This is based on Noam Rosenthal's (noamr@wix.com) solution
   * which can be found here: https://codeburst.io/keeping-aspect-ratio-with-html-and-no-padding-tricks-40705656808b
   *
   * The solution uses the fact that SVGs can maintain aspect ratio's natively.
   * In addition we use an img element for this solution to work correctly in IE
   * */
  _getAspectRatioHolder() {
    const { width, height } = this._getRatio();
    const svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" />`;
    return (
      <img
        data-hook={'proportion-aspect'}
        className={styles.ratioHolder}
        src={`data:image/svg+xml,${encodeURIComponent(svg)}`}
      />
    );
  }

  _getRatio() {
    const { aspectRatio } = this.props;

    return {
      width: aspectRatio ? Math.round(aspectRatio * 100) : 100,
      height: 100,
    };
  }
}

export default Proportion;
