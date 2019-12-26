import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';
import popoverDriverFactory from '../Popover/Popover.uni.driver';
import {
  isFocused,
  protractorUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/protractor';
import { dropdownLayoutDriverProxy } from './InputWithOptions.proxy.driver';
import inputDriverFactory from '../Input/Input.private.protractor.driver';

const popoverTestkitFactory = protractorUniTestkitFactoryCreator(
  popoverDriverFactory,
);

const getPopoverTestkit = async component => {
  return popoverTestkitFactory({
    dataHook: await component.getAttribute('data-hook'),
  });
};

const dropdownLayoutSelector = `[data-hook="inputwithoptions-dropdownlayout"]`;

const driverFactory = component => {
  const getDropdownLayoutDriver = async () => {
    const popoverTestkit = await getPopoverTestkit(component);
    const contentElement = await popoverTestkit.getContentElement();
    return dropdownLayoutDriverFactory(
      contentElement.$(dropdownLayoutSelector),
    );
  };
  const dropdownLayoutDummy = () => dropdownLayoutDriverFactory(component);
  const input = component.$(`input`);
  const inputDriver = inputDriverFactory(component.$('[data-input-parent]'));

  const dropdownLayoutDriver = dropdownLayoutDriverProxy(
    dropdownLayoutDummy,
    getDropdownLayoutDriver,
    () => getPopoverTestkit(component),
    { click: () => inputDriver.click() },
  );
  return {
    ...dropdownLayoutDriver,
    click: () => inputDriver.click(),
    getInput: () => input,
    isFocused: () => isFocused(input),
    element: () => component,
    /** Check whether the options dropdown is open */
    isOptionsShown: async () => {
      const popoverTestkit = await getPopoverTestkit(component);
      return await popoverTestkit.isContentElementExists();
    },
    enterText: text => input.clear().sendKeys(text),
    selectOptionAt: async index => {
      const dropdownLayoutTestkit = await getDropdownLayoutDriver();
      await input.click();
      return dropdownLayoutTestkit.selectOptionAt(index);
    },
    pressEnter: () => inputDriver.pressEnter(),
  };
};

export default driverFactory;
