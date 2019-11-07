/* eslint-disable */
<Proportion aspectRatio={1.8}>
  <MediaOverlay
    skin="gradient"
    media={
      <div
        style={{
          height: '100%',
          background: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'
        }}
      />
    }
  >
    <MediaOverlay.Content placement="bottom-start" visible="always">
      <Text size="small" ellipsis light>A very long title text that should be truncated with an ellipsis when it can't fit inside available space!</Text>
    </MediaOverlay.Content>
  </MediaOverlay>
</Proportion>
