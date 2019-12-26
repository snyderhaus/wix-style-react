import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Loadable } from 'wix-ui-core/dist/src/components/loadable';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import CircleLoaderCheck from 'wix-ui-icons-common/system/CircleLoaderCheck';
import CircleLoaderCheckSmall from 'wix-ui-icons-common/system/CircleLoaderCheckSmall';

import WixComponent from '../BaseComponents/WixComponent';
import Arc from './Arc';
import css from './Loader.scss';
import Heading from '../Heading';

const arcsAngles = {
  tiny: {
    light: 216,
    dark: 144,
  },
  small: {
    light: 216,
    dark: 144,
  },
  medium: {
    light: 108,
    dark: 108,
  },
  large: {
    light: 180,
    dark: 180,
  },
};
const strokeWidths = {
  tiny: 3,
  small: 4,
  medium: 4,
  large: 4,
};
const sizesInPx = {
  tiny: 18,
  small: 30,
  medium: 54,
  large: 102,
};

const FULL_CIRCLE_ANGLE = 359;

const sizeToSuccessIcon = {
  tiny: <ToggleOn />,
  small: <CircleLoaderCheckSmall />,
  medium: <CircleLoaderCheck />,
  large: <CircleLoaderCheck />,
};

const sizeToErrorIcon = {
  tiny: <FormFieldError />,
  small: <FormFieldErrorSmall />,
  medium: <FormFieldError />,
  large: <FormFieldError />,
};

export default class Loader extends WixComponent {
  static displayName = 'Loader';

  static propTypes = {
    /** The size of the loader */
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),

    /** The color of the loader */
    color: PropTypes.oneOf(['blue', 'white']),

    /** Node (usually text) to be shown below the loader */
    text: PropTypes.node,

    /** The status of the loader */
    status: PropTypes.oneOf(['loading', 'success', 'error']),

    /** Text to be shown in the tooltip **/
    statusMessage: PropTypes.string,

    /** load Tooltip async using dynamic import */
    shouldLoadAsync: PropTypes.bool,
  };

  static defaultProps = {
    size: 'medium',
    color: 'blue',
    status: 'loading',
    shouldLoadAsync: false,
  };

  render() {
    const { size, color, text, status, statusMessage } = this.props;
    const sizeInPx = sizesInPx[size];
    const shouldShowFullCircle = status !== 'loading';
    const lightArcAngle = !shouldShowFullCircle
      ? arcsAngles[size].light
      : FULL_CIRCLE_ANGLE;
    const darkArcAngle = !shouldShowFullCircle
      ? arcsAngles[size].dark
      : FULL_CIRCLE_ANGLE;
    const shouldShowText = size !== 'tiny';
    const successIcon = sizeToSuccessIcon[size];
    const errorIcon = sizeToErrorIcon[size];
    const strokeWidth = strokeWidths[size];

    const loader = (
      <div
        className={css.arcsContainer}
        style={{
          width: `${sizeInPx}px`,
          height: `${sizeInPx}px`,
        }}
      >
        <Arc
          angle={lightArcAngle}
          className={css.lightArc}
          strokeWidth={strokeWidth}
          viewBoxSize={sizeInPx}
        />
        <Arc
          angle={darkArcAngle}
          className={css.darkArc}
          strokeWidth={strokeWidth}
          viewBoxSize={sizeInPx}
        />
        {status !== 'loading' && (
          <div className={css.statusIndicator}>
            {status === 'success' && successIcon}
            {status === 'error' && errorIcon}
          </div>
        )}
      </div>
    );

    return (
      <div
        className={classNames(
          css.loaderContainer,
          css[size],
          css[color],
          css[status],
        )}
      >
        <Loadable
          loader={{
            Tooltip: () =>
              this.props.shouldLoadAsync
                ? import('../Tooltip')
                : require('../Tooltip'),
          }}
          namedExports={
            /* Remove when https://github.com/wix/wix-ui/pull/1352 will be merged */
            {}
          }
          defaultComponent={loader}
          shouldLoadComponent={statusMessage}
        >
          {({ Tooltip }) => {
            return (
              <Tooltip
                upgrade
                appendTo="window"
                dataHook="loader-tooltip"
                content={statusMessage}
              >
                {loader}
              </Tooltip>
            );
          }}
        </Loadable>
        {shouldShowText && text && (
          <div className={css.text}>
            <Heading appearance="H6" dataHook="loader-text">
              {this.props.text}
            </Heading>
          </div>
        )}
      </div>
    );
  }
}
