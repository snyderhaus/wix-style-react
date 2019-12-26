import { UniDriver } from '@unidriver/core';

export interface PopoverMenuDriver {
  exists(): Promise<boolean>;
  getTriggerElement(dataHook: string): UniDriver;
  clickAtChild: (index: number) => Promise<void>;
  clickAtChildByDataHook: (dataHook: string) => Promise<void>;
  isMenuOpen(): Promise<boolean>;
  childrenCount(): Promise<number>;
}
