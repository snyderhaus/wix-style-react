import { dataHooks } from './constants';
import {
  tooltipDriverFactory as tooltipUniDriverFactory,
  linearProgressBarUniDriverFactory as coreLinearProgressBarUniDriverFactory,
} from 'wix-ui-core/drivers/unidriver';

export const linearProgressBarDriverFactory = (base, body) => {
  const tooltip = base.$(`[data-hook="${dataHooks.tooltip}"]`);

  const createTooltipDriver = () => tooltipUniDriverFactory(tooltip, body);
  const coreProgressBarDriver = coreLinearProgressBarUniDriverFactory(base);

  const errorIcon = base => base.$(`[data-hook=${dataHooks.errorIcon}]`);
  const successIcon = base => base.$(`[data-hook=${dataHooks.successIcon}]`);
  const getTooltip = () => createTooltipDriver();

  return {
    ...coreProgressBarDriver,

    /** Checks whether tooltip is shown */
    isTooltipShown: () => getTooltip().tooltipExists(),

    /** Returns tooltip driver */
    getTooltip,

    /** Checks whether error icon is shown */
    isErrorIconShown: () => errorIcon(base).exists(),

    /** Checks whether success icon is shown */
    isSuccessIconShown: () => successIcon(base).exists(),

    /** Returns the tooltip error message */
    getTooltipErrorMessage: () => getTooltip().getTooltipText(),

    /** Returns the linear progress bar skin */
    getSkin: () => base.attr('data-skin'),
  };
};
