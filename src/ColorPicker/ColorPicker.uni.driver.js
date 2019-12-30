import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const colorPickerUniDriverFactory = base => {
  const getConverter = () => base.$(`[data-hook="color-picker-converter"]`);
  const getConverterTabs = async () => {
    return getConverter().$$(`li`);
  };

  return {
    ...baseUniDriverFactory(base),
    confirm: async () =>
      base.$('[data-hook="color-picker-confirm-button"]').click(),
    cancel: async () =>
      base.$('[data-hook="color-picker-cancel-button"]').click(),
    clickOnPreviousColor: async () =>
      base.$('[data-hook="color-picker-history-previous"]').click(),
    historyPanelExists: async () =>
      base.$('[data-hook="color-picker-history"]').exists(),
    historyCurrentColor: async () =>
      (
        await base
          .$('[data-hook="color-picker-history-current"]')
          ._prop('style')
      ).background,
    historyPreviousColor: async () =>
      (
        await base
          .$('[data-hook="color-picker-history-previous"]')
          ._prop('style')
      ).background,
    clickAddColor: async () =>
      base.$('[data-hook="color-picker-add-color"]').click(),
    getChildren: async () => base.$('[data-hook="color-picker-children"]'),

    selectRgbTab: async () => (await getConverterTabs()).get(1).click(),
    selectHsbTab: async () => (await getConverterTabs()).get(2).click(),
  };
};

export default colorPickerUniDriverFactory;
