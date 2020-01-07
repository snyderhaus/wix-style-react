export const dataHooks = {
  addItem: 'add-image',
  overlay: 'image-viewer-overlay',
  imagesContainer: 'images-container',
  update: 'update-image',
  loader: 'image-viewer-loader',
  image: 'image-viewer-current-image',
  previousImage: 'image-viewer-previous-image',
  updateTooltip: 'update-image-tooltip',
  removeTooltip: 'remove-image-tooltip',
  errorTooltip: 'error-image-tooltip',
  remove: 'remove-image',
};

/**
 * We use data-attributes to write css-states to the DOM for tests.
 * We can't use StylableDOMUtil (the standard solution) since it's not behaving well.
 */
export const dataAttributes = {
  imageLoaded: 'data-image-loaded',
  imageVisible: 'data-image-visible',
  containerVisible: 'data-container-visible',
  disabled: 'data-disabled',
};
