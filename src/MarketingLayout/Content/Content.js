import React from 'react';
import styles from '../MarketingLayout.st.css';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Description from './Description';

const Content = ({ layoutProps, actions, title, description }) => (
  <div className={styles.contentWrapper}>
    <div className={styles.contentContainer}>
      <Heading appearance={layoutProps.titleAppearance}>{title}</Heading>
      <Description size={layoutProps.descriptionSize}>
        {description}
      </Description>
      {actions}
    </div>
  </div>
);

Content.propTypes = {
  layoutProps: PropTypes.object,
  actions: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default Content;
