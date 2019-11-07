import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import LabelledElement from '../LabelledElement';
import { labelledElementPrivateDriverFactory } from './LabelledElement.private.uni.driver';

const getDefaultProps = () => ({
  label: 'some label',
  value: undefined,
  children: <input />,
});

const createDriver = props => {
  const mergedProps = { ...getDefaultProps(), ...props };

  return createRendererWithUniDriver(labelledElementPrivateDriverFactory)(
    <LabelledElement {...mergedProps} />,
  );
};

describe('LabelledElement', () => {
  afterEach(() => {
    cleanup();
  });

  it('should set label text', async () => {
    const { driver } = createDriver({ label: 'my label' });
    const label = await driver.getLabelText();

    expect(label).toEqual('my label');
  });

  it('should associate label for attribute to input id', async () => {
    const { driver } = createDriver({
      children: <input data-hook="my-input" />,
    });
    const childrenDriver = driver.getChildren();
    const childInputDriver = await childrenDriver.$('[data-hook="my-input"]');

    const childInputId = await childInputDriver.attr('id');
    const labelForAttribute = await driver.getLabelForAttribute();

    expect(childInputId).toEqual(labelForAttribute);
  });

  it('should invoke children onBlur', async () => {
    const onBlurSpy = jest.fn();
    const { driver } = createDriver({
      children: <input data-hook="my-input" onBlur={onBlurSpy} />,
    });
    const childrenDriver = driver.getChildren();
    const childInputDriver = await childrenDriver.$('[data-hook="my-input"]');

    await childInputDriver.click();
    await driver.blur(childInputDriver);

    expect(onBlurSpy).toHaveBeenCalled();
  });

  it('should invoke children onFocus', async () => {
    const onFocusSpy = jest.fn();
    const { driver } = createDriver({
      children: <input data-hook="my-input" onFocus={onFocusSpy} />,
    });
    const childrenDriver = driver.getChildren();
    const childInputDriver = await childrenDriver.$('[data-hook="my-input"]');

    await childInputDriver.click();

    expect(onFocusSpy).toHaveBeenCalled();
  });

  describe('controlled input children', () => {
    it('should place label at the top when value is non-empty', async () => {
      const { driver } = createDriver({
        children: <input value="val" />,
        value: 'val',
      });

      const isLabelAtTop = await driver.isLabelAtTop();
      expect(isLabelAtTop).toEqual(true);
    });

    it('should not place label at the top when value is empty', async () => {
      const { driver } = createDriver({
        children: <input value="" />,
        value: '',
      });

      const isLabelAtTop = await driver.isLabelAtTop();
      expect(isLabelAtTop).toEqual(false);
    });

    it('should show placeholder when label is on top', async () => {
      const { driver } = createDriver({
        children: (
          <input value="val" data-hook="my-input" placeholder="placeholder" />
        ),
        value: 'val',
      });

      const childrenDriver = driver.getChildren();
      const childInputDriver = await childrenDriver.$('[data-hook="my-input"]');

      const childInputPlaceholder = await childInputDriver.attr('placeholder');
      expect(childInputPlaceholder).toEqual('placeholder');
    });

    it('should hide placeholder when label is on bottom', async () => {
      const { driver } = createDriver({
        children: <input data-hook="my-input" placeholder="placeholder" />,
        value: '',
      });

      const childrenDriver = driver.getChildren();
      const childInputDriver = await childrenDriver.$('[data-hook="my-input"]');

      const childInputPlaceholder = await childInputDriver.attr('placeholder');
      expect(childInputPlaceholder).toEqual('');
    });
  });

  describe('uncontrolled input children', () => {
    it('should place label at the top after text is typed', async () => {
      const { driver } = createDriver({
        children: <input data-hook="my-input" />,
      });

      const childrenDriver = driver.getChildren();
      const childInputDriver = await childrenDriver.$('[data-hook="my-input"]');
      await childInputDriver.enterValue('some text');

      const isLabelAtTop = await driver.isLabelAtTop();
      expect(isLabelAtTop).toEqual(true);
    });

    it('should not place label at the top when the input is empty', async () => {
      const { driver } = createDriver({
        children: <input />,
      });

      const isLabelAtTop = await driver.isLabelAtTop();
      expect(isLabelAtTop).toEqual(false);
    });
  });
});
