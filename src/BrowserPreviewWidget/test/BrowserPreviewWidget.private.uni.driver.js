import { browserPreviewWidgetDriverFactory as publicDriverFactory } from '../BrowserPreviewWidget.uni.driver';
import { dataHooks } from '../constants';

export const browserPreviewWidgetPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    /** Get browser content area node */
    getBrowserContent: () =>
      base.$(`[data-hook="${dataHooks.browserContent}"]`),
  };
};
