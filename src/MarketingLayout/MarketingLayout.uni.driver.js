import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import {
  MARKETING_LAYOUT_TITLE,
  MARKETING_LAYOUT_DESCRIPTION,
} from './dataHooks';

export const marketingLayoutDriverFactory = base => {
  const byHook = dataHook => `[data-hook="${dataHook}"]`;
  return {
    ...baseUniDriverFactory(base),

    /** Get title text */
    getTitleText: async () => base.$(byHook(MARKETING_LAYOUT_TITLE)).text(),

    /** Get description text */
    getDescriptionText: async () =>
      base.$(byHook(MARKETING_LAYOUT_DESCRIPTION)).text(),
  };
};
