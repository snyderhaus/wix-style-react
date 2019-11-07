export const back = `<ComposerHeader backButtonValue="Back to Social Posts"/>`;

export const main = `<ComposerHeader>
<ComposerHeader.MainActions>
  <Button skin="inverted">Preview</Button>
  <Button>Next</Button>
</ComposerHeader.MainActions>
</ComposerHeader>`;

export const actions = `
<ComposerHeader backButtonValue="Back to Social Posts">
<ComposerHeader.Actions justifyContent="flex-start">
  <TextButton skin="premium">
    Upgrade
  </TextButton>
</ComposerHeader.Actions>
<ComposerHeader.MainActions>
  <Button skin="inverted">Preview</Button>
  <Button>Next</Button>
</ComposerHeader.MainActions>
</ComposerHeader>
`;

export const dividers = `
<ComposerHeader backButtonValue="Back to Social Posts">
<ComposerHeader.Actions justifyContent="flex-start">
  <TextButton skin="premium">
    Upgrade
  </TextButton>
</ComposerHeader.Actions>
<ComposerHeader.Actions justifyContent="flex-end">
  <ToggleButton tooltipContent="Undo">
    <Icons.Undo />
  </ToggleButton>
  <ToggleButton tooltipContent="Redo">
    <Icons.Redo />
  </ToggleButton>
</ComposerHeader.Actions>
<ComposerHeader.MainActions>
  <Button skin="inverted">Preview</Button>
  <Button>Next</Button>
</ComposerHeader.MainActions>
</ComposerHeader>
`;

export const save = `
<Layout cols={1}>
<ComposerHeader backButtonValue="Back to Social Posts">
<ComposerHeader.Actions  >
  <TextButton skin="premium">
    Upgrade
  </TextButton>
</ComposerHeader.Actions>
<ComposerHeader.Actions justifyContent="flex-end" >
<ComposerHeader.SaveStatus saveStatusValue="Saving..."/>
<ToggleButton tooltipContent="Undo">
  <Icons.Undo />
</ToggleButton>
<ToggleButton tooltipContent="Redo">
  <Icons.Redo />
</ToggleButton>
</ComposerHeader.Actions>
<ComposerHeader.MainActions>
  <Button skin="inverted">Preview</Button>
  <Button>Next</Button>
</ComposerHeader.MainActions>
</ComposerHeader>
<ComposerHeader backButtonValue="Back to Social Posts" >
<ComposerHeader.Actions  >
  <TextButton skin="premium">
    Upgrade
  </TextButton>
</ComposerHeader.Actions>
<ComposerHeader.Actions width="auto" >
<ComposerHeader.SaveStatus saveStatusValue="Saving..." />
</ComposerHeader.Actions>
<ComposerHeader.MainActions>
  <Button skin="inverted">Preview</Button>
  <Button>Next</Button>
</ComposerHeader.MainActions>
</ComposerHeader>
</Layout>
`;

export const size = `
<Layout cols={1}>
<ComposerHeader backButtonValue="Back to Social Posts">
<ComposerHeader.Actions  >
  <TextButton skin="premium">
    Upgrade
  </TextButton>
</ComposerHeader.Actions>
<ComposerHeader.Actions justifyContent="flex-end">
<ComposerHeader.SaveStatus saveStatusValue="Saving..." />
<ToggleButton tooltipContent="Undo">
  <Icons.Undo />
</ToggleButton>
<ToggleButton tooltipContent="Redo">
  <Icons.Redo />
</ToggleButton>
</ComposerHeader.Actions>
<ComposerHeader.MainActions>
  <Button skin="inverted">Preview</Button>
  <Button>Next</Button>
</ComposerHeader.MainActions>
</ComposerHeader>

<ComposerHeader backButtonValue="Back to Social Posts" size="small">
<ComposerHeader.Actions  >
  <TextButton skin="premium" size="small">
    Upgrade
  </TextButton>
</ComposerHeader.Actions>
<ComposerHeader.Actions justifyContent="flex-end">
<ComposerHeader.SaveStatus saveStatusValue="Saving..." size="small" />
<ToggleButton tooltipContent="Undo">
  <Icons.Undo />
</ToggleButton>
<ToggleButton tooltipContent="Redo">
  <Icons.Redo />
</ToggleButton>
</ComposerHeader.Actions>
<ComposerHeader.MainActions>
  <Button size="small" skin="inverted">Preview</Button>
  <Button size="small"> Next</Button>
</ComposerHeader.MainActions>
</ComposerHeader>
</Layout>
`;

export const shadow = `
<ComposerHeader backButtonValue="Back to Social Posts" dropShadow>
<ComposerHeader.Actions  >
  <TextButton skin="premium">
    Upgrade
  </TextButton>
</ComposerHeader.Actions>
<ComposerHeader.Actions justifyContent="flex-end">
<ComposerHeader.SaveStatus saveStatusValue="Saving..." />
<ToggleButton tooltipContent="Undo">
  <Icons.Undo />
</ToggleButton>
<ToggleButton tooltipContent="Redo">
  <Icons.Redo />
</ToggleButton>
</ComposerHeader.Actions>
<ComposerHeader.MainActions>
  <Button skin="inverted">Preview</Button>
  <Button>Next</Button>
</ComposerHeader.MainActions>
</ComposerHeader>
`;
