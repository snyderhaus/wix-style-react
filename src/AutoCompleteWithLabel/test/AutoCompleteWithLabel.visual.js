import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoCompleteWithLabel from '../AutoCompleteWithLabel';
import { autoCompleteWithLabelTestkitFactory } from '../../../testkit';

const commonProps = {
  //use for repeated props across the tests (e.g. {buttonText: 'example'})
  label: 'my-label',
  options: [],
};

const interactiveDataHook = 'interactive-autocomplete-with-label';

const createDriver = dataHook =>
  autoCompleteWithLabelTestkitFactory({
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
        <AutoCompleteWithLabel dataHook={interactiveDataHook} {...rest} />
      </div>
    );
  }
}

const tests = [
  {
    describe: 'empty',
    its: [
      {
        it: 'normal',
        props: {},
      },
      {
        it: 'error',
        props: {
          status: 'error',
          statusMessage: 'Field is required',
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: '',
    its: [
      {
        it: 'focused',
        props: {
          label: 'my label',
          options: [
            { id: 1, value: 'option' },
            { id: 2, value: 'option 2' },
          ],
        },
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.click();
        },
      },
      {
        it: 'auto completes',
        props: {
          label: 'my label',
          options: [
            { id: 1, value: 'option' },
            { id: 2, value: 'option 2' },
          ],
        },
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.click();
          await driver.enterText('2');
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`AutoCompleteWithLabel/${describe}`, module).add(it, () => (
      <AutoCompleteWithLabel {...commonProps} {...props} />
    ));
  });
});

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`InputWithLabel/${describe}`, module).add(it, () => (
      <InteractiveEyeTest
        {...commonProps}
        {...props}
        componentDidMount={componentDidMount}
      />
    ));
  });
});
