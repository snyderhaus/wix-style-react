/* eslint-disable react/prop-types */
import React from 'react';
import { MessageBoxMarketerialLayout } from 'wix-style-react/MessageBox';

export default () => (
  <MessageBoxMarketerialLayout
    title={'You are Wix Expert!'}
    content={
      <>
        <div>Congrats</div>
        <div>You've reached the next level.</div>
      </>
    }
    theme="white"
    primaryButtonLabel="Share Your Achievement"
    primaryButtonTheme="blue"
    dataHook="next-level-modal-content"
  />
);
