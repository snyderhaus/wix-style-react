import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import Accordion from './Accordion';
import { accordionPrivateDriverFactory } from './Accordion.private.uni.driver';

import { eventually } from '../../test/utils/unit/eventually';
import { buttonTypes } from './constants';

describe('Accordion', () => {
  const FakeIcon = () => <div>fake icon</div>;
  const createDriver = createUniDriverFactory(accordionPrivateDriverFactory);

  describe('items items', () => {
    it('should render a list of items', async () => {
      const items = [
        {
          title: 'first item',
        },
      ];
      const driver = createDriver(<Accordion items={items} />);
      expect(await driver.getItemTitleAt(0)).toEqual('first item');
    });

    it('should not render any items', async () => {
      const driver = createDriver(<Accordion />);
      expect(await driver.getAmountOfItems()).toEqual(0);
    });

    it('should render item with icon', async () => {
      const items = [
        {
          title: 'first item',
          icon: <FakeIcon />,
          content: 'first item content',
        },
      ];
      const driver = createDriver(<Accordion items={items} />);
      expect(await driver.isIconExistsAt(0)).toBe(true);
    });

    it('should render item without an icon', async () => {
      const items = [
        {
          title: 'first item',
          content: 'first item content',
        },
      ];
      const driver = createDriver(<Accordion items={items} />);
      expect(await driver.isIconExistsAt(0)).toBe(false);
    });
  });

  describe('expand and collapse behavior', () => {
    const singleItem = [
      {
        title: 'first item',
        icon: <FakeIcon />,
        content: 'first item content',
        expandLabel: 'see more',
        collapseLabel: 'see less',
        buttonType: buttonTypes.button,
      },
    ];

    const singleItemWithTextButton = [
      {
        title: 'first item',
        icon: <FakeIcon />,
        content: 'first item content',
        expandLabel: 'see more',
        collapseLabel: 'see less',
        buttonType: buttonTypes.textButton,
      },
    ];

    const multipleItems = [
      {
        title: 'first item',
        icon: <FakeIcon />,
        content: 'first item content',
        expandLabel: 'see more',
        collapseLabel: 'see less',
        buttonType: buttonTypes.button,
      },
      {
        title: 'second item',
        icon: <FakeIcon />,
        content: 'second item content',
        expandLabel: 'see more',
        collapseLabel: 'see less',
        buttonType: buttonTypes.button,
      },
    ];

    it('should display a collapsed item by default', async () => {
      const driver = createDriver(<Accordion items={singleItem} />);
      expect(await driver.isItemExpandedAt(0)).toBe(false);
    });

    it('should expand an item on click', async () => {
      const driver = createDriver(<Accordion items={singleItem} />);
      await driver.clickHeaderAt(0);
      expect(await driver.isItemExpandedAt(0)).toBe(true);
    });

    it('should collapse an open item on click', async () => {
      const driver = createDriver(<Accordion items={singleItem} />);
      await driver.clickHeaderAt(0);
      await driver.clickHeaderAt(0);
      expect(await driver.isItemExpandedAt(0)).toBe(false);
    });

    it('should accept an expand and collapse button labels', async () => {
      const driver = createDriver(<Accordion items={singleItem} />);
      await driver.hoverOnItem(0);
      expect(await driver.getToggleButtonLabelAt(0)).toEqual('see more');
      await driver.clickToggleButtonAt(0);
      expect(await driver.getToggleButtonLabelAt(0)).toEqual('see less');
    });

    it('should accept an expand and collapse button labels when using textButton', async () => {
      const driver = createDriver(
        <Accordion items={singleItemWithTextButton} />,
      );
      await driver.hoverOnItem(0);
      expect(await driver.getToggleButtonLabelAt(0)).toEqual('see more');
      await driver.clickToggleButtonAt(0);
      expect(await driver.getToggleButtonLabelAt(0)).toEqual('see less');
    });

    it('should allow only a single item to be expanded by default', async () => {
      const driver = createDriver(<Accordion items={multipleItems} />);

      await driver.clickToggleButtonAt(0);
      await driver.clickToggleButtonAt(1);
      await eventually(async () =>
        expect(await driver.isItemExpandedAt(0)).toBe(false),
      );
      expect(await driver.isItemExpandedAt(1)).toBe(true);
    });
  });
});
