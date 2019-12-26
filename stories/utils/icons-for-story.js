import React from 'react';

import * as Icons from 'wix-ui-icons-common';

export default Object.values(Icons).map(icon => ({
  label: icon.displayName,
  value: React.createElement(icon),
}));
