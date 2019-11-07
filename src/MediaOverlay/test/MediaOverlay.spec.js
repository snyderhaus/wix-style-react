import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MediaOverlay from '../MediaOverlay';
import { Skin, Visible } from '../constants';
import { mediaOverlayPrivateDriverFactory } from './MediaOverlay.private.uni.driver';

const mediaUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
const createMediaOverlay = ({ media = mediaUrl, ...rest } = {}) => (
  <MediaOverlay media={media} {...rest} />
);
const createMediaOverlayContent = props => <MediaOverlay.Content {...props} />;

afterEach(() => {
  cleanup();
});

describe('MediaOverlay', () => {
  const render = createRendererWithUniDriver(mediaOverlayPrivateDriverFactory);

  it('should render', async () => {
    const { driver } = render(createMediaOverlay());
    expect(await driver.exists()).toBe(true);
  });

  describe('media prop', () => {
    it('should set string value as background image', async () => {
      const { driver } = render(createMediaOverlay());
      expect(await driver.getMediaUrl()).toBe(mediaUrl);
      expect(await driver.getMediaNode()).toBe(null);
    });

    it('should render custom node elements', async () => {
      const id = 'test';
      const { driver } = render(createMediaOverlay({ media: <div id={id} /> }));
      expect(await driver.getMediaUrl()).toBe(null);
      const mediaNode = await driver.getMediaNode();
      expect(mediaNode).not.toBe(null);
      expect(mediaNode.getAttribute('id')).toBe(id);
    });
  });

  describe('onClick prop', () => {
    it('should handle click', async () => {
      const onClick = jest.fn();
      const { driver } = render(createMediaOverlay({ onClick }));

      await driver.click();
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('skin prop', () => {
    it(`should have default value "${Skin.None}"`, async () => {
      const { driver } = render(createMediaOverlay());
      expect(await driver.getSkin()).toBe(Skin.None);
    });

    it(`should set value to "${Skin.Gradient}"`, async () => {
      const { driver } = render(createMediaOverlay({ skin: Skin.Gradient }));
      expect(await driver.getSkin()).toBe(Skin.Gradient);
    });

    it(`should set value to "${Skin.Dark}"`, async () => {
      const { driver } = render(createMediaOverlay({ skin: Skin.Dark }));
      expect(await driver.getSkin()).toBe(Skin.Dark);
    });
  });

  describe('hoverSkin prop', () => {
    it(`should have default value equal to skin prop`, async () => {
      const { driver } = render(createMediaOverlay({ skin: Skin.Gradient }));
      expect(await driver.getHoverSkin()).toBe(Skin.Gradient);
    });

    it(`should set value to "${Skin.Gradient}"`, async () => {
      const { driver } = render(
        createMediaOverlay({ hoverSkin: Skin.Gradient }),
      );
      expect(await driver.getHoverSkin()).toBe(Skin.Gradient);
    });

    it(`should set value to "${Skin.Dark}"`, async () => {
      const { driver } = render(createMediaOverlay({ hoverSkin: Skin.Dark }));
      expect(await driver.getHoverSkin()).toBe(Skin.Dark);
    });
  });

  describe('hovered prop', () => {
    it('should not trigger hover state on mouse enter when value is "false"', async () => {
      const { driver } = render(
        createMediaOverlay({
          hovered: false,
          children: createMediaOverlayContent({
            visible: Visible.Hover,
            children: <div />,
          }),
        }),
      );

      const contentChildren = await driver.getContentChildren();
      expect(await contentChildren.count()).toBe(0);
      await driver.hover();
      expect(await contentChildren.count()).toBe(0);
    });

    it('should always trigger hover state when value is "true"', async () => {
      const id = 'test-content';
      const { driver } = render(
        createMediaOverlay({
          hovered: true,
          children: createMediaOverlayContent({
            visible: Visible.Hover,
            children: <div id={id} />,
          }),
        }),
      );

      const contentChildren = await driver.getContentChildren();
      expect(await contentChildren.count()).toBe(1);
      expect(await contentChildren.get(0).attr('id')).toBe(id);
      await driver.hover();
      expect(await contentChildren.count()).toBe(1);
    });
  });

  describe('Content', () => {
    it('should ignore direct child elements not wrapped in Content', async () => {
      const { driver } = render(createMediaOverlay({ children: <div /> }));
      const contentChildren = await driver.getContentChildren();
      expect(await contentChildren.count()).toBe(0);
    });

    it('should render single Content item', async () => {
      const id = 'test-content';
      const { driver } = render(
        createMediaOverlay({
          children: createMediaOverlayContent({ children: <div id={id} /> }),
        }),
      );

      const contentChildren = await driver.getContentChildren();
      expect(await contentChildren.count()).toBe(1);
      expect(await contentChildren.get(0).attr('id')).toBe(id);
    });

    it('should render multiple Content items', async () => {
      const id1 = 'test-content-1';
      const id2 = 'test-content-2';
      const { driver } = render(
        createMediaOverlay({
          children: [
            createMediaOverlayContent({ key: 1, children: <div id={id1} /> }),
            createMediaOverlayContent({ key: 2, children: <div id={id2} /> }),
          ],
        }),
      );

      const contentChildren = await driver.getContentChildren();
      expect(await contentChildren.count()).toBe(2);
      expect(await contentChildren.get(0).attr('id')).toBe(id1);
      expect(await contentChildren.get(1).attr('id')).toBe(id2);
    });

    it(`should render visible="${Visible.Hover}" Content items only on hover`, async () => {
      const id = 'test-content';
      const { driver } = render(
        createMediaOverlay({
          children: createMediaOverlayContent({
            visible: Visible.Hover,
            children: <div id={id} />,
          }),
        }),
      );

      const contentChildren = await driver.getContentChildren();
      expect(await contentChildren.count()).toBe(0);
      await driver.hover();
      expect(await contentChildren.count()).toBe(1);
      expect(await contentChildren.get(0).attr('id')).toBe(id);
    });
  });
});
