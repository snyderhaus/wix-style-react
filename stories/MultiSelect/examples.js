export const importExample = `
import FormField from 'wix-style-react/FormField';
import MultiSelect from 'wix-style-react/MultiSelect';
`;

export const size = `
<Layout cols={1}>
    <Cell>
        <FormField label="Small">
        <MultiSelect
            size="small"
            tags={[{size: "tiny", id: 1, label: "tag 1"},{size: "tiny", id: 2, label: "tag 2"}]}
        />
        </FormField>
    </Cell>
    <Cell>
        <FormField label="Medium">
        <MultiSelect
            tags={[
                {id: 1, label: "tag 1", thumb:(<Avatar name="Sarah" size="size18"/>)},
                {id: 2, label: "tag 2", thumb:(<Avatar name="Sarah" size="size18"/>)}
            ]}
        />
        </FormField>
    </Cell>
    <Cell>
        <FormField label="Large">
        <MultiSelect
            size="large"
            tags={[
                {size: "large", id: 1, label: "tag 1", thumb:(<Avatar name="Sarah" size="size24"/>)},
                {size: "large", id: 2, label: "tag 2", thumb:(<Avatar name="Hanks" size="size24"/>)}
            ]}
        />
        </FormField>
    </Cell>
</Layout>
`;

export const mode = `
<Layout cols={1}>
    <Cell>
        <FormField label="Select a value">
            <MultiSelect
                mode="select"
                options={[
                    {id: 1, value: 'tag 1'},{id: 2, value: 'tag 2'},
                ]}
                placeholder="Choose from a list"
            />
        </FormField>
    </Cell>
    <Cell>
        <FormField label="Enter a value">
            <MultiSelect
                options={[
                    {id: 1, value: 'tag 1'},{id: 2, value: 'tag 2'},
                ]}
                placeholder="Enter or choose from a list"
            />
        </FormField>
    </Cell>
</Layout>
`;

export const customValues = `
<FormField label="Enter the keywords">
    <MultiSelect
        options={[
            {id: 1, value: 'Traveling'},{id: 2, value: 'Cooking'},{id: 3, value: 'Opinions'},
        ]}
        placeholder="Create new keywords or select existing options from a list"
    />
</FormField>
`;

export const action = `
<FormField label="Tag input">
    <MultiSelect
        options={[
            {id: 1, value: 'tag 1'},{id: 2, value: 'tag 2'},{id: 3, value: 'tag 3'},
        ]}
        customSuffix={<TextButton prefixIcon={<Icons.Add />}>New Tag</TextButton>}
    />
</FormField>
`;

export const required = `
<FormField label="Tag input" required>
    <MultiSelect
        options={[
            {id: 1, value: 'tag 1'},{id: 2, value: 'tag 2'},{id: 3, value: 'tag 3'},
        ]}
        placeholder="Enter the tags"
    />
</FormField>
`;

export const labelPosition = `
<Layout>
  <Cell>
    <FormField label="On the top" infoContent="Tooltip text" required>
        <MultiSelect placeholder="Placeholder" />
    </FormField>
  </Cell>
  <Cell>
    <FormField label="At the start" infoContent="Tooltip text" labelPlacement="left" required >
        <MultiSelect placeholder="Placeholder" />
    </FormField>
  </Cell>
  <Cell>
    <FormField infoContent="Tooltip text" required >
        <MultiSelect placeholder="Placeholder" />
    </FormField>
  </Cell>
</Layout>
`;

export const reordable = `
class ExampleReorderable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      options: [
        { id: '1', name: 'One', value: 'One' },
        { id: '2', name: 'Two', value: 'Two' },
        { id: '3', name: 'Three', value: 'Three' },
      ],
      inputValue: '',
    };

    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnRemoveTag = this.handleOnRemoveTag.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSelect(option) {
    const newTag = {
      id: option.id,
      label: <span>{option.name}</span>,
    };
    this.setState({ tags: [...this.state.tags, newTag] });
  }

  handleOnRemoveTag(tagId) {
    this.setState({
      tags: this.state.tags.filter(currTag => currTag.id !== tagId),
    });
  }

  handleOnChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { tags, options } = this.state;
    return (
    <FormField label="Reorderable Numbers">
      <MultiSelect
        mode="select"
        dataHook="multi-select-reorderable"
        tags={this.state.tags}
        onSelect={this.handleOnSelect}
        onRemoveTag={this.handleOnRemoveTag}
        onReorder={({ addedIndex, removedIndex }) => {
          const nextTags = tags.slice();
          nextTags.splice(addedIndex, 0, ...nextTags.splice(removedIndex, 1));
          this.setState({
            tags: nextTags,
          });
        }}
        value={this.state.inputValue}
        onChange={this.handleOnChange}
        options={options}
        customSuffix={<TextButton>+ Add Tag</TextButton>}
        upgrade
      />
      </FormField>
    );
  }
}
`;
