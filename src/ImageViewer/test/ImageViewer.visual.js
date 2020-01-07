import React, { useEffect } from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import ImageViewer from '..';
import { imageViewerUniDriverFactory } from '../ImageViewer.uni.driver';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

const dataHook = 'storybook-modal-preview-layout';

const imageViewerUniTestkitFactory = uniTestkitFactoryCreator(
  imageViewerUniDriverFactory,
);

const createDriver = () =>
  imageViewerUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const imageUrl =
  'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg';

const tests = [
  {
    it: 'with an image',
    props: {
      imageUrl,
    },
  },
  {
    it: 'with a transparent image',
    props: {
      imageUrl:
        'https://onlinepngtools.com/images/examples-onlinepngtools/palm-fronds-and-sky.png',
    },
  },
  {
    it: 'with an error',
    props: {
      error: true,
    },
  },
  {
    it: 'disabled with an image',
    props: {
      imageUrl,
      disabled: true,
    },
  },
  {
    it: 'disabled with an error',
    props: {
      error: true,
      disabled: true,
    },
  },
  {
    it: 'disabled without an error',
    props: {
      disabled: true,
    },
  },
  {
    it: 'Without rounded borders',
    props: {
      imageUrl,
      removeRoundedBorders: true,
    },
  },
  {
    it: 'Hover',
    props: { imageUrl },
    componentDidMount: async () => {
      const driver = createDriver();
      await driver.hover();
    },
  },
];

const InteractiveImageViewer = ({ onDone, componentDidMount, ...props }) => {
  const onImageLoad = () => {
    componentDidMount && componentDidMount();
    onDone();
  };

  return (
    <ImageViewer dataHook={dataHook} onImageLoad={onImageLoad} {...props} />
  );
};

visualize('ImageViewer', () => {
  story('should render', () => {
    tests.forEach(({ it, props, componentDidMount }) => {
      snap(it, done => (
        <InteractiveImageViewer
          onDone={done}
          componentDidMount={componentDidMount}
          {...props}
        />
      ));
    });
  });
});

/*
xdescribe('Overlay', () => {
  it('should be visible while loading an image', async () => {
    const { driver } = render(buildComponent({ imageUrl }));
    expect(await driver.isOverlayVisible()).toBe(true);
  });

  it('should be visible while hovering an image', async () => {
    const { driver } = render(buildComponent({ imageUrl }));
    const privateDriver = imageViewerPrivateDriver({
      element: await driver.element(),
    });

    await privateDriver.simulateImageLoad();
    await driver.hover();

    expect(await driver.isOverlayVisible()).toBe(true);
  });

  it('should NOT be visible when image is not currently loading and not being hovered', async () => {
    const { driver } = render(buildComponent({ imageUrl: undefined }));
    expect(await driver.isOverlayVisible()).toBe(false);
  });
});

*/
