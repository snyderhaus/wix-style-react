import React from 'react';
import PropTypes from 'prop-types';
import X from 'wix-ui-icons-common/X';
import IconButton from '../IconButton';

import styles from './ModalMobileLayout.st.css';

class ModalMobileLayout extends React.PureComponent {
  static displayName = 'ModalMobileLayout';

  static propTypes = {
    dataHook: PropTypes.string,

    /** title node to be displayed in the header strip */
    title: PropTypes.node,

    /** If true, the title will be sticky to the top of the modal */
    stickyTitle: PropTypes.bool,

    /** content node to be displayed */
    content: PropTypes.node,

    /** footer node to be displayed */
    footer: PropTypes.node,

    /** If true, the footer will be sticky to the bottom of the modal */
    stickyFooter: PropTypes.bool,

    /** callback for when there's a click on the overlay (in case the modal in not fullscreen) */
    onOverlayClick: PropTypes.func,

    /** callback for when the the close button is clicked.  **Note**: if this prop is not provided, then the close button will not be shown. */
    onCloseButtonClick: PropTypes.func,

    /** If true, the modal will take all of the screen */
    fullscreen: PropTypes.bool,
  };

  static defaultProps = {
    stickyTitle: false,
    stickyFooter: false,
    fullscreen: false,
  };

  render() {
    const {
      dataHook,
      title,
      content,
      footer,
      onOverlayClick,
      onCloseButtonClick,
      fullscreen,
      stickyTitle,
      stickyFooter,
    } = this.props;

    return (
      <div
        id="modalMobileLayout-root"
        data-hook={dataHook}
        {...styles(
          'root',
          {
            fullscreen,
            stickyTitle,
            stickyFooter,
            noTitle: !title,
            noFooter: !footer,
          },
          this.props,
        )}
        onClick={({ target: { id } }) => {
          id === 'modalMobileLayout-root' && onOverlayClick && onOverlayClick();
        }}
      >
        <div className={styles.container}>
          {onCloseButtonClick && (
            <div className={styles.close}>
              <IconButton
                dataHook="modalMobileLayout-close-button"
                skin="light"
                onClick={onCloseButtonClick}
              >
                <X />
              </IconButton>
            </div>
          )}
          {title && stickyTitle && this._renderTitle()}
          <div className={styles.content} data-hook="modalMobileLayout-content">
            <div>
              {title && !stickyTitle && this._renderTitle()}
              {content}
              {footer && !stickyFooter && this._renderFooter()}
            </div>
          </div>
          {footer && stickyFooter && this._renderFooter()}
        </div>
      </div>
    );
  }

  _renderTitle = () => (
    <div
      className={styles.title}
      data-hook="modalMobileLayout-title"
      data-sticky-title={this.props.stickyTitle}
    >
      {this.props.title}
    </div>
  );

  _renderFooter = () => (
    <div
      className={styles.footer}
      data-hook="modalMobileLayout-footer"
      data-sticky-footer={this.props.stickyFooter}
    >
      {this.props.footer}
    </div>
  );
}

export default ModalMobileLayout;
