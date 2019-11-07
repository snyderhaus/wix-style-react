import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const sidebarBackButtonDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Click the button */
    clickButton: async () => base.click(),

    /** Get the button's text */
    getButtonText: async () => base.text(),
  };
};
