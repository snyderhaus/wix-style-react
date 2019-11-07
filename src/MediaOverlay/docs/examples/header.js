import React from 'react';

import Proportion from '../../../Proportion';
import IconButton from '../../../IconButton';
import RefreshIcon from '../../../new-icons/Refresh';
import DeleteIcon from '../../../new-icons/Delete';
import MediaOverlay from '../..';

export default () => (
  <Proportion aspectRatio={1.8}>
    <MediaOverlay
      hoverSkin="dark"
      media="https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg"
    >
      <MediaOverlay.Content visible="hover">
        <IconButton priority="secondary" skin="inverted">
          <RefreshIcon />
        </IconButton>
        <IconButton priority="secondary" skin="inverted">
          <DeleteIcon />
        </IconButton>
      </MediaOverlay.Content>
    </MediaOverlay>
  </Proportion>
);
