import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import styles from './Input.scss';
import { ReactBase } from '../../test/utils/unidriver';
import DATA_ATTR from './DataAttr';

export const testkit = base => {
  // single $ throws an exception for more than 1 match, so we use the first matching result with $$
  // to support cases of multiple inputs, e.g cases where this driver is used inside other drivers with popovers
  // which includes an input
  const input = base.$$('input').get(0);

  const reactBase = ReactBase(base);
  const reactBaseInput = ReactBase(input);

  const clearButtonNode = base.$(`[data-hook=input-clear-button]`);
  const unitNode = base.$(`.${styles.unit}`);
  const menuArrowNode = base.$(`.${styles.menuArrow}`);
  const magnifyingGlassNode = base.$(`.${styles.magnifyingGlass}`);

  const driver = {
    ...baseUniDriverFactory(base),
    click: () => input.click(),
    getInputElementClasses: async () =>
      await reactBaseInput._DEPRECATED_getClassList(),
    suffixComponentExists: async className =>
      await base.$(`.${styles.suffix} ${className}`).exists(),
    getRootElementClasses: async () =>
      await reactBase._DEPRECATED_getClassList(),
    getAriaDescribedby: async () => await input.attr('aria-describedby'),
    getAriaLabel: async () => await input.attr('aria-label'),
    getName: async () => await input.attr('name'),
    getMaxLength: async () => await input.attr('maxLength'),
    getType: async () => await input.attr('type'),
    getAriaControls: async () => await input.attr('aria-controls'),
    clickIconAffix: async () =>
      await base.$(`[data-hook="icon-affix"]`).click(),
    clickCustomAffix: async () =>
      await base.$(`[data-hook="custom-affix"]`).click(),
    isMenuArrowLast: async () => {
      const selector = `.${styles.suffixes} .${styles.suffix}:last-child > .${styles.menuArrow}`;
      return (await base.$$(selector).count()) === 1;
    },
    hasSuffixesClass: async () =>
      (await base.$$(`.${styles.input}.${styles.withSuffixes}`).count()) === 1,
    hasSuffixClass: async () =>
      (await base.$$(`.${styles.input}.${styles.withSuffix}`).count()) === 1,
    hasSuffix: async () => await base.$(`.${styles.suffix}`).exists(),
    hasPrefixClass: async () =>
      (await base.$$(`.${styles.input}.${styles.withPrefix}`).count()) === 1,
    prefixComponentExists: async style =>
      (await base.$$(`.${styles.prefix} ${style}`).count()) === 1,
    hasPrefix: async () => (await base.$$(`.${styles.prefix}`).count()) === 1,
    hasClearButton: async () => await clearButtonNode.exists(),
    clickClear: async () => await clearButtonNode.click(),
    getValue: async () => await input.value(),
    getText: async () => await input.value(),
    getPattern: async () => await input.attr('pattern'),
    getPlaceholder: async () => await input.attr('placeholder'),
    isOfStyle: async style => await base.hasClass(styles[`theme-${style}`]),
    isOfSize: async size => await base.hasClass(styles[`size-${size}`]),
    getSize: async () => await base.attr(DATA_ATTR.DATA_SIZE),
    isDisabled: async () => await base.hasClass(styles.disabled),
    isHoveredStyle: async () => await base.hasClass(styles.hasHover),
    isFocusedStyle: async () => await base.hasClass(styles.hasFocus),
    getRequired: async () => await input._prop('required'),
    enterText: async value => await input.enterValue(value),
    getAutocomplete: async () => await input.attr('autocomplete'),
    getDefaultValue: async () => await input._prop('defaultValue'),
    getUnit: async () => {
      return await unitNode.text();
    },
    getTabIndex: async () => await input._prop('tabIndex'),
    isCustomInput: async () =>
      (await input.attr('data-hook')) === 'wsr-custom-input',
    getReadOnly: async () => await input._prop('readOnly'),
    getDisabled: async () => await input._prop('disabled'),
    getTextOverflow: async () => (await input._prop('style'))['text-overflow'],
    hasExclamation: async () => await base.$(`.${styles.exclamation}`).exists(),
    hasError: async () => await base.hasClass(styles.hasError),
    hasWarning: async () => await base.hasClass(styles.hasWarning),
    hasLoader: async () => {
      // There actually should be only 1  element with `.loaderContainer`, this is a component bug that there are actually 2.
      return (await base.$$(`.${styles.loaderContainer}`).count()) > 0;
    },

    focus: async () => await reactBaseInput.focus(),
    blur: async () => await reactBaseInput.blur(),
    keyUp: async () => await reactBaseInput.keyUp(),
    keyDown: async eventData => await reactBaseInput.keyDown(eventData),
    paste: async () => await reactBaseInput.paste(),
    trigger: async (value, event) => {
      if (value === 'focus') {
        return await driver.focus();
      }
      if (value === 'blur') {
        return await driver.blur();
      }
      if (value === 'keyUp') {
        return await driver.keyUp();
      }
      if (value === 'keyDown') {
        return await driver.keyDown(event);
      }
      if (value === 'paste') {
        return await driver.paste();
      }
      if (value === 'change') {
        return await driver.enterText(value);
      }
    },
    isFocus: async () => await reactBaseInput.isFocus(),
    hasHelp: async () => await base.$(`.${styles.help}`).exists(),
    clickUnit: async () => await unitNode.click(),
    hasMagnifyingGlass: async () => await magnifyingGlassNode.exists(),
    clickMagnifyingGlass: async () => await magnifyingGlassNode.click(),
    clickMenuArrow: async () => await menuArrowNode.click(),
    hasMenuArrow: async () => await menuArrowNode.exists(),
    isNarrowError: async () => await base.$(`.${styles.narrow}`).exists(),
    isRTL: async () => await base.hasClass(styles.rtl),
    getCursorLocation: async () => await input._prop('selectionStart'),
    clearText: () => driver.enterText(''),
    clickOutside: () => ReactBase.clickDocument(),
  };

  return driver;
};

export default testkit;
