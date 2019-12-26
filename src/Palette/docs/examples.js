export const simple = `
<Box height="42px">
  <Palette
    fill={[
      'rgb(50, 132, 144)',
      'rgb(50, 183, 198)',
      'rgb(146, 224, 225)',
      'rgb(203, 246, 255)',
      'rgb(229, 250, 248)',
    ]}
  />
</Box>;
`;

export const fill = `
<Layout cols={1}>
  <Box height="42px" >
    <Palette
      fill={[
        'rgb(50, 132, 144)',
        'rgb(50, 183, 198)',
        'rgb(146, 224, 225)',
      ]}
    />
  </Box>
  <Box height="42px">
    <Palette
      fill={[
        'linear-gradient(to right top, #d24113, #e06e01, #e99800, #edc01c, #ece743)',
        'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
        'linear-gradient(to right top, #0b0b0b, #40393d, #7d6a69, #b7a393, #e5e4c5)'
      ]}
    />
  </Box>
</Layout>;
`;

export const size = `
<Layout cols={1}>
  <Box height="42px">
    <Palette
      fill={[
        '#000000',
        '#211D1E',
        '#433B3D',
        '#65595C',
        '#87777B',
        '#A5999C',
        '#C3BBBD',
        '#E1DDDE',
      ]}
    />
  </Box>
  <Box height="18px" width="120px">
    <Palette
      fill={['rgb(50, 132, 144)', 'rgb(50, 183, 198)', 'rgb(146, 224, 225)']}
    />
  </Box>
</Layout>;
`;

export const formfield = `
<FormField  label="Mellow Salmon">
<Box height={'24px'} width ={'200px'} >
  <Palette fill={['rgb(84, 84, 84)',
  'rgb(229, 150, 111)',
  'rgb(252, 225, 207)',
  'rgb(254, 194, 130)',
  'rgb(255, 238, 230)']}/>
</Box>
</FormField>
`;

export const thumbnailSmall = `
<Layout cols={2}>
  <Thumbnail  height={'30px'} selected={true}>
    <Box height={'30px'}>
      <Palette fill={['rgb(84, 84, 84)',
      'rgb(229, 150, 111)',
      'rgb(252, 225, 207)',
      'rgb(254, 194, 130)',
      'rgb(255, 238, 230)']}/>
    </Box>
  </Thumbnail>
</Layout>
`;

export const thumbnailBig = `
<Layout cols={2}>
  <Thumbnail  height={'68px'} selected={true} >
    <div style={{padding: '0px 18px 9px 17px'}}>
      <FormField  label="Mellow Salmon" >
        <Box height={'24px'}>
          <Palette fill={['rgb(84, 84, 84)',
          'rgb(229, 150, 111)',
          'rgb(252, 225, 207)',
          'rgb(254, 194, 130)',
          'rgb(255, 238, 230)']}/>
        </Box>
    </FormField>
    </div>
 </Thumbnail>
</Layout>
`;
