import React from 'react';
import AddIcon from 'wix-ui-icons-common/Add';

import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import MarketingLayout from '../MarketingLayout';
import Button from '../../Button';
import { marketingLayoutPrivateDriverFactory } from './MarketingLayout.private.uni.driver';

describe('MarketingLayout', () => {
  const render = createRendererWithUniDriver(
    marketingLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    image: <AddIcon />,
    title: <h1>title</h1>,
    description: 'Card description',
    actions: <Button>Card action</Button>,
  };

  it('should render', async () => {
    const { driver } = render(<MarketingLayout {...defaultProps} />);
    expect(await driver.exists()).toBeTruthy();
  });

  describe('`title` prop', () => {
    it('should render as string', async () => {
      const { driver } = render(
        <MarketingLayout {...defaultProps} title="Card Title" />,
      );
      expect(await driver.getTitleText()).toBe('Card Title');
    });

    it('should render as component', async () => {
      const { driver } = render(
        <MarketingLayout {...defaultProps} title={<h1>Card Title</h1>} />,
      );
      expect(await driver.getTitleText()).toBe('Card Title');
    });
  });

  describe('`description` prop', () => {
    it('should render as string', async () => {
      const { driver } = render(
        <MarketingLayout {...defaultProps} description="Card Description" />,
      );
      expect(await driver.getDescriptionText()).toBe('Card Description');
    });

    it('should render as component', async () => {
      const { driver } = render(
        <MarketingLayout
          {...defaultProps}
          description={<p>Card Description</p>}
        />,
      );
      expect(await driver.getDescriptionText()).toBe('Card Description');
    });
  });
});
