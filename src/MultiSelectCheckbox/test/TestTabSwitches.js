import React from 'react';
import MultiSelectCheckbox from 'wix-style-react/MultiSelectCheckbox';

import { storySettings } from '../docs/storySettings';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px',
};

const options = Array.from(new Array(30), (_, id) => ({
  id,
  value: `Option ${id + 1}`,
}));

export default () => (
  <div>
    <div style={style}>
      30 options
      <br />
      <MultiSelectCheckbox
        options={options}
        dataHook={storySettings.dataHook}
        onSelect={() => {}}
      />
    </div>
  </div>
);
