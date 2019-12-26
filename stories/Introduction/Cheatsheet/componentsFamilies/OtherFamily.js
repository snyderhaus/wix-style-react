import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  singleComponentSizes,
} from '../sharedComponents';

import { otherSymbolsToComponents } from '../../../symbolsComponentsMapping/families/otherFamily';

import { createLinkedComponentsNames } from '../sharedComponents/utils';

import {
  otherSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//11. Other
import Avatar from 'wix-style-react/Avatar';
import Badge, { TYPE } from 'wix-style-react/Badge';
import BadgeSelect from 'wix-style-react/BadgeSelect';
import CounterBadge from 'wix-style-react/CounterBadge';
import Tag from 'wix-style-react/Tag';
import Loader from 'wix-style-react/Loader';
import LinearProgressBar from 'wix-style-react/LinearProgressBar';
import CircularProgressBar from 'wix-style-react/CircularProgressBar';

//Assets
import { Layout, Cell } from 'wix-style-react/Layout';
import Box from 'wix-style-react/Box';
import InfoSmall from 'wix-ui-icons-common/InfoSmall';
import PhotoCamera from 'wix-ui-icons-common/PhotoCamera';

const groupSymbol = symbolsGroup.other;

const AvatarExample = () => {
  const avatarName = 'John Doe';

  const avatarColors = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];

  const renderAvatar = props => <Avatar {...props} />;

  const symbol = otherSymbols.avatar;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={7} justifyItems="center" alignItems="center">
        {avatarColors.map((color, i) =>
          renderAvatar({ color, name: avatarName, key: `avatar-${i + 1}` }),
        )}
        {renderAvatar({
          imgProps: { src: 'https://randomuser.me/api/portraits/women/39.jpg' },
          onClick: () => 'Clicked!',
          presence: 'online',
        })}
        {renderAvatar({
          imgProps: { src: 'https://randomuser.me/api/portraits/women/39.jpg' },
          indication: <PhotoCamera size="24" />,
          shape: 'square',
          onClick: () => 'Clicked!',
        })}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const BadgeExample = () => {
  const badgeSkins = [
    'standard',
    'neutral',
    'success',
    'warning',
    'danger',
    'urgent',
    'premium',
    'general',
  ];

  const badgeSkinsLight = [
    'neutralStandard',
    'neutralLight',
    'neutralSuccess',
    'warningLight',
    'neutralDanger',
  ];

  const badgeTypes = Object.keys(TYPE);

  const renderBadge = props => <Badge {...props}>Badge</Badge>;

  const renderTypes = props => (
    <Layout cols={8}>
      {badgeTypes.map((type, i) =>
        renderBadge({ type, ...props, key: `badge-${i}` }),
      )}
    </Layout>
  );

  const renderSkinLayout = (skin, i) => (
    <Cell key={`cell-${skin}-${i}`}>
      {renderTypes({ uppercase: false, skin })}
    </Cell>
  );

  const symbol = otherSymbols.badge;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        {badgeSkins.map(renderSkinLayout)}
        {badgeSkinsLight.map(renderSkinLayout)}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const BadgeSelectExample = () => {
  const counterBadgeSkins = [
    'standard',
    'neutral',
    'success',
    'warning',
    'danger',
    'urgent',
    'premium',
    'general',
    'neutralStandard',
    'neutralLight',
    'neutralSuccess',
    'warningLight',
    'neutralDanger',
  ];

  const badgeSelectOptions = counterBadgeSkins.map((skin, i) => ({
    id: `${i + 1}`,
    skin,
    text: skin,
  }));

  const badgeSelectTypes = ['solid', 'outlined', 'transparent'];

  const renderBadgeSelect = props => <BadgeSelect {...props} />;

  const symbol = otherSymbols.badgeSelect;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={3}>
        {badgeSelectTypes.map((type, i) =>
          renderBadgeSelect({
            type,
            options: badgeSelectOptions,
            key: `badge-select-${i + 1}`,
            uppercase: true,
          }),
        )}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const CounterBadgeExample = () => {
  const counterBadgeValues = [1, 12, 120, <InfoSmall />];

  const counterBadgeSkins = [
    'standard',
    'success',
    'warning',
    'danger',
    'urgent',
    'general',
  ];

  const renderCounterBadge = props => <CounterBadge {...props} />;

  const symbol = otherSymbols.counterBadge;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={6}>
        <Layout gap="5px">
          {counterBadgeSkins.map((skin, i) => (
            <Cell key={`cell-counter-badge-skin-${i + 1}`}>
              {renderCounterBadge({
                skin,
                children: i + 1,
                key: `counter-badge-skin-${i + 1}`,
              })}
            </Cell>
          ))}
        </Layout>
        <Layout gap="5px">
          {counterBadgeValues.map((value, i) => (
            <Cell key={`cell-counter-badge-values-${i + 1}`}>
              {renderCounterBadge({
                children: value,
                key: `counter-badge-${i + 1}`,
              })}
            </Cell>
          ))}
        </Layout>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const TagExample = () => {
  const thumbTags = [
    {
      id: '1',
      label: 'Green',
      thumb: <Box height="100%" backgroundColor="G10" />,
    },
    {
      id: '2',
      label: 'Red',
      thumb: <Box height="100%" backgroundColor="R10" />,
    },
    {
      id: '3',
      label: 'Yellow',
      thumb: <Box height="100%" backgroundColor="Y10" />,
    },
    {
      id: '4',
      label: 'Avatar',
      thumb: (
        <Avatar
          imgProps={{
            src: 'https://randomuser.me/api/portraits/women/39.jpg',
          }}
          size="size18"
        />
      ),
    },
  ];

  const themeTags = [
    { id: '1', label: 'Default' },
    { id: '2', label: 'Error', theme: 'error' },
    { id: '3', label: 'Warning', theme: 'warning' },
    { id: '4', label: 'Dark', theme: 'dark' },
  ];

  const renderTag = props => <Tag {...props}>{props.label}</Tag>;

  const renderTagsLayout = tagsArr => (
    <Layout gap="5px">
      {tagsArr.map((tagProps, i) =>
        renderTag({ ...tagProps, key: `tag-${i + 1}` }),
      )}
    </Layout>
  );

  const symbol = otherSymbols.tag;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        <Cell>{renderTagsLayout(thumbTags)}</Cell>
        <Cell>{renderTagsLayout(themeTags)}</Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const LoaderExample = () => {
  const symbol = otherSymbols.loader;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={4}>
        <Loader size="small" />
        <Loader />
        <Loader size="large" />
        <Loader text="LOADER" />
      </Layout>
    </SingleComponentSideBySide>
  );
};

const LinearProgressBarExample = () => {
  const symbol = otherSymbols.linearProgressBar;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={2}>
        <Layout>
          <Cell>
            <LinearProgressBar value={25} />
          </Cell>
          <Cell>
            <Box backgroundColor="D10">
              <LinearProgressBar light value={25} />
            </Box>
          </Cell>
        </Layout>
        <Layout>
          <Cell>
            <LinearProgressBar skin="success" value={25} />
          </Cell>
          <Cell>
            <Box backgroundColor="D10">
              <LinearProgressBar skin="success" light value={25} />
            </Box>
          </Cell>
        </Layout>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const CircularProgressBarExample = () => {
  const symbol = otherSymbols.circularProgressBar;
  const components = otherSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={2}>
        <CircularProgressBar value={25} />
        <Box height="54px" width="54px" backgroundColor="D10">
          <CircularProgressBar light value={25} />
        </Box>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const OtherFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <AvatarExample />
    <BadgeExample />
    <BadgeSelectExample />
    <CounterBadgeExample />
    <TagExample />
    <LoaderExample />
    <LinearProgressBarExample />
    <CircularProgressBarExample />
  </FamilyStructure>
);

export default OtherFamily;
