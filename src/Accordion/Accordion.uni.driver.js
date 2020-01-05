import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { getItemAt } from './utils';
import { dataHooks } from './constants';

const accordionDriverFactory = base => ({
  ...baseUniDriverFactory(base),

  getItemTitleAt: idx =>
    getItemAt(idx, base)
      .$('[data-hook="title"]')
      .text(),

  isIconExistsAt: idx =>
    getItemAt(idx, base)
      .$('[data-hook="icon"]')
      .exists(),

  isItemExpandedAt: idx =>
    getItemAt(idx, base)
      .$('[data-hook="children"]')
      .exists(),

  clickToggleButtonAt: idx =>
    getItemAt(idx, base)
      .$('[data-hook="toggle-accordion-wrapper"]')
      .click(),

  clickHeaderAt: idx =>
    getItemAt(idx, base)
      .$('[data-hook="header"]')
      .click(),

  getToggleButtonLabelAt: idx =>
    getItemAt(idx, base)
      .$(
        `[data-hook="toggle-accordion-wrapper"] [data-hook="${dataHooks.toggleButton}"]`,
      )
      .text(),
});

export default accordionDriverFactory;
