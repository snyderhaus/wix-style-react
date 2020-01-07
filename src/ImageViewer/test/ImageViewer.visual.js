import React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import ImageViewer from '.';

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
];

const AsyncStoryWrapper = ({ onDone, ...rest }) => (
  <ImageViewer onImageLoad={onDone} {...rest} />
);

visualize('ImageViewer', () => {
  story('should render', () => {
    tests.forEach(({ it, props }) => {
      snap(it, done => <AsyncStoryWrapper {...props} onDone={done} />);
    });
  });
});
