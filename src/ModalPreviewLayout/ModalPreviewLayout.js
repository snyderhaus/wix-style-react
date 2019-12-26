import React from 'react';
import PropTypes from 'prop-types';
import X from 'wix-ui-icons-common/X';
import Text from '../Text';
import IconButton from '../IconButton';
import styles from './ModalPreviewLayout.st.css';

const OVERLAY_ID = 'preview-modal-overlay';
const INNER_OVERLAY_ID = 'preview-modal-inner-overlay';

/** This is a fullscreen modal to present a document to the user overlaying the entire view port */
class ModalPreviewLayout extends React.PureComponent {
  static displayName = 'ModalPreviewLayout';

  static propTypes = {
    dataHook: PropTypes.string,
    /** component to be displayed in header strip to preform actions relevant to the displayed content */
    actions: PropTypes.node,
    /** title text to be displayed in the header strip */
    title: PropTypes.string,
    /** modal content displayed mid-screen*/
    children: PropTypes.node.isRequired,
    /** callback for when the modal is closed */
    onClose: PropTypes.func.isRequired,
    shouldCloseOnOverlayClick: PropTypes.bool,
  };

  static defaultProps = {
    shouldCloseOnOverlayClick: true,
  };

  shouldClose(id) {
    return (
      this.props.shouldCloseOnOverlayClick &&
      [OVERLAY_ID, INNER_OVERLAY_ID].includes(id)
    );
  }

  render() {
    const { dataHook, actions, title, children, onClose } = this.props;
    return (
      <div
        id={OVERLAY_ID}
        className={styles.overlay}
        onClick={({ target: { id } }) => {
          if (this.shouldClose(id) && typeof onClose === 'function') {
            onClose();
          }
        }}
      >
        <div data-hook={dataHook} className={styles.header}>
          <div data-hook="preview-modal-title" className={styles.title}>
            <Text light ellipsis>
              {title}
            </Text>
          </div>
          <div className={styles.actions} data-hook="preview-modal-actions">
            {actions}
          </div>
          <div className={styles.closeButton}>
            <IconButton
              as="button"
              onClick={onClose}
              priority="secondary"
              skin="transparent"
              dataHook="preview-modal-close-button"
            >
              <X />
            </IconButton>
          </div>
        </div>
        <div
          id={INNER_OVERLAY_ID}
          data-hook={INNER_OVERLAY_ID}
          className={styles.innerOverlay}
        >
          <div data-hook="preview-modal-content" className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPreviewLayout;
