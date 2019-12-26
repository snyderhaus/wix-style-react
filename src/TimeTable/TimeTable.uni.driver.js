import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { DataAttribute, DataHook } from './constants';

export const timeTableDriverFactory = base => {
  const byHook = dataHook => `[data-hook="${dataHook}"]`;

  const getElementAt = async (dataHook, index) =>
    (await base.$$(byHook(dataHook))).get(index);

  const getBooleanDataAttribute = async (element, dataAttribute) =>
    (await element.attr(dataAttribute)) === 'true';

  const getAllColumnItemElementsAt = async columnIndex => {
    const column = await getElementAt(DataHook.Column, columnIndex);
    return column.$$(byHook(DataHook.Item));
  };

  const getColumnItemElementAt = async (columnIndex, itemIndex) => {
    const items = await getAllColumnItemElementsAt(columnIndex);
    return items.get(itemIndex);
  };

  const getAddItemButtonElementAt = async columnIndex => {
    const column = await getElementAt(DataHook.Column, columnIndex);
    await column.hover();
    return column.$(byHook(DataHook.AddItemButton));
  };

  return {
    ...baseUniDriverFactory(base),

    /** Get column count. */
    getColumnCount: async () => {
      return (await base.$$(byHook(DataHook.Column))).count();
    },

    /** Get title at column index. */
    getTitleAt: async columnIndex => {
      return (await getElementAt(DataHook.Title, columnIndex)).text();
    },

    /** Get subtitle at column index. */
    getSubtitleAt: async columnIndex => {
      return (await getElementAt(DataHook.Subtitle, columnIndex)).text();
    },

    /** Get active state at column index. */
    isColumnActiveAt: async columnIndex => {
      const column = await getElementAt(DataHook.Column, columnIndex);
      return getBooleanDataAttribute(column, DataAttribute.ColumnActive);
    },

    /** Get disabled state at column index. */
    isColumnDisabledAt: async columnIndex => {
      const column = await getElementAt(DataHook.Column, columnIndex);
      return getBooleanDataAttribute(column, DataAttribute.ColumnDisabled);
    },

    /** Get droppable state at column index. */
    isColumnDroppableAt: async columnIndex => {
      const column = await getElementAt(DataHook.Column, columnIndex);
      return getBooleanDataAttribute(column, DataAttribute.ColumnDroppable);
    },

    /** Get item count at column index. */
    getItemCountAt: async columnIndex => {
      return (await getAllColumnItemElementsAt(columnIndex)).count();
    },

    /** Get item disabled state at column and item index. */
    isItemDisabledAt: async (columnIndex, itemIndex) => {
      const item = await getColumnItemElementAt(columnIndex, itemIndex);
      return getBooleanDataAttribute(item, DataAttribute.ItemDisabled);
    },

    /** Get item draggable state at column and item index. */
    isItemDraggableAt: async (columnIndex, itemIndex) => {
      const item = await getColumnItemElementAt(columnIndex, itemIndex);
      return getBooleanDataAttribute(item, DataAttribute.ItemDraggable);
    },

    /** Click on add item button at column index. */
    clickOnAddItemButtonAt: async columnIndex => {
      const addItemButton = await getAddItemButtonElementAt(columnIndex);
      return addItemButton.click();
    },

    /** Check if add button is shown on hover at column index. */
    addItemButtonExistsAt: async columnIndex => {
      const addItemButton = await getAddItemButtonElementAt(columnIndex);
      return addItemButton.exists();
    },
  };
};
