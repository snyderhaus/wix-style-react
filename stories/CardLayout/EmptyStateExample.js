/* eslint-disable */

import React from 'react';
import { Container, Row, Col } from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';
import Button from 'wix-style-react/Button';
import TextButton from 'wix-style-react/TextButton';
import EmptyState from 'wix-style-react/EmptyState';

class EmptyStateExample extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header
                title="Card title"
                suffix={<Button prefixIcon={<Icons.Add />}>New Item</Button>}
              />
              <Card.Content>
                <EmptyState
                  title="You don't have any items yet"
                  subtitle="Create your product item in an easy & fast way to display it on your site"
                  theme="section"
                >
                  <TextButton prefixIcon={<Icons.Add />}>New Item</TextButton>
                </EmptyState>
              </Card.Content>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
