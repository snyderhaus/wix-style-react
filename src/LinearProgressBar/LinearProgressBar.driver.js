import { linearProgressBarDriverFactory as coreLinearProgressBarDriverFactory } from 'wix-ui-core/drivers/vanilla';
import { tooltipDriverFactory } from 'wix-ui-backoffice/dist/src/components/Tooltip/Tooltip.driver';
import { dataHooks, SKINS } from './constants';

const linearProgressBarDriverFactory = ({ element, eventTrigger, wrapper }) => {
  const createTooltipDriver = () =>
    tooltipDriverFactory({
      element: element.querySelector(`[data-hook='${dataHooks.tooltip}']`),
      wrapper,
      eventTrigger,
    });

  const coreProgressBarDriver = coreLinearProgressBarDriverFactory({
    element,
    wrapper,
    eventTrigger,
  });

  const errorIcon = () =>
    element.querySelector(`[data-hook='${dataHooks.errorIcon}']`);
  const successIcon = () =>
    element.querySelector(`[data-hook='${dataHooks.successIcon}']`);
  const getTooltip = () => createTooltipDriver();

  return {
    ...coreProgressBarDriver,
    isTooltipShown: () => getTooltip().isContentElementExists(),
    getTooltip,
    isErrorIconShown: () => !!errorIcon(),
    isSuccessIconShown: () => !!successIcon(),
    getTooltipErrorMessage: async () => {
      await getTooltip().mouseEnter();
      return getTooltip().getContentElement().textContent;
    },
    getSkin: () => element.getAttribute('data-skin'),
  };
};

export default linearProgressBarDriverFactory;
