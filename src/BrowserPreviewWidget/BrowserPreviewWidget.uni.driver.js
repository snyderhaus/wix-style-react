import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const browserPreviewWidgetDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
