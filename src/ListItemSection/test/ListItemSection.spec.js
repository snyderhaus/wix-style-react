import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import ListItemSection from '../ListItemSection';
import { listItemSectionPrivateDriverFactory } from './ListItemSection.private.uni.driver';

describe('ListItemSection', () => {
  const renderListItemSection = (props = {}) => <ListItemSection {...props} />;
  const render = createRendererWithUniDriver(
    listItemSectionPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(renderListItemSection());

    expect(await driver.exists()).toBe(true);
  });

  it('should not have elements: title, suffix', async () => {
    const { driver } = render(renderListItemSection({}));

    expect(await driver.getTitle()).toBe('');
    expect(await driver.getSuffix().exists()).toBe(false);
  });

  it('should have elements: title, suffix', async () => {
    const { driver } = render(
      renderListItemSection({
        title: 'ListItemSection title',
        suffix: 'suffix',
      }),
    );

    expect(await driver.getTitle()).toBe('ListItemSection title');
    expect(await driver.getSuffix().exists()).toBe(true);
  });

  it('should call onClick when clicking suffix', async () => {
    const onClick = jest.fn();
    const { driver } = render(
      renderListItemSection({
        title: 'ListItemSection title',
        suffix: 'suffix',
        onClick,
      }),
    );

    expect(onClick).not.toBeCalled();
    await driver.getSuffix().click();
    expect(onClick).toBeCalled();
  });

  it('should not call onClick when clicking elsewhere', async () => {
    const onClick = jest.fn();
    const { driver } = render(
      renderListItemSection({
        title: 'ListItemSection title',
        suffix: 'suffix',
        onClick,
      }),
    );

    expect(onClick).not.toBeCalled();
    await driver.click();
    expect(onClick).not.toBeCalled();
  });
});
