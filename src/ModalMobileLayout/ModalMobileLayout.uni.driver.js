import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const modalMobileLayoutDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Gets the title node */
    getTitle: async () => base.$('[data-hook="modalMobileLayout-title"]'),

    /** Gets the content node */
    getContent: async () => base.$('[data-hook="modalMobileLayout-content"]'),

    /** Gets the footer node */
    getFooter: async () => base.$('[data-hook="modalMobileLayout-footer"]'),

    /** Clicks the overlay */
    clickOverlay: async () => base.click(),

    /** Clicks on the close button */
    clickCloseButton: async () =>
      base.$('[data-hook="modalMobileLayout-close-button"]').click(),

    /** Returns true if the close button exists */
    closeButtonExists: async () =>
      base.$('[data-hook="modalMobileLayout-close-button"]').exists(),
  };
};
