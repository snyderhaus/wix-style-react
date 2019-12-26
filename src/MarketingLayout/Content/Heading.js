import React from 'react';
import Heading from '../../Heading';
import styles from '../MarketingLayout.st.css';
import { isString } from '../../utils/StringUtils';
import { MARKETING_LAYOUT_TITLE } from '../dataHooks';
import PropTypes from 'prop-types';

const HeadingContainer = ({ children, appearance }) => (
  <div className={styles.headingContainer}>
    {isString(children) ? (
      <Heading dataHook={MARKETING_LAYOUT_TITLE} appearance={appearance}>
        {children}
      </Heading>
    ) : (
      <div data-hook={MARKETING_LAYOUT_TITLE}>{children}</div>
    )}
  </div>
);

HeadingContainer.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.string,
};

export default HeadingContainer;
