import React from 'react';
import { createRendererWithUniDriver } from '../../test/utils/react';

import WarningIndicator from './WarningIndicator';
import { warningIndicatorDriverFactory } from './WarningIndicator.uni.driver';

describe('WarningIndicator', () => {
  const render = createRendererWithUniDriver(warningIndicatorDriverFactory);

  it('should render a tooltip with the warning message', async () => {
    const warningMessage = 'Some warning';

    const { driver } = render(
      <WarningIndicator warningMessage={warningMessage} />,
    );

    expect(await driver.getWarningMessage()).toEqual(warningMessage);
  });
});
