export const closeButton = `
<Layout>
  <Cell>
    <ModalMobileLayout
          title={<Text weight="bold">Enter VAT ID</Text>}
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
      footer={
      <Box align="right">
    <Box marginRight="12px">
      <Button priority="secondary">Cancel</Button>
    </Box>
    <Button>Save</Button>
    </Box>}
    onCloseButtonClick={() => {}}
    />
  </Cell>

  <Cell>
    <ModalMobileLayout
      title={<Text weight="bold">Enter VAT ID</Text>}
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
      footer={  <Box align="right">
    <Box marginRight="12px">
      <Button priority="secondary">Cancel</Button>
    </Box>
    <Button>Save</Button>
  </Box>}
    />
  </Cell>
</Layout>
`;

export const title = `
<Layout>
  <Cell>
    <ModalMobileLayout
          title={<Text weight="bold">Enter VAT ID</Text>}
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
      footer={  <Box align="right">
    <Box marginRight="12px">
      <Button priority="secondary">Cancel</Button>
    </Box>
    <Button>Save</Button>
  </Box>}
      onCloseButtonClick={() => {}}
    />
  </Cell>

  <Cell>
    <ModalMobileLayout
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
      footer={  <Box align="right">
    <Box marginRight="12px">
      <Button priority="secondary">Cancel</Button>
    </Box>
    <Button>Save</Button>
  </Box>}
      onCloseButtonClick={() => {}}
    />
  </Cell>
</Layout>
`;

export const stickyTitle = `
<div>
<div style={{height: '185px'}}>
    <ModalMobileLayout
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
               title={<Text weight="bold">Enter VAT ID</Text>}

      onCloseButtonClick={() => {}}
      stickyTitle
    />
    </div>

<div style={{height: '185px'}}>
    <ModalMobileLayout
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
               title={<Text weight="bold">Enter VAT ID</Text>}
      onCloseButtonClick={() => {}}
    />
    </div>
</div>
`;

export const footer = `
<Layout>
  <Cell>
    <ModalMobileLayout
          title={<Text weight="bold">Enter VAT ID</Text>}
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
      footer={  <Box align="right">
    <Box marginRight="12px">
      <Button priority="secondary">Cancel</Button>
    </Box>
    <Button>Save</Button>
  </Box>}
      onCloseButtonClick={() => {}}
    />
  </Cell>

  <Cell>
    <ModalMobileLayout
              title={<Text weight="bold">Enter VAT ID</Text>}
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
      onCloseButtonClick={() => {}}
    />
  </Cell>
</Layout>
`;

export const stickyFooter = `
<div>
<div style={{height: '185px'}}>
    <ModalMobileLayout
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
      footer={  <Box align="right">
    <Box marginRight="12px">
      <Button priority="secondary">Cancel</Button>
    </Box>
    <Button>Save</Button>
  </Box>}
      onCloseButtonClick={() => {}}
      stickyFooter
    />
    </div>

<div style={{height: '185px'}}>
    <ModalMobileLayout
      content={
        <Text weight="normal" secondary>
          Enter a valid European Union VAT identification number for the
          ‘Reverse Charge’ mechanism in order to apply.
        </Text>
      }
      footer={  <Box align="right">
<Box marginRight="12px">
      <Button priority="secondary">Cancel</Button>
    </Box>
    <Button>Save</Button>
  </Box>}
      onCloseButtonClick={() => {}}
    />
    </div>
</div>
`;
