import React from 'react';
import Button from '../../Button';

export const description = {
  title: 'Description',
  text:
    'Marketing layout is a layout designed to promote new features or display first time visit. Component has title, description, action and illustration areas.',
};

export const sizeSmall = `
  <Card>
    <Card.Content>
      <MarketingLayout
        title="Small Size Card"
        description="This card requires less attention. It can promote side features that might add value, but ar not mandatory to achieve main goals."
        actions={<Button size="small">Get Started</Button>}
        image={<Box backgroundColor="lightgrey" width="126px" height="126px"></Box>}
      />
    </Card.Content>
  </Card>
`;

export const sizeMedium = `
  <Card>
    <Card.Content>
      <MarketingLayout
        title="Medium Size Card"
        description="This card is big enough to be noticed and can be used to promote big things while still leaving plenty of space."
        actions={<Button size="medium">Get Started</Button>}
        image={<Box backgroundColor="lightgrey" width="282px" height="188px"></Box>}
        size="medium"
      />
    </Card.Content>
  </Card>
`;

export const sizeLarge = `
  <Card>
    <Card.Content>
      <MarketingLayout
        title="Large Size Card"
        description="This card is very prominent, use it to promote apps or things like staff featured templates."
        actions={<Button size="large">Get Started</Button>}
        image={<Box backgroundColor="lightgrey" width="360px" height="240px"></Box>}
        size="large"
      />
    </Card.Content>
  </Card>
`;

export const inverted = `
  <Card>
    <Card.Content>
      <MarketingLayout
        title="Customize Your Own Automated Emails"
        description="Design customized emails and set the automated triggers. Remember to disabled the relevant default email above if you're creating your own branded emails."
        inverted
        actions={<Button size="small" priority="secondary">Create Automations</Button>}
        image={<img src="https://static.parastorage.com/services/promote-seo/1.980.0/assets/task-list/ic-connect-to-google-icon.svg" width="100%" />}
      />
    </Card.Content>
  </Card>
`;

export const advanced = `
  <Card controls={<CloseButton skin="dark" size="medium" />}>
    <Card.Content size="medium">
      <MarketingLayout
        inverted
        title={
          <Layout cols={1} gap="6px">
            <Heading appearance="H5">STEP 1</Heading>
            <Heading appearance="H2">Get Your Site Listed on Google</Heading>
          </Layout>
        }
        description={
          <Layout cols={1} gap="0px">
            <Text>Complete this checklist to connect your site to Google.</Text>
            <TextButton>Learn More</TextButton>
          </Layout>
        }
        size="medium"
        actions={<Button size="medium" priority="secondary" prefixIcon={<Icons.Google/>}>Connect to Google</Button>}
        image={<img src="https://static.parastorage.com/services/promote-seo/1.980.0/assets/task-list/ic-connect-to-google-icon.svg" width="100%" />}
      />
    </Card.Content>
  </Card>
`;

export const images = [
  {
    label: 'GIF',
    value: (
      <img
        src="https://static.wixstatic.com/media/25125b_fde50458cc6746c79267182c4b4592e0~mv2.gif"
        width="100%"
      />
    ),
  },
  {
    label: 'SVG',
    value: (
      <img
        src="https://static.parastorage.com/services/promote-seo/1.980.0/assets/task-list/ic-connect-to-google-icon.svg"
        width="100%"
      />
    ),
  },
];

export const actions = [
  { label: 'One button', value: <Button size="small">Button</Button> },
  {
    label: 'Two buttons',
    value: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '170px',
        }}
      >
        <Button size="small">Button</Button>
        <Button size="small" priority="secondary">
          Button
        </Button>
      </div>
    ),
  },
];
