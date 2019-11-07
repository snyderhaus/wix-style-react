import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

import Content from './Content';
import Header from './Header';
import Subheader from './Subheader';
import Divider from './Divider';
import styles from './Card.scss';

const Card = ({
  stretchVertically,
  hideOverflow,
  className,
  children,
  dataHook,
}) => (
  <div
    className={classNames(styles.card, className, {
      [styles.stretchVertically]: stretchVertically,
      [styles.hideOverflow]: hideOverflow,
    })}
    children={children}
    data-hook={dataHook}
  />
);

Card.displayName = 'Card';

Card.propTypes = {
  /** any node to render inside card */
  children: node,
  /** makes the card stretch to max height in a container */
  stretchVertically: bool,
  /** makes the card's overflow content to be hidden */
  hideOverflow: bool,
  /** additional css classes */
  className: string,
  dataHook: string,
};

Card.defaultProps = {
  stretchVertically: false,
};

Card.Content = Content;
Card.Header = Header;
Card.Divider = Divider;
Card.Subheader = Subheader;

export default Card;
