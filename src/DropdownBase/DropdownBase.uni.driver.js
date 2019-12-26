import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

import testkit from '../Popover/Popover.uni.driver';
import popoverCommonDriverFactory from '../Popover/Popover.common.uni.driver';

export const dropdownBaseDriverFactory = (base, body) => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  const getTargetElement = dataHook => byDataHook(dataHook);
  const getContentElement = async () =>
    popoverCommonDriverFactory(base, body).getContentElement();

  const createDropdownLayoutDriver = async () =>
    dropdownLayoutDriverFactory(
      (await getContentElement()).$(
        `[data-hook="dropdown-base-dropdownlayout"]`,
      ),
    );

  return {
    ...baseUniDriverFactory(base),

    /** Returns the target element */
    clickTargetElement: dataHook => getTargetElement(dataHook).click(),

    /** Hover the target element */
    hoverTargetElement: dataHook => getTargetElement(dataHook).hover(),

    /** Returns `true` if the dropdown is being shown */
    isDropdownShown: () => testkit(base, body).isContentElementExists(),

    /** Select a specific option (requires the DropdownBase to be opened) */
    selectOption: async index =>
      (await createDropdownLayoutDriver()).clickAtOption(index),

    /** Select a specific option by its data hook (requires the DropdownBase to be opened) */
    selectOptionByDataHook: async dataHook =>
      (await createDropdownLayoutDriver()).clickAtOptionByDataHook(dataHook),

    /** Click outside of the component */
    clickOutside: () => testkit(base, body).clickOutside(),

    /** Options count */
    optionsCount: async () =>
      (await createDropdownLayoutDriver()).optionsLength(),

    mouseEnter: () => testkit(base, body).mouseEnter(),
    mouseLeave: () => testkit(base, body).mouseLeave(),
  };
};
