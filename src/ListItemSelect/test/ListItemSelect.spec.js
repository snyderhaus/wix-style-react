import React from 'react';
import Star from 'wix-ui-icons-common/Star';

import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import ListItemSelect from '../ListItemSelect';
import { listItemSelectPrivateDriverFactory } from './ListItemSelect.private.uni.driver';

describe('ListItemSelect', () => {
  const renderListItemSelect = (props = {}) => <ListItemSelect {...props} />;
  const render = createRendererWithUniDriver(
    listItemSelectPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(renderListItemSelect({}));

    expect(await driver.exists()).toBe(true);
  });

  it('should not have elements: prefix, suffix, checkbox, title, subtitle', async () => {
    const { driver } = render(renderListItemSelect({}));

    expect(await driver.getPrefix().exists()).toBe(false);
    expect(await driver.getSuffix().exists()).toBe(false);
    expect(await driver.hasCheckbox()).toBe(false);
    expect(await driver.getTitle()).toBe('');
    expect(await driver.getSubtitle()).toBeUndefined();
  });

  it('should have elements: prefix, suffix, checkbox, title, subtitle', async () => {
    const { driver } = render(
      renderListItemSelect({
        prefix: 'hello',
        suffix: <Star />,
        checkbox: true,
        title: 'title',
        subtitle: 'subtitle',
      }),
    );

    expect(await driver.getPrefix().exists()).toBe(true);
    expect(await driver.getSuffix().exists()).toBe(true);
    expect(await driver.hasCheckbox()).toBe(true);
    expect(await driver.getTitle()).toBe('title');
    expect(await driver.getSubtitle()).toBe('subtitle');
  });

  it('should be unselected', async () => {
    const { driver } = render(renderListItemSelect({ selected: false }));

    expect(await driver.isSelected()).toBeFalsy();
  });

  it('should be selected', async () => {
    const { driver } = render(renderListItemSelect({ selected: true }));

    expect(await driver.isSelected()).toBeTruthy();
  });

  it('should trigger click callback', async () => {
    const onClick = jest.fn();
    const { driver } = render(renderListItemSelect({ onClick }));

    expect(onClick).not.toHaveBeenCalled();
    await driver.click();
    expect(onClick).toHaveBeenCalled();
  });

  it('should not trigger click callback when disabled', async () => {
    const onClick = jest.fn();
    const { driver } = render(
      renderListItemSelect({ disabled: true, onClick }),
    );

    await driver.click();
    expect(onClick).not.toHaveBeenCalled();
  });
});
