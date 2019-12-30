import React from 'react';
import InputArea from 'wix-style-react/InputArea';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px',
};

export default () => (
  <div>
    <div style={style}>
      Left to right
      <InputArea status="error" statusMessage="Error" />
    </div>
    <div className="rtl" style={style}>
      Right to left
      <InputArea rtl status="error" statusMessage="Error" />
    </div>
  </div>
);
