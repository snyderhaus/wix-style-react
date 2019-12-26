import * as React from 'react';


export interface PaletteProps {
  dataHook?: string;
  buttonText?: string;
}

export default class Palette extends React.PureComponent<PaletteProps>{}
