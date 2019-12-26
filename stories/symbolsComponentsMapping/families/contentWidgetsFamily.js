import { contentWidgetsSymbols } from '../symbols';
import {
  contentWidgetsComponentsNames,
  sharedComponentsNames,
} from '../components';

/**
 * Symbol => Component 12
 */
export const contentWidgetsSymbolsToComponents = {
  [contentWidgetsSymbols.imageWidget]: [],

  [contentWidgetsSymbols.emptyState]: [sharedComponentsNames.EmptyState],

  [contentWidgetsSymbols.statisticsWidget]: [
    contentWidgetsComponentsNames.StatisticsWidget,
  ],

  [contentWidgetsSymbols.carousel]: [contentWidgetsComponentsNames.Carousel],

  [contentWidgetsSymbols.accordion]: [contentWidgetsComponentsNames.Accordion],

  [contentWidgetsSymbols.cardGalleryItem]: [
    contentWidgetsComponentsNames.CardGalleryItem,
  ],

  [contentWidgetsSymbols.preview]: [
    contentWidgetsComponentsNames.PreviewWidget,
    contentWidgetsComponentsNames.BrowserPreviewWidget,
    contentWidgetsComponentsNames.MobilePreviewWidget,
  ],

  [contentWidgetsSymbols.omniSetup]: [],
};
