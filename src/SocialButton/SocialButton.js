import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from 'wix-ui-icons-common/system/SocialButtonFacebook';
import InstagramIcon from 'wix-ui-icons-common/system/SocialButtonInstagram';
import LinkedInIcon from 'wix-ui-icons-common/system/SocialButtonLinkedIn';
import PinterestIcon from 'wix-ui-icons-common/system/SocialButtonPinterest';
import TwitterIcon from 'wix-ui-icons-common/system/SocialButtonTwitter';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';

import Text from '../Text';
import styles from './SocialButton.st.css';
import { DataHook } from './constants';

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  pinterest: PinterestIcon,
};

const Icon = React.memo(props => {
  const { icon, disabled, dataHook, text } = props;

  const SocialIcon = iconMap[icon];

  return (
    <ButtonNext
      {...styles('icon', { type: icon, disabled, single: !text }, props)}
      data-hook={dataHook}
    >
      {!!iconMap[icon] && <SocialIcon />}
    </ButtonNext>
  );
});

/** Social networks share button with title */
const SocialButton = ({ dataHook, text, onClick, icon, disabled, ...rest }) => {
  return (
    <div
      {...styles('root', { disabled }, rest)}
      data-hook={dataHook}
      onClick={disabled ? undefined : onClick}
    >
      <Icon
        dataHook={DataHook.socialIcon}
        text={text}
        icon={icon}
        disabled={disabled}
      />
      {text && (
        <Text
          size="small"
          dataHook={DataHook.socialTitle}
          skin={disabled ? 'disabled' : 'standard'}
        >
          {text}
        </Text>
      )}
    </div>
  );
};

SocialButton.propTypes = {
  /** hook for testing purposes */
  dataHook: PropTypes.string,

  /** Text for the button */
  text: PropTypes.node,

  /** Click handler */
  onClick: PropTypes.func,

  /** Share button social network type */
  icon: PropTypes.oneOf([
    'facebook',
    'instagram',
    'twitter',
    'linkedin',
    'pinterest',
  ]),

  /** Disable button */
  disabled: PropTypes.bool,
};

SocialButton.displayName = 'SocialButton';

export default SocialButton;
