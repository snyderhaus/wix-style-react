import { dropdownBaseDriverFactory } from '../../DropdownBase/DropdownBase.uni.driver';

export const PopoverMenuDriver = (base, body) => {
  const dropdownBaseTestkit = dropdownBaseDriverFactory(base, body);
  return {
    /** Returns true of popoverMenu exists */
    exists: () => dropdownBaseTestkit.exists(),
    /** Returns trigger element */
    getTriggerElement: dataHook => base.$(`[data-hook="${dataHook}"]`),
    /** Select a specific option by its index (requires the menu to be opened) */
    clickAtChild: index => dropdownBaseTestkit.selectOption(index),
    /** Select a specific option by its data-hook (requires the menu to be opened) */
    clickAtChildByDataHook: dataHook =>
      dropdownBaseTestkit.selectOptionByDataHook(dataHook),
    /** Return true if the menu is opened */
    isMenuOpen: () => dropdownBaseTestkit.isDropdownShown(),
    /** Returns children count */
    childrenCount: () => dropdownBaseTestkit.optionsCount(),
  };
};
