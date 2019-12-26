#### SelectionContext

`SelectionContext` is an object with the following properties and methods:

##### Properties

| name                  | type    | description                                                                                                                               |
| --------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| selectedCount         | number  | Number of selected items                                                                                                                  |
| disabled              | boolean | Indicates whether selection checkboxes (including <TableBulkSelectionCheckbox>) are disabled                                              |
| bulkSelectionState    | string  | A string representing the BulkSelection state (not a React state). Possible values: ALL, SOME, NONE                                       |
| infiniteBulkSelected  | boolean | Indicates whether bulk selection was done by the user and the table is in "infinite bulk selection" mode and still has more items to load |
| deselectRowsByDefault | boolean | Indicates the `toggleAll` behaviour when some rows are selected. `true` means SOME -> NONE, `false` means SOME -> ALL                                      |

##### Methods

| name                | arguments                                      | return                                   | description                                                                                                                               |
| ------------------- | ---------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| isSelected          | id: string &#124; number                       | boolean                                  | Is the item with the given id selected. (id comes from the rowData.id if exists, if not then it is the rowIndex)                          |
| getSelectedIds      | -                                              | Array&lt;string> &#124; Array&lt;number> | Get a copy (array) of selected ids when `infiniteBulkSelected` is `false`. If `infiniteBulkSelected` is `true`, returns `null`            |
| getNotSelectedIds   | -                                              | Array&lt;string> &#124; Array&lt;number> | Get a copy (array) of ids that were deselected after bulk selection was done, if `infiniteBulkSelected` is `true`. If not, return `false` |
| toggleSelectionById | id: string &#124; number, origin?: string      | void                                     | Toggle the selection state (selected/not-selected) of an item by id                                                                       |
| toggleAll           | origin?: string                                | void                                     | Toggles the bulk selection state: NONE -> ALL, SOME -> ALL, ALL -> NONE                                                                   |
| selectAll           | origin?: string                                | void                                     | Select all items                                                                                                                          |
| deselectAll         | origin?: string                                | void                                     | Deselect all items (clear selection)                                                                                                      |
| setSelectedIds      | (selectedIds: Array&lt;string> &#124; Array&lt;number>, change?: {type: string, id?: string &#124; number, value?: boolean, origin?: string }) | void | Set the selection. An optional `change` argument will be passed "as is" to the Table's onSelectionChanged callback. |
