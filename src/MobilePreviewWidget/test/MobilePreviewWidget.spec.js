import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MobilePreviewWidget from '../MobilePreviewWidget';
import { mobilePreviewWidgetPrivateDriverFactory } from './MobilePreviewWidget.private.uni.driver';

import Box from '../../Box';
import Text from '../../Text';

const requiredProps = {
  children: (
    <Box
      align="center"
      verticalAlign="middle"
      height="100%"
      padding="20px"
      backgroundColor="Y30"
    >
      <Text>Content goes here</Text>
    </Box>
  ),
};

describe('MobilePreviewWidget', () => {
  const render = createRendererWithUniDriver(
    mobilePreviewWidgetPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<MobilePreviewWidget {...requiredProps} />);

    expect(await driver.exists()).toBeTruthy();
  });

  it('should render the mobile preview content', async () => {
    const mobilePreviewContent = 'mobile-preview-content';
    const props = {
      children: <div>{mobilePreviewContent}</div>,
    };
    const { driver } = render(
      <MobilePreviewWidget {...requiredProps} {...props} />,
    );

    expect(await driver.getMobileContent().text()).toBe(mobilePreviewContent);
  });
});
