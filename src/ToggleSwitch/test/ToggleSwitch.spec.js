import React from 'react';
import ToggleSwitch from '../ToggleSwitch';
import toggleSwitchDriverFactory from '../ToggleSwitch.driver';
import { toggleSwitchDriverFactory as toggleSwitchUniDriverFactory } from '../ToggleSwitch.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';
import { SKINS, SIZES } from '../constants';

describe('ToggleSwitch', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(toggleSwitchDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(toggleSwitchUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    describe('block props', () => {
      it('should not pass inline styles prop', async () => {
        const redRgb = 'rgb(255, 0, 0)';

        const styles = { root: { color: redRgb } };
        const { driver } = render(<ToggleSwitch styles={styles} />);
        expect((await driver.getRootStyles()).color).not.toBe(redRgb);
      });
    });

    describe('size prop', () => {
      it('should be "large" by default', async () => {
        const { driver } = render(<ToggleSwitch />);
        expect(await driver.getSize()).toBe(SIZES.large);
      });

      Object.values(SIZES).forEach(size => {
        it(`should be "${size}"`, async () => {
          const { driver } = render(<ToggleSwitch size={size} />);
          expect(await driver.getSize()).toBe(size);
        });
      });
    });

    describe('skin prop', () => {
      it('should be "standard" by default', async () => {
        const { driver } = render(<ToggleSwitch />);
        expect(await driver.getSkin()).toBe(SKINS.standard);
      });

      Object.values(SKINS).forEach(skin => {
        it(`should be "${skin}"`, async () => {
          const { driver } = render(<ToggleSwitch skin={skin} />);
          expect(await driver.getSkin()).toBe(skin);
        });
      });
    });
  }
});
