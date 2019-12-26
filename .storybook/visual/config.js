import * as React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withI18n } from 'storybook-addon-i18n';
import { version } from '../../package.json';
import { create } from '@storybook/theming';

import '../../src/assets/helvetica.scss';
import './stories.scss';

function loadStories() {
  const req = require.context('../../src', true, /\.visual\.js$/);
  req.keys().forEach(filename => req(filename));
}
const theme = create({
  brandTitle: `Wix Style React ${version}`,
  brandUrl: 'https://github.com/wix/wix-style-react',
});

// Parameters
addParameters({
  options: {
    theme,
    showPanel: false,
    isToolshown: true,
  },
  i18n: {
    provider: ({ children }) => <React.Fragment>{children}</React.Fragment>,
    supportedLocales: ['LTR', 'RTL'],
    providerLocaleKey: 'locale',
    getDirection: locale => locale.toLowerCase(),
  },
});

// Decorators
addDecorator(withI18n);

// Load stories
configure(loadStories, module);
