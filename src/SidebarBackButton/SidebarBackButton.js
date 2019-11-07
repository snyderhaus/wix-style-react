import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from '../new-icons/ChevronLeft';
import Text from '../Text';
import styles from './SidebarBackButton.st.css';
import { SidebarContext } from '../Sidebar/SidebarAPI';
import { sidebarSkins } from '../Sidebar/constants';

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
    const { children, animateArrow, onClick, dataHook } = this.props;

    return (
      <SidebarContext.Consumer>
        {context => {
          const skin = (context && context.getSkin()) || sidebarSkins.dark;
          return (
            <div
              {...styles(
                'BackButton',
                { lightSkin: skin === sidebarSkins.light },
                this.props,
              )}
              data-hook={dataHook}
              onClick={onClick}
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
            </div>
          );
        }}
      </SidebarContext.Consumer>
    );
  }
}

export default SidebarBackButton;
