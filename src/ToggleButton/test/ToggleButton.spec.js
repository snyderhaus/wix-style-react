import React from 'react';
import CropRotate from 'wix-ui-icons-common/CropRotate';

import {
  cleanup,
  createRendererWithUniDriver,
} from '../../../test/utils/react/index';
import { toggleButtonPrivateDriverFactory } from '../ToggleButton.private.uni.driver';
import ToggleButton from '../index';
import { dataHooks } from './storySettings';

describe('ToggleButton', () => {
  afterEach(() => cleanup());

  const render = createRendererWithUniDriver(toggleButtonPrivateDriverFactory);

  describe('`skin` prop', () => {
    it.each(['standard', 'dark'])('should apply %s skin', async skin => {
      const props = {
        skin,
        tooltipContent: 'crop&rotate',
        children: <CropRotate />,
      };
      const { driver } = render(<ToggleButton {...props} />);

      expect(await driver.getSkin()).toEqual(skin);
    });
  });

  describe('Icon size ', () => {
    const dataHook = dataHooks.iconOfToggleButton;

    it.each(['medium'])('should be 24px when given size- %s', async size => {
      const props = {
        size,
        tooltipContent: 'crop&rotate',
        children: <CropRotate data-hook={dataHook} />,
      };
      const { driver } = render(<ToggleButton {...props} />);

      expect(await driver.getIconSize()).toEqual('24px');
    });
  });

  describe(`'selected' prop`, () => {
    it('should apply className when selected', async () => {
      const props = {
        selected: true,
        tooltipContent: 'crop&rotate',
        children: <CropRotate />,
      };
      const { driver } = render(<ToggleButton {...props} />);

      expect(await driver.isButtonSelected()).toEqual(true);
    });
  });

  describe('`tooltipContent` prop', () => {
    it('should set tooltip content from `tooltipContent` prop', async () => {
      const props = {
        tooltipContent: 'crop&rotate',
        children: <CropRotate />,
      };
      const { driver } = render(<ToggleButton {...props} />);

      expect(await driver.getTooltipText()).toEqual('crop&rotate');
    });
  });
});
