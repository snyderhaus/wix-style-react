import React from 'react';

import ModalMobileLayout from 'wix-style-react/ModalMobileLayout';
import Button from 'wix-style-react/Button';
import Box from 'wix-style-react/Box';
import Modal from 'wix-style-react/Modal';
import Text from 'wix-style-react/Text';

class Plain extends React.Component {
  state = {
    isModalOpen: false,
  };

  render() {
    return (
      <div>
        <Button onClick={this.openModal}>Open</Button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Mobile modal example"
          scrollable={false}
          scrollableContent
        >
          <ModalMobileLayout
            title={<Text weight="bold">Enter VAT ID</Text>}
            content={
              <Text>
                Enter a valid European Union VAT identification number for the
                ‘Reverse Charge’ mechanism in order to apply.
              </Text>
            }
            footer={
              <Box align="right">
                <Box marginRight="12px">
                  <Button priority="secondary" onClick={this.closeModal}>
                    Cancel
                  </Button>
                </Box>
                <Button>OK</Button>
              </Box>
            }
            onOverlayClick={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
}

export default Plain;
