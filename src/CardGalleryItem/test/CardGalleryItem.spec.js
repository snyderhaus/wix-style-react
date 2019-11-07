import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import CardGalleryItem from '..';
import Badge from '../../Badge';
import cardGalleryItemDriverFactory from './CardGalleryItem.private.uni.driver';

describe('CardGalleryItem', () => {
  const createDriver = createUniDriverFactory(cardGalleryItemDriverFactory);

  it('should exist', async () => {
    const driver = createDriver(<CardGalleryItem />);

    expect(await driver.exists()).toBeTruthy();
  });

  it('should not render title by default', async () => {
    const driver = createDriver(<CardGalleryItem />);

    expect(await driver.getTitle()).toBeNull();
  });

  it('should render title', async () => {
    const driver = createDriver(<CardGalleryItem title="Card" />);

    expect(await driver.getTitle()).toBe('Card');
  });

  it('should not render subtitle by default', async () => {
    const driver = createDriver(<CardGalleryItem />);

    expect(await driver.getSubtitle()).toBeNull();
  });

  it('should render subtitle', async () => {
    const driver = createDriver(<CardGalleryItem subtitle="Subtitle" />);

    expect(await driver.getSubtitle()).toBe('Subtitle');
  });

  it('should not render badge by default', async () => {
    const driver = createDriver(<CardGalleryItem />);

    expect(await driver.getBadge()).toBeNull();
  });

  it('should render badge', async () => {
    const badge = (
      <Badge size="medium" skin="standard" type="solid" uppercase>
        sale
      </Badge>
    );
    const driver = createDriver(<CardGalleryItem badge={badge} />);

    expect((await driver.getBadge()).textContent).toEqual('sale');
  });

  it('should render backgroundImageNode', async () => {
    const backgroundImageNode = <div>My Component!</div>;
    const driver = createDriver(
      <CardGalleryItem backgroundImageNode={backgroundImageNode} />,
    );

    expect(await driver.getBackgroundImageNode()).toBeTruthy();
  });

  it('should set backgroundImageUrl', async () => {
    const backgroundImageNode = <div>My Component!</div>;
    const driver = createDriver(
      <CardGalleryItem
        backgroundImageNode={backgroundImageNode}
        backgroundImageUrl="http://test.com/img.png"
      />,
    );

    expect(await driver.getBackgroundImageUrl()).toBe(
      'http://test.com/img.png',
    );
  });

  it('should set only backgroundImageUrl and not both backgroundImageUrl & backgroundImageNode', async () => {
    const backgroundImageNode = <div>My Component!</div>;
    const driver = createDriver(
      <CardGalleryItem
        backgroundImageNode={backgroundImageNode}
        backgroundImageUrl="http://test.com/img.png"
      />,
    );

    expect(await driver.getBackgroundImageNode()).toBeNull();
  });

  it('should not render menu by default', async () => {
    const driver = createDriver(<CardGalleryItem />);

    expect(await driver.getSettingsMenu()).toBeNull();
  });

  it('should render menu', async () => {
    const driver = createDriver(
      <CardGalleryItem settingsMenu={<div>menu mock</div>} />,
    );

    expect((await driver.getSettingsMenu()).textContent).toEqual('menu mock');
  });

  it('should set background image', async () => {
    const driver = createDriver(
      <CardGalleryItem backgroundImageUrl="http://test.com/img.png" />,
    );

    expect(await driver.getBackgroundImageUrl()).toBe(
      'http://test.com/img.png',
    );
  });

  it('should not render hovered content', async () => {
    const driver = createDriver(<CardGalleryItem />);

    expect(await driver.getHoveredContent().exists()).toBeFalsy();
  });

  describe('on hover', () => {
    it('should render hovered content', async () => {
      const driver = createDriver(<CardGalleryItem />);

      await driver.hover();

      expect(await driver.getHoveredContent().exists()).toBeTruthy();
    });

    it('on click on card should call once only primary action', async () => {
      const primaryActionOnClick = jest.fn();
      const secondaryActionOnClick = jest.fn();
      const driver = createDriver(
        <CardGalleryItem
          primaryActionProps={{
            onClick: primaryActionOnClick,
          }}
          secondaryActionProps={{
            onClick: secondaryActionOnClick,
          }}
        />,
      );

      await driver.click();

      expect(primaryActionOnClick).toHaveBeenCalledTimes(1);
      expect(secondaryActionOnClick).not.toHaveBeenCalled();
    });

    it('should render primary button label', async () => {
      const driver = createDriver(
        <CardGalleryItem
          primaryActionProps={{
            label: 'Primary',
          }}
        />,
      );

      expect(await driver.getPrimaryActionLabel()).toBe('Primary');
    });

    it('should render a disabled primary button', async () => {
      const driver = createDriver(
        <CardGalleryItem
          primaryActionProps={{
            label: 'Primary',
            disabled: true,
          }}
        />,
      );

      expect(await driver.isPrimaryActionDisabled()).toBe(true);
    });

    it('on click on primary button should call once only primary action', async () => {
      const primaryActionOnClick = jest.fn();
      const secondaryActionOnClick = jest.fn();
      const driver = createDriver(
        <CardGalleryItem
          primaryActionProps={{
            onClick: primaryActionOnClick,
          }}
          secondaryActionProps={{
            onClick: secondaryActionOnClick,
          }}
        />,
      );

      await driver.clickOnPrimaryAction();

      expect(primaryActionOnClick).toHaveBeenCalledTimes(1);
      expect(secondaryActionOnClick).not.toHaveBeenCalled();
    });

    it('should render secondary button label', async () => {
      const driver = createDriver(
        <CardGalleryItem
          secondaryActionProps={{
            label: 'Secondary',
          }}
        />,
      );

      expect(await driver.getSecondaryActionLabel()).toBe('Secondary');
    });

    it('on click on primary button should call once only secondary action', async () => {
      const primaryActionOnClick = jest.fn();
      const secondaryActionOnClick = jest.fn();
      const driver = createDriver(
        <CardGalleryItem
          primaryActionProps={{
            onClick: primaryActionOnClick,
          }}
          secondaryActionProps={{
            onClick: secondaryActionOnClick,
          }}
        />,
      );

      await driver.clickOnSecondaryAction();

      expect(secondaryActionOnClick).toHaveBeenCalledTimes(1);
      expect(primaryActionOnClick).not.toHaveBeenCalled();
    });
  });
});
