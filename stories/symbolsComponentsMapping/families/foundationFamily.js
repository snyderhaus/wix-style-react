import { foundationSymbols } from '../symbols';
import {
  foundationComponentsNames as componentsNames,
  sharedComponentsNames,
} from '../components';

/**
 * Symbol => Component 1
 */
export const foundationSymbolsToComponents = {
  [foundationSymbols.typography]: [
    componentsNames.Heading,
    componentsNames.Text,
  ],
  [foundationSymbols.icons]: [sharedComponentsNames.Icon],
};
