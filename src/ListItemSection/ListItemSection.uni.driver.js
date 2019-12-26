import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { DATAHOOKS } from './ListItemSection';

const dataHook = dataHook => `[data-hook="${dataHook}"]`;

export const listItemSectionDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get title Text */
    getTitle: base.$(dataHook(DATAHOOKS.TITLE)).text,

    /** Get suffix */
    getSuffix: () => base.$(dataHook(DATAHOOKS.SUFFIX)),
  };
};
