import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ChevronLeftLarge from 'wix-ui-icons-common/ChevronLeftLarge';
import ChevronRightLarge from 'wix-ui-icons-common/ChevronRightLarge';
// This is here and not in the test setup because we don't want consumers to need to run it as well
import '../common/match-media-register';
import Slider from 'react-slick';

import './Carousel.global.scss';
import styles from './Carousel.scss';
import Pagination from './Pagination';
import SliderArrow from './SliderArrow';
import Loader from '../Loader';
import Proportion from '../Proportion';

const AUTOPLAY_SPEED = 2000;
const TRANSITION_SPEED = 600;
const dataHooks = {
  imagesContainer: 'images-container',
  carouselImage: 'carousel-img',
  loader: 'loader',
  prevButton: 'prev-button',
  nextButton: 'next-button',
  pageNavigation: index => `page-navigation-${index}`,
};

const WrappedSliderArrow = ({ currentSlide, slideCount, ...rest }) => (
  <SliderArrow {...rest} />
);

class Carousel extends React.Component {
  static displayName = 'Carousel';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** A single CSS class name to be appended to the Carousel's wrapper element. */
    className: PropTypes.string,
    /** Array of strings where each string is a src of an image (in \<img src="your_src" /\>) */
    images: PropTypes.array,
    /** Any element to render inside */
    children: PropTypes.node,
    /** Sets the skin of the arrow buttons */
    buttonSkin: PropTypes.oneOf(['standard', 'inverted']),
    /** Images loop endlessly */
    infinite: PropTypes.bool,
    /** Auto-playing of images */
    autoplay: PropTypes.bool,
    /** Show dots */
    dots: PropTypes.bool,
    /** Variable width of children */
    variableWidth: PropTypes.bool,
    /** An index of the slide to start on */
    initialSlideIndex: PropTypes.number,
    /** Index change callback. `index => ...` */
    afterChange: PropTypes.func,
    /** Index change callback. `(oldIndex, newIndex) => ...` */
    beforeChange: PropTypes.func,
  };

  static defaultProps = {
    infinite: true,
    dots: true,
    variableWidth: false,
    initialSlideIndex: 0,
    images: [],
    buttonSkin: 'standard',
  };

  constructor(props) {
    super(props);
    this.state = {
      sliderSettings: this._resolveSliderSettings(props),
      loadedImageCount: 0,
    };
  }

  render() {
    const { dataHook, className, images, children } = this.props;
    const { sliderSettings } = this.state;
    const hasImages = !children && images.length > 0;

    return (
      <div data-hook={dataHook} className={classNames(styles.root, className)}>
        <Slider {...sliderSettings}>
          {children}
          {hasImages && this._renderImages(images)}
        </Slider>
      </div>
    );
  }

  _resolveSliderSettings = ({
    infinite,
    autoplay,
    dots,
    variableWidth,
    buttonSkin,
    initialSlideIndex,
    afterChange,
    beforeChange,
  }) => {
    return {
      infinite,
      autoplay,
      speed: TRANSITION_SPEED,
      autoplaySpeed: AUTOPLAY_SPEED,
      initialSlide: initialSlideIndex,
      dots,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth,
      afterChange,
      beforeChange,
      nextArrow: (
        <WrappedSliderArrow
          dataHook={dataHooks.nextButton}
          buttonSkin={buttonSkin}
          icon={<ChevronRightLarge />}
        />
      ),
      prevArrow: (
        <WrappedSliderArrow
          dataHook={dataHooks.prevButton}
          buttonSkin={buttonSkin}
          icon={<ChevronLeftLarge />}
        />
      ),
      appendDots: pages => <Pagination pages={pages} />,
      customPaging: i => (
        <div
          className={styles.pageNavigation}
          data-hook={dataHooks.pageNavigation(i)}
        >
          {i}
        </div>
      ),
    };
  };

  _renderImages = images => {
    return images.map((image, index) => (
      <Proportion
        key={`${index}${image.src}`}
        aspectRatio={Proportion.PREDEFINED_RATIOS.landscape}
      >
        <div
          data-hook={dataHooks.imagesContainer}
          data-is-loading={this._isLoading()}
        >
          <img
            src={image.src}
            data-hook={dataHooks.carouselImage}
            className={styles.image}
            onLoad={() => this._onImageLoad()}
          />
        </div>
        {this._isLoading() && (
          <div className={styles.loader}>
            <Loader dataHook="loader" size="small" />
          </div>
        )}
      </Proportion>
    ));
  };

  _onImageLoad() {
    this.setState(state => {
      const loadedImageCount = state.loadedImageCount + 1;

      return {
        loadedImageCount,
      };
    });
  }

  _isLoading() {
    return this.state.loadedImageCount < this.props.images.length;
  }
}

export default Carousel;
