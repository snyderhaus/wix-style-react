import { pickerSymbols } from '../symbols';
import { pickerComponentsNames as componentsNames } from '../components';

/**
 * Symbol => Component 10
 */
export const pickerSymbolsToComponents = {
  [pickerSymbols.editableSelector]: [componentsNames.EditableSelector],

  [pickerSymbols.modalSelector]: [componentsNames.ModalSelectorLayout],

  [pickerSymbols.colorPicker]: [
    componentsNames.ColorPicker,
    componentsNames.Swatches,
  ],

  [pickerSymbols.calendar]: [componentsNames.Calendar],

  [pickerSymbols.calendarPanel]: [
    componentsNames.CalendarPanel,
    componentsNames.CalendarPanelFooter,
  ],

  [pickerSymbols.swatches]: [componentsNames.Swatches],
};
