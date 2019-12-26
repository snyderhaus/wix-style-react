import React from 'react';
import { storiesOf } from '@storybook/react';
import AddChannel from 'wix-ui-icons-common/AddChannel';
import TextButton from '../TextButton';
import { Layout, Cell } from '../../Layout/index';

const skins = ['standard', 'light', 'premium', 'dark'];
const TestContainer = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f4f7',
    }}
  >
    {children}
  </div>
);

const ButtonBlock = props => {
  const { title, ...rest } = props;
  return (
    <Layout>
      <Cell>
        <h1 style={{ fontSize: '30px', margin: '15px 5px' }}>{title}</h1>
      </Cell>
      <Cell span={6}>
        {skins.map((skin, index) => (
          <div key={index} style={{ margin: '5px 0' }}>
            <TextButton {...rest} skin={skin}>
              Click me
            </TextButton>
          </div>
        ))}
      </Cell>
      <Cell span={6}>
        {skins.map((skin, index) => (
          <div key={index} style={{ margin: '5px 0' }}>
            <TextButton {...rest} skin={skin} disabled>
              Click me
            </TextButton>
          </div>
        ))}
      </Cell>
    </Layout>
  );
};

const tests = [
  {
    describe: 'TextButton',
    its: [
      {
        it: 'Underline and Weight',
        story: () => (
          <TestContainer>
            <div style={{ marginLeft: '10px' }}>
              <Layout>
                <ButtonBlock title="Underline: none" />
                <ButtonBlock underline="onHover" title="Underline: onHover" />
              </Layout>
              <Layout>
                <ButtonBlock underline="always" title="Underline: always" />
                <ButtonBlock weight="normal" title="Weight: normal" />
              </Layout>
            </div>
          </TestContainer>
        ),
      },
      {
        it: 'Affixes and Size',
        story: () => (
          <TestContainer>
            <div style={{ marginLeft: '10px' }}>
              <Layout>
                <ButtonBlock
                  size="medium"
                  title="Medium"
                  suffixIcon={<AddChannel />}
                  prefixIcon={<AddChannel />}
                />
                <ButtonBlock
                  size="small"
                  title="Small"
                  suffixIcon={<AddChannel />}
                  prefixIcon={<AddChannel />}
                />
              </Layout>
              <Layout>
                <ButtonBlock
                  size="tiny"
                  title="Tiny"
                  suffixIcon={<AddChannel />}
                  prefixIcon={<AddChannel />}
                />
              </Layout>
            </div>
          </TestContainer>
        ),
      },
      {
        it: 'as Anchor',
        story: () => (
          <TestContainer>
            <div style={{ marginLeft: '10px' }}>
              <Layout>
                <ButtonBlock as="a" title="as Anchor (underline: none)" />
                <ButtonBlock
                  as="a"
                  underline="always"
                  title="as Anchor (underline: always)"
                />
              </Layout>
              <Layout>
                <ButtonBlock
                  as="a"
                  underline="onHover"
                  title="as Anchor (underline: onHover)"
                />
              </Layout>
            </div>
          </TestContainer>
        ),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, story }) => {
    storiesOf(describe, module).add(it, story);
  });
});
