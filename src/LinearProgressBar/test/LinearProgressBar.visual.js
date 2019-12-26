import React from 'react';
import { storiesOf } from '@storybook/react';
import LinearProgressBar from '../LinearProgressBar';
import { storySettings } from './storySettings';
import { linearProgressBarTestkitFactory } from '../../../testkit';
import { SKINS } from '../constants';
import { Layout, Cell } from '../../Layout';
import Box from '../../Box';

const { dataHook } = storySettings;

const createLinearProgressBarDriver = dataHook =>
  linearProgressBarTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.PureComponent {
  componentDidMount() {
    this.props.componentDidMount();
  }

  render() {
    const props = this.props;
    return (
      <Box padding="40px">
        <LinearProgressBar dataHook={dataHook} {...props} />
      </Box>
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default render',
        props: { value: 20 },
      },
    ],
  },
  {
    describe: 'progress indication',
    its: [
      {
        it: 'shown',
        props: { value: 20, showProgressIndication: true },
      },
      {
        it: 'hidden',
        props: { value: 20 },
      },
      {
        it: 'success icon is shown when progress is 100%',
        props: { value: 100, showProgressIndication: true },
      },
      {
        it: 'error icon is shown when there is an error',
        props: {
          value: 20,
          showProgressIndication: true,
          error: true,
          errorMessage: 'Some error',
        },
      },
    ],
  },
  {
    describe: 'theme',
    its: [
      {
        it: 'light regular',
        props: { value: 20, light: true },
      },
      {
        it: 'light with an error',
        props: { value: 20, light: true, error: true },
      },
      {
        it: 'light with a progress indication',
        props: { value: 20, light: true, showProgressIndication: true },
      },
      {
        it: 'light with an error and progress indication',
        props: {
          value: 20,
          light: true,
          showProgressIndication: true,
          error: true,
        },
      },
    ],
  },
  {
    describe: 'error',
    its: [
      {
        it: 'exists',
        props: { value: 20, error: true },
      },
      {
        it: 'does not exist',
        props: { value: 20, error: false },
      },
      {
        it: 'display an error icon',
        props: {
          value: 20,
          showProgressIndication: true,
          error: true,
          errorMessage: 'Some error',
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'Tooltip',
    its: [
      {
        it: 'displayed on icon hover when error progress indication exist',
        props: {
          value: 20,
          showProgressIndication: true,
          error: true,
          errorMessage: 'some error message',
        },
        componentDidMount: async () => {
          const driver = createLinearProgressBarDriver(dataHook);
          await driver.getTooltipErrorMessage();
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`LinearProgressBar/${describe}`, module).add(it, () => (
      <Box
        backgroundColor={props.light ? 'D10' : 'D80'}
        align="center"
        verticalAlign="middle"
        padding="40px"
      >
        <Layout>
          <Cell>
            <LinearProgressBar dataHook={dataHook} {...props} />
          </Cell>
          <Cell>
            <LinearProgressBar
              dataHook={dataHook}
              {...props}
              skin={SKINS.success}
            />
          </Cell>
        </Layout>
      </Box>
    ));
  });
});

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`LinearProgressBar/${describe}`, module).add(it, () => (
      <InteractiveEyeTest {...props} componentDidMount={componentDidMount} />
    ));
  });
});
