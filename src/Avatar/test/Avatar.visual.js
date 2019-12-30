import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from '..';
import PhotoCamera from 'wix-ui-icons-common/PhotoCamera';

const allSizesAvatarWithProps = props => (
  <div
    style={{ display: 'flex', width: '600px', justifyContent: 'space-around' }}
  >
    <Avatar size="size18" {...props} />
    <Avatar size="size24" {...props} />
    <Avatar size="size30" {...props} />
    <Avatar size="size36" {...props} />
    <Avatar size="size48" {...props} />
    <Avatar size="size60" {...props} />
    <Avatar size="size72" {...props} />
    <Avatar size="size90" {...props} />
  </div>
);
const baseProps = {
  name: 'Jhon Doe',
};

const renderAvatar = props => <Avatar {...baseProps} {...props} />;

storiesOf(`Avatar/Props`, module).add('Presence', () => (
  <div>
    <div style={{ display: 'flex', marginBottom: '30px' }}>
      {renderAvatar({ presence: 'online' })}
      {renderAvatar({ presence: 'offline' })}
      {renderAvatar({ presence: 'busy' })}
    </div>
    {allSizesAvatarWithProps({ presence: 'online', ...baseProps })}
  </div>
));

storiesOf(`Avatar/Props`, module).add('Square', () => (
  <div>{allSizesAvatarWithProps({ shape: 'square', ...baseProps })}</div>
));

storiesOf(`Avatar/Props`, module).add('Indication', () => (
  <div>
    <div style={{ display: 'flex', marginBottom: '30px' }}>
      {renderAvatar({ indication: <PhotoCamera size="24" /> })}
      {renderAvatar({
        indication: (
          <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18">
            <path
              id="addsmall-a"
              d="M10 9L10 5 9 5 9 9 5 9 5 10 9 10 9 14 10 14 10 10 14 10 14 9z"
            ></path>
          </svg>
        ),
      })}
    </div>
    {allSizesAvatarWithProps({
      indication: <PhotoCamera size="24" />,
      ...baseProps,
    })}
  </div>
));

storiesOf(`Avatar/Props`, module).add('Presence and Indication', () => (
  <div>
    {allSizesAvatarWithProps({
      presence: 'online',
      indication: <PhotoCamera size="24" />,
      ...baseProps,
    })}
    <br />
    {allSizesAvatarWithProps({
      presence: 'online',
      shape: 'square',
      indication: <PhotoCamera size="24" />,
      ...baseProps,
    })}
  </div>
));

storiesOf(`Avatar/Props`, module).add('Colors', () => (
  <div>
    <div
      style={{
        display: 'flex',
        width: '600px',
        justifyContent: 'space-around',
      }}
    >
      <Avatar name="Clifford Strickland" />
      <Avatar name="Hallie Shelton" />
      <Avatar name="Jennie Spencer" />
      <Avatar name="Terry Myers" />
      <Avatar name="Tillie Wilkins" />
      <Avatar name="Douglas Page" />
      <Avatar name="Daniel Christensen" />
      <Avatar name="Cody Carr" />
      <Avatar name="Evelyn Lindsey" />
    </div>
  </div>
));

storiesOf(`Avatar/Props`, module).add('Placeholder', () => (
  <div>
    {allSizesAvatarWithProps({ shape: 'square' })}
    <br />
    {allSizesAvatarWithProps({ shape: 'circle' })}
    <br />
    {allSizesAvatarWithProps({ shape: 'square', placeholder: <div /> })}
    <br />
    {allSizesAvatarWithProps({ shape: 'circle', placeholder: <div /> })}
  </div>
));
