export const skins = `
<Layout cols={4} gap={0} justifyItems="center">
  <TextButton >standard</TextButton>
  <Box backgroundColor="D10">
    <TextButton skin="light">light</TextButton>
  </Box>
  <TextButton skin="premium">premium</TextButton>
  <Box backgroundColor="Y30">
    <TextButton skin="dark">dark</TextButton>
  </Box>
</Layout>`;

export const weight = `
<Layout cols={2} gap={0} justifyItems="center" alignItems="center">
  <TextButton weight="thin">Thin</TextButton>
  <TextButton weight="normal">Normal</TextButton>
</Layout>
`;

export const underline = `
<Layout cols={3} gap={0} justifyItems="center">
  <TextButton>none</TextButton>
  <TextButton underline="onHover">on hover</TextButton>
  <TextButton underline="always">always</TextButton>
</Layout>
`;

export const affixes = `
<Layout cols={2} gap={0} justifyItems="center">
  <TextButton size="small" prefixIcon={<Icons.ChevronDownSmall />}>prefix</TextButton>
  <TextButton size="medium" suffixIcon={<Icons.ChevronDown />}>suffix</TextButton>
</Layout>
`;

export const size = `
<Layout cols={3} gap={0} justifyItems="center"  alignItems="center">
  <TextButton size="tiny">
    tiny
  </TextButton>
  <TextButton size="small">
    small
  </TextButton>
  <TextButton size="medium">
    medium
  </TextButton>
</Layout>`;

export const inline = `
<Text>In literary theory, a text is any object that can be read, <a>whether this object is a work of literature,</a> a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message.</Text>
`;

export const custom = `
<Layout cols={3} gap={0} justifyItems="center">
  <Box direction="vertical" align="center">
    <p>An &lt;a/&gt; tag</p>
    <TextButton as="a" href="https://www.wix.com" target="_blank">wix.com</TextButton>
  </Box>
  <Box direction="vertical" align="center">
    <p>A react router &lt;Link/&gt; tag</p>
    <TextButton as={Link} skin="premium" to="/home">Go to Home</TextButton>
  </Box>
  <Box direction="vertical" align="center">
    <p>A native &lt;button/&gt; tag</p>
    <TextButton as="button" onClick={() => alert('yay')}>Alert yay</TextButton>
  </Box>
</Layout>
`;
