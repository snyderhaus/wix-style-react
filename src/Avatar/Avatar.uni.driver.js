import { avatarDriverFactory } from 'wix-ui-core/dist/src/components/avatar/avatar.uni.driver';
import { iconButtonDriverFactory } from '../IconButton/IconButton.uni.driver';

import { dataHooks } from './Avatar.const';

export default base => {
  const getIndication = () =>
    iconButtonDriverFactory(base.$(`[data-hook="${dataHooks.indication}"]`));

  return {
    ...avatarDriverFactory(base),
    clickIndication: () => getIndication().click(),
    indicationExists: () => getIndication().exists(),
  };
};
