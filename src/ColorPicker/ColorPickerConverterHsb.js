import React from 'react';
import { object, func } from 'prop-types';

import WixComponent from '../BaseComponents/WixComponent';
import Input from '../Input';

import css from './ColorPickerConverter.st.css';
import ColorPickerConverterViewer from './ColorPickerConverterViewer';
import { safeColor, getHsbOrEmpty } from './utils';

export default class ColorPickerConverterHsb extends WixComponent {
  static propTypes = {
    current: object.isRequired,
    onChange: func.isRequired,
    onAdd: func,
  };

  constructor(props) {
    super(props);
    this.state = getHsbOrEmpty(props.current);
  }

  isInputsEmpty() {
    const { h, s, l } = this.state;
    return [h, s, l].every(value => value === '');
  }

  render() {
    return (
      <div {...css('root', {}, this.props)}>
        <div {...css('distribute', {}, this.props)}>
          <Input
            size="small"
            value={this.state.h}
            onChange={e => this.change('h', e)}
            placeholder={'H'}
            {...css('distributedItem', {}, this.props)}
          />
          <Input
            size="small"
            value={this.state.s}
            onChange={e => this.change('s', e)}
            placeholder={'S'}
            {...css('distributedItem', {}, this.props)}
          />
          <Input
            size="small"
            value={this.state.l}
            onChange={e => this.change('l', e)}
            placeholder={'B'}
            {...css('distributedItem', {}, this.props)}
          />
        </div>
        <ColorPickerConverterViewer
          {...this.props}
          color={this.props.current}
        />
      </div>
    );
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState(getHsbOrEmpty(props.current));
  }

  change(part, { target: { value } }) {
    this.setState({ [part]: value }, () => {
      const { h, s, l } = this.state;
      const isMissingData = [h, s, l].some(_value => _value === '');
      const _color = safeColor(
        isMissingData && this.props.allowEmpty ? '' : this.state,
        this.props.allowEmpty,
      );
      if (!isMissingData || this.isInputsEmpty()) {
        this.props.onChange(_color);
      }
    });
  }
}
