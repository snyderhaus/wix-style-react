import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import Content from './Content';
import DragHandle from './DragHandle';
import { Layer, Skin, Placement, Visible } from './constants';
import styles from './MediaOverlay.st.css';

const layerToVisiblePropMap = {
  [Layer.Default]: Visible.Default,
  [Layer.Hover]: Visible.Hover,
  [Layer.Top]: Visible.Always,
};

/** MediaOverlay */
class MediaOverlay extends React.PureComponent {
  static displayName = 'MediaOverlay';
  static Content = Content;
  static DragHandle = DragHandle;

  static propTypes = {
    /** Hook for testing purposes. */
    dataHook: PropTypes.string,

    /** Default overlay state skin. */
    skin: PropTypes.oneOf(['none', 'gradient', 'dark']),

    /** Hover overlay state skin. */
    hoverSkin: PropTypes.oneOf(['none', 'gradient', 'dark']),

    /** Image URL or custom node used for overlay media background. */
    media: PropTypes.node.isRequired,

    /**
     * Click handler (when this property is provided the component will be clickable
     * on hover and will have a pointer cursor).
     */
    onClick: PropTypes.func,

    /**
     * `<MediaOverlay.Content>` elements describing overlay content.
     * Each element has the following properties:
     * - `visible` - when to display this content. Possible values are:
     *   - `default` (default) - content is visible only when not hovered.
     *   - `hover` - content is visible only when hovered.
     *   - `always` - content is always visible.
     * - `placement` - where to place this content. Possible values are `top-start`,
     * `top-end`, `middle` (default), `bottom-end` and `bottom-start`.
     */
    children: PropTypes.node,

    /** Toggle hovered state in a controlled mode. */
    hovered: PropTypes.bool,
  };

  static defaultProps = {
    skin: 'none',
  };

  state = {
    isHovered: false,
  };

  _onMouseEnter = () => {
    if (this.props.hovered === undefined) {
      this.setState({ isHovered: true });
    }
  };

  _onMouseLeave = () => {
    if (this.props.hovered === undefined) {
      this.setState({ isHovered: false });
    }
  };

  _getFocusProps = () => {
    const { onClick, focusableOnFocus, focusableOnBlur } = this.props;

    if (onClick) {
      return {
        onFocus: focusableOnFocus,
        onBlur: focusableOnBlur,
        tabIndex: 0,
      };
    }

    return { tabIndex: -1 };
  };

  _getHoverSkin = () => {
    const { skin, hoverSkin } = this.props;
    return hoverSkin || skin; // hoverSkin defaults to skin prop value if not provided
  };

  _hasSingleSkin = () => this.props.skin === this._getHoverSkin();

  _filterContent = (layer, placement) => {
    const { children } = this.props;
    const contentElements = React.Children.map(children, child => child) || [];
    const filterProps = { visible: layerToVisiblePropMap[layer] };

    if (placement !== undefined) {
      filterProps.placement = placement;
    }

    return contentElements.filter(
      child =>
        React.isValidElement(child) &&
        child.type.displayName === Content.displayName &&
        Object.keys(filterProps).every(
          prop => filterProps[prop] === child.props[prop],
        ),
    );
  };

  _isContentEmpty = (layer, placement) =>
    !this._filterContent(layer, placement).length;

  _renderDefaultLayer = () => {
    const skin = this._hasSingleSkin() ? Skin.None : this.props.skin;
    return this._renderTransitionOverlay(Layer.Default, skin, false);
  };

  _renderHoverLayer = () => {
    const skin = this._hasSingleSkin() ? Skin.None : this._getHoverSkin();
    return this._renderTransitionOverlay(Layer.Hover, skin, true);
  };

  _renderTopLayer = () => this._renderOverlay(Layer.Top, Skin.None);

  // When both skins for default and hover layers are the same - we don't want to
  // animate them with opacity transition as this will produce an undesired effect
  // (but we still want to animate all the content inside an overlay layer). As a
  // workaround we create this background layer that has no content or animations
  // and will render here only the common skin background.
  _renderSingleSkinLayer = () =>
    this._hasSingleSkin() &&
    this._renderOverlay(Layer.SingleSkin, this.props.skin);

  _shouldRenderOverlay = (layer, skin) =>
    skin !== Skin.None || !this._isContentEmpty(layer);

  _renderOverlay = (layer, skin) => {
    if (!this._shouldRenderOverlay(layer, skin)) {
      return;
    }

    return (
      <div {...styles('overlay', { layer, skin })}>
        {this._renderContent(layer)}
      </div>
    );
  };

  _renderTransitionOverlay = (layer, skin, mountOnEnter) => {
    if (!this._shouldRenderOverlay(layer, skin)) {
      return;
    }

    const { hovered } = this.props;
    const transitionProps = {
      in: hovered !== undefined ? hovered : this.state.isHovered,
      timeout: 200,
      mountOnEnter,
      unmountOnExit: mountOnEnter,
      classNames: {
        enter: styles.hoverEnter,
        enterActive: styles.hoverEnterActive,
        enterDone: styles.hoverEnterDone,
        exit: styles.hoverExit,
      },
    };

    return (
      <CSSTransition {...transitionProps}>
        {this._renderOverlay(layer, skin)}
      </CSSTransition>
    );
  };

  _renderContent = layer => {
    if (this._isContentEmpty(layer)) {
      return;
    }

    const hasMiddleContent = !this._isContentEmpty(layer, Placement.Middle);
    const hasBottomContent =
      hasMiddleContent ||
      !this._isContentEmpty(layer, Placement.BottomStart) ||
      !this._isContentEmpty(layer, Placement.BottomEnd);

    return (
      <>
        <div {...styles('contentRow', { row: 'top' })}>
          {this._renderContentArea(layer, Placement.TopStart)}
          {this._renderContentArea(layer, Placement.TopEnd)}
        </div>
        {hasMiddleContent && (
          <div {...styles('contentRow', { row: 'middle' })}>
            {this._renderContentArea(layer, Placement.Middle)}
          </div>
        )}
        {hasBottomContent && (
          <div {...styles('contentRow', { row: 'bottom' })}>
            {this._renderContentArea(layer, Placement.BottomStart)}
            {this._renderContentArea(layer, Placement.BottomEnd)}
          </div>
        )}
      </>
    );
  };

  _renderContentArea = (layer, placement) => {
    const contentElements = this._filterContent(layer, placement);
    if (!contentElements.length) {
      return;
    }

    return (
      <div {...styles('contentArea', { placement })}>
        {contentElements.map(({ props }, index) => (
          <React.Fragment key={index}>{props.children}</React.Fragment>
        ))}
      </div>
    );
  };

  render() {
    const { dataHook, skin, media, onClick } = this.props;
    const isMediaImageUrl = typeof media === 'string';
    const Component = onClick ? 'button' : 'div';

    return (
      <Component
        data-hook={dataHook}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        onClick={onClick}
        {...this._getFocusProps()}
        {...styles('root', { clickable: !!onClick }, this.props)}
        data-skin={skin}
        data-hoverskin={this._getHoverSkin()}
        style={{ backgroundImage: isMediaImageUrl && `url(${media})` }}
      >
        {!isMediaImageUrl && React.isValidElement(media) && media}
        {this._renderSingleSkinLayer()}
        {this._renderDefaultLayer()}
        {this._renderHoverLayer()}
        {this._renderTopLayer()}
      </Component>
    );
  }
}

export default withFocusable(MediaOverlay);
