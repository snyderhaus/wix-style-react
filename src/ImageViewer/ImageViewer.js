import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Delete from 'wix-ui-icons-common/Delete';
import Replace from 'wix-ui-icons-common/Replace';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import Loader from '../Loader';
import styles from './ImageViewer.st.css';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';
import AddItem from '../AddItem/AddItem';
import Box from '../Box';
import classnames from 'classnames';

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    const { imageUrl } = props;

    this.state = {
      imageLoading: !!imageUrl,
      previousImageUrl: undefined,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { imageUrl: currentImageUrl } = this.props;
    const { imageUrl: nextImageUrl } = nextProps;

    if (nextImageUrl && currentImageUrl !== nextImageUrl) {
      this.setState({
        imageLoading: true,
        previousImageUrl: currentImageUrl,
      });
    }
  }

  _renderAddImage = () => {
    const { onAddImage, addImageInfo, tooltipProps, disabled } = this.props;

    return (
      <AddItem
        onClick={onAddImage}
        theme="image"
        dataHook="add-image"
        disabled={disabled}
        tooltipContent={addImageInfo}
        tooltipProps={{ ...tooltipProps, content: addImageInfo }}
      />
    );
  };

  /** `display: none` is used to prefetch an image == it fetches the image but doesn't show it */
  _renderImageElement = ({
    imageUrl,
    shouldDisplay,
    onLoad,
    onError,
    key,
    dataHook,
  }) => {
    const dataAttributes = {
      'data-hook': dataHook,
      'data-image-visible': shouldDisplay,
    };

    return (
      <img
        className={classnames([
          styles.image,
          styles.stretch,
          shouldDisplay && styles.imageVisible,
        ])}
        src={imageUrl}
        onLoad={onLoad}
        onError={onError}
        key={key}
        {...dataAttributes}
      />
    );
  };

  _resetImageLoading = () => {
    this.setState({
      imageLoading: false,
    });
  };

  _onImageLoad = e => {
    const { onImageLoad } = this.props;
    this.setState(
      {
        imageLoading: false,
      },
      () => onImageLoad(e),
    );
  };

  _getCurrentAndPreviousImages = () => {
    const { imageUrl: currentImageUrl } = this.props;
    const { previousImageUrl } = this.state;

    return {
      currentImageUrl,
      previousImageUrl,
    };
  };

  _renderImage = () => {
    const { imageLoading } = this.state;
    const {
      currentImageUrl,
      previousImageUrl,
    } = this._getCurrentAndPreviousImages();

    const currentImageName = 'image-viewer-current-image';
    const previousImageName = 'image-viewer-previous-image';
    const shouldDisplayContainer = !!(currentImageUrl || previousImageUrl);
    const generateKey = (imageName, imageUrl) => `${imageName}-${imageUrl}`;

    return (
      <div
        {...styles('imageContainer', {
          /** hide container when no image provided, so AddItem behind it can be clickable */
          shouldDisplay: shouldDisplayContainer,
        })}
        data-container-visible={shouldDisplayContainer}
        data-hook="images-container"
      >
        {/** current image */}
        {this._renderImageElement({
          imageUrl: currentImageUrl,
          shouldDisplay: !!currentImageUrl && !imageLoading,
          onLoad: this._onImageLoad,
          onError: () => {
            this._resetImageLoading();
          },
          dataHook: currentImageName,
          key: generateKey(currentImageName, currentImageUrl),
        })}

        {/** previous image */}
        {this._renderImageElement({
          imageUrl: previousImageUrl,
          shouldDisplay: imageLoading && !!previousImageUrl,
          dataHook: previousImageName,
          key: generateKey(previousImageName, previousImageUrl),
        })}
      </div>
    );
  };

  _renderUpdateButton = () => {
    const { updateImageInfo, onUpdateImage, tooltipProps } = this.props;
    return (
      <Tooltip
        {...tooltipProps}
        upgrade
        timeout={0}
        dataHook="update-image-tooltip"
        content={updateImageInfo}
      >
        <IconButton
          dataHook="update-image"
          onClick={onUpdateImage}
          skin="light"
          priority="secondary"
        >
          <Replace />
        </IconButton>
      </Tooltip>
    );
  };

  _resetPreviousImage = () => this.setState({ previousImageUrl: undefined });

  _renderRemoveButton = () => {
    const { removeImageInfo, onRemoveImage, tooltipProps } = this.props;
    return (
      <Tooltip
        {...tooltipProps}
        upgrade
        timeout={0}
        dataHook="remove-image-tooltip"
        content={removeImageInfo}
      >
        <IconButton
          dataHook="remove-image"
          skin="light"
          priority="secondary"
          onClick={e => {
            this._resetPreviousImage();
            onRemoveImage && onRemoveImage(e);
          }}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    );
  };

  _renderErrorIcon = () => {
    const { error, disabled, errorMessage } = this.props;
    const shouldRender = error && !disabled;
    return (
      shouldRender && (
        <div className={styles.errorContainer}>
          <Tooltip
            upgrade
            content={errorMessage}
            timeout={0}
            appendTo="window"
            dataHook="error-image-tooltip"
            placement="top"
          >
            <div className={styles.error}>
              <FormFieldError />
            </div>
          </Tooltip>
        </div>
      )
    );
  };

  _renderLoader = () => (
    <Box
      align="center"
      verticalAlign="middle"
      height="100%"
      dataHook="image-viewer-loader"
    >
      <Loader size="small" />
    </Box>
  );

  _renderButtons = () => {
    const { showUpdateButton, showRemoveButton } = this.props;

    return (
      <div className={styles.buttons}>
        {showUpdateButton && this._renderUpdateButton()}
        {showRemoveButton && this._renderRemoveButton()}
      </div>
    );
  };

  _renderOverlayWith = content => {
    const { removeRoundedBorders } = this.props;

    return (
      <div
        {...styles(
          'overlay',
          { removeRadius: removeRoundedBorders },
          this.props,
        )}
        data-remove-radius={removeRoundedBorders}
        data-hook="image-viewer-overlay"
      >
        {content}
        <span />
      </div>
    );
  };

  render() {
    const {
      width,
      height,
      error,
      disabled,
      dataHook,
      removeRoundedBorders,
      imageUrl,
    } = this.props;
    const { imageLoading, previousImageUrl } = this.state;

    const hasImage = !!imageUrl;
    const hasError = !!error;
    const hasNoPreviousImageWhileLoading = imageLoading && !previousImageUrl;
    const imageLoaded = hasImage && !imageLoading;

    const cssStates = {
      disabled,
      error: !disabled && error,
      removeRadius: removeRoundedBorders,
      hasImage,
    };

    const rootDataAttributes = {
      'data-disabled': disabled,
      'data-image-loaded': imageLoaded,
      'data-hook': dataHook,
    };

    return (
      <div
        {...styles('root', cssStates, this.props)}
        style={{ width, height }}
        {...rootDataAttributes}
      >
        {(hasNoPreviousImageWhileLoading || !hasImage) &&
          this._renderAddImage()}

        {this._renderImage()}

        {this._renderOverlayWith(
          imageLoading
            ? this._renderLoader()
            : hasImage && this._renderButtons(),
        )}

        {hasError && this._renderErrorIcon()}
      </div>
    );
  }
}

ImageViewer.displayName = 'ImageViewer';

ImageViewer.defaultProps = {
  showUpdateButton: true,
  showRemoveButton: true,
  addImageInfo: 'Add Image',
  updateImageInfo: 'Update',
  removeImageInfo: 'Remove',
  onImageLoad: () => ({}),
};

ImageViewer.propTypes = {
  /** Image url, blank for not uploaded */
  imageUrl: PropTypes.string,
  /** Show error icon */
  error: PropTypes.bool,
  /** Error tooltip message */
  errorMessage: PropTypes.string,
  /** Error tooltip placement
   * @deprecated
   * @see tooltipProps
   */
  tooltipPlacement: PropTypes.string,
  /** Tooltip props, common for all tooltips */
  tooltipProps: PropTypes.object,
  /** Show update button */
  showUpdateButton: PropTypes.bool,
  /** Show remove button */
  showRemoveButton: PropTypes.bool,
  /** Add image click handler */
  onAddImage: PropTypes.func,
  /** Update image click handler */
  onUpdateImage: PropTypes.func,
  /** Remove image click handler */
  onRemoveImage: PropTypes.func,
  /** called right after image loads */
  onImageLoad: PropTypes.func,
  /** Add image tooltip */
  addImageInfo: PropTypes.string,
  /** Update image tooltip */
  updateImageInfo: PropTypes.string,
  /** Remove image tooltip */
  removeImageInfo: PropTypes.string,
  /** clear borders radius when displayed in sharp-edges containers */
  removeRoundedBorders: PropTypes.bool,
  /** Element width */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Element height */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Applies disabled styles and disables editability options */
  disabled: PropTypes.bool,
};

export default ImageViewer;
