import React from 'react';
import { node, string, oneOf } from 'prop-types';
import { skins, dataHooks } from './constants';
import colors from '../Foundation/stylable/colors.st.css';

import Box from '../Box';

import style from './PreviewWidget.st.css';

/** Preview content widget*/
class PreviewWidget extends React.PureComponent {
  static displayName = 'PreviewWidget';

  static propTypes = {
    /** Preview widget data hook*/
    dataHook: string,

    /** Background skin. To use `custom` skin, set it to custom and use the backgroundColor prop*/
    skin: oneOf(['neutral', 'gradient', 'custom']),

    /** Preview widget background color. Can be set with `design system` colors*/
    backgroundColor: string,

    /** Content area outline*/
    contentOutline: oneOf(['shadow', 'border']),

    /** Sets the height of the component */
    height: string,

    /** Sets the width of the component */
    width: string,

    /** Node to preview */
    children: node.isRequired,
  };

  static defaultProps = {
    skin: 'neutral',
    contentOutline: 'shadow',
    height: 'auto',
    width: '100%',
    children: <Box height="50px" width="50px" />,
  };

  render() {
    const {
      dataHook,
      skin,
      contentOutline,
      backgroundColor,
      height,
      width,
      children,
    } = this.props;

    const rootStyles = {
      height: `${height}`,
      width: `${width}`,
      background:
        skin === skins.custom && (colors[backgroundColor] || backgroundColor),
    };

    return (
      <div
        {...style('root', { skin, contentOutline }, this.props)}
        data-hook={dataHook}
        style={rootStyles}
      >
        <div data-hook={dataHooks.contentArea} className={style.contentArea}>
          {children}
        </div>
      </div>
    );
  }
}

export default PreviewWidget;
