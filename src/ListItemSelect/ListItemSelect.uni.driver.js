import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { DATAHOOKS } from './ListItemSelect';

const dataHook = dataHook => `[data-hook="${dataHook}"]`;

export const listItemSelectDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get suffix */
    hasCheckbox: base.$(dataHook(DATAHOOKS.CHECKBOX)).exists,

    /** Get prefix */
    getPrefix: () => base.$(dataHook(DATAHOOKS.PREFIX)),

    /** Get title Text */
    getTitle: base.$(dataHook(DATAHOOKS.TITLE)).text,

    /** Get subtitle Text */
    getSubtitle: async () => {
      const subtitleElement = await base.$(dataHook(DATAHOOKS.SUBTITLE));
      if (await subtitleElement.exists()) {
        return subtitleElement.text();
      }
    },

    /** Get suffix */
    getSuffix: () => base.$(dataHook(DATAHOOKS.SUFFIX)),
  };
};
