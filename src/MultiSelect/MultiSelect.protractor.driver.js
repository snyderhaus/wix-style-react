import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.protractor.driver';

const multiSelectDriverFactory = component => ({
  ...inputWithOptionsDriverFactory(component),

  /** add a tag for the first item in the options */
  addTag: async () => {
    await component.click();
    await inputWithOptionsDriverFactory(component).selectOptionAt(0);
  },

  /** return the element */
  element: () => component,

  /** returns the element height in px */
  getHeight: () => {
    return component.getSize().then(size => {
      return size.height;
    });
  },

  /** returns the element width in px */
  getWidth: () => {
    return component.getSize().then(size => {
      return size.width;
    });
  },
});

export default multiSelectDriverFactory;
