/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
} from '../sharedComponents';

import { notificationsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/notificationsFamily';

import { createLinkedComponentsNames } from '../sharedComponents/utils';

import {
  notificationsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//8. Notifications
import Notification from 'wix-style-react/Notification';
import FloatingNotification from 'wix-style-react/FloatingNotification';
import SectionHelper from 'wix-style-react/SectionHelper';

//Assets
import { Layout, Cell } from 'wix-style-react/Layout';
import Delete from 'wix-ui-icons-common/Delete';

const groupSymbol = symbolsGroup.notificationBars;

const NotificationsExamples = () => {
  const renderNotification = props => {
    const {
      textLabel,
      actionButton,
      actionButtonType,
      onClick,
      actionButtonText,
    } = props;

    return (
      <Notification {...props} show>
        <Notification.TextLabel children={textLabel} />
        {actionButton && (
          <Notification.ActionButton
            children={actionButtonText}
            type={actionButtonType}
            onClick={onClick}
          />
        )}
        <Notification.CloseButton />
      </Notification>
    );
  };

  const notificationVariations = [
    { theme: 'standard', textLabel: 'You have enabled new functionality' },
    { theme: 'success', textLabel: 'Your changes were successfully saved' },
    { theme: 'warning', textLabel: 'Your payment methods are not set up' },
    { theme: 'error', textLabel: 'File Upload failed!' },
    { theme: 'premium', textLabel: 'This feature is for premium users only' },
  ];

  const symbol = notificationsSymbols.notification;
  const components = notificationsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        {notificationVariations.map((variation, i) => (
          <Cell key={`theme-cell-${i}`}>
            {renderNotification({
              theme: variation.theme,
              key: `notification-${variation.theme}-${i}`,
              textLabel: variation.textLabel,
            })}
          </Cell>
        ))}
        <Cell key={`action-notification-cell-text-link`}>
          {renderNotification({
            key: `notification-with-text-link`,
            textLabel: 'You have enabled new functionality',
            actionButton: true,
            actionButtonType: 'textLink',
            onClick: () => alert('text link action'),
            actionButtonText: 'Undo',
          })}
        </Cell>
        <Cell key={`action-notification-cell-button`}>
          {renderNotification({
            key: `notification-with-button`,
            textLabel: 'You have enabled new functionality',
            actionButton: true,
            actionButtonType: 'button',
            onClick: () => alert('button action'),
            actionButtonText: 'Button',
          })}
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const FloatingNotificationsExamples = () => {
  const floatingNotificationVariations = [
    { type: 'standard', text: '"Image.jpg" was moved to trash' },
    { type: 'success', text: '"Image.jpg" was successfully uploaded' },
    { type: 'warning', text: 'Your payments are not set up' },
    { type: 'destructive', text: '"Image.jpg" failed to upload' },
    { type: 'premium', text: 'This feature is for premium users only' },
    { type: 'preview', text: 'A new feature has been enabled' },
    { type: 'dark', text: 'A new feature has been enabled' },
  ];

  const renderNotification = props => (
    <FloatingNotification showCloseButton {...props} />
  );

  const symbol = notificationsSymbols.floatingNotification;
  const components = notificationsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        {floatingNotificationVariations.map((variation, i) => (
          <Cell key={`type-cell-${i}`}>
            {renderNotification({
              type: variation.type,
              key: `notification-${variation.type}-${i}`,
              text: variation.text,
            })}
          </Cell>
        ))}
        <Cell key={`link-button-cell`}>
          {renderNotification({
            key: 'notification-with-buttons',
            text: '"Image.jpg" was moved to',
            showButton: true,
            buttonProps: {
              label: 'Undo',
              onClick: () => alert('button action'),
            },
            showTextButton: true,
            textButtonProps: {
              label: 'Trash',
              onClick: () => alert('text button action'),
            },
            prefixIcon: <Delete />,
          })}
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const SectionsHelperExamples = () => {
  const sectionHelperVariations = [
    {
      appearance: 'standard',
      title: "Don't forget setup payments",
      children:
        'In order to sell your music you need to choose a payment method',
    },
    {
      appearance: 'success',
      title: 'Your SEO is good',
      children:
        'Congratulations, your website appears at the top of the list in search results.',
    },
    {
      appearance: 'warning',
      title: "Don't forget setup payments",
      children:
        'In order to sell your music you need to choose a payment method',
    },
    {
      appearance: 'danger',
      title: 'Your data got corrupted!',
      children:
        'Go to settings and update your contact details in order to let your clients reach you',
    },
    {
      appearance: 'premium',
      title: 'Upgrade to Premium',
      children:
        'In order to sell your music you need to choose a payment method',
    },
    {
      appearance: 'preview',
      title: 'Total $9.99',
      children: 'Your yearly subscription will auto renew on January 1st, 2019',
    },
    {
      appearance: 'experimentalDark',
      title: 'Total $9.99',
      children: 'Your yearly subscription will auto renew on January 1st, 2019',
    },
  ];

  const renderSectionHelper = props => (
    <SectionHelper
      {...props}
      showCloseButton
      onClose={() => console.log('onClose')}
    />
  );

  const symbol = notificationsSymbols.sectionHelper;
  const components = notificationsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        {sectionHelperVariations.map((variation, i) => (
          <Cell key={`appearance-${variation.appearance}-${i}`}>
            {renderSectionHelper({
              appearance: variation.appearance,
              key: `section-helper-${i}`,
              title: variation.title,
              children: variation.children,
            })}
          </Cell>
        ))}
        <Cell key={`section-helper-with-action`}>
          {renderSectionHelper({
            key: `section-helper-action-text`,
            appearance: 'standard',
            actionText: `Ok, take me there`,
            title: "Don't forget setup payments",
            children:
              'In order to sell your music you need to choose a payment method',
            onAction: () => alert('action text'),
          })}
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const NotificationFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <NotificationsExamples />
    <FloatingNotificationsExamples />
    <SectionsHelperExamples />
  </FamilyStructure>
);

export default NotificationFamily;
