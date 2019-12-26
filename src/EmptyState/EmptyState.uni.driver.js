import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';

export const emptyStateUniDriverFactory = base => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const getTitleContainer = () => byDataHook('empty-state-title-container');
  const getSubtitleContainer = () =>
    byDataHook('empty-state-subtitle-container');
  const getImageContainer = () => byDataHook('empty-state-image-container');
  const getChildrenContainer = () =>
    byDataHook('empty-state-children-container');

  const getTitle = () => getTitleContainer().$(':first-child');
  const getSubtitle = () => getSubtitleContainer().$(':first-child');
  const getImageElement = () =>
    getImageContainer().$('[data-hook="image-element"]');
  const getImageNode = () => getImageContainer().$('[data-hook="image-node"]');

  return {
    ...baseUniDriverFactory(base),

    /** Returns the element */
    element: () => base.getNative(), // eslint-disable-line no-restricted-properties

    /** Returns the text of the title */
    getTitleText: async () => getTitle().text(),

    /** Returns the text of the subtitle */
    getSubtitleText: async () => getSubtitle().text(),

    /** Returns true if the component was configured with given theme */
    hasTheme: themeName => base.hasClass(themeName),

    /** Returns the URL of the image element (if persist) */
    getImageUrl: () => getImageElement()._prop('src') || '',

    getImageContainerClassName: async () => {
      const classList = await ReactBase(
        getImageContainer(),
      )._DEPRECATED_getClassList();
      return classList;
    },

    /** Returns `true` if a node passed via the `image` prop exists */
    imageNodeExists: () => getImageNode().exists(),

    /** Returns `true` if children content exists */
    childrenContentExists: () => getChildrenContainer().exists(),

    /** Returns true if the component was configured with given align */
    hasAlign: align => base.hasClass(`align-${align}`),
  };
};
