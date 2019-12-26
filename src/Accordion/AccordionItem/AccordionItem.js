import React from 'react';
import { Animator } from 'wix-animations';
import PropTypes from 'prop-types';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import ChevronUp from 'wix-ui-icons-common/ChevronUp';

import Text from '../../Text';
import Button from '../../Button';
import TextButton from '../../TextButton';
import { buttonTypes, dataHooks } from '../constants';

import style from './AccordionItem.st.css';

class AccordionItem extends React.PureComponent {
  static displayName = 'AccordionItem';

  static propTypes = {
    buttonType: PropTypes.oneOf(Object.values(buttonTypes)),
    title: PropTypes.node,
    expandLabel: PropTypes.node,
    collapseLabel: PropTypes.node,
    children: PropTypes.node,
    icon: PropTypes.node,
    open: PropTypes.bool,
    disabled: PropTypes.bool,
    onToggle: PropTypes.func,
  };

  static defaultProps = {
    buttonType: buttonTypes.textButton,
  };

  state = {
    hover: false,
  };

  _onMouseLeave = () => this.setState({ hover: false });
  _onMouseEnter = () => this.setState({ hover: true });

  _renderOpenButton = () => {
    const { expandLabel, buttonType, disabled } = this.props;
    const { hover } = this.state;

    const commonProps = {
      dataHook: dataHooks.toggleButton,
      disabled,
    };

    const cases = [
      {
        when: () => expandLabel && buttonType === buttonTypes.button,
        make: () => (
          <Button {...commonProps} size="small" children={expandLabel} />
        ),
      },

      {
        when: () =>
          hover && expandLabel && buttonType === buttonTypes.textButton,
        make: () => (
          <TextButton
            {...commonProps}
            suffixIcon={<ChevronDown size="24px" />}
            children={expandLabel}
          />
        ),
      },
      {
        when: () => true,
        make: () => (
          <TextButton
            {...commonProps}
            suffixIcon={<ChevronDown size="24px" />}
          />
        ),
      },
    ];

    return cases.find(({ when }) => when()).make();
  };

  _renderCloseButton = () => {
    const { collapseLabel, buttonType, onToggle, disabled } = this.props;

    const shouldRenderButton =
      collapseLabel && buttonType === buttonTypes.button;

    const commonProps = {
      disabled,
      children: collapseLabel,
      onClick: onToggle,
      dataHook: dataHooks.toggleButton,
    };

    return shouldRenderButton ? (
      <Button {...commonProps} priority="secondary" size="small" />
    ) : (
      <TextButton {...commonProps} suffixIcon={<ChevronUp size="24px" />} />
    );
  };

  render() {
    const { icon, title, open, children, onToggle, disabled } = this.props;

    return (
      <div
        data-hook={dataHooks.item}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        onClick={!open && !disabled ? onToggle : null}
      >
        <div
          {...style(
            'header',
            { disabled, hover: !open && this.state.hover },
            this.props,
          )}
        >
          {icon && (
            <div className={style.icon} data-hook="icon">
              {icon}
            </div>
          )}
          {title && (
            <div className={style.title} data-hook="title-container">
              {typeof title === 'string' ? (
                <Text data-hook="title" ellipsis weight="normal">
                  {title}
                </Text>
              ) : (
                title
              )}
            </div>
          )}
          <div
            className={style.toggleButton}
            data-hook="toggle-accordion-wrapper"
            children={
              open ? this._renderCloseButton() : this._renderOpenButton()
            }
          />
        </div>

        <Animator show={open} height>
          <div data-hook="children" className={style.children}>
            {children}
          </div>
        </Animator>
      </div>
    );
  }
}

export default AccordionItem;
