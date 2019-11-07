import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import ModalMobileLayout from '../ModalMobileLayout';
import { modalMobileLayoutPrivateDriverFactory } from './ModalMobileLayout.private.uni.driver';

describe('ModalMobileLayout', () => {
  const render = createRendererWithUniDriver(
    modalMobileLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<ModalMobileLayout />);

    expect(await driver.exists()).toBeTruthy();
  });

  it('should render title', async () => {
    const { driver } = render(
      <ModalMobileLayout title={<div>My Title</div>} />,
    );

    expect(await driver.hasTitle()).toEqual(true);
  });

  it('should render content', async () => {
    const { driver } = render(
      <ModalMobileLayout content={<div>Content</div>} />,
    );

    expect(await driver.hasContent()).toEqual(true);
  });

  it('should render footer', async () => {
    const { driver } = render(<ModalMobileLayout footer={<div>Footer</div>} />);

    expect(await driver.hasFooter()).toEqual(true);
  });

  it('should run onOverlayClick when clicking overlay', async () => {
    const onOverlayClick = jest.fn();
    const { driver } = render(
      <ModalMobileLayout onOverlayClick={onOverlayClick} />,
    );

    expect(onOverlayClick).not.toHaveBeenCalled();

    await driver.clickOverlay();

    expect(onOverlayClick).toHaveBeenCalled();
  });

  describe('Close button', () => {
    it('should not render close button by default', async () => {
      const { driver } = render(<ModalMobileLayout />);

      expect(await driver.closeButtonExists()).toBeFalsy();
    });

    it('should render close button', async () => {
      const { driver } = render(
        <ModalMobileLayout onCloseButtonClick={jest.fn()} />,
      );

      expect(await driver.closeButtonExists()).toBeTruthy();
    });

    it('should call clickCloseButton when clicking on close button', async () => {
      const onCloseButtonClick = jest.fn();
      const { driver } = render(
        <ModalMobileLayout onCloseButtonClick={onCloseButtonClick} />,
      );

      expect(onCloseButtonClick).not.toHaveBeenCalled();

      await driver.clickCloseButton();

      expect(onCloseButtonClick).toHaveBeenCalled();
    });
  });

  describe('sticky title', () => {
    it('should render a non-sticky title as default', async () => {
      const { driver } = render(
        <ModalMobileLayout title={'this is a title'} />,
      );

      expect(await driver.isTitleSticky()).toBeFalsy();
    });

    it('should render sticky title layout', async () => {
      const { driver } = render(
        <ModalMobileLayout stickyTitle title={'this is a title'} />,
      );

      expect(await driver.isTitleSticky()).toBeTruthy();
    });
  });

  describe('sticky footer', () => {
    it('should render a non-sticky footer as default', async () => {
      const { driver } = render(<ModalMobileLayout footer={'Footer'} />);

      expect(await driver.isFooterSticky()).toBeFalsy();
    });

    it('should render sticky footer layout', async () => {
      const { driver } = render(
        <ModalMobileLayout stickyFooter footer={'Footer'} />,
      );

      expect(await driver.isFooterSticky()).toBeTruthy();
    });
  });
});
