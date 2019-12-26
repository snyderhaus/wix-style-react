import React from 'react';

import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import {
  bool,
  func,
  node,
  oneOfType,
  string,
  number,
  object,
} from 'prop-types';
import Proportion from '../Proportion';

import { parseColor, parseGradient, parseUrl, parseElement } from './utils';
import styles from './FillPreview.st.css';

class FillPreview extends React.PureComponent {
  static displayName = 'FillPreview';

  _getBackground = fill => {
    const { disabled } = this.props;

    if (parseUrl(fill) && !disabled) {
      return {
        backgroundImage: `url('${fill}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      };
    }

    if (parseColor(fill) && !disabled) {
      return { backgroundColor: fill };
    }

    if (parseGradient(fill) && !disabled) {
      return {
        backgroundImage: fill,
      };
    }

    if (parseElement(fill) && !disabled) {
      return;
    }

    if (disabled) {
      return;
    }

    return {
      background: `linear-gradient(
        to top left,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) calc(50% - 0.8px),
        rgba(214, 69, 61, 1) 50%,
        rgba(255, 255, 255, 1) calc(50% + 0.8px),
        rgba(255, 255, 255, 1) 100%)`,
    };
  };

  render() {
    const {
      fill,
      onClick,
      selected,
      disabled,
      dataHook,
      aspectRatio,
      as,
      ...rest
    } = this.props;
    const background = this._getBackground(fill);
    return (
      <div {...styles('root', { selected }, rest)}>
        <Proportion dataHook={dataHook} aspectRatio={aspectRatio}>
          <ButtonNext
            {...rest}
            as={as}
            data-selected={selected}
            className={styles.button}
            {...styles('button')}
            data-hook="fill-preview-button"
            style={background}
            onClick={onClick}
            disabled={disabled}
          >
            {!background && React.isValidElement(fill) && fill}
          </ButtonNext>
        </Proportion>
      </div>
    );
  }
}

FillPreview.propTypes = {
  /** render as some other component or DOM tag */
  as: oneOfType([func, object, string]),

  /** control focusability */
  tabIndex: number,

  /** Color, gradient, image url or svg to be rendered as a preview content */
  fill: oneOfType([string, node]),

  /** Outlines the border when set to true */
  selected: bool,

  /** Pass your handler for click event */
  onClick: func,

  /** Puts the component into a disabled state */
  disabled: bool,

  /** Control elements aspect ratio value:  */
  aspectRatio: oneOfType([string, number]),
};

FillPreview.defaultProps = {
  selected: false,
};

export default FillPreview;
