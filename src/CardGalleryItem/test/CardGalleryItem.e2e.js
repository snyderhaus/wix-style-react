import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';

import { eyesItInstance } from '../../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { cardGalleryItemTestkitFactory } from '../../../testkit/protractor';
import { storySettings, testStories } from '../docs/storySettings';

const autoExampleUrl = createTestStoryUrl({
  ...storySettings,
  testName: testStories.cardGalleryItem,
});

describe('CardGalleryItem', () => {
  const eyes = eyesItInstance();
  let driver;

  const createDriver = async (dataHook = storySettings.dataHook) => {
    driver = cardGalleryItemTestkitFactory({ dataHook });

    await waitForVisibilityOf(
      await driver.element(),
      'Cannot find CardGalleryItem',
    );
    await scrollToElement(await driver.element());

    return driver;
  };

  beforeEach(async () => {
    await browser.get(autoExampleUrl);
    await createDriver();
  });

  describe('on hover', () => {
    beforeEach(async () => {
      browser
        .actions()
        .mouseMove(await driver.element())
        .perform();
    });

    eyes.it('should be rendered correctly', async () => {
      expect(await driver.getPrimaryActionLabel()).toBe('Button');
      expect(await driver.getSecondaryActionLabel()).toBe('Text Link');
    });
  });
});
