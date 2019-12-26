import React from 'react';
import { storiesOf } from '@storybook/react';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';

import InputWithLabel from '../InputWithLabel';
import { inputWithLabelTestkitFactory } from '../../../testkit';
import Input from '../../Input';

const commonProps = {
  label: 'First Name',
};

const interactiveDataHook = 'interactive-input-with-lable';

const createDriver = dataHook =>
  inputWithLabelTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.Component {
  async componentDidMount() {
    this.props.componentDidMount();
  }
  render() {
    const { componentDidMount, ...rest } = this.props;

    return (
      <div style={{ marginLeft: '100px', marginTop: '100px' }}>
        <InputWithLabel dataHook={interactiveDataHook} {...rest} />
      </div>
    );
  }
}

const icon = [<ChevronDown />];
const icons = [<ChevronDown />, <ChevronDown />];
const tests = [
  {
    describe: 'empty',
    its: [
      {
        it: 'normal',
        props: {},
      },
      {
        it: 'single icon',
        props: {
          suffix: icon,
        },
      },
      {
        it: 'two icons',
        props: {
          suffix: icons,
        },
      },
      {
        it: 'error',
        props: {
          status: Input.StatusError,
          statusMessage: 'First Name is required',
        },
      },
      {
        it: 'error and icons',
        props: {
          status: Input.StatusError,
          statusMessage: 'First Name is required',
          suffix: icons,
        },
      },
    ],
  },
  {
    describe: 'With text',
    its: [
      {
        it: 'normal',
        props: {
          value: 'Mufasa',
        },
      },
      {
        it: 'single icon',
        props: {
          value: 'Mufasa',
          suffix: icon,
        },
      },
      {
        it: 'two icons',
        props: {
          value: 'Mufasa',
          suffix: icons,
        },
      },
      {
        it: 'error',
        props: {
          value: 'Mufasa',
          status: Input.StatusError,
          statusMessage: 'I killed Mufasa',
        },
      },
      {
        it: 'error and icons',
        props: {
          value: 'Mufasa',
          status: Input.StatusError,
          statusMessage: 'I killed Mufasa',
          suffix: icons,
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'interactive',
    its: [
      //TODO: Make this test work
      // {
      //   it: 'hover',
      //   props: {
      //     label: 'First Name',
      //   },
      //   componentDidMount: async () => {
      //     const driver = createDriver(interactiveDataHook);
      //     await driver.hoverInput();
      //   },
      // },
      {
        it: 'focused',
        props: {
          label: 'First Name',
        },
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.clickInput();
        },
      },
      //TODO: Make this test work
      // {
      //   it: 'with text',
      //   props: {
      //     label: 'First Name',
      //   },
      //   componentDidMount: async () => {
      //     const driver = createDriver(interactiveDataHook);
      //     await driver.clickInput();
      //     await driver.enterText('Mufasa');
      //   },
      // },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`InputWithLabel/${describe}`, module).add(it, () => (
      <InputWithLabel {...commonProps} {...props} />
    ));
  });
});

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`InputWithLabel/${describe}`, module).add(it, () => (
      <InteractiveEyeTest {...props} componentDidMount={componentDidMount} />
    ));
  });
});
