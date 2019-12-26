import React, { useState, useEffect } from 'react';
import { visualize, snap } from 'storybook-snapper';

import { noBorderInputTestkitFactory } from '../../../testkit';
import NoBorderInput from '../NoBorderInput';
import { storySettings } from '../docs/storySettings';

const createDriver = () =>
  noBorderInputTestkitFactory({
    dataHook: storySettings.dataHook,
    wrapper: document.body,
  });

const NoBorderInputTest = ({ componentDidMount, ...props }) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);

  useEffect(() => {
    componentDidMount && componentDidMount(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentDidMount]);

  return (
    <div style={{ backgroundColor: '#f0f4f7', margin: 25 }}>
      <NoBorderInput
        dataHook={storySettings.dataHook}
        value={value}
        placeholder="Please enter some text"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

const tests = [
  {
    describe: 'NoBorderInput',
    its: [
      {
        it: 'Basic',
      },
      {
        it: 'Focus with label',
        props: {
          label: 'Test label',
        },
        async componentDidMount(props) {
          await createDriver().focus();
          props.onDone();
        },
      },
      {
        it: 'Enter text with label',
        props: {
          label: 'Test label',
        },
        async componentDidMount(props) {
          await createDriver().enterText('Some custom text');
          props.onDone();
        },
      },
      {
        it: 'Error',
        props: {
          status: NoBorderInput.StatusError,
          statusMessage: 'Some error!',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    visualize(describe, () => {
      snap(it, done => (
        <NoBorderInputTest
          {...props}
          componentDidMount={componentDidMount}
          onDone={done}
        />
      ));
    });
  });
});
