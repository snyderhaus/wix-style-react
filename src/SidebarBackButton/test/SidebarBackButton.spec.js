import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SidebarBackButton from '../SidebarBackButton';
import { sidebarBackButtonPrivateDriverFactory } from './SidebarBackButton.private.uni.driver';

describe('SidebarBackButton', () => {
  const render = createRendererWithUniDriver(
    sidebarBackButtonPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<SidebarBackButton>Click Me</SidebarBackButton>);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getButtonText()).toEqual('Click Me');
  });
});
