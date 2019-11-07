import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import ModalMobileLayout from '../ModalMobileLayout';
import { modalMobileLayoutPrivateDriverFactory } from './ModalMobileLayout.private.uni.driver';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import Box from '../../Box';
import Button from '../../Button';
import Heading from '../../Heading';
import Text from '../../Text';
import TextButton from '../../TextButton';
import { ReactComponent as Logo } from '../../assets/Illustration.svg';

const LONG_CONTENT = (
  <Text>
    {new Array(5)
      .fill(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n' +
          'tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus\n' +
          'eget nunc scelerisque viverra mauris in. Ridiculus mus mauris vitae\n' +
          'ultricies leo integer malesuada nunc. Aliquet porttitor lacus luctus\n' +
          'accumsan tortor posuere ac. Quam viverra orci sagittis eu volutpat odio\n' +
          'facilisis mauris sit. Nibh nisl condimentum id venenatis a condimentum.\n' +
          'Commodo quis imperdiet massa tincidunt nunc. Tincidunt ornare massa eget\n' +
          'egestas purus viverra. Ultrices mi tempus imperdiet nulla malesuada. Quis\n' +
          'risus sed vulputate odio ut. Cras fermentum odio eu feugiat pretium nibh\n' +
          'ipsum. Nunc eget lorem dolor sed viverra. Viverra accumsan in nisl nisi\n' +
          'scelerisque eu. Id diam maecenas ultricies mi eget mauris pharetra et\n' +
          'ultrices. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Quis\n' +
          'viverra nibh cras pulvinar mattis nunc sed blandit. Senectus et netus et\n' +
          'malesuada fames ac turpis egestas integer. Est ullamcorper eget nulla\n' +
          'facilisi etiam dignissim diam quis enim. Vitae proin sagittis nisl rhoncus\n' +
          'mattis rhoncus. Egestas integer eget aliquet nibh praesent tristique\n' +
          'magna. Netus et malesuada fames ac turpis egestas sed. Imperdiet dui\n' +
          'accumsan sit amet nulla facilisi. Etiam tempor orci eu lobortis elementum.\n' +
          'Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Amet\n' +
          'venenatis urna cursus eget nunc scelerisque viverra mauris in. Adipiscing\n' +
          'diam donec adipiscing tristique. Massa ultricies mi quis hendrerit dolor.\n' +
          'Sit amet massa vitae tortor condimentum. Tempor commodo ullamcorper a\n' +
          'lacus. Pulvinar neque laoreet suspendisse interdum consectetur. Sed turpis\n' +
          'tincidunt id aliquet.',
      )
      .join(' ')}
  </Text>
);
const SHORT_CONTENT = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus.
  </Text>
);

const SIMPLE_TITLE = <Text weight="bold">My fancy title</Text>;

const TEXT_FOOTER = <Text>Footer</Text>;
const BUTTONS_FOOTER = (
  <Box align="right">
    <Box marginRight="12px">
      <Button priority="secondary">Cancel</Button>
    </Box>
    <Button>Save</Button>
  </Box>
);

const interactiveDataHook = 'interactive-modalMobileLayout';

const commonProps = {};

const modalMobileLayoutTestkitFactory = uniTestkitFactoryCreator(
  modalMobileLayoutPrivateDriverFactory,
);
const createDriver = dataHook =>
  modalMobileLayoutTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {
          title: SIMPLE_TITLE,
          content: SHORT_CONTENT,
          footer: TEXT_FOOTER,
        },
      },
    ],
  },
  {
    describe: 'title',
    its: [
      {
        it: 'A title with a short content',
        props: {
          title: SIMPLE_TITLE,
          content: SHORT_CONTENT,
        },
      },
      {
        it: 'A sticky title with long content, after scrolling to the bottom',
        props: {
          title: SIMPLE_TITLE,
          content: LONG_CONTENT,
          stickyTitle: true,
        },
        componentDidMount: () => {
          const { driver } = createDriver(interactiveDataHook);
          driver.scrollToBottom();
        },
      },
    ],
  },
  {
    describe: 'footer',
    its: [
      {
        it: 'Two buttons with a short content',
        props: {
          content: SHORT_CONTENT,
          footer: BUTTONS_FOOTER,
        },
      },
      {
        it: 'A sticky footer (two buttons) with long content',
        props: {
          content: LONG_CONTENT,
          footer: BUTTONS_FOOTER,
          stickyFooter: true,
        },
      },
    ],
  },
  {
    describe: 'close button',
    its: [
      {
        it: 'With title and content',
        props: {
          title: SIMPLE_TITLE,
          content: SHORT_CONTENT,
          onCloseButtonClick: () => {},
        },
      },
      {
        it: 'Without title, with content',
        props: {
          content: SHORT_CONTENT,
          onCloseButtonClick: () => {},
        },
      },
    ],
  },
  {
    describe: 'fullscreen',
    its: [
      {
        it: 'template',
        props: {
          fullscreen: true,
          onCloseButtonClick: () => {},
          content: (
            <Box direction="vertical" align="center" textAlign="center">
              <Box marginBottom="36px" marginTop="91px">
                <Logo />
              </Box>
              <Box marginBottom="12px">
                <Heading appearance={'H1'}>Welcome!</Heading>
              </Box>
              <Box marginBottom="36px">
                <Text weight="normal" secondary>
                  First impressions count. Apps have one chance to grab a new
                  user’s attention. Use it well.
                </Text>
              </Box>
              <Box marginBottom="18px">
                <Button size="large">Start Now</Button>
              </Box>
              <Box marginBottom="91px">
                <TextButton>Learn More</TextButton>
              </Box>
            </Box>
          ),
        },
      },
    ],
  },
];

const InteractiveModalMobileLayout = ({ componentDidMount, ...props }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  }, [componentDidMount]);

  return (
    <ModalMobileLayout
      dataHook={interactiveDataHook}
      {...commonProps}
      {...props}
    />
  );
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ModalMobileLayout/${describe}`, module).add(it, () => (
      <Box
        width="375px"
        height="640px"
        backgroundColor="rgba(22, 45, 61, 0.66)"
      >
        <InteractiveModalMobileLayout {...props} />
      </Box>
    ));
  });
});
