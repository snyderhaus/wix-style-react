import React from 'react';
import PropTypes from 'prop-types';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import Tooltip from '../Tooltip';
import styles from './ErrorIndicator.st.css';

const ErrorIndicator = ({
  dataHook,
  errorMessage,
  tooltipPlacement,
  ...rest
}) => (
  <Tooltip
    upgrade
    dataHook={dataHook}
    appendTo="window"
    placement={tooltipPlacement}
    exitDelay={100}
    content={errorMessage}
    maxWidth={250}
  >
    <div {...styles('root', {}, rest)} disabled={errorMessage.length === 0}>
      <FormFieldError size="10px" />
    </div>
  </Tooltip>
);

ErrorIndicator.defaultProps = {
  errorMessage: '',
  tooltipPlacement: 'top',
};

ErrorIndicator.propTypes = {
  dataHook: PropTypes.string,
  errorMessage: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
};

export default ErrorIndicator;
