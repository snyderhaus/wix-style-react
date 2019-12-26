import React from 'react';
import {
  string,
  number,
  arrayOf,
  oneOfType,
  func,
  any,
  bool,
} from 'prop-types';
import createReactContext from 'create-react-context';

export const BulkSelectionContext = createReactContext();

export const BulkSelectionState = Object.freeze({
  ALL: 'ALL',
  NONE: 'NONE',
  SOME: 'SOME',
});

export const ChangeType = Object.freeze({
  ALL: 'ALL',
  NONE: 'NONE',
  SINGLE_TOGGLE: 'SINGLE_TOGGLE',
});

/** Helper for PropTypes for component which consume the BulkSelection context */
export const BulkSelectionContextPropTypes = {
  isSelected: func,
  selectedCount: number,
  getSelectedIds: func,
  getNotSelectedIds: func,
  infiniteBulkSelected: bool,
  bulkSelectionState: string,
  toggleSelectionById: func,
  deselectRowsByDefault: bool,
  toggleAll: func,
  selectAll: func,
  deselectAll: func,
  setSelectedIds: func,
};

/**
 * BulkSelection manages the state and logic of bulk selection.
 * Given an array of selectable items, it manages a bulk selection state (ALL, SOME, NONE),
 * and provides helper methods for modifying the state.
 *
 * toggleBulkSelection(): changes the bulk state according to these state changes: ALL->NONE, SOME->ALL, NONE->ALL
 */
export class BulkSelection extends React.Component {
  constructor(props) {
    super(props);
    const selectedIds = (props.selectedIds || []).slice();
    const notSelectedIds = null;
    this.state = {
      selectedIds, // not exposed to context consumers
      notSelectedIds, // not exposed to context consumers
      helpers: this.createHelpers({ ...props, selectedIds, notSelectedIds }),
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.selectedIds &&
      !this.areSelectedIdsEqual(nextProps.selectedIds, this.state.selectedIds)
    ) {
      this.setSelectedIds(nextProps.selectedIds.slice(), undefined, nextProps);
    } else if (
      this.state.selectedIds &&
      this.state.helpers.bulkSelectionState === BulkSelectionState.ALL &&
      !this.areSelectedIdsEqual(nextProps.allIds, this.props.allIds)
    ) {
      // change bulkSelectionState after load more
      this.setSelectedIds(this.state.selectedIds, undefined, nextProps);
    } else if (this.state.notSelectedIds && !nextProps.hasMoreInBulkSelection) {
      // cancel infinite bulk selection mode if it is no longer relevant (e.g. when done loading)
      const selectedIds = nextProps.allIds.filter(
        id => !this.state.notSelectedIds.includes(id),
      );
      this.setSelectedIds(selectedIds, undefined, nextProps);
    } else if (
      this.props.disabled !== nextProps.disabled ||
      !this.areSelectedIdsEqual(this.props.allIds, nextProps.allIds)
    ) {
      const { selectedIds, notSelectedIds } = this.state;
      this.setState({
        helpers: this.createHelpers({
          ...nextProps,
          selectedIds,
          notSelectedIds,
        }),
      });
    }
  }

  toggleAll = (enable, origin) => {
    if (enable) {
      if (this.props.hasMoreInBulkSelection) {
        this.setNotSelectedIds([], { type: ChangeType.ALL, origin });
      } else {
        this.setSelectedIds(this.props.allIds, {
          type: ChangeType.ALL,
          origin,
        });
      }
    } else {
      this.setSelectedIds([], { type: ChangeType.NONE, origin });
    }
  };

  toggleBulkSelection = (deselectRowsByDefault, origin) => {
    const bulkSelectionState = this.state.helpers.bulkSelectionState;
    if (bulkSelectionState === BulkSelectionState.SOME) {
      this.toggleAll(!deselectRowsByDefault, origin);
    } else if (bulkSelectionState === BulkSelectionState.ALL) {
      this.toggleAll(false, origin);
    } else {
      this.toggleAll(true, origin);
    }
  };

  toggleSelectionById = (id, origin) => {
    const newSelectionValue = !this.state.helpers.isSelected(id);
    const change = {
      type: ChangeType.SINGLE_TOGGLE,
      id,
      value: newSelectionValue,
      origin,
    };

    if (this.state.selectedIds) {
      this.setSelectedIds(
        newSelectionValue
          ? this.state.selectedIds.concat(id)
          : this.state.selectedIds.filter(_id => _id !== id),
        change,
      );
    } else {
      this.setNotSelectedIds(
        newSelectionValue
          ? this.state.notSelectedIds.filter(_id => _id !== id)
          : this.state.notSelectedIds.concat(id),
        change,
      );
    }
  };

  setSelectedIds = (selectedIds, change, props) => {
    if (!Array.isArray(selectedIds)) {
      throw new Error('selectedIds must be an array');
    }
    if (!props) {
      props = this.props;
    }
    const notSelectedIds = null;
    this.setState(
      {
        selectedIds,
        notSelectedIds,
        helpers: this.createHelpers({ ...props, selectedIds, notSelectedIds }),
      },
      () => {
        this.props.onSelectionChanged &&
          this.props.onSelectionChanged(selectedIds.slice(), change);
      },
    );
  };

  setNotSelectedIds = (notSelectedIds, change, props) => {
    if (!Array.isArray(notSelectedIds)) {
      throw new Error('notSelectedIds must be an array');
    }
    if (!props) {
      props = this.props;
    }
    const selectedIds = null;
    this.setState(
      {
        selectedIds,
        notSelectedIds,
        helpers: this.createHelpers({ ...props, selectedIds, notSelectedIds }),
      },
      () => {
        this.props.onSelectionChanged &&
          this.props.onSelectionChanged(null, change);
      },
    );
  };

  areSelectedIdsEqual = (selectedIds1, selectedIds2) => {
    if (selectedIds1 === selectedIds2) {
      return true;
    }

    return (
      Array.isArray(selectedIds1) &&
      Array.isArray(selectedIds2) &&
      selectedIds1.length === selectedIds2.length &&
      selectedIds1.every((item, index) => item === selectedIds2[index])
    );
  };

  createHelpers({
    selectedIds,
    notSelectedIds,
    allIds,
    disabled,
    deselectRowsByDefault,
    totalCount = 0,
  }) {
    const selectedCount = selectedIds
      ? selectedIds.length
      : totalCount - notSelectedIds.length;

    const selectedIdsBulkState =
      selectedCount === 0
        ? BulkSelectionState.NONE
        : selectedCount === allIds.length
        ? BulkSelectionState.ALL
        : BulkSelectionState.SOME;

    const notSelectedIdsBulkState =
      notSelectedIds && notSelectedIds.length === 0
        ? BulkSelectionState.ALL
        : BulkSelectionState.SOME;

    const bulkSelectionState = selectedIds
      ? selectedIdsBulkState
      : notSelectedIdsBulkState;

    return {
      // Getters
      /** Is the item with the given id selected. (id comes from the rowData.id if exists, if not then it is the rowIndex)
       * Note: `selectedIds` and `notSelectedIds` are mutually exclusive and only one of them is defined.
       * `notSelectedIds` is defined when `hasMoreInBulkSelection` is selected and user did bulk selection. Otherwise, selectedIds is defined. */
      isSelected: id =>
        selectedIds ? selectedIds.includes(id) : !notSelectedIds.includes(id),
      /** Number of selected items */
      selectedCount,
      /** Get a copy (array) of selected ids when `infiniteBulkSelected` is `false`.
       * If `infiniteBulkSelected` is true, returns `null` */
      getSelectedIds: () => selectedIds && selectedIds.slice(),
      /** Get a copy (array) of ids that were deselected after bulk selection was done, when `infiniteBulkSelected` is `true`.
       * If `infiniteBulkSelected` is `false`, returns `null`.  */
      getNotSelectedIds: () => notSelectedIds && notSelectedIds.slice(),
      /** Indicates whether bulk selection was done by the user and `hasMoreInBulkSelection` is `true` */
      infiniteBulkSelected: selectedIds === null,
      /** A string representing the BulkSelection state (not a React state).
       * Possible values: ALL, SOME, NONE
       */
      bulkSelectionState,
      /** Indicates the `toggleAll` behaviour when some rows are selected. `true` means SOME -> NONE, `false` means SOME -> ALL  */
      deselectRowsByDefault,
      /** Indicates whether selection checkboxes (including <TableBulkSelectionCheckbox>) are disabled */
      disabled: disabled || allIds.length === 0,
      // Modifiers
      /** Toggle the selection state (selected/not-selected) of an item by id */
      toggleSelectionById: this.toggleSelectionById,
      /** Toggles the bulk selection state: NONE -> ALL, SOME -> ALL, ALL -> NONE */
      toggleAll: this.toggleBulkSelection,
      /** Select all items */
      selectAll: origin => this.toggleAll(true, origin),
      /** Deselect all items (clear selection) */
      deselectAll: origin => this.toggleAll(false, origin),
      /** Set the selection.
       * An optional `change` argument will be passed "as is" to the Table's onSelectionChanged callback.
       */
      setSelectedIds: this.setSelectedIds,
    };
  }

  render() {
    return (
      <BulkSelectionContext.Provider value={this.state.helpers}>
        {this.props.children}
      </BulkSelectionContext.Provider>
    );
  }
}

BulkSelection.propTypes = {
  /** Array of item selection boolean states. Should correspond in length to the data prop */
  selectedIds: oneOfType([arrayOf(string), arrayOf(number)]),
  /** An array of all selectable item ids (string ids) */
  allIds: oneOfType([arrayOf(string), arrayOf(number)]).isRequired,
  /** Called when item selection changes.
   * Receives 2 arguments, the updated selectedIds array, and a `change` object.
   * The `change` object has a `type` property with the following possible values: 'ALL', 'NONE', 'SINGLE_TOGGLE'.
   * In case of 'SINGLE_TOGGLE' the `change` object will also include an `id` prop with the item's id,
   * and a `value` prop with the new boolean selection state of the item.
   * The `change` object also contains an `origin` property which indicates what initiated the selection change.
   * The `origin` property can be set when selection is updated using a `SelectionContext` method.
   * In case `totalSelectableCount` is set and the list is not fully loaded, and the user did bulk selection ("Select All"), the first parameter (selectedIds) will be null.
   * You can use the selection context's getNotSelectedIds() method to get the items that the user unselected after selecting all items. */
  onSelectionChanged: func,
  /** Are checkboxes disabled */
  disabled: bool,
  /** Indicates whether the table is in infinite bulk selection mode (`infiniteScroll` and `totalSelectableCount` props are set) and there are more items to load (`hasMore` prop is `true`) */
  hasMoreInBulkSelection: bool,
  /** The table's `totalSelectableCount` prop  */
  totalCount: number,
  /** Any - can consume the BulkSelectionProvider context */
  children: any,
};
