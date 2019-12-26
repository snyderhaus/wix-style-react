import * as React from 'react';
import Content from "./Content";
import Header from "./Header";
import Subheader from "./Subheader";
import Divider from "./Divider";

export interface CardProps {
  children?: React.ReactNode,
  controls?: React.ReactNode,
  stretchVertically?: boolean,
  hideOverflow?: boolean,
  dataHook?: string,
  className?: string
}

declare const Card: React.FunctionComponent<CardProps> & {
  Content: typeof Content,
  Header: typeof Header,
  Divider: typeof Divider,
  Subheader: typeof Subheader,
};

export default Card;
