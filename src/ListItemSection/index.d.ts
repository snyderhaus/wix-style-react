import * as React from 'react';

export type ListItemSectionTypes =
  | 'whitespace'
  | 'divider'
  | 'title'
  | 'subheader';

export interface ListItemSectionProps {
  dataHook?: string;
  className?: string;
  type?: ListItemSectionTypes;
  title?: string;
  suffix?: React.ReactNode;
  ellipsis?: boolean;
}

declare const ListItemSection: React.ComponentClass<ListItemSectionProps>;

export default ListItemSection;
