import { paletteDriverFactory as publicDriverFactory } from '../Palette.uni.driver';

export const palettePrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
