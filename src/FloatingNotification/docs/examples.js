export const types = `<Layout>
  <Cell>
      <FloatingNotification
        type="standard"
        text="this a standard notification (and default)"
      />
  </Cell>
  <Cell>
    <FloatingNotification
        type="success"
        text="this a success notification"
    />
  </Cell>
  <Cell>
    <FloatingNotification
        type="warning"
        text="this a warning notification"
    />
  </Cell>
  <Cell>
    <FloatingNotification
        type="destructive"
        text="this a destructive notification"
    />
  </Cell>
  <Cell>
    <FloatingNotification
        type="premium"
        text="this a premium notification"
    />
  </Cell>
  <Cell>
    <FloatingNotification
         type="preview"
         text="this a preview notification"
    />
  </Cell>
  <Cell>
    <FloatingNotification
         type="dark"
         text="this a dark notification"
    />
  </Cell>
</Layout> `;

export const options = `<Layout>
  <Cell>
    <FloatingNotification
      text="this is some text"
      prefixIcon={<Icons.StatusComplete />}
    />
  </Cell>
  <Cell>
    <FloatingNotification
      text="this is some text"
      showButton
      buttonProps={{ label: 'Undo' }}
    />
  </Cell>
  <Cell>
    <FloatingNotification
      text="this is some text"
      showTextButton
      textButtonProps={{ label: 'Trash' }}
    />
  </Cell>
  <Cell>
    <FloatingNotification
      text="this is some text"
      showButton
      buttonProps={{ label: 'Undo' }}
      showTextButton
      textButtonProps={{ label: 'Trash' }}
    />
  </Cell>
  <Cell>
    <FloatingNotification
      text="this is some text"
      showButton
      buttonProps={{ label: 'Undo' }}
      showTextButton
      textButtonProps={{ label: 'Trash' }}
      showCloseButton={false}
      prefixIcon={<Icons.StatusComplete />}
    />
  </Cell>
  <Cell>
    <FloatingNotification
      text="this is some text"
      showButton
      buttonProps={{ label: 'Undo' }}
      showTextButton
      textButtonProps={{ label: 'Trash' }}
      prefixIcon={<Icons.StatusComplete />}
    />
  </Cell>
</Layout>`;

export const fullWidth = `<FloatingNotification
  width="100%"
  type="standard"
  text="this floating notification has been assigned with a defined width"
  showTextButton
/>`;

export const href = `<FloatingNotification
  type="standard"
  text="this is some text"
  showTextButton
  textButtonProps={{label: 'Wix.com', as: 'a', href: 'https://www.wix.com'}}
/>`;
