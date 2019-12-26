export const plain = `<SidebarSectionItem>Action</SidebarSectionItem>`;

export const selected = `
<SidebarSectionItem selected>Action</SidebarSectionItem>
`;

export const disabled = `
<SidebarSectionItem disabled>Action</SidebarSectionItem>
`;

export const drillable = `
<SidebarSectionItem drillable>Action</SidebarSectionItem>
`;
export const drillableAndAlwaysShowChevron = `
<SidebarSectionItem drillable alwaysDisplayChevron>Action</SidebarSectionItem>
`;

export const multipleLines = `
<SidebarSectionItem>This is an example of multiple lines</SidebarSectionItem>
`;

export const prefix = `
<SidebarSectionItem prefix={<Box width="8px" height="8px" borderRadius="50%" backgroundColor="G10"></Box>}>Action</SidebarSectionItem>
`;

export const counterBadgeSuffix = `
<SidebarSectionItem suffix={<CounterBadge skin="standard">5</CounterBadge>}>Action</SidebarSectionItem>
`;

export const badgeSuffix = `
<SidebarSectionItem suffix={<Badge skin="standard" size="small">New</Badge>}>Action</SidebarSectionItem>
`;

export const lightSkin = `
<Box height="36px">
  <Sidebar skin="light">
    <Sidebar.Item>
      <SidebarSectionItem>Action</SidebarSectionItem>
    </Sidebar.Item>
  </Sidebar>
</Box>
`;
