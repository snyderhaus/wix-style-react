import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.st.css';

const Item = ({ disabled, draggable, children, ...otherProps }) => (
  <div {...styles('root', { disabled, draggable }, otherProps)}>{children}</div>
);

Item.displayName = 'TimeTable.Item';

Item.propTypes = {
  disabled: PropTypes.bool.isRequired,
  draggable: PropTypes.bool.isRequired,
};

export default Item;
