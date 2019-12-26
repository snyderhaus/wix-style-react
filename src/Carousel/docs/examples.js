import React from 'react';
import Hint from 'wix-ui-icons-common/Hint';

import Box from '../../Box';

export const InfoChild = ({ text }) => (
  <Box minHeight="30px" verticalAlign="middle" fontSize="18px">
    <Hint size="54px" color="#89cff8" />
    <Box marginLeft={2}>{text}</Box>
  </Box>
);

export const buttonSkinExample = `
<Carousel
  buttonSkin="inverted"
  images={[
    {
      src: 'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg'
    },
    {
      src: 'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg'
    }
  ]}
/>
`;

export const autoplayExample = `
<Carousel
  autoplay
  images={[
    {
      src: 'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg'
    },
    {
      src: 'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg'
    }
  ]}
/>
`;

export const withoutDotsExample = `
<Carousel
  dots={false}
  images={[
    {
      src: 'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg'
    },
    {
      src: 'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg'
    }
  ]}
/>
`;

export const variableWidthExample = `
<Carousel
  variableWidth={true}
  children={[
    <Box width="300px" height="100px" backgroundColor="red" />,
    <Box width="200px" height="100px" backgroundColor="green" />,
    <Box width="350px" height="100px" backgroundColor="blue" />,
  ]}
/>
`;
