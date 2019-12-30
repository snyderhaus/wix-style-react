import FullTextView from '..';
import { storySettings } from './storySettings';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: FullTextView,
  componentPath: '..',

  componentProps: {
    children: 'Very long fancy and hardly fitting tab',
    maxWidth: '172px',
  },
};
