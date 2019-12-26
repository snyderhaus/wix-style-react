import { selectionSymbols } from '../symbols';
import {
  selectionComponentsNames as componentsNames,
  sharedComponentsNames,
} from '../components';

/**
 * Symbol => Component 4
 */
export const selectionSymbolsToComponents = {
  [selectionSymbols.dropdown]: [
    sharedComponentsNames.FormField,
    componentsNames.Dropdown,
  ],

  [selectionSymbols.multiSelectDropdown]: [
    sharedComponentsNames.FormField,
    componentsNames.MultiSelectCheckbox,
  ],

  [selectionSymbols.checkbox]: [
    sharedComponentsNames.FormField,
    componentsNames.Checkbox,
  ],

  [selectionSymbols.radio]: [
    sharedComponentsNames.FormField,
    componentsNames.RadioGroup,
  ],

  [selectionSymbols.toggle]: [
    sharedComponentsNames.FormField,
    componentsNames.ToggleSwitch,
  ],

  [selectionSymbols.segmentedToggle]: [
    sharedComponentsNames.FormField,
    componentsNames.SegmentedToggle,
  ],

  [selectionSymbols.thumbnailSelect]: [componentsNames.Thumbnail],

  [selectionSymbols.slider]: [
    sharedComponentsNames.FormField,
    componentsNames.Slider,
  ],

  [selectionSymbols.checkToggle]: [],
};
