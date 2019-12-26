import * as React from 'react';


export type MobilePreviewWidgetSkin = 'neutral' | 'gradient' | 'custom';

export interface MobilePreviewWidgetProps {
  dataHook?: string;
  skin?: MobilePreviewWidgetSkin;
  backgroundColor?: string,
  height?: string,
  width?: string,
  children: React.ReactNode,
}

declare const MobilePreviewWidget: React.ComponentClass<MobilePreviewWidgetProps>;

export default MobilePreviewWidget;
