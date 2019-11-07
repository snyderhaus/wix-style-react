import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import PreviewWidget from '../PreviewWidget';
import { previewWidgetDriverFactory } from '../PreviewWidget.uni.driver';

import Box from 'wix-style-react/Box';
import Text from 'wix-style-react/Text';

const childNode = (
  <Box
    align="center"
    verticalAlign="middle"
    height={'50px'}
    width={'150px'}
    backgroundColor={'D80'}
  >
    <Text>Content goes here</Text>
  </Box>
);

describe('PreviewWidget', () => {
  const render = createRendererWithUniDriver(previewWidgetDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<PreviewWidget>{childNode}</PreviewWidget>);

    expect(await driver.exists()).toBeTruthy();
  });
});
