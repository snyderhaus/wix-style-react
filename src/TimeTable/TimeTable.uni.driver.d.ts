import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface TimeTableDriver extends BaseUniDriver {
  getColumnCount(): Promise<number>;
  getTitleAt(columnIndex: number): Promise<string>;
  getSubtitleAt(columnIndex: number): Promise<string>;
  isColumnActiveAt(columnIndex: number): Promise<boolean>;
  isColumnDisabledAt(columnIndex: number): Promise<boolean>;
  isColumnDroppableAt(columnIndex: number): Promise<boolean>;
  getItemCountAt(columnIndex: number): Promise<number>;
  isItemDisabledAt(columnIndex: number, itemIndex: number): Promise<boolean>;
  isItemDraggableAt(columnIndex: number, itemIndex: number): Promise<boolean>;
  clickOnAddItemButtonAt(columnIndex: number): Promise<void>;
  addItemButtonExistsAt(columnIndex: number): Promise<boolean>;
}
