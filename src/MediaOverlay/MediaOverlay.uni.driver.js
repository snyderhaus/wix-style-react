import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const mediaOverlayDriverFactory = base => {
  const getMediaUrl = async () => {
    const style = await base.attr('style');
    const matches = style && style.match(/url\("?([^"]*)"?\)/);
    return matches ? matches[1] : null;
  };

  return {
    ...baseUniDriverFactory(base),

    /** Hover on element. */
    hover: async () => await base.hover(),

    /** Get media URL value. */
    getMediaUrl,

    /** Get custom media element node. */
    getMediaNode: async () => {
      const mediaUrl = await getMediaUrl();
      if (mediaUrl !== null) {
        return null;
      }

      // eslint-disable-next-line no-restricted-properties
      return await base.$(':first-child').getNative();
    },

    /** Get default state skin. */
    getSkin: async () => await base.attr('data-skin'),

    /** Get hover state skin. */
    getHoverSkin: async () => await base.attr('data-hoverskin'),
  };
};
