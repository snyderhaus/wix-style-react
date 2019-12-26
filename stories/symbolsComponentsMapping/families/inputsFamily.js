import { inputsSymbols } from '../symbols';
import {
  inputsComponentsNames as componentsNames,
  sharedComponentsNames,
} from '../components';

/**
 * Symbol => Component 2
 */
export const inputsSymbolsToComponents = {
  [inputsSymbols.textInput]: [
    sharedComponentsNames.FormField,
    componentsNames.Input,
  ],

  [inputsSymbols.textArea]: [
    sharedComponentsNames.FormField,
    componentsNames.InputArea,
  ],

  [inputsSymbols.richTextArea]: [
    sharedComponentsNames.FormField,
    componentsNames.RichTextInputArea,
  ],

  [inputsSymbols.numberInput]: [
    sharedComponentsNames.FormField,
    componentsNames.NumberInput,
  ],

  [inputsSymbols.numberRangeInput]: [],

  [inputsSymbols.incrementerInput]: [],

  [inputsSymbols.durationInput]: [],

  [inputsSymbols.timeInput]: [
    sharedComponentsNames.FormField,
    componentsNames.TimeInput,
  ],

  [inputsSymbols.dateInput]: [
    sharedComponentsNames.FormField,
    componentsNames.DateInput,
  ],

  [inputsSymbols.dateRangeInput]: [],

  [inputsSymbols.colorInput]: [
    sharedComponentsNames.FormField,
    componentsNames.ColorInput,
  ],

  [inputsSymbols.tagsInput]: [
    sharedComponentsNames.FormField,
    componentsNames.MultiSelect,
    sharedComponentsNames.Tag,
  ],

  [inputsSymbols.googleAddressInput]: [componentsNames.GoogleAddressInput],

  [inputsSymbols.searchInput]: [componentsNames.Search],

  [inputsSymbols.mediaInput]: [
    sharedComponentsNames.FormField,
    componentsNames.ImageViewer,
  ],
};
