/* eslint-disable */
<Proportion aspectRatio={1.8}>
  <MediaOverlay
    skin="gradient"
    media="https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg"
  >
    <MediaOverlay.Content placement="top-end" visible="hover">
      <IconButton priority="secondary" skin="inverted" size="tiny">
        <Icons.Crop />
      </IconButton>
      <IconButton priority="secondary" skin="inverted" size="tiny">
        <Icons.Star />
      </IconButton>
      <PopoverMenu
        triggerElement={
          <IconButton priority="secondary" skin="inverted" size="tiny">
            <Icons.More />
          </IconButton>
        }
      >
        <PopoverMenu.MenuItem text="Edit" />
        <PopoverMenu.MenuItem text="Preview" />
        <PopoverMenu.MenuItem text="Remove" skin="destructive" />
      </PopoverMenu>
    </MediaOverlay.Content>
    <MediaOverlay.Content placement="top-start" visible="always">
      <Badge skin="success">New!</Badge>
    </MediaOverlay.Content>
    <MediaOverlay.Content placement="bottom-start" visible="always">
      <Text size="small" light>Image Title</Text>
    </MediaOverlay.Content>
  </MediaOverlay>
</Proportion>
