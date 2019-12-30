import React from 'react';
import PropTypes from 'prop-types';
import AddSmallIcon from 'wix-ui-icons-common/AddSmall';
import cloneDeep from 'lodash/cloneDeep';
import uniqueId from 'lodash/uniqueId';

import { DataHook, DataAttribute } from './constants';
import styles from './TimeTable.st.css';
import SortableList from '../SortableList';
import DragDropContextProvider from '../DragDropContextProvider';
import AddItem from '../AddItem';
import Item from './components/Item';

const getSortableListItems = columns =>
  columns.map(({ items, disabled: columnDisabled = false }) =>
    items.map(({ content, disabled, draggable }) => {
      const isDisabled = disabled !== undefined ? disabled : columnDisabled;
      const isDraggable = draggable !== undefined ? draggable : !isDisabled;

      return {
        id: uniqueId(),
        content,
        draggable: !!isDraggable,
        disabled: !!isDisabled,
      };
    }),
  );

class TimeTable extends React.PureComponent {
  static displayName = 'TimeTable';

  static propTypes = {
    /** Hook for testing purposes. */
    dataHook: PropTypes.string,

    /**
     * Event triggered on column data change:
     * `onChange(columns, { addedToColumnIndex, removedFromColumnIndex, addedItemIndex, removedItemIndex })`
     */
    onChange: PropTypes.func,

    /**
     * Column data configuration. Item content is provided as a simple node or a
     * render function with `content` property. When render function is used the
     * signature is:
     * `({ Item, draggable, disabled }) => {}`:
     * - `Item` - component used to provide default item visual representation.
     * You should render `<Item draggable={draggable} disabled={disabled}>...</Item>`
     * - `draggable` - item is draggable.
     * - `disabled` - item is disabled.
     */
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            content: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
              .isRequired,
            draggable: PropTypes.bool,
            disabled: PropTypes.bool,
          }),
        ).isRequired,
        disabled: PropTypes.bool,
        droppable: PropTypes.bool,
        active: PropTypes.bool,
      }),
    ),

    /**
     * Event triggered on add button click: `onAdd(columnIndex)`.
     * When not provided the button will be hidden.
     */
    onAdd: PropTypes.func,

    /** Title of add button. */
    addItemButtonLabel: PropTypes.node,

    /**
     * Position where dragged items will be inserted. Using `any` value will
     * allow the items to be re-ordered within the same column.
     */
    insertPosition: PropTypes.oneOf(['start', 'end', 'any']),

    /** Custom table height. */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    columns: [],
    insertPosition: 'any',
    height: '283px',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.columns === prevState.columns) {
      return null;
    }

    return {
      ...prevState,
      columns: nextProps.columns,
      sortableListItems: getSortableListItems(nextProps.columns),
    };
  }

  state = {
    addButtonColumnIndex: null,
    dragging: false,
    columns: [],
    sortableListItems: [],
    groupName: uniqueId('time-table'),
  };

  _renderHeader = () => (
    <div className={styles.headerContainer}>
      {this.props.columns.map(
        (
          {
            active = false,
            disabled = false,
            title,
            subtitle,
            droppable = !disabled,
          },
          index,
        ) => (
          <div
            key={index}
            {...styles(styles.header, { active, disabled, droppable })}
          >
            <div data-hook={DataHook.Title} className={styles.title}>
              {title}
            </div>
            <div data-hook={DataHook.Subtitle} className={styles.subtitle}>
              {subtitle}
            </div>
          </div>
        ),
      )}
    </div>
  );

  _renderContent = () => {
    const { columns, insertPosition, onAdd } = this.props;
    const { sortableListItems, addButtonColumnIndex, groupName } = this.state;

    return (
      <div className={styles.contentContainer}>
        <DragDropContextProvider>
          {columns.map(
            ({ active, disabled, droppable = !disabled }, columnIndex) => {
              const addItemEnabled = !columns[columnIndex].disabled && !!onAdd;
              const addItemVisible =
                addItemEnabled && addButtonColumnIndex === columnIndex;

              return (
                <div
                  key={columnIndex}
                  data-hook={DataHook.Column}
                  onMouseEnter={() => this._handleMouseEnter(columnIndex)}
                  onMouseLeave={this._handleMouseLeave}
                  {...styles('column', {
                    addItemEnabled,
                    addItemVisible,
                    droppable,
                  })}
                  {...{
                    [DataAttribute.ColumnActive]: !!active,
                    [DataAttribute.ColumnDisabled]: !!disabled,
                    [DataAttribute.ColumnDroppable]: droppable,
                  }}
                >
                  <SortableList
                    usePortal
                    className={styles.content}
                    groupName={groupName}
                    onDragStart={this._handleDragStart}
                    onDragEnd={this._handleDragEnd}
                    containerId={String(columnIndex)}
                    items={sortableListItems[columnIndex]}
                    droppable={droppable}
                    onDrop={this._handleDrop}
                    canDrag={this._handleCanDrag}
                    renderItem={this._renderItem}
                    insertPosition={insertPosition}
                    animationDuration={500}
                    animationTiming="cubic-bezier(0.19, 1, 0.22, 1)"
                  />
                  {addItemVisible && this._renderAddItemButton(columnIndex)}
                </div>
              );
            },
          )}
        </DragDropContextProvider>
      </div>
    );
  };

  render() {
    const { dataHook, height, ...otherProps } = this.props;
    const { dragging } = this.state;

    return (
      <div
        {...styles('root', { dragging }, otherProps)}
        style={{ height }}
        data-hook={dataHook}
      >
        {this._renderHeader()}
        {this._renderContent()}
      </div>
    );
  }

  _renderItem = ({
    isPlaceholder,
    previewStyles,
    item: { content, disabled, draggable },
  }) => (
    <div
      data-hook={DataHook.Item}
      {...styles(styles.item, { isPlaceholder })}
      style={previewStyles}
      {...{
        [DataAttribute.ItemDraggable]: draggable,
        [DataAttribute.ItemDisabled]: disabled,
      }}
    >
      {typeof content === 'function' ? (
        content({ Item, disabled, draggable })
      ) : (
        <Item disabled={disabled} draggable={draggable}>
          {content}
        </Item>
      )}
    </div>
  );

  _renderAddItemButton = columnIndex => (
    <AddItem
      className={styles.addItemButton}
      dataHook={DataHook.AddItemButton}
      showIcon={false}
      onClick={() => this.props.onAdd(columnIndex)}
    >
      <span className={styles.addItemLabel}>
        <AddSmallIcon className={styles.addItemIcon} size="18px" />
        {this.props.addItemButtonLabel}
      </span>
    </AddItem>
  );

  _handleDrop = ({
    addedIndex: addedItemIndex,
    removedIndex: removedItemIndex,
    addedToContainerId,
    removedFromContainerId,
  }) => {
    const { columns } = this.props;
    const addedToColumnIndex = Number(addedToContainerId);
    const removedFromColumnIndex = Number(removedFromContainerId);

    this.setState({ addButtonColumnIndex: addedToColumnIndex });

    if (
      addedToColumnIndex === removedFromColumnIndex &&
      addedItemIndex === removedItemIndex
    ) {
      return;
    }

    const newColumns = cloneDeep(columns);
    const removedItem = columns[removedFromColumnIndex].items[removedItemIndex];

    newColumns[removedFromColumnIndex].items.splice(removedItemIndex, 1);
    newColumns[addedToColumnIndex].items.splice(addedItemIndex, 0, removedItem);

    if (this.props.onChange) {
      this.props.onChange(newColumns, {
        addedToColumnIndex,
        removedFromColumnIndex,
        addedItemIndex,
        removedItemIndex,
      });
    }
  };

  _handleMouseEnter = columnIndex => {
    if (!this.state.dragging) {
      this.setState({ addButtonColumnIndex: columnIndex });
    }
  };

  _handleMouseLeave = () => {
    if (!this.state.dragging) {
      this.setState({ addButtonColumnIndex: null });
    }
  };

  _handleDragStart = () => {
    this.setState({
      dragging: true,
      addButtonColumnIndex: null,
    });
  };

  _handleDragEnd = () => {
    this.setState({
      dragging: false,
    });
  };

  _handleCanDrag = ({ item }) => !!item.draggable;
}

export default TimeTable;
