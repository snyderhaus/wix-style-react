import React from 'react';
import { string, oneOf, bool, func, number } from 'prop-types';
import { ToggleSwitch as CoreToggleSwitch } from 'wix-ui-core/dist/src/components/toggle-switch';
import ToggleOff from 'wix-ui-icons-common/system/ToggleOff';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import ToggleOffSmall from 'wix-ui-icons-common/system/ToggleOffSmall';
import ToggleOnSmall from 'wix-ui-icons-common/system/ToggleOnSmall';
import { SIZES } from './constants';
import styles from './ToggleSwitch.st.css';

const checkedIconMap = {
  [SIZES.small]: undefined,
  [SIZES.medium]: <ToggleOnSmall />,
  [SIZES.large]: <ToggleOn />,
};

const uncheckedIconMap = {
  [SIZES.small]: undefined,
  [SIZES.medium]: <ToggleOffSmall />,
  [SIZES.large]: <ToggleOff />,
};

/** toggle switch */
class ToggleSwitch extends React.PureComponent {
  static displayName = 'ToggleSwitch';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests*/
    dataHook: string,

    /** ToggleSwitch skin */
    skin: oneOf(['standard', 'success', 'error']),

    /** Toggle Switch size*/
    size: oneOf(['small', 'medium', 'large']),

    /** is Toggle Switch checked */
    checked: bool,

    /** is Toggle Switch disabled */
    disabled: bool,

    /** Toggle Switch id */
    id: string,

    /** onChange event */
    onChange: func,

    /** Standard component tabIndex */
    tabIndex: number,
  };

  static defaultProps = {
    skin: 'standard',
    size: 'large',
  };

  render() {
    // Should not allow inline styles
    const { size, skin, styles: stylesProp, dataHook, ...rest } = this.props;

    return (
      <CoreToggleSwitch
        {...styles('root', { skin, size }, this.props)}
        data-hook={dataHook}
        data-size={size}
        data-skin={skin}
        checkedIcon={checkedIconMap[size]}
        uncheckedIcon={uncheckedIconMap[size]}
        {...rest}
      />
    );
  }
}

export default ToggleSwitch;
