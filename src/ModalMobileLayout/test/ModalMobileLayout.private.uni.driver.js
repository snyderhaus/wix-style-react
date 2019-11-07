import { modalMobileLayoutDriverFactory as publicDriverFactory } from '../ModalMobileLayout.uni.driver';

export const modalMobileLayoutPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    /** returns true if title exists */
    hasTitle: async () =>
      base.$('[data-hook="modalMobileLayout-title"]').exists(),

    /** returns true if footer exists */
    hasFooter: async () =>
      base.$('[data-hook="modalMobileLayout-footer"]').exists(),

    /** returns true if content exists */
    hasContent: async () =>
      base.$('[data-hook="modalMobileLayout-content"]').exists(),

    /** Returns true if the title is sticky */
    isTitleSticky: async () =>
      (await base
        .$('[data-hook="modalMobileLayout-title"]')
        .attr('data-sticky-title')) === 'true',

    /** Returns true if the footer is sticky */
    isFooterSticky: async () =>
      (await base
        .$('[data-hook="modalMobileLayout-footer"]')
        .attr('data-sticky-footer')) === 'true',

    /** Scrolls to the bottom of the window */
    scrollToBottom: () => {
      window.scrollTo(0, 3000);
    },
  };
};
