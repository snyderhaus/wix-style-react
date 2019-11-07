import React from 'react';
import { object, func } from 'prop-types';
import color from 'color';
import clamp from 'lodash/clamp';

import WixComponent from '../BaseComponents/WixComponent';

import css from './ColorPickerHsb.scss';

export default class ColorPickerHsb extends WixComponent {
  static propTypes = {
    current: object.isRequired,
    onChange: func.isRequired,
  };

  onMarkerDragStart = e => {
    e.preventDefault();
    window.addEventListener('mousemove', this.onMarkerDrag);
    window.addEventListener('touchmove', this.onMarkerDrag);
    window.addEventListener('mouseup', this.onMarkerDragEnd);
    window.addEventListener('touchend', this.onMarkerDragEnd);
    window.addEventListener('touchcancel', this.onMarkerDragEnd);

    this.gradientRect = this.gradient.getBoundingClientRect();
    this.setNewColorByMouseEvent(e);
  };

  onMarkerDrag = e => {
    this.setNewColorByMouseEvent(e);
  };

  onMarkerDragEnd = () => {
    window.removeEventListener('touchmove', this.onMarkerDrag);
    window.removeEventListener('mousemove', this.onMarkerDrag);
    window.removeEventListener('touchcancel', this.onMarkerDragEnd);
    window.addEventListener('touchend', this.onMarkerDragEnd);
    window.removeEventListener('mouseup', this.onMarkerDragEnd);
  };

  getSVByMouseEvent = e => {
    let eventX = 0;
    let eventY = 0;

    if (e.clientX) {
      eventX = e.clientX;
      eventY = e.clientY;
    } else {
      eventX = e.touches[0].clientX;
      eventY = e.touches[0].clientY;
    }

    const x = eventX - this.gradientRect.left;
    const y = eventY - this.gradientRect.top;

    const s = clamp((100 * x) / this.gradientRect.width, 0, 100);
    const v = clamp(100 - (100 * y) / this.gradientRect.height, 0, 100);

    return { s, v };
  };

  setNewColorByMouseEvent = e => {
    const { onChange, current } = this.props;
    const { s, v } = this.getSVByMouseEvent(e);
    onChange(color({ h: current.hue(), s, v }));
  };

  componentWillUnmount() {
    this.onMarkerDragEnd();
  }

  render() {
    const { current } = this.props;
    const hue = current.saturationv(100).lightness(50);
    const style = {
      left: `${current.saturationv()}%`,
      top: `${100 - current.value()}%`,
    };
    return (
      <div
        className={css.root}
        data-hook="color-picker-hsb"
        ref={e => (this.gradient = e)}
        onMouseDown={this.onMarkerDragStart}
        onTouchStart={this.onMarkerDragStart}
      >
        <div className={css.hue} style={{ background: hue.hex() }} />
        <div className={css.saturation} />
        <div className={css.brightness} />
        <div className={css.handle} style={style} />
      </div>
    );
  }
}
