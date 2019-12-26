import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const mobilePreviewWidgetDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
