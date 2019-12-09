import ReactTestUtils from 'react-dom/test-utils';

const messageBoxMarketerialLayoutDriverFactory = ({ element }) => {
  const primaryButton = () =>
    element.querySelector('[data-hook="primary-button"]');
  const primaryButtonNode = () =>
    element.querySelector('[data-hook="primary-button-node"]');
  const secondaryButton = () =>
    element.querySelector('[data-hook="secondary-button"]');
  const closeButton = () => element.querySelector('[data-hook="close-button"]');

  return {
    exists: () => !!element,
    getPrimaryButtonText: () => primaryButton().textContent,
    getPrimaryButton: primaryButton,
    getPrimaryButtonNode: primaryButtonNode,
    getSecondaryButtonText: () => secondaryButton().textContent,
    getSecondaryButton: secondaryButton,
    getHeaderCloseButton: closeButton,
    clickOnPrimaryButton: () => ReactTestUtils.Simulate.click(primaryButton()),
    clickOnSecondaryButton: () =>
      ReactTestUtils.Simulate.click(secondaryButton()),
    closeMessageBox: () => ReactTestUtils.Simulate.click(closeButton()),
    getTitle: () =>
      element.querySelector('[data-hook="message-box-title"]').textContent,
    getContentBySelector: selector => element.querySelector(selector),
    getImageSrc: () => element.querySelector('[data-hook="header-image"]').src,
  };
};

export default messageBoxMarketerialLayoutDriverFactory;
