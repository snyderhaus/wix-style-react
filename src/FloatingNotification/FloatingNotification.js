import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import Text from '../Text';
import TextButton from '../TextButton';
import Button from '../Button';
import CloseButton from '../CloseButton/CloseButton';
import { TYPES, dataHooks } from './constants';
import styles from './FloatingNotification.scss';

const buttonPropTypes = PropTypes.shape({
  label: PropTypes.node,
  as: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
});

/**
 * Displays simple and temporary messages or destructive events
 */
class FloatingNotification extends React.PureComponent {
  static displayName = 'FloatingNotification';

  static propTypes = {
    dataHook: PropTypes.string,
    className: PropTypes.string,

    /** the type of notification */
    type: PropTypes.oneOf([
      'standard',
      'success',
      'destructive',
      'warning',
      'premium',
      'preview',
      'dark',
    ]),

    /** decides if to show the close button */
    showCloseButton: PropTypes.bool,

    /** close button on click handler */
    onClose: PropTypes.func,

    /** props to pass to textButton - renders the TextButton when not empty*/
    textButtonProps: buttonPropTypes,

    /** props to pass to button - renders the Button when not empty */
    buttonProps: buttonPropTypes,

    /** An icon element to appear before content */
    prefixIcon: PropTypes.element,

    /** The text content of the notification */
    text: PropTypes.node,

    /** The width of the content container of the notification */
    width: PropTypes.string,
  };

  static defaultProps = {
    type: 'standard',
    buttonProps: {},
    textButtonProps: {},
    showCloseButton: true,
  };

  render() {
    const { type, className, dataHook, width } = this.props;
    const icon = this._getIcon();
    const content = this._getContent();
    const textButton = this._getTextButton();
    const button = this._getButton();
    const close = this._getClose();

    const style = { width };
    width && (style.maxWidth = width);

    return (
      <div
        data-hook={dataHook}
        className={classNames(styles.root, styles[type], className)}
        style={style}
      >
        {icon}
        {content}
        {textButton}
        {button}
        <div className={styles.gap} />
        {close}
      </div>
    );
  }

  _getIcon() {
    const { prefixIcon, type } = this.props;
    return prefixIcon ? (
      <div className={classNames(styles.icon, styles[type])}>{prefixIcon}</div>
    ) : null;
  }

  _getContent() {
    const { text, type } = this.props;
    return (
      <Text
        size="small"
        ellipsis
        light={type === TYPES.dark}
        dataHook={dataHooks.notificationText}
        className={styles.text}
      >
        {text}
      </Text>
    );
  }

  _getTextButton() {
    const { textButtonProps, type } = this.props;
    const { label, ...rest } = textButtonProps;

    return !isEmpty(textButtonProps) ? (
      <TextButton
        {...rest}
        underline="always"
        skin={type !== TYPES.dark ? 'dark' : 'light'}
        size="small"
        className={styles.textButton}
        dataHook={dataHooks.textButton}
      >
        {label}
      </TextButton>
    ) : null;
  }

  _getButton() {
    const { buttonProps, type } = this.props;
    const { label, ...rest } = buttonProps;

    return !isEmpty(buttonProps) ? (
      <Button
        {...rest}
        className={styles.button}
        size="tiny"
        priority={type !== TYPES.dark ? 'secondary' : 'primary'}
        skin={type !== TYPES.dark ? 'dark' : 'standard'}
        dataHook={dataHooks.button}
      >
        {label}
      </Button>
    ) : null;
  }

  _getClose() {
    const { showCloseButton, onClose, type } = this.props;
    return showCloseButton ? (
      <CloseButton
        size="medium"
        skin={type !== TYPES.dark ? 'dark' : 'light'}
        className={styles.close}
        dataHook={dataHooks.closeButton}
        onClick={onClose}
      />
    ) : null;
  }
}

export default FloatingNotification;
