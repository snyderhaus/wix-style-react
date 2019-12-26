import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  singleComponentSizes,
} from '../sharedComponents';

import { buttonsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/buttonsFamily';

import { createLinkedComponentsNames } from '../sharedComponents/utils';

import {
  buttonsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//Assets
import More from 'wix-ui-icons-common/More';
import { Layout, Cell } from 'wix-style-react/Layout';
import Box from 'wix-style-react/Box';

//5. Button
import Button from 'wix-style-react/Button';
import IconButton from 'wix-style-react/IconButton';
import TextButton from 'wix-style-react/TextButton';
import CloseButton from 'wix-style-react/CloseButton';
import AddItem from 'wix-style-react/AddItem';

const groupSymbol = symbolsGroup.buttons;

const ButtonsExamples = () => {
  const PrimarySkinsExamples = () => (
    <Layout cols={6} gap="10px" alignItems="center">
      <Button>Standard</Button>
      <Button skin="premium">Premium</Button>
      <Box backgroundColor="D10" padding="3px">
        <Button skin="light" fullWidth>
          Light
        </Button>
      </Box>
      <Box backgroundColor="B20" padding="3px">
        <Button skin="transparent">Transparent</Button>
      </Box>
      <Button skin="dark">Dark</Button>
      <Button skin="destructive">Destructive</Button>
    </Layout>
  );

  const SecondarySkinsExamples = () => {
    const firstRowExamples = (
      <Layout cols={6} gap="10px" alignItems="center">
        <Button priority="secondary">Standard</Button>
        <Button priority="secondary" skin="premium">
          Premium
        </Button>
        <Box backgroundColor="D10" padding="3px">
          <Button priority="secondary" skin="light" fullWidth>
            Light
          </Button>
        </Box>
        <Box backgroundColor="B20" padding="3px">
          <Button priority="secondary" skin="transparent">
            Transparent
          </Button>
        </Box>
        <Box backgroundColor="Y30" padding="3px">
          <Button priority="secondary" skin="dark" fullWidth>
            Dark
          </Button>
        </Box>
        <Button priority="secondary" skin="destructive">
          Destructive
        </Button>
      </Layout>
    );

    const secondRowExamples = (
      <Layout cols={6} gap="10px" justifyItems="center">
        <Button skin="inverted">Inverted</Button>
        <Box backgroundColor="D10" padding="3px">
          <Button priority="secondary" skin="premium-light" fullWidth>
            PremiumLight
          </Button>
        </Box>
      </Layout>
    );

    return (
      <Layout>
        <Cell>{firstRowExamples}</Cell>
        <Cell>{secondRowExamples}</Cell>
      </Layout>
    );
  };

  const symbol = buttonsSymbols.button;
  const components = buttonsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        <Cell>
          <PrimarySkinsExamples />
        </Cell>
        <Cell>
          <SecondarySkinsExamples />
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const IconButtonExamples = () => {
  const symbol = buttonsSymbols.iconButton;
  const components = buttonsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={6} gap={0} justifyItems="center" alignItems="center">
        <IconButton>
          <More />
        </IconButton>
        <IconButton skin="premium">
          <More />
        </IconButton>
        <Box padding={1} backgroundColor="D10">
          <IconButton skin="light">
            <More />
          </IconButton>
        </Box>
        <IconButton skin="transparent">
          <More />
        </IconButton>
        <IconButton skin="inverted">
          <More />
        </IconButton>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const TextButtonExamples = () => {
  const symbol = buttonsSymbols.textButton;
  const components = buttonsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={6} justifyItems="center">
        <TextButton>Standard</TextButton>
        <TextButton skin="premium">Premium</TextButton>
        <Box backgroundColor="D10">
          <TextButton skin="light">Light</TextButton>
        </Box>
        <Box backgroundColor="Y30">
          <TextButton skin="dark">Dark</TextButton>
        </Box>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const CloseButtonExamples = () => {
  const symbol = buttonsSymbols.closeButton;
  const components = buttonsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={6} justifyItems="center" alignItems="center">
        <CloseButton />
        <CloseButton skin="standardFilled" />
        <Box backgroundColor="D10">
          <CloseButton skin="light" />
        </Box>
        <CloseButton skin="transparent" />
        <Box backgroundColor="Y30">
          <CloseButton skin="dark" />
        </Box>
        <Box backgroundColor="B20">
          <CloseButton skin="lightFilled" />
        </Box>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const AddItemExample = () => {
  const symbol = buttonsSymbols.addItem;
  const components = buttonsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <AddItem>Add New Item</AddItem>
    </SingleComponentSideBySide>
  );
};

const ButtonFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <ButtonsExamples />
    <IconButtonExamples />
    <TextButtonExamples />
    <CloseButtonExamples />
    <AddItemExample />
  </FamilyStructure>
);

export default ButtonFamily;
