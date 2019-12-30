import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { labelledElementDriverFactory as labelledElementUniDriverFactory } from '../LabelledElement/LabelledElement.uni.driver';
import dataHooks from './dataHooks';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

export const autoCompleteWithLabelDriverFactory = base => {
  const labelledElementSelector = `[data-hook="${dataHooks.labelledElement}"]`;
  const labelledElementDriver = labelledElementUniDriverFactory(
    base.$(labelledElementSelector),
  );
  const inputWrapperSelector = `[data-hook="${dataHooks.inputWithLabel}"]`;
  const inputDriver = inputUniDriverFactory(base.$(inputWrapperSelector));

  const dropdownLayoutDriver = dropdownLayoutDriverFactory(
    base.$(`[data-hook="${dataHooks.inputDropdownLayout}"]`),
  );
  return {
    ...baseUniDriverFactory(base),
    getLabelText: () => labelledElementDriver.getLabelText(),
    getValue: () => inputDriver.getValue(),
    enterText: async text => inputDriver.enterText(text),
    clickAtOption: async optionIndex => {
      await inputDriver.click();
      return dropdownLayoutDriver.clickAtOption(optionIndex);
    },
    clickAtOptionWithValue: async value => {
      await inputDriver.click();
      return dropdownLayoutDriver.clickAtOptionWithValue(value);
    },
    clickMenuArrow: () => inputDriver.clickMenuArrow(),
    isDisabled: async () => inputDriver.isDisabled(),
    blur: () => inputDriver.blur(),
    hasError: () => inputDriver.hasError(),
  };
};
