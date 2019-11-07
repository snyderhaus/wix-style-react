export const skinsExamples = `
<Layout gap={0} justifyItems="center">
  <CloseButton />
  <Box backgroundColor="D10">
    <CloseButton skin="light" />
  </Box>
  <Box backgroundColor="Y30">
    <CloseButton skin="dark" />
  </Box>
  <CloseButton skin="standardFilled" />
  <Box backgroundColor="B20">
    <CloseButton skin="lightFilled" />
  </Box>
  <CloseButton skin="transparent" />
</Layout>
`;

export const customExamples = `
<Layout gap={0} justifyItems="center">
  <Box backgroundColor="B20">
    <CloseButton skin="lightFilled"><Icons.Help /></CloseButton>
  </Box>
  <Box backgroundColor="B20">
    <CloseButton skin="lightFilled"/>
</Box>
</Layout>
`;

export const sizesExamples = `
<Layout gap={0} justifyItems="center" alignItems="center">
  <CloseButton />
  <CloseButton size="medium" />
</Layout>
`;

export const custom = `
<Layout cols={3} gap={0} justifyItems="center">
  <Box direction="vertical" align="center">
    <p>An &lt;a/&gt; tag</p>
    <CloseButton as="a" href="https://www.wix.com" target="_blank" skin="transparent" />
  </Box>
  <Box direction="vertical" align="center">
    <p>A react router &lt;Link/&gt; tag</p>
    <CloseButton as={Link} skin="premium" to="/home" skin="transparent" />
  </Box>
  <Box direction="vertical" align="center">
    <p>A native &lt;button/&gt; tag</p>
    <CloseButton as="button" onClick={() => alert('yay')} skin="transparent" />
  </Box>
</Layout>
`;
