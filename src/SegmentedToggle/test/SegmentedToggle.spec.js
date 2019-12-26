import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import LockLocked from 'wix-ui-icons-common/LockLocked';

import SegmentedToggle from '../SegmentedToggle';
import { segmentedToggleDriverFactory } from '../SegmentedToggle.uni.driver';

describe('SegmentedToggle', () => {
  const dataHook1 = 'clicked-button1';
  const dataHook2 = 'clicked-button2';

  const createDriver = createUniDriverFactory(segmentedToggleDriverFactory);

  const SegmentedButton = props => (
    <SegmentedToggle {...props}>
      <SegmentedToggle.Button dataHook={dataHook1} value="short">
        Short
      </SegmentedToggle.Button>
      <SegmentedToggle.Button dataHook={dataHook2} value="long">
        Long
      </SegmentedToggle.Button>
    </SegmentedToggle>
  );

  const SegmentedIcon = props => (
    <SegmentedToggle {...props}>
      <SegmentedToggle.Icon dataHook={dataHook1} value="short" title="Locked">
        <LockLocked />
      </SegmentedToggle.Icon>
      <SegmentedToggle.Icon dataHook={dataHook2} value="long" title="Locked">
        <LockLocked />
      </SegmentedToggle.Icon>
    </SegmentedToggle>
  );

  it('`onClick` handler should return selected value for Button ', async () => {
    const onClick = jest.fn();

    const driver = createDriver(<SegmentedButton onClick={onClick} />);
    await driver.selectChild(2);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0][1]).toBe('long');
  });

  it('`onClick` handler should return selected value for Icon ', async () => {
    const onClick = jest.fn();

    const driver = createDriver(<SegmentedIcon onClick={onClick} />);
    await driver.selectChild(2);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0][1]).toBe('long');
  });

  it('`selected` prop should disallow selecting other items', async () => {
    const selected = 'short';

    const driver = createDriver(<SegmentedButton selected={selected} />);
    await driver.selectChild(2);

    expect(await driver.isSelected(dataHook1)).toBe(true);
  });
});
