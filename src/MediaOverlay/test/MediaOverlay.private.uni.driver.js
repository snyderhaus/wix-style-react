import { mediaOverlayDriverFactory as publicDriverFactory } from '../MediaOverlay.uni.driver';
import styles from '../MediaOverlay.st.css';

export const mediaOverlayPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    getContentChildren: async () => await base.$$(`.${styles.contentArea} > *`),
  };
};
