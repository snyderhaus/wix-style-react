import * as React from 'react';

export type MediaOverlaySkin = 'none' | 'gradient' | 'dark';

export interface MediaOverlayProps {
  media: React.ReactNode;
  skin?: MediaOverlaySkin;
  hoverSkin?: MediaOverlaySkin;
  dataHook?: string;
  hovered?: boolean;
  onClick?(): void;
}

export type MediaOverlayContentVisible = 'default' | 'hover' | 'always';
export type MediaOverlayContentPlacement = 'top-start' | 'top-end' | 'middle' | 'bottom-end' | 'bottom-start';

export interface MediaOverlayContentProps {
  visible?: MediaOverlayContentVisible;
  placement?: MediaOverlayContentPlacement;
}

export default class MediaOverlay extends React.PureComponent<MediaOverlayProps> {
  static Content: React.FC<MediaOverlayContentProps>;
  static DragHandle: React.FC;
}
