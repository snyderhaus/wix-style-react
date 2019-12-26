import React from 'react';
import Confirm from 'wix-ui-icons-common/Confirm';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';

import Text from '../../../Text';
import styles from './StepCircle.st.css';
import { STEP_TYPES } from '../../Consts';

const StepCircle = props => {
  const { number, active, type, stepHover } = props;

  const renderStepNumber = () => {
    return (
      <Text
        size={'small'}
        light={props.disabled}
        weight={'normal'}
        className={styles.text}
      >
        <a>{number}</a>
      </Text>
    );
  };

  const renderCompletedStep = () => {
    return <Confirm size={'24px'} />;
  };

  const renderErrorStep = () => {
    return <FormFieldErrorSmall size={'12px'} />;
  };

  return (
    <div
      {...styles(
        'root',
        {
          disabled: type === STEP_TYPES.DISABLED,
          selected: active,
          completed: type === STEP_TYPES.COMPLETED,
          error: type === STEP_TYPES.ERROR,
          stepHover: stepHover,
        },
        props,
      )}
    >
      {type === STEP_TYPES.ERROR
        ? renderErrorStep()
        : type === STEP_TYPES.COMPLETED
        ? renderCompletedStep()
        : renderStepNumber()}
    </div>
  );
};

export default StepCircle;
