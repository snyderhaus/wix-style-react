import * as React from 'react';

export interface ContentProps {
  children?: React.ReactNode,
  size?: ContentSize,
}

export type ContentSize = 'medium' | 'large';

export default class Content extends React.PureComponent<ContentProps> {}
