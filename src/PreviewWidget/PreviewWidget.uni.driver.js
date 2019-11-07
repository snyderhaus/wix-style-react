import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const previewWidgetDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
