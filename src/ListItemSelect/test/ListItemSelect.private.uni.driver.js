import { listItemSelectDriverFactory as publicDriverFactory } from '../ListItemSelect.uni.driver';

export const listItemSelectPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    /** Returns true iff selected */
    isSelected: async () => JSON.parse(await base.attr('data-selected')),
  };
};
