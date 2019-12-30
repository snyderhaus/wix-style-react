import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  NotDefined,
  NotDeveloped,
  singleComponentSizes,
} from '../sharedComponents';

import { navigationSymbolsToComponents } from '../../../symbolsComponentsMapping/families/navigationFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  navigationSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//Assets
import Button from 'wix-style-react/Button';
import TextButton from 'wix-style-react/TextButton';
import Box from 'wix-style-react/Box';
import CounterBadge from 'wix-style-react/CounterBadge';
import Edit from 'wix-ui-icons-common/Edit';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';

//6. Navigation
import Sidebar, { SidebarItemContextConsumer } from 'wix-style-react/Sidebar';
import SidebarSectionItem from 'wix-style-react/SidebarSectionItem';
import SidebarSectionTitle from 'wix-style-react/SidebarSectionTitle';
import SidebarHeader from 'wix-style-react/SidebarHeader';
import SidebarDivider from 'wix-style-react/SidebarDivider';
import Tabs from 'wix-style-react/Tabs';
import Stepper from 'wix-style-react/Stepper';
import { Category } from '../../../storiesHierarchy';

const groupSymbol = symbolsGroup.navigation;

const SidebarExample = () => {
  const symbol = navigationSymbols.sidebarMenu;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.NAVIGATION, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  const renderUpgradeButton = () => (
    <Box align="center" margin="24px 30px">
      <Button size="small" skin="premium">
        Upgrade
      </Button>
    </Box>
  );

  const renderBackButton = text => (
    <Box margin="18px 24px">
      <TextButton
        prefixIcon={<ChevronLeft />}
        skin="light"
        size="small"
        weight="normal"
      >
        {text}
      </TextButton>
    </Box>
  );

  const renderEditButton = () => (
    <Box align="center" margin="18px 0">
      <TextButton
        prefixIcon={<Edit />}
        skin="light"
        size="small"
        weight="normal"
      >
        Edit Site
      </TextButton>
    </Box>
  );

  const sidebarInnerMenu = [
    <Sidebar.BackButton>{renderBackButton('Main menu')}</Sidebar.BackButton>,

    <SidebarSectionTitle>Apps</SidebarSectionTitle>,

    <Sidebar.Item itemKey={'app-market'}>
      <SidebarItemContextConsumer>
        {({ selected }) => (
          <SidebarSectionItem selected={selected}>
            App Market
          </SidebarSectionItem>
        )}
      </SidebarItemContextConsumer>
    </Sidebar.Item>,

    <SidebarSectionItem
      suffix={
        <CounterBadge skin="danger">
          <FormFieldErrorSmall />
        </CounterBadge>
      }
    >
      Manage Apps
    </SidebarSectionItem>,
  ];

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Box height="700px">
        <Sidebar selectedKey={'dashboard'}>
          <Sidebar.PersistentHeader>
            <Box direction="vertical">
              <SidebarHeader title="Site Name" subtitle="Role: Owner" />
              <SidebarDivider fullWidth />
            </Box>
          </Sidebar.PersistentHeader>

          <Sidebar.Item itemKey={'dashboard'}>
            <SidebarSectionItem>Dashboard</SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.Item itemKey={'video-library'}>
            <SidebarSectionItem>Video Library</SidebarSectionItem>
          </Sidebar.Item>

          <SidebarDivider />

          <SidebarSectionTitle>Ascend by Wix</SidebarSectionTitle>

          <Sidebar.Item itemKey={'customer-management'}>
            <SidebarSectionItem>Customer Management</SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.Item itemKey={'marketing-tools'}>
            <SidebarSectionItem>Marketing Tools</SidebarSectionItem>
          </Sidebar.Item>

          <SidebarDivider />

          <Sidebar.Item itemKey={'settings'}>
            <SidebarSectionItem>Settings</SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.Item itemKey={'apps'} innerMenu={sidebarInnerMenu}>
            <SidebarSectionItem drillable>Apps</SidebarSectionItem>
          </Sidebar.Item>

          <Sidebar.PersistentFooter>
            <Box direction="vertical">
              {renderUpgradeButton()}
              <SidebarDivider fullWidth />
              {renderEditButton()}
            </Box>
          </Sidebar.PersistentFooter>
        </Sidebar>
      </Box>
    </SingleComponentSideBySide>
  );
};

const TreeNavigationExample = () => {
  const symbol = navigationSymbols.treeNavigation;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <NotDefined />
    </SingleComponentSideBySide>
  );
};

class TextTabsExample extends PureComponent {
  state = { activeTab: 1 };

  onTabClick = ({ id }) => this.setState({ activeTab: id });

  render() {
    const tabItems = ['First', 'Second', 'Third'].map((tabText, i) => ({
      title: `${tabText} Item`,
      id: i + 1,
    }));

    const { activeTab } = this.state;

    const symbol = navigationSymbols.textTabs;
    const components = navigationSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
      size: singleComponentSizes.compact,
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Tabs onClick={this.onTabClick} activeId={activeTab} items={tabItems} />
      </SingleComponentSideBySide>
    );
  }
}

const VerticalTabsExample = () => {
  const symbol = navigationSymbols.verticalTabs;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <NotDeveloped />
    </SingleComponentSideBySide>
  );
};

const TopBarExample = () => {
  const symbol = navigationSymbols.topBar;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <NotDefined />
    </SingleComponentSideBySide>
  );
};

const StepperExample = () => {
  const symbol = navigationSymbols.stepper;
  const components = navigationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Stepper
        activeStep={2}
        steps={[
          { text: 'Completed step', type: 'completed' },
          { text: 'Error step', type: 'error' },
          { text: 'Normal step' },
          { text: 'Disabled step', type: 'disabled' },
        ]}
      />
    </SingleComponentSideBySide>
  );
};

const NavigationFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <SidebarExample />
    <TreeNavigationExample />
    <TextTabsExample />
    <VerticalTabsExample />
    <TopBarExample />
    <StepperExample />
  </FamilyStructure>
);

export default NavigationFamily;
