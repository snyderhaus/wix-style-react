import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Palette from '../Palette';
import { palettePrivateDriverFactory } from './Palette.private.uni.driver';

describe('Palette', () => {
  const render = createRendererWithUniDriver(palettePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Palette />);

    expect(await driver.exists()).toBeTruthy();
  });
});
