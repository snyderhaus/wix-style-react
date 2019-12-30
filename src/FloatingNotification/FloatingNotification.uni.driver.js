import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const floatingNotificationDriverFactory = base => {
  const getByDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const notificationButton = getByDataHook(dataHooks.button);
  const notificationTextButton = getByDataHook(dataHooks.textButton);
  const notificationCloseButton = getByDataHook(dataHooks.closeButton);
  const notificationText = getByDataHook(dataHooks.notificationText);

  return {
    ...baseUniDriverFactory(base),

    /** Click the button */
    clickButton: async () => notificationButton.click(),

    /** Get the button's text */
    getButtonLabel: async () => notificationButton.text(),

    /** Click the text button */
    clickTextButton: async () => notificationTextButton.click(),

    /** Get the text button's text */
    getTextButtonLabel: async () => notificationTextButton.text(),

    /** Click the button */
    clickCloseButton: async () => notificationCloseButton.click(),

    /** get notification text */
    getText: async () => notificationText.text(),

    /** get button tag name */
    isButtonAs: async as =>
      await base.$(`${as}[data-hook="${dataHooks.button}"]`).exists(),

    /** get button href */
    getButtonHref: async () => notificationButton.attr('href'),

    /** get button attribute by name */
    getButtonAttr: async attrName => notificationButton.attr(attrName),

    /** get text button tag name */
    isTextButtonAs: async as =>
      await base.$(`${as}[data-hook="${dataHooks.textButton}"]`).exists(),

    /** get text button href */
    getTextButtonHref: async () => notificationTextButton.attr('href'),

    /** get text button attribute by name */
    getTextButtonAttr: async attrName => notificationTextButton.attr(attrName),
  };
};
