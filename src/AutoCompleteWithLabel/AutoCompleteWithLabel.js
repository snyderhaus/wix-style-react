import React from 'react';
import PropTypes from 'prop-types';
import StatusAlertSmall from 'wix-ui-icons-common/StatusAlertSmall';
import classNames from 'classnames';

import Input from '../Input';
import LabelledElement from '../LabelledElement';
import Text from '../Text';

import InputWithOptions from '../InputWithOptions';
import styles from './AutoCompleteWithLabel.scss';

import dataHooks from './dataHooks';
import { optionValidator } from '../DropdownLayout/DropdownLayout';

class AutoCompleteWithLabel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
      isEditing: false,
    };
  }

  static propTypes = {
    dataHook: PropTypes.string,
    /** label to appear in input */
    label: PropTypes.string.isRequired,
    /** options to appear in dropdown */
    options: PropTypes.arrayOf(optionValidator).isRequired,
    /** add suffix to input */
    suffix: PropTypes.arrayOf(PropTypes.element),
    /** input status - error, warning or loading */
    status: PropTypes.oneOf(['error', 'warning', 'loading']),
    /** JSX element that appears upon error */
    statusMessage: PropTypes.node,
    /** Standard input onFocus callback */
    onFocus: PropTypes.func,
    /** Standard input onBlur callback */
    onBlur: PropTypes.func,
    /** Standard input onChange callback */
    onChange: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    ariaLabel: PropTypes.string,
    /** Standard React Input autoFocus (focus the element on mount) */
    autoFocus: PropTypes.bool,
    /** Sets value of autocomplete attribute (consult the [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete) for possible values  */
    autocomplete: PropTypes.string,
    /** when set to true this component is disabled */
    disabled: PropTypes.bool,
    /** A single CSS class name to be passed to the Input element. */
    className: PropTypes.string,
    /** Input max length */
    maxLength: PropTypes.number,
    /** Placeholder to display */
    placeholder: PropTypes.string,
    /** Callback function called whenever the user selects a different option in the list */
    onSelect: PropTypes.func,
    /** Indicates whether to render using the native select element */
    native: PropTypes.bool,
  };

  static defaultProps = {
    ...Input.defaultProps,
    label: '',
    options: [],
  };

  onSelect = option => {
    const { value } = option;
    this.setState({
      value,
    });
    this.props.onSelect(option);
    this.setState({ isEditing: false });
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value, isEditing: true });
    this.props.onChange && this.props.onChange(event);
  };

  _isInputControlled = () => typeof this.props.value !== 'undefined';

  render() {
    const {
      label,
      dataHook,
      options,
      status,
      suffix,
      statusMessage,
      onFocus,
      name,
      type,
      ariaLabel,
      autoFocus,
      autocomplete,
      disabled,
      className,
      maxLength,
      placeholder,
      native,
      onBlur,
    } = this.props;
    const { value } = this._isInputControlled() ? this.props : this.state;
    const predicate = this.state.isEditing
      ? option => option.value.toLowerCase().includes(value.toLowerCase())
      : () => true;
    const filteredOptions = options.filter(predicate);

    const suffixContainer = suffix
      ? suffix.map((item, index) => {
          return (
            <div key={`${dataHook}-${index}`} className={styles.groupIcon}>
              {item}
            </div>
          );
        })
      : [];

    return (
      <div data-hook={dataHook}>
        <LabelledElement
          label={label}
          dataHook={dataHooks.labelledElement}
          value={value}
        >
          <InputWithOptions
            onChange={this.onChange}
            onSelect={this.onSelect}
            dataHook={dataHooks.inputWithOptions}
            hideStatusSuffix
            onFocus={onFocus}
            onBlur={onBlur}
            inputElement={
              <Input
                name={name}
                type={type}
                ariaLabel={ariaLabel}
                autoFocus={autoFocus}
                autocomplete={autocomplete}
                disabled={disabled}
                maxLength={maxLength}
                placeholder={placeholder}
                dataHook={dataHooks.inputWithLabel}
                value={value}
                className={classNames(styles.inputContainer, className)}
                suffix={suffixContainer}
                status={status}
              />
            }
            options={filteredOptions}
            native={native}
          />
        </LabelledElement>
        {status === Input.StatusError && statusMessage && (
          <Text
            skin="error"
            weight="normal"
            size="small"
            className={styles.statusMessage}
          >
            <span className={styles.statusMessageIcon}>
              <StatusAlertSmall />
            </span>
            <span data-hook={dataHooks.errorMessage}>{statusMessage}</span>
          </Text>
        )}
      </div>
    );
  }
}

export default AutoCompleteWithLabel;
