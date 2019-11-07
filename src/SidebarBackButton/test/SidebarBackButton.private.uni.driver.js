import { sidebarBackButtonDriverFactory as publicDriverFactory } from '../SidebarBackButton.uni.driver';

export const sidebarBackButtonPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
