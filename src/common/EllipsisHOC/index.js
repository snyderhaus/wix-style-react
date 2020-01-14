import React from 'react';

import {
  bool,
  oneOf,
  oneOfType,
  element,
  func,
  string,
  number,
} from 'prop-types';

import Ellipsed from './EllipsisHOC';

const validTooltipProps = [
  'flip',
  'fixed',
  'placement',
  'timeout',
  'appendTo',
  'maxWidth',
  'zIndex',
  'hideDelay',
  'showDelay',
  'showTooltip',
];

const omit = (props, remove) => {
  return Object.keys(props)
    .filter(prop => !remove.includes(prop))
    .reduce((res, key) => ({ ...res, [key]: props[key] }), {});
};

const fallbackEllipsis = {
  display: 'inline-block',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: '100%',
  verticalAlign: 'bottom',
  whiteSpace: 'noWrap',
};

const Comp /** @autodocs-component */ = Component => {
  return React.memo(
    React.forwardRef(({ ellipsis, ...props }, ref) => {
      const rest = omit(props, validTooltipProps);

      if (ellipsis) {
        return (
          <Ellipsed
            ref={ref}
            fallback={
              <Component
                style={fallbackEllipsis}
                data-fallback
                ref={ref}
                {...rest}
              />
            }
            Component={Component}
            props={props}
          />
        );
      }

      return <Component ref={ref} {...rest} />;
    }),
  );
};

Comp.propTypes = {
  /** should the text get ellipsed with tooltip, or should it get broken into lines when it reaches the end of its container */
  ellipsis: bool,
  /** `ellipsis` prop. Tooltip content calculation relation to a dom element. Can be either:
   *  `'window', 'scrollParent', 'viewport', 'parent'`, `element` or
   * `function` based predicate i.e. (elm) =>
   *  elm.getAttribute('data-hook') === 'value'
   */
  appendTo: oneOfType([
    oneOf(['window', 'scrollParent', 'viewport', 'parent']),
    element,
    func,
  ]),
  /** `ellipsis` prop. Whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
  flip: bool,
  /** `ellipsis` prop. Whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
  fixed: bool,
  /** `ellipsis` prop. Tooltip content placement in relation to target element */
  placement: string,
  /** `ellipsis` prop. Tooltip timeout value. */
  timeout: number,
  /** `ellipsis` prop. Tooltip content max width value. */
  maxWidth: oneOfType([string, number]),
  /** `ellipsis` prop. Tooltip content zIndex. */
  zIndex: number,
  /** `ellipsis` prop. Tooltip hide delay. */
  hideDelay: number,
  /** `ellipsis` prop. Tooltip show delay. */
  showDelay: number,
  /** `ellipsis` prop. Whether to enable the tooltip when an ellipsis is necessary */
  showTooltip: bool,
};

export default Comp;
