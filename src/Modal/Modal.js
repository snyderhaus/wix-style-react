import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import classnames from 'classnames';
import X from 'wix-ui-icons-common/X';
import defaultTo from 'lodash/defaultTo';

import styles from './Modal.scss';
import { flexPositions } from './constants';
import WixComponent from '../BaseComponents/WixComponent';
import { ZIndex } from '../ZIndex';

const CHILDREN_WRAPPER_DIV_ID = 'modal-children-container';

class Modal extends WixComponent {
  static propTypes = {
    /** Is modal open or not*/
    isOpen: PropTypes.bool.isRequired,
    /** Border radius of modal*/
    borderRadius: PropTypes.number,
    /** a11y: The value of contentLabel is set as an aria-label on the modal element. This helps assistive technology, like screen readers, to add a label to an element that would otherwise be anonymous */
    contentLabel: PropTypes.string,
    theme: PropTypes.oneOf(['blue', 'red', 'green', 'white']),
    children: PropTypes.any,
    /** z-index of the modal overlay */
    zIndex: PropTypes.number,
    shouldCloseOnOverlayClick: PropTypes.bool,
    /** Displays a close button on the top right corner of the overlay  */
    shouldDisplayCloseButton: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
    /** horizontal position of the modal*/
    horizontalPosition: PropTypes.oneOf(['start', 'center', 'end']),
    /** vertical position of the modal*/
    verticalPosition: PropTypes.oneOf(['start', 'center', 'end']),
    /** Number indicating the milliseconds to wait before closing the modal*/
    closeTimeoutMS: PropTypes.number,
    /** Specifies if modal portal supports scroll*/
    scrollable: PropTypes.bool,
    /** Specifies if modal content should become scrollable when modal size will fit the window */
    scrollableContent: PropTypes.bool,
    /** maxHeight of modal(when it has scrollableContent)*/
    maxHeight: PropTypes.string,
    height: PropTypes.string,
    /** css position of the modal overlay */
    overlayPosition: PropTypes.oneOf([
      'static',
      'relative',
      'absolute',
      'fixed',
      'sticky',
    ]),
    /** A function that returns a DOM element on which the modal should be appended to */
    parentSelector: PropTypes.func,
    /** selector specifying where to apply the aria-hidden attribute */
    appElement: PropTypes.string,
  };

  static defaultProps = {
    borderRadius: 0,
    theme: 'blue',
    shouldCloseOnOverlayClick: false,
    shouldDisplayCloseButton: false,
    horizontalPosition: 'center',
    verticalPosition: 'center',
    closeTimeoutMS: 500,
    scrollable: true,
    scrollableContent: false,
    height: '100%',
    maxHeight: 'auto',
    overlayPosition: 'fixed',
  };

  render() {
    const {
      horizontalPosition,
      verticalPosition,
      height,
      scrollableContent,
      borderRadius,
      zIndex,
      scrollable,
      theme,
      isOpen,
      shouldCloseOnOverlayClick,
      shouldDisplayCloseButton,
      onRequestClose,
      onAfterOpen,
      contentLabel,
      closeTimeoutMS,
      children,
      appElement,
      overlayPosition,
      parentSelector,
    } = this.props;

    let { maxHeight } = this.props;
    const justifyContent = flexPositions[horizontalPosition];
    const alignItems = flexPositions[verticalPosition];

    maxHeight = scrollableContent && maxHeight === 'auto' ? '100vh' : maxHeight;

    const modalStyles = {
      overlay: {
        // Overriding defaults
        position: overlayPosition,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: defaultTo(zIndex, ZIndex('Modal')),
        backgroundColor: null, // null disables the property, use css instead
        // Overriding defaults - END
        display: 'flex',
        justifyContent,
        alignItems,
        overflowY: scrollable ? 'auto' : 'hidden',
      },
      content: {
        // Overriding defaults
        border: 'none',
        overflowY: scrollableContent ? 'auto' : 'initial',
        overflowX: scrollableContent ? 'hidden' : 'initial',
        height,
        maxHeight,
        width: '100%',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        borderRadius,
        padding: '0px',
        // Overriding defaults - END
        backgroundColor: 'transparent',
        marginBottom: '0px',
        position: 'relative',
      },
    };

    const modalClasses = `${styles.modal} ${styles[theme]}`;
    const portalClassName = classnames(styles.portal, {
      [styles.portalNonScrollable]: !scrollable,
    });

    if (appElement) {
      ReactModal.setAppElement(appElement);
    } else {
      ReactModal.setAppElement('body');
    }

    return (
      <div>
        <ReactModal
          portalClassName={portalClassName}
          isOpen={isOpen}
          shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
          onRequestClose={onRequestClose}
          onAfterOpen={onAfterOpen}
          style={modalStyles}
          className={modalClasses}
          contentLabel={contentLabel}
          closeTimeoutMS={closeTimeoutMS}
          parentSelector={parentSelector}
        >
          {isOpen && shouldDisplayCloseButton && this.renderCloseButton()}
          <div
            id={CHILDREN_WRAPPER_DIV_ID}
            className={styles.childrenContainer}
            onClick={this.handleOverlayClick}
          >
            {children}
          </div>
        </ReactModal>
      </div>
    );
  }

  handleOverlayClick = event => {
    const { shouldCloseOnOverlayClick, onRequestClose } = this.props;
    if (
      shouldCloseOnOverlayClick &&
      event.target.id === CHILDREN_WRAPPER_DIV_ID
    ) {
      onRequestClose();
    }
  };

  renderCloseButton = () => {
    return (
      <div
        onClick={this.props.onRequestClose}
        className={styles.closeButton}
        data-hook="modal-close-button"
      >
        <X size="18px" />
      </div>
    );
  };
}

export default Modal;
