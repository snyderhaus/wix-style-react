import { layoutSymbols } from '../symbols';
import {
  layoutComponentsNames as componentsNames,
  sharedComponentsNames,
} from '../components';

/**
 * Symbol => Component 3
 */
export const layoutSymbolsToComponents = {
  [layoutSymbols.pageLayout]: [
    componentsNames.Page,
    componentsNames.PageHeader,
    componentsNames.Grid,
    componentsNames.Card,
    sharedComponentsNames.EmptyState,
  ],
  [layoutSymbols.cardLayout]: [
    componentsNames.Card,
    componentsNames.CardHeader,
    componentsNames.CardSubheader,
    componentsNames.Grid,
    sharedComponentsNames.EmptyState,
  ],
  [layoutSymbols.tableLayout]: [
    componentsNames.Table,
    componentsNames.TableActionCell,
    componentsNames.TableToolbar,
  ],
};
