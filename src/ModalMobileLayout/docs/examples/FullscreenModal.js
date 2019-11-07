import React from 'react';

import Box from 'wix-style-react/Box';
import Button from 'wix-style-react/Button';
import Heading from 'wix-style-react/Heading';
import ModalMobileLayout from 'wix-style-react/ModalMobileLayout';
import Text from 'wix-style-react/Text';
import TextButton from 'wix-style-react/TextButton';

import { ReactComponent as Logo } from '../../../assets/Illustration.svg';

const style = {
  width: '375px',
  height: '640px',
};

export default () => (
  <div style={style}>
    <ModalMobileLayout
      fullscreen
      onCloseButtonClick={() => {}}
      content={
        <Box direction="vertical" align="center" textAlign="center">
          <Box marginBottom="36px" marginTop="91px">
            <Logo />
          </Box>
          <Box marginBottom="12px">
            <Heading appearance={'H1'}>Welcome!</Heading>
          </Box>
          <Box marginBottom="36px">
            <Text weight="normal" secondary>
              First impressions count. Apps have one chance to grab a new user’s
              attention. Use it well.
            </Text>
          </Box>
          <Box marginBottom="18px">
            <Button size="large">Start Now</Button>
          </Box>
          <Box marginBottom="91px">
            <TextButton>Learn More</TextButton>
          </Box>
        </Box>
      }
    />
  </div>
);
