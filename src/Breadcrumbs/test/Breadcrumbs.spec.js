import React from 'react';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';

import breadcrumbsDriverFactory from '../Breadcrumbs.driver';
import breadcrumbsPrivateDriverFactory from '../Breadcrumbs.private.driver';
import { breadcrumbsUniDriverFactory } from '../Breadcrumbs.uni.driver';

import Breadcrumbs from '../Breadcrumbs';

const items = [
  { id: 0, value: 'Option 1' },
  { id: 1, value: 'Option 2' },
];
let onClick;

describe('Breadcrumbs', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(breadcrumbsDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(breadcrumbsUniDriverFactory));
  });

  function runTests(render) {
    beforeEach(() => {
      onClick = jest.fn();
    });

    afterEach(() => cleanup());

    it('should have correct text on each breadcrumb', async () => {
      const { driver } = render(<Breadcrumbs {...{ onClick, items }} />);
      expect(await driver.breadcrumbsLength()).toBe(items.length);
      expect(await driver.breadcrumbContentAt(0)).toBe(items[0].value);
      expect(await driver.breadcrumbContentAt(1)).toBe(items[1].value);
    });

    it('should call onClick callback on click with correct item', async () => {
      const { driver } = render(<Breadcrumbs {...{ onClick, items }} />);
      const itemIndex = 1;

      await driver.clickBreadcrumbAt(itemIndex);
      expect(onClick).toBeCalledWith({
        id: items[itemIndex].id,
        value: 'Option 2',
      });
    });

    it('should get correct size from props', async () => {
      const size = 'large';
      const { driver } = render(<Breadcrumbs {...{ onClick, items, size }} />);
      expect(await driver.isLarge()).toBe(true);
    });

    it('should use medium size as default', async () => {
      const { driver } = render(<Breadcrumbs {...{ onClick, items }} />);
      expect(await driver.isMedium()).toBe(true);
    });

    it('should get theme from props', async () => {
      const theme = 'onWhiteBackground';
      const { driver } = render(<Breadcrumbs {...{ onClick, items, theme }} />);
      expect(await driver.isOnWhiteBackground()).toBe(true);
    });

    it('should use default theme gray background', async () => {
      const { driver } = render(<Breadcrumbs {...{ onClick, items }} />);
      expect(await driver.isOnGrayBackground()).toBe(true);
    });

    it('should get active id from props and have correct class', async () => {
      const itemIndex = 1;
      const { driver } = render(
        <Breadcrumbs {...{ onClick, items, activeId: items[itemIndex].id }} />,
      );
      expect(await driver.getActiveItemId()).toBe(itemIndex);
    });

    it('should return null if not exists active id', async () => {
      const { driver } = render(<Breadcrumbs {...{ onClick, items }} />);
      expect(await driver.getActiveItemId()).toBe(null);
    });

    describe('item with link attribute', () => {
      const linkItems = [
        { id: 0, value: 'Option 1', link: '//www.wix.com' },
        { id: 1, value: 'Option 2', link: '//www.facebook.com' },
      ];

      it('should not have links if link attribute is not given', async () => {
        const { driver } = render(<Breadcrumbs {...{ items }} />);
        expect(await driver.isActiveLinkAt(0)).toBe(false);
        expect(await driver.isActiveLinkAt(1)).toBe(false);
      });

      it('should be a link if no activeId is given', async () => {
        const { driver } = render(<Breadcrumbs {...{ items: linkItems }} />);
        expect(await driver.isActiveLinkAt(0)).toBe(true);
        expect(await driver.isActiveLinkAt(1)).toBe(true);
      });

      it('should not be a link if it is the item with activeId', async () => {
        const { driver } = render(
          <Breadcrumbs {...{ items: linkItems, activeId: 0 }} />,
        );
        expect(await driver.isActiveLinkAt(0)).toBe(false);
        expect(await driver.isActiveLinkAt(1)).toBe(true);
      });
    });

    describe('customElement attribute', () => {
      const customItems = [
        {
          id: 0,
          value: 'Option 1',
          customElement: <a href="//www.wix.com">Option 1</a>,
        },
        {
          id: 1,
          value: 'Option 2',
          customElement: <a href="//www.facebook.com">Option 2</a>,
        },
      ];

      const customItemsWithLinks = [
        {
          id: 0,
          value: 'value',
          customElement: <a href="//www.wix.com">Custom value</a>,
          link: 'www.bla.com',
        },
      ];

      it('should render the customElement when given', async () => {
        const { driver } = render(<Breadcrumbs {...{ items: customItems }} />);

        expect(await driver.breadcrumbsLength()).toBe(customItems.length);
        expect(await driver.breadcrumbContentAt(0)).toBe(customItems[0].value);
        expect(await driver.breadcrumbContentAt(1)).toBe(customItems[1].value);
      });

      it('should render the customElement even if link attribute is given', async () => {
        const { driver } = render(
          <Breadcrumbs {...{ items: customItemsWithLinks }} />,
        );

        expect(await driver.breadcrumbsLength()).toBe(
          customItemsWithLinks.length,
        );
        expect(await driver.breadcrumbContentAt(0)).toBe('Custom value');
      });

      it('should render the value attribute of the item when this is the activeId', async () => {
        const { driver } = render(
          <Breadcrumbs {...{ items: customItemsWithLinks, activeId: 0 }} />,
        );

        expect(await driver.breadcrumbContentAt(0)).toBe(
          customItemsWithLinks[0].value,
        );
      });
    });

    it('should have correct classNames', async () => {
      const { driver } = render(<Breadcrumbs {...{ items }} />);
      expect(await driver.getLabelClassList(0)).toMatch(/Text/);
    });
  }

  describe('given only one item', () => {
    it('should take full width', async () => {
      const render = createRendererWithDriver(breadcrumbsPrivateDriverFactory);
      const { driver } = render(
        <Breadcrumbs {...{ items: [{ id: 0, value: 'Option 1' }] }} />,
      );
      expect(await driver.isItemFullWidthAt(0)).toBe(true);
    });
  });
});
