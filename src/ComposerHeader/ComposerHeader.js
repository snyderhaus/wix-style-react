import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from 'wix-ui-icons-common/ArrowLeft';

import styles from './ComposerHeader.st.css';
import TextButton from '../TextButton';
import Text from '../Text/Text';
import { dataHooks } from './constants';

const ComposerHeaderActions = () => '';
const ComposerHeaderMainActions = () => '';
const ComposerHeaderSaveStatus = ({
  saveStatusValue,
  saveStatusError,
  dataHook,
  size,
}) => (
  <Text
    dataHook={dataHook || dataHooks.saveStatus}
    className={styles.saveStatus}
    secondary
    light
    size={size}
    skin={saveStatusError ? 'error' : 'standard'}
    tagName="span"
    weight="thin"
  >
    {saveStatusValue}
  </Text>
);

ComposerHeaderActions.displayName = 'Actions';
ComposerHeaderMainActions.displayName = 'MainActions';
ComposerHeaderSaveStatus.displayName = 'SaveStatus';

ComposerHeaderActions.defaultProps = {
  justifyContent: 'flex-start',
};

const filterChildren = ({ children, displayName }) => {
  const actions = React.Children.map(children, child => child);
  return (
    actions &&
    actions.filter(
      child =>
        React.isValidElement(child) && child.type.displayName === displayName,
    )
  );
};

const renderSingleAction = ({ props, index }) => {
  const { children, dataHook, ...rest } = props;
  return (
    children && (
      <div
        key={index}
        data-hook={dataHook}
        style={{ ...rest, justifyContent: rest.justifyContent }}
        className={styles.actions}
      >
        {children}
      </div>
    )
  );
};

const BackButton = React.memo(({ backButtonValue, onBackClick, size }) => {
  return (
    backButtonValue && (
      <TextButton
        skin="dark"
        prefixIcon={<ArrowLeft />}
        dataHook={dataHooks.backButton}
        className={styles.backButton}
        size={size}
        onClick={onBackClick}
      >
        {backButtonValue}
      </TextButton>
    )
  );
});

const Actions = React.memo(({ children }) => {
  const actions = filterChildren({ children, displayName: 'Actions' });
  return (
    actions && (
      <div className={styles.container}>
        {actions.map(({ props }, index) =>
          renderSingleAction({ props, index }),
        )}
      </div>
    )
  );
});

const MainActions = React.memo(({ children }) => {
  const mainActions = filterChildren({ children, displayName: 'MainActions' });
  /**
   * We only support one type of main action.
   * It will be always the first one the in list.
   *  */
  const exists = mainActions && mainActions[0];

  return (
    exists && (
      <div
        className={styles.mainActions}
        data-hook={mainActions[0].props.dataHook || dataHooks.mainAction}
      >
        {mainActions[0] && mainActions[0].props.children}
      </div>
    )
  );
});

const shouldRenderDivider = ({ children, divider }) => {
  const actions = filterChildren({ children, displayName: 'Actions' });

  const sides = {
    left: {
      item: 0,
      justifyContent: 'flex-start',
    },
    right: {
      item: actions && actions.length - 1,
      justifyContent: 'flex-end',
    },
  };

  if (actions && actions.length === 1) {
    return actions[0].props.justifyContent === sides[divider].justifyContent;
  }

  if (actions && actions.length > 1) {
    return (
      actions[sides[divider].item].props.justifyContent ===
      sides[divider].justifyContent
    );
  }
  return;
};

const LeftDivider = React.memo(({ backButton, children }) => {
  const shouldRender =
    backButton &&
    shouldRenderDivider({
      children,
      divider: 'left',
    });

  return (
    shouldRender && (
      <div className={styles.divider} data-hook={dataHooks.leftDivider} />
    )
  );
});

const RightDivider = React.memo(({ children }) => {
  const mainActions = filterChildren({ children, displayName: 'MainActions' });

  const shouldRender =
    mainActions &&
    mainActions[0] &&
    shouldRenderDivider({
      children,
      divider: 'right',
    });

  return (
    shouldRender && (
      <div className={styles.divider} data-hook={dataHooks.rightDivider} />
    )
  );
});

/** ComposerHeader */
const ComposerHeader = ({
  children,
  dataHook,
  size,
  dropShadow,
  backButtonValue,
  onBackClick,
  ...rest
}) => {
  return (
    <div data-hook={dataHook} {...styles('root', { size, dropShadow }, rest)}>
      <BackButton
        size={size}
        backButtonValue={backButtonValue}
        onBackClick={onBackClick}
      />
      <LeftDivider backButton={backButtonValue} children={children} />
      <Actions>{children}</Actions>
      <RightDivider children={children} />
      <MainActions>{children}</MainActions>
    </div>
  );
};

ComposerHeader.propTypes = {
  /** hook for testing purposes */
  dataHook: PropTypes.string,
  /** back button value */
  backButtonValue: PropTypes.node,
  /** back button callback function  */
  onBackClick: PropTypes.func,
  /** composer header size */
  size: PropTypes.oneOf(['small', 'medium']),
  /** shadow effect */
  dropShadow: PropTypes.bool,
};

ComposerHeader.defaultProps = {
  size: 'medium',
};

ComposerHeader.displayName = 'ComposerHeader';

ComposerHeader.Actions = ComposerHeaderActions;
ComposerHeader.MainActions = ComposerHeaderMainActions;
ComposerHeader.SaveStatus = ComposerHeaderSaveStatus;

export default ComposerHeader;
