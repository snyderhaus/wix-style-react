# `<TableActionCell/>`

## Enzyme/ReactTestUtils TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| `element` | - | `element` | Get the element |
| `exists` | - | `bool` | Whether the element exists |
| `getPrimaryActionButtonDriver` | - | ButtonDriver | Get the driver of the primary action `<Button/>` from the action column |
| `clickPrimaryActionButton` | - | - | Click the primary action button from the action column |
| `getVisibleActionsCount` | - | `number` | Get the number of the visible secondary actions |
| `getHiddenActionsCount` | - | `number` | Get the number of the hidden secondary actions (in the `<PopoverMenu/>`, requires it to be open) |
| `getVisibleActionTooltipDriver` | `(actionIndex)` | TooltipDriver | Get the driver of a specific visible secondary action `<Tooltip/>` |
| `getVisibleActionButtonDriver` | (`actionIndex`) | ButtonDriver | Get the driver of a specific visible secondary action `<Button/>` |
| `getHiddenActionsPopoverMenuDriver` | - | PopoverMenuDriver | Get the driver of the hidden secondary action `<PopoverMenu/>` |
| `clickVisibleAction` | `(actionIndex)` | - | Click an a visible secondary action |
| `clickPopoverMenu` | - | - | Click on the hidden secondary actions `<PopoverMenu/>` |
| `clickHiddenAction` | `(actionIndex)` | - | Click on a hidden secondary action (requires the `<PopoverMenu/>` to be open) |

## Protractor TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| `getPrimaryActionPlaceholder` | - | `element` | Get the primary action placeholder element |
| `getPrimaryActionButton` | - | `element` | Get the primary action button element |
| `getVisibleActionsWrapper` | - | `element` | Get the visible secondary actions wrapper element |
| `getHiddenActionsPopoverMenu` | - | `element` | Get the secondary actions popover menu element |

## Usage example

Since the `<TableActionCell/>` is meant to be used with `<Table/>`, it is recommended to use the
testkit with `<Table/>`'s testkit in order to access the `<TableActionCell/>` component.

For example:

```javascript
import React from 'react';
import {tableTestkitFactory, tableActionCellTestkitFactory} from 'wix-style-react/dist/testkit';

// ...

const tableTestkit = tableTestkitFactory({wrapper, dataHook});
const tableActionCellTestkit = tableActionCellTestkitFactory({
  dataHook: 'table-action-cell-datahook',
  wrapper: tableTestkit.getRow(0)
});
```

A similar approach can be used with the Protractor TestKit.
