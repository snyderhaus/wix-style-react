import React from 'react';
import * as wsrScope from '../../..';
import { Layout, Cell } from '../../../Layout';
import LiveCodeExample from '../../../../stories/utils/LiveCodeExample';

const exampleCode = `
<>
  <Box align="left" verticalAlign="middle">
    <Search expandable expandWidth="250px" />
    <Box marginLeft="small">Left to right</Box>
  </Box>
  <Box align="right" verticalAlign="middle">
    <Box marginRight="small">Right to left</Box>
    <Search expandable expandWidth="250px" />
  </Box>
</>`;

export default () => (
  <Layout>
    <Cell span={6}>
      <LiveCodeExample
        scope={wsrScope}
        compact
        title="Click on the icon to expand search"
        initialCode={exampleCode}
      />
    </Cell>
  </Layout>
);
