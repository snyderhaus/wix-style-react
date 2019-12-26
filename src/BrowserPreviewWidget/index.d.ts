import * as React from 'react';

export type BrowserPreviewWidgetSkin = 'neutral' | 'gradient' | 'custom';

export type BrowserBarSizes = 'size9' | 'size12' | 'size18' | 'size24';

export interface BrowserPreviewWidgetProps {
  dataHook?: string;
  skin?: BrowserPreviewWidgetSkin;
  backgroundColor?: string,
  browserBarSize?: BrowserBarSizes,
  height?: string,
  width?: string,
  children: React.ReactNode,
}

declare const BrowserPreviewWidget: React.ComponentClass<BrowserPreviewWidgetProps>;

export default BrowserPreviewWidget;
