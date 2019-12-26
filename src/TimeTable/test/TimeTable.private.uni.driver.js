import { timeTableDriverFactory as publicDriverFactory } from '../TimeTable.uni.driver';

export const timeTablePrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
