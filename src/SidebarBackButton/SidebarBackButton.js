import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';

import Text from '../Text';
import styles from './SidebarBackButton.st.css';
import { SidebarContext } from '../Sidebar/SidebarAPI';
import { sidebarSkins } from '../Sidebar/constants';

import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable';

/**  button with an animated back arrow */
class SidebarBackButton extends React.PureComponent {
  static displayName = 'SidebarBackButton';

  static propTypes = {
    dataHook: PropTypes.string,
    onClick: PropTypes.func,
    /** Text for the button */
    children: PropTypes.string,
    /** Whether or not to constantly animate the arrow */
    animateArrow: PropTypes.func,
  };

  render() {
    const {
      children,
      animateArrow,
      onClick,
      dataHook,
      focusableOnFocus,
      focusableOnBlur,
    } = this.props;

    return (
      <SidebarContext.Consumer>
        {context => {
          const skin = (context && context.getSkin()) || sidebarSkins.dark;
          return (
            <button
              {...styles(
                'BackButton',
                { lightSkin: skin === sidebarSkins.light },
                this.props,
              )}
              data-hook={dataHook}
              onClick={onClick}
              onFocus={focusableOnFocus}
              onBlur={focusableOnBlur}
              type="button"
              tabIndex="0"
            >
              <ChevronLeft
                {...styles('arrow', { animated: animateArrow }, this.props)}
              />
              <Text
                weight="bold"
                size="small"
                secondary={skin === sidebarSkins.light}
                light={skin === sidebarSkins.dark}
              >
                {children}
              </Text>
            </button>
          );
        }}
      </SidebarContext.Consumer>
    );
  }
}

export default withFocusable(SidebarBackButton);
