import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import Heading from '../../Heading';
import Text from '../../Text';
import classNames from 'classnames';
import CloseButton from '../../CloseButton';

import Button from '../../Deprecated/Button';

import * as styles from './MessageBoxMarketerialLayout.scss';

class MessageBoxMarketerialLayout extends WixComponent {
  render() {
    const {
      title,
      content,
      primaryButtonLabel,
      secondaryButtonLabel,
      imageUrl,
      onClose,
      theme,
      imageComponent,
      footerBottomChildren,
      removeButtonsPadding,
    } = this.props;

    const headerClasses = classNames({
      [styles.headerBase]: true,
      [styles.header]: !!imageComponent || !!imageUrl,
      [styles[`header-${theme}`]]: true,
    });

    // instead of introducing a breaking change for padding removal for non buttons existence, we add this prop
    const shouldRemoveButtonsPadding =
      removeButtonsPadding && !primaryButtonLabel & !secondaryButtonLabel;

    return (
      <div className={styles.root}>
        <div className={headerClasses}>
          <div className={styles.close}>
            <CloseButton
              dataHook="close-button"
              size="medium"
              onClick={onClose}
              skin={theme === 'white' ? 'dark' : 'lightFilled'}
            />
          </div>
          {imageComponent ? (
            <div className={styles.headerImageComponent}>{imageComponent}</div>
          ) : imageUrl ? (
            <div className={styles.headerImage}>
              <img src={imageUrl} data-hook="header-image" />
            </div>
          ) : null}
        </div>
        <div className={styles.title} data-hook="message-box-title">
          <Heading appearance="H1">{title}</Heading>
        </div>
        <div className={styles.content}>
          <Text size="medium" weight="thin">
            {content}
          </Text>
        </div>

        {shouldRemoveButtonsPadding ? (
          <div className={styles.emptyButtonsContainer} />
        ) : (
          this._renderButtons()
        )}
        {footerBottomChildren ? (
          <div
            data-hook="footer-layout-bottom-children"
            className={styles.bottomChildren}
            children={footerBottomChildren}
          />
        ) : null}
      </div>
    );
  }

  _renderButtons = () => {
    const {
      primaryButtonLabel,
      primaryButtonTheme,
      primaryButtonNode,
      theme,
      onPrimaryButtonClick,
      primaryButtonDisabled,
      secondaryButtonLabel,
      footerBottomChildren,
      onSecondaryButtonClick,
    } = this.props;
    return (
      <div className={styles.buttonsContainer}>
        {!!primaryButtonNode && (
          <div data-hook="primary-button-node">{primaryButtonNode}</div>
        )}
        {!primaryButtonNode && primaryButtonLabel ? (
          <div className={styles.primaryButtonContainer}>
            <Button
              theme={`full${primaryButtonTheme || theme}`}
              onClick={onPrimaryButtonClick}
              dataHook="primary-button"
              disabled={primaryButtonDisabled}
            >
              {primaryButtonLabel}
            </Button>
          </div>
        ) : null}
        {secondaryButtonLabel && !footerBottomChildren ? (
          <div className={styles.secondaryButtonContainer}>
            <span onClick={onSecondaryButtonClick} data-hook="secondary-button">
              {secondaryButtonLabel}
            </span>
          </div>
        ) : null}
      </div>
    );
  };
}

MessageBoxMarketerialLayout.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  primaryButtonLabel: PropTypes.string,
  primaryButtonDisabled: PropTypes.bool,
  primaryButtonNode: PropTypes.node,
  secondaryButtonLabel: PropTypes.string,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  imageUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  imageComponent: PropTypes.node,
  footerBottomChildren: PropTypes.node,
  theme: PropTypes.oneOf(['blue', 'purple', 'white']),
  primaryButtonTheme: PropTypes.oneOf(['blue', 'purple']),
  removeButtonsPadding: PropTypes.bool,
};

MessageBoxMarketerialLayout.defaultProps = {
  theme: 'blue',
  removeButtonsPadding: false,
};

export default MessageBoxMarketerialLayout;
