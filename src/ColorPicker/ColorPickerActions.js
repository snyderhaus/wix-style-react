import React from 'react';
import { func } from 'prop-types';
import X from 'wix-ui-icons-common/X';
import Check from 'wix-ui-icons-common/Check';

import IconButton from '../IconButton';
import css from './ColorPickerActions.scss';

const ColorPickerActions = ({ onCancel, onConfirm, disabled }) => (
  <div className={css.root}>
    <IconButton
      dataHook="color-picker-cancel-button"
      size="small"
      priority="secondary"
      onClick={onCancel}
    >
      <X />
    </IconButton>
    <IconButton
      dataHook="color-picker-confirm-button"
      size="small"
      disabled={disabled}
      onClick={onConfirm}
    >
      <Check />
    </IconButton>
  </div>
);

ColorPickerActions.propTypes = {
  onCancel: func.isRequired,
  onConfirm: func.isRequired,
};

export default ColorPickerActions;
