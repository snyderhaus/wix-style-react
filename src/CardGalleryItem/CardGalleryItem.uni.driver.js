import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import { mediaOverlayDriverFactory } from '../MediaOverlay/MediaOverlay.uni.driver';
import { DataHook } from './constants';

const byHook = (base, dataHook) => base.$(`[data-hook="${dataHook}"]`);
const getTitle = base => byHook(base, DataHook.Title);
const getBadge = base => byHook(base, DataHook.Badge);
const getSettingsMenu = base => byHook(base, DataHook.SettingsMenu);
const getSubtitle = base => byHook(base, DataHook.Subtitle);
const getContainer = base => byHook(base, DataHook.Container);
const getOverlayDriver = base => {
  const hoverComponent = byHook(base, DataHook.HoverComponent);
  return mediaOverlayDriverFactory(hoverComponent);
};
const hover = async base => getContainer(base).hover();
const getPrimaryAction = async base => {
  await hover(base);
  return byHook(base, DataHook.PrimaryAction);
};
const getSecondaryAction = async base => {
  await hover(base);
  return byHook(base, DataHook.SecondaryAction);
};

const cardGalleryItemDriverFactory = base => ({
  ...baseUniDriverFactory(base),
  getTitle: async () => {
    const title = getTitle(base);
    return (await title.exists()) ? title.text() : null;
  },
  getBadge: async () => {
    const badge = getBadge(base);
    return (await badge.exists()) ? badge._prop('firstChild') : null;
  },
  getSubtitle: async () => {
    const subtitle = getSubtitle(base);
    return (await subtitle.exists()) ? subtitle.text() : null;
  },
  getBackgroundImageUrl: async () => await getOverlayDriver(base).getMediaUrl(),
  click: async () => (await getPrimaryAction(base)).click(),
  getPrimaryActionLabel: async () => (await getPrimaryAction(base)).text(),
  isPrimaryActionDisabled: async () =>
    (await getPrimaryAction(base))._prop('disabled'),
  clickOnPrimaryAction: async () => (await getPrimaryAction(base)).click(),
  getSecondaryActionLabel: async () => (await getSecondaryAction(base)).text(),
  clickOnSecondaryAction: async () => (await getSecondaryAction(base)).click(),
  getSettingsMenu: async () => {
    await hover(base);
    const settingsMenu = getSettingsMenu(base);
    return (await settingsMenu.exists())
      ? settingsMenu._prop('firstChild')
      : null;
  },
  getBackgroundImageNode: async () => getOverlayDriver(base).getMediaNode(),
  hover: async () => hover(base),
});

export default cardGalleryItemDriverFactory;
