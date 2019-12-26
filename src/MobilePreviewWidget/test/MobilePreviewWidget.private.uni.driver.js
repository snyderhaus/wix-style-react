import { mobilePreviewWidgetDriverFactory as publicDriverFactory } from '../MobilePreviewWidget.uni.driver';
import { dataHooks } from '../constants';

export const mobilePreviewWidgetPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    /** Get mobile content area node */
    getMobileContent: () => base.$(`[data-hook="${dataHooks.mobileContent}"]`),
  };
};
