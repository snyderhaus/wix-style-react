import { buttonsSymbols } from '../symbols';
import { buttonsComponentsNames as componentsNames } from '../components';

/**
 * Symbol => Component 5
 */
export const buttonsSymbolsToComponents = {
  [buttonsSymbols.button]: [componentsNames.Button],

  [buttonsSymbols.iconButton]: [componentsNames.IconButton],

  [buttonsSymbols.textButton]: [componentsNames.TextButton],

  [buttonsSymbols.closeButton]: [componentsNames.CloseButton],

  [buttonsSymbols.addItem]: [componentsNames.AddItem],
};
