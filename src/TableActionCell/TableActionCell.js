import React from 'react';
import PropTypes from 'prop-types';
import More from 'wix-ui-icons-common/More';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';

import style from './TableActionCell.st.css';
import HoverSlot from './HoverSlot';
import Tooltip from '../Tooltip/Tooltip';
import Button from '../Deprecated/Button';
import IconButton from '../IconButton';
import PopoverMenu from '../beta/PopoverMenu';
import OldPopoverMenu from '../PopoverMenu';
import OldPopoverMenuItem from '../PopoverMenuItem';

/* eslint-disable react/prop-types */
function renderPrimaryAction({ text, theme, onClick, disabled }) {
  return (
    <Button
      theme={theme}
      disabled={disabled}
      onClick={event => {
        onClick();

        // Making sure we don't also trigger onRowClick
        event.stopPropagation();
      }}
    >
      {text}
    </Button>
  );
}
/* eslint-enable react/prop-types */

function renderVisibleActions(actions) {
  return actions.map(
    (
      { text, icon, onClick, dataHook, disabled, disabledDescription },
      index,
    ) => (
      <Tooltip
        upgrade
        key={index}
        dataHook={dataHook || 'table-action-cell-visible-action-tooltip'}
        content={
          disabled && Boolean(disabledDescription) ? disabledDescription : text
        }
        theme="dark"
      >
        <Button
          disabled={disabled}
          theme="icon-greybackground"
          onClick={event => {
            onClick();
            event.stopPropagation();
          }}
          withNewIcons
        >
          {icon}
        </Button>
      </Tooltip>
    ),
  );
}

function renderHiddenActions(actions, popoverMenuProps, upgrade) {
  return upgrade ? (
    <PopoverMenu
      buttonTheme="icon-greybackground"
      dataHook="table-action-cell-popover-menu"
      appendTo="parent"
      placement="top"
      textSize="small"
      triggerElement={
        <IconButton
          skin="inverted"
          dataHook="table-action-cell-trigger-element"
        >
          <More />
        </IconButton>
      }
      {...popoverMenuProps}
    >
      {actions.map(({ text, icon, onClick, disabled, dataHook }, index) => (
        <PopoverMenu.MenuItem
          key={index}
          dataHook={dataHook || 'table-action-cell-popover-menu-item'}
          prefixIcon={icon}
          onClick={() => onClick()}
          text={text}
          disabled={disabled}
        />
      ))}
    </PopoverMenu>
  ) : (
    <OldPopoverMenu
      buttonTheme="icon-greybackground"
      dataHook="table-action-cell-popover-menu"
      appendToParent
      {...popoverMenuProps}
    >
      {actions.map(({ text, icon, onClick, disabled }, index) => (
        <OldPopoverMenuItem
          key={index}
          dataHook="table-action-cell-popover-menu-item"
          icon={icon}
          onClick={() => onClick()}
          text={text}
          disabled={disabled}
        />
      ))}
    </OldPopoverMenu>
  );
}

function renderPlaceholder() {
  return (
    <Button theme="icon-white" withNewIcons>
      <ChevronRight />
    </Button>
  );
}

const TableActionCell = props => {
  const {
    dataHook,
    primaryAction,
    secondaryActions,
    numOfVisibleSecondaryActions,
    alwaysShowSecondaryActions,
    popoverMenuProps,
    upgrade,
  } = props;

  const visibleActions = secondaryActions.slice(
    0,
    numOfVisibleSecondaryActions,
  );
  const hiddenActions = secondaryActions.slice(numOfVisibleSecondaryActions);

  return (
    <span data-hook={dataHook} {...style('root', {}, props)}>
      {primaryAction && (
        <HoverSlot
          display="onHover"
          data-hook="table-action-cell-primary-action"
        >
          {renderPrimaryAction(primaryAction)}
        </HoverSlot>
      )}

      {visibleActions.length > 0 && (
        <HoverSlot
          display={alwaysShowSecondaryActions ? 'always' : 'onHover'}
          data-hook="table-action-cell-visible-actions"
        >
          {renderVisibleActions(visibleActions)}
        </HoverSlot>
      )}

      {hiddenActions.length > 0 && (
        <div onClick={e => e.stopPropagation()} className={style.popoverMenu}>
          <HoverSlot display="always">
            {renderHiddenActions(hiddenActions, popoverMenuProps, upgrade)}
          </HoverSlot>
        </div>
      )}

      {primaryAction && !(secondaryActions || []).length && (
        <HoverSlot
          display="notOnHover"
          className={style.placeholderIcon}
          data-hook="table-action-cell-placeholder"
        >
          {renderPlaceholder()}
        </HoverSlot>
      )}
    </span>
  );
};

TableActionCell.displayName = 'TableActionCell';

TableActionCell.propTypes = {
  dataHook: PropTypes.string,

  /**
   * An object containing the primary action properties: `text` is the action
   * text , `theme` is the button theme (can be `whiteblue` or `fullblue`),
   * `onClick` is the callback function for the action, whose signature is
   * `onClick(rowData, rowNum)`.
   * `disabled` is an optional prop for the primary action to be disabled
   */
  primaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['whiteblue', 'fullblue']),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  }),

  /**
   * An array containing the secondary actions: `text` is the action text
   * (will be shown in the tooltip), `icon` is the icon component for the
   * action, `onClick` is the callback function for the action, whose
   * signature is `onClick(rowData, rowNum)`.
   * `disabled` is an optional prop for the secondary action to be disabled
   * `dataHook` is an optional prop for accessing the action in tests
   * 'disabledDescription' is an optional prop that indicates what string to display in tooltip when action is visible and disabled (if non is provided, the text prop is used)
   */
  secondaryActions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      onClick: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      dataHook: PropTypes.string,
      disabledDescription: PropTypes.string,
    }),
  ),

  /** The number of secondary actions to show outside the PopoverMenu */
  numOfVisibleSecondaryActions: PropTypes.number,

  /** Whether to show the secondary action also when not hovering the row */
  alwaysShowSecondaryActions: PropTypes.bool,

  /** Props being passed to the secondary actions' <PopoverMenu/> */
  popoverMenuProps: PropTypes.shape(PopoverMenu.propTypes),

  /** When true, the TableActionCell will use the beta <PopupMenu> to enable setting dataHook for each action */
  upgrade: PropTypes.bool, // This Upgrade prop is only for documentation, the actual use is in index.js
};

TableActionCell.defaultProps = {
  primaryAction: null,
  secondaryActions: [],
  numOfVisibleSecondaryActions: 0,
  alwaysShowSecondaryActions: false,
};

export default TableActionCell;
