import React from 'react';
import { oneOf, bool, any, string } from 'prop-types';
import ellipsisHOC from '../common/EllipsisHOC';
import style from './Heading.st.css';

export const APPEARANCES = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6',
};

const Heading = ({ light, appearance, children, ...rest }) => {
  const { dataHook, ...headingProps } = rest;
  return React.createElement(
    appearance.toLowerCase(),
    {
      ...headingProps,
      'data-hook': dataHook,
      ...style('root', { light, appearance }, rest),
    },
    children,
  );
};

Heading.displayName = 'Heading';

Heading.propTypes = {
  dataHook: string,
  /** any nodes to be rendered (usually text nodes) */
  children: any,

  /** is the text has dark or light skin */
  light: bool,

  /** typography of the heading */
  appearance: oneOf(Object.keys(APPEARANCES)),

  ...ellipsisHOC.propTypes,
};

Heading.defaultProps = {
  appearance: APPEARANCES.H1,
  light: false,
};

export default ellipsisHOC(Heading);
