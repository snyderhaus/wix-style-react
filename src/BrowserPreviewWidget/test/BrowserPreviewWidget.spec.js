import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import BrowserPreviewWidget from '../BrowserPreviewWidget';
import { browserPreviewWidgetPrivateDriverFactory } from './BrowserPreviewWidget.private.uni.driver';

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

describe('BrowserPreviewWidget', () => {
  const render = createRendererWithUniDriver(
    browserPreviewWidgetPrivateDriverFactory,
  );

  afterEach(() => cleanup);

  it('should render', async () => {
    const { driver } = render(<BrowserPreviewWidget {...requiredProps} />);

    expect(await driver.exists()).toBeTruthy();
  });

  it('should render the browser preview content', async () => {
    const browserPreviewContent = 'browser-preview-content';
    const props = {
      children: <div>{browserPreviewContent}</div>,
    };
    const { driver } = render(
      <BrowserPreviewWidget {...requiredProps} {...props} />,
    );

    expect(await driver.getBrowserContent().text()).toBe(browserPreviewContent);
  });
});
