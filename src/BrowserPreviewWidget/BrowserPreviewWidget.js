import React from 'react';
import { node, string, oneOf } from 'prop-types';
import { browserBarSizes, dataHooks } from './constants';
import PreviewWidget from '../PreviewWidget';
import styles from './BrowserPreviewWidget.st.css';

/** Browser preview widget */
class BrowserPreviewWidget extends React.PureComponent {
  static displayName = 'BrowserPreviewWidget';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests*/
    dataHook: string,

    /** Background skin. To use `custom` skin, set it to `custom` and use the `backgroundColor` prop*/
    skin: oneOf(['neutral', 'gradient', 'custom']),

    /** Mobile preview widget background color. Can be set with `design system` colors*/
    backgroundColor: string,

    /** Sets the height of the component.*/
    height: string,

    /** Sets the width of the component */
    width: string,

    /** Browser bar height */
    browserBarSize: oneOf(['size9', 'size12', 'size18', 'size24']),

    /** Node to preview */
    children: node.isRequired,
  };

  static defaultProps = {
    skin: 'neutral',
    height: '100%',
    width: '100%',
    browserBarSize: 'size12',
  };

  render() {
    const {
      dataHook,
      skin,
      backgroundColor,
      height,
      width,
      browserBarSize,
      children,
    } = this.props;

    return (
      <PreviewWidget
        {...styles(
          'root',
          { skin, backgroundColor, height, width, browserBarSize },
          this.props,
        )}
        dataHook={dataHook}
        skin={skin}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
      >
        <div data-hook={dataHooks.browserBar} className={styles.browserBar}>
          <div className={styles.circlesContainer}>
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.circle} />
          </div>
        </div>
        <div data-hook={dataHooks.browserContent}>{children}</div>
      </PreviewWidget>
    );
  }
}

export default BrowserPreviewWidget;
