import React from 'react';
import PropTypes from 'prop-types';
import FormFieldWarningFilled from 'wix-ui-icons-common/system/FormFieldWarningFilled';
import Tooltip from '../Tooltip';
import styles from './WarningIndicator.st.css';

const WarningIndicator = ({
  dataHook,
  warningMessage,
  tooltipPlacement,
  ...rest
}) => (
  <Tooltip
    upgrade
    dataHook={dataHook}
    appendTo="window"
    placement={tooltipPlacement}
    exitDelay={100}
    content={warningMessage}
    maxWidth={250}
  >
    <div {...styles('root', {}, rest)} disabled={warningMessage.length === 0}>
      <FormFieldWarningFilled />
    </div>
  </Tooltip>
);

WarningIndicator.defaultProps = {
  warningMessage: '',
  tooltipPlacement: 'top',
};

WarningIndicator.propTypes = {
  dataHook: PropTypes.string,
  warningMessage: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
};

export default WarningIndicator;
