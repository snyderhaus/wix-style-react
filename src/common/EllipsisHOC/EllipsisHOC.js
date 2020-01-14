import React, { useMemo } from 'react';
import { withEllipsedTooltipNext } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip';
import { ZIndex } from '../../ZIndex';
import tooltip from './EllipsisHOC.st.css';

export const EllipsisHOC = React.forwardRef(({ Component, props }, ref) => {
  const {
    flip,
    fixed,
    placement,
    timeout,
    appendTo = 'window',
    maxWidth = 204,
    zIndex = ZIndex('Tooltip'),
    hideDelay,
    showDelay,
    ellipsis,
    showTooltip = true,
    ...rest
  } = props;

  const tooltipProps = {
    className: tooltip.root,
    appendTo,
    flip,
    fixed,
    placement,
    timeout,
    maxWidth,
    zIndex,
    hideDelay,
    showDelay,
  };

  const EllipsedComponent = useMemo(
    () =>
      withEllipsedTooltipNext({
        showTooltip,
        tooltipProps,
      })(Component),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...Object.values(tooltipProps), Component, showTooltip],
  );

  return <EllipsedComponent ref={ref} {...rest} />;
});
