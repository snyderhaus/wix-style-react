import '@storybook/addon-options/register';
import '@storybook/addon-links/register';
import '@storybook/addon-google-analytics/dist/register';
import 'storybook-addon-i18n/register';

// Set google analytics ID Var;

if (!process.env.VCS_BRANCH_NAME) {
  window.STORYBOOK_GA_ID = 'UA-54339416-6';
}
