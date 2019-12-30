import { testkit as inputTestkit } from '../../Input/Input.uni.driver';

export default (base, body) => {
  const getButtons = () => base.$$(`[data-hook*="richtextarea-button"]`);
  const getButtonByType = type =>
    base.$(`[data-hook*="richtextarea-button-${type}"]`);
  const insertUrl = url => {
    const urlInputDriver = inputTestkit(
      base.$('[data-hook="richtextarea-form-link-url"]'),
    );

    return urlInputDriver.enterText(url);
  };

  return {
    getButtonTypes: () =>
      getButtons().map(async button =>
        (await button.attr('data-hook')).replace(/^richtextarea-button-/, ''),
      ),
    getBoldButton: () => getButtonByType('bold'),
    getItalicButton: () => getButtonByType('italic'),
    getUnderlineButton: () => getButtonByType('underline'),
    getBulletedListButton: () => getButtonByType('unordered-list-item'),
    getNumberedListButton: () => getButtonByType('ordered-list-item'),
    getLinkButton: () => getButtonByType('link'),
    isFormConfirmButtonDisabled: async () =>
      Boolean(
        (
          await base
            .$('[data-hook=richtextarea-form-confirm-button]')
            .getNative()
        ).attributes.disabled,
      ),
    isFormDisplayed: () => base.$('[data-hook=richtextarea-form]').exists(),
    clickBoldButton: () => getButtonByType('bold').click(),
    clickItalicButton: () => getButtonByType('italic').click(),
    clickUnderlineButton: () => getButtonByType('underline').click(),
    clickBulletedListButton: () =>
      getButtonByType('unordered-list-item').click(),
    clickNumberedListButton: () => getButtonByType('ordered-list-item').click(),
    clickLinkButton: () => getButtonByType('link').click(),
    clickFormCancelButton: () =>
      base.$('[data-hook="richtextarea-form-cancel-button"]').click(),
    insertUrl,
    insertLink: async (text, url) => {
      const textInputDriver = inputTestkit(
        base.$('[data-hook="richtextarea-form-link-text"]'),
      );
      const submitButton = base.$(
        '[data-hook="richtextarea-form-confirm-button"]',
      );

      await textInputDriver.enterText(text);
      await insertUrl(url);
      await submitButton.click();
    },
  };
};
