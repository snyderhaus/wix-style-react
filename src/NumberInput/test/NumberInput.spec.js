import React from 'react';
import NumberInput from '../NumberInput';
import { numberInputPrivateDriverFactory } from '../NumberInput.private.uni.driver';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';

describe('NumberInput', () => {
  const render = createRendererWithUniDriver(numberInputPrivateDriverFactory);
  const createDriver = jsx => render(jsx).driver;
  afterEach(() => cleanup());
  it('should render', async () => {
    const driver = createDriver(<NumberInput />);
    expect(await driver.exists()).toBeTruthy();
  });

  it('should render correct initial value', async () => {
    const driver = createDriver(<NumberInput value={12} />);
    expect(await driver.getValue()).toEqual('12');
    const driverDefaultValue = createDriver(<NumberInput defaultValue={13} />);
    expect(await driverDefaultValue.getValue()).toEqual('13');
  });

  it('should increment value', async () => {
    const value = 0,
      onChange = jest.fn();
    const div = document.createElement('div');
    document.body.appendChild(div);
    const input = <NumberInput onChange={onChange} value={value} />;
    const driver = createDriver(input);
    await driver.clickOnIncrement();
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('should decrement value', async () => {
    const value = 0,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} />,
    );
    await driver.clickOnDecrement();
    expect(onChange).toHaveBeenCalledWith(-1);
  });

  it('should increment by given step', async () => {
    const value = 0,
      step = 0.1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} step={step} />,
    );
    await driver.clickOnIncrement();
    expect(onChange).toHaveBeenCalledWith(0.1);
  });

  it('should decrement by given step', async () => {
    const value = 0,
      step = 0.1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} step={step} />,
    );
    await driver.clickOnDecrement();
    expect(onChange).toHaveBeenCalledWith(-0.1);
  });

  it('should not allow incrementing above max value', async () => {
    const value = 1,
      max = 1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} max={max} />,
    );
    await driver.clickOnIncrement();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should allow max value to equal 0', async () => {
    const value = 0,
      max = 0,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} max={max} />,
    );
    await driver.clickOnIncrement();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should not allow decrementing below min value', async () => {
    const value = -1,
      min = -1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} min={min} />,
    );
    await driver.clickOnDecrement();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should allow min value to equal 0', async () => {
    const value = 0,
      min = 0,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} min={min} />,
    );
    await driver.clickOnDecrement();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should work in uncontrolled mode', async () => {
    const onChange = jest.fn();
    const driver = createDriver(<NumberInput onChange={onChange} />);
    await driver.clickOnIncrement();
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('should work in controlled mode', async () => {
    let value = 5;
    const onChange = e => (value = e);
    const { driver, rerender } = render(
      <NumberInput onChange={onChange} value={value} />,
    );
    await driver.enterText(8);
    rerender(<NumberInput value={value} />);
    expect(await driver.getValue()).toEqual('8');
  });

  it('should render initial value if value === 0', async () => {
    const driver = createDriver(<NumberInput value={0} />);
    expect(await driver.getValue()).toEqual('0');
  });

  it('should increment to 1 if passed undefined', async () => {
    const driver = createDriver(<NumberInput value={undefined} />);
    await driver.clickOnIncrement();
    expect(await driver.getValue()).toEqual('1');
  });

  it('should increment to 1 if passed empty string', async () => {
    const driver = createDriver(<NumberInput value={''} />);
    await driver.clickOnIncrement();
    expect(await driver.getValue()).toEqual('1');
  });

  it('should decrement to -1 if passed undefined', async () => {
    const driver = createDriver(<NumberInput value={undefined} />);
    await driver.clickOnDecrement();
    expect(await driver.getValue()).toEqual('-1');
  });

  it('should decrement to -1 if passed empty string', async () => {
    const driver = createDriver(<NumberInput value={''} />);
    await driver.clickOnDecrement();
    expect(await driver.getValue()).toEqual('-1');
  });

  it('changing input value should call onChange with number value', async () => {
    const onChange = jest.fn();
    const driver = createDriver(<NumberInput onChange={onChange} />);
    await driver.enterText('1234');
    expect(onChange).toHaveBeenCalledWith(1234);
  });

  it('should render an empty string given an initial value of empty string', async () => {
    const driver = createDriver(<NumberInput value="" />);
    expect(await driver.getValue()).toEqual('');
  });

  it('should update value when value prop changes', async () => {
    const { driver, rerender } = render(<NumberInput value={0} />);
    rerender(<NumberInput value={5} />);
    expect(await driver.getValue()).toEqual('5');
  });

  it('should render a negative value when a negative value is entered', async () => {
    const driver = createDriver(<NumberInput />);
    await driver.enterText('-15');
    expect(await driver.getValue()).toEqual('-15');
  });

  it('should NOT render `0` when `null` is the given value', async () => {
    const driver = createDriver(<NumberInput value={null} />);
    expect(await driver.getValue()).not.toEqual('0');
  });

  it('should NOT render `0` when `-` (minus sign) is entered', async () => {
    let value = 5;
    const onChange = e => (value = e);
    const { driver, rerender } = render(
      <NumberInput onChange={onChange} value={value} />,
    );
    await driver.enterText('-');
    rerender(<NumberInput value={value} />);
    expect(await driver.getValue()).not.toEqual('0');
  });

  it('when entered value is `-` should call onChange with null', async () => {
    const onChange = jest.fn();
    const driver = createDriver(<NumberInput onChange={onChange} />);
    await driver.enterText('-');
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('when entered value is `.` should call onChange with null', async () => {
    const onChange = jest.fn();
    const driver = createDriver(<NumberInput onChange={onChange} />);
    await driver.enterText('.');
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('strict mode should prevent manually entering numbers above max value', async () => {
    const onChange = jest.fn();
    const max = 10;
    const driver = createDriver(
      <NumberInput max={max} strict onChange={onChange} />,
    );
    await driver.enterText('215');
    expect(onChange).toHaveBeenCalledWith(max);
    expect(await driver.getValue()).toEqual('10');
  });

  it('strict mode should prevent manually entering numbers below min value', async () => {
    const onChange = jest.fn();
    const min = 0;
    const driver = createDriver(
      <NumberInput min={min} strict onChange={onChange} />,
    );
    await driver.enterText('-215');
    expect(onChange).toHaveBeenCalledWith(min);
    expect(await driver.getValue()).toEqual('0');
  });

  it('strict mode should set value to max if value typed is closer', async () => {
    const onChange = jest.fn();
    const min = 0;
    const max = 100;
    const driver = createDriver(
      <NumberInput min={min} max={max} strict onChange={onChange} />,
    );
    await driver.enterText('101');
    expect(onChange).toHaveBeenCalledWith(max);
    expect(await driver.getValue()).toEqual('100');
  });

  it('strict mode should set value to min if value typed is closer', async () => {
    const onChange = jest.fn();
    const min = 0;
    const max = 100;
    const driver = createDriver(
      <NumberInput min={min} max={max} strict onChange={onChange} />,
    );
    await driver.enterText('-2');
    expect(onChange).toHaveBeenCalledWith(min);
    expect(await driver.getValue()).toEqual('0');
  });

  it('should take into account `defaultValue`', async () => {
    const onChange = jest.fn();
    const min = 0;
    const max = 100;
    const defaultValue = 42;
    const driver = createDriver(
      <NumberInput
        defaultValue={defaultValue}
        min={min}
        max={max}
        onChange={onChange}
      />,
    );
    expect(await driver.getValue()).toEqual('42');
    await driver.clickOnDecrement();
    expect(await driver.getValue()).toEqual('41');
  });
});
