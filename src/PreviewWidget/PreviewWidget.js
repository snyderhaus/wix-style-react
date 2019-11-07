import React from 'react';
import { node, string, oneOf } from 'prop-types';

import { dataHooks } from './constants';
import style from './PreviewWidget.st.css';

/** Preview content widget*/
class PreviewWidget extends React.PureComponent {
  static displayName = 'PreviewWidget';

  static propTypes = {
    /** Preview data hook*/
    dataHook: string,

    /** Preview type */
    type: oneOf(['blank', 'browserBar', 'mobile']),

    /** Preview background color*/
    backgroundColor: oneOf(['grey', 'gradient', 'custom']),

    /** Content area contour*/
    borderType: oneOf(['shadow', 'solid']),

    /** Node to preview */
    children: node.isRequired,
  };

  static defaultProps = {
    type: 'blank',
    backgroundColor: 'grey',
    borderType: 'shadow',
  };

  render() {
    const {
      dataHook,
      type,
      backgroundColor,
      borderType,
      children,
    } = this.props;

    return (
      <div
        {...style('root', { backgroundColor }, this.props)}
        data-hook={dataHook}
      >
        <div
          {...style('contentArea', { borderType })}
          data-hook={dataHooks.contentArea}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default PreviewWidget;
