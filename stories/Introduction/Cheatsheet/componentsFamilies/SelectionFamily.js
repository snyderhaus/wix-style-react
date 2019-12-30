import React, { PureComponent } from 'react';
import {
  NotDeveloped,
  FamilyStructure,
  SingleComponentSideBySide,
  singleComponentSizes,
} from '../sharedComponents';

import { selectionSymbolsToComponents } from '../../../symbolsComponentsMapping/families/selectionFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  selectionSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//4. Selection
import Dropdown from 'wix-style-react/Dropdown';
import MultiSelectCheckbox from 'wix-style-react/MultiSelectCheckbox';
import Checkbox from 'wix-style-react/Checkbox';
import RadioGroup from 'wix-style-react/RadioGroup';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';
import SegmentedToggle from 'wix-style-react/SegmentedToggle';
import Thumbnail from 'wix-style-react/Thumbnail';
import Slider from 'wix-style-react/Slider';
import FormField from 'wix-style-react/FormField';

//Assets
import LockLocked from 'wix-ui-icons-common/LockLocked';
import LockUnlocked from 'wix-ui-icons-common/LockUnlocked';
import { Layout, Cell } from 'wix-style-react/Layout';
import Box from 'wix-style-react/Box';
import { Category } from '../../../storiesHierarchy';

const groupSymbol = symbolsGroup.selection;

const DropdownExample = () => {
  const symbol = selectionSymbols.dropdown;
  const components = selectionSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  const dropdownOptions = [1, 2, 3].map(val => ({
    id: val,
    value: val,
  }));

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <FormField id="formfieldDropdownId" label="Dropdown">
        <Dropdown id="formfieldDropdownId" options={dropdownOptions} />
      </FormField>
    </SingleComponentSideBySide>
  );
};

class MultiSelectDropdownExample extends PureComponent {
  state = { selectedOptions: [] };

  removeSelectedItem = optionId => {
    let selectedOptions = [...this.state.selectedOptions];
    selectedOptions = selectedOptions.filter(id => id !== optionId);
    this.setState({ selectedOptions });
  };

  addSelectedItem = optionId => {
    const selectedOptions = [...this.state.selectedOptions];
    selectedOptions.push(optionId);
    this.setState({ selectedOptions });
  };

  render() {
    const multiSelectOptions = ['a', 'b', 'c'].map(val => ({
      id: val,
      value: val,
    }));

    const { selectedOptions } = this.state;

    const symbol = selectionSymbols.multiSelectDropdown;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
      size: singleComponentSizes.compact,
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField
          id="formfieldMultiSelectDropdownId"
          label="Multi Select Dropdown"
        >
          <MultiSelectCheckbox
            id="formfieldMultiSelectDropdownId"
            onSelect={optionId => this.addSelectedItem(optionId)}
            onDeselect={optionId => this.removeSelectedItem(optionId)}
            options={multiSelectOptions}
            selectedOptions={selectedOptions}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class CheckboxExample extends PureComponent {
  state = {
    value: false,
  };

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.checkbox;
    const components = selectionSymbolsToComponents[symbol];

    const checkboxProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...checkboxProps}>
        <FormField
          id="formfieldCheckboxId"
          infoContent="I help you to fill info"
          label="Checkbox"
          labelPlacement="right"
          stretchContent={false}
          required
        >
          <Checkbox
            id="formfieldCheckboxId"
            checked={value}
            onChange={e => this.setState({ value: e.target.checked })}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class RadioExample extends PureComponent {
  state = { value: 1 };

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.radio;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField id="formfieldRadioGroupId" label="Radio Group">
          <RadioGroup
            id="formfieldRadioGroupId"
            onChange={value => this.setState({ value })}
            size="medium"
            value={value}
          >
            <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
            <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
            <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
          </RadioGroup>
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class ToggleExample extends PureComponent {
  state = {
    value: false,
  };

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.toggle;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField
          id="formfieldToggleSwitchId"
          infoContent="I help you to fill info"
          label="Toggle"
          labelPlacement="right"
          stretchContent={false}
          required
        >
          <ToggleSwitch
            id="formfieldToggleSwitchId"
            checked={value}
            onChange={e => this.setState({ value: e.target.checked })}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

const SegmentedToggleExample = () => {
  const symbol = selectionSymbols.segmentedToggle;
  const components = selectionSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.SELECTION, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <FormField id="formfieldSegmentedToggleId" label="Segmented Toggle">
        <Box>
          <SegmentedToggle
            defaultSelected="option 1"
            id="formfieldSegmentedToggleId"
          >
            <SegmentedToggle.Icon value="option" tooltipText="Locked">
              <LockLocked />
            </SegmentedToggle.Icon>
            <SegmentedToggle.Icon value="option2" tooltipText="Unlocked">
              <LockUnlocked />
            </SegmentedToggle.Icon>
          </SegmentedToggle>
        </Box>
      </FormField>
    </SingleComponentSideBySide>
  );
};

class ThumbnailWithTitleExample extends PureComponent {
  state = { selected: 1 };

  render() {
    const { selected } = this.state;

    return (
      <Layout gap="12px">
        {[1, 2, 3].map(n => (
          <Cell key={`title-thumbnail-cell-${n}`} span={3}>
            <Thumbnail
              key={`title-thumbnail-${n}`}
              title="Thumbnail"
              selected={selected === n}
              onClick={() => this.setState({ selected: n })}
            />
          </Cell>
        ))}
      </Layout>
    );
  }
}

class ListSmallThumbnailaExmaple extends PureComponent {
  state = { selected: 1 };

  render() {
    const { selected } = this.state;
    return (
      <Layout gap="12px">
        {[1, 2, 3].map(n => (
          <Cell key={`list-thumbnail-cell-${n}`} span={1}>
            <Thumbnail
              key={`list-thumbnail-${n}`}
              title="Thumbnail Title"
              selected={selected === n}
              description="Description here"
              image="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_234,h_72/c78d05b79ede429fb77c9d8ec4443b93.jpg"
              onClick={() => this.setState({ selected: n })}
              width="170px"
            />
          </Cell>
        ))}
      </Layout>
    );
  }
}

const ThumbnailSelectExamples = () => {
  const symbol = selectionSymbols.thumbnailSelect;
  const components = selectionSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Box marginBottom="30px">
        <ThumbnailWithTitleExample />
      </Box>
      <ListSmallThumbnailaExmaple />
    </SingleComponentSideBySide>
  );
};

/* This Box component was added due to an issue with the Slider */
/* https://github.com/wix/wix-style-react/issues/3741 */
class SliderExample extends PureComponent {
  state = { value: [2, 4] };

  onSliderChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.slider;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: createLinkedSymbolName({ groupSymbol: Category.SELECTION, symbol }),
      componentsNames: createLinkedComponentsNames(components),
      size: singleComponentSizes.compact,
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField id="formfieldSliderId" label="Slider Label">
          <Slider
            id="formfieldSliderId"
            onChange={this.onSliderChange}
            min={1}
            max={10}
            value={value}
            displayMarks
          />
        </FormField>
        <Box marginBottom="50px" />
      </SingleComponentSideBySide>
    );
  }
}

const CheckToggleExample = () => {
  const symbol = selectionSymbols.checkToggle;
  const components = selectionSymbolsToComponents[symbol];

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

const SelectionFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <DropdownExample />
    <MultiSelectDropdownExample />
    <CheckboxExample />
    <RadioExample />
    <ToggleExample />
    <SegmentedToggleExample />
    <ThumbnailSelectExamples />
    <SliderExample />
    <CheckToggleExample />
  </FamilyStructure>
);

export default SelectionFamily;
