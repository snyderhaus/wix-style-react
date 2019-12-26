import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../Text';
import { SIZES, SKINS, WEIGHTS } from '../constants';
import { Layout, Cell } from 'wix-style-react/Layout';

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'secondary',
        props: { secondary: true },
      },
      {
        it: 'light',
        props: { light: true },
        backgroundColor: 'black',
      },
      {
        it: 'link',
        props: { children: <a>Link text</a> },
      },
      {
        it: 'tagName',
        props: { tagName: 'div' },
      },
    ],
  },
  {
    describe: 'skins',
    its: Object.keys(SKINS).map(skin => ({
      it: skin,
      props: { skin },
    })),
  },
  {
    describe: 'long text',
    its: [
      {
        it: 'line breaks',
        props: {
          ellipsis: false,
          children:
            'This is a very very very very long text that will *not* be cropped by ellipsis at some point',
        },
      },
      {
        it: 'ellipsis',
        props: {
          ellipsis: true,
          children:
            'This is a very very very very long text that will be cropped by ellipsis at some point',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, backgroundColor }) => {
    const testStories = [];
    Object.keys(SIZES).forEach(size => {
      Object.keys(WEIGHTS).forEach(weight => {
        testStories.push(
          <Cell span={4} key={testStories.length}>
            <div>
              <Text
                size={size}
                weight={weight}
                children={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
                {...props}
              />
            </div>
            {!props.children && (
              <div>
                <Text
                  size={size}
                  weight={weight}
                  children={'abcdefghijklmnopqrstuvwxyz'}
                  {...props}
                />
              </div>
            )}
          </Cell>,
        );
      });
    });

    storiesOf(`Text/${describe}`, module).add(it, () => (
      <div style={{ backgroundColor: backgroundColor }}>
        <Layout>{testStories}</Layout>
      </div>
    ));
  });
});
