import React from 'react';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';

import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import InputWithLabel from '../InputWithLabel';
import { inputWithLabelPrivateDriverFactory } from './InputWithLabel.private.uni.driver';
import dataHooks from '../../LabelledElement/dataHooks';
import Input from '../../Input';

describe('InputWithLabel', () => {
  const render = createRendererWithUniDriver(
    inputWithLabelPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render with value', async () => {
    const value = 'my value';
    const { driver } = render(<InputWithLabel value={value} />);
    const currentValue = await driver.getValue();
    expect(currentValue).toEqual(value);
  });

  it('should render without value', async () => {
    const { driver } = render(<InputWithLabel />);
    const currentValue = await driver.getValue();
    expect(currentValue).toBeFalsy();
  });

  it('should render a label', async () => {
    const label = 'my label';
    const { driver } = render(
      <InputWithLabel dataHook={dataHooks.labelledElement} label={label} />,
    );
    const currentLabel = await driver.getLabelText();
    expect(currentLabel).toEqual(label);
  });

  it('should render no icons', async () => {
    const { driver } = render(<InputWithLabel />);
    expect(await driver.getSuffixesCount()).toEqual(0);
  });

  it('should render a single icon', async () => {
    const icon = [<ChevronDown />];
    const { driver } = render(<InputWithLabel suffix={icon} />);
    expect(await driver.getSuffixesCount()).toEqual(1);
  });

  it('should render two icons', async () => {
    const icons = [<ChevronDown />, <ChevronDown />];
    const { driver } = render(<InputWithLabel suffix={icons} />);
    expect(await driver.getSuffixesCount()).toEqual(2);
  });

  it('should render an error message', async () => {
    const { driver } = render(
      <InputWithLabel status={Input.StatusError} statusMessage="a message" />,
    );
    expect(await driver.getErrorMessage()).toEqual('a message');
  });

  it('should not render a message without a status', async () => {
    const { driver } = render(<InputWithLabel statusMessage="a message" />);
    expect(await driver.hasErrorMessage()).toEqual(false);
  });

  it('should trigger onChange if provided', async () => {
    const onChange = jest.fn();
    const { driver } = render(
      <InputWithLabel label="my autocomplete" onChange={onChange} />,
    );
    await driver.enterText('a');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'a' }),
      }),
    );
  });

  it('should render Input with customInput', async () => {
    const customInputWithRef = React.forwardRef((props, ref) => (
      <input {...props} ref={ref} maxLength={3} />
    ));
    const { driver } = render(
      <InputWithLabel customInput={customInputWithRef} />,
    );
    expect(await driver.isCustomInput()).toEqual(true);
  });
});
