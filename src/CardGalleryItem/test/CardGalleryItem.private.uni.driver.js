import publicDriverFactory from '../CardGalleryItem.uni.driver';
import { DataHook } from '../constants';

export default base => ({
  ...publicDriverFactory(base),
  getHoveredContent: () => base.$(`[data-hook=${DataHook.HoverContent}]`),
});
