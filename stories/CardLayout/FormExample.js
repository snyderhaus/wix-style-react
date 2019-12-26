/* eslint-disable */

import React from 'react';
import { Container, Row, Col } from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';
import IconButton from 'wix-style-react/IconButton';
import Input from 'wix-style-react/Input';
import FormField from 'wix-style-react/FormField';
import Heading from 'wix-style-react/Heading';
import ImageViewer from 'wix-style-react/ImageViewer';
import InputArea from 'wix-style-react/InputArea';
import Box from 'wix-style-react/Box';
import Checkbox from 'wix-style-react/Checkbox';

class FormExample extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header
                title="Card title"
                subtitle="This is how a subtitle looks like"
                suffix={
                  <IconButton skin="inverted">
                    <Icons.More />
                  </IconButton>
                }
              />
              <Card.Content>
                <Container fluid>
                  <Row>
                    <Col>
                      <Heading appearance="H6">Section 1</Heading>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={4}>
                      <FormField label="Image">
                        <ImageViewer width="100%" height="186px" />
                      </FormField>
                    </Col>
                    <Col span={8}>
                      <Row>
                        <Col span={6}>
                          <FormField label="Name">
                            <Input
                              value="My New Dish"
                              prefix={<Input.Affix>$</Input.Affix>}
                            />
                          </FormField>
                        </Col>
                        <Col span={3}>
                          <FormField label="Price">
                            <Input
                              value="0"
                              prefix={<Input.Affix>$</Input.Affix>}
                            />
                          </FormField>
                        </Col>
                        <Col span={3}>
                          <FormField label="Tax">
                            <Input
                              value="0"
                              prefix={<Input.Affix>%</Input.Affix>}
                            />
                          </FormField>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormField label="Description">
                            <InputArea
                              placeholder="Enter your dish details"
                              resizable
                              rows={3}
                            />
                          </FormField>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Card.Content>
              <Card.Divider />
              <Card.Content>
                <Container fluid>
                  <Row>
                    <Col span={6}>
                      <FormField
                        label="Labels"
                        infoContent="Choose your preferences"
                      >
                        <Row>
                          <Col span={6}>
                            <Box direction="vertical">
                              <Box marginBottom="12px">
                                <Checkbox>Special</Checkbox>
                              </Box>
                              <Box marginBottom="12px">
                                <Checkbox>Vegan</Checkbox>
                              </Box>
                              <Checkbox>Vegeterian</Checkbox>
                            </Box>
                          </Col>
                          <Col span={6}>
                            <Box direction="vertical">
                              <Box marginBottom="12px">
                                <Checkbox>Gluten Free</Checkbox>
                              </Box>
                              <Box marginBottom="12px">
                                <Checkbox>Organic</Checkbox>
                              </Box>
                              <Checkbox>Spicy</Checkbox>
                            </Box>
                          </Col>
                        </Row>
                      </FormField>
                    </Col>
                    <Col span={3}>
                      <FormField label="Visibility">
                        <Checkbox checked>Show to Customers</Checkbox>
                      </FormField>
                    </Col>
                    <Col span={3}>
                      <FormField label="Inventory">
                        <Checkbox checked>In Stock</Checkbox>
                      </FormField>
                    </Col>
                  </Row>
                </Container>
              </Card.Content>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
