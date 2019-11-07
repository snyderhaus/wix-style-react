import React from 'react';

import MobileModal from '../../src/ModalMobileLayout/docs/examples/MobileModal';
import ModalMobileRaw from '!raw-loader!../../src/ModalMobileLayout/docs/examples/MobileModal';

import FullscreenModal from '../../src/ModalMobileLayout/docs/examples/FullscreenModal';
import FullscreenModalRaw from '!raw-loader!../../src/ModalMobileLayout/docs/examples/FullscreenModal';

import { RTLWrapper } from '../utils/RTLWrapper';
import CodeExample from 'wix-storybook-utils/CodeExample';

export const MobileModalTemplates = () => (
  <div>
    <RTLWrapper>
      <CodeExample
        title="Default Template"
        code={ModalMobileRaw}
        children={<MobileModal />}
      />
      <CodeExample
        title="Fullscreen Template"
        code={FullscreenModalRaw}
        children={<FullscreenModal />}
      />
    </RTLWrapper>
  </div>
);
