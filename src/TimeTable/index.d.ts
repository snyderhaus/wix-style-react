import * as React from 'react';

export type TimeTableInsertPosition = 'start' | 'end' | 'any';

export interface TimeTableItemProps {
  disabled: boolean;
  draggable: boolean;
}

export interface TimeTableContentRenderFunctionData {
  Item: React.FC<TimeTableItemProps>;
  disabled: boolean;
  draggable: boolean;
}

export type TimeTableContentRenderFunction =
  (data: TimeTableContentRenderFunctionData) => React.ReactNode;

export interface TimeTableItem {
  content: React.ReactNode | TimeTableContentRenderFunction;
  disabled?: boolean;
  draggable?: boolean;
}

export interface TimeTableColumn {
  title: string;
  subtitle: string;
  disabled?: boolean;
  droppable?: boolean;
  active?: boolean;
  items: TimeTableItem[];
}

export interface TimeTableChangeDetails {
  addedToColumnIndex: number;
  removedFromColumnIndex: number;
  addedItemIndex: number;
  removedItemIndex: number;
}

export interface TimeTableProps {
  dataHook?: string;
  insertPosition?: TimeTableInsertPosition;
  addItemButtonLabel?: React.ReactNode;
  columns?: TimeTableColumn[];
  height?: string | number;
  onAdd?(columnIndex: number): void;
  onChange?(columns: TimeTableColumn[], details: TimeTableChangeDetails): void;
}

export default class TimeTable extends React.PureComponent<TimeTableProps> {}
