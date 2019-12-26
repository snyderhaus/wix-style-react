import React from 'react';
import Text from '../../Text';
import { isString } from '../../utils/StringUtils';
import { MARKETING_LAYOUT_DESCRIPTION } from '../dataHooks';
import styles from '../MarketingLayout.st.css';
import PropTypes from 'prop-types';

const Description = ({ children, size }) => (
  <div className={styles.descriptionContainer}>
    {isString(children) ? (
      <Text dataHook={MARKETING_LAYOUT_DESCRIPTION} size={size}>
        {children}
      </Text>
    ) : (
      <div data-hook={MARKETING_LAYOUT_DESCRIPTION}>{children}</div>
    )}
  </div>
);

Description.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
};

export default Description;
