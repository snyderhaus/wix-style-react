import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentStacked,
  NotDefined,
  NotDeveloped,
  Preview,
  singleComponentSizes,
} from '../sharedComponents';

import { contentWidgetsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/contentWidgetsFamily';

import { createLinkedComponentsNames } from '../sharedComponents/utils';

import {
  contentWidgetsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//Assets
import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';
import CardGalleryItem from 'wix-style-react/CardGalleryItem';
import Badge from 'wix-style-react/Badge';
import { Container, Row, Col } from 'wix-style-react/Grid';
import Hint from 'wix-ui-icons-common/Hint';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import Card from 'wix-style-react/Card';
import DropdownBase from 'wix-style-react/DropdownBase';
import TextButton from 'wix-style-react/TextButton';

// 12. Content Widgets
import EmptyState from 'wix-style-react/EmptyState';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';
import Carousel from 'wix-style-react/Carousel';
import Accordion from 'wix-style-react/Accordion';
import PreviewWidget from 'wix-style-react/PreviewWidget';
import MobilePreviewWidget from 'wix-style-react/MobilePreviewWidget';
import BrowserPreviewWidget from 'wix-style-react/BrowserPreviewWidget';

const groupSymbol = symbolsGroup.contentWidgets;

const ImageWidgetExample = () => {
  const symbol = contentWidgetsSymbols.imageWidget;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDefined />
    </SingleComponentStacked>
  );
};

const EmptyStateExample = () => {
  const symbol = contentWidgetsSymbols.emptyState;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCard stretch>
        <EmptyState
          image={
            <Box
              height="120px"
              width="120px"
              backgroundColor="D60"
              borderRadius="50%"
            />
          }
          subtitle="Create your product item in an easy & fast way to display it on your site"
          title="You don't have any items yet"
        />
      </Preview>
    </SingleComponentStacked>
  );
};

class StatisticsWidgetExamples extends PureComponent {
  state = { date: '7d', filter: 'All' };

  _getSuffix() {
    return [
      <DropdownBase
        key="days"
        onSelect={({ id }) => this.setState({ date: id })}
        options={[
          { id: '7d', value: 'Last 7 days' },
          { id: '14d', value: 'Last 14 days' },
        ]}
      >
        {({ toggle, selectedOption = { id: '7d', value: 'Last 7 days' } }) => {
          return (
            <TextButton
              skin="dark"
              suffixIcon={<ChevronDown />}
              onClick={toggle}
            >
              {selectedOption.value}
            </TextButton>
          );
        }}
      </DropdownBase>,
      <Box key="spacer" width="24px" />,
      <DropdownBase
        key="region"
        onSelect={({ id }) => this.setState({ filter: id })}
        options={[
          { id: 'US', value: 'Only from US' },
          { id: 'All', value: 'All' },
        ]}
      >
        {({ toggle, selectedOption = { id: 'All', value: 'All' } }) => {
          return (
            <TextButton
              skin="dark"
              suffixIcon={<ChevronDown />}
              onClick={toggle}
            >
              {selectedOption.value}
            </TextButton>
          );
        }}
      </DropdownBase>,
    ];
  }

  render() {
    const weekUS = [
      {
        value: '500',
        description: 'Views',
        percentage: 21,
        onClick: () => {},
      },
      {
        value: '350',
        description: 'Unique visits',
        percentage: 21,
      },
      {
        value: '3.9',
        description: 'Pages per visitor',
        percentage: -11,
      },
      {
        value: '$3,500',
        description: 'Revenue',
        percentage: -11,
        descriptionInfo: 'Revenue in 7 days',
        onClick: () => {},
      },
      {
        value: '0',
        description: 'Shares',
        percentage: 0,
        descriptionInfo: 'Shares in 7 days',
        onClick: () => {},
      },
    ];

    const twoWeeksUS = [
      {
        value: '700',
        description: 'Views',
        percentage: 19,
        onClick: () => {},
      },
      {
        value: '500',
        description: 'Unique visits',
        percentage: 21,
      },
      {
        value: '3.2',
        description: 'Pages per visitor',
        percentage: -11,
      },
      {
        value: '$5,700',
        description: 'Revenue',
        percentage: -11,
        descriptionInfo: 'Revenue in 14 days',
        onClick: () => {},
      },
      {
        value: '0',
        description: 'Shares',
        percentage: 0,
        descriptionInfo: 'Shares in 14 days',
        onClick: () => () => {},
      },
    ];

    const weekAll = [
      {
        value: '1200',
        description: 'Views',
        percentage: 21,
        onClick: () => {},
      },
      {
        value: '900',
        description: 'Unique visits',
        percentage: 21,
      },
      {
        value: '4.1',
        description: 'Pages per visitor',
        percentage: 2,
      },
      {
        value: '$5,200',
        description: 'Revenue',
        percentage: 7,
        descriptionInfo: 'Revenue in 7 days',
        onClick: () => {},
      },
      {
        value: '3',
        description: 'Shares',
        percentage: 100,
        descriptionInfo: 'Shares in 7 days',
        onClick: () => {},
      },
    ];

    const twoWeeksAll = [
      {
        value: '1300',
        description: 'Views',
        percentage: 29,
        onClick: () => {},
      },
      {
        value: '1100',
        description: 'Unique visits',
        percentage: 14,
      },
      {
        value: '3.2',
        description: 'Pages per visitor',
        percentage: -1,
      },
      {
        value: '$6,400',
        description: 'Revenue',
        percentage: 11,
        descriptionInfo: 'Revenue in 14 days',
        onClick: () => {},
      },
      {
        value: '8',
        description: 'Shares',
        percentage: 95,
        descriptionInfo: 'Shares in 14 days',
        onClick: () => {},
      },
    ];

    const data = {
      '7d': {
        US: weekUS,
        All: weekAll,
      },
      '14d': {
        US: twoWeeksUS,
        All: twoWeeksAll,
      },
    };

    const getData = (date, filter) => data[date][filter];
    const { date, filter } = this.state;

    const symbol = contentWidgetsSymbols.statisticsWidget;
    const components = contentWidgetsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentStacked {...singleComponentProps}>
        <Preview stretch>
          <Card>
            <Card.Header
              title="Article performance"
              suffix={this._getSuffix()}
            />
            <Card.Content>
              <StatisticsWidget items={getData(date, filter)} />
            </Card.Content>
          </Card>
        </Preview>
      </SingleComponentStacked>
    );
  }
}

const CarouselExample = () => {
  const carouselItems = ['first', 'second', 'third'].map((ordinalNum, i) => (
    <Card key={`carousel-item-${i}`}>
      <Box height="66px" align="center" verticalAlign="middle">
        <Hint size="54px" color="#89cff8" />
        <Text>This is the {ordinalNum} information text </Text>
      </Box>
    </Card>
  ));

  const symbol = contentWidgetsSymbols.carousel;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Carousel>{carouselItems}</Carousel>
      </Preview>
    </SingleComponentStacked>
  );
};

const AccordionExample = () => {
  const itemText = (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </Text>
  );

  const accordionItems = [
    {
      title: 'First Initially Open Row',
      children: itemText,
      open: true,
      collapseLabel: 'Less',
    },
    {
      title: 'Second Row',
      children: itemText,
      collapseLabel: 'Less',
    },
    {
      title: 'Third Row',
      children: itemText,
      collapseLabel: 'Less',
    },
  ];

  const symbol = contentWidgetsSymbols.accordion;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Accordion multiple items={accordionItems} />
      </Preview>
    </SingleComponentStacked>
  );
};

const CardGalleryItemExample = () => {
  const backgroundImageUrl =
    'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

  const symbol = contentWidgetsSymbols.cardGalleryItem;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Container>
        <Row>
          <Col span={5}>
            <Preview stretch>
              <CardGalleryItem
                title="Scheduled on Facebook"
                badge={
                  <Badge size="medium" skin="standard" type="solid" uppercase>
                    scheduled
                  </Badge>
                }
                subtitle="For Jan 30, 2019 (05:06 PM)"
                primaryActionProps={{
                  label: 'Edit Post',
                  onClick: () => {
                    alert('Primary action clicked');
                  },
                }}
                backgroundImageUrl={backgroundImageUrl}
              />
            </Preview>
          </Col>
        </Row>
      </Container>
    </SingleComponentStacked>
  );
};

const PreviewExample = () => {
  const symbol = contentWidgetsSymbols.preview;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Container>
        <Row>
          <Col span={5}>
            <PreviewWidget>
              <Box padding="20px" backgroundColor="Y30">
                <Text>Content goes here</Text>
              </Box>
            </PreviewWidget>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <BrowserPreviewWidget browserBarSize="size9">
              <Box padding="20px" backgroundColor="Y30">
                <Text>Content goes here</Text>
              </Box>
            </BrowserPreviewWidget>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <MobilePreviewWidget>
              <Box
                align="center"
                verticalAlign="middle"
                height="100%"
                backgroundColor="Y30"
              >
                <Text>Content goes here</Text>
              </Box>
            </MobilePreviewWidget>
          </Col>
        </Row>
      </Container>
    </SingleComponentStacked>
  );
};

const OmniSetupExample = () => {
  const symbol = contentWidgetsSymbols.omniSetup;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDeveloped />
    </SingleComponentStacked>
  );
};

const ContentWidgetsFamily = () => (
  <FamilyStructure title={groupSymbol}>
    <ImageWidgetExample />
    <EmptyStateExample />
    <StatisticsWidgetExamples />
    <CarouselExample />
    <AccordionExample />
    <CardGalleryItemExample />
    <PreviewExample />
    <OmniSetupExample />
  </FamilyStructure>
);

export default ContentWidgetsFamily;
