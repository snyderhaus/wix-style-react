import { notificationsSymbols } from '../symbols';
import { notificationsComponentsNames as componentsNames } from '../components';

/**
 * Symbol => Component 8
 */
export const notificationsSymbolsToComponents = {
  [notificationsSymbols.notification]: [componentsNames.Notification],

  [notificationsSymbols.floatingNotification]: [
    componentsNames.FloatingNotification,
  ],

  [notificationsSymbols.sectionHelper]: [componentsNames.SectionHelper],
};
