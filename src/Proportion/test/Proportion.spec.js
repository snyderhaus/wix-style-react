import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Proportion from '../Proportion';
import { proportionDriverFactory } from '../Proportion.uni.driver';

const generateProportion = props => <Proportion {...props} />;

describe('Proportion', () => {
  const render = createRendererWithUniDriver(proportionDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const children = <label>My Label</label>;
    const { driver } = render(generateProportion({ children }));
    expect(await driver.exists()).toBe(true);
  });
});

describe('Proportion.aspectRatioNone', () => {
  const render = createRendererWithUniDriver(proportionDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const children = <div>Child div</div>;
    const aspectRatio = 'none';
    const { driver } = render(generateProportion({ aspectRatio, children }));
    expect(await driver.isAspectRatioDisabled()).toBe(false);
  });
});

describe('Proportion.aspectRatioCustomed', () => {
  const render = createRendererWithUniDriver(proportionDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const children = <div>Child div</div>;
    const aspectRatio = 1 / 3;
    const { driver } = render(generateProportion({ aspectRatio, children }));
    expect(await driver.isAspectRatioDisabled()).toBe(true);
  });
});
