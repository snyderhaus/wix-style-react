import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import { colorInputDriverFactory as publicDriverFactory } from './ColorInput.uni.driver';
import hashStyles from './components/Hash.st.css';
import viewerStyles from './components/ColorViewer.st.css';
import { swatchesPrivateDriverFactory } from '../Swatches/test/Swatches.private.uni.driver';
import DATA_HOOKS from './DataHooks';
import inputUniDriverFactory from '../Input/Input.uni.driver';
import popoverDriverFactory from '../Popover/Popover.uni.driver';

export const colorInputPrivateDriverFactory = (base, body) => {
  const viewerStylableUtil = new StylableUnidriverUtil(viewerStyles);
  const hashStylableUtil = new StylableUnidriverUtil(hashStyles);
  const swatchesHook = `[data-hook="${DATA_HOOKS.COLOR_PICKER_SWATCHES}"]`;
  const swatchesDriver = swatchesPrivateDriverFactory(base.$(swatchesHook));
  const colorViewerPopoverHook = `[data-hook="${DATA_HOOKS.COLOR_INPUT_POPOVER}"]`;
  const colorViewerPopoverTestkit = popoverDriverFactory(
    base.$(colorViewerPopoverHook),
    body,
  );

  const isHashDisabled = async () =>
    (await hashStylableUtil.getStyleState(
      base.$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_HASH}"]`),
      'disabled',
    )) === 'true';

  const getViewerSize = async () =>
    await viewerStylableUtil.getStyleState(
      base.$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_VIEWER}"]`),
      'size',
    );

  const inputTestkit = inputUniDriverFactory(base);

  return {
    ...publicDriverFactory(base, body),
    isHashDisabled,
    isViewerNull: async () =>
      await base
        .$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_VIEWER_LINE}"]`)
        .exists(),
    getViewerSize,
    getSwatch: async index => swatchesDriver.getSwatch(index),
    getSwatchCount: async () => swatchesDriver.getSwatchCount(),
    /** Private Swatches driver function to test if swatch is transparent at given index */
    isSwatchTransparentAt: async index =>
      swatchesDriver.isSwatchTransparentAt(index),
    keyDown: async event => {
      if (typeof event === 'string') {
        await inputTestkit.keyDown({ key: event });
      } else {
        await inputTestkit.keyDown(event);
      }
    },
    blur: inputTestkit.blur,
    focus: inputTestkit.focus,
    clickOutside: async () => colorViewerPopoverTestkit.clickOutside(),
    hasPrefix: inputTestkit.hasPrefix,
  };
};

export default colorInputPrivateDriverFactory;
