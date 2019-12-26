export const paletteDriverFactory = base => {
  return {
    exists: async () => base.exists(),
  };
};
