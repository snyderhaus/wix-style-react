import { listItemSectionDriverFactory as publicDriverFactory } from '../ListItemSection.uni.driver';

export const listItemSectionPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
  };
};
