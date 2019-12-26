export const plain = `<SidebarHeader title="Site Name" subtitle="Role: Owner" />`;

export const titlesWithChildren = `<SidebarHeader title="Site Name" subtitle="Role: Owner"><Box marginTop={3}><LinearProgressBar showProgressIndication value={50} /></Box></SidebarHeader>`;

export const onlyChildren = `<SidebarHeader><TextButton prefixIcon={<Icons.ArrowLeft />} size="tiny" weight="normal" skin="light">Back to Site</TextButton><Box direction="vertical" align="center" marginTop={5}><Avatar size="size72" /><Box direction="vertical" align="center" marginTop={2}><Text size="small" weight="bold" secondary light>Owner</Text><Text size="tiny" secondary light>owner@something.com</Text></Box></Box></SidebarHeader>`;

export const ellipsis = `<SidebarHeader title="This is a very long title which exceeds the maximum width of its container" subtitle="Role: Owner" />`;

export const lightSkin = `
<Box height="99px">
  <Sidebar skin="light">
    <SidebarHeader title="Site Name" subtitle="Role: Owner" />
  </Sidebar>
</Box>
`;
