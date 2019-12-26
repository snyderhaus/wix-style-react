import { marketingLayoutDriverFactory as publicDriverFactory } from '../MarketingLayout.uni.driver';

export const marketingLayoutPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
  };
};
