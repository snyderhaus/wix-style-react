import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Swatches from '../Swatches';
import { swatchesPrivateDriverFactory } from './Swatches.private.uni.driver';

describe('Swatches', () => {
  const render = createRendererWithUniDriver(swatchesPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render swatches', async () => {
    const { driver } = render(<Swatches colors={['#fff', '#000']} />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getSwatchCount()).toEqual(2);
  });

  it('should call callback with color', async () => {
    const onClick = jest.fn();

    const { driver } = render(
      <Swatches onClick={onClick} colors={['#ffffff', '#000000']} />,
    );

    const swatch = await driver.getSwatch(1);

    await swatch.click();

    expect(onClick).toBeCalledWith('#000000');
  });

  it('should indicate selected color', async () => {
    const { driver } = render(
      <Swatches selected={'#000000'} colors={['#ffffff', '#000000']} />,
    );

    expect(await driver.isSwatchSelectedAt(0)).toBe(false);
    expect(await driver.isSwatchSelectedAt(1)).toBe(true);
  });

  it('should remove duplicate colors', async () => {
    const { driver } = render(
      <Swatches colors={['red', '#FF0000', 'rgb(255, 0, 0)']} />,
    );

    expect(await driver.getSwatchCount()).toEqual(1);
  });

  describe('No Color', () => {
    it('should add no color option if prop given', async () => {
      const { driver } = render(<Swatches showClear colors={['#000000']} />);

      const emptySwatch = await driver.getEmptySwatch();

      expect(await emptySwatch.exists()).toBe(true);
    });

    it('should return empty string if clicked', async () => {
      const onClick = jest.fn();

      const { driver } = render(
        <Swatches showClear onClick={onClick} colors={['#000000']} />,
      );

      await driver.clickEmptySwatch();

      expect(onClick).toBeCalledWith('');
    });

    it('should be selected if selected prop is not passed', async () => {
      const { driver } = render(<Swatches showClear colors={['#000000']} />);

      const emptySwatch = await driver.getEmptySwatch();

      expect(await emptySwatch.isSelected()).toBe(true);
    });

    it('should not add tooltip if showClearMessage is not given', async () => {
      const { driver } = render(<Swatches showClear colors={['#000000']} />);

      const emptySwatchTooltip = await driver.getEmptySwatchTooltip();

      expect(await emptySwatchTooltip.tooltipExists()).toBe(false);
    });

    it('should accept showClearMessage and show in tooltip', async () => {
      const message = 'no color selected';

      const { driver } = render(
        <Swatches showClear showClearMessage={message} colors={['#000000']} />,
      );

      const emptySwatchTooltip = await driver.getEmptySwatchTooltip();

      expect(await emptySwatchTooltip.getTooltipText()).toBe(message);
    });
  });

  describe('Add color button', () => {
    it('should be rendered when showAddButton props is true', async () => {
      const { driver } = render(
        <Swatches colors={['#000000']} showAddButton />,
      );

      expect(await driver.addButtonExists()).toBe(false);
    });

    it('should not show color picker initially', async () => {
      const { driver } = render(
        <Swatches colors={['#000000']} showAddButton />,
      );

      expect(await driver.isColorPickerShown()).toBe(false);
    });

    it('should show color picker on add button click', async () => {
      const { driver } = render(
        <Swatches colors={['#000000']} showAddButton />,
      );

      const addButton = await driver.getAddButton();
      await addButton.click();

      expect(await driver.isColorPickerShown()).toBe(true);
    });

    it('should not call onAdd callback when no color is selected in color picker', async () => {
      const onAdd = jest.fn();
      const { driver } = render(
        <Swatches colors={['#000000']} showAddButton onAdd={onAdd} />,
      );

      const addButton = await driver.getAddButton();
      await addButton.click();

      const colorpicker = await driver.getColorPicker();
      await colorpicker.confirm();

      expect(onAdd).not.toHaveBeenCalled();
    });

    it('should call onAdd callback when selecting a color in color picker', async () => {
      const addSpy = jest.fn();
      const { driver } = render(
        <Swatches colors={['#000000']} showAddButton onAdd={addSpy} />,
      );

      const addButton = await driver.getAddButton();
      await addButton.click();

      const colorpicker = await driver.getColorPicker();
      await colorpicker.selectBlackColor();
      await colorpicker.confirm();

      expect(addSpy).toHaveBeenCalledTimes(1);
      expect(addSpy).toBeCalledWith('#000000');
    });

    it('should call onChange callback when change color in color picker', async () => {
      const changeSpy = jest.fn();
      const { driver } = render(
        <Swatches colors={['#000000']} showAddButton onChange={changeSpy} />,
      );

      const addButton = await driver.getAddButton();
      await addButton.click();

      const colorpicker = await driver.getColorPicker();
      await colorpicker.selectBlackColor();

      expect(changeSpy).toHaveBeenCalledTimes(1);
      expect(changeSpy).toBeCalledWith('#000000');
    });

    it('should call onCancel callback when cancel button clicked in color picker', async () => {
      const cancelSpy = jest.fn();
      const { driver } = render(
        <Swatches colors={['#000000']} showAddButton onCancel={cancelSpy} />,
      );

      const addButton = await driver.getAddButton();
      await addButton.click();

      const colorpicker = await driver.getColorPicker();
      await colorpicker.clickCancelButton();

      expect(cancelSpy).toHaveBeenCalledTimes(1);
      expect(cancelSpy).toBeCalledWith();
    });

    it('should call onCancel callback when closed color picker by clicking outside', async () => {
      const cancelSpy = jest.fn();
      const { driver } = render(
        <Swatches colors={['#000000']} showAddButton onCancel={cancelSpy} />,
      );

      const addButton = await driver.getAddButton();
      await addButton.click();
      await driver.clickOutsideColorPicker();

      expect(cancelSpy).toHaveBeenCalledTimes(1);
      expect(cancelSpy).toBeCalledWith();
    });

    it('should close color picker when clicking cancel button', async () => {
      const addSpy = jest.fn();
      const { driver } = render(
        <Swatches colors={['#000000']} showAddButton onAdd={addSpy} />,
      );

      const addButton = await driver.getAddButton();
      await addButton.click();

      const colorpicker = await driver.getColorPicker();
      await colorpicker.selectBlackColor();
      await colorpicker.cancel();

      expect(addSpy).not.toBeCalled();

      expect(await driver.isColorPickerShown()).toBe(false);
    });

    it('should accept showClearMessage and show in tooltip', async () => {
      const message = 'no color selected';
      const { driver } = render(
        <Swatches
          colors={['#000000']}
          showAddButton
          addButtonMessage={message}
        />,
      );

      const addButton = await driver.getAddButton();

      expect(await addButton.getTooltipText()).toBe(message);
    });
  });
});
