import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface ListItemSectionDriver extends BaseUniDriver {
  getTitle(): Promise<string>;
  getSuffix(): Promise<BaseUniDriver>;
}
