import React from 'react';
import { Category } from '../../../storiesHierarchy';

import {
  FamilyStructure,
  SingleComponentSideBySide,
} from '../sharedComponents';

import { foundationSymbolsToComponents } from '../../../symbolsComponentsMapping/families/foundationFamily';

import {
  createLinkedComponentsNames,
  createLinkedSymbolName,
} from '../sharedComponents/utils';

import {
  foundationSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//1. Foundation
import Text from 'wix-style-react/Text';
import Heading from 'wix-style-react/Heading';

//Icons
import Edit from 'wix-ui-icons-common/Edit';
import Delete from 'wix-ui-icons-common/Delete';
import Confirm from 'wix-ui-icons-common/Confirm';
import Dismiss from 'wix-ui-icons-common/Dismiss';
import More from 'wix-ui-icons-common/More';
import DownloadImport from 'wix-ui-icons-common/DownloadImport';
import Visible from 'wix-ui-icons-common/Visible';
import Attachement from 'wix-ui-icons-common/Attachement';
import ChevronUp from 'wix-ui-icons-common/ChevronUp';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import HeartFilled from 'wix-ui-icons-common/HeartFilled';
import FlagFilled from 'wix-ui-icons-common/FlagFilled';

//Assets
import { Layout, Cell } from 'wix-style-react/Layout';
import Box from 'wix-style-react/Box';
import { capitalize } from '../../../../src/Typography/docs/utils.js';

const groupSymbol = symbolsGroup.foundation;

const TypographyDisplay = ({ children, label }) => (
  <div style={{ padding: '5px' }}>
    {children}
    <Text size="tiny" weight="thin" light secondary>
      {label}
    </Text>
  </div>
);

const TypographyExamples = () => {
  const HeadingExamples = () => {
    const headingVariations = [
      { appearance: 'H1', text: 'Page Title' },
      { appearance: 'H2', text: 'Page Section Title' },
      { appearance: 'H3', text: 'Card Title' },
      { appearance: 'H4', text: 'Card Content Title' },
      { appearance: 'H5', text: 'Card Section Title' },
      { appearance: 'H6', text: 'Caption' },
    ];

    return (
      <Layout>
        {headingVariations.map(({ appearance, text }, i) => (
          <Cell key={`heading-example-${i}`}>
            <TypographyDisplay label={`${appearance}.Dark`}>
              <Heading appearance={appearance}>{text}</Heading>
            </TypographyDisplay>
          </Cell>
        ))}
      </Layout>
    );
  };

  const TextExamples = () => {
    const sizes = {
      medium: 'medium',
      small: 'small',
      tiny: 'tiny',
    };

    const weights = {
      normal: 'normal',
      thin: 'thin',
      bold: 'bold',
    };

    const texts = {
      text1: 'Running Text',
      text2: 'Input fields, buttons, text button',
      text3: 'Emphasized Text',
    };

    const textVariations = {
      [sizes.medium]: [
        { text: texts.text1, weight: weights.thin },
        { text: texts.text2, weight: weights.normal },
        { text: texts.text3, weight: weights.bold },
      ],

      [sizes.small]: [
        { text: texts.text1, weight: weights.thin },
        { text: texts.text2, weight: weights.normal },
        { text: texts.text3, weight: weights.bold },
      ],
      [sizes.tiny]: [
        { text: texts.text1, weight: weights.thin },
        { text: 'Buttons, text buttons', weight: weights.normal },
        { text: texts.text3, weight: weights.bold },
      ],
    };

    return (
      <Layout>
        {Object.keys(textVariations).map(size => (
          <Cell key={`cell-${size}`}>
            {textVariations[size].map(({ text, weight }) => {
              const sizeLabel = capitalize(size);
              const weightLabel = capitalize(weight);

              return (
                <Cell key={`text-${size}-${weight}`}>
                  <TypographyDisplay label={`${sizeLabel} ${weightLabel}`}>
                    <div>
                      <Text size={size} weight={weight}>
                        {text}
                      </Text>
                    </div>
                  </TypographyDisplay>
                </Cell>
              );
            })}
          </Cell>
        ))}
      </Layout>
    );
  };

  const symbol = foundationSymbols.typography;
  const components = foundationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.FOUNDATION, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={2}>
        <HeadingExamples />
        <TextExamples />
      </Layout>
    </SingleComponentSideBySide>
  );
};

const IconsExamples = () => {
  const symbol = foundationSymbols.icons;
  const components = foundationSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.FOUNDATION, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  const iconsArr = [
    <Edit />,
    <Delete />,
    <Confirm />,
    <Dismiss />,
    <More />,
    <DownloadImport />,
    <Visible />,
    <ChevronUp />,
    <ChevronDown />,
    <Attachement />,
    <HeartFilled />,
    <FlagFilled />,
  ];

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={iconsArr.length}>
        {iconsArr.map((icon, i) => (
          <span key={`icon-${i}`}>{icon}</span>
        ))}
      </Layout>
      <Box paddingBottom="30px" />
    </SingleComponentSideBySide>
  );
};

const FoundationFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <TypographyExamples />
    <IconsExamples />
  </FamilyStructure>
);

export default FoundationFamily;
