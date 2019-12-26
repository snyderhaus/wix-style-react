export const errors = `<Layout>
  <Cell>
    <LinearProgressBar error value={20} />
  </Cell>
  <Cell>
    <Box backgroundColor="D10">
       <LinearProgressBar light error value={20} />
    </Box>
  </Cell>
    <Cell>
    <LinearProgressBar showProgressIndication error errorMessage="some error" value={20} />
  </Cell>
</Layout>`;

export const progressIndication = `<Layout>
  <Cell>
    <LinearProgressBar showProgressIndication value={0} />
  </Cell>
  <Cell>
    <LinearProgressBar showProgressIndication value={50} />
  </Cell>
  <Cell>
    <LinearProgressBar showProgressIndication value={100} />
  </Cell>
</Layout>`;

export const themes = `<Layout>
  <Cell>
    <LinearProgressBar value={20} />
  </Cell>
    <Cell>
    <Box backgroundColor="D10">
        <LinearProgressBar light value={20} />
    </Box>
  </Cell>
</Layout>`;

export const skins = `<Layout>
  <Cell>
    <LinearProgressBar value={20} />
  </Cell>
  <Cell>
    <LinearProgressBar skin="success" value={20} />
  </Cell>
</Layout>`;
