import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const proportionDriverFactory = base => {
  const byHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  return {
    ...baseUniDriverFactory(base),

    /** Get the component's aspect ratio */
    getAspectRatio: async () => {
      const width = await base.attr('offsetWidth');
      const height = await base.attr('offsetHeight');
      return width / height;
    },
    isAspectRatioDisabled: async () => byHook('proportion-aspect').exists(),
  };
};
