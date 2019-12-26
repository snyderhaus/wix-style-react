import React from 'react';
import classNames from 'classnames';
import TextAreaBold from 'wix-ui-icons-common/system/TextAreaBold';
import TextAreaItalic from 'wix-ui-icons-common/system/TextAreaItalic';
import TextAreaUnderline from 'wix-ui-icons-common/system/TextAreaUnderline';
import TextAreaLink from 'wix-ui-icons-common/system/TextAreaLink';
import TextAreaBulletList from 'wix-ui-icons-common/system/TextAreaBulletList';
import TextAreaNumberedList from 'wix-ui-icons-common/system/TextAreaNumberedList';

import styles from './RichTextToolbar.scss';
import RichTextToolbarButton from './RichTextToolbarButton';
import RichTextToolbarLinkButton from './RichTextToolbarLinkButton';
import { RichTextInputAreaContext } from '../RichTextInputAreaContext';
import EditorUtilities from '../EditorUtilities';
import {
  inlineStyleTypes,
  blockTypes,
  entityTypes,
} from '../RichTextInputAreaTypes';

const renderButton = (
  index,
  { type, iconComponent: Icon, isDisabled, isActive, ...restProps },
) => (
  <RichTextToolbarButton
    key={`${index}-${type}`}
    dataHook={`richtextarea-button-${type.toLowerCase()}`}
    isDisabled={isDisabled}
    isActive={!isDisabled && isActive()}
    {...restProps}
  >
    <Icon />
  </RichTextToolbarButton>
);

const renderLinkButton = (
  index,
  { type, iconComponent: Icon, isDisabled, isActive, ...restProps },
) => (
  <RichTextToolbarLinkButton
    key={`${index}-${type}`}
    dataHook={`richtextarea-button-${type.toLowerCase()}`}
    isDisabled={isDisabled}
    isActive={!isDisabled && isActive()}
    {...restProps}
  >
    <Icon />
  </RichTextToolbarLinkButton>
);

const RichTextToolbar = ({
  dataHook,
  className,
  isDisabled,
  editorState,
  onBold,
  onItalic,
  onUnderline,
  onLink,
  onBulletedList,
  onNumberedList,
}) => {
  return (
    <RichTextInputAreaContext.Consumer>
      {({ texts }) => {
        const buttons = [
          {
            type: inlineStyleTypes.bold,
            iconComponent: TextAreaBold,
            render: (index, buttonProps) => renderButton(index, buttonProps),
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasStyle(editorState, inlineStyleTypes.bold),
            tooltipText: texts.toolbarButtons.boldButtonLabel,
            onClick: () =>
              onBold(
                EditorUtilities.toggleStyle(editorState, inlineStyleTypes.bold),
              ),
          },
          {
            type: inlineStyleTypes.italic,
            iconComponent: TextAreaItalic,
            render: (index, buttonProps) => renderButton(index, buttonProps),
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasStyle(editorState, inlineStyleTypes.italic),
            tooltipText: texts.toolbarButtons.italicButtonLabel,
            onClick: () =>
              onItalic(
                EditorUtilities.toggleStyle(
                  editorState,
                  inlineStyleTypes.italic,
                ),
              ),
          },
          {
            type: inlineStyleTypes.underline,
            iconComponent: TextAreaUnderline,
            render: (index, buttonProps) => renderButton(index, buttonProps),
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasStyle(editorState, inlineStyleTypes.underline),
            tooltipText: texts.toolbarButtons.underlineButtonLabel,
            onClick: () =>
              onUnderline(
                EditorUtilities.toggleStyle(
                  editorState,
                  inlineStyleTypes.underline,
                ),
              ),
          },
          {
            type: entityTypes.link,
            iconComponent: TextAreaLink,
            render: (index, buttonProps) =>
              renderLinkButton(index, buttonProps),
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasEntity(editorState, entityTypes.link),
            tooltipText: texts.toolbarButtons.linkButtonLabel,
            // The data which is passed and being used within the insertion form
            data: {
              selectedText: EditorUtilities.getSelectedText(editorState),
              hasRemovableEntityInSelection: EditorUtilities.hasRemovableEntityInSelection(
                editorState,
              ),
            },
            onSubmit: (event, linkData) => {
              onLink(EditorUtilities.toggleLink(editorState, linkData));
            },
            onRemove: () => {
              onLink(EditorUtilities.toggleLink(editorState));
            },
          },
          {
            type: blockTypes.bulletedList,
            iconComponent: TextAreaBulletList,
            render: (index, buttonProps) => renderButton(index, buttonProps),
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasBlockType(
                editorState,
                blockTypes.bulletedList,
              ),
            tooltipText: texts.toolbarButtons.bulletedListButtonLabel,
            onClick: () =>
              onBulletedList(
                EditorUtilities.toggleBlockType(
                  editorState,
                  blockTypes.bulletedList,
                ),
              ),
          },
          {
            type: blockTypes.numberedList,
            iconComponent: TextAreaNumberedList,
            render: (index, buttonProps) => renderButton(index, buttonProps),
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasBlockType(
                editorState,
                blockTypes.numberedList,
              ),
            tooltipText: texts.toolbarButtons.numberedListButtonLabel,
            onClick: () =>
              onNumberedList(
                EditorUtilities.toggleBlockType(
                  editorState,
                  blockTypes.numberedList,
                ),
              ),
          },
        ];

        return (
          <div
            data-hook={dataHook}
            className={classNames(className, styles.root)}
          >
            {buttons.map(({ render, ...props }, index) => render(index, props))}
          </div>
        );
      }}
    </RichTextInputAreaContext.Consumer>
  );
};

export default RichTextToolbar;
