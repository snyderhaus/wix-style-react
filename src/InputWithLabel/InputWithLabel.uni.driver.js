import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { labelledElementDriverFactory as labelledElementUniDriverFactory } from '../LabelledElement/LabelledElement.uni.driver';
import styles from './InputWithLabel.st.css';
import dataHooks from './dataHooks';

export const inputWithLabelDriverFactory = base => {
  const inputWrapperSelector = `[data-hook="${dataHooks.input}"]`;
  const labelledElementSelector = `[data-hook="${dataHooks.labelledElement}"]`;
  const statusMessageSelector = `[data-hook="${dataHooks.errorMessage}"]`;

  const inputDriver = inputUniDriverFactory(base.$(inputWrapperSelector));
  const labelledElementDriver = labelledElementUniDriverFactory(
    base.$(labelledElementSelector),
  );
  const errorMessageDriver = base.$(statusMessageSelector);

  return {
    ...baseUniDriverFactory(base),
    /** Gets the amount of rendered suffixes */
    getSuffixesCount: () => base.$$(`.${styles.groupIcon}`).count(),
    /** Returns true if an error status message exists */
    hasErrorMessage: () => errorMessageDriver.exists(),
    /** Gets the error status message */
    getErrorMessage: () => errorMessageDriver.text(),
    getValue: () => inputDriver.getValue(),
    clickInput: () => inputDriver.click(),
    enterText: value => inputDriver.enterText(value),
    getLabelText: () => labelledElementDriver.getLabelText(),
    isCustomInput: () => inputDriver.isCustomInput(),
    isFocusedStyle: () => inputDriver.isFocusedStyle(),
  };
};
