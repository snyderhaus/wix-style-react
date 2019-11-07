export const skins = `
<Layout cols={5} gap={0} justifyItems="center" alignItems="center">
  <Box padding={1} backgroundColor="D80">
    <IconButton>
      <Icons.More />
    </IconButton>
  </Box>
  <IconButton skin="inverted">
    <Icons.More />
  </IconButton>
  <Box padding={1} backgroundColor="D10">
    <IconButton skin="light">
      <Icons.More />
    </IconButton>
  </Box>
  <IconButton skin="transparent">
      <Icons.More />
  </IconButton>
  <Box padding={1} backgroundColor="D80">
    <IconButton skin="premium">
      <Icons.More />
    </IconButton>
  </Box>
</Layout>
`;

export const priority = `
<Layout cols={5} gap={0} justifyItems="center">
  <Box padding={1} backgroundColor="D80">
    <IconButton priority="secondary">
      <Icons.X />
    </IconButton>
    <IconButton priority="primary">
      <Icons.Check />
    </IconButton>
  </Box>
  <Box padding={1}>
    <IconButton priority="secondary" skin="inverted">
      <Icons.X />
    </IconButton>
    <IconButton priority="primary" >
      <Icons.Check />
    </IconButton>
  </Box>
  <Box padding={1} backgroundColor="D10">
    <IconButton priority="secondary" skin="light">
      <Icons.X />
    </IconButton>
    <IconButton priority="primary" skin="light">
      <Icons.Check />
    </IconButton>
  </Box>
  <Box padding={1} backgroundColor="B10">
    <IconButton priority="secondary" skin="transparent">
      <Icons.X />
    </IconButton>
    <IconButton priority="primary" skin="transparent">
      <Icons.Check />
    </IconButton>
  </Box>
    <Box padding={1} backgroundColor="D80">
    <IconButton priority="secondary" skin="premium">
      <Icons.X />
    </IconButton>
    <IconButton priority="primary" skin="premium">
      <Icons.Check />
    </IconButton>
  </Box>
</Layout>
`;

export const size = `
<Layout cols={4} gap={0} justifyItems="center">
  <IconButton size="tiny">
    <Icons.MoreSmall />
  </IconButton>
  <IconButton size="small">
    <Icons.MoreSmall />
  </IconButton>
  <IconButton>
    <Icons.More />
  </IconButton>
  <IconButton size="large">
    <Icons.More />
  </IconButton>
</Layout>
`;

export const disabled = `
<Layout cols={2} gap={0} justifyItems="center">
  <IconButton>
    <Icons.More />
  </IconButton>
  <IconButton disabled>
    <Icons.More />
  </IconButton>
</Layout>
`;

export const custom = `
<Layout cols={3} gap={0} justifyItems="center">
  <Box direction="vertical" align="center">
    <p>An &lt;a/&gt; tag</p>
    <IconButton as="a" href="https://www.wix.com" target="_blank" skin="transparent"><Icons.More /></IconButton>
  </Box>
  <Box direction="vertical" align="center">
    <p>A react router &lt;Link/&gt; tag</p>
    <IconButton as={Link} skin="premium" to="/home" skin="transparent"><Icons.More /></IconButton>
  </Box>
  <Box direction="vertical" align="center">
    <p>A native &lt;button/&gt; tag</p>
    <IconButton as="button" onClick={() => alert('yay')} skin="transparent"><Icons.More /></IconButton>
  </Box>
</Layout>
`;
