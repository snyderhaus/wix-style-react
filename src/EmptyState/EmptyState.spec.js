import React from 'react';

import EmptyState from './EmptyState';
import emptyStateDriverFactory from './EmptyState.driver';

import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/unit';
import { emptyStateUniDriverFactory } from './EmptyState.uni.driver';

describe('EmptyState', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(emptyStateDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(emptyStateUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    const defaultProps = {
      title: 'My awesome title',
      subtitle: 'My awesome subtitle',
    };

    it('should have a title and a subtitle', async () => {
      const { driver } = render(<EmptyState {...defaultProps} />);

      expect(await driver.getTitleText()).toEqual('My awesome title');
      expect(await driver.getSubtitleText()).toEqual('My awesome subtitle');
    });

    it('should have an image', async () => {
      const { driver } = render(
        <EmptyState {...defaultProps} image="http://wix.com/some-image.png" />,
      );

      expect(await driver.getImageUrl()).toEqual(
        'http://wix.com/some-image.png',
      );
    });

    it('should have a theme', async () => {
      const { driver } = render(
        <EmptyState {...defaultProps} theme="page-no-border" />,
      );

      expect(await driver.hasTheme('page-no-border')).toBe(true);
    });

    it('should support image passed as a node', async () => {
      const { driver } = render(
        <EmptyState
          {...defaultProps}
          image={<span>I am the image node</span>}
        />,
      );

      expect(await driver.imageNodeExists()).toEqual(true);
    });

    it("should render it's children", async () => {
      const { driver } = render(
        <EmptyState {...defaultProps}>
          <button>I am a button!</button>
        </EmptyState>,
      );

      expect(await driver.childrenContentExists()).toEqual(true);
    });

    it('should render image container with specific class name', async () => {
      const { driver } = render(
        <EmptyState
          {...defaultProps}
          image="http://wix.com/some-image.png"
          classNames={{
            imageContainer: 'some-class-name',
          }}
        />,
      );

      expect(await driver.getImageContainerClassName()).toContain(
        'some-class-name',
      );
    });

    it('should have an align', async () => {
      const { driver } = render(<EmptyState {...defaultProps} align="start" />);

      expect(await driver.hasAlign('start')).toBe(true);
    });
  }
});
