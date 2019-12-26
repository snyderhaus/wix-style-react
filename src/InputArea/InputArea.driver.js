import ReactTestUtils from 'react-dom/test-utils';

import styles from './InputArea.scss';
import { tooltipDataHook } from '../ErrorIndicator/ErrorIndicator';
import { errorIndicatorDriverFactory } from '../ErrorIndicator/ErrorIndicator.driver';
import { warningIndicatorDriverFactory } from '../WarningIndicator/WarningIndicator.driver';

const inputAreaDriverFactory = ({ element }) => {
  const textAreaElement = element && element.childNodes[0];
  const textArea = element.querySelector('textarea');
  const name = textArea.getAttribute('name');
  const counterSelector = '[data-hook="counter"]';
  const indicatorSelector = '[data-hook="inputArea-tooltip"]';
  const errorIndicatorTestkit = () =>
    errorIndicatorDriverFactory({
      element: element.querySelector(indicatorSelector),
    });
  const warningIndicatorTestkit = () =>
    warningIndicatorDriverFactory({
      element: element.querySelector(indicatorSelector),
    });

  return {
    trigger: (trigger, event) =>
      ReactTestUtils.Simulate[trigger](textArea, event),
    focus: () => textArea.focus(),
    enterText: text => {
      textArea.value = text;
      ReactTestUtils.Simulate.change(textArea, {
        target: { name, value: text },
      });
    },
    getValue: () => textArea.value,
    getName: () => name,
    getPlaceholder: () => textArea.placeholder,
    getDefaultValue: () => textArea.defaultValue,
    getRowsCount: () => textArea.rows,
    getMaxLength: () => textArea.maxLength,
    getTabIndex: () => textArea.tabIndex,
    getReadOnly: () => textArea.readOnly,
    getResizable: () => textAreaElement.classList.contains(styles.resizable),
    getDisabled: () =>
      textAreaElement.classList.contains(styles.disabled) && textArea.disabled,
    getHasCounter: () => !!element.querySelectorAll(counterSelector).length,
    getCounterValue: () => element.querySelector(counterSelector).textContent,
    hasExclamation: () =>
      element.querySelectorAll(`.${styles.exclamation}`).length === 1,
    hasError: () => textAreaElement.classList.contains(styles.hasError),
    hasWarning: () => textAreaElement.classList.contains(styles.hasWarning),
    isFocusedStyle: () => textAreaElement.classList.contains(styles.hasFocus),
    isSizeSmall: () => textArea.classList.contains(styles.sizeSmall),
    isHoveredStyle: () => textAreaElement.classList.contains(styles.hasHover),
    isOfStyle: style =>
      textAreaElement.classList.contains(styles[`theme-${style}`]),
    isFocus: () => document.activeElement === textArea,
    exists: () => !!textArea,
    getStyle: () => textArea.style,
    getAriaLabel: () => textArea.getAttribute('aria-label'),
    getAriaControls: () => textArea.getAttribute('aria-controls'),
    getAriaDescribedby: () => textArea.getAttribute('aria-describedby'),
    // TODO: get the dataHook using the <ErrorIndicator/> driver
    getTooltipDataHook: () => tooltipDataHook,
    getTooltipElement: () => element,
    isErrorMessageShown: () => errorIndicatorTestkit().isShown(),
    mouseEnterErrorIndicator: () => errorIndicatorTestkit().mouseEnter(),
    // getErrorMessage - deprecated
    getErrorMessage: () => errorIndicatorTestkit().getErrorMessage(),
    getStatusMessage: () =>
      errorIndicatorTestkit().getErrorMessage() ||
      warningIndicatorTestkit().getWarningMessage(),
  };
};

export default inputAreaDriverFactory;
