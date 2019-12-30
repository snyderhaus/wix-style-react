import React from 'react';
import stringToColor from '../string-to-color';

describe('Avatar string to color', () => {
  const someName = 'Some name';
  const someOtherName = 'Some other name';
  const color1 = 'A2';
  const color2 = 'A4';

  it('should have a color for a name', async () => {
    expect(stringToColor(someName)).toEqual(color1);
  });

  it('should have a color for a different name', async () => {
    expect(stringToColor(someOtherName)).toEqual(color2);
  });

  it('should handle empty state', async () => {
    expect(stringToColor()).toEqual(undefined);
  });
});
