import { modalsSymbols } from '../symbols';
import { modalsComponentsNames as componentsNames } from '../components';

/**
 * Symbol => Component 9
 */
export const modalsSymbolsToComponents = {
  [modalsSymbols.alert]: [
    componentsNames.MessageBoxFunctionalLayout,
    componentsNames.Modal,
  ],

  [modalsSymbols.content]: [
    componentsNames.MessageBoxFunctionalLayout,
    componentsNames.Modal,
  ],

  [modalsSymbols.marketing]: [
    componentsNames.MessageBoxMarketerialLayout,
    componentsNames.Modal,
  ],
  [modalsSymbols.preview]: [
    componentsNames.ModalPreviewLayout,
    componentsNames.Modal,
  ],
  [modalsSymbols.mobile]: [
    componentsNames.ModalMobileLayout,
    componentsNames.Modal,
  ],
};
