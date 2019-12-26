import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import TimeTable from '../TimeTable';
import { timeTablePrivateDriverFactory } from './TimeTable.private.uni.driver';

describe('TimeTable', () => {
  const render = createRendererWithUniDriver(timeTablePrivateDriverFactory);

  const renderTimeTable = (overrideProps = {}) => {
    const props = {
      columns: [
        {
          title: 'title 1',
          subtitle: 'subtitle 1',
          items: [{ content: 'item 1' }],
          droppable: true,
          disabled: true,
        },
        {
          title: 'title 2',
          subtitle: 'subtitle 2',
          items: [
            {
              content: 'item 2',
              disabled: false,
              draggable: true,
            },
          ],
          disabled: true,
        },
        {
          title: 'title 3',
          subtitle: 'subtitle 3',
          items: [{ content: 'item 3' }],
          active: true,
        },
        {
          title: 'title 4',
          subtitle: 'subtitle 4',
          items: [
            {
              content: 'item 4',
            },
            {
              content: 'item 5',
              draggable: false,
              disabled: true,
            },
          ],
        },
      ],
      ...overrideProps,
    };

    return render(<TimeTable {...props} />);
  };

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = renderTimeTable();
    expect(await driver.exists()).toBe(true);
  });

  it('should render with correct columns count', async () => {
    const { driver: driverOneColumn } = renderTimeTable({
      columns: [
        {
          title: 'column 1',
          subtitle: 'subtitle',
          items: [],
        },
      ],
    });
    const { driver: driverTwoColumns } = renderTimeTable({
      columns: [
        {
          title: 'column 1',
          subtitle: 'subtitle',
          items: [],
        },
        {
          title: 'column 2',
          subtitle: 'subtitle',
          items: [],
        },
      ],
    });

    expect(await driverOneColumn.getColumnCount()).toBe(1);
    expect(await driverTwoColumns.getColumnCount()).toBe(2);
  });

  it('should render with correct column titles', async () => {
    const { driver } = renderTimeTable();

    expect(await driver.getTitleAt(0)).toBe('title 1');
    expect(await driver.getTitleAt(1)).toBe('title 2');
    expect(await driver.getTitleAt(2)).toBe('title 3');
    expect(await driver.getTitleAt(3)).toBe('title 4');
  });

  it('should render with correct column subtitles', async () => {
    const { driver } = renderTimeTable();

    expect(await driver.getSubtitleAt(0)).toBe('subtitle 1');
    expect(await driver.getSubtitleAt(1)).toBe('subtitle 2');
    expect(await driver.getSubtitleAt(2)).toBe('subtitle 3');
    expect(await driver.getSubtitleAt(3)).toBe('subtitle 4');
  });

  it('should render with correct column active state', async () => {
    const { driver } = renderTimeTable();

    expect(await driver.isColumnActiveAt(0)).toBe(false);
    expect(await driver.isColumnActiveAt(1)).toBe(false);
    expect(await driver.isColumnActiveAt(2)).toBe(true);
    expect(await driver.isColumnActiveAt(3)).toBe(false);
  });

  it('should render with correct column disabled state', async () => {
    const { driver } = renderTimeTable();

    expect(await driver.isColumnDisabledAt(0)).toBe(true);
    expect(await driver.isColumnDisabledAt(1)).toBe(true);
    expect(await driver.isColumnDisabledAt(2)).toBe(false);
    expect(await driver.isColumnDisabledAt(3)).toBe(false);
  });

  it('should render with correct column droppable state', async () => {
    const { driver } = renderTimeTable();

    expect(await driver.isColumnDroppableAt(0)).toBe(true);
    expect(await driver.isColumnDroppableAt(1)).toBe(false);
    expect(await driver.isColumnDroppableAt(2)).toBe(true);
    expect(await driver.isColumnDroppableAt(3)).toBe(true);
  });

  it('should render with correct column items count', async () => {
    const { driver } = renderTimeTable();

    expect(await driver.getItemCountAt(0)).toBe(1);
    expect(await driver.getItemCountAt(1)).toBe(1);
    expect(await driver.getItemCountAt(2)).toBe(1);
    expect(await driver.getItemCountAt(3)).toBe(2);
  });

  it('should render with correct item disabled state', async () => {
    const { driver } = renderTimeTable();

    expect(await driver.isItemDisabledAt(0, 0)).toBe(true);
    expect(await driver.isItemDisabledAt(1, 0)).toBe(false);
    expect(await driver.isItemDisabledAt(2, 0)).toBe(false);
    expect(await driver.isItemDisabledAt(3, 0)).toBe(false);
    expect(await driver.isItemDisabledAt(3, 1)).toBe(true);
  });

  it('should render with correct item draggable state', async () => {
    const { driver } = renderTimeTable();

    expect(await driver.isItemDraggableAt(0, 0)).toBe(false);
    expect(await driver.isItemDraggableAt(1, 0)).toBe(true);
    expect(await driver.isItemDraggableAt(2, 0)).toBe(true);
    expect(await driver.isItemDraggableAt(3, 0)).toBe(true);
    expect(await driver.isItemDraggableAt(3, 1)).toBe(false);
  });

  it('should add new item when add item button is clicked', async () => {
    const onAdd = jest.fn();
    const columnIndex = 0;
    const { driver } = renderTimeTable({
      addItemButtonLabel: 'Add',
      onAdd,
      columns: [
        {
          title: 'title 1',
          subtitle: 'subtitle 1',
          items: [{ content: 'item 1' }],
        },
      ],
    });

    await driver.clickOnAddItemButtonAt(columnIndex);

    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith(columnIndex);
  });

  it('should show add item button when "onAdd" prop is provided', async () => {
    const { driver: driverWithoutAdd } = renderTimeTable({ onAdd: undefined });
    const { driver: driverWithAdd } = renderTimeTable({ onAdd: jest.fn() });

    expect(await driverWithAdd.addItemButtonExistsAt(0)).toBe(false); // Disabled column
    expect(await driverWithAdd.addItemButtonExistsAt(3)).toBe(true);
    expect(await driverWithoutAdd.addItemButtonExistsAt(3)).toBe(false);
  });
});
