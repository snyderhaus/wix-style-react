import * as React from 'react';

export type ListItemSelectSizes =
  | 'small'
  | 'medium';

export interface ListItemSelectProps {
  size?: ListItemSelectSizes;
  dataHook?: string;
  className?: string;
  title?: string;
  suffix?: React.ReactNode;
  ellipsis?: boolean;
  checkbox?: boolean;
  prefix?: React.ReactNode;
  subtitle?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

declare const ListItemSelect: React.ComponentClass<ListItemSelectProps>;

export default ListItemSelect;
