import React from 'react';

import SidebarHeader from '../SidebarHeader';
import { SidebarContext } from '../../Sidebar/SidebarAPI';
import Box from '../../Box';
import LinearProgressBar from '../../LinearProgressBar';
import Avatar from '../../Avatar';
import { snap, visualize } from 'storybook-snapper';

const skins = ['dark', 'light'];

const baseProps = {
  title: 'Site Name',
};

const tests = [
  {
    describe: 'Title',
    its: [
      {
        it: 'Should display the title',
        props: {
          ...baseProps,
        },
      },
      {
        it: 'Should display the title with ellipsis',
        props: {
          title:
            'This is a very long subtitle which exceeds the maximum width of its container',
        },
      },
    ],
  },
  {
    describe: 'Subtitle',
    its: [
      {
        it: 'Should display the subtitle',
        props: {
          ...baseProps,
          subtitle: 'Role: Owner',
        },
      },
    ],
  },
  {
    describe: 'Children',
    its: [
      {
        it: 'Should display the children above the title and subtitle',
        props: {
          ...baseProps,
          subtitle: 'Role: Owner',
          children: (
            <Box marginTop={3}>
              <LinearProgressBar showProgressIndication value={50} />
            </Box>
          ),
        },
      },
      {
        it: 'Should display the children only',
        props: {
          children: <Avatar size="size72" />,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  visualize('SidebarHeader', () => {
    snap(describe, () => (
      <React.Fragment>
        {its.map(({ props }, id) => (
          <Box backgroundColor="D70" key={id}>
            {skins.map(skin => (
              <Box
                direction="vertical"
                marginBottom={5}
                marginRight={5}
                key={skin}
              >
                <SidebarContext.Provider value={{ getSkin: () => skin }}>
                  <SidebarHeader {...props} />
                </SidebarContext.Provider>
              </Box>
            ))}
          </Box>
        ))}
      </React.Fragment>
    ));
  });
});
