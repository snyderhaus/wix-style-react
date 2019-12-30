/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
} from '../sharedComponents';

import { modalsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/modalsFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  modalsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//9. Modals
import {
  MessageBoxFunctionalLayout,
  MessageBoxMarketerialLayout,
} from 'wix-style-react/MessageBox';
import Modal from 'wix-style-react/Modal';
import ModalPreviewLayout from 'wix-style-react/ModalPreviewLayout';
import ModalMobileLayout from 'wix-style-react/ModalMobileLayout';

//Assets
import Button from 'wix-style-react/Button';
import Box from 'wix-style-react/Box';
import Text from 'wix-style-react/Text';
import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';
import NumberInput from 'wix-style-react/NumberInput';
import RichTextInputArea from 'wix-style-react/RichTextInputArea';
import Checkbox from 'wix-style-react/Checkbox';
import TextButton from 'wix-style-react/TextButton';
import { Layout, Cell } from 'wix-style-react/Layout';
import IconButton from 'wix-style-react/IconButton';
import More from 'wix-ui-icons-common/More';
import Print from 'wix-ui-icons-common/Print';
import { Container, Row, Col } from 'wix-style-react/Grid';
import ascendInvoice from '../../../../test/assets/ascend-invoice.jpg';
import { Category } from '../../../storiesHierarchy';

const groupSymbol = symbolsGroup.modals;

const AlertExamples = () => {
  const symbol = modalsSymbols.alert;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  const renderMessageBoxFunctionalLayout = props => {
    const {
      title,
      confirmText,
      cancelText,
      theme,
      image,
      maxHeight,
      sideActions,
      footerBottomChildren,
      children,
    } = props;

    return (
      <MessageBoxFunctionalLayout
        title={title}
        confirmText={confirmText}
        cancelText={cancelText}
        theme={theme}
        image={image}
        maxHeight={maxHeight}
        footerBottomChildren={footerBottomChildren}
        sideActions={sideActions}
      >
        {children}
      </MessageBoxFunctionalLayout>
    );
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'More Info',
            confirmText: 'Main',
            cancelText: 'Cancel',
            theme: 'blue',
            sideActions: (
              <FormField
                label="Please don't show me this again"
                labelPlacement="right"
              >
                <Checkbox />
              </FormField>
            ),
            children:
              'This is a generic message. No harm done, but really needed to interrupt you.',
          })}
        </Cell>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'System Crashed!',
            confirmText: 'Action',
            theme: 'red',
            cancelText: 'Secondary',
            image: (
              <Box
                height="120px"
                width="120px"
                backgroundColor="D60"
                borderRadius="50%"
              />
            ),
            children: 'Something terribly bad happened, that cannot be undone.',
          })}
        </Cell>
        <Cell>
          {renderMessageBoxFunctionalLayout({
            title: 'Premium modal',
            confirmText: 'Upgrade',
            cancelText: 'Cancel',
            theme: 'purple',
            children: 'I am a premium modal!',
            footerBottomChildren: (
              <div>
                <Text size="small">By upgrading, you agree to the </Text>
                <TextButton size="small">Wix Terms of Use.</TextButton>
              </div>
            ),
          })}
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

class CustomModalExample extends PureComponent {
  render() {
    const symbol = modalsSymbols.content;
    const components = modalsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <MessageBoxFunctionalLayout
          cancelText="Cancel"
          confirmText="Save"
          onCancel={() => console.log('onCancel')}
          onOk={() => console.log('onOk')}
          theme="blue"
          title="New Product"
          sideActions={
            <FormField label="Don't show this again" labelPlacement="right">
              <Checkbox />
            </FormField>
          }
        >
          <Container fluid>
            <Row stretchViewsVertically>
              <Col>
                {'To get running, your new product needs some details:'}
              </Col>
            </Row>
            <Row stretchViewsVertically>
              <Col span={9}>
                <FormField label="Title">
                  <Input size="normal" placeholder="Value" />
                </FormField>
              </Col>
              <Col span={3}>
                <FormField label="Quantity">
                  <NumberInput value={500} />
                </FormField>
              </Col>
            </Row>
            <Row stretchViewsVertically>
              <Col>
                <FormField label="Description">
                  <RichTextInputArea placeholder="Tell your customers what they will get" />
                </FormField>
              </Col>
            </Row>
          </Container>
        </MessageBoxFunctionalLayout>
      </SingleComponentSideBySide>
    );
  }
}

const MarketingExample = () => {
  const symbol = modalsSymbols.marketing;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  const marketingModalSvg = (
    <div style={{ marginTop: '120px' }}>
      <svg
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>illustration</title>
        <desc>Created with Sketch.</desc>
        <defs>
          <path
            d="M87.1573267,50.199802 C87.1573267,70.7057426 70.5345545,87.3285149 50.0286139,87.3285149 C29.5226733,87.3285149 12.899901,70.7057426 12.899901,50.199802 C12.899901,29.6938614 29.5226733,13.0710891 50.0286139,13.0710891 C70.5345545,13.0710891 87.1573267,29.6938614 87.1573267,50.199802 L87.1573267,50.199802 Z"
            id="path-1"
          />
          <mask
            id="mask-2"
            maskContentUnits="userSpaceOnUse"
            maskUnits="objectBoundingBox"
            x="0"
            y="0"
            width="74.2574257"
            height="74.2574257"
            fill="white"
          />
        </defs>
        <g
          id="Template"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="9.3-Marketing-Modal"
            transform="translate(-628.000000, -466.000000)"
          >
            <g id="Modal" transform="translate(378.000000, 396.000000)">
              <g id="illustration" transform="translate(250.000000, 70.000000)">
                <path
                  d="M99.5334653,50.199901 C99.5334653,46.9474257 98.4859406,43.8305941 96.5829703,40.939505 C97.2354455,37.540495 97.009703,34.260297 95.7651485,31.2553465 C94.5205941,28.250396 92.360198,25.7711881 89.4958416,23.8286139 C88.7968317,20.4385149 87.3334653,17.4939604 85.0334653,15.1939604 C82.7334653,12.8949505 79.789901,11.4305941 76.399802,10.7325743 C74.4572277,7.86821782 71.9780198,5.70782178 68.9730693,4.46326733 C65.9681188,3.21871287 62.6879208,2.9939604 59.2889109,3.64544554 C56.3978218,1.74148515 53.2809901,0.694950495 50.0285149,0.694950495 C46.7760396,0.694950495 43.6592079,1.74148515 40.7681188,3.64544554 C37.3691089,2.9939604 34.0889109,3.21871287 31.0839604,4.46326733 C28.0790099,5.70782178 25.6007921,7.86821782 23.6572277,10.7325743 C20.2671287,11.4305941 17.3235644,12.8949505 15.0235644,15.1939604 C12.7235644,17.4939604 11.260198,20.4385149 10.5611881,23.8286139 C7.69683168,25.7711881 5.53643564,28.250396 4.29188119,31.2553465 C3.04732673,34.260297 2.82158416,37.539505 3.47405941,40.939505 C1.57108911,43.8305941 0.523564356,46.9474257 0.523564356,50.199901 C0.523564356,53.4523762 1.57108911,56.5692079 3.47405941,59.460297 C2.82158416,62.8593069 3.04732673,66.139505 4.29188119,69.1444554 C5.53643564,72.1494059 7.69683168,74.6276238 10.5611881,76.570198 C11.260198,79.9612871 12.7235644,82.9048515 15.0235644,85.2048515 C17.3235644,87.5048515 20.2671287,88.9682178 23.6572277,89.6662376 C25.6007921,92.5315842 28.0790099,94.6919802 31.0839604,95.9365347 C34.0889109,97.1810891 37.3691089,97.4058416 40.7681188,96.7543564 C43.6592079,98.6573267 46.7760396,99.7048515 50.0285149,99.7048515 C53.2809901,99.7048515 56.3978218,98.6573267 59.2889109,96.7543564 C62.6879208,97.4058416 65.9681188,97.1810891 68.9730693,95.9365347 C71.9780198,94.6909901 74.4572277,92.5315842 76.399802,89.6662376 C79.789901,88.9682178 82.7334653,87.5048515 85.0334653,85.2048515 C87.3334653,82.9048515 88.7968317,79.9612871 89.4958416,76.5711881 C92.360198,74.6286139 94.5205941,72.1494059 95.7651485,69.1444554 C97.009703,66.139505 97.2354455,62.8593069 96.5829703,59.460297 C98.4859406,56.5692079 99.5334653,53.4523762 99.5334653,50.199901"
                  id="path"
                  fill="#C1E4FE"
                />
                <path
                  d="M91.6127723,50.199802 C91.6127723,73.1661386 72.9949505,91.7839604 50.0286139,91.7839604 C27.0622772,91.7839604 8.44445545,73.1661386 8.44445545,50.199802 C8.44445545,27.2334653 27.0622772,8.61564356 50.0286139,8.61564356 C72.9949505,8.61564356 91.6127723,27.2334653 91.6127723,50.199802"
                  id="path"
                  fill="#2B81CB"
                />
                <use
                  id="path"
                  stroke="#4EB7F5"
                  mask="url(#mask-2)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1,3"
                />
                <polyline
                  id="path"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  points="34.0063366 50.0221782 46.5736634 64.6647525 66.6815842 34.9617822"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        <Cell>
          <MessageBoxMarketerialLayout
            onClose={() => console.log('onClose')}
            title="Nice! Your site is set up"
            content="Next, connect your business email, chat and more to look professional. Keep Going"
            confirmText="Show Me"
            imageUrl="https://static.wixstatic.com/media/25125b_fde50458cc6746c79267182c4b4592e0~mv2.gif"
            theme="white"
            primaryButtonLabel="Button"
            primaryButtonTheme="blue"
          />
        </Cell>
        <Cell>
          <MessageBoxMarketerialLayout
            onClose={() => console.log('onClose')}
            title="Looking good! Your site is on Google"
            content="All of your pages are indexed and now come up as separate search results on Google. This is great for your visibility!"
            confirmText="Preview"
            imageComponent={marketingModalSvg}
            theme="blue"
            primaryButtonLabel="Preview"
            secondaryButtonLabel="Go Back"
          />
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

class ModalPreviewLayoutExample extends PureComponent {
  state = {
    isModalOpened: false,
  };

  toggleModalDisplay = () => {
    const { isModalOpened } = this.state;
    this.setState({ isModalOpened: !isModalOpened });
  };

  render() {
    const symbol = modalsSymbols.preview;
    const components = modalsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    const { isModalOpened } = this.state;

    const modalPreviewActions = (
      <Box verticalAlign="middle">
        <Box marginRight={2}>
          <TextButton size="small" skin="light" prefixIcon={<Print />}>
            Print
          </TextButton>
        </Box>
        <Box marginRight={2}>
          <Button priority="secondary" size="small" skin="light">
            Send
          </Button>
        </Box>
        <IconButton priority="secondary" size="small" skin="light">
          <More />
        </IconButton>
      </Box>
    );

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Button onClick={this.toggleModalDisplay}>
          Open Modal Preview Layout
        </Button>
        <Modal isOpen={isModalOpened}>
          <ModalPreviewLayout
            title="Modal with Scrollable Content"
            actions={modalPreviewActions}
            onClose={this.toggleModalDisplay}
          >
            <Box>
              <img src={ascendInvoice} />
            </Box>
          </ModalPreviewLayout>
        </Modal>
      </SingleComponentSideBySide>
    );
  }
}

const ModalMobileLayoutExample = () => {
  const symbol = modalsSymbols.mobile;
  const components = modalsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.MODALS, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };
  return (
    <SingleComponentSideBySide {...singleComponentProps}>
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
          </Box>
        }
        onCloseButtonClick={() => {}}
      />
    </SingleComponentSideBySide>
  );
};

const ModalFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <AlertExamples />
    <CustomModalExample />
    <MarketingExample />
    <ModalPreviewLayoutExample />
    <ModalMobileLayoutExample />
  </FamilyStructure>
);

export default ModalFamily;
