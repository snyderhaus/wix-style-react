import React from 'react';
import { storiesOf } from '@storybook/react';
import GooglePreview from '..';

const defaultProps = {
  title: 'Site Name | a title of your site',
  previewUrl: 'www.site-name.com',
  description: 'A short description for a site',
};

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default render',
        props: {},
      },
    ],
  },
  {
    describe: 'description',
    its: [
      {
        it: 'no description',
        props: {
          description: '',
        },
      },
      {
        it: 'multiline',
        props: {
          description:
            'a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site',
        },
        componentWrapper: ({ children }) => (
          <div style={{ width: '340px' }}>{children}</div>
        ),
      },
    ],
  },
  {
    describe: 'url',
    its: [
      {
        it: 'ellipsed url',
        props: {
          previewUrl: 'long url should be ellipsed '.repeat(20),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentWrapper }) => {
    storiesOf(`GooglePreview/${describe}`, module).add(it, () => {
      const component = <GooglePreview {...defaultProps} {...props} />;
      const ComponentWrapper = componentWrapper;
      return ComponentWrapper ? (
        <ComponentWrapper>{component}</ComponentWrapper>
      ) : (
        component
      );
    });
  });
});
